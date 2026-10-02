# Nederland driving estimates

Researched **2026-10-02** for the existing Into-The-Woods catalog.

The reference points are **The Train Cars Coffee and Kava**, 101 CO-119, and **Kathmandu Restaurant**, 110 N Jefferson St, Nederland. Their locations were checked against named OpenStreetMap buildings ([Train Cars](https://www.openstreetmap.org/way/130503322), [Kathmandu](https://www.openstreetmap.org/way/130502575)). Each direction was routed separately; the app's second drive is **from the chosen access point to Kathmandu**, while this audit also includes the requested estimate **from Kathmandu**.

## Method and uncertainty

Separately observed Google Maps driving routes from Train Cars and Kathmandu and back to Kathmandu. Round the combined baseline span outward to five minutes, then add a planning allowance of five minutes for short dirt/inferred/high-mountain access or ten for a long rough approach. These are planning bands, not measured confidence intervals or live ETAs; no manual road speed calculation.

The nearby reference points produced very similar times, so each access point uses one common rounded band covering the three directional snapshots. The upper end is not a guarantee. Traffic, parking searches, shuttle waits/rides, entrance queues and walking from parking are additional. Estimates assume a passable, open road and the necessary parking reservation; a closed road is not made accessible by adding minutes. **High** destination confidence means an official pin or a mapped public parking area corroborated by official access information. **Medium** means an inferred road-end/entrance or an ambiguous trail-to-start association. All drive times remain approximate.

Road routing was obtained from Google Maps' visible driving-route cards. The saved observations are in [google-routes.json](google-routes.json). Initial [OSRM road routes](routes.json) were used as a cross-check, then superseded by the Google observations for the displayed estimates. OSRM's Rainbow Lakes route took Caribou/FR 505; even forcing a northern waypoint caused a large detour instead of the documented NFSR 298 approach. That result was rejected. The Sugarloaf route was constrained to the Sugarloaf Road/Sugarloaf Mountain Road junction to avoid a Switzerland Trail shortcut. No straight-line-distance or manually selected speed estimate is used.

## All 21 trail records

| Trail | Chosen driving destination | Destination confidence | From Train Cars | From Kathmandu | To Kathmandu (app) | Source/evidence |
| --- | --- | --- | --- | --- | --- | --- |
| Mud Lake Open Space | Mud Lake Trailhead parking, CR 126 | High | Approx. 5–10 min | Approx. 5–10 min | Approx. 5–10 min | [Boulder County: Mud Lake](https://bouldercounty.gov/open-space/parks-and-trails/mud-lake/); [OpenStreetMap parking lot](https://www.openstreetmap.org/way/724186477) |
| Caribou Ranch Open Space | Caribou Ranch Trailhead parking, CR 126 | High | Approx. 5–10 min | Approx. 5–10 min | Approx. 5–10 min | [Boulder County: Caribou Ranch](https://bouldercounty.gov/open-space/parks-and-trails/caribou-ranch/); [OpenStreetMap parking lot](https://www.openstreetmap.org/way/307952514) |
| Nederland Reservoir Trail | Barker Reservoir west-shore public parking, East Street | High | Approx. 1–5 min | Approx. 1–5 min | Approx. 1–5 min | [Town of Nederland: trails and open spaces](https://www.nederlandco.org/1446/Trails-Open-Spaces); [OpenStreetMap west-shore parking](https://www.openstreetmap.org/way/130815030) |
| West Magnolia Trail System | West Magnolia main trailhead lot, CR 132W / FS 355A | High | Approx. 5–15 min | Approx. 5–15 min | Approx. 5–15 min | [Forest Service: West Magnolia Trailhead](https://www.fs.usda.gov/r02/arp/recreation/west-magnolia-trailhead) |
| Gordon Gulch Trail | Gordon Gulch access entrance, CO-72 / NFSR 226 **(approximate access)** | Medium | Approx. 5–15 min | Approx. 5–15 min | Approx. 5–15 min | [Forest Service: Gordon Gulch](https://www.fs.usda.gov/r02/arp/recreation/gordon-gulch-dispersed-camping-area); [Forest Service access map](https://www.fs.usda.gov/media/71643); [AllTrails: Gordon Gulch](https://www.alltrails.com/trail/us/colorado/gordon-gulch-trail) |
| Sugarloaf Mountain Trails | Sugarloaf Mountain Road road-end / Switzerland Trail parking **(approximate access)** | Medium | Approx. 20–30 min | Approx. 20–30 min | Approx. 20–30 min | [OpenStreetMap: Sugarloaf Mountain Road](https://www.openstreetmap.org/way/17018842); [Sugarloaf hiking guide](https://www.outsideonline.com/adventure-travel/destinations/north-america/best-hikes-in-boulder-colorado/); [Hiking Project: Sugarloaf Mountain](https://www.hikingproject.com/trail/7005887/sugarloaf-mountain) |
| Rainbow Lakes Trail | Rainbow Lakes Trailhead parking, NFSR 298 / CR 116 | High | Approx. 25–40 min | Approx. 25–40 min | Approx. 25–40 min | [Forest Service: Rainbow Lakes Trailhead](https://www.fs.usda.gov/r02/arp/recreation/rainbow-lakes-trailhead); [OpenStreetMap trailhead parking](https://www.openstreetmap.org/way/322675677) |
| Hessie Trailhead | Hessie lower roadside parking / shuttle drop-off, CR 111 | High | Approx. 10–20 min | Approx. 10–20 min | Approx. 10–20 min | [Boulder County: Hessie access and shuttle](https://bouldercounty.gov/open-space/parks-and-trails/hessie-trailhead/); [OpenStreetMap lower parking](https://www.openstreetmap.org/way/424187733); [Forest Service: Hessie Trailhead](https://www.fs.usda.gov/r02/arp/recreation/hessie-trailhead) |
| Lost Lake via Hessie | Hessie lower roadside parking / shuttle drop-off, CR 111 | High | Approx. 10–20 min | Approx. 10–20 min | Approx. 10–20 min | [Boulder County: Hessie access and shuttle](https://bouldercounty.gov/open-space/parks-and-trails/hessie-trailhead/); [OpenStreetMap lower parking](https://www.openstreetmap.org/way/424187733); [Forest Service: Hessie Trailhead](https://www.fs.usda.gov/r02/arp/recreation/hessie-trailhead) |
| King Lake Trail | Hessie lower roadside parking / shuttle drop-off, CR 111 | High | Approx. 10–20 min | Approx. 10–20 min | Approx. 10–20 min | [Boulder County: Hessie access and shuttle](https://bouldercounty.gov/open-space/parks-and-trails/hessie-trailhead/); [OpenStreetMap lower parking](https://www.openstreetmap.org/way/424187733); [Forest Service: Hessie Trailhead](https://www.fs.usda.gov/r02/arp/recreation/hessie-trailhead) |
| Diamond Lake Trail | Fourth of July Trailhead parking, end of CR 111 | High | Approx. 30–45 min | Approx. 30–45 min | Approx. 30–45 min | [Forest Service: Fourth of July Trailhead](https://www.fs.usda.gov/r02/arp/recreation/fourth-july-trailhead); [Forest Service: Arapaho Pass access](https://www.fs.usda.gov/r02/arp/recreation/trails/arapaho-pass-trail-0); [OpenStreetMap trailhead parking](https://www.openstreetmap.org/way/229731562) |
| Jasper Lake Trail | Hessie lower roadside parking / shuttle drop-off, CR 111 | High | Approx. 10–20 min | Approx. 10–20 min | Approx. 10–20 min | [Boulder County: Hessie access and shuttle](https://bouldercounty.gov/open-space/parks-and-trails/hessie-trailhead/); [OpenStreetMap lower parking](https://www.openstreetmap.org/way/424187733); [Forest Service: Hessie Trailhead](https://www.fs.usda.gov/r02/arp/recreation/hessie-trailhead) |
| Devil’s Thumb Trail | Hessie lower roadside parking / shuttle drop-off, CR 111 | High | Approx. 10–20 min | Approx. 10–20 min | Approx. 10–20 min | [Boulder County: Hessie access and shuttle](https://bouldercounty.gov/open-space/parks-and-trails/hessie-trailhead/); [OpenStreetMap lower parking](https://www.openstreetmap.org/way/424187733); [Forest Service: Hessie Trailhead](https://www.fs.usda.gov/r02/arp/recreation/hessie-trailhead) |
| Fourth of July Trailhead | Fourth of July Trailhead parking, end of CR 111 | High | Approx. 30–45 min | Approx. 30–45 min | Approx. 30–45 min | [Forest Service: Fourth of July Trailhead](https://www.fs.usda.gov/r02/arp/recreation/fourth-july-trailhead); [Forest Service: Arapaho Pass access](https://www.fs.usda.gov/r02/arp/recreation/trails/arapaho-pass-trail-0); [OpenStreetMap trailhead parking](https://www.openstreetmap.org/way/229731562) |
| Arapaho Pass Trail | Fourth of July Trailhead parking, end of CR 111 | High | Approx. 30–45 min | Approx. 30–45 min | Approx. 30–45 min | [Forest Service: Fourth of July Trailhead](https://www.fs.usda.gov/r02/arp/recreation/fourth-july-trailhead); [Forest Service: Arapaho Pass access](https://www.fs.usda.gov/r02/arp/recreation/trails/arapaho-pass-trail-0); [OpenStreetMap trailhead parking](https://www.openstreetmap.org/way/229731562) |
| Blue Lake Trail | Mitchell Lake Trailhead parking, Brainard Lake Recreation Area | High | Approx. 30–40 min | Approx. 30–40 min | Approx. 30–40 min | [Forest Service: Mitchell Lake Trailhead](https://www.fs.usda.gov/r02/arp/recreation/mitchell-lake-trailhead); [Forest Service: Mitchell / Blue Lake Trail](https://www.fs.usda.gov/r02/arp/recreation/trails/mitchell-lake-trail); [Forest Service: Brainard seasonal access](https://www.fs.usda.gov/r02/arp/recreation/brainard-lake-recreation-area) |
| Lake Isabelle Trail | Long Lake Trailhead parking, Brainard Lake Recreation Area | High | Approx. 30–40 min | Approx. 30–40 min | Approx. 30–40 min | [Forest Service: Long Lake Trailhead](https://www.fs.usda.gov/r02/arp/recreation/long-lake-trailhead); [Forest Service: Brainard seasonal access](https://www.fs.usda.gov/r02/arp/recreation/brainard-lake-recreation-area) |
| Long Lake Trailhead | Long Lake Trailhead parking, Brainard Lake Recreation Area | High | Approx. 30–40 min | Approx. 30–40 min | Approx. 30–40 min | [Forest Service: Long Lake Trailhead](https://www.fs.usda.gov/r02/arp/recreation/long-lake-trailhead); [Forest Service: Brainard seasonal access](https://www.fs.usda.gov/r02/arp/recreation/brainard-lake-recreation-area) |
| Mitchell Lake Trailhead | Mitchell Lake Trailhead parking, Brainard Lake Recreation Area | High | Approx. 30–40 min | Approx. 30–40 min | Approx. 30–40 min | [Forest Service: Mitchell Lake Trailhead](https://www.fs.usda.gov/r02/arp/recreation/mitchell-lake-trailhead); [Forest Service: Mitchell / Blue Lake Trail](https://www.fs.usda.gov/r02/arp/recreation/trails/mitchell-lake-trail); [Forest Service: Brainard seasonal access](https://www.fs.usda.gov/r02/arp/recreation/brainard-lake-recreation-area) |
| Pawnee Pass Trail | Long Lake Trailhead parking, Brainard Lake Recreation Area | High | Approx. 30–40 min | Approx. 30–40 min | Approx. 30–40 min | [Forest Service: Long Lake Trailhead](https://www.fs.usda.gov/r02/arp/recreation/long-lake-trailhead); [Forest Service: Brainard seasonal access](https://www.fs.usda.gov/r02/arp/recreation/brainard-lake-recreation-area) |
| Niwot Ridge Trail | Niwot Picnic Area parking / Niwot Cutoff access | Medium | Approx. 25–35 min | Approx. 25–35 min | Approx. 25–35 min | [OpenStreetMap: Niwot Picnic Area parking](https://www.openstreetmap.org/way/452964342); [Forest Service: Niwot Picnic Site](https://www.fs.usda.gov/r02/arp/recreation/niwot-picnic-site); [Niwot Ridge hiking guide](https://www.gohikecolorado.com/niwot-ridge) |

## Destination evidence and access caveats

### Mud Lake Trailhead parking, CR 126

Coordinates: 39.9791426, -105.5079225. Destination confidence: **High**. Drive-time confidence: **Medium**, with road-condition and availability caveats below.

- [Boulder County: Mud Lake](https://bouldercounty.gov/open-space/parks-and-trails/mud-lake/): Official trailhead map and parking amenities.
- [OpenStreetMap parking lot](https://www.openstreetmap.org/way/724186477): Named Mud Lake Trailhead parking geometry; coordinate from Photon/OSM.

Observed Google route snapshots: [Train Cars → access](https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=39.9791426%2C-105.5079225&travelmode=driving) 6 min; [Kathmandu → access](https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=39.9791426%2C-105.5079225&travelmode=driving) 6 min; [access → Kathmandu](https://www.google.com/maps/dir/?api=1&origin=39.9791426%2C-105.5079225&destination=39.9620592%2C-105.5115103&travelmode=driving) 6 min. Picker range: **5–10 min**, including a 0-minute planning allowance beyond outward rounding.

Drive to the county trailhead lot; parking search and walking time are additional.

### Caribou Ranch Trailhead parking, CR 126

Coordinates: 39.9822886, -105.5190167. Destination confidence: **High**. Drive-time confidence: **Medium**, with road-condition and availability caveats below.

- [Boulder County: Caribou Ranch](https://bouldercounty.gov/open-space/parks-and-trails/caribou-ranch/): Official trailhead map, 25 car spaces and permitted CR 126 overflow.
- [OpenStreetMap parking lot](https://www.openstreetmap.org/way/307952514): Named Caribou Ranch Trailhead parking geometry; coordinate from Photon/OSM.

Observed Google route snapshots: [Train Cars → access](https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=39.9822886%2C-105.5190167&travelmode=driving) 7 min; [Kathmandu → access](https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=39.9822886%2C-105.5190167&travelmode=driving) 7 min; [access → Kathmandu](https://www.google.com/maps/dir/?api=1&origin=39.9822886%2C-105.5190167&destination=39.9620592%2C-105.5115103&travelmode=driving) 6 min. Picker range: **5–10 min**, including a 0-minute planning allowance beyond outward rounding.

County lot; signed overflow on the south side of CR 126 when full. Park closes April 1–June 30.

### Barker Reservoir west-shore public parking, East Street

Coordinates: 39.96457752, -105.5037107533. Destination confidence: **High**. Drive-time confidence: **Medium**, with road-condition and availability caveats below.

- [Town of Nederland: trails and open spaces](https://www.nederlandco.org/1446/Trails-Open-Spaces): Lists public parking and hiking access at East Street/Boulder Canyon Drive.
- [OpenStreetMap west-shore parking](https://www.openstreetmap.org/way/130815030): Parking polygon beside the west-shore path, not the reservoir center.

Observed Google route snapshots: [Train Cars → access](https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=39.96457752%2C-105.50371075333334&travelmode=driving) 2 min; [Kathmandu → access](https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=39.96457752%2C-105.50371075333334&travelmode=driving) 2 min; [access → Kathmandu](https://www.google.com/maps/dir/?api=1&origin=39.96457752%2C-105.50371075333334&destination=39.9620592%2C-105.5115103&travelmode=driving) 2 min. Picker range: **1–5 min**, including a 0-minute planning allowance beyond outward rounding.

Chosen west-shore access for the broadly named Nederland Reservoir Trail; other shoreline starts are possible.

### West Magnolia main trailhead lot, CR 132W / FS 355A

Coordinates: 39.94677333, -105.5177483. Destination confidence: **High**. Drive-time confidence: **Medium**, with road-condition and availability caveats below.

- [Forest Service: West Magnolia Trailhead](https://www.fs.usda.gov/r02/arp/recreation/west-magnolia-trailhead): Published coordinates and directions one mile along CR 132W to the main parking area.

Observed Google route snapshots: [Train Cars → access](https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=39.94677333%2C-105.5177483&travelmode=driving) 7 min; [Kathmandu → access](https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=39.94677333%2C-105.5177483&travelmode=driving) 8 min; [access → Kathmandu](https://www.google.com/maps/dir/?api=1&origin=39.94677333%2C-105.5177483&destination=39.9620592%2C-105.5115103&travelmode=driving) 8 min. Picker range: **5–15 min**, including a 5-minute planning allowance beyond outward rounding.

Main lot beyond the second Forest Service gate. Estimate assumes road/gates open; highway-side parking is a different start.

### Gordon Gulch access entrance, CO-72 / NFSR 226

Coordinates: 40.009793, -105.50171. Destination confidence: **Medium**. The practical access point is inferred; this is not a verified dedicated parking lot. Drive-time confidence: **Medium**, with road-condition and availability caveats below.

- [Forest Service: Gordon Gulch](https://www.fs.usda.gov/r02/arp/recreation/gordon-gulch-dispersed-camping-area): Official access coordinate and turn from CO-72 onto NFSR 226.
- [Forest Service access map](https://www.fs.usda.gov/media/71643): Mapped maintained highway, unmaintained roads, gates and camping area.
- [AllTrails: Gordon Gulch](https://www.alltrails.com/trail/us/colorado/gordon-gulch-trail): September 24 and August 18, 2025 reviews identify this hike as walking the camping-area roads; secondary association evidence.

Observed Google route snapshots: [Train Cars → access](https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=40.009793%2C-105.50171&travelmode=driving) 9 min; [Kathmandu → access](https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=40.009793%2C-105.50171&travelmode=driving) 8 min; [access → Kathmandu](https://www.google.com/maps/dir/?api=1&origin=40.009793%2C-105.50171&destination=39.9620592%2C-105.5115103&travelmode=driving) 8 min. Picker range: **5–15 min**, including a 5-minute planning allowance beyond outward rounding.

Approximate access entrance, not a verified dedicated hiking lot. Find a permitted pull-off without blocking roads or campsites; deeper starts add time.

### Sugarloaf Mountain Road road-end / Switzerland Trail parking

Coordinates: 40.0254, -105.4252. Destination confidence: **Medium**. The practical access point is inferred; this is not a verified dedicated parking lot. Drive-time confidence: **Medium**, with road-condition and availability caveats below.

- [OpenStreetMap: Sugarloaf Mountain Road](https://www.openstreetmap.org/way/17018842): Mapped unpaved access road reaching the chosen road-end; no dedicated parking polygon was found.
- [Sugarloaf hiking guide](https://www.outsideonline.com/adventure-travel/destinations/north-america/best-hikes-in-boulder-colorado/): Published parking coordinate 40.02540, -105.42520; secondary evidence for the road-end choice.
- [Hiking Project: Sugarloaf Mountain](https://www.hikingproject.com/trail/7005887/sugarloaf-mountain): Corroborates the large parking area at the Switzerland Trail intersection.

Observed Google route snapshots: [Train Cars → access](https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=40.0254%2C-105.4252&travelmode=driving&waypoints=40.02016%2C-105.41467) 21 min; [Kathmandu → access](https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=40.0254%2C-105.4252&travelmode=driving&waypoints=40.02016%2C-105.41467) 20 min; [access → Kathmandu](https://www.google.com/maps/dir/?api=1&origin=40.0254%2C-105.4252&destination=39.9620592%2C-105.5115103&travelmode=driving&waypoints=40.02016%2C-105.41467) 21 min. Picker range: **20–30 min**, including a 5-minute planning allowance beyond outward rounding.

Approximate shared parking/road-end. Approach via Sugarloaf Road and Sugarloaf Mountain Road; avoid the Switzerland Trail driving shortcut. Final road is unpaved.

### Rainbow Lakes Trailhead parking, NFSR 298 / CR 116

Coordinates: 40.00949833, -105.5690483. Destination confidence: **High**. Drive-time confidence: **Medium**, with road-condition and availability caveats below.

- [Forest Service: Rainbow Lakes Trailhead](https://www.fs.usda.gov/r02/arp/recreation/rainbow-lakes-trailhead): Published trailhead coordinate, official CO-72/NFSR 298 approach, winter gate and high-clearance recommendation.
- [OpenStreetMap trailhead parking](https://www.openstreetmap.org/way/322675677): Named parking lot corroborates the official pin.

Observed Google route snapshots: [Train Cars → access](https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=40.00949833%2C-105.5690483&travelmode=driving) 29 min; [Kathmandu → access](https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=40.00949833%2C-105.5690483&travelmode=driving) 28 min; [access → Kathmandu](https://www.google.com/maps/dir/?api=1&origin=40.00949833%2C-105.5690483&destination=39.9620592%2C-105.5115103&travelmode=driving) 27 min. Picker range: **25–40 min**, including a 10-minute planning allowance beyond outward rounding.

Five-mile unpaved approach; high clearance recommended. Assumes the winter gate is open. Follow NFSR 298 / CR 116; avoid the rougher Caribou / FR 505 shortcut.

### Hessie lower roadside parking / shuttle drop-off, CR 111

Coordinates: 39.9516888, -105.59502767. Destination confidence: **High**. Drive-time confidence: **Medium**, with road-condition and availability caveats below.

- [Boulder County: Hessie access and shuttle](https://bouldercounty.gov/open-space/parks-and-trails/hessie-trailhead/): Designated CR 111 roadside parking, shuttle access and trail associations.
- [OpenStreetMap lower parking](https://www.openstreetmap.org/way/424187733): Public parking polygon near 39.95169, -105.59503, below the upper trailhead.
- [Forest Service: Hessie Trailhead](https://www.fs.usda.gov/r02/arp/recreation/hessie-trailhead): Upper trailhead coordinate differs; advises seasonal shuttle use and winter access from Eldora.

Observed Google route snapshots: [Train Cars → access](https://www.google.com/maps/dir/?api=1&origin=The+Train+Cars,+101+CO-119,+Nederland,+CO&destination=39.9516888,-105.5950277&travelmode=driving) 13 min; [Kathmandu → access](https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=39.9516888%2C-105.59502767142855&travelmode=driving) 14 min; [access → Kathmandu](https://www.google.com/maps/dir/?api=1&origin=39.9516888%2C-105.59502767142855&destination=39.9620592%2C-105.5115103&travelmode=driving) 13 min. Picker range: **10–20 min**, including a 5-minute planning allowance beyond outward rounding.

Lower passenger-car access, not the upper hiking pin. Park only in signed areas. Parking search, shuttle waits/rides and the walk to the trail are additional; winter access may start in Eldora.

### Fourth of July Trailhead parking, end of CR 111

Coordinates: 39.995, -105.6342. Destination confidence: **High**. Drive-time confidence: **Medium**, with road-condition and availability caveats below.

- [Forest Service: Fourth of July Trailhead](https://www.fs.usda.gov/r02/arp/recreation/fourth-july-trailhead): Official coordinate and Eldora/road-end directions.
- [Forest Service: Arapaho Pass access](https://www.fs.usda.gov/r02/arp/recreation/trails/arapaho-pass-trail-0): Rough passenger-car road in summer; no seasonal gate, no winter maintenance, weather-dependent fall access.
- [OpenStreetMap trailhead parking](https://www.openstreetmap.org/way/229731562): Parking polygon corroborates the official road-end pin.

Observed Google route snapshots: [Train Cars → access](https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=39.995%2C-105.6342&travelmode=driving) 30 min; [Kathmandu → access](https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=39.995%2C-105.6342&travelmode=driving) 32 min; [access → Kathmandu](https://www.google.com/maps/dir/?api=1&origin=39.995%2C-105.6342&destination=39.9620592%2C-105.5115103&travelmode=driving) 31 min. Picker range: **30–45 min**, including a 10-minute planning allowance beyond outward rounding.

Rough final road; summer-access estimate. No winter maintenance and snowfall can block access. Parking or congestion can take longer; Hessie shuttle does not reach this trailhead.

### Long Lake Trailhead parking, Brainard Lake Recreation Area

Coordinates: 40.0778, -105.5844. Destination confidence: **High**. Drive-time confidence: **Medium**, with road-condition and availability caveats below.

- [Forest Service: Long Lake Trailhead](https://www.fs.usda.gov/r02/arp/recreation/long-lake-trailhead): Official coordinate, parking and access to Pawnee Pass and Isabelle Glacier trails.
- [Forest Service: Brainard seasonal access](https://www.fs.usda.gov/r02/arp/recreation/brainard-lake-recreation-area): Seasonal vehicle gate and timed-entry requirements.

Observed Google route snapshots: [Train Cars → access](https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=40.0778%2C-105.5844&travelmode=driving) 33 min; [Kathmandu → access](https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=40.0778%2C-105.5844&travelmode=driving) 32 min; [access → Kathmandu](https://www.google.com/maps/dir/?api=1&origin=40.0778%2C-105.5844&destination=39.9620592%2C-105.5115103&travelmode=driving) 31 min. Picker range: **30–40 min**, including a 5-minute planning allowance beyond outward rounding.

Assumes summer roads open and the correct timed-entry parking reservation. Entrance queues are additional; winter Gateway parking changes the hike.

### Mitchell Lake Trailhead parking, Brainard Lake Recreation Area

Coordinates: 40.0831, -105.5817. Destination confidence: **High**. Drive-time confidence: **Medium**, with road-condition and availability caveats below.

- [Forest Service: Mitchell Lake Trailhead](https://www.fs.usda.gov/r02/arp/recreation/mitchell-lake-trailhead): Official coordinate and parking.
- [Forest Service: Mitchell / Blue Lake Trail](https://www.fs.usda.gov/r02/arp/recreation/trails/mitchell-lake-trail): Confirms Blue Lake is reached on the Mitchell Lake trail.
- [Forest Service: Brainard seasonal access](https://www.fs.usda.gov/r02/arp/recreation/brainard-lake-recreation-area): Seasonal vehicle gate and timed-entry requirements.

Observed Google route snapshots: [Train Cars → access](https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=40.0831%2C-105.5817&travelmode=driving) 32 min; [Kathmandu → access](https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=40.0831%2C-105.5817&travelmode=driving) 32 min; [access → Kathmandu](https://www.google.com/maps/dir/?api=1&origin=40.0831%2C-105.5817&destination=39.9620592%2C-105.5115103&travelmode=driving) 31 min. Picker range: **30–40 min**, including a 5-minute planning allowance beyond outward rounding.

Assumes summer roads open and the correct timed-entry parking reservation. Entrance queues are additional; winter Gateway parking changes the hike.

### Niwot Picnic Area parking / Niwot Cutoff access

Coordinates: 40.07653409, -105.57734224. Destination confidence: **Medium**. Drive-time confidence: **Medium**, with road-condition and availability caveats below.

- [OpenStreetMap: Niwot Picnic Area parking](https://www.openstreetmap.org/way/452964342): Named public asphalt parking polygon, distinct from the ridge summit.
- [Forest Service: Niwot Picnic Site](https://www.fs.usda.gov/r02/arp/recreation/niwot-picnic-site): Identifies the picnic site and advises Brainard Lake parking with a 0.5–1 mile walk when needed.
- [Niwot Ridge hiking guide](https://www.gohikecolorado.com/niwot-ridge): Secondary evidence for the Niwot Cutoff approach and alternate Brainard Lake parking.

Observed Google route snapshots: [Train Cars → access](https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=40.076534093333336%2C-105.57734224000001&travelmode=driving) 30 min; [Kathmandu → access](https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=40.076534093333336%2C-105.57734224000001&travelmode=driving) 29 min; [access → Kathmandu](https://www.google.com/maps/dir/?api=1&origin=40.076534093333336%2C-105.57734224000001&destination=39.9620592%2C-105.5115103&travelmode=driving) 28 min. Picker range: **25–35 min**, including a 5-minute planning allowance beyond outward rounding.

Chosen Brainard/Niwot Cutoff approach to the broadly named Niwot Ridge Trail. Other ridge approaches exist. Confirm permitted parking/reservation; seasonal gate and walking from alternate lots change access.

## Trail-to-access associations

- Hessie, Lost Lake, King Lake and Devil’s Thumb: [Boulder County](https://bouldercounty.gov/open-space/parks-and-trails/hessie-trailhead/) and the [Forest Service Hessie page](https://www.fs.usda.gov/r02/arp/recreation/hessie-trailhead). Jasper Lake: [Boulder County's explicit Hessie-access report](https://bouldercounty.gov/news/sick-hiker-and-dog-rescued-near-jasper-lake/) and the [Forest Service Indian Peaks map](https://www.fs.usda.gov/Internet/FSE_DOCUMENTS/fseprd502324.pdf).
- Diamond Lake and Arapaho Pass: [Forest Service Diamond Lake starting point](https://www.fs.usda.gov/r02/arp/recreation/trails/diamond-lake-trail) and [Arapaho Pass starting point](https://www.fs.usda.gov/r02/arp/recreation/trails/arapaho-pass-trail-0). The catalog's Diamond Lake choice uses Fourth of July, although a longer approach from Hessie exists.
- Blue Lake: [Forest Service Mitchell Lake Trail description](https://www.fs.usda.gov/r02/arp/recreation/trails/mitchell-lake-trail). Lake Isabelle and Pawnee Pass: [Long Lake Trailhead](https://www.fs.usda.gov/r02/arp/recreation/long-lake-trailhead) and [official Isabelle Glacier trail sheet](https://www.fs.usda.gov/Internet/FSE_DOCUMENTS/fsm91_058154.pdf).
- Niwot Ridge: chosen Brainard/Niwot Cutoff start, supported by mapped parking, the official picnic-site page and the secondary hiking guide. The generic catalog name also fits other approaches, so confidence remains Medium; the estimate does not cover a Mountain Research Station start.

These additions fill drive-time evidence only. They do not invent missing hiking mileage or claim to verify live closures.
