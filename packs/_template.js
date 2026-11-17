/* TEMPLATE for a new pack. Copy to packs/<name>.js, fill in, then add it to index.html
   (after packs/registry.js) and to the cache list in sw.js. Keep slot indexes unique (see packs/README.md). */
const NZ=(()=>{
const defs=``; /* gradients etc. Prefix every id (e.g. nzA) so it never clashes with another pack */
const e60=x=>`<circle cx="${x}" cy="42" r="10" fill="#fff"/>`;   /* eyes: x is 33 (left) or 67 (right) */
const m60=()=>`<path d="M35 64Q50 74 65 64" stroke="#000" fill="none"/>`;
const b60=()=>`<rect width="100" height="100" fill="#fff" opacity=".2"/>`;       /* skin overlay */
const x60=()=>``;                                                                /* extra, drawn on top of everything */
const f60=()=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#58f"/></svg>`;
return{defs,e60,m60,b60,x60,f60};
})();
PKR.register({id:'newpack',name:'New Pack',tag:'Short tagline',cost:20,blurb:'3 cards · what is inside.',
 defs:NZ.defs,
 parts:{
  e:{60:{id:'new_eyes',name:'Example eyes',art:NZ.e60,rarity:'common',odds:5000}},
  m:{60:{id:'new_mouth',name:'Example mouth',art:NZ.m60,rarity:'rare',odds:5000}}},
 pic:{/* 60:['#fff','#ddd','#aaa'] for a new skin index */}});
