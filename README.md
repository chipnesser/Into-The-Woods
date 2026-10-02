# Into the Woods

Existing static, one-page trail picker hosted on GitHub Pages. No build step, package installation, API key, or server is required for the app.

## App structure and data flow

- `index.html`: region buttons, trail details, weather fields and map actions.
- `styles.css`: the existing layout, scenery and animations.
- `assets/`: optimized painted scenery and a small paper-grain tile for the version 2.0 visual refresh.
- `docs/visual-refresh-v2.md`: art direction, asset provenance/prompt, motion, performance and visual verification notes.
- `script.js`: all trail arrays (including appended records), region configurations, weighted selection, display helpers, weather, sunset and Google Maps directions.
- `trail-access.js`: researched parking/access destinations shared by Nederland trail records, sources, confidence, saved route snapshots and rounded drive-time ranges.
- `research/nederland/DRIVE-ESTIMATES.md`: all 21 Nederland trails, evidence for the 12 chosen access points, both reference-point estimates and access caveats.
- `tests/weather.test.cjs`: dependency-free regression and optional live-provider tests.
- `tests/preview-server.cjs`: local browser preview with reproducible comparison trails.

Each region's `locations` entry supplies the origin, post-hike destination, time zone and trail buckets. Selection flows through `pickTrail` → the existing regional weighting function → `renderTrail` → `loadWeather`.

Trail records use optional `address`, `nearTown`, `mapQuery`, `coopDrive`, `postHikeDrive`, `trailLength`, and descriptive/weighting fields. Both existing coordinate forms are supported: `latitude`/`longitude` and `coordinates: {lat, lon}`. Coordinates are validated and converted to numbers. Unrecorded trip estimates display as **Not available**, without inventing mileage or drive times.

Google Maps uses researched driving coordinates when available, otherwise `mapQuery`, falling back to address/name. Weather resolves coordinates separately: saved trail coordinates → a cached named-place lookup → explicitly labeled regional conditions if no trustworthy match is found. Optional `geocodeQuery` can identify a named feature when the display name describes a composite route. A map search phrase is not itself a coordinate or a validated trailhead pin.

## Root causes and comparison

Before this fix, `loadWeather` returned immediately when coordinates were missing. The README claimed Nominatim geocoding existed, but the code did not perform a geocoding request. Rendering also unconditionally interpolated optional estimate fields. Most Beacon records and all Nederland records lacked coordinates; all Nederland records lacked the three trip estimates.

| Comparison trail | Original record | Corrected behavior |
| --- | --- | --- |
| Pheasant Branch Conservancy Trailhead, Madison | Address, numeric coordinates, drive estimates and mileage | Preserves saved coordinates and estimates; requests Open-Meteo directly |
| Madam Brett Park, Beacon | Town, map query and estimates; no coordinates | Resolves the named park in New York; loads conditions near the park |
| Caribou Ranch Open Space, Nederland | Town and map query; no coordinates or trip estimates | Resolves the named open space for weather; routes to the verified parking lot; shows route mileage and approximate 5–10 minute drives |

Caribou Ranch's location description and **4.2 mi** route come from the [Boulder County trail map](https://assets.bouldercounty.gov/wp-content/uploads/2017/03/caribou-ranch-trail-map.pdf): DeLonde is 1.2 mi each way, plus the 1.8 mi Blue Bird Loop. Other unrecorded Nederland hiking mileage remains unavailable.

## Nederland driving estimates

All 21 trails now share 12 researched parking/access destinations. Official county, town, Forest Service and OpenStreetMap information identifies the destinations; guides and reviews only support ambiguous start associations. Gordon Gulch and Sugarloaf use explicitly approximate access points. Niwot Ridge uses the Brainard/Niwot Cutoff approach, with Medium confidence because other approaches fit the generic trail name.

On 2026-10-02, each access point was road-routed from Train Cars, from Kathmandu, and back to Kathmandu in Google Maps. The saved observations and per-trail sources are in the [driving-estimate audit](research/nederland/DRIVE-ESTIMATES.md). Nearby reference points produced similar baselines, so the app uses a common rounded range for each access point. Ranges round outward to five minutes and include a stated planning allowance for uncertain/rough access. They are not measured confidence intervals or live traffic estimates. No manual road speed or straight-line-distance calculation is used.

Hessie routes to the lower roadside parking/shuttle access rather than an upper hiking pin. Sugarloaf and Rainbow Lakes include approach waypoints to follow the documented roads. Initial OSRM routes were reviewed and superseded by Google estimates; OSRM's Rainbow Lakes shortcut/detour was rejected. The browser does not call a routing service during trail selection, so no routing key or new live dependency is required.

The expandable **Driving estimate details** section shows destination, confidence, sources and seasonal/road notes. Estimates assume open roads and required reservations; parking searches, shuttle waits/rides, entrance queues and walking are additional. Winter access can require a different destination and a different hike. Map links may start from the user's current location, but displayed estimates always use the named reference points.

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

The regular suite also checks all 21 Nederland records against saved routed evidence, shared parking destinations, approach waypoints, approximate labels and clearing evidence on region switches. The optional live test requests real location/weather responses for the three comparison trails.

For browser checks, open `http://127.0.0.1:4173/`. Append `?example=MAD`, `?example=BEA` or `?example=NED` to select the comparison trail reproducibly. Use `?example=NED&trail=4` for Gordon Gulch or `?example=NED&trail=6` for Rainbow Lakes (indices 0–20 select the Nederland catalog). Fixture selection exists only in the preview server; the published app retains its weighted random picker.

GitHub Pages continues to serve the existing root `index.html`, `script.js`, `trail-access.js` and `styles.css` from the configured publishing branch. Merging/publishing changes is separate from running this local preview.
