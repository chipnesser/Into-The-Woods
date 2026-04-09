const DONATION_PLACEHOLDER_URL = "#";
const DEFAULT_BUCKET = "quick";

const madisonQuickTrails = [
  {
    name: "Pheasant Branch Conservancy Trailhead",
    address: "4864 Pheasant Branch Rd, Middleton, WI 53562",
    latitude: 43.1207,
    longitude: -89.4825,
    coopDrive: "18 min",
    trailLength: "3.5 mi",
    postHikeDrive: "51 min",
    seasonalBoosts: [{ months: [4, 5, 10], multiplier: 1.55, reason: "spring marsh energy and fall color" }]
  },
  {
    name: "Ice Age Trail - Table Bluff Segment Trailhead",
    address: "5735 County Hwy KP, Cross Plains, WI 53528",
    latitude: 43.1185,
    longitude: -89.6745,
    coopDrive: "29 min",
    trailLength: "2.8 mi",
    postHikeDrive: "48 min",
    seasonalBoosts: [{ months: [5, 6, 10], multiplier: 1.45, reason: "wildflowers and ridge views" }]
  },
  {
    name: "Ice Age Trail - Cross Plains Segment (Hwy P Trailhead)",
    address: "5787 County Hwy P, Cross Plains, WI 53528",
    latitude: 43.116,
    longitude: -89.652,
    coopDrive: "27 min",
    trailLength: "4.0 mi",
    postHikeDrive: "48 min",
    seasonalBoosts: [{ months: [5, 6, 10], multiplier: 1.4, reason: "wildflower season and crisp fall light" }]
  },
  {
    name: "Indian Lake County Park (Main Trailhead)",
    address: "8183 State Hwy 19, Cross Plains, WI 53528",
    latitude: 43.1465,
    longitude: -89.7285,
    coopDrive: "33 min",
    trailLength: "4.6 mi",
    postHikeDrive: "52 min",
    seasonalBoosts: [{ months: [5, 6, 9, 10], multiplier: 1.5, reason: "prairie bloom and big shoulder-season skies" }]
  },
  {
    name: "Donald County Park (Main Trailhead)",
    address: "1945 County Hwy A, Mount Horeb, WI 53572",
    latitude: 43.0227,
    longitude: -89.8015,
    coopDrive: "37 min",
    trailLength: "3.2 mi",
    postHikeDrive: "58 min",
    seasonalBoosts: [{ months: [9, 10], multiplier: 1.45, reason: "fall ridges feel especially right here" }]
  },
  {
    name: "Ice Age Trail - Verona Segment (Badger Prairie Park Trailhead)",
    address: "4654 Maple Grove Dr, Verona, WI 53593",
    latitude: 42.996,
    longitude: -89.54,
    coopDrive: "21 min",
    trailLength: "2.7 mi",
    postHikeDrive: "41 min",
    seasonalBoosts: [{ months: [4, 5], multiplier: 1.3, reason: "easy spring reset close to town" }]
  },
  {
    name: "Cherokee Marsh Conservation Park - North Unit",
    address: "6098 N Sherman Ave, Madison, WI 53704",
    latitude: 43.1518,
    longitude: -89.384,
    coopDrive: "17 min",
    trailLength: "2.5 mi",
    postHikeDrive: "55 min",
    seasonalBoosts: [{ months: [4, 5, 9], multiplier: 1.6, reason: "birdy marsh magic" }]
  },
  {
    name: "Owen Conservation Park Trailhead",
    address: "6021 Old Sauk Rd, Madison, WI 53705",
    latitude: 43.0745,
    longitude: -89.492,
    coopDrive: "18 min",
    trailLength: "3.0 mi",
    postHikeDrive: "45 min",
    seasonalBoosts: [{ months: [6, 7, 8, 10], multiplier: 1.25, reason: "leafy shade and easy golden-hour loops" }]
  },
  {
    name: "Ice Age Trail - Brooklyn Wildlife Area Trailhead",
    address: "1100 County Hwy MM, Brooklyn, WI 53521",
    latitude: 42.8665,
    longitude: -89.374,
    coopDrive: "34 min",
    trailLength: "5.5 mi",
    postHikeDrive: "29 min",
    seasonalBoosts: [{ months: [4, 5, 10], multiplier: 1.35, reason: "good shoulder-season ramble country" }]
  },
  {
    name: "Brigham County Park Trailhead",
    address: "3160 County Hwy F, Blue Mounds, WI 53517",
    latitude: 43.04,
    longitude: -89.842,
    coopDrive: "35 min",
    trailLength: "3.8 mi",
    postHikeDrive: "54 min",
    seasonalBoosts: [{ months: [5, 6], multiplier: 1.75, reason: "wildflower season around Blue Mounds" }]
  }
];

const madisonLongerTrails = [
  {
    name: "Gibraltar Rock State Natural Area Trailhead",
    address: "4448 County Rd V, Lodi, WI 53555",
    latitude: 43.3825,
    longitude: -89.507,
    coopDrive: "48 min",
    trailLength: "4.0 mi",
    postHikeDrive: "75 min",
    seasonalBoosts: [{ months: [9, 10], multiplier: 1.55, reason: "cliffside fall color is a crowd-pleaser" }]
  },
  {
    name: "Ice Age Trail - Lodi Marsh Segment Trailhead",
    address: "W11602 County Rd V, Lodi, WI 53555",
    latitude: 43.38,
    longitude: -89.498,
    coopDrive: "50 min",
    trailLength: "3.5 mi",
    postHikeDrive: "78 min",
    seasonalBoosts: [{ months: [4, 5], multiplier: 1.55, reason: "spring marsh vibes" }]
  },
  {
    name: "Parfrey's Glen State Natural Area Trailhead",
    address: "S5975 Park Rd, Merrimac, WI 53561",
    latitude: 43.4204,
    longitude: -89.7306,
    coopDrive: "55 min",
    trailLength: "1.4 mi",
    postHikeDrive: "86 min",
    seasonalBoosts: [{ months: [6, 7, 8], multiplier: 1.35, reason: "cool gorge weather on warmer days" }]
  },
  {
    name: "Devil's Lake State Park - West Bluff Trailhead",
    address: "S5975 Park Rd, Baraboo, WI 53913",
    latitude: 43.4187,
    longitude: -89.7318,
    coopDrive: "58 min",
    trailLength: "4.2 mi",
    postHikeDrive: "89 min",
    seasonalBoosts: [{ months: [9, 10], multiplier: 1.7, reason: "peak bluff drama in fall" }]
  },
  {
    name: "Ice Age Trail - Devil's Lake Segment (Steinke Basin Trailhead)",
    address: "Steinke Basin Parking Lot, Baraboo, WI 53913",
    latitude: 43.4215,
    longitude: -89.69,
    coopDrive: "57 min",
    trailLength: "5.2 mi",
    postHikeDrive: "88 min",
    seasonalBoosts: [{ months: [9, 10], multiplier: 1.6, reason: "classic Devil's Lake shoulder-season pick" }]
  },
  {
    name: "Governor Dodge State Park - Cox Hollow Trailhead",
    address: "4175 WI-23, Dodgeville, WI 53533",
    latitude: 43.0255,
    longitude: -90.13,
    coopDrive: "68 min",
    trailLength: "4.8 mi",
    postHikeDrive: "80 min",
    seasonalBoosts: [{ months: [6, 7, 8, 10], multiplier: 1.35, reason: "big woods and summer lake breezes" }]
  },
  {
    name: "Blue Mound State Park Trailhead",
    address: "4350 Mounds Park Rd, Blue Mounds, WI 53517",
    latitude: 43.017,
    longitude: -89.862,
    coopDrive: "47 min",
    trailLength: "5.0 mi",
    postHikeDrive: "63 min",
    seasonalBoosts: [{ months: [5, 6], multiplier: 1.8, reason: "wildflowers in season" }]
  },
  {
    name: "Ice Age Trail - Whitewater Lake Segment Trailhead",
    address: "N7530 Kettle Moraine Dr, Whitewater, WI 53190",
    latitude: 42.806,
    longitude: -88.722,
    coopDrive: "70 min",
    trailLength: "4.7 mi",
    postHikeDrive: "23 min",
    seasonalBoosts: [{ months: [9, 10], multiplier: 1.4, reason: "excellent fall woods day" }]
  },
  {
    name: "Emma Carlin Trail System Trailhead (Kettle Moraine South)",
    address: "N7610 County Hwy Z, Palmyra, WI 53156",
    latitude: 42.841,
    longitude: -88.561,
    coopDrive: "73 min",
    trailLength: "6.3 mi",
    postHikeDrive: "30 min",
    seasonalBoosts: [{ months: [9, 10], multiplier: 1.5, reason: "Kettle Moraine gets extra lovely in fall" }]
  },
  {
    name: "Ice Age Trail - Scuppernong / Stoney Ridge Trailhead",
    address: "S6330 WI-67, Eagle, WI 53119",
    latitude: 42.821,
    longitude: -88.478,
    coopDrive: "72 min",
    trailLength: "5.8 mi",
    postHikeDrive: "20 min",
    seasonalBoosts: [{ months: [9, 10], multiplier: 1.45, reason: "ridge walking in fall is hard to beat" }]
  },
  {
    name: "Horicon Marsh State Wildlife Area - Ledge Road Trailhead",
    address: "N7725 WI-28, Horicon, WI 53032",
    latitude: 43.509,
    longitude: -88.64,
    coopDrive: "72 min",
    trailLength: "3.0 mi",
    postHikeDrive: "91 min",
    seasonalBoosts: [{ months: [4, 5], multiplier: 1.9, reason: "spring Horicon Marsh migration glory" }]
  }
];

const doorCountyTrails = [
  {
    name: "Peninsula State Park",
    nearTown: "Fish Creek",
    mapQuery: "Peninsula State Park trailhead Fish Creek WI",
    vibe: "iconic overlooks and big park energy",
    crowdBias: "high",
    seasonBias: "shoulder",
    notes: "classic Door County choice that shines when the peninsula has a little breathing room",
    doorCountyTier: "classic",
    trailLength: "2.0-8.0 mi",
    coopDrive: "16 min",
    postHikeDrive: "4 min",
    latitude: 45.0548,
    longitude: -87.2474
  },
  {
    name: "Cave Point County Park",
    nearTown: "near Sturgeon Bay",
    mapQuery: "Cave Point County Park Door County WI",
    vibe: "wave drama, bluff edges, everybody knows why it is famous",
    crowdBias: "high",
    seasonBias: "shoulder",
    notes: "wonderful on slower days, especially outside the biggest summer crush",
    doorCountyTier: "classic",
    trailLength: "1.0-2.5 mi",
    coopDrive: "34 min",
    postHikeDrive: "29 min",
    latitude: 44.7941,
    longitude: -87.1851
  },
  {
    name: "Whitefish Dunes State Park",
    nearTown: "near Sturgeon Bay",
    mapQuery: "Whitefish Dunes State Park Door County WI",
    vibe: "dunes, beach grass, and a more spacious classic shoreline feel",
    crowdBias: "high",
    seasonBias: "shoulder",
    notes: "an obvious beauty that makes more sense when crowd pressure is lower",
    doorCountyTier: "classic",
    trailLength: "2.5-4.0 mi",
    coopDrive: "33 min",
    postHikeDrive: "27 min",
    latitude: 44.8006,
    longitude: -87.1956
  },
  {
    name: "Newport State Park",
    nearTown: "Ellison Bay",
    mapQuery: "Newport State Park trailhead Door County WI",
    vibe: "big sky, quieter, spacious",
    crowdBias: "medium",
    seasonBias: "all",
    notes: "excellent in-between Door County choice",
    doorCountyTier: "middle",
    trailLength: "2.0-7.0 mi",
    coopDrive: "29 min",
    postHikeDrive: "23 min",
    latitude: 45.2858,
    longitude: -86.9922
  },
  {
    name: "Heins Creek Nature Preserve",
    nearTown: "Baileys Harbor",
    mapQuery: "Heins Creek Nature Preserve Door County WI",
    vibe: "small, local-feeling, easy reset",
    crowdBias: "low",
    seasonBias: "peak",
    notes: "Door County Land Trust preserve with a 0.75-mile loop and easy level-to-rolling terrain",
    doorCountyTier: "bside",
    trailLength: "0.75 mi",
    coopDrive: "18 min",
    postHikeDrive: "12 min"
  },
  {
    name: "Bay Shore Blufflands Nature Preserve",
    nearTown: "near Sturgeon Bay",
    mapQuery: "Bay Shore Blufflands Nature Preserve Door County WI",
    vibe: "bluffland quiet with a little exertion",
    crowdBias: "low",
    seasonBias: "peak",
    notes: "Door County Land Trust preserve with 2.5 miles of trail and a steeper bluff section",
    doorCountyTier: "bside",
    trailLength: "2.5 mi",
    coopDrive: "42 min",
    postHikeDrive: "35 min"
  },
  {
    name: "Three Springs Nature Preserve",
    nearTown: "Sister Bay",
    mapQuery: "Three Springs Nature Preserve Door County WI",
    vibe: "quiet woods, roomy preserve, easy wandering",
    crowdBias: "low",
    seasonBias: "peak",
    notes: "Door County Land Trust preserve with a 1.9-mile loop and fairly level terrain",
    doorCountyTier: "bside",
    trailLength: "1.9 mi",
    coopDrive: "10 min",
    postHikeDrive: "9 min"
  },
  {
    name: "Kangaroo Lake Nature Preserve",
    nearTown: "Baileys Harbor / Egg Harbor side",
    mapQuery: "Kangaroo Lake Nature Preserve Door County WI",
    vibe: "bluff views with a slightly tucked-away feeling",
    crowdBias: "low",
    seasonBias: "peak",
    notes: "Door County Land Trust preserve with a 1.5-mile loop and some rocky inclines",
    doorCountyTier: "bside",
    trailLength: "1.5 mi",
    coopDrive: "24 min",
    postHikeDrive: "17 min"
  },
  {
    name: "Lautenbach Woods Nature Preserve",
    nearTown: "Fish Creek",
    mapQuery: "Lautenbach Woods Nature Preserve Door County WI",
    vibe: "wooded and close to the hub, but quieter than the obvious reflex picks",
    crowdBias: "low",
    seasonBias: "peak",
    notes: "Door County Land Trust preserve with a 1.25-mile loop and some rocky bluff terrain",
    doorCountyTier: "bside",
    trailLength: "1.25 mi",
    coopDrive: "12 min",
    postHikeDrive: "6 min"
  },
  {
    name: "Oak Road Nature Preserve",
    nearTown: "Baileys Harbor",
    mapQuery: "Oak Road Nature Preserve Door County WI",
    vibe: "wetland overlook, gentle walking, very B-side",
    crowdBias: "low",
    seasonBias: "peak",
    notes: "Door County Land Trust preserve with 1.75 miles of loops and a viewing platform over wetland",
    doorCountyTier: "bside",
    trailLength: "1.75 mi",
    coopDrive: "21 min",
    postHikeDrive: "15 min"
  },
  {
    name: "Sturgeon Bay Ship Canal Nature Preserve",
    nearTown: "Sturgeon Bay",
    mapQuery: "Sturgeon Bay Ship Canal Nature Preserve Door County WI",
    vibe: "sandy, open, and less obvious than the headline parks",
    crowdBias: "low",
    seasonBias: "peak",
    notes: "Door County Land Trust preserve with 2.5 miles of hiking trails and ship canal views",
    doorCountyTier: "bside",
    trailLength: "2.5 mi",
    coopDrive: "38 min",
    postHikeDrive: "33 min"
  },
  {
    name: "White Cliff Nature Preserve",
    nearTown: "near Egg Harbor",
    mapQuery: "White Cliff Nature Preserve Door County WI",
    vibe: "quiet loop, easy footing, lovely lower-stakes outing",
    crowdBias: "low",
    seasonBias: "peak",
    notes: "Door County Land Trust preserve with a 1.5-mile loop and level terrain",
    doorCountyTier: "bside",
    trailLength: "1.5 mi",
    coopDrive: "26 min",
    postHikeDrive: "18 min"
  }
];

const beaconTrails = [
  {
    name: "Minnewaska State Park Preserve",
    nearTown: "Kerhonkson / New Paltz side",
    mapQuery: "Minnewaska State Park Preserve trailhead New York",
    vibe: "cliffs, lakes, and a full-value Hudson Valley day",
    crowdBias: "medium",
    distanceBias: "far",
    notes: "classic destination hike with bigger payoff when you have time",
    beaconTier: "classic",
    trailLength: "3.0-8.0 mi",
    coopDrive: "45 min",
    postHikeDrive: "54 min",
    latitude: 41.7318,
    longitude: -74.2354
  },
  {
    name: "Mohonk Preserve",
    nearTown: "New Paltz",
    mapQuery: "Mohonk Preserve trailhead New Paltz NY",
    vibe: "ridge drama and strong all-day outing energy",
    crowdBias: "medium",
    distanceBias: "far",
    notes: "destination-level outing when you want something bigger than the immediate Beacon orbit",
    beaconTier: "classic",
    trailLength: "3.0-9.0 mi",
    coopDrive: "40 min",
    postHikeDrive: "50 min",
    latitude: 41.7386,
    longitude: -74.1579
  },
  {
    name: "Mount Beacon",
    nearTown: "Beacon, NY",
    mapQuery: "Mount Beacon trailhead Beacon NY",
    vibe: "steep, popular, quick access",
    crowdBias: "high",
    distanceBias: "near",
    notes: "in-town hike, strong quick option",
    beaconTier: "quick",
    trailLength: "2.0-4.0 mi",
    coopDrive: "8 min",
    postHikeDrive: "6 min",
    latitude: 41.5033,
    longitude: -73.9483
  },
  {
    name: "Breakneck Ridge",
    nearTown: "Cold Spring / Beacon side",
    mapQuery: "Breakneck Ridge trailhead NY",
    vibe: "famous scramble, train-accessible, high-energy",
    crowdBias: "high",
    distanceBias: "near",
    notes: "strong quick-dash pull, but traffic can spike fast on weekends",
    beaconTier: "quick",
    trailLength: "2.0-5.0 mi",
    coopDrive: "14 min",
    postHikeDrive: "18 min",
    latitude: 41.4452,
    longitude: -73.9776
  },
  {
    name: "Pocket Road Reservoir / Dam Access",
    nearTown: "Beacon, NY",
    mapQuery: "Pocket Road access to Beacon Reservoir Beacon NY",
    vibe: "quieter, local, and good when the obvious spots feel loud",
    crowdBias: "low",
    distanceBias: "near",
    notes: "insider-feeling alternative for dodging pressure",
    beaconTier: "bside",
    trailLength: "1.5-3.0 mi",
    coopDrive: "9 min",
    postHikeDrive: "8 min",
    // TODO: refine exact trailhead and coordinates for Pocket Road access.
  }
];

const burkeTrails = [
  {
    name: "Burke Lake Park Trail",
    nearTown: "Fairfax Station / Burke",
    mapQuery: "Burke Lake Park trail Fairfax Station VA",
    vibe: "reliable lake loop, everyday woods, low friction",
    crowdBias: "medium",
    distanceBias: "near",
    wdcTier: "quick",
    notes: "strong 30-minute answer that can still stretch if the day opens up",
    trailLength: "1.0-4.7 mi",
    coopDrive: "12 min",
    postHikeDrive: "14 min",
    latitude: 38.7879,
    longitude: -77.3015
  },
  {
    name: "Lake Barton Trail",
    nearTown: "Burke, VA",
    mapQuery: "Lake Barton Burke VA trail",
    vibe: "quiet neighborhood water loop",
    crowdBias: "low",
    distanceBias: "near",
    wdcTier: "quick",
    notes: "good short local reset",
    trailLength: "1.2-2.0 mi",
    coopDrive: "7 min",
    postHikeDrive: "8 min",
    // TODO: refine exact trail access point and coordinates.
  },
  {
    name: "Burke Station Park Trails",
    nearTown: "Burke, VA",
    mapQuery: "Burke Station Park trail Burke VA",
    vibe: "simple, quick, and easy to actually do",
    crowdBias: "low",
    distanceBias: "near",
    wdcTier: "quick",
    notes: "low-friction in-town option",
    trailLength: "1.0-2.0 mi",
    coopDrive: "6 min",
    postHikeDrive: "7 min",
    // TODO: refine exact trail access point and coordinates.
  },
  {
    name: "Kings Park Trail",
    nearTown: "Burke / Springfield side",
    mapQuery: "Kings Park trail Burke VA",
    vibe: "small neighborhood woods and movement",
    crowdBias: "low",
    distanceBias: "near",
    wdcTier: "quick",
    notes: "another legitimate short-day answer",
    trailLength: "1.0-2.0 mi",
    coopDrive: "9 min",
    postHikeDrive: "10 min",
    // TODO: refine exact trail access point and coordinates.
  },
  {
    name: "Pohick Creek Stream Valley Trail",
    nearTown: "Burke, VA",
    mapQuery: "Pohick Creek Stream Valley Trail Burke VA",
    vibe: "the connective stream-valley backbone",
    crowdBias: "medium",
    distanceBias: "medium",
    wdcTier: "proper",
    notes: "core Burke-area movement trail with flexible segment choices",
    trailLength: "2.0-8.0 mi",
    coopDrive: "8 min",
    postHikeDrive: "9 min",
    // TODO: refine primary Burke access node.
  },
  {
    name: "Lake Braddock Trail System",
    nearTown: "Burke / Burke Centre",
    mapQuery: "Lake Braddock trail Burke VA",
    vibe: "suburban greenway wandering with real mileage potential",
    crowdBias: "medium",
    distanceBias: "medium",
    wdcTier: "proper",
    notes: "good proper-adventure option without leaving the orbit",
    trailLength: "2.0-6.0 mi",
    coopDrive: "10 min",
    postHikeDrive: "11 min",
    // TODO: refine primary trailhead framing.
  },
  {
    name: "Fountainhead Regional Park",
    nearTown: "Fairfax Station, VA",
    mapQuery: "Fountainhead Regional Park trail Fairfax Station VA",
    vibe: "singletrack feel and more terrain than the neighborhood loops",
    crowdBias: "medium",
    distanceBias: "medium",
    wdcTier: "proper",
    notes: "works as a proper outing and can stretch toward all-day if desired",
    trailLength: "3.0-8.0 mi",
    coopDrive: "18 min",
    postHikeDrive: "20 min",
    latitude: 38.7468,
    longitude: -77.2966
  },
  {
    name: "Occoquan Regional Park",
    nearTown: "Lorton, VA",
    mapQuery: "Occoquan Regional Park trail Lorton VA",
    vibe: "river-adjacent and roomy",
    crowdBias: "medium",
    distanceBias: "medium",
    wdcTier: "proper",
    notes: "a little farther out, but still practical for a proper adventure",
    trailLength: "2.0-5.0 mi",
    coopDrive: "26 min",
    postHikeDrive: "28 min",
    latitude: 38.6847,
    longitude: -77.2207
  },
  {
    name: "Great Falls Park",
    nearTown: "McLean, VA",
    mapQuery: "Great Falls Park VA trailhead",
    vibe: "big river spectacle and classic all-day energy",
    crowdBias: "high",
    distanceBias: "far",
    wdcTier: "allDay",
    notes: "worth the bigger commitment when you truly have the day",
    trailLength: "3.0-8.0 mi",
    coopDrive: "42 min",
    postHikeDrive: "45 min",
    latitude: 38.9987,
    longitude: -77.2544
  },
  {
    name: "Billy Goat Trail",
    nearTown: "Potomac / Great Falls side",
    mapQuery: "Billy Goat Trail trailhead Maryland",
    vibe: "rocky, famous, full-value river scramble",
    crowdBias: "high",
    distanceBias: "far",
    wdcTier: "allDay",
    notes: "iconic all-day pick rather than an everyday Burke answer",
    trailLength: "3.0-5.5 mi",
    coopDrive: "48 min",
    postHikeDrive: "50 min",
    latitude: 39.0016,
    longitude: -77.2505
  },
  {
    name: "Manassas Battlefield Trails",
    nearTown: "Manassas, VA",
    mapQuery: "Manassas National Battlefield Park trailhead",
    vibe: "wide-open historic walking with room to roam",
    crowdBias: "medium",
    distanceBias: "far",
    wdcTier: "allDay",
    notes: "good all-day answer when you want space more than steepness",
    trailLength: "3.0-10.0 mi",
    coopDrive: "35 min",
    postHikeDrive: "37 min",
    latitude: 38.8177,
    longitude: -77.5201
  }
];

const nederlandTrails = [
  {
    name: "Mud Lake Open Space",
    nearTown: "Nederland, CO",
    mapQuery: "Mud Lake Open Space trailhead Nederland CO",
    vibe: "easy loops, forest, family-friendly",
    crowdBias: "low",
    distanceBias: "near",
    elevationBias: "low",
    notes: "quick local reset"
  },
  {
    name: "Caribou Ranch Open Space",
    nearTown: "Nederland, CO",
    mapQuery: "Caribou Ranch Open Space trailhead Nederland CO",
    vibe: "meadows, mining ruins, rolling terrain",
    crowdBias: "low",
    distanceBias: "near",
    elevationBias: "low",
    notes: "quiet, very local feel"
  },
  {
    name: "Nederland Reservoir Trail",
    nearTown: "Nederland, CO",
    mapQuery: "Nederland Reservoir trail Nederland CO",
    vibe: "flat, water, very accessible",
    crowdBias: "low",
    distanceBias: "near",
    elevationBias: "low",
    notes: "quick and easy loop"
  },
  {
    name: "West Magnolia Trail System",
    nearTown: "Nederland, CO",
    mapQuery: "West Magnolia trail system Nederland CO",
    vibe: "flowy forest trails, mixed use",
    crowdBias: "low",
    distanceBias: "near",
    elevationBias: "moderate",
    notes: "lots of options, MTB crossover"
  },
  {
    name: "Gordon Gulch Trail",
    nearTown: "Nederland, CO",
    mapQuery: "Gordon Gulch trailhead Nederland CO",
    vibe: "quiet forest, gradual climbing",
    crowdBias: "low",
    distanceBias: "near",
    elevationBias: "moderate",
    notes: "underrated local trail"
  },
  {
    name: "Sugarloaf Mountain Trails",
    nearTown: "Boulder County, CO",
    mapQuery: "Sugarloaf Mountain trailhead Boulder County CO",
    vibe: "views, forest, less traffic",
    crowdBias: "low",
    distanceBias: "near",
    elevationBias: "moderate",
    notes: "good quick elevation gain"
  },
  {
    name: "Rainbow Lakes Trail",
    nearTown: "Nederland, CO",
    mapQuery: "Rainbow Lakes trailhead Nederland CO",
    vibe: "alpine lakes, mellow access",
    crowdBias: "medium",
    distanceBias: "near",
    elevationBias: "moderate",
    notes: "good bridge between local and alpine"
  },
  {
    name: "Hessie Trailhead",
    nearTown: "Nederland, CO",
    mapQuery: "Hessie trailhead Nederland CO",
    vibe: "major access point",
    crowdBias: "high",
    distanceBias: "near",
    elevationBias: "moderate",
    notes: "gateway to multiple hikes"
  },
  {
    name: "Lost Lake via Hessie",
    nearTown: "Nederland, CO",
    mapQuery: "Lost Lake trail Hessie Nederland CO",
    vibe: "classic lake hike",
    crowdBias: "high",
    distanceBias: "near",
    elevationBias: "moderate",
    notes: "very popular"
  },
  {
    name: "King Lake Trail",
    nearTown: "Nederland, CO",
    mapQuery: "King Lake trail Nederland CO",
    vibe: "steeper, quieter than Lost Lake",
    crowdBias: "medium",
    distanceBias: "near",
    elevationBias: "high",
    notes: "good alternative to Lost Lake"
  },
  {
    name: "Diamond Lake Trail",
    nearTown: "Nederland, CO",
    mapQuery: "Diamond Lake trail Nederland CO",
    vibe: "longer, scenic, alpine feel",
    crowdBias: "medium",
    distanceBias: "medium",
    elevationBias: "high",
    notes: "full outing"
  },
  {
    name: "Jasper Lake Trail",
    nearTown: "Nederland, CO",
    mapQuery: "Jasper Lake trail Nederland CO",
    vibe: "remote, quieter alpine",
    crowdBias: "low",
    distanceBias: "medium",
    elevationBias: "high",
    notes: "less traffic than nearby lakes"
  },
  {
    name: "Devil’s Thumb Trail",
    nearTown: "Nederland, CO",
    mapQuery: "Devils Thumb trail Nederland CO",
    vibe: "long, classic, scenic",
    crowdBias: "medium",
    distanceBias: "medium",
    elevationBias: "high",
    notes: "signature hike"
  },
  {
    name: "Fourth of July Trailhead",
    nearTown: "Nederland, CO",
    mapQuery: "Fourth of July trailhead Nederland CO",
    vibe: "seasonal alpine access",
    crowdBias: "high",
    distanceBias: "medium",
    elevationBias: "high",
    notes: "road access varies"
  },
  {
    name: "Arapaho Pass Trail",
    nearTown: "Nederland, CO",
    mapQuery: "Arapaho Pass trail Nederland CO",
    vibe: "high alpine pass",
    crowdBias: "medium",
    distanceBias: "medium",
    elevationBias: "high",
    notes: "big payoff"
  },
  {
    name: "Blue Lake Trail",
    nearTown: "Ward, CO",
    mapQuery: "Blue Lake trail Ward CO",
    vibe: "iconic alpine lake",
    crowdBias: "high",
    distanceBias: "medium",
    elevationBias: "high",
    notes: "very popular"
  },
  {
    name: "Lake Isabelle Trail",
    nearTown: "Ward, CO",
    mapQuery: "Lake Isabelle trail Ward CO",
    vibe: "scenic alpine basin",
    crowdBias: "high",
    distanceBias: "medium",
    elevationBias: "moderate",
    notes: "classic"
  },
  {
    name: "Long Lake Trailhead",
    nearTown: "Ward, CO",
    mapQuery: "Long Lake trailhead Ward CO",
    vibe: "access point for multiple routes",
    crowdBias: "medium",
    distanceBias: "medium",
    elevationBias: "moderate",
    notes: "launch point"
  },
  {
    name: "Mitchell Lake Trailhead",
    nearTown: "Ward, CO",
    mapQuery: "Mitchell Lake trailhead Ward CO",
    vibe: "quieter alpine access",
    crowdBias: "medium",
    distanceBias: "medium",
    elevationBias: "moderate",
    notes: "good alternative access"
  },
  {
    name: "Pawnee Pass Trail",
    nearTown: "Ward, CO",
    mapQuery: "Pawnee Pass trail Ward CO",
    vibe: "serious alpine effort",
    crowdBias: "medium",
    distanceBias: "far",
    elevationBias: "high",
    notes: "big day"
  },
  {
    name: "Niwot Ridge Trail",
    nearTown: "Ward, CO",
    mapQuery: "Niwot Ridge trail Ward CO",
    vibe: "tundra, exposed",
    crowdBias: "low",
    distanceBias: "medium",
    elevationBias: "high",
    notes: "weather sensitive"
  }
];

const taoTrailWisdom = [
  "Go lightly. The woods are already complete.",
  "The best path is the one you can enjoy today.",
  "When the trail narrows, the mind can widen.",
  "A quiet walk still counts as a grand outing.",
  "The hill does not hurry, yet it arrives everywhere.",
  "Take only the pace that leaves room to notice birdsong.",
  "A good turning-around point is also wisdom.",
  "The softer plan is often the better plan."
];

const locations = {
  MAD: {
    code: "MAD",
    displayName: "Madison, Wisconsin",
    shortLabel: "MAD",
    origin: {
      name: "Willie Street Co-op",
      address: "1221 Williamson St, Madison, WI 53703",
      latitude: 43.0811,
      longitude: -89.3664,
      timezone: "America/Chicago"
    },
    postHike: {
      label: "Frostie Freeze",
      address: "208 Madison Ave, Fort Atkinson, WI 53538",
      linkLabel: "Route to Frostie Freeze"
    },
    support: {
      label: "support your local trail alliance",
      url: "https://www.iceagetrail.org/donate/"
    },
    metadata: {
      subtleLine: null
    },
    buckets: {
      quick: madisonQuickTrails,
      moreTime: madisonLongerTrails
    }
  },
  DC: {
    code: "DC",
    displayName: "Door County, Wisconsin",
    shortLabel: "DC",
    origin: {
      name: "Leroy's Coffee Shop",
      address: "1040 S Bay Shore Dr, Sister Bay, WI 54234",
      latitude: 45.1874,
      longitude: -87.1216,
      timezone: "America/Chicago"
    },
    postHike: {
      label: "Not Licked Yet",
      address: "4054 Main St, Fish Creek, WI 54212",
      linkLabel: "Route to Not Licked Yet"
    },
    support: {
      label: "support your local trail alliance",
      url: "https://www.iceagetrail.org/donate/"
    },
    metadata: {
      subtleLine: null
    },
    buckets: {
      quick: doorCountyTrails,
      moreTime: doorCountyTrails
    }
  },
  WDC: {
    code: "WDC",
    displayName: "Burke, Virginia",
    shortLabel: "WDC",
    origin: {
      name: "IHOP",
      address: "6419 Shiplett Blvd, Burke, VA 22015",
      latitude: 38.7937,
      longitude: -77.2711,
      timezone: "America/New_York"
    },
    postHike: {
      label: "Burke Community Church",
      address: "9900 Old Keene Mill Rd, Burke, VA 22015",
      linkLabel: "Route to Burke Community Church"
    },
    support: {
      label: "support your local trail alliance",
      url: "https://www.patc.net/support"
    },
    metadata: {
      subtleLine: "Suburban trail logic: flow matters more than summit."
    },
    buckets: {
      quick: burkeTrails,
      moreTime: burkeTrails,
      allDay: burkeTrails
    }
  },
  BEA: {
    code: "BEA",
    displayName: "Beacon, New York",
    shortLabel: "BEA",
    origin: {
      name: "Yankee Clipper Diner",
      address: "397 Main St, Beacon, NY 12508",
      latitude: 41.5049,
      longitude: -73.9658,
      timezone: "America/New_York"
    },
    postHike: {
      label: "Melzingah Tap House",
      address: "554 Main St, Beacon, NY 12508",
      linkLabel: "Route to Melzingah Tap House"
    },
    support: {
      label: "support your local trail alliance",
      url: "https://hhlt.org/donate/"
    },
    metadata: {
      subtleLine: "Hudson Valley elevation: steady climb"
    },
    buckets: {
      quick: beaconTrails,
      moreTime: beaconTrails
    }
  },
  NED: {
    code: "NED",
    displayName: "Nederland, Colorado",
    shortLabel: "NED",
    origin: {
      name: "The Train Cars Coffee and Kava",
      address: "101 CO-119, Nederland, CO 80466",
      latitude: 39.9614,
      longitude: -105.5108,
      timezone: "America/Denver"
    },
    postHike: {
      label: "Kathmandu Restaurant",
      address: "110 N Jefferson St, Nederland, CO 80466",
      linkLabel: "Route to Kathmandu Restaurant"
    },
    support: {
      label: "support your local trail alliance",
      url: "https://bouldercounty.gov/open-space/"
    },
    metadata: {
      subtleLine: "Elevation: ~8,200 ft"
    },
    buckets: {
      quick: nederlandTrails,
      moreTime: nederlandTrails
    }
  }
};

const els = {
  tabRow: document.querySelector("#location-tabs"),
  locationName: document.querySelector("#location-name"),
  locationNote: document.querySelector("#location-note"),
  quickButton: document.querySelector("#quick-dash-btn"),
  moreButton: document.querySelector("#more-time-btn"),
  allDayButton: document.querySelector("#all-day-btn"),
  rerollButton: document.querySelector("#reroll-btn"),
  bucketLabel: document.querySelector("#bucket-label"),
  trailName: document.querySelector("#trail-name"),
  trailAddress: document.querySelector("#trail-address"),
  originLabel: document.querySelector("#origin-label"),
  postHikeLabel: document.querySelector("#post-hike-label"),
  coopDrive: document.querySelector("#coop-drive"),
  trailLength: document.querySelector("#trail-length"),
  postHikeDrive: document.querySelector("#frosty-drive"),
  seasonNote: document.querySelector("#season-note"),
  crowdLine: document.querySelector("#crowd-line"),
  weatherStatus: document.querySelector("#weather-status"),
  temp: document.querySelector("#temp-value"),
  feelsLike: document.querySelector("#feels-like-value"),
  rainChance: document.querySelector("#rain-chance-value"),
  rainTotal: document.querySelector("#rain-total-value"),
  wind: document.querySelector("#wind-value"),
  updated: document.querySelector("#updated-value"),
  wisdom: document.querySelector("#reminder-list"),
  sunsetLine: document.querySelector("#sunset-line"),
  mapsLink: document.querySelector("#maps-link"),
  postHikeLink: document.querySelector("#frosty-link"),
  actionsNote: document.querySelector("#actions-note"),
  supportLink: document.querySelector("#support-link")
};

let currentLocationCode = "MAD";
let currentBucketKey = DEFAULT_BUCKET;
let currentTrail = null;
let currentRequestId = 0;
let wisdomCursor = 0;
let refreshTimerId = null;

function monthIndexForTimeZone(timeZone) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    month: "numeric"
  }).formatToParts(new Date());
  return Number(parts.find((part) => part.type === "month")?.value || new Date().getMonth() + 1);
}

function getLocationConfig() {
  return locations[currentLocationCode];
}

function getWeightedTrail(bucket, timeZone) {
  const monthIndex = monthIndexForTimeZone(timeZone);
  const weighted = bucket.map((trail) => {
    const boost = trail.seasonalBoosts?.find((entry) => entry.months.includes(monthIndex));
    return { trail, weight: boost ? boost.multiplier : 1 };
  });

  const total = weighted.reduce((sum, entry) => sum + entry.weight, 0);
  let cursor = Math.random() * total;

  for (const entry of weighted) {
    cursor -= entry.weight;
    if (cursor <= 0) return entry.trail;
  }

  return weighted[weighted.length - 1]?.trail ?? null;
}

function getSeasonNote(trail, timeZone) {
  const monthIndex = monthIndexForTimeZone(timeZone);
  const boost = trail.seasonalBoosts?.find((entry) => entry.months.includes(monthIndex));
  return boost ? boost.reason : "standard random odds";
}

function isWeekendInTimeZone(timeZone) {
  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short"
  }).format(new Date());

  return weekday === "Sat" || weekday === "Sun";
}

function hourInTimeZone(timeZone) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "2-digit",
    hour12: false
  }).formatToParts(new Date());
  return Number(parts.find((part) => part.type === "hour")?.value || 0);
}

function getDoorCountyCrowdLevel(timeZone) {
  const month = monthIndexForTimeZone(timeZone);
  const weekend = isWeekendInTimeZone(timeZone);
  const hour = hourInTimeZone(timeZone);
  let score = 0;

  if ([6, 7, 8].includes(month)) score += 2;
  if ([5, 9, 10].includes(month)) score += 1;
  if (weekend) score += 1;
  if (hour >= 12 && hour <= 17) score += 1;
  if (hour < 10) score -= 1;

  if (score >= 4) return "packed";
  if (score >= 3) return "busy";
  if (score >= 1) return "building";
  return "mellow";
}

function getDoorCountyWeight(trail, bucketKey, crowdLevel) {
  const crowdMatrix = {
    packed: { low: 2.8, medium: 1.35, high: 0.45 },
    busy: { low: 2.2, medium: 1.55, high: 0.65 },
    building: { low: 1.25, medium: 1.9, high: 1.05 },
    mellow: { low: 0.9, medium: 1.45, high: 2.25 }
  };

  let weight = crowdMatrix[crowdLevel][trail.crowdBias] || 1;

  if (trail.doorCountyTier === "middle" && crowdLevel === "building") {
    weight *= 1.2;
  }

  if (trail.doorCountyTier === "classic" && crowdLevel === "mellow") {
    weight *= 1.2;
  }

  if (trail.doorCountyTier === "bside" && (crowdLevel === "busy" || crowdLevel === "packed")) {
    weight *= 1.15;
  }

  if (bucketKey === "quick" && trail.doorCountyTier !== "classic") {
    weight *= 1.08;
  }

  if (bucketKey === "moreTime" && trail.doorCountyTier !== "bside") {
    weight *= 1.08;
  }

  return weight;
}

function pickDoorCountyTrail(bucketKey) {
  const crowdLevel = getDoorCountyCrowdLevel(getLocationConfig().origin.timezone);
  const weighted = doorCountyTrails.map((trail) => ({
    trail,
    weight: getDoorCountyWeight(trail, bucketKey, crowdLevel)
  }));
  const total = weighted.reduce((sum, entry) => sum + entry.weight, 0);
  let cursor = Math.random() * total;

  for (const entry of weighted) {
    cursor -= entry.weight;
    if (cursor <= 0) return entry.trail;
  }

  return weighted[weighted.length - 1]?.trail ?? null;
}

function getBeaconWeight(trail, bucketKey) {
  const distanceMatrix = {
    quick: { near: 2.25, medium: 1.2, far: 0.7 },
    moreTime: { near: 0.95, medium: 1.35, far: 2.3 }
  };

  const crowdMatrix = {
    high: { quick: 1.15, moreTime: 0.9 },
    medium: { quick: 1, moreTime: 1.15 },
    low: { quick: 1.2, moreTime: 1.05 }
  };

  let weight = (distanceMatrix[bucketKey]?.[trail.distanceBias] || 1) * (crowdMatrix[trail.crowdBias]?.[bucketKey] || 1);

  if (bucketKey === "quick" && trail.beaconTier === "quick") {
    weight *= 1.3;
  }

  if (bucketKey === "quick" && trail.beaconTier === "bside") {
    weight *= 1.15;
  }

  if (bucketKey === "moreTime" && trail.beaconTier === "classic") {
    weight *= 1.35;
  }

  if (bucketKey === "moreTime" && trail.beaconTier === "bside") {
    weight *= 1.08;
  }

  return weight;
}

function pickBeaconTrail(bucketKey) {
  const weighted = beaconTrails.map((trail) => ({
    trail,
    weight: getBeaconWeight(trail, bucketKey)
  }));
  const total = weighted.reduce((sum, entry) => sum + entry.weight, 0);
  let cursor = Math.random() * total;

  for (const entry of weighted) {
    cursor -= entry.weight;
    if (cursor <= 0) return entry.trail;
  }

  return weighted[weighted.length - 1]?.trail ?? null;
}

function getNederlandWeight(trail, bucketKey) {
  const distanceMatrix = {
    quick: { near: 2.35, medium: 1.05, far: 0.5 },
    moreTime: { near: 0.95, medium: 1.7, far: 2.15 }
  };

  const elevationMatrix = {
    quick: { low: 1.45, moderate: 1.15, high: 0.7 },
    moreTime: { low: 0.8, moderate: 1.2, high: 1.75 }
  };

  const crowdMatrix = {
    low: { quick: 1.2, moreTime: 1.1 },
    medium: { quick: 1, moreTime: 1.05 },
    high: { quick: 0.8, moreTime: 0.9 }
  };

  let weight =
    (distanceMatrix[bucketKey]?.[trail.distanceBias] || 1) *
    (elevationMatrix[bucketKey]?.[trail.elevationBias] || 1) *
    (crowdMatrix[trail.crowdBias]?.[bucketKey] || 1);

  // Keep the Nederland set feeling local-first instead of defaulting to the most famous alpine picks.
  if (bucketKey === "quick" && trail.distanceBias === "near" && trail.crowdBias === "low") {
    weight *= 1.2;
  }

  if (bucketKey === "moreTime" && trail.elevationBias === "high") {
    weight *= 1.15;
  }

  if (bucketKey === "moreTime" && trail.notes === "very popular") {
    weight *= 0.92;
  }

  return weight;
}

function pickNederlandTrail(bucketKey) {
  const weighted = nederlandTrails.map((trail) => ({
    trail,
    weight: getNederlandWeight(trail, bucketKey)
  }));
  const total = weighted.reduce((sum, entry) => sum + entry.weight, 0);
  let cursor = Math.random() * total;

  for (const entry of weighted) {
    cursor -= entry.weight;
    if (cursor <= 0) return entry.trail;
  }

  return weighted[weighted.length - 1]?.trail ?? null;
}

function nextWisdom() {
  const index = wisdomCursor % taoTrailWisdom.length;
  wisdomCursor += 1;
  return taoTrailWisdom[index];
}

function renderWisdom() {
  els.wisdom.innerHTML = "";
  const pill = document.createElement("span");
  pill.className = "reminder-pill";
  pill.textContent = nextWisdom();
  els.wisdom.appendChild(pill);
}

function pulseResultCard() {
  const card = document.querySelector(".result-card");
  card.classList.remove("is-refreshing");
  window.clearTimeout(refreshTimerId);
  void card.offsetWidth;
  card.classList.add("is-refreshing");
  refreshTimerId = window.setTimeout(() => {
    card.classList.remove("is-refreshing");
  }, 260);
}

function setLinkState(linkEl, href, enabled, label) {
  linkEl.href = enabled ? href : "#";
  linkEl.classList.toggle("disabled", !enabled);
  if (label) linkEl.textContent = label;
}

function formatLocationNote(location) {
  const names = new Set(
    Object.values(location.buckets)
      .flat()
      .map((trail) => trail.name)
  );
  const totalCount = names.size;

  if (!totalCount) {
    return "Trail list coming soon.";
  }

  return `${totalCount} trailheads ready.`;
}

function renderTabs() {
  els.tabRow.innerHTML = "";

  Object.values(locations).forEach((location) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "location-tab";
    if (location.code === currentLocationCode) {
      button.classList.add("active");
    }
    button.textContent = location.shortLabel;
    button.addEventListener("click", () => switchLocation(location.code));
    els.tabRow.appendChild(button);
  });
}

function getButtonConfig(locationCode) {
  if (locationCode === "WDC") {
    return {
      quick: "We’ve got 30 — Let’s go",
      moreTime: "Proper adventure",
      allDay: "We’ve got all day"
    };
  }

  return {
    quick: "Quick Dash",
    moreTime: "I Have a Little More Time",
    allDay: null
  };
}

function updateActiveButtons() {
  els.quickButton.classList.toggle("active", currentBucketKey === "quick");
  els.moreButton.classList.toggle("active", currentBucketKey === "moreTime");
  els.allDayButton.classList.toggle("active", currentBucketKey === "allDay");
}

function getBucketLabel(bucketKey) {
  if (currentLocationCode === "WDC") {
    if (bucketKey === "quick") return "30-minute pick";
    if (bucketKey === "moreTime") return "Proper adventure pick";
    if (bucketKey === "allDay") return "All-day pick";
  }

  return bucketKey === "quick" ? "Quick Dash pick" : "A little more time pick";
}

function getWaitingCopy(location) {
  if (location.code === "WDC") {
    return `Pick a time window above and I’ll pull a trail from around ${location.displayName}.`;
  }

  return `Pick a button above and I’ll pull a trailhead from the ${location.displayName} list.`;
}

function updateLocationCopy() {
  const location = getLocationConfig();
  const buttonConfig = getButtonConfig(location.code);
  els.locationName.textContent = location.displayName;
  els.locationNote.textContent = formatLocationNote(location);
  els.originLabel.textContent = `Drive From ${location.origin.name}`;
  els.postHikeLabel.textContent = `Drive To ${location.postHike.label}`;
  els.actionsNote.textContent = `Map links use your current location if you allow it, otherwise they start from ${location.origin.name}.`;
  els.supportLink.href = location.support.url;
  els.supportLink.textContent = location.support.label;
  els.quickButton.textContent = buttonConfig.quick;
  els.moreButton.textContent = buttonConfig.moreTime;
  els.allDayButton.hidden = !buttonConfig.allDay;
  if (buttonConfig.allDay) {
    els.allDayButton.textContent = buttonConfig.allDay;
  }
  if (!buttonConfig.allDay && currentBucketKey === "allDay") {
    currentBucketKey = DEFAULT_BUCKET;
  }
  updateActiveButtons();
  renderCrowdLine();
}

function resetResultCard(message) {
  currentTrail = null;
  els.bucketLabel.textContent = "Choose a distance bucket";
  els.trailName.textContent = "A trailhead adventure awaits";
  els.trailAddress.textContent = message;
  els.coopDrive.textContent = "-";
  els.trailLength.textContent = "-";
  els.postHikeDrive.textContent = "-";
  els.seasonNote.textContent = "-";
  setWeatherPlaceholder("Waiting for a trail pick.");
  renderWisdom();
  renderSunsetLine();
  renderCrowdLine();
  setLinkState(els.mapsLink, "#", false, "Open Trailhead In Google Maps");
  setLinkState(els.postHikeLink, "#", false, getLocationConfig().postHike.linkLabel);
  els.rerollButton.disabled = true;
  updateActiveButtons();
}

function renderCrowdLine() {
  if (currentLocationCode === "DC") {
    const crowdLevel = getDoorCountyCrowdLevel(getLocationConfig().origin.timezone);
    els.crowdLine.hidden = false;
    els.crowdLine.textContent = `Crowd level: ${crowdLevel}`;
    return;
  }

  if (currentLocationCode === "BEA") {
    els.crowdLine.hidden = false;
    els.crowdLine.textContent = getLocationConfig().metadata?.subtleLine || "Hudson Valley elevation: steady climb";
    return;
  }

  if (currentLocationCode === "WDC") {
    els.crowdLine.hidden = false;
    els.crowdLine.textContent = getLocationConfig().metadata?.subtleLine || "Suburban trail logic: flow matters more than summit.";
    return;
  }

  if (currentLocationCode === "NED") {
    els.crowdLine.hidden = false;
    els.crowdLine.textContent = getLocationConfig().metadata?.subtleLine || "Thin air factor: noticeable";
    return;
  }

  els.crowdLine.hidden = true;
  els.crowdLine.textContent = "";
}

function formatTrailAddress(trail) {
  if (trail.address) return trail.address;

  if (trail.nearTown) return trail.nearTown;
  if (trail.mapQuery) return trail.mapQuery;
  if (trail.vibe) return trail.vibe;
  return "Trailhead details coming soon.";
}

function getTrailCoordinates(trail) {
  if (trail.coordinates?.lat != null && trail.coordinates?.lon != null) {
    return {
      latitude: trail.coordinates.lat,
      longitude: trail.coordinates.lon
    };
  }

  if (trail.latitude != null && trail.longitude != null) {
    return {
      latitude: trail.latitude,
      longitude: trail.longitude
    };
  }

  return null;
}

function getTrailFeel(trail, location) {
  if (trail.vibe) return trail.vibe;
  if (trail.notes && !trail.seasonalBoosts) return trail.notes;
  if (trail.seasonalBoosts) return getSeasonNote(trail, location.origin.timezone);
  return "worth a wander";
}

function renderTrail(trail, bucketKey) {
  if (!trail) {
    resetResultCard(`No trail came through for ${getLocationConfig().displayName}.`);
    return;
  }

  const location = getLocationConfig();
  currentTrail = trail;
  currentBucketKey = bucketKey;
  els.bucketLabel.textContent = getBucketLabel(bucketKey);
  els.trailName.textContent = trail.name;
  els.trailAddress.textContent = formatTrailAddress(trail);
  els.coopDrive.textContent = `~${trail.coopDrive}`;
  els.trailLength.textContent = `~${trail.trailLength}`;
  els.postHikeDrive.textContent = `~${trail.postHikeDrive}`;
  els.seasonNote.textContent = getTrailFeel(trail, location);
  els.rerollButton.disabled = false;
  updateActiveButtons();
  pulseResultCard();
  renderWisdom();
  renderSunsetLine();
  renderCrowdLine();
  setLinkState(els.mapsLink, "#", true, "Open Trailhead In Google Maps");
  setLinkState(els.postHikeLink, "#", true, location.postHike.linkLabel);
  loadWeather(trail);
}

function pickTrail(bucketKey) {
  currentBucketKey = bucketKey;
  const location = getLocationConfig();
  const bucket = location.buckets[bucketKey];

  if (!bucket.length) {
    resetResultCard(`${location.displayName} trails are still waiting on their list.`);
    return;
  }

  const trail = currentLocationCode === "DC"
    ? pickDoorCountyTrail(bucketKey)
    : currentLocationCode === "BEA"
      ? pickBeaconTrail(bucketKey)
    : currentLocationCode === "NED"
      ? pickNederlandTrail(bucketKey)
    : currentLocationCode === "WDC"
      ? pickWdcTrail(bucketKey)
    : getWeightedTrail(bucket, location.origin.timezone);

  renderTrail(trail, bucketKey);
}

function getWdcWeight(trail, bucketKey) {
  const matrix = {
    quick: { quick: 2.5, proper: 1.15, allDay: 0.45 },
    moreTime: { quick: 0.95, proper: 2.15, allDay: 1.15 },
    allDay: { quick: 0.55, proper: 1.25, allDay: 2.5 }
  };

  const crowdNudge = {
    high: { quick: 0.95, moreTime: 1, allDay: 1.1 },
    medium: { quick: 1, moreTime: 1, allDay: 1 },
    low: { quick: 1.1, moreTime: 1, allDay: 0.95 }
  };

  return (matrix[bucketKey]?.[trail.wdcTier] || 1) * (crowdNudge[trail.crowdBias]?.[bucketKey] || 1);
}

function pickWdcTrail(bucketKey) {
  const weighted = burkeTrails.map((trail) => ({
    trail,
    weight: getWdcWeight(trail, bucketKey)
  }));
  const total = weighted.reduce((sum, entry) => sum + entry.weight, 0);
  let cursor = Math.random() * total;

  for (const entry of weighted) {
    cursor -= entry.weight;
    if (cursor <= 0) return entry.trail;
  }

  return weighted[weighted.length - 1]?.trail ?? null;
}

function switchLocation(locationCode) {
  currentLocationCode = locationCode;
  currentBucketKey = DEFAULT_BUCKET;
  renderTabs();
  updateLocationCopy();
  resetResultCard(getWaitingCopy(getLocationConfig()));
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
    windSpeed: hourly.wind_speed_10m?.[bestIndex]
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

async function loadWeather(trail) {
  const requestId = ++currentRequestId;
  setWeatherPlaceholder("Looking up live conditions...");
  const coordinates = getTrailCoordinates(trail);

  if (!coordinates) {
    setWeatherPlaceholder("Weather not pinned for this trail yet.");
    return;
  }

  try {
    const params = new URLSearchParams({
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
      current: "temperature_2m,apparent_temperature,wind_speed_10m",
      hourly: "temperature_2m,apparent_temperature,precipitation_probability,precipitation,wind_speed_10m",
      temperature_unit: "fahrenheit",
      wind_speed_unit: "mph",
      precipitation_unit: "inch",
      timezone: getLocationConfig().origin.timezone,
      past_days: "1",
      forecast_days: "1"
    });

    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
    if (!response.ok) throw new Error("Weather request failed.");

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
  const location = getLocationConfig();

  try {
    const position = await getCurrentPositionPromise();
    return `${position.coords.latitude},${position.coords.longitude}`;
  } catch (error) {
    return location.origin.address;
  }
}

async function openDirections(destination) {
  if (!currentTrail) return;

  const openedWindow = window.open("", "_blank");
  if (!openedWindow) {
    els.weatherStatus.textContent = "Your browser blocked the map pop-up. Try again and allow pop-ups.";
    return;
  }

  openedWindow.document.write("<title>Opening Maps...</title><p style='font-family: sans-serif; padding: 1rem;'>Opening Google Maps...</p>");
  els.weatherStatus.textContent = "Opening maps...";

  try {
    const origin = await getOriginForMaps();
    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`;
    openedWindow.location.replace(url);
  } catch (error) {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(getLocationConfig().origin.address)}&destination=${encodeURIComponent(destination)}`;
    openedWindow.location.replace(url);
  } finally {
    els.weatherStatus.textContent = `Conditions at ${currentTrail.name}`;
  }
}

function nowPartsForTimeZone(timeZone) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).formatToParts(new Date());

  const lookup = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return {
    year: Number(lookup.year),
    month: Number(lookup.month),
    day: Number(lookup.day),
    hour: Number(lookup.hour),
    minute: Number(lookup.minute)
  };
}

async function getSunsetContext() {
  const location = getLocationConfig();

  try {
    const position = await getCurrentPositionPromise();
    return {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || location.origin.timezone
    };
  } catch (error) {
    return {
      latitude: location.origin.latitude,
      longitude: location.origin.longitude,
      timeZone: location.origin.timezone
    };
  }
}

async function renderSunsetLine() {
  const sunsetContext = await getSunsetContext();
  const nowLocal = nowPartsForTimeZone(sunsetContext.timeZone);

  if (nowLocal.hour < 14) {
    els.sunsetLine.hidden = true;
    els.sunsetLine.textContent = "";
    return;
  }

  try {
    const params = new URLSearchParams({
      latitude: sunsetContext.latitude,
      longitude: sunsetContext.longitude,
      daily: "sunset",
      timezone: sunsetContext.timeZone,
      forecast_days: "1"
    });

    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
    if (!response.ok) throw new Error("Sunset request failed.");

    const data = await response.json();
    const sunsetString = data.daily?.sunset?.[0];
    if (!sunsetString) throw new Error("Missing sunset data.");

    const sunsetDate = new Date(sunsetString);
    const now = new Date();
    const diffMs = sunsetDate.getTime() - now.getTime();

    if (diffMs <= 0) {
      els.sunsetLine.hidden = false;
      els.sunsetLine.textContent = "The last light is already slipping away.";
      return;
    }

    const totalMinutes = Math.round(diffMs / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    els.sunsetLine.hidden = false;
    els.sunsetLine.textContent = `Light remaining: ~${hours}h ${minutes}m`;
  } catch (error) {
    els.sunsetLine.hidden = true;
    els.sunsetLine.textContent = "";
  }
}

function initialize() {
  renderTabs();
  updateLocationCopy();
  resetResultCard(getWaitingCopy(getLocationConfig()));
}

els.quickButton.addEventListener("click", () => pickTrail("quick"));
els.moreButton.addEventListener("click", () => pickTrail("moreTime"));
els.allDayButton.addEventListener("click", () => pickTrail("allDay"));
els.rerollButton.addEventListener("click", () => {
  if (currentTrail) {
    pickTrail(currentBucketKey);
  }
});
els.mapsLink.addEventListener("click", async (event) => {
  event.preventDefault();
  if (!currentTrail) return;
  await openDirections(currentTrail.mapQuery || currentTrail.address || currentTrail.name);
});
els.postHikeLink.addEventListener("click", async (event) => {
  event.preventDefault();
  if (!currentTrail) return;
  await openDirections(getLocationConfig().postHike.address);
});

initialize();
