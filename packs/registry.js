/* DeckHub pack registry. Loaded FIRST (before packs/*.js and app.js).
   Each pack file calls PKR.register({...}); app.js and deckhub.js only ever talk to PKR, never to a specific pack.
   Pack shape (see packs/_template.js):
     id, name, tag, blurb, cost, defs (SVG <defs> string), pack (function returning the 200x300 foil pack SVG, class="pksvg"),
     parts: { b:{idx:{name,art,id?,rarity?,odds?}}, e:{...}, m:{...}, x:{...}, f:{...} }   b=skin e=eyes m=mouth x=extra f=full icon
     pic:   { skinIdx:[gradient colours] }   (colours for the skin background)
   art signatures: e(x) -> SVG (x = 33 or 67), m()/x()/b()/f() -> SVG strings in a 100x100 viewBox.
   Each slot index must be globally unique per slot: take the next free number (see packs/README.md). */
const PKR=(()=>{
const S=['b','e','m','x','f'],packs=[],parts={b:{},e:{},m:{},x:{},f:{}},pics={},owner={},inv=new Set();
const art=(s,i)=>{const d=parts[s][i];return d?d.art:null};
const register=p=>{
 if(packs.some(q=>q.id===p.id))return;
 packs.push(p);
 S.forEach(s=>Object.entries(p.parts[s]||{}).forEach(([i,d])=>{
  if(parts[s][i])console.warn('PKR: '+s+i+' already used by '+owner[s+i]+', overwritten by '+p.id);
  parts[s][i]=d;owner[s+i]=p.id}));
 Object.entries(p.pic||{}).forEach(([i,c])=>pics[i]=c)};
return{register,packs,inv,
 defs:()=>packs.map(p=>p.defs||'').join(''),
 eye:i=>art('e',i),mouth:i=>{const f=art('m',i);return f?f():''},skin:i=>art('b',i),
 extra:i=>{const f=art('x',i);return f?f():''},full:i=>art('f',i),
 picList:(from=25)=>{const k=Object.keys(pics).map(Number),mx=Math.max(from-1,...k),o=[];for(let i=from;i<=mx;i++)o.push(pics[i]);return o},
 isPack:(s,i)=>!!parts[s][i],owned:(s,i)=>inv.has(s+i),packOf:(s,i)=>owner[s+i]||null,
 hasFull:()=>Object.keys(parts.f).some(i=>inv.has('f'+i))||(typeof isAdm=='function'&&isAdm()),
 fillNames:PI=>S.forEach(s=>Object.entries(parts[s]).forEach(([i,d])=>{PI[s][i]=d.name})),
 packArt:id=>{const p=packs.find(q=>q.id===id)||packs[0];return p&&p.pack?p.pack():''},
 meta:()=>Object.fromEntries(packs.map(p=>[p.id,{n:p.name,tag:p.tag,cost:p.cost,blurb:p.blurb}])),
 cards:id=>S.flatMap(s=>Object.entries(parts[s]).filter(([i])=>owner[s+i]===id).map(([i,d])=>({id:d.id,name:d.name,rarity:d.rarity,slot:s,idx:+i,odds_w:d.odds})))};
})();
