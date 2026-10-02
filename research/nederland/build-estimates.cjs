// Builds the static evidence-backed ranges and audit from saved browser observations.
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.join(__dirname,'../..');
const context=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,'trail-access.js'),'utf8'),context);
const data=vm.runInContext('trailAccessData',context);
const observations=JSON.parse(fs.readFileSync(path.join(__dirname,'google-routes.json'),'utf8'));
data.method='Separately observed Google Maps driving routes from Train Cars and Kathmandu and back to Kathmandu. Round the combined baseline span outward to five minutes, then add a planning allowance of five minutes for short dirt/inferred/high-mountain access or ten for a long rough approach. These are planning bands, not measured confidence intervals or live ETAs; no manual road speed calculation.';
for(const [id,destination] of Object.entries(data.destinations)){
  const estimates={};
  for(const direction of ['fromTrainCars','fromKathmandu','toKathmandu']){
    const evidence=observations.routes[id+'/'+direction];
    if(evidence?.cards.length!==1)throw Error('Review route alternatives for '+id+'/'+direction);
    const match=evidence.cards[0].match(/(\d+) min/);
    if(!match)throw Error('Missing minutes for '+id+'/'+direction);
    estimates[direction]={baselineMinutes:Number(match[1]),source:evidence.requestedUrl};
  }
  const baselines=Object.values(estimates).map(e=>e.baselineMinutes);
  const min=Math.max(1,Math.floor(Math.min(...baselines)/5)*5);
  const max=Math.max(min+4,Math.ceil(Math.max(...baselines)/5)*5+destination.allowanceMinutes);
  destination.rangeMinutes=[min,max];
  destination.estimates=estimates;
}
fs.writeFileSync(path.join(root,'trail-access.js'),
  '// Researched access destinations; planning ranges, not live ETAs.\n'+
  '// Sources and all 21 trails: research/nederland/DRIVE-ESTIMATES.md.\n'+
  'const trailAccessData = '+JSON.stringify(data,null,2)+';\n');
const rows=Object.entries(data.regions.NED).map(([trail,id])=>{
  const d=data.destinations[id],range=`Approx. ${d.rangeMinutes.join('–')} min`;
  const sources=d.sources.map(s=>`[${s.label}](${s.url})`).join('; ');
  return `| ${trail} | ${d.name}${d.approximateAccess?' **(approximate access)**':''} | ${d.confidence} | ${range} | ${range} | ${range} | ${sources} |`;
});
const details=Object.entries(data.destinations).map(([id,d])=>{
  const e=d.estimates;
  return `### ${d.name}\n\n`+
    `Coordinates: ${d.latitude}, ${d.longitude}. Destination confidence: **${d.confidence}**. `+
    `${d.approximateAccess?'The practical access point is inferred; this is not a verified dedicated parking lot. ':''}`+
    `Drive-time confidence: **Medium**, with road-condition and availability caveats below.\n\n`+
    d.sources.map(s=>`- [${s.label}](${s.url}): ${s.evidence}`).join('\n')+'\n\n'+
    `Observed Google route snapshots: [Train Cars → access](${e.fromTrainCars.source}) ${e.fromTrainCars.baselineMinutes} min; `+
    `[Kathmandu → access](${e.fromKathmandu.source}) ${e.fromKathmandu.baselineMinutes} min; `+
    `[access → Kathmandu](${e.toKathmandu.source}) ${e.toKathmandu.baselineMinutes} min. `+
    `Picker range: **${d.rangeMinutes.join('–')} min**, including a ${d.allowanceMinutes}-minute planning allowance beyond outward rounding.\n\n${d.note}\n`;
}).join('\n');
fs.writeFileSync(path.join(__dirname,'DRIVE-ESTIMATES.md'),
`# Nederland driving estimates\n\nResearched **2026-10-02** for the existing Into-The-Woods catalog.\n\n`+
`The reference points are **The Train Cars Coffee and Kava**, 101 CO-119, and **Kathmandu Restaurant**, 110 N Jefferson St, Nederland. Their locations were checked against named OpenStreetMap buildings ([Train Cars](${data.referencePoints.trainCars.source}), [Kathmandu](${data.referencePoints.kathmandu.source})). Each direction was routed separately; the app's second drive is **from the chosen access point to Kathmandu**, while this audit also includes the requested estimate **from Kathmandu**.\n\n`+
`## Method and uncertainty\n\n${data.method}\n\n`+
`The nearby reference points produced very similar times, so each access point uses one common rounded band covering the three directional snapshots. The upper end is not a guarantee. Traffic, parking searches, shuttle waits/rides, entrance queues and walking from parking are additional. Estimates assume a passable, open road and the necessary parking reservation; a closed road is not made accessible by adding minutes. **High** destination confidence means an official pin or a mapped public parking area corroborated by official access information. **Medium** means an inferred road-end/entrance or an ambiguous trail-to-start association. All drive times remain approximate.\n\n`+
`Road routing was obtained from Google Maps' visible driving-route cards. The saved observations are in [google-routes.json](google-routes.json). Initial [OSRM road routes](routes.json) were used as a cross-check, then superseded by the Google observations for the displayed estimates. OSRM's Rainbow Lakes route took Caribou/FR 505; even forcing a northern waypoint caused a large detour instead of the documented NFSR 298 approach. That result was rejected. The Sugarloaf route was constrained to the Sugarloaf Road/Sugarloaf Mountain Road junction to avoid a Switzerland Trail shortcut. No straight-line-distance or manually selected speed estimate is used.\n\n`+
`## All 21 trail records\n\n| Trail | Chosen driving destination | Destination confidence | From Train Cars | From Kathmandu | To Kathmandu (app) | Source/evidence |\n| --- | --- | --- | --- | --- | --- | --- |\n${rows.join('\n')}\n\n`+
`## Destination evidence and access caveats\n\n${details}\n`+
`## Trail-to-access associations\n\n`+
`- Hessie, Lost Lake, King Lake and Devil’s Thumb: [Boulder County](https://bouldercounty.gov/open-space/parks-and-trails/hessie-trailhead/) and the [Forest Service Hessie page](https://www.fs.usda.gov/r02/arp/recreation/hessie-trailhead). Jasper Lake: [Boulder County's explicit Hessie-access report](https://bouldercounty.gov/news/sick-hiker-and-dog-rescued-near-jasper-lake/) and the [Forest Service Indian Peaks map](https://www.fs.usda.gov/Internet/FSE_DOCUMENTS/fseprd502324.pdf).\n`+
`- Diamond Lake and Arapaho Pass: [Forest Service Diamond Lake starting point](https://www.fs.usda.gov/r02/arp/recreation/trails/diamond-lake-trail) and [Arapaho Pass starting point](https://www.fs.usda.gov/r02/arp/recreation/trails/arapaho-pass-trail-0). The catalog's Diamond Lake choice uses Fourth of July, although a longer approach from Hessie exists.\n`+
`- Blue Lake: [Forest Service Mitchell Lake Trail description](https://www.fs.usda.gov/r02/arp/recreation/trails/mitchell-lake-trail). Lake Isabelle and Pawnee Pass: [Long Lake Trailhead](https://www.fs.usda.gov/r02/arp/recreation/long-lake-trailhead) and [official Isabelle Glacier trail sheet](https://www.fs.usda.gov/Internet/FSE_DOCUMENTS/fsm91_058154.pdf).\n`+
`- Niwot Ridge: chosen Brainard/Niwot Cutoff start, supported by mapped parking, the official picnic-site page and the secondary hiking guide. The generic catalog name also fits other approaches, so confidence remains Medium; the estimate does not cover a Mountain Research Station start.\n\n`+
`These additions fill drive-time evidence only. They do not invent missing hiking mileage or claim to verify live closures.\n`);
console.log(Object.entries(data.destinations).map(([id,d])=>`${id}: ${d.rangeMinutes.join('–')} min`).join('\n'));
