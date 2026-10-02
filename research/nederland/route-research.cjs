// Research only: save road routes, never calculate time from straight-line distance.
const fs=require('node:fs');
const points={
  mud:{lat:39.9791426,lon:-105.5079225},caribou:{lat:39.9822886,lon:-105.5190167},
  barker:{lat:39.96457752,lon:-105.50371075333334},westMagnolia:{lat:39.94677333,lon:-105.5177483},
  gordon:{lat:40.009793,lon:-105.50171},sugarloaf:{lat:40.02540,lon:-105.42520},
  rainbow:{lat:40.00949833,lon:-105.5690483},hessie:{lat:39.9516888,lon:-105.59502767142855},
  fourth:{lat:39.995,lon:-105.6342},long:{lat:40.0778,lon:-105.5844},
  mitchell:{lat:40.0831,lon:-105.5817},niwot:{lat:40.076534093333336,lon:-105.57734224000001}
};
const refs={trainCars:{lat:39.9604095,lon:-105.5100534},kathmandu:{lat:39.9620592,lon:-105.5115103}};
const file=__dirname+'/routes.json';
const saved=fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')):{
  researchedAt:new Date().toISOString(),provider:'OSRM / OpenStreetMap',profile:'driving',liveTraffic:false,
  referencePoints:refs,points,routes:{}};
(async()=>{
for(const [id,point] of Object.entries(points)){
 for(const [direction,ends] of Object.entries({fromTrainCars:[refs.trainCars,point],fromKathmandu:[refs.kathmandu,point],toKathmandu:[point,refs.kathmandu]})){
  const key=id+'/'+direction;if(saved.routes[key])continue;
  const coords=ends.map(p=>`${p.lon},${p.lat}`).join(';');
  const url='https://router.project-osrm.org/route/v1/driving/'+coords+'?overview=false&steps=true&generate_hints=false&radiuses=150;150';
  try{
    const res=await fetch(url,{headers:{'User-Agent':'Into-The-Woods trailhead research'},signal:AbortSignal.timeout(20000)});
    const data=await res.json();
    if(!res.ok||data.code!=='Ok')throw Error(JSON.stringify(data));
    const route=data.routes[0];
    saved.routes[key]={url,requested:ends,code:data.code,dataVersion:data.data_version||null,
      durationSeconds:route.duration,distanceMeters:route.distance,waypoints:data.waypoints,
      steps:route.legs.flatMap(l=>l.steps).map(s=>({name:s.name,ref:s.ref||null,mode:s.mode,durationSeconds:s.duration,
        distanceMeters:s.distance,location:s.maneuver.location,type:s.maneuver.type}))};
    fs.writeFileSync(file,JSON.stringify(saved,null,2)+'\n');
    console.log(key,(route.duration/60).toFixed(1)+' min',(route.distance/1609.344).toFixed(1)+' mi',
      JSON.stringify([...new Set(saved.routes[key].steps.map(s=>s.name||s.ref))]),
      'snap m:',data.waypoints.map(w=>w.distance.toFixed(1)).join(','));
  }catch(e){console.log(key,'ERROR',e.message);}
  await new Promise(resolve=>setTimeout(resolve,1100));
 }
}
})();
