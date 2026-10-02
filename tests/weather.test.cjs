const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync(require('node:path').join(__dirname, '../script.js'), 'utf8');
const now = Date.parse('2026-10-02T13:30:00Z');

function harness(fetch, storage = new Map()) {
  const elements = new Map();
  function element() {
    return { textContent: '', hidden: false, classList: { add() {}, remove() {}, toggle() {} },
      appendChild() {}, addEventListener() {}, setAttribute() {}, dataset: {} };
  }
  class TestDate extends Date {
    constructor(...args) { super(...(args.length ? args : [now])); }
    static now() { return now; }
  }
  const context = vm.createContext({
    fetch, Date: TestDate, Intl, URLSearchParams, AbortController, console,
    navigator: {},
    window: { setTimeout, clearTimeout, localStorage: {
      getItem: key => storage.get(key) || null,
      setItem: (key, value) => storage.set(key, value)
    } },
    document: { createElement: element, querySelector: selector => {
      if (!elements.has(selector)) elements.set(selector, element());
      return elements.get(selector);
    } }
  });
  vm.runInContext(source.replace(/initialize\(\);\s*$/, ''), context);
  // The weather tests leave the independent sunset/geolocation feature out.
  vm.runInContext('const testRenderSunsetLine = renderSunsetLine; renderSunsetLine = async () => {};', context);
  return { run: expression => vm.runInContext(expression, context),
    text: selector => elements.get(selector).textContent, storage };
}

function weather() {
  const end = Math.floor(now / 3600000) * 3600;
  const time = Array.from({ length: 48 }, (_, i) => end + (i - 30) * 3600);
  return { current: { time: now / 1000, temperature_2m: 60, apparent_temperature: 58, wind_speed_10m: 4 },
    hourly: { time, temperature_2m: time.map(() => 59), apparent_temperature: time.map(() => 57),
      wind_speed_10m: time.map(() => 3), precipitation_probability: time.map((_, i) => i),
      precipitation: time.map(() => 0.01) } };
}
const response = data => ({ ok: true, json: async () => data });
const place = (name, state, lon, lat) => ({ properties: { name, state, countrycode: 'US', osm_key: 'leisure' },
  geometry: { type: 'Point', coordinates: [lon, lat] } });

test('real catalog comparison: Madison, Beacon, Caribou use the same rendering and weather path', async () => {
  const urls = [];
  const app = harness(async url => {
    urls.push(new URL(url));
    if (url.startsWith('https://photon')) {
      const q = new URL(url).searchParams.get('q');
      return response({ features: [q === 'Madam Brett Park'
        ? place('Madame Brett Park', 'New York', -73.9741757, 41.4890315)
        : place('Caribou Ranch Open Space', 'Colorado', -105.5389612, 39.9942195)] });
    }
    return response(weather());
  });
  for (const [code, expression, label, tz, length] of [
    ['MAD', 'madisonQuickTrails[0]', 'Conditions at Pheasant Branch Conservancy Trailhead', 'America/Chicago', '~3.5 mi'],
    ['BEA', 'beaconTrails.find(t => t.name === "Madam Brett Park")', 'Conditions near Madam Brett Park', 'America/New_York', '~1.0-2.5 mi'],
    ['NED', 'nederlandTrails.find(t => t.name === "Caribou Ranch Open Space")', 'Conditions near Caribou Ranch Open Space', 'America/Denver', '~4.2 mi']
  ]) {
    await app.run(`switchLocation('${code}'); renderTrail(${expression}, 'quick')`);
    assert.equal(app.text('#weather-status'), label);
    assert.equal(app.text('#trail-length'), length);
    assert.equal(app.text('#temp-value'), '60°F');
    assert.equal(app.text('#rain-total-value'), '0.24 in');
    assert.equal(urls.at(-1).searchParams.get('timezone'), tz);
    assert.equal(urls.at(-1).searchParams.get('timeformat'), 'unixtime');
    assert.doesNotMatch(app.text('#updated-value'), /Invalid/);
  }
  assert.equal(app.text('#coop-drive'), 'Not available');
  assert.equal(app.text('#frosty-drive'), 'Not available');
  const before = urls.filter(url => url.hostname === 'photon.komoot.io').length;
  await app.run('loadWeather(currentTrail)');
  assert.equal(urls.filter(url => url.hostname === 'photon.komoot.io').length, before);
});

test('coordinates reject invalid values and support both existing schemas', () => {
  const app = harness();
  for (const value of ['undefined', 'null', '""', '" "', 'NaN', 'Infinity', 'true', '91']) {
    assert.equal(app.run(`getTrailCoordinates({ latitude: ${value}, longitude: -73 })`), null);
  }
  assert.equal(app.run('getTrailCoordinates({ coordinates: {lat: "0", lon: "0"} }).latitude'), 0);
  assert.equal(app.run('getTrailCoordinates({coordinates: {lat: "bad", lon: 0}, latitude: 40, longitude: -105}).latitude'), 40);
});

test('missing fields across every catalog entry never render undefined or NaN', () => {
  const app = harness();
  const records = app.run('Object.values(locations).flatMap(l => [...new Set(Object.values(l.buckets).flat())])');
  for (const record of records) {
    for (const field of ['coopDrive', 'trailLength', 'postHikeDrive']) {
      const result = app.run(`formatEstimate(${JSON.stringify(record[field]) || 'undefined'})`);
      assert.doesNotMatch(result, /undefined|null|NaN/);
    }
  }
});

test('epoch hours and rolling rainfall are independent of the viewer time zone', () => {
  const app = harness();
  const data = weather();
  assert.equal(app.run(`closestHourlyValue(${JSON.stringify(data.hourly)}, new Date(${now})).rainChance`), 30);
  assert.ok(Math.abs(app.run(`sumPrevious24Hours(${JSON.stringify(data.hourly)})`) - 0.24) < 1e-9);
  data.hourly.precipitation[20] = null;
  assert.equal(app.run(`sumPrevious24Hours(${JSON.stringify(data.hourly)})`), null);
  assert.match(app.run(`new Date(${now}).toLocaleTimeString('en-US', {timeZone:'America/New_York',hour:'numeric',minute:'2-digit'})`), /9:30/);
  assert.match(app.run(`new Date(${now}).toLocaleTimeString('en-US', {timeZone:'America/Denver',hour:'numeric',minute:'2-digit'})`), /7:30/);
});

test('wrong-state, city-only and unrelated matches fall back with an explicit regional label', async () => {
  const app = harness(async url => url.startsWith('https://photon') ? response({ features: [
    place('Caribou Ranch Open Space', 'New York', -105.53, 39.99),
    place('Unrelated Park', 'Colorado', -105.53, 39.99),
    { ...place('Caribou Ranch Open Space', 'Colorado', -105.53, 39.99), properties: { osm_key: 'place' } }
  ] }) : response(weather()));
  app.run('currentLocationCode = "NED"');
  await app.run('loadWeather(nederlandTrails[1])');
  assert.equal(app.text('#weather-status'), 'Regional conditions near Nederland, Colorado; trail location unconfirmed.');
  assert.equal(app.text('#temp-value'), '60°F');
});

test('switching region invalidates a late response even if the transport ignores cancellation', async () => {
  let finish;
  const app = harness(() => new Promise(resolve => { finish = resolve; }));
  const pending = app.run('loadWeather(madisonQuickTrails[0])');
  await new Promise(resolve => setImmediate(resolve));
  app.run('switchLocation("BEA")');
  finish(response(weather()));
  await pending;
  assert.equal(app.text('#weather-status'), 'Waiting for a trail pick.');
  assert.equal(app.text('#temp-value'), '-');
});

test('reroll prevents an earlier request overwriting the new trail', async () => {
  let finish;
  let calls = 0;
  const app = harness(() => ++calls === 1 ? new Promise(resolve => { finish = resolve; }) : Promise.resolve(response(weather())));
  const pending = app.run('loadWeather(madisonQuickTrails[0])');
  await new Promise(resolve => setImmediate(resolve));
  await app.run('loadWeather(madisonQuickTrails[1])');
  finish(response(weather()));
  await pending;
  assert.equal(app.text('#weather-status'), 'Conditions at Ice Age Trail - Table Bluff Segment Trailhead');
});

test('provider errors and malformed payloads produce a recoverable placeholder', async () => {
  for (const provider of [async () => ({ok: false, status: 429}), async () => response({})]) {
    const app = harness(provider);
    await app.run('loadWeather(madisonQuickTrails[0])');
    assert.match(app.text('#weather-status'), /hiccup/);
    assert.equal(app.text('#temp-value'), '-');
  }
});

test('a geocoder outage still loads regional weather; storage failures are harmless', async () => {
  const app = harness(async url => {
    if (url.startsWith('https://photon')) throw new Error('offline');
    return response(weather());
  });
  app.run('currentLocationCode = "NED"; window.localStorage.getItem = () => {throw new Error("disabled")};');
  await app.run('loadWeather(nederlandTrails[0])');
  assert.match(app.text('#weather-status'), /^Regional conditions/);
});

test('sunset uses absolute time and ignores stale responses after a newer render', async () => {
  const urls = [];
  let finish;
  const app = harness(url => {
    urls.push(new URL(url));
    return urls.length === 1 ? new Promise(resolve => { finish = resolve; })
      : Promise.resolve(response({ daily: { sunset: [now / 1000 + 7200] } }));
  });
  app.run('getSunsetContext = async () => ({latitude: 40, longitude: -105, timeZone: "America/Denver"}); nowPartsForTimeZone = () => ({hour: 15});');
  const stale = app.run('testRenderSunsetLine()');
  await new Promise(resolve => setImmediate(resolve));
  await app.run('testRenderSunsetLine()');
  assert.equal(app.text('#sunset-line'), 'Light remaining: ~2h 0m');
  finish(response({ daily: { sunset: [now / 1000 - 3600] } }));
  await stale;
  assert.equal(app.text('#sunset-line'), 'Light remaining: ~2h 0m');
  assert.equal(urls[0].searchParams.get('timeformat'), 'unixtime');
});

test('live providers: render Madison, Beacon and Caribou from actual catalog records', { skip: !process.env.LIVE_WEATHER }, async () => {
  const urls = [];
  const app = harness(async (url, options) => {
    urls.push(new URL(url));
    return fetch(url, options);
  });
  for (const [code, expression, source] of [
    ['MAD', 'madisonQuickTrails[0]', 'at'],
    ['BEA', 'beaconTrails.find(t => t.name === "Madam Brett Park")', 'near'],
    ['NED', 'nederlandTrails[1]', 'near']
  ]) {
    await app.run(`switchLocation('${code}'); renderTrail(${expression}, 'quick')`);
    assert.match(app.text('#weather-status'), new RegExp(`^Conditions ${source} `));
    assert.match(app.text('#temp-value'), /^-?\d+°F$/);
    assert.match(app.text('#rain-chance-value'), /^\d+%$/);
    assert.match(app.text('#wind-value'), /^\d+ mph$/);
    console.log(`${code}: ${app.text('#weather-status')} | ${app.text('#temp-value')} | ${app.text('#updated-value')}`);
  }
  assert.equal(urls.filter(url => url.hostname === 'photon.komoot.io').length, 2);
});
