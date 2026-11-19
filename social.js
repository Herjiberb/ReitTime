/* ReitTime social layer: Pulse (notifications), Explore, Post analytics. Loaded before app.js; uses its globals lazily. */
(()=>{
const TY=[['follow','Followers','#2f8cff','follow'],['comment','Comments','#1fb868','chat'],['react','Hypes','#ff8a1f','up'],['star','Stars','#f2b01e','star']];
const TM={};TY.forEach(t=>TM[t[0]]={l:t[1],c:t[2],i:t[3]});
const NS={rows:[],cnt:{follow:0,comment:0,react:0,star:0},f:null,nw:new Set(),open:null,ok:true,err:''};
const tot=c=>TY.reduce((s,t)=>s+(c[t[0]]||0),0);
const isOpen=()=>NS.open&&NS.open.isConnected&&NS.open.classList.contains('on');
const nf=n=>n>=1e4?Math.round(n/1e3)+'k':n>=1e3?(n/1e3).toFixed(1)+'k':String(n||0);
const strip=s=>String(s||'').replace(/\[\/?[a-z]+\]/gi,'').replace(/[*`#>_~]/g,'').replace(/\s+/g,' ').trim();

/* ---------- bell: shape + colour follow unread amount and dominant type ---------- */
function bell(c,id){
 const T=tot(c),lv=!T?0:T<5?1:T<20?2:3,o=TY.map(t=>[t[0],c[t[0]]||0]).sort((a,b)=>b[1]-a[1]);
 const d=o[0][1]?o[0][0]:null,s2=o[1][1]?o[1][0]:null,c1=d?TM[d].c:'currentColor',c2=s2?TM[s2].c:c1,g='bg'+id;
 const body='M16 4.2c-4.5 0-7.6 3.3-7.6 8v4.1c0 1.7-.7 3.1-1.9 4.2-.5.5-.2 1.4.6 1.4h17.8c.8 0 1.1-.9.6-1.4-1.2-1.1-1.9-2.5-1.9-4.2v-4.1c0-4.7-3.1-8-7.6-8z';
 const gl={follow:'<path d="M16 11v6.4M12.8 14.2h6.4" stroke="#fff" stroke-width="2" stroke-linecap="round"/>',
  comment:'<circle cx="12.4" cy="14.2" r="1.4" fill="#fff"/><circle cx="16" cy="14.2" r="1.4" fill="#fff"/><circle cx="19.6" cy="14.2" r="1.4" fill="#fff"/>',
  react:'<path d="M16 17.6v-6.4M13 14.2l3-3 3 3" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  star:'<path d="M16 10.4l1.6 3.2 3.5.5-2.5 2.4.6 3.5-3.2-1.7-3.2 1.7.6-3.5-2.5-2.4 3.5-.5z" fill="#fff"/>'}[d]||'';
 let burst='';if(lv==3){let p='';for(let i=0;i<20;i++){const a=i/20*6.283,r=i%2?12.6:15.4;p+=(16+Math.cos(a)*r).toFixed(1)+','+(15+Math.sin(a)*r).toFixed(1)+' '}burst=`<polygon class="bl-burst" points="${p}" fill="${c1}" opacity=".2"/>`}
 const waves=lv>=2?`<path class="bl-w" d="M4.4 10.6a12 12 0 0 0 0 8.8M27.6 10.6a12 12 0 0 1 0 8.8" fill="none" stroke="${c1}" stroke-width="2" stroke-linecap="round"/>`+(lv==3?`<path class="bl-w w2" d="M1.8 8.6a15 15 0 0 0 0 12.8M30.2 8.6a15 15 0 0 1 0 12.8" fill="none" stroke="${c2}" stroke-width="2" stroke-linecap="round"/>`:''):'';
 const fill=lv==0?'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"':lv==1?`fill="${c1}"`:`fill="url(#${g})"`;
 const defs=lv>=2?`<defs><linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>`:'';
 const lab=T>99?'99+':T>9?'9+':String(T);
 const badge=lv==0?'':lv==1?'<circle cx="25" cy="7.2" r="3.6" fill="#ff3b5c" stroke="var(--bg)" stroke-width="1.8"/>':lv==2?`<circle cx="24.6" cy="8" r="6.6" fill="#ff3b5c" stroke="var(--bg)" stroke-width="1.8"/><text x="24.6" y="8.2" text-anchor="middle" dominant-baseline="central" font-size="8.5" font-weight="800" fill="#fff">${lab}</text>`:`<rect x="14.5" y="0.6" width="16.5" height="12" rx="6" fill="#ff3b5c" stroke="var(--bg)" stroke-width="1.6"/><text x="22.8" y="6.9" text-anchor="middle" dominant-baseline="central" font-size="8" font-weight="800" fill="#fff">${lab}</text>`;
 return `<svg class="bell bl${lv}" viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">${defs}${burst}<g class="bl-bd">${waves}<circle cx="16" cy="3.4" r="1.5" fill="${lv?c1:'currentColor'}"/><path d="${body}" ${fill}/>${gl}<path d="M13 25.8a3 3 0 0 0 6 0z" fill="${lv?c2:'currentColor'}"/></g>${badge}</svg>`}
function paintBell(ring){
 const b=document.getElementById('bell');if(!b)return;const T=tot(NS.cnt),lv=!T?0:T<5?1:T<20?2:3;
 b.innerHTML=bell(NS.cnt,'h');b.className='lnk bellb bl'+lv+(ring?' ring':'');b.setAttribute('aria-label',T?`Notifications, ${T} unread`:'Notifications');
 if(ring)setTimeout(()=>b.classList.remove('ring'),1200);
 document.title=document.title.replace(/^\(\d+\+?\)\s/,'');if(T)document.title=`(${T>99?'99+':T}) `+document.title;
 try{T?navigator.setAppBadge&&navigator.setAppBadge(T):navigator.clearAppBadge&&navigator.clearAppBadge()}catch{}
}
async function refresh(){
 try{const {data,error}=await sb.from('notifications').select('type,n').is('read_at',null).limit(300);if(error)throw error;
  const c={follow:0,comment:0,react:0,star:0};(data||[]).forEach(r=>{if(c[r.type]!=null)c[r.type]+=r.n||1});const was=tot(NS.cnt);NS.cnt=c;NS.ok=true;paintBell(tot(c)>was)}
 catch(e){NS.ok=false;paintBell()}}

/* ---------- messages + phone alerts ---------- */
const msg=(t,n,who,sn)=>t=='follow'?`${who||'Someone'} started following you`:t=='comment'?`${who||'Someone'} commented${sn?': '+sn.slice(0,60):' on your post'}`:t=='react'?(n>1?`${n} people hyped your post`:'Someone hyped your post'):sn=='super'?'Your post got a super star':n>1?`${n} stars on your post`:'Your post got a star';
const urlFor=r=>r.type=='follow'?'#/u/'+(mp&&mp.username||''):'#/p/'+r.post_id;
async function phone(title,body,url,tag){
 if(localStorage.rtPn!=='1'||!('Notification' in window)||Notification.permission!=='granted')return;
 try{const o={body,icon:'icon.svg',badge:'icon.svg',tag,renotify:true,data:{url:location.pathname+url}};const reg=navigator.serviceWorker&&await navigator.serviceWorker.getRegistration();reg?reg.showNotification(title,o):new Notification(title,o)}catch{}}
async function announce(r){
 let who='';if(r.actor_id&&(r.type=='follow'||r.type=='comment')){try{const {data}=await sb.from('profiles').select('username,display_name').eq('id',r.actor_id).single();who=data&&(data.display_name||data.username)}catch{}}
 const m=msg(r.type,r.n||1,who,r.snip);
 if(document.hidden)phone('ReitTime',m,urlFor(r),'rt-'+r.type);else if(!isOpen())toast(m)}
let rtT=0;
function onRt(pl){const r=pl.new;if(!r||r.read_at)return;announce(r);clearTimeout(rtT);rtT=setTimeout(async()=>{await refresh();if(isOpen())load(true)},400)}

/* ---------- Pulse menu ---------- */
async function load(keep){
 const {data,error}=await sb.from('notifications').select('id,type,post_id,snip,n,read_at,created_at,actor:profiles!actor_id(username,display_name,scene'+ZS+')').order('created_at',{ascending:false}).limit(60);
 if(error){NS.ok=false;NS.err=error.message;NS.rows=[]}else{NS.ok=true;NS.err='';await zfix(data);NS.rows=data||[];
  if(!keep)NS.nw=new Set();NS.rows.forEach(r=>{if(!r.read_at)NS.nw.add(r.id)})}
 if(isOpen()){paintPulse();clearTimeout(NS.rt);NS.rt=setTimeout(markRead,1600)}}
async function markRead(){
 if(!isOpen()||!NS.rows.some(r=>!r.read_at))return;const iso=new Date().toISOString();
 const {error}=await sb.from('notifications').update({read_at:iso}).is('read_at',null);if(error)return;
 NS.rows.forEach(r=>r.read_at=r.read_at||iso);NS.cnt={follow:0,comment:0,react:0,star:0};paintBell()}
const newCnt=()=>{const c={follow:0,comment:0,react:0,star:0};NS.rows.forEach(r=>{if(NS.nw.has(r.id)&&c[r.type]!=null)c[r.type]+=r.n||1});return c};
function arc(R,a0,a1){const p=a=>[(60+R*Math.cos(a)).toFixed(2),(60+R*Math.sin(a)).toFixed(2)],s=p(a0),e=p(a1);return `M${s[0]} ${s[1]}A${R} ${R} 0 ${a1-a0>Math.PI?1:0} 1 ${e[0]} ${e[1]}`}
function ring(c){
 const T=tot(c),ks=TY.filter(t=>T?c[t[0]]>0:true),w=ks.map(t=>T?Math.max(c[t[0]],T*.08):1),sum=w.reduce((a,b)=>a+b,0);let a=-Math.PI/2;
 const segs=ks.map((t,i)=>{const sp=w[i]/sum*Math.PI*2,g=ks.length>1?.2:0,d=arc(46,a+g/2,a+sp-g/2+(ks.length==1?-.001:0));a+=sp;const on=NS.f==t[0];
  return `<path d="${d}" fill="none" stroke="${t[2]}" stroke-width="${on?15:10}" stroke-linecap="round" opacity="${T?(NS.f&&!on?.25:1):.22}" data-act="ptf" data-t="${t[0]}" class="pl-seg"/>`}).join('');
 return `<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="46" fill="none" stroke="currentColor" stroke-width="1" opacity=".08"/>${segs}</svg><div class="pl-core">${bell(c,'p')}<b>${T}</b><span>${T?'new':'all caught up'}</span></div>`}
function group(rows){
 const g=[],m={};rows.forEach(r=>{const k=r.type=='follow'?'f'+r.created_at.slice(0,10):r.type+'|'+r.post_id+'|'+(r.type=='star'?r.snip||'':'');let x=m[k];if(!x){x=m[k]={type:r.type,post_id:r.post_id,items:[],t:r.created_at};g.push(x)}x.items.push(r)});return g}
function row(x){
 const c=TM[x.type].c,n=x.items.reduce((s,r)=>s+(r.n||1),0),nw=x.items.some(r=>NS.nw.has(r.id)),act=[],seen={};
 x.items.forEach(r=>{if(r.actor&&!seen[r.actor.username]){seen[r.actor.username]=1;act.push(r.actor)}});
 const a=act[0],nm=a?`<b>${esc(a.display_name||a.username)}</b>`:'',more=act.length>1?` and ${act.length-1} other${act.length>2?'s':''}`:'';
 const sn=x.items[0].snip,t=x.type;
 const txt=t=='follow'?`${nm}${more} ${act.length>1?'followed you':'started following you'}`:t=='comment'?`${nm}${more} commented on your post`:t=='react'?(n>1?`<b>${n} people</b> hyped your post`:'<b>Someone</b> hyped your post'):sn=='super'?'<b>Someone</b> gave your post a super star':(n>1?`<b>${n} people</b> starred your post`:'<b>Someone</b> starred your post');
 const href=t=='follow'?(act.length==1?'#/u/'+esc(a.username):'#/u/'+esc(mp.username)):'#/p/'+esc(x.post_id);
 const lead=a?`<span class="nt-av">${av(a)}<i style="background:${c}">${ic(TM[t].i,11)}</i></span>`:`<span class="nt-o" style="--c:${c}">${ic(sn=='super'?'spark':TM[t].i,20)}</span>`;
 return `<a class="nt ${nw?'new':''}" href="${href}" style="--c:${c}"><span class="nt-sp"></span>${lead}<span class="nt-tx"><span>${txt}</span>${t=='comment'&&sn?`<small>${esc(sn.slice(0,90))}</small>`:''}</span><span class="nt-r"><time>${ago(x.t)}</time>${nw?'<em>NEW</em>':''}</span></a>`}
function paintPulse(){
 if(!isOpen())return;const q=s=>NS.open.querySelector(s),c=newCnt(),T=tot(c);
 q('#plr').innerHTML=ring(c);
 q('#pll').innerHTML=TY.map(t=>`<button type="button" class="pl-lg ${NS.f==t[0]?'on':''}" data-act="ptf" data-t="${t[0]}" aria-pressed="${NS.f==t[0]}" style="--c:${t[2]}">${ic(t[3],18)}<span>${t[1]}</span><b>${c[t[0]]}</b></button>`).join('');
 q('#plb').innerHTML=!NS.ok?'':T?`<div class="pl-ban"><i></i>${T} new since you last looked</div>`:'<div class="pl-ban calm">You\u2019re all caught up</div>';
 let rows=NS.rows;if(NS.f)rows=rows.filter(r=>r.type==NS.f);
 let h='',last='';
 if(!NS.ok)h=`<div class="pl-empty">${ic('shield',34)}<p><b>Notifications aren\u2019t set up yet.</b><br>Run <code>notifications.sql</code> in your Supabase SQL editor, then reopen this.</p><small class="mu">${esc(NS.err)}</small></div>`;
 else if(!rows.length)h=`<div class="pl-empty">${bell({follow:0,comment:0,react:0,star:0},'e')}<p><b>${NS.f?'Nothing here yet':'Quiet for now'}</b><br>Post something, follow people and join communities \u2014 activity shows up here live.</p><div class="row wrap" style="justify-content:center"><a class="chip" href="#/new">${ic('pen',16)} New post</a><a class="chip" href="#/c">${ic('people',16)} Communities</a></div></div>`;
 else group(rows).forEach(x=>{const hrs=(Date.now()-new Date(x.t))/36e5,b=hrs<24?'Today':hrs<168?'This week':'Earlier';if(b!=last){h+=`<h4 class="pl-day">${b}</h4>`;last=b}h+=row(x)});
 q('#pllist').innerHTML=h;
 const ok='Notification' in window,pm=ok&&Notification.permission,on=localStorage.rtPn==='1'&&pm==='granted';
 q('#plf').innerHTML=!ok?'':pm=='denied'?'<p class="mu pl-note">Phone alerts are blocked in your browser settings.</p>':`<button type="button" class="pl-sw ${on?'on':''}" data-act="ptphone" role="switch" aria-checked="${on}"><span class="pl-k"></span><span><b>Phone alerts</b><small>${on?'On \u2014 you\u2019ll get alerts while ReitTime is open or installed':'Get an alert when something new happens'}</small></span></button>`}
function openPulse(){
 if(isOpen()){closeSheet();return}
 const el=sheet(`<div class="pl-head"><h3>${ic('bell',22)} Pulse</h3><button type="button" class="chip" data-act="ptclear" aria-label="Clear all notifications">${ic('trash',16)} Clear</button></div><div class="pl-top"><div class="pl-ring" id="plr"></div><div class="pl-leg" id="pll" role="group" aria-label="Filter by type"></div></div><div id="plb"></div><div class="pl-list" id="pllist"></div><div class="pl-foot" id="plf"></div>`);
 el.classList.add('pulse');NS.open=el;NS.f=null;
 el.addEventListener('click',e=>{if(e.target.closest('.nt'))closeSheet()});
 requestAnimationFrame(()=>{paintPulse();load(false)});
 sb.from('notifications').delete().lt('created_at',new Date(Date.now()-45*864e5).toISOString()).then(()=>{},()=>{})}

/* ---------- views (batched, server-counted) ---------- */
const VQ=new Set(),VD=new Set();let vt=0;
window.qView=id=>{if(!me||VD.has(id)||(S.posts[id]&&S.posts[id].user_id===me.id))return;VD.add(id);VQ.add(id);clearTimeout(vt);vt=setTimeout(flush,6000)};
async function flush(){if(!VQ.size)return;const ids=[...VQ].slice(0,30);ids.forEach(i=>VQ.delete(i));try{await sb.rpc('track_views',{p_ids:ids.map(String)})}catch{}if(VQ.size)vt=setTimeout(flush,3000)}
addEventListener('pagehide',()=>{if(VQ.size)flush()});

window.ntBoot=()=>{
 if(NS.b)return;NS.b=1;
 Object.assign(acts,{
  notif(){openPulse()},
  ptf(d){NS.f=NS.f==d.t?null:d.t;paintPulse()},
  async ptclear(){if(!confirm('Clear all notifications?'))return;await sb.from('notifications').delete().eq('user_id',me.id);NS.rows=[];NS.nw=new Set();NS.cnt={follow:0,comment:0,react:0,star:0};paintBell();paintPulse()},
  async ptphone(){
   if(localStorage.rtPn==='1'&&Notification.permission==='granted'){localStorage.rtPn='0';paintPulse();return}
   try{const p=Notification.permission=='granted'?'granted':await Notification.requestPermission();if(p=='granted'){localStorage.rtPn='1';toast('Phone alerts on');phone('ReitTime','Alerts are on. You\u2019ll hear from us here.','#/','rt-test')}else toast('Alerts were not allowed')}catch{toast('Alerts not supported here')}paintPulse()}
 });
 paintBell();refresh();
 sb.channel('nt-'+me.id).on('postgres_changes',{event:'*',schema:'public',table:'notifications',filter:'user_id=eq.'+me.id},onRt).subscribe();
 setInterval(()=>{if(!document.hidden)refresh()},18e4);
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh()})};

/* ---------- Feed: tabs + Explore ---------- */
window.ftabs=()=>{const i=S.tab=='fol'?1:S.tab=='ex'?2:0;return `<div class="ftabs" style="--i:${i}" role="tablist"><button role="tab" aria-selected="${i==0}" class="${i==0?'on':''}" data-act="tab" data-t="fy">${ic('flame',18)}<span>For you</span></button><button role="tab" aria-selected="${i==1}" class="${i==1?'on':''}" data-act="tab" data-t="fol">${ic('people',18)}<span>Following</span></button><button role="tab" aria-selected="${i==2}" class="${i==2?'on':''}" data-act="tab" data-t="ex">${ic('compass',18)}<span>Explore</span></button></div>`};
const hue=s=>{let h=0;for(const ch of s)h=(h*31+ch.charCodeAt(0))%360;return h};
const sec=(i,t,x='')=>`<h3 class="sh2">${ic(i,20)} ${t}${x}</h3>`;
window.exploreHtml=async(ps,cs)=>{
 const now=Date.now(),others=ps.filter(p=>p.user_id!==me.id),age=p=>(now-new Date(p.created_at))/36e5;
 const sc=p=>((p.ups||0)-(p.downs||0)*1.2+2*(p.comments_count||0)+1.5*(p.star_n||0)+3*(p.super_n||0)+1)/Math.pow(age(p)+3,1.15);
 const tr=others.filter(p=>age(p)<96&&!p.publish_at).sort((a,b)=>sc(b)-sc(a)).slice(0,8);
 const snip=p=>{const t=strip(p.body);return t?esc(t.slice(0,110)):`<span class="mu">${p.poll?'Poll':'Scene post'}</span>`};
 const nm=p=>esc((p.author&&(p.author.display_name||p.author.username))||'user');
 const spot=tr.length?`<div class="ex-row">${tr.map((p,i)=>`<a class="ex-sp" href="#/p/${esc(p.id)}" style="--h:${(i*47+20)%360}"><span class="ex-rk">${i+1}</span><span class="ex-by">${av(p.author||{})}<b>${nm(p)}</b></span><span class="ex-bd">${snip(p)}</span><span class="ex-st"><span>${ic('up',14)}${nf(p.ups)}</span><span>${ic('chat',14)}${nf(p.comments_count)}</span><span>${ic('star',14)}${nf((p.star_n||0)+(p.super_n||0))}</span></span></a>`).join('')}</div>`:'<p class="mu">Nothing trending yet.</p>';
 const tc={};ps.filter(p=>age(p)<168).forEach(p=>(p.tags||[]).forEach(t=>tc[t]=(tc[t]||0)+1));const tg=Object.entries(tc).sort((a,b)=>b[1]-a[1]).slice(0,12),mx=tg.length?tg[0][1]:1;
 const tags=tg.length?`<div class="ex-tags">${tg.map(([t,n])=>`<a href="#/tag/${esc(t)}" style="--h:${hue(t)}"><b>#${esc(t)}</b><i style="width:${Math.max(12,n/mx*100)}%"></i><small>${n}</small></a>`).join('')}</div>`:'';
 const cm=(cs||[]).filter(c=>!S.joined.has(c.id)).slice(0,6);
 const comm=cm.length?`<div class="ex-cm">${cm.map(c=>`<div class="ex-c" style="--h:${hue(c.slug)}"><a href="#/c/${esc(c.slug)}"><span class="ex-ci">${esc((c.name||'?').slice(0,1).toUpperCase())}</span><span><b>${esc(c.name)}</b><small>${esc((c.description||'').slice(0,60))}</small></span></a><button class="chip" data-act="join" data-id="${c.id}">${ic('plus',14)} Join</button></div>`).join('')}</div>`:'';
 const seenA=new Set(),fresh=others.filter(p=>age(p)<48&&!S.fol.has(p.user_id)&&!p.publish_at).filter(p=>!seenA.has(p.user_id)&&seenA.add(p.user_id)).slice(0,4);
 const fr=fresh.length?`<div class="ex-fr">${fresh.map(p=>`<a href="#/p/${esc(p.id)}">${av(p.author||{})}<span><b>${nm(p)}</b><small>${snip(p)}</small></span><time>${ago(p.created_at)}</time></a>`).join('')}</div>`:'';
 let ppl='';try{ppl=await sugUsers(ps)}catch{}
 const more=rank(ps.filter(p=>!touched(p)&&p.user_id!==me.id)).slice(0,10);
 return `<div class="ex">${sec('trend','Trending now')}${spot}${tags?sec('tag','Hot tags this week')+tags:''}${ppl?sec('people','People worth following')+`<div class="ex-pp">${ppl}</div>`:''}${comm?sec('globe','Communities to try')+comm:''}${fr?sec('spark','Fresh voices')+fr:''}${more.length?sec('flame','Picked for you')+more.map(postCard).join(''):''}</div>`};

/* ---------- Post analytics ---------- */
const SD={days:30,m:'v',sort:'e',all:0,c:{}};
const MC={v:['Views','#2f8cff'],s:['Stars','#f2b01e'],c:['Comments','#1fb868']};
const hr=h=>h==0?'12 AM':h<12?h+' AM':h==12?'12 PM':(h-12)+' PM';
const dl=(a,b)=>{if(!b)return a?'<em class="sa-d up">New</em>':'';const p=Math.round((a-b)/b*100);return `<em class="sa-d ${p>=0?'up':'dn'}"><svg viewBox="0 0 10 10" width="9" height="9" aria-hidden="true"><path d="${p>=0?'M5 1l4 6H1z':'M5 9L1 3h8z'}" fill="currentColor"/></svg>${Math.abs(p)}%</em>`};
window.statsPg=async()=>{
 let d=SD.c[SD.days];
 if(!d||Date.now()-d.t>6e4){
  const [r,p]=await Promise.all([sb.rpc('my_analytics',{p_days:SD.days}),sb.from('posts').select('id,body,created_at,tags,poll,scene'+ZP).eq('user_id',me.id).order('created_at',{ascending:false}).limit(60)]);
  if(r.error||!r.data){A.innerHTML=`<div class="card sa-empty">${ic('chart',40)}<h3>Analytics isn\u2019t set up yet</h3><p class="mu">Run <code>notifications.sql</code> in your Supabase SQL editor, then come back.</p></div>`;return}
  await zfix(p.data);d=SD.c[SD.days]={t:Date.now(),a:r.data,p:p.data||[]}}
 drawStats(d)};
function drawStats(d){
 const a=d.a,T=a.tot,pm={};d.p.forEach(p=>pm[p.id]=p);
 const lab=p=>{if(!p)return 'Deleted post';const t=strip(p.body);return t?t.slice(0,80):p.poll?'Poll':'Scene post'};
 const eng=x=>(x.s-x.ss)+x.ss*3+x.c*2+(x.u||0);
 const kp=(l,v,p,i,col)=>`<div class="sa-k" style="--c:${col}"><span>${ic(i,16)} ${l}</span><b>${nf(v)}</b>${p==null?'':dl(v,p)}</div>`;
 const rate=T.v?Math.round((T.s+T.c)/T.v*1000)/10:0;
 const m=SD.m,col=MC[m][1],dy=a.daily||[];
 const W=320,H=132,pad=6,bw=(W-pad*2)/Math.max(1,dy.length),mx=Math.max(1,...dy.map(x=>x[m]));
 const bars=dy.map((x,i)=>{const h=Math.max(x[m]?3:1,x[m]/mx*(H-30));return `<rect x="${(pad+i*bw+bw*.14).toFixed(1)}" y="${(H-16-h).toFixed(1)}" width="${(bw*.72).toFixed(1)}" height="${h.toFixed(1)}" rx="${Math.min(3,bw*.3).toFixed(1)}" fill="${col}" opacity="${x[m]?1:.16}"/>`}).join('');
 const dt=s=>new Date(s+'T00:00').toLocaleDateString(undefined,{month:'short',day:'numeric'});
 const chart=`<svg id="sac" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="${MC[m][0]} per day"><line x1="0" x2="${W}" y1="${H-16}" y2="${H-16}" stroke="currentColor" opacity=".12"/><line x1="0" x2="${W}" y1="${(H-16)/2+6}" y2="${(H-16)/2+6}" stroke="currentColor" opacity=".06" stroke-dasharray="3 4"/>${bars}<text x="2" y="${H-3}" font-size="9" fill="currentColor" opacity=".5">${dy.length?dt(dy[0].d):''}</text><text x="${W-2}" y="${H-3}" font-size="9" text-anchor="end" fill="currentColor" opacity=".5">${dy.length?dt(dy[dy.length-1].d):''}</text><text x="2" y="10" font-size="9" fill="currentColor" opacity=".5">${nf(mx)}</text></svg>`;
 const off=-Math.round(new Date().getTimezoneOffset()/60),hrs=Array(24).fill(0);(a.hours||[]).forEach(x=>hrs[((x.h+off)%24+24)%24]+=x.n);
 const hm=Math.max(...hrs),top3=[...hrs.keys()].sort((x,y)=>hrs[y]-hrs[x]).slice(0,3),pk=hm?top3[0]:-1;
 const hours=`<div class="sa-hrs" role="img" aria-label="Views by hour of day">${hrs.map((n,i)=>`<i class="${hm&&top3.includes(i)&&n?'hot':''}" style="height:${hm?Math.max(6,n/hm*100):6}%" title="${hr(i)}: ${n}"></i>`).join('')}</div><div class="sa-hl"><span>12 AM</span><span>6 AM</span><span>12 PM</span><span>6 PM</span></div>`;
 const rows=(a.posts||[]).map(x=>({...x,e:eng(x),r:x.v?(x.s+x.c)/x.v:0,p:pm[x.id]}));
 rows.sort((x,y)=>SD.sort=='r'?y.r-x.r:y[SD.sort]-x[SD.sort]);
 const sh=SD.all?rows:rows.slice(0,6),rm=Math.max(1,...rows.map(x=>x.v)),
  list=sh.map((x,i)=>`<a class="sa-p" href="#/p/${esc(x.id)}"><span class="sa-n">${i+1}</span><span class="sa-pb"><b>${esc(lab(x.p))}</b><small>${x.p?new Date(x.p.created_at).toLocaleDateString(undefined,{month:'short',day:'numeric'}):''}</small><i style="width:${Math.max(3,x.v/rm*100)}%"></i></span><span class="sa-m"><span title="Views">${ic('eye',13)}${nf(x.v)}</span><span title="Stars">${ic('star',13)}${nf(x.s)}</span><span title="Comments">${ic('chat',13)}${nf(x.c)}</span></span></a>`).join('');
 const tg={};rows.forEach(x=>{const ts=x.p?(x.p.tags&&x.p.tags.length?x.p.tags:tagsOf(x.p.body||'')):[];ts.forEach(t=>{const o=tg[t]=tg[t]||{n:0,e:0};o.n++;o.e+=x.e})});
 const tags=Object.entries(tg).filter(e=>e[1].n>=1).map(([t,o])=>[t,o.e/o.n,o.n]).sort((x,y)=>y[1]-x[1]).slice(0,6);
 const bestDay=dy.reduce((b,x)=>x.v>(b?b.v:-1)?x:b,null),bp=[...rows].sort((x,y)=>y.e-x.e)[0];
 const ins=[];if(bestDay&&bestDay.v)ins.push(`Your best day was <b>${dt(bestDay.d)}</b> with ${nf(bestDay.v)} views.`);if(pk>=0)ins.push(`People look most around <b>${hr(pk)}</b>. Post a little before it.`);if(bp&&bp.e)ins.push(`Top post: <b>\u201c${esc(lab(bp.p).slice(0,40))}\u201d</b>.`);
 const none=!rows.length;
 A.innerHTML=`<div class="sa"><div class="sa-hd"><h2>${ic('chart',24)} Post analytics</h2><div class="sa-rng" role="group" aria-label="Date range">${[7,30,90].map(n=>`<button type="button" class="${SD.days==n?'on':''}" data-act="stdays" data-d="${n}">${n}d</button>`).join('')}</div></div>
 ${none?`<div class="card sa-empty">${ic('chart',40)}<h3>No posts yet</h3><p class="mu">Post something and your numbers will start appearing here.</p><a class="btn" href="#/new">${ic('pen',18)} New post</a></div>`:`
 <div class="sa-kp">${kp('Views',T.v,T.pv,'eye','#2f8cff')}${kp('Viewers',T.uv,null,'people','#8a5cf6')}${kp('Stars',T.s,T.ps,'star','#f2b01e')}${kp('Comments',T.c,T.pc,'chat','#1fb868')}<div class="sa-k" style="--c:#ff8a1f"><span>${ic('trend',16)} Engagement</span><b>${rate}%</b><small>stars + comments per view</small></div><div class="sa-k" style="--c:#2fd07a"><span>${ic('follow',16)} Followers</span><b>${nf(a.followers)}</b><small>total</small></div></div>
 ${ins.length?`<div class="sa-in">${ic('spark',18)}<div>${ins.map(t=>`<p>${t}</p>`).join('')}</div></div>`:''}
 <div class="card sa-c"><div class="sa-ct"><b>Daily</b><div class="sa-rng sm">${Object.entries(MC).map(([k,v])=>`<button type="button" class="${m==k?'on':''}" data-act="stm" data-m="${k}" style="--c:${v[1]}">${v[0]}</button>`).join('')}</div></div><div class="sa-ro" id="sar">Tap a bar for details</div><div class="sa-ch">${chart}</div></div>
 <div class="card sa-c"><div class="sa-ct"><b>Best time to post</b></div>${hm?hours:'<p class="mu">Needs a few views first. They count when someone spends a moment on your post.</p>'}</div>
 <div class="card sa-c"><div class="sa-ct"><b>Your posts</b><div class="sa-rng sm">${[['e','Best'],['v','Views'],['s','Stars'],['c','Comments'],['r','Rate']].map(([k,l])=>`<button type="button" class="${SD.sort==k?'on':''}" data-act="stsort" data-k="${k}">${l}</button>`).join('')}</div></div>${list}${rows.length>6?`<button type="button" class="chip sa-more" data-act="stall">${SD.all?'Show less':`Show all ${rows.length}`}</button>`:''}</div>
 ${tags.length?`<div class="card sa-c"><div class="sa-ct"><b>Topics that work</b><small class="mu">avg. engagement per post</small></div><div class="sa-tg">${tags.map(([t,v,n])=>`<a href="#/tag/${esc(t)}" style="--h:${hue(t)}">#${esc(t)}<b>${v.toFixed(1)}</b><small>${n} post${n>1?'s':''}</small></a>`).join('')}</div></div>`:''}
 ${(a.fans||[]).length?`<div class="card sa-c"><div class="sa-ct"><b>Top commenters</b></div>${a.fans.map(f=>`<a class="sa-f" href="#/u/${esc(f.u)}"><b>@${esc(f.u)}</b><span>${f.n} comment${f.n>1?'s':''}</span></a>`).join('')}</div>`:''}
 <p class="mu sa-ft">${ic('shield',14)} Counted by the server. Nobody, including you, can edit these numbers. A view is one person on one post per day. Per-post numbers are lifetime; the cards above use the selected range.</p>`}</div>`;
 const sv=$('#sac');if(sv){const ro=$('#sar'),go=e=>{const r=sv.getBoundingClientRect(),i=Math.min(dy.length-1,Math.max(0,Math.floor((e.clientX-r.left)/r.width*dy.length))),x=dy[i];if(x)ro.innerHTML=`<b>${dt(x.d)}</b> \u00b7 ${x[m]} ${MC[m][0].toLowerCase()}`};sv.addEventListener('pointerdown',go);sv.addEventListener('pointermove',e=>{if(e.pressure>0)go(e)})}}
window.addEventListener('DOMContentLoaded',()=>{});
const _ext=()=>{if(window.__saActs)return;window.__saActs=1;Object.assign(acts,{stdays(d){SD.days=+d.d;statsPg()},stm(d){SD.m=d.m;drawStats(SD.c[SD.days])},stsort(d){SD.sort=d.k;drawStats(SD.c[SD.days])},stall(){SD.all=SD.all?0:1;drawStats(SD.c[SD.days])}})};
const _nb=window.ntBoot;window.ntBoot=()=>{_ext();_nb()};
})();
