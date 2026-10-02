// Researched access destinations; planning ranges, not live ETAs.
// Sources and all 21 trails: research/nederland/DRIVE-ESTIMATES.md.
const trailAccessData = {
  "checkedOn": "2026-10-02",
  "provider": "Google Maps road routes",
  "referencePoints": {
    "trainCars": {
      "name": "The Train Cars Coffee and Kava",
      "address": "101 CO-119, Nederland, CO 80466",
      "latitude": 39.9604095,
      "longitude": -105.5100534,
      "source": "https://www.openstreetmap.org/way/130503322"
    },
    "kathmandu": {
      "name": "Kathmandu Restaurant",
      "address": "110 N Jefferson St, Nederland, CO 80466",
      "latitude": 39.9620592,
      "longitude": -105.5115103,
      "source": "https://www.openstreetmap.org/way/130502575"
    }
  },
  "destinations": {
    "mud": {
      "name": "Mud Lake Trailhead parking, CR 126",
      "latitude": 39.9791426,
      "longitude": -105.5079225,
      "confidence": "High",
      "approximateAccess": false,
      "allowanceMinutes": 0,
      "note": "Drive to the county trailhead lot; parking search and walking time are additional.",
      "sources": [
        {
          "label": "Boulder County: Mud Lake",
          "url": "https://bouldercounty.gov/open-space/parks-and-trails/mud-lake/",
          "evidence": "Official trailhead map and parking amenities."
        },
        {
          "label": "OpenStreetMap parking lot",
          "url": "https://www.openstreetmap.org/way/724186477",
          "evidence": "Named Mud Lake Trailhead parking geometry; coordinate from Photon/OSM."
        }
      ],
      "rangeMinutes": [
        5,
        10
      ],
      "estimates": {
        "fromTrainCars": {
          "baselineMinutes": 6,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=39.9791426%2C-105.5079225&travelmode=driving"
        },
        "fromKathmandu": {
          "baselineMinutes": 6,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=39.9791426%2C-105.5079225&travelmode=driving"
        },
        "toKathmandu": {
          "baselineMinutes": 6,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9791426%2C-105.5079225&destination=39.9620592%2C-105.5115103&travelmode=driving"
        }
      }
    },
    "caribou": {
      "name": "Caribou Ranch Trailhead parking, CR 126",
      "latitude": 39.9822886,
      "longitude": -105.5190167,
      "confidence": "High",
      "approximateAccess": false,
      "allowanceMinutes": 0,
      "note": "County lot; signed overflow on the south side of CR 126 when full. Park closes April 1–June 30.",
      "sources": [
        {
          "label": "Boulder County: Caribou Ranch",
          "url": "https://bouldercounty.gov/open-space/parks-and-trails/caribou-ranch/",
          "evidence": "Official trailhead map, 25 car spaces and permitted CR 126 overflow."
        },
        {
          "label": "OpenStreetMap parking lot",
          "url": "https://www.openstreetmap.org/way/307952514",
          "evidence": "Named Caribou Ranch Trailhead parking geometry; coordinate from Photon/OSM."
        }
      ],
      "rangeMinutes": [
        5,
        10
      ],
      "estimates": {
        "fromTrainCars": {
          "baselineMinutes": 7,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=39.9822886%2C-105.5190167&travelmode=driving"
        },
        "fromKathmandu": {
          "baselineMinutes": 7,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=39.9822886%2C-105.5190167&travelmode=driving"
        },
        "toKathmandu": {
          "baselineMinutes": 6,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9822886%2C-105.5190167&destination=39.9620592%2C-105.5115103&travelmode=driving"
        }
      }
    },
    "barker": {
      "name": "Barker Reservoir west-shore public parking, East Street",
      "latitude": 39.96457752,
      "longitude": -105.5037107533,
      "confidence": "High",
      "approximateAccess": false,
      "allowanceMinutes": 0,
      "note": "Chosen west-shore access for the broadly named Nederland Reservoir Trail; other shoreline starts are possible.",
      "sources": [
        {
          "label": "Town of Nederland: trails and open spaces",
          "url": "https://www.nederlandco.org/1446/Trails-Open-Spaces",
          "evidence": "Lists public parking and hiking access at East Street/Boulder Canyon Drive."
        },
        {
          "label": "OpenStreetMap west-shore parking",
          "url": "https://www.openstreetmap.org/way/130815030",
          "evidence": "Parking polygon beside the west-shore path, not the reservoir center."
        }
      ],
      "rangeMinutes": [
        1,
        5
      ],
      "estimates": {
        "fromTrainCars": {
          "baselineMinutes": 2,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=39.96457752%2C-105.50371075333334&travelmode=driving"
        },
        "fromKathmandu": {
          "baselineMinutes": 2,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=39.96457752%2C-105.50371075333334&travelmode=driving"
        },
        "toKathmandu": {
          "baselineMinutes": 2,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.96457752%2C-105.50371075333334&destination=39.9620592%2C-105.5115103&travelmode=driving"
        }
      }
    },
    "westMagnolia": {
      "name": "West Magnolia main trailhead lot, CR 132W / FS 355A",
      "latitude": 39.94677333,
      "longitude": -105.5177483,
      "confidence": "High",
      "approximateAccess": false,
      "allowanceMinutes": 5,
      "note": "Main lot beyond the second Forest Service gate. Estimate assumes road/gates open; highway-side parking is a different start.",
      "sources": [
        {
          "label": "Forest Service: West Magnolia Trailhead",
          "url": "https://www.fs.usda.gov/r02/arp/recreation/west-magnolia-trailhead",
          "evidence": "Published coordinates and directions one mile along CR 132W to the main parking area."
        }
      ],
      "rangeMinutes": [
        5,
        15
      ],
      "estimates": {
        "fromTrainCars": {
          "baselineMinutes": 7,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=39.94677333%2C-105.5177483&travelmode=driving"
        },
        "fromKathmandu": {
          "baselineMinutes": 8,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=39.94677333%2C-105.5177483&travelmode=driving"
        },
        "toKathmandu": {
          "baselineMinutes": 8,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.94677333%2C-105.5177483&destination=39.9620592%2C-105.5115103&travelmode=driving"
        }
      }
    },
    "gordon": {
      "name": "Gordon Gulch access entrance, CO-72 / NFSR 226",
      "latitude": 40.009793,
      "longitude": -105.50171,
      "confidence": "Medium",
      "approximateAccess": true,
      "allowanceMinutes": 5,
      "note": "Approximate access entrance, not a verified dedicated hiking lot. Find a permitted pull-off without blocking roads or campsites; deeper starts add time.",
      "sources": [
        {
          "label": "Forest Service: Gordon Gulch",
          "url": "https://www.fs.usda.gov/r02/arp/recreation/gordon-gulch-dispersed-camping-area",
          "evidence": "Official access coordinate and turn from CO-72 onto NFSR 226."
        },
        {
          "label": "Forest Service access map",
          "url": "https://www.fs.usda.gov/media/71643",
          "evidence": "Mapped maintained highway, unmaintained roads, gates and camping area."
        },
        {
          "label": "AllTrails: Gordon Gulch",
          "url": "https://www.alltrails.com/trail/us/colorado/gordon-gulch-trail",
          "evidence": "September 24 and August 18, 2025 reviews identify this hike as walking the camping-area roads; secondary association evidence."
        }
      ],
      "rangeMinutes": [
        5,
        15
      ],
      "estimates": {
        "fromTrainCars": {
          "baselineMinutes": 9,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=40.009793%2C-105.50171&travelmode=driving"
        },
        "fromKathmandu": {
          "baselineMinutes": 8,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=40.009793%2C-105.50171&travelmode=driving"
        },
        "toKathmandu": {
          "baselineMinutes": 8,
          "source": "https://www.google.com/maps/dir/?api=1&origin=40.009793%2C-105.50171&destination=39.9620592%2C-105.5115103&travelmode=driving"
        }
      }
    },
    "sugarloaf": {
      "name": "Sugarloaf Mountain Road road-end / Switzerland Trail parking",
      "latitude": 40.0254,
      "longitude": -105.4252,
      "confidence": "Medium",
      "approximateAccess": true,
      "allowanceMinutes": 5,
      "approachWaypoints": [
        {
          "latitude": 40.02016,
          "longitude": -105.41467
        }
      ],
      "note": "Approximate shared parking/road-end. Approach via Sugarloaf Road and Sugarloaf Mountain Road; avoid the Switzerland Trail driving shortcut. Final road is unpaved.",
      "sources": [
        {
          "label": "OpenStreetMap: Sugarloaf Mountain Road",
          "url": "https://www.openstreetmap.org/way/17018842",
          "evidence": "Mapped unpaved access road reaching the chosen road-end; no dedicated parking polygon was found."
        },
        {
          "label": "Sugarloaf hiking guide",
          "url": "https://www.outsideonline.com/adventure-travel/destinations/north-america/best-hikes-in-boulder-colorado/",
          "evidence": "Published parking coordinate 40.02540, -105.42520; secondary evidence for the road-end choice."
        },
        {
          "label": "Hiking Project: Sugarloaf Mountain",
          "url": "https://www.hikingproject.com/trail/7005887/sugarloaf-mountain",
          "evidence": "Corroborates the large parking area at the Switzerland Trail intersection."
        }
      ],
      "rangeMinutes": [
        20,
        30
      ],
      "estimates": {
        "fromTrainCars": {
          "baselineMinutes": 21,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=40.0254%2C-105.4252&travelmode=driving&waypoints=40.02016%2C-105.41467"
        },
        "fromKathmandu": {
          "baselineMinutes": 20,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=40.0254%2C-105.4252&travelmode=driving&waypoints=40.02016%2C-105.41467"
        },
        "toKathmandu": {
          "baselineMinutes": 21,
          "source": "https://www.google.com/maps/dir/?api=1&origin=40.0254%2C-105.4252&destination=39.9620592%2C-105.5115103&travelmode=driving&waypoints=40.02016%2C-105.41467"
        }
      }
    },
    "rainbow": {
      "name": "Rainbow Lakes Trailhead parking, NFSR 298 / CR 116",
      "latitude": 40.00949833,
      "longitude": -105.5690483,
      "confidence": "High",
      "approximateAccess": false,
      "allowanceMinutes": 10,
      "approachWaypoints": [
        {
          "latitude": 40.0273588,
          "longitude": -105.5246755
        }
      ],
      "note": "Five-mile unpaved approach; high clearance recommended. Assumes the winter gate is open. Follow NFSR 298 / CR 116; avoid the rougher Caribou / FR 505 shortcut.",
      "sources": [
        {
          "label": "Forest Service: Rainbow Lakes Trailhead",
          "url": "https://www.fs.usda.gov/r02/arp/recreation/rainbow-lakes-trailhead",
          "evidence": "Published trailhead coordinate, official CO-72/NFSR 298 approach, winter gate and high-clearance recommendation."
        },
        {
          "label": "OpenStreetMap trailhead parking",
          "url": "https://www.openstreetmap.org/way/322675677",
          "evidence": "Named parking lot corroborates the official pin."
        }
      ],
      "rangeMinutes": [
        25,
        40
      ],
      "estimates": {
        "fromTrainCars": {
          "baselineMinutes": 29,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=40.00949833%2C-105.5690483&travelmode=driving"
        },
        "fromKathmandu": {
          "baselineMinutes": 28,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=40.00949833%2C-105.5690483&travelmode=driving"
        },
        "toKathmandu": {
          "baselineMinutes": 27,
          "source": "https://www.google.com/maps/dir/?api=1&origin=40.00949833%2C-105.5690483&destination=39.9620592%2C-105.5115103&travelmode=driving"
        }
      }
    },
    "hessie": {
      "name": "Hessie lower roadside parking / shuttle drop-off, CR 111",
      "latitude": 39.9516888,
      "longitude": -105.59502767,
      "confidence": "High",
      "approximateAccess": false,
      "allowanceMinutes": 5,
      "note": "Lower passenger-car access, not the upper hiking pin. Park only in signed areas. Parking search, shuttle waits/rides and the walk to the trail are additional; winter access may start in Eldora.",
      "sources": [
        {
          "label": "Boulder County: Hessie access and shuttle",
          "url": "https://bouldercounty.gov/open-space/parks-and-trails/hessie-trailhead/",
          "evidence": "Designated CR 111 roadside parking, shuttle access and trail associations."
        },
        {
          "label": "OpenStreetMap lower parking",
          "url": "https://www.openstreetmap.org/way/424187733",
          "evidence": "Public parking polygon near 39.95169, -105.59503, below the upper trailhead."
        },
        {
          "label": "Forest Service: Hessie Trailhead",
          "url": "https://www.fs.usda.gov/r02/arp/recreation/hessie-trailhead",
          "evidence": "Upper trailhead coordinate differs; advises seasonal shuttle use and winter access from Eldora."
        }
      ],
      "rangeMinutes": [
        10,
        20
      ],
      "estimates": {
        "fromTrainCars": {
          "baselineMinutes": 13,
          "source": "https://www.google.com/maps/dir/?api=1&origin=The+Train+Cars,+101+CO-119,+Nederland,+CO&destination=39.9516888,-105.5950277&travelmode=driving"
        },
        "fromKathmandu": {
          "baselineMinutes": 14,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=39.9516888%2C-105.59502767142855&travelmode=driving"
        },
        "toKathmandu": {
          "baselineMinutes": 13,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9516888%2C-105.59502767142855&destination=39.9620592%2C-105.5115103&travelmode=driving"
        }
      }
    },
    "fourth": {
      "name": "Fourth of July Trailhead parking, end of CR 111",
      "latitude": 39.995,
      "longitude": -105.6342,
      "confidence": "High",
      "approximateAccess": false,
      "allowanceMinutes": 10,
      "note": "Rough final road; summer-access estimate. No winter maintenance and snowfall can block access. Parking or congestion can take longer; Hessie shuttle does not reach this trailhead.",
      "sources": [
        {
          "label": "Forest Service: Fourth of July Trailhead",
          "url": "https://www.fs.usda.gov/r02/arp/recreation/fourth-july-trailhead",
          "evidence": "Official coordinate and Eldora/road-end directions."
        },
        {
          "label": "Forest Service: Arapaho Pass access",
          "url": "https://www.fs.usda.gov/r02/arp/recreation/trails/arapaho-pass-trail-0",
          "evidence": "Rough passenger-car road in summer; no seasonal gate, no winter maintenance, weather-dependent fall access."
        },
        {
          "label": "OpenStreetMap trailhead parking",
          "url": "https://www.openstreetmap.org/way/229731562",
          "evidence": "Parking polygon corroborates the official road-end pin."
        }
      ],
      "rangeMinutes": [
        30,
        45
      ],
      "estimates": {
        "fromTrainCars": {
          "baselineMinutes": 30,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=39.995%2C-105.6342&travelmode=driving"
        },
        "fromKathmandu": {
          "baselineMinutes": 32,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=39.995%2C-105.6342&travelmode=driving"
        },
        "toKathmandu": {
          "baselineMinutes": 31,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.995%2C-105.6342&destination=39.9620592%2C-105.5115103&travelmode=driving"
        }
      }
    },
    "long": {
      "name": "Long Lake Trailhead parking, Brainard Lake Recreation Area",
      "latitude": 40.0778,
      "longitude": -105.5844,
      "confidence": "High",
      "approximateAccess": false,
      "allowanceMinutes": 5,
      "note": "Assumes summer roads open and the correct timed-entry parking reservation. Entrance queues are additional; winter Gateway parking changes the hike.",
      "sources": [
        {
          "label": "Forest Service: Long Lake Trailhead",
          "url": "https://www.fs.usda.gov/r02/arp/recreation/long-lake-trailhead",
          "evidence": "Official coordinate, parking and access to Pawnee Pass and Isabelle Glacier trails."
        },
        {
          "label": "Forest Service: Brainard seasonal access",
          "url": "https://www.fs.usda.gov/r02/arp/recreation/brainard-lake-recreation-area",
          "evidence": "Seasonal vehicle gate and timed-entry requirements."
        }
      ],
      "rangeMinutes": [
        30,
        40
      ],
      "estimates": {
        "fromTrainCars": {
          "baselineMinutes": 33,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=40.0778%2C-105.5844&travelmode=driving"
        },
        "fromKathmandu": {
          "baselineMinutes": 32,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=40.0778%2C-105.5844&travelmode=driving"
        },
        "toKathmandu": {
          "baselineMinutes": 31,
          "source": "https://www.google.com/maps/dir/?api=1&origin=40.0778%2C-105.5844&destination=39.9620592%2C-105.5115103&travelmode=driving"
        }
      }
    },
    "mitchell": {
      "name": "Mitchell Lake Trailhead parking, Brainard Lake Recreation Area",
      "latitude": 40.0831,
      "longitude": -105.5817,
      "confidence": "High",
      "approximateAccess": false,
      "allowanceMinutes": 5,
      "note": "Assumes summer roads open and the correct timed-entry parking reservation. Entrance queues are additional; winter Gateway parking changes the hike.",
      "sources": [
        {
          "label": "Forest Service: Mitchell Lake Trailhead",
          "url": "https://www.fs.usda.gov/r02/arp/recreation/mitchell-lake-trailhead",
          "evidence": "Official coordinate and parking."
        },
        {
          "label": "Forest Service: Mitchell / Blue Lake Trail",
          "url": "https://www.fs.usda.gov/r02/arp/recreation/trails/mitchell-lake-trail",
          "evidence": "Confirms Blue Lake is reached on the Mitchell Lake trail."
        },
        {
          "label": "Forest Service: Brainard seasonal access",
          "url": "https://www.fs.usda.gov/r02/arp/recreation/brainard-lake-recreation-area",
          "evidence": "Seasonal vehicle gate and timed-entry requirements."
        }
      ],
      "rangeMinutes": [
        30,
        40
      ],
      "estimates": {
        "fromTrainCars": {
          "baselineMinutes": 32,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=40.0831%2C-105.5817&travelmode=driving"
        },
        "fromKathmandu": {
          "baselineMinutes": 32,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=40.0831%2C-105.5817&travelmode=driving"
        },
        "toKathmandu": {
          "baselineMinutes": 31,
          "source": "https://www.google.com/maps/dir/?api=1&origin=40.0831%2C-105.5817&destination=39.9620592%2C-105.5115103&travelmode=driving"
        }
      }
    },
    "niwot": {
      "name": "Niwot Picnic Area parking / Niwot Cutoff access",
      "latitude": 40.07653409,
      "longitude": -105.57734224,
      "confidence": "Medium",
      "approximateAccess": false,
      "allowanceMinutes": 5,
      "note": "Chosen Brainard/Niwot Cutoff approach to the broadly named Niwot Ridge Trail. Other ridge approaches exist. Confirm permitted parking/reservation; seasonal gate and walking from alternate lots change access.",
      "sources": [
        {
          "label": "OpenStreetMap: Niwot Picnic Area parking",
          "url": "https://www.openstreetmap.org/way/452964342",
          "evidence": "Named public asphalt parking polygon, distinct from the ridge summit."
        },
        {
          "label": "Forest Service: Niwot Picnic Site",
          "url": "https://www.fs.usda.gov/r02/arp/recreation/niwot-picnic-site",
          "evidence": "Identifies the picnic site and advises Brainard Lake parking with a 0.5–1 mile walk when needed."
        },
        {
          "label": "Niwot Ridge hiking guide",
          "url": "https://www.gohikecolorado.com/niwot-ridge",
          "evidence": "Secondary evidence for the Niwot Cutoff approach and alternate Brainard Lake parking."
        }
      ],
      "rangeMinutes": [
        25,
        35
      ],
      "estimates": {
        "fromTrainCars": {
          "baselineMinutes": 30,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9604095%2C-105.5100534&destination=40.076534093333336%2C-105.57734224000001&travelmode=driving"
        },
        "fromKathmandu": {
          "baselineMinutes": 29,
          "source": "https://www.google.com/maps/dir/?api=1&origin=39.9620592%2C-105.5115103&destination=40.076534093333336%2C-105.57734224000001&travelmode=driving"
        },
        "toKathmandu": {
          "baselineMinutes": 28,
          "source": "https://www.google.com/maps/dir/?api=1&origin=40.076534093333336%2C-105.57734224000001&destination=39.9620592%2C-105.5115103&travelmode=driving"
        }
      }
    }
  },
  "regions": {
    "NED": {
      "Mud Lake Open Space": "mud",
      "Caribou Ranch Open Space": "caribou",
      "Nederland Reservoir Trail": "barker",
      "West Magnolia Trail System": "westMagnolia",
      "Gordon Gulch Trail": "gordon",
      "Sugarloaf Mountain Trails": "sugarloaf",
      "Rainbow Lakes Trail": "rainbow",
      "Hessie Trailhead": "hessie",
      "Lost Lake via Hessie": "hessie",
      "King Lake Trail": "hessie",
      "Diamond Lake Trail": "fourth",
      "Jasper Lake Trail": "hessie",
      "Devil’s Thumb Trail": "hessie",
      "Fourth of July Trailhead": "fourth",
      "Arapaho Pass Trail": "fourth",
      "Blue Lake Trail": "mitchell",
      "Lake Isabelle Trail": "long",
      "Long Lake Trailhead": "long",
      "Mitchell Lake Trailhead": "mitchell",
      "Pawnee Pass Trail": "long",
      "Niwot Ridge Trail": "niwot"
    }
  },
  "method": "Separately observed Google Maps driving routes from Train Cars and Kathmandu and back to Kathmandu. Round the combined baseline span outward to five minutes, then add a planning allowance of five minutes for short dirt/inferred/high-mountain access or ten for a long rough approach. These are planning bands, not measured confidence intervals or live ETAs; no manual road speed calculation."
};
