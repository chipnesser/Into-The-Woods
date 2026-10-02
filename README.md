# Into the Woods

Existing static, one-page trail picker hosted on GitHub Pages. No build step, package installation, API key, or server is required for the app.

## App structure and data flow

- `index.html`: region buttons, trail details, weather fields and map actions.
- `styles.css`: the existing layout, scenery and animations.
- `script.js`: all trail arrays (including appended records), region configurations, weighted selection, display helpers, weather, sunset and Google Maps directions.
- `tests/weather.test.cjs`: dependency-free regression and optional live-provider tests.
- `tests/preview-server.cjs`: local browser preview with reproducible comparison trails.

Each region's `locations` entry supplies the origin, post-hike destination, time zone and trail buckets. Selection flows through `pickTrail` → the existing regional weighting function → `renderTrail` → `loadWeather`.

Trail records use optional `address`, `nearTown`, `mapQuery`, `coopDrive`, `postHikeDrive`, `trailLength`, and descriptive/weighting fields. Both existing coordinate forms are supported: `latitude`/`longitude` and `coordinates: {lat, lon}`. Coordinates are validated and converted to numbers. Unrecorded trip estimates display as **Not available**, without inventing mileage or drive times.

Google Maps still uses `mapQuery`, falling back to address/name. Weather resolves coordinates separately: saved trail coordinates → a cached named-place lookup → explicitly labeled regional conditions if no trustworthy match is found. Optional `geocodeQuery` can identify a named feature when the display name describes a composite route. A map search phrase is not itself a coordinate or a validated trailhead pin.

## Root causes and comparison

Before this fix, `loadWeather` returned immediately when coordinates were missing. The README claimed Nominatim geocoding existed, but the code did not perform a geocoding request. Rendering also unconditionally interpolated optional estimate fields. Most Beacon records and all Nederland records lacked coordinates; all Nederland records lacked the three trip estimates.

| Comparison trail | Original record | Corrected behavior |
| --- | --- | --- |
| Pheasant Branch Conservancy Trailhead, Madison | Address, numeric coordinates, drive estimates and mileage | Preserves saved coordinates and estimates; requests Open-Meteo directly |
| Madam Brett Park, Beacon | Town, map query and estimates; no coordinates | Resolves the named park in New York; loads conditions near the park |
| Caribou Ranch Open Space, Nederland | Town and map query; no coordinates or trip estimates | Resolves the named open space in Colorado; shows route mileage and explicitly unavailable drive estimates |

Caribou Ranch's location description and **4.2 mi** route come from the [Boulder County trail map](https://assets.bouldercounty.gov/wp-content/uploads/2017/03/caribou-ranch-trail-map.pdf): DeLonde is 1.2 mi each way, plus the 1.8 mi Blue Bird Loop. Other unrecorded Nederland mileage and drive estimates remain unavailable and can be added to the ordinary records when verified.

## Weather and location services

[Open-Meteo](https://open-meteo.com/en/docs) supplies Fahrenheit temperatures, mph winds, inches of precipitation, hourly rain probability and sunset. Requests now use Unix timestamps, so hourly matching, the previous 24 hours of precipitation and sunset calculations do not interpret another region's local clock in the viewer's time zone. Updated times explicitly use the selected region's time zone. Missing precipitation samples display as unknown rather than zero rain.

[Photon](https://github.com/komoot/photon), using OpenStreetMap data, resolves missing coordinates only when a user selects a trail. Queries are bounded to one degree around the region's configured origin, and results must match the named feature, US country code and region's state. Successful coordinates are cached in memory and, when storage is available, in the browser for 30 days. The public demo service has no availability guarantee; requests time out after 10 seconds. For larger traffic, use a hosted/private Photon endpoint by changing `GEOCODER_URL`.

Saved coordinates show **Conditions at…**. A geocoded park/feature center shows **Conditions near…**, since it is not a verified trailhead pin. Failed/unmatched lookups fall back to the configured regional origin and explicitly show **Regional conditions near…; trail location unconfirmed**. Regional weather should not be read as an alpine trail forecast. OpenStreetMap attribution appears in the page footer.

Region changes and rerolls cancel previous weather requests and invalidate their result IDs, including transports that finish after cancellation. Sunset also rejects stale results. Directions messages use the map action note rather than overwriting weather status.

## Run and test

Use Node.js 18 or newer:

```sh
node --test tests/weather.test.cjs
TZ=Asia/Tokyo node --test tests/weather.test.cjs
LIVE_WEATHER=1 node --test tests/weather.test.cjs
node tests/preview-server.cjs
```

The regular suite uses fixtures to check the actual catalog's rendering, coordinate validation, cache reuse, wrong-place rejection, missing data, absolute timestamps, rainfall, provider failures, rerolls and region switches. The optional live test requests real location/weather responses for the three comparison trails.

For browser checks, open `http://127.0.0.1:4173/`. Append `?example=MAD`, `?example=BEA` or `?example=NED` to select the comparison trail reproducibly. Fixture selection exists only in the preview server; the published app retains its weighted random picker.

GitHub Pages continues to serve the existing root `index.html`, `script.js` and `styles.css` from the configured publishing branch. Merging/publishing changes is separate from running this local preview.
