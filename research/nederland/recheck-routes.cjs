const fs=require('node:fs');
const file=__dirname+'/routes.json';
const data=JSON.parse(fs.readFileSync(file,'utf8'));
const vias={sugarloaf:{lat:40.02016,lon:-105.41467},rainbow:{lat:40.0273588,lon:-105.5246755}};
(async()=>{
for(const [id,via] of Object.entries(vias)){
 for(const direction of ['fromTrainCars','fromKathmandu','toKathmandu']){
  const key=id+'/'+direction;
  const old=data.routes[key];
  const ends=old.requested;
  const points=[ends[0],via,ends[1]];
  const url='https://router.project-osrm.org/route/v1/driving/'+points.map(p=>`${p.lon},${p.lat}`).join(';')+
    '?overview=false&steps=true&generate_hints=false&radiuses=150;150;150';
  try{
    const res=await fetch(url,{headers:{'User-Agent':'Into-The-Woods trailhead research'},signal:AbortSignal.timeout(20000)});
    const d=await res.json();if(d.code!=='Ok')throw Error(JSON.stringify(d));
    const r=d.routes[0];
    data.routes[key]={url,requested:points,code:d.code,dataVersion:d.data_version||null,
      durationSeconds:r.duration,distanceMeters:r.distance,waypoints:d.waypoints,
      routingNote:id==='sugarloaf'?'Via Sugarloaf Road / Sugarloaf Mountain Road junction; avoid Switzerland Trail shortcut.':
        'Via South Sourdough / NFSR 298; follow official Rainbow Lakes approach instead of Caribou / FR 505 shortcut.',
      supersededRoute:{url:old.url,durationSeconds:old.durationSeconds,roads:[...new Set(old.steps.map(s=>s.name||s.ref))]},
      steps:r.legs.flatMap(l=>l.steps).map(s=>({name:s.name,ref:s.ref||null,mode:s.mode,durationSeconds:s.duration,
        distanceMeters:s.distance,location:s.maneuver.location,type:s.maneuver.type}))};
    fs.writeFileSync(file,JSON.stringify(data,null,2)+'\n');
    console.log(key,(r.duration/60).toFixed(1)+' min',(r.distance/1609.344).toFixed(1)+' mi',
      JSON.stringify([...new Set(data.routes[key].steps.map(s=>s.name||s.ref))]),'snap m:',d.waypoints.map(w=>w.distance.toFixed(1)).join(','));
  }catch(e){console.log(key,e.message);}
  await new Promise(r=>setTimeout(r,1100));
 }
}
})();
