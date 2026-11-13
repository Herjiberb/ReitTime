/* ReitTime v2 */
const SUPA_URL='https://iapsvqtdqfrayqjdfxcs.supabase.co',SUPA_KEY='sb_publishable_gvpCiENT8LlNQZihavritw_h7Xablzs';
const sb=supabase.createClient(SUPA_URL,SUPA_KEY,{auth:{flowType:'pkce'}});
const $=s=>document.querySelector(s),A=$('#app');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=t=>esc(t).replace(/(^|\s)#([A-Za-z]\w{1,29})/g,'$1<a href="#/tag/$2">#$2</a>').replace(/(^|\s)@(\w{3,20})/g,'$1<a href="#/u/$2">@$2</a>').replace(/\n/g,'<br>');
const ago=d=>{const s=(Date.now()-new Date(d))/1e3;return s<60?'now':s<3600?(s/60|0)+'m':s<86400?(s/3600|0)+'h':(s/86400|0)+'d'};
const toast=m=>{const t=document.createElement('div');t.className='toast';t.textContent=m;document.body.append(t);setTimeout(()=>t.remove(),2600)};
function hideSplash(){const x=document.getElementById('splash');if(x){x.classList.add('out');setTimeout(()=>x.remove(),500)}}setTimeout(hideSplash,9000);
const sbar=(id,ph,v='')=>`<div class="sbar">${ic('search',20)}<input id="${id}" value="${esc(v)}" placeholder="${ph}" maxlength="40" autocomplete="off" autocapitalize="off" enterkeyhint="search"><button type="button" class="smx" aria-label="Clear" ${v?'':'hidden'}>${ic('x',16)}</button></div>`;
document.addEventListener('input',e=>{const b=e.target.closest&&e.target.closest('.sbar');if(b){const x=b.querySelector('.smx');if(x)x.hidden=!e.target.value}});
document.addEventListener('click',e=>{const x=e.target.closest('.sbar .smx');if(x){const i=x.parentElement.querySelector('input');i.value='';i.dispatchEvent(new Event('input',{bubbles:true}));i.focus()}});
const EQ='<div class="eq">'+'<i></i>'.repeat(7)+'</div>',SK='<div class="card sk"><div class="row" style="flex-wrap:nowrap"><i class="sc"></i><div style="flex:1"><i class="sl w40"></i><i class="sl w25"></i></div></div><i class="sl"></i><i class="sl w80"></i><i class="sb"></i></div>',LOADER=`<div class="ldr">${EQ}<span class="mu">Loading…</span></div>${SK}${SK}`;
const S={st:{},sq:0,aff:{},mv:{},pv:{},bm:new Set(),posts:{},fol:new Set(),joined:new Set(),rev:new Set(),c:{scene:null,poll:false,moods:[],cw:false,cwt:'',ln:false,lk:''},tab:'fy'};
let me,mp;const isAdm=()=>mp&&mp.is_admin;
const hexOk=x=>/^#[0-9a-f]{6}$/i.test(x||'');

/* ---------- ICONS (custom two-tone SVG, no emojis) ---------- */
const O='var(--o,#ff8a1f)',G='var(--gr,#1fb868)',W='#fff';
const pp=(d,f,x='')=>`<path d="${d}" fill="${f}" ${x}/>`,kk=(d,s,w=2)=>`<path d="${d}" fill="none" stroke="${s}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`,cc=(x,y,r,f,o='')=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" ${o}/>`;
const face=b=>cc(12,12,10,b);
const I={
reals:pp('M8.5 2h7A3.5 3.5 0 0 1 19 5.5v13a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 18.5v-13A3.5 3.5 0 0 1 8.5 2z',G)+pp('M5 14l14-5v9.5a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 18.5z',O)+pp('M10.2 7.4v5.8l4.8-2.9z',W)+pp('M20 .8l.9 1.9 1.9.9-1.9.9L20 6.4l-.9-1.9-1.9-.9 1.9-.9z','#ffd24a'),
clock:cc(12,12,10,G)+kk('M12 6.5V12l3.5 2',W,2.2),
vote:pp('M12 2a10 10 0 0 0-10 10h20A10 10 0 0 0 12 2z',G)+pp('M2 12a10 10 0 0 0 20 0z',O)+kk('M8.5 9 12 5.5 15.5 9',W,2.2)+kk('M8.5 15 12 18.5 15.5 15',W,2.2)+kk('M3 12h18',W,1.6),
starO:kk('M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2l-6.1 3.4 1.4-6.8L2.2 9.1l6.9-.8z','currentColor',1.8),
sstar:pp('M12 1.5l9.5 16.5h-19zM12 22.5 2.5 6h19z','#ffb400','stroke="#ff8a1f" stroke-width="1" stroke-linejoin="round"')+cc(12,12,2.4,W),
home:pp('M2.5 11.5 12 3l9.5 8.5-1.5 1.6L12 6 4 13.1z',O)+pp('M5 12.8 12 6.8l7 6V20a1 1 0 0 1-1 1h-4v-5h-4v5H6a1 1 0 0 1-1-1z',G),
people:cc(9,8,3.6,G)+pp('M2.5 20c0-4 3-6 6.5-6s6.5 2 6.5 6z',G)+cc(17,9,2.8,O)+pp('M15.6 14.3c3.4-.4 5.9 1.4 5.9 5.7h-5c0-2-.4-3.9-.9-5.7z',O),
plus:kk('M12 5v14M5 12h14',W,3.2),
bookmark:pp('M6 3h12a1 1 0 0 1 1 1v17l-7-4.5L5 21V4a1 1 0 0 1 1-1z',O)+pp('M12 7l1.3 2.6 2.7.4-2 1.9.5 2.7-2.5-1.3-2.5 1.3.5-2.7-2-1.9 2.7-.4z',W),
user:cc(12,8,4.2,O)+pp('M3.5 21c0-5 3.8-7.5 8.5-7.5s8.5 2.5 8.5 7.5z',G),
gear:kk('M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2',O,3)+cc(12,12,6.2,G)+cc(12,12,2.4,W),
shield:pp('M12 2 4 5.2v6c0 5 3.4 8.8 8 10.8 4.6-2 8-5.8 8-10.8v-6z',G)+kk('M8.2 12l2.7 2.7 5-5.4',W,2.4),
up:cc(12,12,10,G)+kk('M12 17V8M7.5 12 12 7.5l4.5 4.5',W,2.4),
down:cc(12,12,10,O)+kk('M12 7v9M7.5 12l4.5 4.5 4.5-4.5',W,2.4),
chat:pp('M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-7l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',O)+cc(8,10.5,1.4,W)+cc(12,10.5,1.4,W)+cc(16,10.5,1.4,W),
flag:kk('M5 21V3',G,2.4)+pp('M5 4h14l-3 4.5 3 4.5H5z',O),
trash:pp('M5 8h14l-1.2 12.2a1.5 1.5 0 0 1-1.5 1.3H7.7a1.5 1.5 0 0 1-1.5-1.3z',G)+pp('M3.5 5h17v2h-17zM9 2.5h6V5H9z',O)+kk('M10 11v7M14 11v7',W,1.6),
eye:pp('M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z',W,`stroke="${G}" stroke-width="2"`)+cc(12,12,4.2,O)+cc(12,12,1.8,'#111'),
poll:pp('M3 12h4v9H3z',O)+pp('M10 4h4v17h-4z',G)+pp('M17 8h4v13h-4z',O),
pen:pp('M3 21l1-5L16.5 3.5a2 2 0 0 1 3 0l1 1a2 2 0 0 1 0 3L8 20z',O)+pp('M3 21l1-5 4 4z',G),
globe:cc(12,12,10,G)+kk('M2 12h20M12 2c3.5 3.5 3.5 16.5 0 20M12 2c-3.5 3.5-3.5 16.5 0 20',W,1.6),
star:pp('M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2l-6.1 3.4 1.4-6.8L2.2 9.1l6.9-.8z',O),
check:cc(12,12,10,G)+kk('M7 12.5l3.2 3.2L17 8.8',W,2.6),
lock:kk('M8 11V7.5a4 4 0 0 1 8 0V11',G,2.6)+pp('M5 11h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z',O)+cc(12,15.5,1.6,W),
theme:cc(12,12,10,G)+pp('M12 2a10 10 0 0 1 0 20z',O),
search:`<circle cx="10" cy="10" r="6.5" fill="none" stroke="${G}" stroke-width="2.6"/>`+kk('M15 15l6 6',O,3),
tag:kk('M9 3 7 21M17 3l-2 18',G,2.4)+kk('M4 9h17M3 15h17',O,2.4),
link:kk('M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1',G,2.6)+kk('M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1',O,2.6),
warn:pp('M12 2.5 22.5 21h-21z',O)+kk('M12 9v5.5',W,2.4)+cc(12,17.6,1.3,W),
arrowup:kk('M12 20V5M5.5 11.5 12 5l6.5 6.5',W,3),
x:kk('M6 6l12 12M18 6 6 18',O,3),
leaf:pp('M20 3C9 3 4 9 4 15c0 2 .6 3.5 1.5 4.5C7 15 10 11 14 9c-4 3-6 7-6 11 8 0 12-6 12-17z',G),
flame:pp('M12 2c1 4 6 6 6 12a6 6 0 0 1-12 0c0-3 1.5-4.5 3-6 .3 2 1 3 2 3 0-3-1-5 1-9z',O)+pp('M12 21a3 3 0 0 1-3-3c0-2 1.500-3 3-4.500 1.500 1.500 3 2.500 3 4.500a3 3 0 0 1-3 3z','#ffd24a'),
bolt:pp('M13.5 2 4.5 14h6L9 22l10-13h-6.500z',O),
heart:pp('M12 21s-9-5.800-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.200-9 12-9 12z',O),
pin:pp('M12 22s7-6.300 7-12a7 7 0 0 0-14 0c0 5.700 7 12 7 12z',G)+cc(12,10,2.8,W),
cal:pp('M3 5h18v16H3z',G)+pp('M3 5h18v4H3z',O)+cc(8,14,1.3,W)+cc(12,14,1.3,W)+cc(16,14,1.3,W),
cube:pp('M12 2l9 5v10l-9 5-9-5V7z',G)+pp('M12 2l9 5-9 5-9-5z',O)+kk('M12 12v10',W,1.4),
palette:pp('M12 2a10 10 0 1 0 0 20c1.500 0 2-1 1.500-2.200-.6-1.400.2-2.800 1.700-2.800H18a4 4 0 0 0 4-4C22 6 17.500 2 12 2z',O)+cc(7.5,11,1.6,G)+cc(10.5,7,1.6,W)+cc(15.5,7,1.6,G),
dice:`<rect x="3" y="3" width="18" height="18" rx="4.500" fill="${G}"/>`+cc(8,8,1.600,W)+cc(16,8,1.600,W)+cc(12,12,1.600,W)+cc(8,16,1.600,W)+cc(16,16,1.600,W),
send:pp('M2 12 22 3l-5 19-5.500-6.500z',O)+pp('M12 15.500 22 3 9 13z',G),
follow:cc(10,8,4,G)+pp('M2.500 21c0-4.500 3.300-7 7.500-7s7.500 2.500 7.500 7z',G)+kk('M19 6v6M16 9h6',O,2.4),
face:face(O)+cc(8.500,10,1.4,W)+cc(15.500,10,1.4,W)+kk('M7.500 14.500q4.500 5 9 0',W,2),
happy:face(O)+cc(8.500,10,1.4,W)+cc(15.500,10,1.4,W)+kk('M7.500 14.500q4.500 5 9 0',W,2),
calm:face(G)+kk('M6.500 10.500q1.500-1.500 3 0M14.500 10.500q1.500-1.500 3 0',W,1.800)+kk('M8.500 15.500h7',W,2),
sad:face('#5fa8a0')+cc(8.500,10,1.4,W)+cc(15.500,10,1.4,W)+kk('M8 17q4-4 8 0',W,2),
ghost:pp('M12 2a7.500 7.500 0 0 0-7.500 7.500V21l2.500-2 2.500 2 2.500-2 2.500 2 2.500-2 2.500 2V9.500A7.500 7.500 0 0 0 12 2z',W,`stroke="${G}" stroke-width="1.600"`)+cc(9.200,10,1.500,'#111')+cc(14.800,10,1.500,'#111')+cc(12,14,1.500,O),
out:kk('M9 4H5v16h4',G,2.4)+kk('M16 8l4 4-4 4M20 12H10',O,2.6),
caret:kk('M6 9l6 6 6-6',O,3.2),
silly:face(O)+cc(8.500,9.500,1.4,W)+cc(15.500,9.500,1.4,W)+kk('M7.500 14q4.500 3 9 0',W,2)+pp('M10.500 15.500h3v3.200a1.500 1.500 0 0 1-3 0z','#ff5a7a')
};
const ic=(n,s=20,c='')=>`<svg class="ic ${c}" viewBox="0 0 24 24" width="${s}" height="${s}" aria-hidden="true">${I[n]||''}</svg>`;
const MOODS={happy:['Happy','happy'],calm:['Calm','calm'],hype:['Pumped','flame'],sad:['Down','sad'],spooky:['Spooky','ghost'],silly:['Silly','silly']};
const moodsOf=m=>(m.moods||(m.mood?[m.mood]:[])).filter(k=>MOODS[k]);
const SEX={male:'Male',female:'Female'};
const BADGES={star:'Star',leaf:'Leaf',flame:'Flame',bolt:'Bolt',heart:'Heart',cube:'Cube',globe:'Globe'};
const LOGO='<svg viewBox="0 0 64 64"><defs><linearGradient id="l" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff8a1f"/><stop offset="1" stop-color="#2fd07a"/></linearGradient></defs><rect x="12" y="6" width="36" height="52" rx="10" fill="url(#l)"/><circle cx="30" cy="33" r="14" fill="#fff"/><circle cx="25.5" cy="30" r="1.9" fill="#111"/><circle cx="34.5" cy="30" r="1.9" fill="#111"/><path d="M24.5 37Q30 43 35.5 37Z" fill="#e8590c"/><path d="M42 6h14a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-4l-5 5v-5h-5a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4z" fill="#1fb868" stroke="#fff" stroke-width="1.5"/></svg>';
/* theme */
const setTheme=t=>{document.documentElement.dataset.theme=t;localStorage.th=t};
setTheme(localStorage.th||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));
if('serviceWorker'in navigator){const had=!!navigator.serviceWorker.controller;navigator.serviceWorker.register('sw.js',{updateViaCache:'none'}).then(r=>{addEventListener('focus',()=>r.update());setInterval(()=>r.update(),36e5)});navigator.serviceWorker.addEventListener('controllerchange',()=>{if(had&&!window.__rl){window.__rl=1;location.reload()}})}

/* ---------- CHARACTER + SCENE ENGINE (params only; SVG generated on the fly) ---------- */
const rnd=sd=>{let a=(sd|0)+0x6D2B79F5;return()=>{a=Math.imul(a^a>>>15,a|1);a^=a+Math.imul(a^a>>>7,a|61);return((a^a>>>14)>>>0)/4294967296}};
const f1=n=>Math.round(n*10)/10;
function blob(r,cx,cy,rx,ry,n,j){const P=[];for(let i=0;i<n;i++){const t=i/n*6.283,k=1+(r()-.5)*j;P.push([cx+Math.cos(t)*rx*k,cy+Math.sin(t)*ry*k])}
 let d=`M${f1(P[0][0])} ${f1(P[0][1])}`;for(let i=0;i<n;i++){const a=P[(i+n-1)%n],b=P[i],c=P[(i+1)%n],e=P[(i+2)%n];d+=`C${f1(b[0]+(c[0]-a[0])/6)} ${f1(b[1]+(c[1]-a[1])/6)} ${f1(c[0]-(e[0]-b[0])/6)} ${f1(c[1]-(e[1]-b[1])/6)} ${f1(c[0])} ${f1(c[1])}`}return d+'Z'}
const BGS={forest:'Forest',meadow:'Meadow',orchard:'Orange orchard',mountains:'Mountains',desert:'Desert',ocean:'Ocean',sunset:'Sunset',city:'City dusk',night:'Night sky',aurora:'Aurora',cave:'Crystal cave',void:'The Void'};
const OPT={shape:['Tall','Narrow','Wide','Round','Egg'],et:['Round','Sleepy','Grumpy','X eyes','Dizzy','Beady'],nose:['None','Dot','Triangle','Long'],mouth:['Wide smile','Tiny o','Teeth grin','Flat','Tongue out','Frown','Fangs'],extra:['None','Antenna','Ear fins','Cheek marks','Halo','Mohawk','Horns','Beanie','Leaf crown','Bow'],acc:['None','Round glasses','Monocle','Eye patch','Scar','Bandage','Freckles','Mustache'],fit:['Plain','Stripes','Collar','Scarf','Spots','V-neck'],pose:['Neutral','Tilt left','Tilt right','Gaze up','Finger to lips','Wave','Dramatic lean'],prop:['None','Fireflies','Snow','Bubbles','Stars','Leaves','Sparks'],st:['Flat','Lumpy 3D']};
const DEF={h:30,sat:50,lit:62,shape:0,eyes:2,es:9,et:0,pc:'#111111',nose:0,mouth:0,extra:1,acc:0,fit:0,oh:150,pose:0,bg:'forest',prop:0,st:0,sd:7};
const rect=(x,y,w,h,f,o='')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${f}" ${o}/>`,poly=(p,f,o='')=>`<polygon points="${p}" fill="${f}" ${o}/>`,path=(d,f,o='')=>`<path d="${d}" fill="${f}" ${o}/>`;
const cloud=(x,y,s=1)=>`<g fill="#fff" opacity=".85"><ellipse cx="${x}" cy="${y}" rx="${22*s}" ry="${8*s}"/><ellipse cx="${x+13*s}" cy="${y-6*s}" rx="${13*s}" ry="${8*s}"/></g>`;
const pine=(x,y,w,c)=>poly(`${x},${y} ${x-w},${y+70} ${x+w},${y+70}`,c)+poly(`${x},${y+24} ${x-w*1.3},${y+100} ${x+w*1.3},${y+100}`,c);
function bgSVG(k){const g=(a,b)=>`<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="200" height="200" fill="url(#g)"/>`,r=rnd(11);
 const stars=n=>Array.from({length:n},()=>cc(r()*200,r()*110,.8+r()*1.2,'#fff','opacity=".9"')).join('');
 const m={
 forest:()=>g('#9be3b0','#f3f9d2')+cc(150,45,30,'#fff6b0','opacity=".6"')+cloud(40,40)+[15,70,130,185].map((x,i)=>pine(x,60+i%2*14,20,'#4fb37a')).join('')+[40,100,160].map((x,i)=>pine(x,90+i%2*12,26,i%2?'#1f7a45':'#14573a')).join('')+rect(0,176,200,24,'#0f3d2a')+[10,50,95,140,180].map(x=>path(`M${x} 178l3-9 3 9z`,'#2fd07a')).join(''),
 meadow:()=>g('#bff0d0','#fff4cc')+cc(40,45,22,'#ffb457')+cloud(120,38)+cloud(160,70,.7)+path('M0 140Q50 105 110 135T200 120V200H0Z','#5ccf8a')+path('M0 165Q70 135 200 160V200H0Z','#2fb36a')+Array.from({length:16},(_,i)=>{const x=r()*200,y=150+r()*45;return cc(x,y,2.6,i%2?'#ff8a1f':'#fff')+cc(x,y,1,'#ffd24a')}).join(''),
 orchard:()=>g('#fff0cf','#d9f5c9')+cc(160,36,20,'#ffd06b')+cloud(50,36)+[30,100,170].map((x,i)=>rect(x-4,110+i%2*10,8,60,'#8a5a2b')+cc(x,100+i%2*10,32,'#2fb36a')+cc(x-14,96+i%2*10,5,'#ff8a1f')+cc(x+12,108+i%2*10,5,'#ff8a1f')+cc(x+2,88+i%2*10,5,'#ff8a1f')).join('')+rect(0,172,200,28,'#2a9a58'),
 mountains:()=>g('#ffb457','#fff1d6')+cc(150,50,18,'#ff8a1f')+cloud(40,36,.8)+poly('-10,200 55,70 120,200','#5f7a68')+poly('55,70 42,98 68,98','#fff')+poly('70,200 140,95 215,200','#3e6b52')+poly('140,95 128,120 152,120','#fff'),
 desert:()=>g('#ffd08a','#ffeccb')+cc(60,55,22,'#ff8a1f')+path('M0 150Q60 110 120 150T200 140V200H0Z','#e8a24a')+path('M0 175Q80 140 200 175V200H0Z','#c9822c')+'<g fill="#2e9e5f"><rect x="150" y="112" width="9" height="46" rx="4.500"/><rect x="138" y="128" width="7" height="16" rx="3.500"/><rect x="164" y="122" width="7" height="14" rx="3.500"/></g>',
 ocean:()=>g('#7fe0cd','#2a8f7a')+cc(150,40,20,'#ffe9a8')+[0,1,2].map(i=>path(`M0 ${130+i*25}Q50 ${115+i*25} 100 ${130+i*25}T200 ${130+i*25}V200H0Z`,`rgba(255,255,255,.${2+i})`)).join('')+'<ellipse cx="45" cy="165" rx="11" ry="5" fill="#ff8a1f"/><polygon points="55,165 63,159 63,171" fill="#ff8a1f"/>',
 sunset:()=>g('#ff7a1a','#2fbf71')+cc(100,130,40,'#ffd06b')+cc(100,130,56,'#ffd06b','opacity=".25"')+rect(0,150,200,50,'#14573a')+[0,1,2].map(i=>rect(70+i*4,156+i*10,60-i*8,2.5,'#ffd06b','opacity=".6"')).join(''),
 city:()=>g('#ff9a3c','#1d4a3a')+cc(50,60,18,'#ffe9a8')+[[0,90,32],[28,60,30],[56,100,26],[80,70,34],[112,95,28],[138,55,32],[166,85,34]].map(([x,y,w],i)=>rect(x,y,w,200-y,i%2?'#0f3d2a':'#14573a')+[0,1,2,3].map(j=>rect(x+5+j%2*13,y+10+(j>>1)*16,6,8,r()>.3?'#ffd06b':'#14573a')).join('')).join('')+rect(0,184,200,16,'#0b2a1e'),
 night:()=>g('#0d1b2a','#1b4332')+stars(18)+cc(160,40,14,'#ffe9a8')+cc(166,36,12,'#0d1b2a')+path('M0 170Q60 140 120 165T200 160V200H0Z','#0f3d2a'),
 aurora:()=>g('#06131a','#0f3b2e')+stars(14)+path('M0 70Q50 20 100 60T200 40V80Q150 100 100 80T0 100Z','#2fd07a','opacity=".45"')+path('M0 100Q60 60 110 90T200 80V105Q140 125 100 108T0 125Z','#ff8a1f','opacity=".3"')+path('M0 170Q70 150 200 172V200H0Z','#e9fff3','opacity=".9"'),
 cave:()=>g('#1b2e2a','#0b1512')+[[20,200,30,120],[60,200,22,150],[150,200,34,110],[185,200,20,140]].map((c,i)=>poly(`${c[0]},${c[1]} ${c[0]+c[2]/2},${c[3]} ${c[0]+c[2]},${c[1]}`,i%2?'#ff8a1f':'#2fd07a','opacity=".8"')).join(''),
 void:()=>g('#120a1f','#000')+[30,55,80].map((q,i)=>`<ellipse cx="100" cy="110" rx="${q*1.6}" ry="${q}" fill="none" stroke="${i%2?'#2fd07a':'#ff8a1f'}" opacity=".5"/>`).join('')+stars(10)};
 return(m[k]||m.void)()}
function parts(t){if(!t)return'';const r=rnd(40+t);let o='';for(let i=0;i<14;i++){const x=r()*200,y=r()*190,s=1+r()*2.5;o+=[0,cc(x,y,s*1.4,'#ffe27a','opacity=".9"')+cc(x,y,s*3.2,'#ffe27a','opacity=".2"'),cc(x,y,s,'#fff','opacity=".9"'),`<circle cx="${x}" cy="${y}" r="${s*2}" fill="none" stroke="#fff" stroke-opacity=".8"/>`,path(`M${x} ${y-s*3}L${x+s} ${y-s}L${x+s*3} ${y}L${x+s} ${y+s}L${x} ${y+s*3}L${x-s} ${y+s}L${x-s*3} ${y}L${x-s} ${y-s}Z`,'#fff','opacity=".9"'),`<ellipse cx="${x}" cy="${y}" rx="${s*2.4}" ry="${s}" fill="${i%2?'#ff8a1f':'#2fd07a'}" transform="rotate(${r()*180|0} ${x} ${y})"/>`,cc(x,y,s*.8,i%2?'#ff8a1f':'#2fd07a')][t]||''}return o}
const memo=new Map();
function sceneSVG(s,crop){s={...DEF,...s};const r=rnd(s.sd),L=s.st==1,rx=[46,36,58,50,44][s.shape]||46,ry=[64,74,50,56,60][s.shape]||64,HY=105,top=HY-ry,
 sk=`hsl(${s.h} ${s.sat}% ${s.lit}%)`,dk=`hsl(${s.h} ${s.sat}% ${Math.max(16,s.lit-28)}%)`,li=`hsl(${s.h} ${s.sat}% ${Math.min(92,+s.lit+20)}%)`,bc=`hsl(${s.oh} 60% 42%)`,bl=`hsl(${s.oh} 60% 60%)`,
 rot=[0,-12,12,0,-22,8,-30][s.pose]||0,gx=[0,-3,3,0,4,0,2][s.pose]||0,gy=[0,0,0,-5,2,0,3][s.pose]||0,n=Math.max(1,Math.min(5,+s.eyes)),sp=Math.min(30,rx*1.5/n+6);
 const hd=L?`<path d="${blob(r,100,HY,rx,ry,11,.24)}" fill="url(#hg)" stroke="${dk}" stroke-width="1.5"/>`+Array.from({length:4},()=>{const a=r()*6.28,rr=8+r()*11;return cc(f1(100+Math.cos(a)*rx*.82),f1(HY+Math.sin(a)*ry*.82),f1(rr),'url(#hg)',`stroke="${dk}" stroke-opacity=".35"`)}).join('')+`<ellipse cx="${100-rx*.35}" cy="${HY-ry*.5}" rx="${rx*.26}" ry="${ry*.13}" fill="#fff" opacity=".3" transform="rotate(-25 ${100-rx*.35} ${HY-ry*.5})"/>`:`<ellipse cx="100" cy="${HY}" rx="${rx}" ry="${ry}" fill="${sk}"/>`;
 let e='';const EY=[];for(let i=0;i<n;i++){const x=100+(i-(n-1)/2)*sp+(L?(r()-.5)*8:0),y=(n>1?96+i%2*9:100)+(L?(r()-.5)*14:0),R=s.es*(1+i%2*.25)*(L?.75+r()*.7:1),px=x+gx,py=y+gy,dir=x<100?1:-1;EY.push([x,y,R]);
  if(s.et==5)e+=cc(x,y,R*.75,s.pc);
  else if(s.et==3)e+=kk(`M${x-R*.8} ${y-R*.8}L${x+R*.8} ${y+R*.8}M${x+R*.8} ${y-R*.8}L${x-R*.8} ${y+R*.8}`,s.pc,3);
  else{e+=`<ellipse cx="${x}" cy="${y}" rx="${R}" ry="${R*1.2}" fill="${L?'url(#ew)':'#fff'}" ${L?`stroke="${dk}" stroke-opacity=".4"`:''}/>`;
   e+=s.et==4?`<circle cx="${x}" cy="${y}" r="${R*.7}" fill="none" stroke="${s.pc}" stroke-width="1.6"/>`+cc(x,y,R*.3,s.pc):cc(px,py,R*.55,s.pc)+cc(px-R*.2,py-R*.28,R*.18,'#fff');
   if(s.et==1)e+=path(`M${x-R-1} ${y+R*.05}A${R+1} ${R*1.25} 0 0 1 ${x+R+1} ${y+R*.05}Z`,sk,`stroke="${dk}" stroke-width="1.5"`);
   if(s.et==2)e+=path(`M${x-R-2} ${y-R*1.4}L${x+R+2} ${y-R*1.4}L${dir>0?x+R+2:x-R-2} ${y-R*.1}Z`,sk,`stroke="${dk}" stroke-width="1.5" stroke-linejoin="round"`)}}
 const a0=EY[0],a1=EY[EY.length-1],ny=100+ry*.3,my=100+ry*.5,w=rx*.7,j=L?(r()-.5)*12:0,col=`stroke="${dk}" stroke-width="3" fill="none" stroke-linecap="round"`;
 const nz=!s.nose?'':L?`<ellipse cx="100" cy="${ny+2}" rx="${6+r()*4}" ry="${7+r()*4}" fill="url(#hg)" stroke="${dk}" stroke-opacity=".5"/>`:[0,cc(100,ny,3,dk),poly(`100,${ny-6} 95,${ny+5} 105,${ny+5}`,dk,'opacity=".8"'),rect(96,ny-8,8,18,dk,'rx="4" opacity=".7"')][s.nose];
 const sm=`M${100-w} ${my+j/3}Q${100+j} ${my+16} ${100+w} ${my-j/3}`;
 const mo=[`<path d="${sm}" ${col}/>`,`<ellipse cx="100" cy="${my+2}" rx="5" ry="8" fill="${dk}"/>`,path(sm+'Z','#fff',`stroke="${dk}" stroke-width="2"`)+[-.5,-.2,.1,.4].map(k=>`<line x1="${100+w*k*1.4}" y1="${my+2}" x2="${100+w*k*1.4}" y2="${my+8}" stroke="${dk}"/>`).join(''),rect(100-w*.6,my,w*1.2,3.5,dk,'rx="1.7"'),`<ellipse cx="${100+w*.2}" cy="${my+9}" rx="6" ry="8" fill="#ff6b8b" stroke="${dk}"/><path d="${sm}" ${col}/>`,`<path d="M${100-w} ${my+8}Q100 ${my-6+j} ${100+w} ${my+8}" ${col}/>`,`<path d="${sm}" ${col}/>`+[-.5,.5].map(k=>poly(`${100+w*k-3},${my+7} ${100+w*k+3},${my+7} ${100+w*k},${my+16}`,'#fff',`stroke="${dk}"`)).join('')][s.mouth]||'';
 const ac=['',EY.map(([x,y,R])=>`<circle cx="${x}" cy="${y}" r="${R*1.5}" fill="rgba(255,255,255,.18)" stroke="#222" stroke-width="2"/>`).join('')+kk(`M${a0[0]+a0[2]*1.5} ${a0[1]}L${a1[0]-a1[2]*1.5} ${a1[1]}`,'#222'),`<circle cx="${a1[0]}" cy="${a1[1]}" r="${a1[2]*1.6}" fill="rgba(255,255,255,.2)" stroke="#d9a400" stroke-width="2"/>`+kk(`M${a1[0]+a1[2]*1.2} ${a1[1]+a1[2]*1.2}Q${a1[0]+20} ${a1[1]+30} ${a1[0]+8} ${a1[1]+50}`,'#d9a400',1.2),`<ellipse cx="${a0[0]}" cy="${a0[1]}" rx="${a0[2]*1.5}" ry="${a0[2]*1.7}" fill="#1a1a1a"/>`+kk(`M${100-rx+2} ${a0[1]-20}L${a0[0]} ${a0[1]}`,'#1a1a1a'),kk(`M${100+rx*.45} ${ny-16}l14 28`,'#b33',2.6)+kk(`M${100+rx*.45+3} ${ny-8}l-5 3M${100+rx*.45+8} ${ny+2}l-5 3`,'#b33',1.6),`<g transform="rotate(-18 100 ${top+ry*.45})">${rect(78,top+ry*.45-5,44,12,'#ffd9a8','rx="3" stroke="#c9822c"')}${cc(94,top+ry*.45+1,1.2,'#c9822c')}${cc(106,top+ry*.45+1,1.2,'#c9822c')}</g>`,[[-22,6],[-16,10],[-27,11],[22,6],[16,10],[27,11]].map(([dx,dy])=>cc(100+dx*rx/46,ny+dy,1.5,dk,'opacity=".7"')).join(''),path(`M100 ${ny+9}Q88 ${ny+2} 77 ${ny+12}Q90 ${ny+14} 100 ${ny+11}Q110 ${ny+14} 123 ${ny+12}Q112 ${ny+2} 100 ${ny+9}Z`,'#3b2a1a')][s.acc]||'';
 const XB={1:kk(`M100 ${top+6}L104 ${top-14}`,dk)+cc(104,top-16,5,'#ff8a1f'),2:poly(`${100-rx},95 ${100-rx-22},70 ${100-rx},118`,dk)+poly(`${100+rx},95 ${100+rx+22},70 ${100+rx},118`,dk),4:`<ellipse cx="100" cy="${top-8}" rx="26" ry="6" fill="none" stroke="#ffd24a" stroke-width="3"/>`,5:[-18,-9,0,9,18].map((k,i)=>poly(`${100+k-5},${top+8} ${100+k},${top-14-(2-Math.abs(i-2))*5} ${100+k+5},${top+8}`,i%2?'#ff8a1f':'#2fd07a')).join(''),6:[-1,1].map(k=>path(`M${100+k*rx*.55} ${top+14}Q${100+k*rx*.95} ${top-8} ${100+k*rx*.6} ${top-24}Q${100+k*rx*.3} ${top-6} ${100+k*rx*.3} ${top+8}Z`,'#f3e9d2',`stroke="${dk}" stroke-width="1.5"`)).join('')};
 const bx=100+rx*.55,by=top+14,XF={3:[-1,1].map(k=>[0,7,14].map(q=>`<line x1="${100+k*(rx-18)}" y1="${112+q}" x2="${100+k*(rx-6)}" y2="${112+q}" stroke="${dk}" stroke-width="2"/>`).join('')).join(''),7:path(`M${100-rx-2} ${top+ry*.45}A${rx+2} ${ry*.45+6} 0 0 1 ${100+rx+2} ${top+ry*.45}Z`,'#ff8a1f')+rect(100-rx-4,top+ry*.45-6,2*rx+8,11,'#e8590c','rx="5"')+cc(100,top-6,7,'#2fd07a'),8:[-30,-15,0,15,30].map((k,i)=>{const x=100+k*rx/46;return `<ellipse cx="${x}" cy="${top+8+Math.abs(k)*.3}" rx="9" ry="4.500" fill="${i%2?'#2fd07a':'#1fb868'}" transform="rotate(${k*1.5} ${x} ${top+8})"/>`}).join('')+cc(100+12*rx/46,top+4,3,'#ff8a1f')+cc(100-22*rx/46,top+10,3,'#ff8a1f'),9:poly(`${bx},${by} ${bx+16},${by-9} ${bx+16},${by+9}`,'#ff8a1f')+poly(`${bx},${by} ${bx-16},${by-9} ${bx-16},${by+9}`,'#ff8a1f')+cc(bx,by,4,'#1fb868')};
 const bp='M26 200C30 160 62 151 100 152C138 151 170 160 174 200Z',nl=path('M83 151Q100 176 117 151Z',sk,`stroke="${dk}" stroke-opacity=".35"`),fit=[ '',[158,168,178,188].map(y=>rect(20,y,160,5,'rgba(255,255,255,.4)')).join(''),poly('76,151 99,151 86,182','#fff')+poly('124,151 101,151 114,182','#fff')+path('M83 151Q100 176 117 151Z',sk),rect(60,158,80,13,'#ff8a1f','rx="6"')+rect(112,164,13,34,'#ff8a1f','rx="5"')+rect(60,166,80,3,'rgba(0,0,0,.15)'),[[50,185],[75,170],[125,172],[150,186],[90,194],[115,192],[36,196],[164,196]].map(([x,y])=>cc(x,y,4,'rgba(255,255,255,.45)')).join(''),path('M80 151L100 192L120 151Z',sk,`stroke="${dk}" stroke-opacity=".35"`)][s.fit]||'';
 const hand=s.pose==4?kk(`M160 200L${100+w*.6} ${my+4}`,sk,6):s.pose==5?kk(`M160 200L${100+rx+14} 120`,sk,9)+cc(100+rx+14,114,8,sk)+[-5,0,5].map(q=>kk(`M${100+rx+14+q} 108l${q/2} -7`,sk,3)).join(''):'';
 const defs=L?`<defs><radialGradient id="hg" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="${li}"/><stop offset=".55" stop-color="${sk}"/><stop offset="1" stop-color="${dk}"/></radialGradient><radialGradient id="ew" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#c9d4cc"/></radialGradient><radialGradient id="bg3" cx=".4" cy=".2" r=".9"><stop offset="0" stop-color="${bl}"/><stop offset="1" stop-color="${bc}"/></radialGradient></defs>`:'';
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${crop?'34 16 132 132':'0 0 200 200'}">${bgSVG(s.bg)}${parts(s.prop)}${defs}${L?'<ellipse cx="100" cy="197" rx="62" ry="6" fill="#000" opacity=".25"/>':''}<clipPath id="cb"><path d="${bp}"/></clipPath><g transform="rotate(${rot} 100 190)">${rect(90,136,20,54,sk)}</g>${path(bp,L?'url(#bg3)':bc)}${s.fit==5?'':nl}<g clip-path="url(#cb)">${fit}</g><g transform="rotate(${rot} 100 190)">${XB[s.extra]||''}${hd}${nz}${e}${ac}${mo}${XF[s.extra]||''}${hand}</g></svg>`}
const uri=(s,c)=>{const k=JSON.stringify(s||0)+(c?1:0);let v=memo.get(k);if(!v){v='data:image/svg+xml,'+encodeURIComponent(sceneSVG(s,c));memo.size>300&&memo.clear();memo.set(k,v)}return v};
const scn=(s,cls='')=>`<img class="scn ${cls}" alt="character scene" src="${uri(s)}">`;
const av=(u,cls='')=>`<img class="av ${cls}" alt="" src="${uri(u&&u.scene,1)}">`;
const noP=s=>{if(!s)return null;const{p,...x}=s;return x};
const badge=a=>{const b=a&&a.scene&&a.scene.p&&a.scene.p.bd;return b&&I[b]?' '+ic(b,15):''};

/* Character studio */
function editScene(init,cb){const s={...DEF,...init};
 const sel=(k,l,o)=>`<label class="ctl">${l}<select name="${k}">${(Array.isArray(o)?o.map((v,i)=>[i,v]):Object.entries(o)).map(([v,t])=>`<option value="${v}" ${s[k]==v?'selected':''}>${t}</option>`).join('')}</select></label>`,
 rg=(k,l,a,b)=>`<label class="ctl">${l}<input type="range" name="${k}" min="${a}" max="${b}" value="${s[k]}"></label>`,cl=(k,l)=>`<label class="ctl">${l}<input type="color" name="${k}" value="${s[k]}"></label>`,
 pane=(t,h)=>`<div class="tp" data-t="${t}" ${t=='face'?'':'hidden'}>${h}</div>`;
 const tabs=[['face','face','Face'],['look','palette','Look'],['world','globe','World'],['style','cube','Style']];
 const el=sheet(`<h3>${ic('face',22)} Character studio</h3><div id="pv">${scn(s)}</div><div class="stabs">${tabs.map((t,i)=>`<button type="button" class="chip tb ${i?'':'sel'}" data-t="${t[0]}">${ic(t[1],18)} ${t[2]}</button>`).join('')}</div>`+
  pane('face',sel('shape','Head shape',OPT.shape)+rg('eyes','Eyes',1,5)+rg('es','Eye size',5,16)+sel('et','Eye style',OPT.et)+cl('pc','Pupil color')+sel('nose','Nose',OPT.nose)+sel('mouth','Mouth',OPT.mouth))+
  pane('look',rg('h','Skin hue',0,360)+rg('sat','Skin saturation',0,90)+rg('lit','Skin lightness',25,88)+sel('extra','Head extra',OPT.extra)+sel('acc','Accessory',OPT.acc)+sel('fit','Outfit',OPT.fit)+rg('oh','Outfit hue',0,360)+sel('pose','Pose',OPT.pose))+
  pane('world',sel('bg','Background',BGS)+sel('prop','Particles',OPT.prop))+
  pane('style',sel('st','Rendering',OPT.st)+`<p class="mu">Lumpy 3D gives you a weird, wobbly, shaded head. Reroll to reshape the lumps.</p><div class="row"><button type="button" class="chip" id="rl">${ic('dice',18)} Reroll lumps</button><button type="button" class="chip" id="rd">${ic('palette',18)} Randomize all</button></div>`)+
  `<button class="btn" id="sv">${ic('check',18)} Use this character</button>`);
 const draw=()=>$('#pv').innerHTML=scn(s);
 el.oninput=e=>{if(!e.target.name)return;const v=e.target.value;s[e.target.name]=isNaN(v)||v===''?v:+v;draw()};
 el.addEventListener('click',e=>{const t=e.target.closest('.tb');if(t){el.querySelectorAll('.tb').forEach(b=>b.classList.toggle('sel',b==t));el.querySelectorAll('.tp').forEach(p=>p.hidden=p.dataset.t!=t.dataset.t)}
  if(e.target.closest('#rl')){s.sd=Math.random()*1e6|0;s.st=1;draw();const q=el.querySelector('[name=st]');q.value=1;q._sync&&q._sync()}
  if(e.target.closest('#rd')){const R=n=>Math.random()*n|0;Object.assign(s,{h:R(360),sat:25+R(60),lit:40+R(40),shape:R(5),eyes:1+R(5),es:6+R(10),et:R(6),nose:R(4),mouth:R(7),extra:R(10),acc:R(8),fit:R(5),oh:R(360),pose:R(7),prop:R(7),sd:R(1e6),pc:'#'+(R(0xaaaaaa)+0x111111).toString(16).padStart(6,'0')});draw();el.querySelectorAll('[name]').forEach(i=>{if(s[i.name]!==undefined){i.value=s[i.name];i._sync&&i._sync();i.type=='range'&&setP(i)}})}});
 $('#sv').onclick=()=>{closeSheet();cb(s)}}
/* ---------- sheets ---------- */
function sheet(html){closeSheet(true);const el=document.createElement('div');el.className='bd';el.innerHTML=`<div class="sh"><div class="hd"></div><div class="shc">${html}</div></div>`;document.body.append(el);requestAnimationFrame(()=>el.classList.add('on'));
 const sh=el.firstChild,hd=sh.querySelector('.hd');let y0=0,dy=0;
 hd.ontouchstart=e=>{y0=e.touches[0].clientY;sh.style.transition='none'};hd.ontouchmove=e=>{dy=Math.max(0,e.touches[0].clientY-y0);sh.style.transform=`translateY(${dy}px)`};
 hd.ontouchend=()=>{sh.style.transition='';dy>90?closeSheet():sh.style.transform='';dy=0};hd.onclick=()=>closeSheet();el.onclick=e=>{if(e.target===el)closeSheet()};return el}
function closeSheet(now){document.querySelectorAll('.bd').forEach(b=>{if(now)b.remove();else{b.classList.remove('on');setTimeout(()=>b.remove(),280)}})}

/* ---------- AUTH ---------- */
function authUI(mode='in'){hideSplash();A.innerHTML=`<div class="auth"><div class="logo">${LOGO}<h1>ReitTime</h1></div><p class="mu">Words. Scenes. Strange faces.</p><div class="tabs"><button class="${mode=='in'?'on':''}" onclick="authUI('in')">Log in</button><button class="${mode=='up'?'on':''}" onclick="authUI('up')">Sign up</button></div><form id="af" class="col">${mode=='up'?'<input name="u" placeholder="Username" pattern="\\w{3,20}" title="3-20 letters, numbers, _" required>':''}<input name="e" type="email" placeholder="Email" required><input name="p" type="password" placeholder="Password (8+ chars)" minlength="8" required><button class="btn">${mode=='in'?'Log in':'Create account'}</button></form>${mode=='in'?'<a href="#" onclick="forgot();return false">Forgot password?</a>':''}</div>`;
 $('#af').onsubmit=async e=>{e.preventDefault();const f=e.target,b=f.querySelector('button');b.disabled=true;
  if(mode=='in'){const {error}=await sb.auth.signInWithPassword({email:f.e.value,password:f.p.value});error?(toast(error.message),b.disabled=false):boot()}
  else{const {data,error}=await sb.auth.signUp({email:f.e.value,password:f.p.value,options:{data:{username:f.u.value}}});b.disabled=false;if(error)return toast(error.message);if(data.session)boot();else{toast('Account created — signing in…');const r=await sb.auth.signInWithPassword({email:f.e.value,password:f.p.value});r.error?toast(r.error.message):boot()}}}}
async function forgot(){const e=prompt('Your account email:');if(!e)return;const {error}=await sb.auth.resetPasswordForEmail(e,{redirectTo:location.origin+location.pathname});toast(error?error.message:'Reset link sent if the account exists.')}
function recoverUI(){A.innerHTML='<div class="auth"><h2>New password</h2><form id="rf" class="col"><input name="p" type="password" minlength="8" placeholder="New password" required><button class="btn">Save</button></form></div>';$('#rf').onsubmit=async e=>{e.preventDefault();const {error}=await sb.auth.updateUser({password:e.target.p.value});error?toast(error.message):(toast('Password updated'),boot())}}
async function mfaUI(){const {data}=await sb.auth.mfa.listFactors();const f=data.totp[0];A.innerHTML='<div class="auth"><h2>Two-factor code</h2><p class="mu">Enter the 6-digit code from your authenticator app.</p><form id="mf" class="col"><input name="c" inputmode="numeric" maxlength="6" placeholder="123456" required><button class="btn">Verify</button></form></div>';
 $('#mf').onsubmit=async e=>{e.preventDefault();const {error}=await sb.auth.mfa.challengeAndVerify({factorId:f.id,code:e.target.c.value});error?toast(error.message):boot()}}
sb.auth.onAuthStateChange(ev=>{if(ev==='PASSWORD_RECOVERY')recoverUI()});

/* ---------- DATA ---------- */
async function loadPosts(f){let q=sb.from('posts').select('*,author:profiles!user_id(username,display_name,scene,accent),community:communities!community_id(slug,name)').eq('hidden',false).order('created_at',{ascending:false}).limit(120);if(f)q=f(q);
 const {data,error}=await q;if(error)toast(error.message);const ps=data||[];const ids=ps.map(p=>p.id);S.posts={};ps.forEach(p=>S.posts[p.id]=p);
 if(ids.length){const [v,pv,bm,st]=await Promise.all([sb.from('votes').select('post_id,v').in('post_id',ids),sb.from('poll_votes').select('post_id,opt,user_id').in('post_id',ids),sb.from('bookmarks').select('post_id').in('post_id',ids),sb.from('stars').select('post_id,lvl').eq('user_id',me.id).in('post_id',ids)]);
  (st.data||[]).forEach(x=>S.st[x.post_id]=x.lvl);
  (v.data||[]).forEach(x=>S.mv[x.post_id]=x.v);(bm.data||[]).forEach(x=>S.bm.add(x.post_id));
  (pv.data||[]).forEach(x=>{const o=S.pv[x.post_id]=S.pv[x.post_id]||{c:[],me:null};o.c[x.opt]=(o.c[x.opt]||0)+1;if(x.user_id===me.id)o.me=x.opt})}
 return ps}
function rank(ps){const seen={},out=[],now=Date.now();const sc=ps.map(p=>{const t=new Date(p.created_at),age=(now-t)/36e5,st=S.st[p.id]||0,v=S.mv[p.id]||0,ae=st?age*.5:v==1?age*.75:age;
 let s=(p.ups-1.2*p.downs+1+p.comments_count*1.5+(p.poll?2:0))/Math.pow(ae+2,1.4);
 if(S.fol.has(p.user_id))s*=1.6;if(S.joined.has(p.community_id))s*=1.3;if(p.scene)s*=1.15;
 s*=st==2?2.4:st==1?1.6:1;s*=v==1?1.45:v==-1?.35:1;s*=1+Math.min(.6,(S.aff[p.user_id]||0)*.12);
 const sn=SEEN[p.id];if(sn){const h=(now-sn[0])/36e5;s*=h>168?1:Math.pow(.55,Math.min(2,sn[1])*(h>72?.5:1))}else if(t>LV)s*=1.5;
 return{p,s}});
 while(sc.length){let bi=0,bs=-1;sc.forEach((x,i)=>{const v=x.s*Math.pow(.6,seen[x.p.user_id]||0);if(v>bs){bs=v;bi=i}});const x=sc.splice(bi,1)[0];seen[x.p.user_id]=(seen[x.p.user_id]||0)+1;out.push(x.p)}return out}
function linkChip(u){try{const x=new URL(u);if(!/^https?:$/.test(x.protocol))return'';return `<a class="lk" href="${esc(u)}" target="_blank" rel="noopener noreferrer nofollow">${ic('link',18)}<span>${esc(x.hostname.replace(/^www\./,''))}</span></a>`}catch{return''}}
const tagsOf=b=>[...new Set((b.match(/(^|\s)#([A-Za-z]\w{1,29})/g)||[]).map(t=>t.trim().slice(1).toLowerCase()))];
function postCard(p){const a=p.author||{},v=S.mv[p.id]||0,mine=p.user_id===me.id,pl=S.pv[p.id]||{c:[],me:null},m=p.meta||{},mo=moodsOf(m),sl=S.st[p.id]||0;let poll='';
 if(p.poll){const tot=pl.c.reduce((a,b)=>a+(b||0),0);poll=`<div class="poll">`+p.poll.opts.map((o,i)=>`<button class="opt ${pl.me===i?'me':''}" data-act="pvote" data-id="${p.id}" data-i="${i}">${pl.me!=null?`<i style="width:${tot?Math.round((pl.c[i]||0)/tot*100):0}%"></i>`:''}<span>${esc(o)}${pl.me!=null?` · ${tot?Math.round((pl.c[i]||0)/tot*100):0}%`:''}</span></button>`).join('')+`<div class="mu">${ic('poll',14)} ${tot} votes</div></div>`}
 const inner=`${p.body?`<div class="pb">${fmt(p.body)}</div>`:''}${m.link?linkChip(m.link):''}${(p.images||[]).length?`<div class="imgs n${Math.min(p.images.length,2)}">${p.images.map(u=>`<img loading="lazy" src="${esc(u)}" alt="">`).join('')}</div>`:''}${p.scene?scn(p.scene):''}${poll}`;
 const body=m.cw?`<div class="cwb ${S.rev.has(p.id)?'open':''}"><button class="cwbtn" data-act="reveal" data-id="${p.id}">${ic('warn',18)} <span>${esc(m.cw)}</span> <u>Show</u></button><div class="cwc">${inner}</div></div>`:inner;
 return `<article class="card" data-card="${p.id}"><div class="row"><a href="#/u/${esc(a.username)}">${av(a)}</a><div style="flex:1"><b><a href="#/u/${esc(a.username)}" style="color:inherit">${esc(a.display_name||a.username)}</a></b>${badge(a)} <span class="mu">@${esc(a.username)} · ${ago(p.created_at)}</span><div class="meta">${mo.map(k=>`<span class="mood">${ic(MOODS[k][1],15)} ${MOODS[k][0]}</span>`).join('')}${p.community?`<a href="#/c/${esc(p.community.slug)}" class="mu">${ic('people',14)} ${esc(p.community.name)}</a>`:''}</div></div></div>
 ${body}
 <div class="act"><button class="vb ${v?'on':''} ${v==-1?'dn':''}" aria-label="Hype or disparage" data-act="votemenu" data-id="${p.id}">${ic(v==1?'up':v==-1?'down':'vote')} ${p.ups-p.downs}</button><button class="starb ${sl?'on':''} ${sl==2?'sup':''}" data-star="${p.id}" aria-label="Star (hold for super star)">${ic(sl==2?'sstar':sl?'star':'starO')}</button><button aria-label="Comments" data-act="cm" data-id="${p.id}">${ic('chat')} ${p.comments_count}</button><span class="sp"></span><button aria-label="Share link" data-act="share" data-id="${p.id}">${ic('link')}</button><button aria-label="Save" class="${S.bm.has(p.id)?'on':''}" data-act="bm" data-id="${p.id}">${ic('bookmark')}</button>${mine?`<button aria-label="Edit" data-act="editpost" data-id="${p.id}">${ic('pen')}</button>`:`<button aria-label="Report" data-act="rep" data-k="post" data-id="${p.id}">${ic('flag')}</button>`}${mine||isAdm()?`<button aria-label="Delete" data-act="del" data-id="${p.id}">${ic('trash')}</button>`:''}</div></article>`}
const cards=ps=>ps.map(postCard).join('')||`<p class="empty">${ic('leaf',28)}<br>Nothing here yet.</p>`;
const H=(i,t)=>`<h2 class="h">${ic(i,22)} ${t}</h2>`;

/* ---------- PAGES ---------- */
async function feed(){const {data:cs}=await sb.from('communities').select('slug,name,id,featured').order('featured',{ascending:false}).limit(25);
 const chips=`<div class="chips"><a class="chip" href="#/c">${ic('globe',18)} All communities</a>${(cs||[]).sort((a,b)=>S.joined.has(b.id)-S.joined.has(a.id)).map(c=>`<a class="chip" href="#/c/${esc(c.slug)}">${c.featured?ic('star',16)+' ':''}${esc(c.name)}</a>`).join('')}</div>`;
 let ps=await loadPosts(q=>q.limit(150));const tc={};ps.forEach(p=>(p.tags||[]).forEach(t=>tc[t]=(tc[t]||0)+1));const tr=Object.entries(tc).sort((a,b)=>b[1]-a[1]).slice(0,8);
 ps=S.tab=='fol'?ps.filter(p=>S.fol.has(p.user_id)||p.user_id===me.id):rank(ps.filter(p=>!touched(p)));
 A.innerHTML=`${chips}<a class="card row quick" href="#/new">${av(mp)}<span class="mu" style="flex:1">What's happening?</span>${ic('pen',22)}</a><a class="card row quick reals-pill" href="#/reals">${ic('reals',30)}<span style="flex:1"><b>Reals</b><br><span class="mu">Swipe through posts picked for you</span></span>${ic('caret',18,'chev')}</a>${tr.length?`<div class="chips trend">${ic('tag',18)}${tr.map(([t])=>`<a class="chip" href="#/tag/${esc(t)}">#${esc(t)}</a>`).join('')}</div>`:''}<div class="tabs"><button class="${S.tab!='fol'?'on':''}" data-act="tab" data-t="fy">${ic('flame',18)} For you</button><button class="${S.tab=='fol'?'on':''}" data-act="tab" data-t="fol">${ic('people',18)} Following</button></div><div id="newp"></div>${feedCards(ps)}`;if(S.tab!='fol')sugUsers(ps).then(h=>{const e=$('#sug');if(e)e.innerHTML=h}).catch(()=>{})}
async function tagPg(t){const ps=await loadPosts(q=>q.contains('tags',[t.toLowerCase()]));A.innerHTML=H('tag','#'+esc(t))+cards(ps)}
async function postPg(id){const ps=await loadPosts(q=>q.eq('id',id));A.innerHTML=`<a class="chip" href="#/">${ic('home',18)} Home</a>`+cards(ps)}
async function saved(){const [b,d]=await Promise.all([sb.from('bookmarks').select('post_id').order('created_at',{ascending:false}),sb.from('drafts').select('*').order('created_at',{ascending:false})]);const ids=(b.data||[]).map(x=>x.post_id);const ps=ids.length?await loadPosts(q=>q.in('id',ids)):[];
 A.innerHTML=H('pen','Drafts')+((d.data||[]).map(x=>`<div class="card row"><div style="flex:1">${esc(x.body.slice(0,120))}</div><button class="chip" data-act="usedraft" data-id="${x.id}">${ic('pen',16)} Edit</button><button class="lnk" aria-label="Delete draft" data-act="deldraft" data-id="${x.id}">${ic('trash',18)}</button></div>`).join('')||'<p class="mu">No drafts.</p>')+H('bookmark','Saved posts')+cards(ps);S.drafts=d.data||[]}
async function compose(){const ids=[...S.joined];const {data:cs}=ids.length?await sb.from('communities').select('id,name').in('id',ids):{data:[]};
 A.innerHTML=`<div class="card col"><div class="row">${av(mp)}<b>Posting as ${esc(mp.display_name||mp.username)}</b></div><select id="cc"><option value="">No community</option>${(cs||[]).map(c=>`<option value="${c.id}" ${S.c.comm==c.id?'selected':''}>${esc(c.name)}</option>`).join('')}</select><textarea id="cb" maxlength="1000" placeholder="What's happening? Use #tags and @mentions">${esc(S.c.body||'')}</textarea><div class="mu" style="text-align:right"><span id="cn">0</span>/1000</div><div id="cx"></div><div id="cp"></div><div id="cpoll"></div><div class="row wrap"><button class="chip" data-act="cscene">${ic('face',18)} Character</button><button class="chip" data-act="cpoll">${ic('poll',18)} Poll</button><button class="chip" data-act="cwt">${ic('warn',18)} Warning</button><button class="chip" data-act="cln">${ic('link',18)} Link</button></div><div class="row"><button class="btn" data-act="post">${ic('send',18)} Post</button><button class="btn ghost" data-act="draft">${ic('pen',18)} Save draft</button></div></div>`;
 const cb=$('#cb'),cn=()=>$('#cn').textContent=cb.value.length;cb.oninput=()=>{S.c.body=cb.value;cn()};cn();drawC()}
function drawC(){const c=S.c;$('#cx').innerHTML=`<div class="chips">${Object.entries(MOODS).map(([k,m])=>`<button class="chip ${c.moods.includes(k)?'sel':''}" data-act="mood" data-k="${k}">${ic(m[1],18)} ${m[0]}</button>`).join('')}</div>${c.cw?`<input id="cwi" maxlength="60" placeholder="Content warning (e.g. spoilers)" value="${esc(c.cwt)}">`:''}${c.ln?`<input id="lki" type="url" maxlength="300" placeholder="https://…" value="${esc(c.lk)}">`:''}`;
 const w=$('#cwi'),l=$('#lki');if(w)w.oninput=()=>c.cwt=w.value;if(l)l.oninput=()=>c.lk=l.value;
 $('#cp').innerHTML=c.scene?scn(c.scene)+`<button class="lnk" data-act="rmscene">${ic('x',16)} remove character</button>`:'';
 $('#cpoll').innerHTML=c.poll?'<div class="col">'+[0,1,2,3].map(i=>`<input class="po" placeholder="Option ${i+1}${i>1?' (optional)':''}" maxlength="60">`).join('')+'</div>':''}
async function profile(un){un=un||mp.username;const {data:u}=await sb.from('profiles').select('*').eq('username',un).single();if(!u)return A.innerHTML='<p class="empty">User not found</p>';
 const [fo,fg]=await Promise.all([sb.from('follows').select('*',{count:'exact',head:true}).eq('following',u.id),sb.from('follows').select('*',{count:'exact',head:true}).eq('follower',u.id)]);const ps=await loadPosts(q=>q.eq('user_id',u.id)),mine=u.id===me.id,ac=hexOk(u.accent)?u.accent:'#ff8a1f',pr=(u.scene&&u.scene.p)||{},ac2=hexOk(pr.ac2)?pr.ac2:'#2fd07a',f=S.fol.has(u.id),mo=MOODS[pr.mood];S.prof=u;
 A.innerHTML=`<div class="prof card" style="padding:0;overflow:hidden;--ac:${ac};--ac2:${ac2}">${scn(u.scene,'ban')}<div class="pbar"></div><div class="pi">${av(u,'lg')}<div><h2>${esc(u.display_name||u.username)}${badge(u)} ${u.is_admin?`<span class="badge">${ic('shield',14)} admin</span>`:''}</h2><span class="mu">@${esc(u.username)}${SEX[pr.sx]?' · '+SEX[pr.sx]:''}</span></div></div>
 ${pr.st||mo?`<div class="status">${mo?ic(mo[1],18):''} ${esc(pr.st||mo[0])}</div>`:''}<p>${fmt(u.bio)}</p>
 <div class="meta2">${pr.loc?`<span>${ic('pin',16)} ${esc(pr.loc)}</span>`:''}${pr.ln?linkChip(pr.ln):''}${u.created_at?`<span>${ic('cal',16)} Joined ${new Date(u.created_at).toLocaleDateString(undefined,{month:'short',year:'numeric'})}</span>`:''}</div>
 <div class="stats"><div>${ic('chat',20)}<b>${ps.length}</b><span>posts</span></div><button class="lnk" data-act="ulist" data-k="followers" data-id="${u.id}">${ic('people',20)}<b>${fo.count||0}</b><span>followers</span></button><button class="lnk" data-act="ulist" data-k="following" data-id="${u.id}">${ic('follow',20)}<b>${fg.count||0}</b><span>following</span></button></div>
 <div class="row" style="padding-bottom:12px">${mine?`<button class="btn" data-act="editp">${ic('pen',18)} Edit profile</button><a class="btn ghost" href="#/stars">${ic('star',18)} My stars</a>`:`<button class="btn ${f?'ghost':''}" data-act="follow" data-id="${u.id}">${ic('follow',18)} ${f?'Following':'Follow'}</button><button class="btn ghost" data-act="rep" data-k="user" data-id="${u.id}">${ic('flag',18)} Report</button>`}</div></div>${H('chat','Posts')}${cards(ps)}`}
async function comm(slug){if(slug)return commPg(slug);
 const fol=[...S.fol].slice(0,150),since=new Date(Date.now()-14*864e5).toISOString();
 const [c,m,fm,rp]=await Promise.all([sb.from('communities').select('*').limit(200),sb.from('community_members').select('community_id').limit(3000),fol.length?sb.from('community_members').select('community_id,user_id').in('user_id',fol).limit(1000):{data:[]},sb.from('posts').select('community_id,user_id,tags').eq('hidden',false).not('community_id','is',null).gte('created_at',since).limit(400)]);
 const n={},mu={},act={},fa={},tg={},bt={};(m.data||[]).forEach(x=>n[x.community_id]=(n[x.community_id]||0)+1);
 (fm.data||[]).forEach(x=>mu[x.community_id]=(mu[x.community_id]||0)+1);
 (rp.data||[]).forEach(x=>{const k=x.community_id;act[k]=(act[k]||0)+1;if(S.fol.has(x.user_id))fa[k]=(fa[k]||0)+1;(x.tags||[]).forEach(t=>{const w=AF.t[t]||0;if(w>0){tg[k]=(tg[k]||0)+w;if(!bt[k]||w>bt[k][1])bt[k]=[t,w]}})});
 const why=x=>mu[x.id]?`${mu[x.id]} ${mu[x.id]==1?'person':'people'} you follow ${mu[x.id]==1?'is':'are'} here`:fa[x.id]?'People you follow post here':bt[x.id]?`Matches your interest in #${bt[x.id][0]}`:(act[x.id]||0)>=5?'Active right now':x.featured?'Featured':'New to explore';
 const sc=x=>3*(mu[x.id]||0)+1.5*(fa[x.id]||0)+.6*(tg[x.id]||0)+.5*Math.log(1+(act[x.id]||0))+(x.featured?1.2:0)+.3*Math.log(1+(n[x.id]||0));
 const all=c.data||[],mine=all.filter(x=>S.joined.has(x.id)).sort((a,b)=>(act[b.id]||0)-(act[a.id]||0)),rest=all.filter(x=>!S.joined.has(x.id)).sort((a,b)=>sc(b)-sc(a));
 const card=(x,j)=>`<a class="card cm" href="#/c/${esc(x.slug)}"><div class="row" style="flex-wrap:nowrap"><b style="flex:1">${x.featured?ic('star',16)+' ':''}${esc(x.name)}</b><span class="mu">${n[x.id]||0} members</span></div><div>${esc(x.description)}</div>${j?'<span class="why">'+ic('check',13)+' Joined</span>':`<span class="why">${ic('people',13)} ${esc(why(x))}</span>`}</a>`;
 A.innerHTML=`<div class="row" style="justify-content:space-between;flex-wrap:nowrap">${H('people','Communities')}<button class="btn" data-act="newc">${ic('plus',18)} New</button></div>${mine.length?`<h4 class="sg2">Your communities</h4>`+mine.map(x=>card(x,1)).join(''):''}${rest.length?`<h4 class="sg2">${ic('flame',16)} Picked for you</h4>`+rest.map(x=>card(x,0)).join(''):''}${all.length?'':'<p class="empty">No communities yet — create the first!</p>'}`}

/* ---------- suggested users ---------- */
let SUGD=[];try{SUGD=JSON.parse(localStorage.rtsd||'[]')}catch{}let sugCache=null;
const touched=p=>S.bm.has(p.id)||S.st[p.id]||S.mv[p.id];
async function sugUsers(ps){if(!sugCache||Date.now()-sugCache.t>3e5){
  const fol=[...S.fol].slice(0,100),fo=fol.length?await sb.from('follows').select('follower,following').in('follower',fol).limit(1500):{data:[]},fof={};
  (fo.data||[]).forEach(x=>{if(x.following!==me.id&&!S.fol.has(x.following))fof[x.following]=(fof[x.following]||0)+1});
  const liked=new Set(),C={};Object.values(S.posts).forEach(p=>{if(S.st[p.id]||S.mv[p.id]==1||S.bm.has(p.id))(p.tags||[]).forEach(t=>liked.add(t))});
  Object.values(S.posts).forEach(p=>{const u=p.user_id;if(u===me.id||S.fol.has(u))return;const c=C[u]=C[u]||{id:u,s:0,tags:[],prof:p.author,cm:0};(p.tags||[]).forEach(t=>{const w=(AF.t[t]||0)*.5+(liked.has(t)?1:0);if(w>0){c.s+=w;c.tags.push(t)}});if(S.joined.has(p.community_id))c.cm=1;c.s+=Math.log(1+Math.max(0,p.ups-p.downs))*.3});
  Object.keys(fof).sort((a,b)=>fof[b]-fof[a]).slice(0,12).forEach(u=>{C[u]=C[u]||{id:u,s:0,tags:[],prof:null,cm:0}});
  Object.values(C).forEach(c=>{c.f=fof[c.id]||0;c.s+=3*c.f+1.5*c.cm});
  let top=Object.values(C).filter(c=>c.s>0).sort((a,b)=>b.s-a.s).slice(0,10);
  const miss=top.filter(c=>!c.prof).map(c=>c.id);if(miss.length){const {data}=await sb.from('profiles').select('id,username,display_name,scene,accent').in('id',miss);const pm={};(data||[]).forEach(x=>pm[x.id]=x);top.forEach(c=>{if(!c.prof)c.prof=pm[c.id]})}
  sugCache={t:Date.now(),d:top.filter(c=>c.prof).map(c=>({id:c.id,prof:c.prof,why:c.f?`Followed by ${c.f} ${c.f==1?'person':'people'} you follow`:c.tags.length?`Posts about #${c.tags[0]}`:c.cm?'Active in your communities':'Popular lately'}))}}
 return sugHTML()}
function sugHTML(){const L=(sugCache?sugCache.d:[]).filter(x=>!S.fol.has(x.id)&&!SUGD.includes(x.id)).slice(0,8);if(!L.length)return'';
 return `<div class="sug"><div class="sugh">${ic('follow',20)}<b>People you may like</b></div><div class="sugr">${L.map(x=>`<div class="sgc"><button type="button" class="sgx" data-act="sgx" data-id="${x.id}" aria-label="Dismiss">${ic('x',14)}</button><a href="#/u/${esc(x.prof.username)}" class="sga">${av(x.prof,'lg')}<b>${esc(x.prof.display_name||x.prof.username)}</b></a><span class="mu">@${esc(x.prof.username)}</span><small>${esc(x.why)}</small><button type="button" class="btn" data-act="sfol" data-id="${x.id}">${ic('follow',16)} Follow</button></div>`).join('')}</div></div>`}
Object.assign(acts,{sgx(d,el){SUGD.push(d.id);SUGD=SUGD.slice(-100);try{localStorage.rtsd=JSON.stringify(SUGD)}catch{}el.closest('.sgc').remove()},
 async sfol(d,el){el.disabled=true;const {error}=await sb.from('follows').insert({follower:me.id,following:d.id});if(error){el.disabled=false;return toast(error.message)}S.fol.add(d.id);el.innerHTML=ic('check',16)+' Following';setTimeout(()=>{const c=el.closest('.sgc');c&&c.remove()},700)}});
function feedCards(ps){if(!ps.length)return cards(ps);const h=S.tab=='fol'?'':'<div id="sug"></div>';return ps.slice(0,4).map(postCard).join('')+h+ps.slice(4).map(postCard).join('')}

async function commPg(slug){const {data:c}=await sb.from('communities').select('*').eq('slug',slug).single();if(!c)return A.innerHTML='<p class="empty">Not found</p>';const ps=rank(await loadPosts(q=>q.eq('community_id',c.id))),j=S.joined.has(c.id);
 A.innerHTML=`<div class="card col"><h2 style="margin:0">${c.featured?ic('star',20)+' ':''}${esc(c.name)}</h2><div>${esc(c.description)}</div><div class="row wrap"><button class="btn ${j?'ghost':''}" data-act="join" data-id="${c.id}">${ic('people',18)} ${j?'Leave':'Join'}</button><button class="chip" data-act="postin" data-id="${c.id}">${ic('pen',16)} Post here</button>${isAdm()?`<button class="chip" data-act="feat" data-id="${c.id}" data-f="${c.featured}">${ic('star',16)} ${c.featured?'Unfeature':'Feature'}</button>`:''}${isAdm()||c.owner===me.id?`<button class="chip" data-act="delc2" data-id="${c.id}">${ic('trash',16)} Delete</button>`:''}</div></div>${cards(ps)}`}
async function admin(){if(!isAdm())return A.innerHTML='<p class="empty">Admins only</p>';
 const {data}=await sb.from('reports').select('*,post:posts(id,body,user_id),comment:comments(id,body,user_id),rep:profiles!reports_reporter_fkey(username)').eq('status','open').order('created_at',{ascending:false}).limit(50);
 A.innerHTML=H('shield','Open reports')+((data||[]).map(r=>{const t=r.post?'Post: '+r.post.body:r.comment?'Comment: '+r.comment.body:'User report',uid=r.post?.user_id||r.comment?.user_id||r.target_user;return `<div class="card col"><div><b>${esc(r.reason)}</b> <span class="mu">by @${esc(r.rep?.username)} · ${ago(r.created_at)}</span></div><div>${esc((t||'').slice(0,200))}</div><div class="row wrap">${r.post?`<button class="chip" data-act="adm" data-op="hidep" data-id="${r.post.id}" data-rid="${r.id}">${ic('eye',16)} Hide post</button>`:''}${r.comment?`<button class="chip" data-act="adm" data-op="hidec" data-id="${r.comment.id}" data-rid="${r.id}">${ic('eye',16)} Hide comment</button>`:''}${uid?`<button class="chip" data-act="adm" data-op="ban" data-id="${uid}" data-rid="${r.id}">${ic('lock',16)} Ban user</button>`:''}<button class="chip" data-act="adm" data-op="dismiss" data-id="0" data-rid="${r.id}">${ic('check',16)} Dismiss</button></div></div>`}).join('')||'<p class="empty">No open reports.</p>')}
async function settings(){const {data}=await sb.auth.mfa.listFactors();const f=data?.totp?.[0];
 const row=(i,t,sub,attr,cls='',tag='button')=>`<${tag} class="srow ${cls}" ${attr}>${ic(i,26)}<span><b>${t}</b><small>${sub}</small></span>${ic('caret',18,'chev')}</${tag}>`;
 A.innerHTML=`<div class="card sacct">${av(mp,'lg')}<div><b>${esc(mp.display_name||mp.username)}</b><div class="mu">@${esc(mp.username)}</div><div class="mu">${esc(me.email)} · ${ic('check',14)} verified</div></div></div>
 <h4 class="sg">Profile</h4>${row('face','My profile & character','Edit your look, bio and badge','href="#/u"','','a')}${row('bookmark','Saved & drafts','Posts you bookmarked and unfinished drafts','href="#/saved"','','a')}${row('star','My stars & super stars','Private list of what you starred','href="#/stars"','','a')}
 <h4 class="sg">Appearance</h4>${row('theme','Dark / light mode','Switch the app theme','data-act="theme"')}
 <h4 class="sg">Security</h4>${f?row('lock','Two-factor is ON','Tap to turn it off',`data-act="mfaoff" data-id="${f.id}"`):row('lock','Set up two-factor','Protect your account with an authenticator app','data-act="mfaon"')}${row('lock','Change password','Pick a new password','data-act="pw"')}
 ${isAdm()?`<h4 class="sg">Admin</h4>${row('shield','Reports','Review flagged posts, comments and users','href="#/admin"','','a')}`:''}
 <h4 class="sg"></h4>${row('out','Log out','Sign out on this device','data-act="out"','danger')}`}

/* ---------- ACTIONS ---------- */
const adj=(p,v,d)=>v==1?p.ups+=d:p.downs+=d,redraw=id=>{const el=document.querySelector(`[data-card="${id}"]`);if(el)el.outerHTML=postCard(S.posts[id]);reRaw&&reRaw(id)};
const acts={
 menu(d,btn){if(popEl&&popEl._b===btn)return closePop();const items=[{t:'Reals',ic:'reals',h:'#/reals'},{t:'My profile',ic:'user',h:'#/u'},{t:'Saved & drafts',ic:'bookmark',h:'#/saved'},{t:'Settings',ic:'gear',h:'#/set'},{t:'Switch theme',ic:'theme',f:'theme'},...(isAdm()?[{t:'Admin reports',ic:'shield',h:'#/admin'}]:[]),{t:'Log out',ic:'out',f:'out'}];popup(btn,items,it=>it.h?location.hash=it.h:acts[it.f]({}),'menu');popEl._b=btn},
 async copykey(d){try{await navigator.clipboard.writeText(d.k);toast('Key copied')}catch{prompt('Copy key:',d.k)}},
 tab(d){S.tab=d.t;R()},reload(){R()},theme(){setTheme(document.documentElement.dataset.theme=='dark'?'light':'dark')},
 reveal(d,el){S.rev.add(d.id);el.closest('.cwb').classList.add('open')},
 mood(d){const a=S.c.moods,k=d.k;S.c.moods=a.includes(k)?a.filter(x=>x!=k):[...a,k];drawC()},cwt(){S.c.cw=!S.c.cw;drawC()},cln(){S.c.ln=!S.c.ln;drawC()},
 async share(d){const u=location.origin+location.pathname+'#/p/'+d.id;try{await navigator.clipboard.writeText(u);toast('Link copied')}catch{prompt('Copy link:',u)}},
 votemenu(d){const p=S.posts[d.id],v=S.mv[d.id]||0;const el=sheet(`<h3>${ic('vote',22)} React to this post</h3><button type="button" class="vopt ${v==1?'sel':''}" data-v="1">${ic('up',30)}<span><b>Hype</b><small>${p.ups} hyped${v==1?' · tap to undo':''}</small></span></button><button type="button" class="vopt dn ${v==-1?'sel':''}" data-v="-1">${ic('down',30)}<span><b>Disparage</b><small>${p.downs} disparaged${v==-1?' · tap to undo':''}</small></span></button>`);
  el.addEventListener('click',e=>{const b=e.target.closest('.vopt');if(!b)return;closeSheet();acts.vote({id:d.id,v:b.dataset.v})})},
 editpost(d){editModal(d.id)},
 async out(){await sb.auth.signOut();location.hash='';location.reload()},
 async pw(){const p=prompt('New password (min 8 characters):');if(!p)return;const {error}=await sb.auth.updateUser({password:p});toast(error?error.message:'Password changed')},
 async vote(d){const id=d.id,v=+d.v,cur=S.mv[id]||0,p=S.posts[id];if(cur===v){await sb.from('votes').delete().match({post_id:id,user_id:me.id});S.mv[id]=0;adj(p,v,-1)}else{const {error}=await sb.from('votes').upsert({post_id:id,user_id:me.id,v});if(error)return toast(error.message);if(cur)adj(p,cur,-1);adj(p,v,1);S.mv[id]=v;snack(v==1?'You hyped this':'You disparaged this',v==1?'up':'down',()=>acts.vote(d))}redraw(id)},
 async pvote(d){const id=d.id;if(S.pv[id]?.me!=null)return;const {error}=await sb.from('poll_votes').insert({post_id:id,user_id:me.id,opt:+d.i});if(error)return toast(error.message);const o=S.pv[id]=S.pv[id]||{c:[],me:null};o.c[+d.i]=(o.c[+d.i]||0)+1;o.me=+d.i;redraw(id)},
 async bm(d){const id=d.id;if(S.bm.has(id)){await sb.from('bookmarks').delete().match({post_id:id,user_id:me.id});S.bm.delete(id)}else{await sb.from('bookmarks').insert({post_id:id,user_id:me.id});S.bm.add(id)}redraw(id)},
 async del(d){if(!confirm('Delete this post?'))return;await sb.from('posts').delete().eq('id',d.id);document.querySelector(`[data-card="${d.id}"]`)?.remove()},
 async follow(d){if(S.fol.has(d.id)){await sb.from('follows').delete().match({follower:me.id,following:d.id});S.fol.delete(d.id)}else{await sb.from('follows').insert({follower:me.id,following:d.id});S.fol.add(d.id)}R()},
 async ulist(d){const k=d.k,me_=k=='followers'?'following':'follower',other=k=='followers'?'follower':'following';const {data}=await sb.from('follows').select(`u:profiles!follows_${other}_fkey(username,display_name,scene)`).eq(me_,d.id);sheet(`<h3>${ic('people',22)} ${k}</h3>`+((data||[]).map(x=>`<a class="row" href="#/u/${esc(x.u.username)}">${av(x.u)}<b>${esc(x.u.display_name||x.u.username)}</b>${badge(x.u)}</a>`).join('')||'<p class="mu">Nobody yet.</p>'))},
 rep(d){sheet(`<h3>${ic('flag',22)} Report</h3><select id="rr"><option>Spam</option><option>Harassment</option><option>Hate</option><option>Violence or self-harm</option><option>Sexual content</option><option>Other</option></select><textarea id="rt" placeholder="Details (optional)"></textarea><button class="btn" id="rs">Submit report</button>`);
  $('#rs').onclick=async()=>{const r={reason:$('#rr').value+($('#rt').value?': '+$('#rt').value:'')};r[d.k=='post'?'post_id':d.k=='comment'?'comment_id':'target_user']=d.id;const {error}=await sb.from('reports').insert(r);closeSheet();toast(error?error.message:'Report sent. Thank you.')}},
 async cm(d){const id=d.id;sheet(`<h3>${ic('chat',22)} Comments</h3><div id="cl" class="col"></div><div class="row cin"><input id="ci" placeholder="Add a comment…" maxlength="500"><button class="btn" id="cs2">${ic('send',18)}</button></div>`);
  const load=async()=>{const {data}=await sb.from('comments').select('*,author:profiles!user_id(username,display_name,scene)').eq('post_id',id).eq('hidden',false).order('created_at');$('#cl').innerHTML=(data||[]).map(c=>`<div class="cmt">${av(c.author)}<div><b><a href="#/u/${esc(c.author.username)}">${esc(c.author.display_name||c.author.username)}</a></b>${badge(c.author)} <span class="mu">${ago(c.created_at)}</span><div>${fmt(c.body)}</div><button class="lnk" data-act="rep" data-k="comment" data-id="${c.id}">${ic('flag',14)} report</button>${c.user_id===me.id||isAdm()?`<button class="lnk" data-act="delcm" data-id="${c.id}">${ic('trash',14)} delete</button>`:''}</div></div>`).join('')||'<p class="mu">No comments yet. Be first.</p>'};await load();
  $('#cs2').onclick=async()=>{const b=$('#ci').value.trim();if(!b)return;const {error}=await sb.from('comments').insert({post_id:id,user_id:me.id,body:b});if(error)return toast(error.message);$('#ci').value='';S.posts[id].comments_count++;redraw(id);load()}},
 async delcm(d,el){await sb.from('comments').delete().eq('id',d.id);el.closest('.cmt').remove()},
 async join(d){if(S.joined.has(d.id)){await sb.from('community_members').delete().match({community_id:d.id,user_id:me.id});S.joined.delete(d.id)}else{await sb.from('community_members').insert({community_id:d.id,user_id:me.id});S.joined.add(d.id)}R()},
 newc(){sheet(`<h3>${ic('people',22)} New community</h3><input id="nn" placeholder="Name" maxlength="40"><textarea id="nd" placeholder="What is it about?" maxlength="200"></textarea><button class="btn" id="ns">Create</button>`);$('#ns').onclick=async()=>{const name=$('#nn').value.trim(),slug=name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');if(!slug)return toast('Name required');const {data,error}=await sb.from('communities').insert({name,slug,description:$('#nd').value,owner:me.id}).select().single();if(error)return toast(error.message);await sb.from('community_members').insert({community_id:data.id,user_id:me.id});S.joined.add(data.id);closeSheet();location.hash='#/c/'+slug}},
 postin(d){S.c.comm=d.id;location.hash='#/new'},
 async feat(d){await sb.from('communities').update({featured:d.f!='true'}).eq('id',d.id);R()},
 async delc2(d){if(!confirm('Delete community?'))return;await sb.from('communities').delete().eq('id',d.id);location.hash='#/c'},
 editp(){const p=(mp.scene&&mp.scene.p)||{};let sc=mp.scene;
  sheet(`<h3>${ic('pen',22)} Edit profile</h3><input id="ed" value="${esc(mp.display_name)}" placeholder="Display name" maxlength="40"><label class="ctl">Sex<select id="esx"><option value="">Unspecified</option><option value="male" ${p.sx=='male'?'selected':''}>Male</option><option value="female" ${p.sx=='female'?'selected':''}>Female</option></select></label><input id="est" value="${esc(p.st)}" placeholder="Status — what are you up to?" maxlength="60"><h4 class="sg">Current mood</h4><div class="chips" id="emo">${Object.entries(MOODS).map(([k,m])=>`<button type="button" class="chip ${p.mood==k?'sel':''}" data-k="${k}">${ic(m[1],18)} ${m[0]}</button>`).join('')}</div><h4 class="sg">About</h4><input id="el" value="${esc(p.loc)}" placeholder="Location" maxlength="40"><input id="ek" type="url" value="${esc(p.ln)}" placeholder="Website https://…" maxlength="200"><textarea id="eb" maxlength="200" placeholder="Bio">${esc(mp.bio)}</textarea>
  <h4 class="sg">Colors</h4><div class="cb2"><div class="cbh"><span>Accent</span><input type="color" id="ea" value="${hexOk(mp.accent)?mp.accent:'#ff8a1f'}"></div></div><div class="cb2"><div class="cbh"><span>Second color</span><input type="color" id="ea2" value="${hexOk(p.ac2)?p.ac2:'#2fd07a'}"></div></div>
  <h4 class="sg">Badge</h4><div class="chips bds" id="ebd">${Object.entries(BADGES).map(([k,t])=>`<button type="button" class="chip ${p.bd==k?'sel':''}" data-k="${k}" title="${t}">${ic(k,20)}</button>`).join('')}<button type="button" class="chip ${!p.bd?'sel':''}" data-k="">None</button></div>
  <button type="button" class="chip" id="es" style="width:100%">${ic('face',18)} Edit my character</button><div class="esv"><button class="btn" id="eo">Save</button></div>`);
  let mood=p.mood||'',bd=p.bd||'';const pick=(id,fn)=>$(id).onclick=e=>{const b=e.target.closest('.chip');if(!b)return;$(id).querySelectorAll('.chip').forEach(x=>x.classList.toggle('sel',x==b));fn(b.dataset.k)};
  pick('#emo',k=>mood=mood==k?'':k);pick('#ebd',k=>bd=k);
  const pack=()=>({...(sc||{}),p:{sx:$('#esx').value,st:$('#est').value,mood,loc:$('#el').value,ln:$('#ek').value,ac2:$('#ea2').value,bd}});
  $('#es').onclick=()=>{const keep=pack();editScene(keep,async s=>{await upd({scene:s})})};
  $('#eo').onclick=async()=>{await upd({display_name:$('#ed').value,bio:$('#eb').value,accent:$('#ea').value,scene:pack()});closeSheet()}},
 cscene(){S.c.body=$('#cb').value;editScene(S.c.scene||noP(mp.scene),s=>{S.c.scene=noP(s);R()})},rmscene(){S.c.scene=null;drawC()},cpoll(){S.c.poll=!S.c.poll;drawC()},
 async draft(){const b=$('#cb').value.trim();if(!b)return;const {error}=await sb.from('drafts').insert({user_id:me.id,body:b});if(error)return toast(error.message);S.c.body='';$('#cb').value='';toast('Draft saved')},
 usedraft(d){const x=S.drafts.find(y=>y.id==d.id);S.c.body=x.body;sb.from('drafts').delete().eq('id',d.id).then(()=>location.hash='#/new')},
 async deldraft(d,el){await sb.from('drafts').delete().eq('id',d.id);el.closest('.card').remove()},
 async post(d,btn){const body=$('#cb').value.trim(),c=S.c,opts=[...document.querySelectorAll('.po')].map(i=>i.value.trim()).filter(Boolean);
  if(!body&&!c.scene)return toast('Nothing to post');if(c.poll&&opts.length<2)return toast('Poll needs 2+ options');
  const meta={};if(c.moods.length){meta.moods=c.moods;meta.mood=c.moods[0]}if(c.cw&&c.cwt.trim())meta.cw=c.cwt.trim().slice(0,60);if(c.ln&&c.lk.trim()){if(!/^https?:\/\//i.test(c.lk.trim()))return toast('Link must start with https://');meta.link=c.lk.trim()}
  btn.disabled=true;const {error}=await sb.from('posts').insert({user_id:me.id,body,images:[],scene:c.scene,poll:c.poll?{opts}:null,tags:tagsOf(body),community_id:$('#cc').value||null,meta});btn.disabled=false;if(error)return toast(error.message);
  S.c={scene:null,poll:false,moods:[],cw:false,cwt:'',ln:false,lk:''};toast('Posted!');location.hash='#/'},
 async adm(d,el){const {op,id,rid}=d;if(op=='hidep')await sb.from('posts').update({hidden:true}).eq('id',id);if(op=='hidec')await sb.from('comments').update({hidden:true}).eq('id',id);if(op=='ban')await sb.rpc('admin_ban',{uid:id,b:true});await sb.from('reports').update({status:'closed'}).eq('id',rid);el.closest('.card').remove();toast('Done')},
 async mfaon(){const {data,error}=await sb.auth.mfa.enroll({factorType:'totp'});if(error)return toast(error.message);const qr='data:image/svg+xml,'+encodeURIComponent(String(data.totp.qr_code).replace(/^data:image\/svg\+xml;utf-8,/,''));sheet(`<h3>${ic('lock',22)} Set up two-factor</h3><p class="mu">Scan this code with Google Authenticator, Authy or 1Password.</p><div class="qr"><img src="${qr}" alt="2FA QR code"></div><div class="keybox"><small>Can't scan? Enter this key manually</small><code>${esc(data.totp.secret)}</code><button type="button" class="chip" data-act="copykey" data-k="${esc(data.totp.secret)}">${ic('link',16)} Copy key</button></div><input id="mc" class="code" inputmode="numeric" maxlength="6" placeholder="000000" autocomplete="one-time-code"><button class="btn" id="mv">${ic('check',18)} Verify & enable</button>`);
  $('#mv').onclick=async()=>{const {error}=await sb.auth.mfa.challengeAndVerify({factorId:data.id,code:$('#mc').value});if(error)return toast(error.message);closeSheet();toast('2FA enabled');R()}},
 async mfaoff(d){const {error}=await sb.auth.mfa.unenroll({factorId:d.id});toast(error?error.message:'2FA disabled');R()}};

/* ---------- stars, seen-tracking, search, edit modal ---------- */
let SEEN={};try{SEEN=JSON.parse(localStorage.rtseen||'{}')}catch{}const LV=+(localStorage.rtlv||0);let seenT=0;
const saveSeen=()=>{clearTimeout(seenT);seenT=setTimeout(()=>{const k=Object.keys(SEEN);if(k.length>800)k.sort((a,b)=>SEEN[b][0]-SEEN[a][0]).slice(600).forEach(x=>delete SEEN[x]);try{localStorage.rtseen=JSON.stringify(SEEN)}catch{}},3000)};
const dwell=new Map(),done=new Set();
const io=new IntersectionObserver(es=>es.forEach(e=>{const id=e.target.dataset.card;if(e.isIntersecting){if(!done.has(id)&&!dwell.has(id))dwell.set(id,setTimeout(()=>{dwell.delete(id);done.add(id);const o=SEEN[id];SEEN[id]=[Date.now(),(o?o[1]:0)+1];saveSeen()},1200))}else if(dwell.has(id)){clearTimeout(dwell.get(id));dwell.delete(id)}}),{threshold:.6});
const observe=()=>{io.disconnect();document.querySelectorAll('[data-card]').forEach(c=>io.observe(c))};
addEventListener('pagehide',()=>localStorage.rtlv=Date.now());document.addEventListener('visibilitychange',()=>document.hidden&&(localStorage.rtlv=Date.now()));
async function loadMine(){const d=new Date(),ms=new Date(Date.UTC(d.getUTCFullYear(),d.getUTCMonth(),1)).toISOString();
 const [q,s,v]=await Promise.all([sb.from('stars').select('*',{count:'exact',head:true}).eq('user_id',me.id).eq('lvl',2).gte('super_at',ms),sb.from('stars').select('post_id,lvl,post:posts(user_id)').eq('user_id',me.id).order('created_at',{ascending:false}).limit(150),sb.from('votes').select('post_id,post:posts(user_id)').eq('user_id',me.id).eq('v',1).limit(150)]);
 S.sq=q.count||0;S.aff={};(s.data||[]).forEach(x=>{S.st[x.post_id]=x.lvl;const u=x.post&&x.post.user_id;if(u)S.aff[u]=(S.aff[u]||0)+x.lvl});(v.data||[]).forEach(x=>{const u=x.post&&x.post.user_id;if(u)S.aff[u]=(S.aff[u]||0)+1})}
let snT;function snack(msg,icn,undo){document.querySelector('.snack')?.remove();clearTimeout(snT);const el=document.createElement('div');el.className='snack';el.innerHTML=`${ic(icn||'check',22)}<span>${esc(msg)}</span>${undo?'<button type="button">Undo</button>':''}`;if(undo)el.querySelector('button').onclick=()=>{el.remove();undo()};document.body.append(el);requestAnimationFrame(()=>el.classList.add('on'));snT=setTimeout(()=>{el.classList.remove('on');setTimeout(()=>el.remove(),300)},3200)}
async function setStar(id,lvl){const cur=S.st[id]||0;let error;
 if(!lvl)({error}=await sb.from('stars').delete().match({post_id:id,user_id:me.id}));else({error}=await sb.from('stars').upsert({post_id:id,user_id:me.id,lvl,super_at:lvl==2?new Date().toISOString():null}));
 if(error){toast(error.message);return false}
 if(cur==2&&lvl!=2)S.sq=Math.max(0,S.sq-1);if(cur!=2&&lvl==2)S.sq++;lvl?S.st[id]=lvl:delete S.st[id];return true}
async function starTap(id){const was=S.st[id]||0;if(await setStar(id,was?0:1)){redraw(id);snack(was?'Star removed':'Starred (hold for a super star)',was?'starO':'star')}}
async function starHold(id,done){const cur=S.st[id]||0;
 if(cur==2){if(await setStar(id,1)){redraw(id);snack('Downplayed to a star','star');done&&done()}return}
 if(S.sq<3){if(await setStar(id,2)){redraw(id);snack(`Super star! ${3-S.sq} left this month`,'sstar');done&&done()}return}
 const d=new Date(),ms=new Date(Date.UTC(d.getUTCFullYear(),d.getUTCMonth(),1)).toISOString();
 const {data}=await sb.from('stars').select('post_id,post:posts(body,scene)').eq('user_id',me.id).eq('lvl',2).gte('super_at',ms);
 const el=sheet(`<h3>${ic('sstar',22)} Super stars used up</h3><p class="mu">You've used all 3 this month. Downplay one to a regular star to make room, or keep this as a normal star.</p>`+(data||[]).map(x=>`<button type="button" class="chip swr" data-sw="${x.post_id}">${ic('sstar',18)} <span>${esc((x.post&&x.post.body||'(character post)').slice(0,70))}</span> → star</button>`).join('')+`<button type="button" class="btn ghost" id="swn">${ic('star',18)} Just star this one</button>`);
 el.addEventListener('click',async e=>{const b=e.target.closest('[data-sw]');if(b){if(await setStar(b.dataset.sw,1)&&await setStar(id,2)){closeSheet();redraw(id);snack('Swapped — new super star!','sstar');done&&done()}}if(e.target.closest('#swn')){if(!S.st[id]&&await setStar(id,1)){redraw(id)}closeSheet();done&&done()}})}
document.addEventListener('pointerdown',e=>{const b=e.target.closest('[data-star]');if(!b||e.button>0)return;const id=b.dataset.star;b.classList.add('hold');hold={id,f:0,t:setTimeout(()=>{hold.f=1;b.classList.remove('hold');navigator.vibrate&&navigator.vibrate(25);starHold(id)},450)}});
let hold=null;const endHold=e=>{if(!hold)return;clearTimeout(hold.t);document.querySelectorAll('.starb.hold').forEach(x=>x.classList.remove('hold'));const h=hold;hold=null;if(e.type=='pointerup'&&!h.f){const b=e.target.closest('[data-star]');if(b&&b.dataset.star==h.id)starTap(h.id)}};
addEventListener('pointerup',endHold);addEventListener('pointercancel',endHold);
document.addEventListener('contextmenu',e=>{if(e.target.closest('[data-star]'))e.preventDefault()});
document.addEventListener('click',e=>{const b=e.target.closest('[data-star]');if(b&&e.detail===0)starTap(b.dataset.star)});
async function starsPg(){const {data}=await sb.from('stars').select('post_id,lvl,super_at,created_at,post:posts(id,body,scene,created_at,author:profiles!user_id(username,display_name))').eq('user_id',me.id).order('created_at',{ascending:false}).limit(500);
 const L=(data||[]).filter(x=>x.post);let f='all';
 const pips=[0,1,2].map(i=>`<span class="pip ${i<S.sq?'used':''}">${ic('sstar',26)}</span>`).join('');
 A.innerHTML=H('star','My stars')+`<div class="qp"><div class="pips">${pips}</div><span>${3-S.sq} of 3 super stars left this month<br><small>${ic('lock',12)} Only you can see this</small></span></div>${sbar('sq','Search your stars…')}<div class="seg" id="sfl">${[['all','All',L.length],['1','Stars',L.filter(x=>x.lvl==1).length],['2','Super',L.filter(x=>x.lvl==2).length]].map(([k,t,n],i)=>`<button type="button" class="${i?'':'sel'}" data-k="${k}">${t}<small>${n}</small></button>`).join('')}</div><div id="sl" class="stl"></div>`;
 const draw=()=>{const q=$('#sq').value.toLowerCase().trim();const r=L.filter(x=>(f=='all'||x.lvl==f)&&(!q||(x.post.body||'').toLowerCase().includes(q)||((x.post.author||{}).username||'').toLowerCase().includes(q)||((x.post.author||{}).display_name||'').toLowerCase().includes(q)));
  $('#sl').innerHTML=r.map(x=>{const a=x.post.author||{};return `<div class="stc"><div class="sth">${ic(x.lvl==2?'sstar':'star',22)}<b>${esc(a.display_name||a.username)}</b><span class="mu">@${esc(a.username)} · ${ago(x.post.created_at)}</span></div><a class="stb" href="#/p/${x.post_id}">${esc((x.post.body||'(character post)').slice(0,240))}</a><div class="sta">${x.lvl==2?`<button class="chip" data-act="smdn" data-id="${x.post_id}">${ic('star',16)} Downplay to star</button>`:`<button class="chip" data-act="smup" data-id="${x.post_id}">${ic('sstar',16)} Make super</button>`}<button class="chip" data-act="smrm" data-id="${x.post_id}">${ic('trash',16)} Remove</button></div></div>`}).join('')||`<p class="empty">${ic('star',28)}<br>${L.length?'No matches.':'Nothing starred yet.'}</p>`};
 $('#sq').oninput=draw;$('#sfl').onclick=e=>{const b=e.target.closest('button');if(!b)return;f=b.dataset.k;$('#sfl').querySelectorAll('button').forEach(x=>x.classList.toggle('sel',x==b));draw()};draw()}
Object.assign(acts,{async smrm(d){if(await setStar(d.id,0))starsPg()},async smdn(d){if(await setStar(d.id,1))starsPg()},smup(d){starHold(d.id,starsPg)},
 srch(d,b){openSearch(b)}});
function initSearch(){if(initSearch.k)return;initSearch.k=1;addEventListener('keydown',e=>{if(e.key=='/'&&!e.ctrlKey&&!e.metaKey&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)&&!document.querySelector('.smd')){e.preventDefault();openSearch()}})}
const normQ=s=>String(s||'').normalize('NFKC').replace(/[\u0000-\u001f\u007f\u200b-\u200f\u202a-\u202e\u2060\ufeff]/g,'').replace(/[^\p{L}\p{N}\s#_'-]/gu,'').replace(/\s+/g,' ').trim().replace(/#{2,}/g,'#').slice(0,40);
const qOk=q=>q.length>=2&&/[\p{L}\p{N}]/u.test(q);
let REC=[];try{REC=JSON.parse(localStorage.rtrs||'[]').filter(x=>typeof x=='string').slice(0,8)}catch{}
const saveRec=()=>{try{localStorage.rtrs=JSON.stringify(REC)}catch{}};
const logged=new Set();
function goSearch(v){const q=normQ(v);if(!qOk(q))return toast('Use 2–40 letters, numbers, # _ - or \'');
 REC=[q,...REC.filter(x=>x.toLowerCase()!=q.toLowerCase())].slice(0,8);saveRec();
 const k=q.toLowerCase();if(!logged.has(k)){logged.add(k);sb.rpc('log_search',{q}).then(()=>{},()=>{})}
 closeSheet(true);const h='#/s/'+encodeURIComponent(q);location.hash==h?R():location.hash=h}
const sugC=new Map();let trendC=null;
async function sugFor(p){p=p.toLowerCase();if(sugC.has(p))return sugC.get(p);const {data}=await sb.from('search_terms').select('term,hits').like('term',p.replace(/[\\%_]/g,'\\$&')+'%').gte('hits',2).order('hits',{ascending:false}).limit(6);const r=data||[];sugC.size>100&&sugC.clear();sugC.set(p,r);return r}
async function trendFor(){if(trendC&&Date.now()-trendC.t<3e5)return trendC.d;const since=new Date(Date.now()-30*864e5).toISOString();const {data}=await sb.from('search_terms').select('term,hits').gte('hits',3).gte('updated_at',since).order('hits',{ascending:false}).limit(8);trendC={t:Date.now(),d:data||[]};return trendC.d}
function openSearch(btn){closePop();closeSheet(true);const el=document.createElement('div');el.className='bd smd';const r0=btn&&btn.getBoundingClientRect?btn.getBoundingClientRect():null;el.style.setProperty('--sx',(r0?r0.left+r0.width/2:innerWidth-56)+'px');el.style.setProperty('--sy',(r0?r0.top+r0.height/2:28)+'px');
 el.innerHTML=`<div class="smp"><form class="smf" autocomplete="off">${ic('search',22)}<input id="smi" maxlength="40" inputmode="search" enterkeyhint="search" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Search posts, people, #tags…" aria-label="Search"><button type="button" class="smx" id="smc" aria-label="Clear" hidden>${ic('x',16)}</button><button type="button" class="smk" id="smk">Cancel</button></form><div class="sml" id="sml" role="listbox"></div><div class="smh">Letters, numbers, # _ - ' · 2–40 characters</div></div>`;
 document.body.append(el);const inp=el.querySelector('#smi'),L=el.querySelector('#sml');requestAnimationFrame(()=>el.classList.add('on'));inp.focus();
 let items=[],idx=-1,tm=0,seq=0;
 const hl=(t,q)=>t.toLowerCase().startsWith(q.toLowerCase())?`<b>${esc(t.slice(0,q.length))}</b>${esc(t.slice(q.length))}`:esc(t);
 const row=(it,i,q)=>`<button type="button" class="smr ${i==idx?'hl':''}" role="option" data-i="${i}">${ic(it.k=='r'?'clock':it.k=='t'?'flame':'search',20)}<span>${it.k=='g'?`Search for <b>${esc(it.term)}</b>`:hl(it.term,q)}</span>${it.k=='r'?`<i class="smd2" data-rm="${i}" aria-label="Remove">${ic('x',14)}</i>`:''}</button>`;
 const draw=(q,pop)=>{const lq=q.toLowerCase();items=[];
  if(!qOk(q)){REC.forEach(t=>items.push({k:'r',term:t}));(pop||[]).filter(x=>!REC.some(r=>r.toLowerCase()==x.term)).forEach(x=>items.push({k:'t',term:x.term}));
   L.innerHTML=(REC.length?`<div class="smg">Recent <button type="button" class="smcl" id="smca">Clear</button></div>`:'')+items.filter(x=>x.k=='r').map((x,i)=>row(x,i,q)).join('')+((pop||[]).length?`<div class="smg">Popular right now</div>`:'')+items.map((x,i)=>x.k=='t'?row(x,i,q):'').join('')||`<p class="mu smemp">Start typing to search.</p>`;return}
  items.push({k:'g',term:q});REC.filter(t=>t.toLowerCase().startsWith(lq)&&t.toLowerCase()!=lq).slice(0,3).forEach(t=>items.push({k:'r',term:t}));
  (pop||[]).forEach(x=>{if(x.term!=lq&&!items.some(i=>i.term.toLowerCase()==x.term))items.push({k:'p',term:x.term})});
  L.innerHTML=items.map((x,i)=>row(x,i,q)).join('')};
 const refresh=async()=>{const q=normQ(inp.value),my=++seq;el.classList.toggle('busy',qOk(q));el.querySelector('#smc').hidden=!inp.value;idx=-1;draw(q,null);clearTimeout(tm);
  tm=setTimeout(async()=>{try{const pop=qOk(q)?await sugFor(q):await trendFor();if(my===seq){draw(q,pop);el.classList.remove('busy')}}catch{el.classList.remove('busy')}},qOk(q)?180:0)};
 inp.addEventListener('input',()=>{const c=inp.value.replace(/[^\p{L}\p{N}\s#_'-]/gu,'');if(c!==inp.value)inp.value=c;refresh()});
 inp.addEventListener('keydown',e=>{if(e.key=='Escape')closeSheet();else if(e.key=='ArrowDown'||e.key=='ArrowUp'){e.preventDefault();if(!items.length)return;idx=(idx+(e.key=='ArrowDown'?1:-1)+items.length)%items.length;L.querySelectorAll('.smr').forEach((b,i)=>b.classList.toggle('hl',i==idx));L.querySelector('.hl')?.scrollIntoView({block:'nearest'})}});
 el.querySelector('.smf').onsubmit=e=>{e.preventDefault();goSearch(idx>=0&&items[idx]?items[idx].term:inp.value)};
 el.querySelector('#smc').onclick=()=>{inp.value='';inp.focus();refresh()};el.querySelector('#smk').onclick=()=>closeSheet();
 L.onclick=e=>{const r=e.target.closest('[data-rm]');if(r){e.stopPropagation();REC.splice(+r.dataset.rm,1);saveRec();refresh();return}if(e.target.closest('#smca')){REC=[];saveRec();refresh();return}const b=e.target.closest('.smr');if(b&&items[+b.dataset.i])goSearch(items[+b.dataset.i].term)};
 el.onclick=e=>{if(e.target===el)closeSheet()};refresh()}
async function searchPg(q){q=normQ(q);
 A.innerHTML=H('search','Search')+`<form id="sp" class="row" style="flex-wrap:nowrap">${sbar('spi','Posts, people, #tags, communities',q)}<button class="btn" aria-label="Search">${ic('search',18)}</button></form><div id="sr"></div>`;
 $('#sp').onsubmit=e=>{e.preventDefault();goSearch($('#spi').value)};
 if(!qOk(q))return $('#sr').innerHTML='<p class="mu">Type at least 2 characters.</p>';
 const t=q.replace(/^#/,'').replace(/[%_,()*\\"]/g,'').trim(),like='%'+t+'%',tg=t.toLowerCase().replace(/\W/g,'');
 const [u,c,ps]=await Promise.all([sb.from('profiles').select('username,display_name,scene').or(`username.ilike.${like},display_name.ilike.${like}`).limit(6),sb.from('communities').select('slug,name,description').or(`name.ilike.${like},description.ilike.${like}`).limit(5),loadPosts(x=>x.or(`body.ilike.${like}`+(tg?`,tags.cs.{${tg}}`:'')).limit(30))]);
 $('#sr').innerHTML=((u.data||[]).length?H('people','People')+u.data.map(x=>`<a class="card row" href="#/u/${esc(x.username)}">${av(x)}<b>${esc(x.display_name||x.username)}</b>${badge(x)} <span class="mu">@${esc(x.username)}</span></a>`).join(''):'')+((c.data||[]).length?H('globe','Communities')+c.data.map(x=>`<a class="card" href="#/c/${esc(x.slug)}"><b>${esc(x.name)}</b><div class="mu">${esc((x.description||'').slice(0,100))}</div></a>`).join(''):'')+H('chat','Posts')+cards(ps);observe()}
function editModal(id,E){const p=S.posts[id],m=p.meta||{};E=E||{body:p.body||'',moods:moodsOf(m),cw:m.cw||'',lk:m.link||'',scene:p.scene||null};
 const el=sheet(`<h3>${ic('pen',22)} Edit post</h3><textarea id="ept" maxlength="1000"></textarea><h4 class="sg">Moods (pick any)</h4><div class="chips" id="epm">${Object.entries(MOODS).map(([k,v])=>`<button type="button" class="chip ${E.moods.includes(k)?'sel':''}" data-k="${k}">${ic(v[1],18)} ${v[0]}</button>`).join('')}</div><input id="epc" maxlength="60" placeholder="Content warning (optional)"><input id="epl" type="url" maxlength="300" placeholder="Link (https://…)">${E.scene?scn(E.scene)+`<div class="row wrap"><button type="button" class="chip" id="epe">${ic('face',16)} Edit character</button><button type="button" class="chip" id="epr">${ic('x',16)} Remove</button></div>`:`<button type="button" class="chip" id="epe">${ic('face',16)} Add character</button>`}<div class="row"><button class="btn" id="eps">${ic('check',18)} Save</button><button class="btn ghost" id="epx">Cancel</button></div>`);
 $('#ept').value=E.body;$('#epc').value=E.cw;$('#epl').value=E.lk;
 const grab=()=>{E.body=$('#ept').value;E.cw=$('#epc').value;E.lk=$('#epl').value};
 $('#epm').onclick=e=>{const b=e.target.closest('.chip');if(!b)return;const k=b.dataset.k;E.moods=E.moods.includes(k)?E.moods.filter(x=>x!=k):[...E.moods,k];b.classList.toggle('sel')};
 $('#epe').onclick=()=>{grab();editScene(E.scene||noP(mp.scene),s=>{E.scene=noP(s);editModal(id,E)})};
 const r=$('#epr');if(r)r.onclick=()=>{grab();E.scene=null;editModal(id,E)};
 $('#epx').onclick=()=>closeSheet();
 $('#eps').onclick=async()=>{grab();const body=E.body.trim();if(!body&&!E.scene)return toast('Nothing to post');const meta={...(p.meta||{})};delete meta.mood;delete meta.moods;delete meta.cw;delete meta.link;
  if(E.moods.length){meta.moods=E.moods;meta.mood=E.moods[0]}if(E.cw.trim())meta.cw=E.cw.trim().slice(0,60);if(E.lk.trim()){if(!/^https?:\/\//i.test(E.lk.trim()))return toast('Link must start with https://');meta.link=E.lk.trim()}
  const tags=tagsOf(body),{error}=await sb.from('posts').update({body,tags,scene:E.scene,meta}).eq('id',id);if(error)return toast(error.message);Object.assign(p,{body,tags,scene:E.scene,meta});closeSheet();redraw(id);toast('Updated')}}

/* ---------- REALS: full-screen post feed, learns locally from watch time + reactions (no extra DB load) ---------- */
let reRaw=null,RL=null;
const dayKey=()=>new Date().toLocaleDateString('en-CA');
let AF={a:{},t:{},m:{},c:{},d:''};try{Object.assign(AF,JSON.parse(localStorage.rtaf||'{}'))}catch{}
let RD={d:'',ids:[]};try{RD=JSON.parse(localStorage.rtrd||'{}')||{}}catch{}
if(RD.d!==dayKey()||!Array.isArray(RD.ids))RD={d:dayKey(),ids:[]};
if(AF.d!==dayKey()){['a','t','m','c'].forEach(k=>{AF[k]=AF[k]||{};for(const x in AF[k]){AF[k][x]*=.92;if(Math.abs(AF[k][x])<.05)delete AF[k][x]}});AF.d=dayKey()}
const saveAF=()=>{for(const k of['a','t','m','c']){const e=Object.entries(AF[k]);if(e.length>150){e.sort((x,y)=>Math.abs(y[1])-Math.abs(x[1]));AF[k]=Object.fromEntries(e.slice(0,100))}}try{localStorage.rtaf=JSON.stringify(AF);localStorage.rtrd=JSON.stringify(RD)}catch{}};
const bump=(o,k,w)=>{if(k==null)return;o[k]=Math.max(-12,Math.min(12,(o[k]||0)+w))};
const learn=(p,w)=>{bump(AF.a,p.user_id,w);(p.tags||[]).slice(0,5).forEach(t=>bump(AF.t,t,w*.6));moodsOf(p.meta||{}).forEach(k=>bump(AF.m,k,w*.5));bump(AF.c,p.community_id,w*.5)};
const kindOf=p=>p.scene?'s':p.poll?'p':(p.images||[]).length?'i':'t';
function rlScore(p){const age=(Date.now()-new Date(p.created_at))/36e5,m=p.meta||{};
 const aff=(AF.a[p.user_id]||0)+(p.tags||[]).slice(0,5).reduce((x,t)=>x+(AF.t[t]||0)*.6,0)+moodsOf(m).reduce((x,k)=>x+(AF.m[k]||0)*.5,0)+(AF.c[p.community_id]||0)*.5;
 let s=Math.exp(1.3*Math.tanh(aff/6))/Math.pow(age/24+1,.7)*(1+.2*Math.log(1+Math.max(0,p.ups-p.downs)+p.comments_count*1.5));
 const v=S.mv[p.id]||0,st=S.st[p.id]||0;if(v==1)s*=.5;if(v==-1)s*=.05;if(st)s*=.8;if(SEEN[p.id])s*=.6;else if(new Date(p.created_at)>LV)s*=1.2;
 if(S.fol.has(p.user_id))s*=1.3;if(S.joined.has(p.community_id))s*=1.15;
 const L=RL.last;if(L.slice(-3).some(x=>x.u==p.user_id))s*=.4;if(L.length>1&&L.slice(-2).every(x=>x.k==kindOf(p)))s*=.8;return s}
function rlNext(){const P=RL.pool;if(!P.length)return null;let bi=0;
 if(Math.random()<.08){const top=P.map(p=>[p,rlScore(p)]).sort((a,b)=>b[1]-a[1]).slice(0,15);bi=P.indexOf(top[Math.random()*top.length|0][0])}
 else{let b=-1;P.forEach((p,i)=>{const x=rlScore(p)*Math.exp((Math.random()-.5)*.9);if(x>b){b=x;bi=i}})}
 const p=P.splice(bi,1)[0];RL.last.push({u:p.user_id,k:kindOf(p)});return p}
const rlAcc=p=>{const a=(p.author||{}).accent;return hexOk(a)?a:'#ff8a1f'};
function rlInner(p){const a=p.author||{},m=p.meta||{},mo=moodsOf(m),len=(p.body||'').length,fs=len<60?30:len<160?23:len<400?18:15,pl=S.pv[p.id]||{c:[],me:null},v=S.mv[p.id]||0,sl=S.st[p.id]||0,hid=m.cw&&!S.rev.has(p.id);
 let poll='';if(p.poll){const tot=pl.c.reduce((x,y)=>x+(y||0),0);poll='<div class="rl-poll">'+p.poll.opts.map((o,i)=>{const pc=tot?Math.round((pl.c[i]||0)/tot*100):0;return `<button class="rl-opt ${pl.me===i?'me':''}" data-act="pvote" data-id="${p.id}" data-i="${i}">${pl.me!=null?`<i style="width:${pc}%"></i>`:''}<span>${esc(o)}${pl.me!=null?` · ${pc}%`:''}</span></button>`}).join('')+'</div>'}
 const inner=(p.scene?`<img class="rl-sc" alt="" src="${uri(p.scene)}">`:'')+((p.images||[]).length?`<img class="rl-im" alt="" loading="lazy" src="${esc(p.images[0])}">`:'')+(p.body?`<div class="rl-b" style="font-size:${fs}px">${fmt(p.body)}</div>`:'')+(m.link?linkChip(m.link):'')+poll;
 return `${p.scene?`<img class="rl-blur" alt="" src="${uri(p.scene)}">`:''}<div class="rl-bg"></div><div class="rl-c">${hid?`<button class="rl-cw" data-act="rrev" data-id="${p.id}">${ic('warn',38)}<b>${esc(m.cw)}</b><u>Tap to show</u></button>`:inner}</div>
 <div class="rl-info"><div class="rl-au"><a href="#/u/${esc(a.username)}">${av(a)}</a><div><b>${esc(a.display_name||a.username)}</b><span>@${esc(a.username)} · ${ago(p.created_at)}</span></div>${S.fol.has(p.user_id)?'':`<button class="rl-fo" data-act="rfol" data-id="${p.user_id}" data-pid="${p.id}">Follow</button>`}</div><div class="rl-m">${mo.map(k=>`<span class="mood">${ic(MOODS[k][1],15)} ${MOODS[k][0]}</span>`).join('')}${p.community?`<a href="#/c/${esc(p.community.slug)}">${ic('people',14)} ${esc(p.community.name)}</a>`:''}</div></div>
 <div class="rl-act"><button class="${v==1?'on':''}" data-act="rhype" data-id="${p.id}" aria-label="Hype">${ic('up',36)}<small>${p.ups}</small></button><button class="starb ${sl?'on':''} ${sl==2?'sup':''}" data-star="${p.id}" aria-label="Star (hold for super star)">${ic(sl==2?'sstar':sl?'star':'starO',36)}<small>${sl==2?'Super':sl?'Starred':'Star'}</small></button><button data-act="cm" data-id="${p.id}" aria-label="Comments">${ic('chat',36)}<small>${p.comments_count}</small></button><button class="${S.bm.has(p.id)?'on':''}" data-act="bm" data-id="${p.id}" aria-label="Save">${ic('bookmark',36)}<small>Save</small></button><button data-act="votemenu" data-id="${p.id}" aria-label="Hype or disparage">${ic('vote',36)}<small>${p.ups-p.downs}</small></button></div><div class="rl-heart">${ic('up',110)}</div>`}
const rlEnd=()=>`<div class="rl-bg"></div><div class="rl-c rl-e">${ic('leaf',72)}<h2>No more today</h2><p>You've watched ${RD.ids.length} Reals today. Fresh ones will be waiting tomorrow.</p><a class="btn" href="#/">${ic('home',18)} Back home</a><a class="btn ghost" href="#/c">${ic('people',18)} Explore communities</a></div>`;
function rlFill(){let ahead=RL.slides.length-1-RL.idx;while(ahead<3&&!RL.end){const p=rlNext();const el=document.createElement('section');if(p){el.className='rl-s';el.dataset.rid=p.id;el.style.setProperty('--rc',rlAcc(p));el.innerHTML=rlInner(p)}else{RL.end=1;el.className='rl-s rl-end';el.innerHTML=rlEnd()}RL.sc.append(el);RL.slides.push(el);RL.io.observe(el);ahead++}}
function rlLeave(){if(!RL||RL.id==null)return;const id=RL.id,p=S.posts[id],e=RL.entry;RL.id=null;if(!p)return;
 const dwell=(RL.acc+(RL.t0?performance.now()-RL.t0:0))/1000,exp=Math.max(3,Math.min(14,2+(p.body||'').length/18+(p.scene?3:0)+(p.poll?4:0))),ratio=dwell/exp;
 let w=ratio<.25&&dwell<1.5?-1.5:Math.min(2.2,ratio)-.3;
 const v=S.mv[id]||0,st=S.st[id]||0;if(v==1&&e.v!=1)w+=3;if(v!=1&&e.v==1)w-=3;if(v==-1&&e.v!=-1)w-=5;
 if(st>e.st)w+=(st==2?6:4)-(e.st==1?4:0);if(st<e.st)w-=(e.st==2?6:4)-(st==1?4:0);
 if(S.bm.has(id)!=e.bm)w+=e.bm?-3:3;if(S.fol.has(p.user_id)&&!e.fol)w+=4;if(RL.cm.has(id))w+=2;
 learn(p,w);saveAF()}
function rlEnter(el){const id=el.dataset.rid;RL.t0=performance.now();RL.acc=0;if(!id){RL.id=null;return}const p=S.posts[id];RL.id=id;RL.cm.delete(id);RL.entry={v:S.mv[id]||0,st:S.st[id]||0,bm:S.bm.has(id),fol:S.fol.has(p.user_id)};
 if(!RD.ids.includes(id)){RD.ids.push(id);saveAF()}const n=$('#rln');if(n)n.textContent=RD.ids.length+' today'}
function realsStop(){if(!RL)return;rlLeave();RL.io.disconnect();RL.off.forEach(f=>f());reRaw=null;RL=null;saveAF()}
async function realsPg(){A.innerHTML=`<div class="rl-wrap"><div class="ldr">${EQ}<span style="color:#fff;opacity:.7">Tuning your Reals…</span></div></div>`;
 const since=new Date(Date.now()-14*864e5).toISOString(),ps=await loadPosts(q=>q.gte('created_at',since).limit(150));
 A.innerHTML=`<div class="rl-wrap"><div class="rl-frame"><div class="rl-top"><a href="#/" class="rl-x" aria-label="Close">${ic('x',22)}</a><b>${ic('reals',24)} Reals</b><span id="rln" class="rl-n">${RD.ids.length} today</span></div><div class="rl-scroll" id="rls"></div><div class="rl-hint" id="rlh">${ic('caret',18)}<span>Swipe up</span></div></div><div class="rl-nv"><button type="button" id="rlu" aria-label="Previous">${ic('caret',22)}</button><button type="button" id="rld" aria-label="Next">${ic('caret',22)}</button></div></div>`;
 const sc=$('#rls');RL={sc,slides:[],idx:0,end:0,cur:null,id:null,t0:0,acc:0,entry:{},cm:new Set(),last:[],off:[],pool:ps.filter(p=>p.user_id!==me.id&&!RD.ids.includes(p.id)&&!touched(p))};
 RL.io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting||e.target===RL.cur)return;rlLeave();RL.cur=e.target;RL.idx=RL.slides.indexOf(e.target);rlEnter(e.target);if(RL.idx>0){const h=$('#rlh');h&&h.remove()}rlFill()}),{root:sc,threshold:.6});
 reRaw=id=>{const el=RL&&RL.slides.find(x=>x.dataset.rid==id);if(el&&S.posts[id])el.innerHTML=rlInner(S.posts[id])};
 const go=d=>{const i=Math.max(0,Math.min(RL.slides.length-1,RL.idx+d));sc.scrollTo({top:i*sc.clientHeight,behavior:'smooth'})};
 const heart=el=>{const h=el&&el.querySelector('.rl-heart');if(!h)return;h.classList.remove('go');void h.offsetWidth;h.classList.add('go')};
 const like=el=>{const id=el&&el.dataset.rid;if(!id)return;heart(el);if((S.mv[id]||0)!=1)acts.vote({id,v:1})};
 let lt=0,lx=0,ly=0;const tap=e=>{if(e.target.closest('button,a,input,.rl-poll,.rl-b'))return;const el=e.target.closest('.rl-s');if(!el||!el.dataset.rid)return;const n=Date.now();if(n-lt<320&&Math.abs(e.clientX-lx)<40&&Math.abs(e.clientY-ly)<40){lt=0;like(el)}else{lt=n;lx=e.clientX;ly=e.clientY}};
 let wl=0;const wheel=e=>{if(!matchMedia('(pointer:fine)').matches)return;const b=e.target.closest('.rl-b');if(b&&b.scrollHeight>b.clientHeight+2)return;e.preventDefault();const n=Date.now();if(n-wl<650||Math.abs(e.deltaY)<8)return;wl=n;go(e.deltaY>0?1:-1)};
 const key=e=>{if(/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)||e.ctrlKey||e.metaKey||e.altKey)return;const k=e.key;if(k=='Escape'){document.querySelector('.bd')?closeSheet():location.hash='#/';return}if(document.querySelector('.bd'))return;const id=RL.cur&&RL.cur.dataset.rid;
  if(['ArrowDown','j','PageDown',' '].includes(k)){e.preventDefault();go(1)}else if(['ArrowUp','k','PageUp'].includes(k)){e.preventDefault();go(-1)}else if(id){if(k=='l')like(RL.cur);else if(k=='s')starTap(id);else if(k=='c')acts.cm({id});else if(k=='b')acts.bm({id})}};
 const vis=()=>{if(document.hidden){if(RL.t0){RL.acc+=performance.now()-RL.t0;RL.t0=0}}else if(RL.id!=null)RL.t0=performance.now()};
 sc.addEventListener('pointerup',tap);sc.addEventListener('wheel',wheel,{passive:false});document.addEventListener('keydown',key);document.addEventListener('visibilitychange',vis);addEventListener('pagehide',saveAF);
 RL.off=[()=>document.removeEventListener('keydown',key),()=>document.removeEventListener('visibilitychange',vis),()=>removeEventListener('pagehide',saveAF)];
 $('#rlu').onclick=()=>go(-1);$('#rld').onclick=()=>go(1);rlFill()}
Object.assign(acts,{rrev(d){S.rev.add(d.id);reRaw&&reRaw(d.id)},rhype(d){acts.vote({id:d.id,v:1})},
 async rfol(d){const {error}=await sb.from('follows').insert({follower:me.id,following:d.id});if(error)return toast(error.message);S.fol.add(d.id);snack('Following','follow');reRaw&&reRaw(d.pid)}});
const _cm=acts.cm;acts.cm=(d,e)=>{RL&&RL.cm.add(d.id);return _cm(d,e)};
async function upd(o){const {data,error}=await sb.from('profiles').update(o).eq('id',me.id).select().single();if(error)return toast(error.message);mp=data;R();toast('Saved')}
document.addEventListener('click',e=>{const a=e.target.closest('[data-act]');if(a&&acts[a.dataset.act]){e.preventDefault();acts[a.dataset.act](a.dataset,a)}});

/* ---------- ROUTER / BOOT ---------- */
const NAV=[['','home'],['c','people'],['new','plus','plus'],['saved','bookmark'],['u','user']];
async function R(){closeSheet(true);realsStop();const [,a,b]=location.hash.split('/');document.querySelectorAll('#nav a').forEach((x,i)=>x.classList.toggle('on',NAV[i][0]==(a||'')||(a=='u'&&i==4&&(!b||b==mp.username))));
 A.innerHTML=LOADER;const P={'':feed,new:compose,c:comm,u:profile,tag:tagPg,p:postPg,saved,admin,set:settings,reals:realsPg,stars:starsPg,s:searchPg};try{await(P[a]||feed)(b?decodeURIComponent(b):b);scrollTo(0,0);observe();A.classList.remove('pg');void A.offsetWidth;A.classList.add('pg');setTimeout(()=>A.classList.remove('pg'),1000)}catch(e){console.error(e);A.innerHTML='<p class="empty">Something went wrong. Check your Supabase setup.</p>'}}
async function start(u){me=u;mp=(await sb.from('profiles').select('*').eq('id',u.id).maybeSingle()).data;if(!mp){const r=await sb.rpc('ensure_profile');if(r.error){console.error(r.error);return toast("Couldn't create your profile: "+r.error.message)}mp=r.data}if(!mp)return toast('Profile not found — run fix_profiles.sql in Supabase');
 const [f,j]=await Promise.all([sb.from('follows').select('following').eq('follower',u.id),sb.from('community_members').select('community_id').eq('user_id',u.id)]);S.fol=new Set((f.data||[]).map(x=>x.following));S.joined=new Set((j.data||[]).map(x=>x.community_id));
 document.body.classList.add('in');hideSplash();$('#top').innerHTML=`<a href="#/" class="brand">${LOGO}<b>ReitTime</b></a><button type="button" class="lnk" data-act="srch" aria-label="Search">${ic('search',24)}</button><button class="lnk meb" data-act="menu" aria-label="Menu">${av(mp)}${ic('caret',18)}</button>`;$('#nav').innerHTML=NAV.map(n=>`<a href="#/${n[0]}" class="${n[2]||''}" aria-label="${n[1]}">${ic(n[1],n[2]?28:26)}</a>`).join('');
 await loadMine();initSearch();
 sb.channel('posts').on('postgres_changes',{event:'INSERT',schema:'public',table:'posts'},pl=>{const n=$('#newp');if(n&&pl.new.user_id!==me.id)n.innerHTML=`<button class="pill" data-act="reload">${ic('arrowup',16)} New posts</button>`}).subscribe();
 if(!S.started){S.started=1;addEventListener('hashchange',R)}R()}
async function boot(){const {data:{session}}=await sb.auth.getSession();if(!session)return authUI();const {data:a}=await sb.auth.mfa.getAuthenticatorAssuranceLevel();if(a&&a.nextLevel==='aal2'&&a.currentLevel!=='aal2')return mfaUI();start(session.user)}
/* ---------- custom controls: dropdowns, sliders, color boxes, popup menus ---------- */
let popEl=null;const closePop=()=>{popEl&&popEl.remove();popEl=null};
function popup(btn,items,onPick,cls=''){closePop();const r=btn.getBoundingClientRect(),el=document.createElement('div');el.className='pop '+cls;
 el.innerHTML=items.map((it,i)=>`<button type="button" class="ddi ${it.sel?'sel':''}" data-i="${i}">${it.ic?ic(it.ic,20):''}<span>${esc(it.t)}</span>${it.sel?ic('check',16):''}</button>`).join('');
 document.body.append(el);const h=el.offsetHeight,below=innerHeight-r.bottom,up=below<h+12&&r.top>below;
 el.style.minWidth=Math.max(r.width,200)+'px';el.style.left=Math.min(Math.max(8,r.left),innerWidth-el.offsetWidth-8)+'px';el.style.maxHeight=Math.max(120,(up?r.top:below)-16)+'px';el.style.top=(up?Math.max(8,r.top-Math.min(h,r.top-16)-6):r.bottom+6)+'px';
 el.onclick=e=>{const b=e.target.closest('.ddi');if(!b)return;closePop();onPick(items[+b.dataset.i],b)};popEl=el;requestAnimationFrame(()=>el.classList.add('on'))}
document.addEventListener('click',e=>{if(popEl&&!e.target.closest('.pop,.dd,[data-act=menu]'))closePop()},true);addEventListener('keydown',e=>e.key=='Escape'&&closePop());
function setP(r){r.style.setProperty('--p',((r.value-r.min)/(r.max-r.min)*100)+'%')}
document.addEventListener('input',e=>e.target.type=='range'&&setP(e.target));
function enhSel(s){s.dataset.dd=1;s.hidden=true;const b=document.createElement('button');b.type='button';b.className='dd';s.after(b);
 const sync=()=>{const o=s.options[s.selectedIndex];b.innerHTML=`<span>${esc(o?o.text:'')}</span>${ic('caret',18)}`};
 b.onclick=()=>{if(popEl&&popEl._b===b)return closePop();popup(b,[...s.options].map((o,i)=>({t:o.text,sel:i==s.selectedIndex,v:o.value})),it=>{s.value=it.v;sync();s.dispatchEvent(new Event('input',{bubbles:true}));s.dispatchEvent(new Event('change',{bubbles:true}))});popEl._b=b};s._sync=sync;sync()}
function enhCol(c){c.dataset.cl=1;const row=document.createElement('div');row.className='sw';['#ff8a1f','#e8590c','#ffd24a','#2fd07a','#1fb868','#0f7a43','#3aa0ff','#b36bff','#ff5a7a','#111111','#f3f3f3'].forEach(h=>{const b=document.createElement('button');b.type='button';b.style.background=h;b.setAttribute('aria-label',h);b.onclick=()=>{c.value=h;c.dispatchEvent(new Event('input',{bubbles:true}))};row.append(b)});c.after(row)}
let enq=0;const enh=()=>{enq=0;document.querySelectorAll('select:not([data-dd]),input[type=range]:not([data-rg]),input[type=color]:not([data-cl])').forEach(x=>x.tagName=='SELECT'?enhSel(x):x.type=='range'?(x.dataset.rg=1,setP(x)):enhCol(x))};
new MutationObserver(()=>{if(!enq){enq=1;requestAnimationFrame(enh)}}).observe(document.body,{childList:true,subtree:true});
boot();
