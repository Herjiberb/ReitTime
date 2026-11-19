// Single cache, network-first: always fetch fresh, overwrite the cached copy, fall back offline.
const C='rt11';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>Promise.allSettled(['./','index.html','app.css','app.js','legal.js','packs/registry.js','packs/special.js','packs/trash.js','packs/golden.js','packs/desert.js','packs/ice.js','packs/ancient.js','deckhub.js','onboarding.js','theme.css','social.js','manifest.json','icon.svg'].map(u=>c.add(new Request(u,{cache:'reload'}))))))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==C).map(n=>caches.delete(n)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 const r=e.request,u=new URL(r.url);
 if(r.method!=='GET'||u.origin!==location.origin)return;
 e.respondWith(fetch(r,{cache:'no-cache'}).then(res=>{if(res.ok){const k=res.clone();caches.open(C).then(c=>c.put(r,k))}return res}).catch(()=>caches.match(r).then(m=>m||caches.match('index.html'))))});

self.addEventListener('notificationclick',e=>{e.notification.close();const u=(e.notification.data&&e.notification.data.url)||'./';e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>{for(const c of l){if('focus' in c){c.focus();try{c.navigate(u)}catch{}return}}return self.clients.openWindow(u)}))});
