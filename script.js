const WILLY_STREET_COOP_ADDRESS = "1221 Williamson St, Madison, WI 53703";
const FROSTIE_FREEZE_ADDRESS = "208 Madison Ave, Fort Atkinson, WI 53538";
const MONTH_INDEX = new Date().getMonth() + 1;
const trailWisdom = [
  "Sun Tzu-ish: move where the ground welcomes you.",
  "Sun Tzu-ish: the good path is chosen before the boots get muddy.",
  "Sun Tzu-ish: a calm start beats a frantic charge.",
  "Tao Te Ching-ish: the soft trail still gets you there.",
  "Tao Te Ching-ish: when you stop forcing the day, the woods get friendlier.",
  "Tao Te Ching-ish: enough is a beautiful distance for today."
];

const trailBuckets = {
  quick: [
    {
      name: "Pheasant Branch Conservancy Trailhead",
      address: "4864 Pheasant Branch Rd, Middleton, WI 53562",
      latitude: 43.1207,
      longitude: -89.4825,
      coopDrive: "18 min",
      trailLength: "3.5 mi",
      frostyDrive: "51 min",
      seasonalBoosts: [{ months: [4, 5, 10], multiplier: 1.55, reason: "spring marsh energy and fall color" }]
    },
    {
      name: "Ice Age Trail - Table Bluff Segment Trailhead",
      address: "5735 County Hwy KP, Cross Plains, WI 53528",
      latitude: 43.1185,
      longitude: -89.6745,
      coopDrive: "29 min",
      trailLength: "2.8 mi",
      frostyDrive: "48 min",
      seasonalBoosts: [{ months: [5, 6, 10], multiplier: 1.45, reason: "wildflowers and ridge views" }]
    },
    {
      name: "Ice Age Trail - Cross Plains Segment (Hwy P Trailhead)",
      address: "5787 County Hwy P, Cross Plains, WI 53528",
      latitude: 43.116,
      longitude: -89.652,
      coopDrive: "27 min",
      trailLength: "4.0 mi",
      frostyDrive: "48 min",
      seasonalBoosts: [{ months: [5, 6, 10], multiplier: 1.4, reason: "wildflower season and crisp fall light" }]
    },
    {
      name: "Indian Lake County Park (Main Trailhead)",
      address: "8183 State Hwy 19, Cross Plains, WI 53528",
      latitude: 43.1465,
      longitude: -89.7285,
      coopDrive: "33 min",
      trailLength: "4.6 mi",
      frostyDrive: "52 min",
      seasonalBoosts: [{ months: [5, 6, 9, 10], multiplier: 1.5, reason: "prairie bloom and big shoulder-season skies" }]
    },
    {
      name: "Donald County Park (Main Trailhead)",
      address: "1945 County Hwy A, Mount Horeb, WI 53572",
      latitude: 43.0227,
      longitude: -89.8015,
      coopDrive: "37 min",
      trailLength: "3.2 mi",
      frostyDrive: "58 min",
      seasonalBoosts: [{ months: [9, 10], multiplier: 1.45, reason: "fall ridges feel especially right here" }]
    },
    {
      name: "Ice Age Trail - Verona Segment (Badger Prairie Park Trailhead)",
      address: "4654 Maple Grove Dr, Verona, WI 53593",
      latitude: 42.996,
      longitude: -89.54,
      coopDrive: "21 min",
      trailLength: "2.7 mi",
      frostyDrive: "41 min",
      seasonalBoosts: [{ months: [4, 5], multiplier: 1.3, reason: "easy spring reset close to town" }]
    },
    {
      name: "Cherokee Marsh Conservation Park - North Unit",
      address: "6098 N Sherman Ave, Madison, WI 53704",
      latitude: 43.1518,
      longitude: -89.384,
      coopDrive: "17 min",
      trailLength: "2.5 mi",
      frostyDrive: "55 min",
      seasonalBoosts: [{ months: [4, 5, 9], multiplier: 1.6, reason: "birdy marsh magic" }]
    },
    {
      name: "Owen Conservation Park Trailhead",
      address: "6021 Old Sauk Rd, Madison, WI 53705",
      latitude: 43.0745,
      longitude: -89.492,
      coopDrive: "18 min",
      trailLength: "3.0 mi",
      frostyDrive: "45 min",
      seasonalBoosts: [{ months: [6, 7, 8, 10], multiplier: 1.25, reason: "leafy shade and easy golden-hour loops" }]
    },
    {
      name: "Ice Age Trail - Brooklyn Wildlife Area Trailhead",
      address: "1100 County Hwy MM, Brooklyn, WI 53521",
      latitude: 42.8665,
      longitude: -89.374,
      coopDrive: "34 min",
      trailLength: "5.5 mi",
      frostyDrive: "29 min",
      seasonalBoosts: [{ months: [4, 5, 10], multiplier: 1.35, reason: "good shoulder-season ramble country" }]
    },
    {
      name: "Brigham County Park Trailhead",
      address: "3160 County Hwy F, Blue Mounds, WI 53517",
      latitude: 43.04,
      longitude: -89.842,
      coopDrive: "35 min",
      trailLength: "3.8 mi",
      frostyDrive: "54 min",
      seasonalBoosts: [{ months: [5, 6], multiplier: 1.75, reason: "wildflower season around Blue Mounds" }]
    }
  ],
  moreTime: [
    {
      name: "Gibraltar Rock State Natural Area Trailhead",
      address: "4448 County Rd V, Lodi, WI 53555",
      latitude: 43.3825,
      longitude: -89.507,
      coopDrive: "48 min",
      trailLength: "4.0 mi",
      frostyDrive: "75 min",
      seasonalBoosts: [{ months: [9, 10], multiplier: 1.55, reason: "cliffside fall color is a crowd-pleaser" }]
    },
    {
      name: "Ice Age Trail - Lodi Marsh Segment Trailhead",
      address: "W11602 County Rd V, Lodi, WI 53555",
      latitude: 43.38,
      longitude: -89.498,
      coopDrive: "50 min",
      trailLength: "3.5 mi",
      frostyDrive: "78 min",
      seasonalBoosts: [{ months: [4, 5], multiplier: 1.55, reason: "spring marsh vibes" }]
    },
    {
      name: "Parfrey's Glen State Natural Area Trailhead",
      address: "S5975 Park Rd, Merrimac, WI 53561",
      latitude: 43.4204,
      longitude: -89.7306,
      coopDrive: "55 min",
      trailLength: "1.4 mi",
      frostyDrive: "86 min",
      seasonalBoosts: [{ months: [6, 7, 8], multiplier: 1.35, reason: "cool gorge weather on warmer days" }]
    },
    {
      name: "Devil's Lake State Park - West Bluff Trailhead",
      address: "S5975 Park Rd, Baraboo, WI 53913",
      latitude: 43.4187,
      longitude: -89.7318,
      coopDrive: "58 min",
      trailLength: "4.2 mi",
      frostyDrive: "89 min",
      seasonalBoosts: [{ months: [9, 10], multiplier: 1.7, reason: "peak bluff drama in fall" }]
    },
    {
      name: "Ice Age Trail - Devil's Lake Segment (Steinke Basin Trailhead)",
      address: "Steinke Basin Parking Lot, Baraboo, WI 53913",
      latitude: 43.4215,
      longitude: -89.69,
      coopDrive: "57 min",
      trailLength: "5.2 mi",
      frostyDrive: "88 min",
      seasonalBoosts: [{ months: [9, 10], multiplier: 1.6, reason: "classic Devil's Lake shoulder-season pick" }]
    },
    {
      name: "Governor Dodge State Park - Cox Hollow Trailhead",
      address: "4175 WI-23, Dodgeville, WI 53533",
      latitude: 43.0255,
      longitude: -90.13,
      coopDrive: "68 min",
      trailLength: "4.8 mi",
      frostyDrive: "80 min",
      seasonalBoosts: [{ months: [6, 7, 8, 10], multiplier: 1.35, reason: "big woods and summer lake breezes" }]
    },
    {
      name: "Blue Mound State Park Trailhead",
      address: "4350 Mounds Park Rd, Blue Mounds, WI 53517",
      latitude: 43.017,
      longitude: -89.862,
      coopDrive: "47 min",
      trailLength: "5.0 mi",
      frostyDrive: "63 min",
      seasonalBoosts: [{ months: [5, 6], multiplier: 1.8, reason: "wildflowers in season" }]
    },
    {
      name: "Ice Age Trail - Whitewater Lake Segment Trailhead",
      address: "N7530 Kettle Moraine Dr, Whitewater, WI 53190",
      latitude: 42.806,
      longitude: -88.722,
      coopDrive: "70 min",
      trailLength: "4.7 mi",
      frostyDrive: "23 min",
      seasonalBoosts: [{ months: [9, 10], multiplier: 1.4, reason: "excellent fall woods day" }]
    },
    {
      name: "Emma Carlin Trail System Trailhead (Kettle Moraine South)",
      address: "N7610 County Hwy Z, Palmyra, WI 53156",
      latitude: 42.841,
      longitude: -88.561,
      coopDrive: "73 min",
      trailLength: "6.3 mi",
      frostyDrive: "30 min",
      seasonalBoosts: [{ months: [9, 10], multiplier: 1.5, reason: "Kettle Moraine gets extra lovely in fall" }]
    },
    {
      name: "Ice Age Trail - Scuppernong / Stoney Ridge Trailhead",
      address: "S6330 WI-67, Eagle, WI 53119",
      latitude: 42.821,
      longitude: -88.478,
      coopDrive: "72 min",
      trailLength: "5.8 mi",
      frostyDrive: "20 min",
      seasonalBoosts: [{ months: [9, 10], multiplier: 1.45, reason: "ridge walking in fall is hard to beat" }]
    },
    {
      name: "Horicon Marsh State Wildlife Area - Ledge Road Trailhead",
      address: "N7725 WI-28, Horicon, WI 53032",
      latitude: 43.509,
      longitude: -88.64,
      coopDrive: "72 min",
      trailLength: "3.0 mi",
      frostyDrive: "91 min",
      seasonalBoosts: [{ months: [4, 5], multiplier: 1.9, reason: "spring Horicon Marsh migration glory" }]
    }
  ]
};

const els = {
  quickButton: document.querySelector("#quick-dash-btn"),
  moreButton: document.querySelector("#more-time-btn"),
  rerollButton: document.querySelector("#reroll-btn"),
  bucketLabel: document.querySelector("#bucket-label"),
  trailName: document.querySelector("#trail-name"),
  trailAddress: document.querySelector("#trail-address"),
  coopDrive: document.querySelector("#coop-drive"),
  trailLength: document.querySelector("#trail-length"),
  frostyDrive: document.querySelector("#frosty-drive"),
  seasonNote: document.querySelector("#season-note"),
  temp: document.querySelector("#temp-value"),
  feelsLike: document.querySelector("#feels-like-value"),
  rainChance: document.querySelector("#rain-chance-value"),
  rainTotal: document.querySelector("#rain-total-value"),
  wind: document.querySelector("#wind-value"),
  updated: document.querySelector("#updated-value"),
  weatherStatus: document.querySelector("#weather-status"),
  reminderList: document.querySelector("#reminder-list"),
  mapsLink: document.querySelector("#maps-link"),
  frostyLink: document.querySelector("#frosty-link")
};

let currentBucketKey = null;
let currentRequestId = 0;
let currentTrail = null;

function getWeightedTrail(bucket) {
  const weighted = bucket.map((trail) => {
    const boost = trail.seasonalBoosts.find((entry) => entry.months.includes(MONTH_INDEX));
    return {
      trail,
      weight: boost ? boost.multiplier : 1
    };
  });

  const total = weighted.reduce((sum, entry) => sum + entry.weight, 0);
  let cursor = Math.random() * total;

  for (const entry of weighted) {
    cursor -= entry.weight;
    if (cursor <= 0) return entry.trail;
  }

  return weighted[weighted.length - 1].trail;
}

function setLinkState(linkEl, href, enabled) {
  linkEl.href = enabled ? href : "#";
  linkEl.classList.toggle("disabled", !enabled);
}

function formatReason(trail) {
  const boost = trail.seasonalBoosts.find((entry) => entry.months.includes(MONTH_INDEX));
  return boost ? boost.reason : "standard random odds";
}

function renderTrail(trail, bucketKey) {
  currentTrail = trail;
  currentBucketKey = bucketKey;
  els.bucketLabel.textContent = bucketKey === "quick" ? "Quick Dash pick" : "A little more time pick";
  els.trailName.textContent = trail.name;
  els.trailAddress.textContent = trail.address;
  els.coopDrive.textContent = `~${trail.coopDrive}`;
  els.trailLength.textContent = `~${trail.trailLength}`;
  els.frostyDrive.textContent = `~${trail.frostyDrive}`;
  els.seasonNote.textContent = formatReason(trail);
  els.rerollButton.disabled = false;
  renderWisdom();
  setLinkState(els.mapsLink, "#", true);
  setLinkState(els.frostyLink, "#", true);

  loadWeather(trail);
}

function pickTrail(bucketKey) {
  const bucket = trailBuckets[bucketKey];
  renderTrail(getWeightedTrail(bucket), bucketKey);
}

function closestHourlyValue(hourly, targetDate) {
  if (!hourly?.time?.length) return null;

  let bestIndex = 0;
  let bestDistance = Infinity;

  hourly.time.forEach((timeString, index) => {
    const distance = Math.abs(new Date(timeString).getTime() - targetDate.getTime());
    if (distance < bestDistance) {
      bestIndex = index;
      bestDistance = distance;
    }
  });

  return {
    rainChance: hourly.precipitation_probability?.[bestIndex],
    temperature: hourly.temperature_2m?.[bestIndex],
    apparentTemperature: hourly.apparent_temperature?.[bestIndex],
    windSpeed: hourly.wind_speed_10m?.[bestIndex],
    uvIndex: hourly.uv_index?.[bestIndex]
  };
}

function sumPrevious24Hours(hourly) {
  if (!hourly?.time?.length || !hourly.precipitation?.length) return null;

  const now = Date.now();
  const cutoff = now - 24 * 60 * 60 * 1000;

  return hourly.time.reduce((sum, timeString, index) => {
    const time = new Date(timeString).getTime();
    if (time >= cutoff && time <= now) {
      return sum + (hourly.precipitation[index] || 0);
    }
    return sum;
  }, 0);
}

function setWeatherPlaceholder(message) {
  els.weatherStatus.textContent = message;
  els.temp.textContent = "-";
  els.feelsLike.textContent = "-";
  els.rainChance.textContent = "-";
  els.rainTotal.textContent = "-";
  els.wind.textContent = "-";
  els.updated.textContent = "-";
}

function renderReminders(reminders) {
  els.reminderList.innerHTML = "";
  reminders.forEach((reminder) => {
    const pill = document.createElement("span");
    pill.className = "reminder-pill";
    pill.textContent = reminder;
    els.reminderList.appendChild(pill);
  });
}

function renderWisdom() {
  const wisdom = trailWisdom[Math.floor(Math.random() * trailWisdom.length)];
  renderReminders([wisdom]);
}

function getCurrentPositionPromise() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation unavailable"));
      return;
    }

    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 4000,
      maximumAge: 5 * 60 * 1000
    });
  });
}

async function getOriginForMaps() {
  try {
    const position = await getCurrentPositionPromise();
    return `${position.coords.latitude},${position.coords.longitude}`;
  } catch (error) {
    return WILLY_STREET_COOP_ADDRESS;
  }
}

async function openDirections(destination) {
  if (!currentTrail) return;
  els.weatherStatus.textContent = "Opening maps...";
  const origin = await getOriginForMaps();
  const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`;
  window.open(url, "_blank", "noopener,noreferrer");
  els.weatherStatus.textContent = `Conditions at ${currentTrail.name}`;
}

async function loadWeather(trail) {
  const requestId = ++currentRequestId;
  setWeatherPlaceholder("Looking up live conditions...");

  try {
    const params = new URLSearchParams({
      latitude: trail.latitude,
      longitude: trail.longitude,
      current: "temperature_2m,apparent_temperature,wind_speed_10m,uv_index",
      hourly: "temperature_2m,apparent_temperature,precipitation_probability,precipitation,wind_speed_10m,uv_index",
      temperature_unit: "fahrenheit",
      wind_speed_unit: "mph",
      precipitation_unit: "inch",
      timezone: "America/Chicago",
      past_days: "1",
      forecast_days: "1"
    });

    const url = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Weather request failed.");
    }

    const data = await response.json();
    if (requestId !== currentRequestId) return;

    const currentTime = new Date(data.current?.time || Date.now());
    const hourlyMatch = closestHourlyValue(data.hourly, currentTime);
    const rainTotal = sumPrevious24Hours(data.hourly);

    els.weatherStatus.textContent = `Conditions at ${trail.name}`;
    els.temp.textContent = data.current?.temperature_2m != null || hourlyMatch?.temperature != null
      ? `${Math.round(data.current?.temperature_2m ?? hourlyMatch?.temperature)}°F`
      : "n/a";
    els.feelsLike.textContent = data.current?.apparent_temperature != null || hourlyMatch?.apparentTemperature != null
      ? `${Math.round(data.current?.apparent_temperature ?? hourlyMatch?.apparentTemperature)}°F`
      : "n/a";
    els.rainChance.textContent = hourlyMatch?.rainChance != null ? `${Math.round(hourlyMatch.rainChance)}%` : "n/a";
    els.rainTotal.textContent = rainTotal != null ? `${rainTotal.toFixed(2)} in` : "n/a";
    els.wind.textContent = data.current?.wind_speed_10m != null || hourlyMatch?.windSpeed != null
      ? `${Math.round(data.current?.wind_speed_10m ?? hourlyMatch?.windSpeed)} mph`
      : "n/a";
    els.updated.textContent = currentTime.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  } catch (error) {
    if (requestId !== currentRequestId) return;
    setWeatherPlaceholder("Weather lookup had a little woodland hiccup. Try again in a moment.");
  }
}

els.quickButton.addEventListener("click", () => pickTrail("quick"));
els.moreButton.addEventListener("click", () => pickTrail("moreTime"));
els.rerollButton.addEventListener("click", () => {
  if (currentBucketKey) {
    pickTrail(currentBucketKey);
  }
});
els.mapsLink.addEventListener("click", async (event) => {
  event.preventDefault();
  if (!currentTrail) return;
  await openDirections(currentTrail.address);
});
els.frostyLink.addEventListener("click", async (event) => {
  event.preventDefault();
  if (!currentTrail) return;
  await openDirections(FROSTIE_FREEZE_ADDRESS);
});
