import{P as b,S as pr,k as $,F as Dn,l as h,T as Ui,U as Hi,V as Fn,X as Bi,Y as $n,G as gr,Z as Yi,$ as Wi,J as Dt,a0 as Gi,a1 as br,H as hr,a2 as yr,a3 as qi,a4 as Xi,a5 as Ki,a6 as Qi,a7 as Zi,a8 as Ji,a9 as es,aa as ts,ab as ns,ac as as,ad as xr,ae as Z,f as va,t as rs,af as is,e as Te,ag as Re,ah as Me,ai as ss,b as dn,aj as os,M as ls,d as cs,ak as pa,p as Kt,al as fs,r as J,g as us,i as ds,h as ms,j as wr,R as U,x as it,C as Ze,am as vs,B as ga,n as mn,O as ba,N as ps,an as gs,ao as bs,ap as hs,aq as ys,ar as xs}from"./index.43cffa05.js";import{r as Ft,t as re,a as je,b as ws,c as vn,s as ks,e as kr,_ as As,f as Ss,A as Vn,E as pn,d as Ar,g as dt,u as Sr,S as Es,h as Os,i as Ns,j as Er,k as Xe,l as Qt,D as Ts,m as _s}from"./index.8edd8fc5.js";function At(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?At=function(n){return typeof n}:At=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},At(e)}function ha(e,t){if(Ft(2,arguments),!t||At(t)!=="object")return new Date(NaN);var n=t.years?re(t.years):0,a=t.months?re(t.months):0,r=t.weeks?re(t.weeks):0,i=t.days?re(t.days):0,s=t.hours?re(t.hours):0,o=t.minutes?re(t.minutes):0,l=t.seconds?re(t.seconds):0,u=je(e),d=a||n?ws(u,a+n*12):u,p=i||r?vn(d,i+r*7):d,v=o+s*60,k=l+v*60,T=k*1e3,R=new Date(p.getTime()+T);return R}function Cs(e){Ft(1,arguments);var t=je(e);return t.setHours(23,59,59,999),t}function Is(e,t){var n;Ft(1,arguments);var a=e||{},r=je(a.start),i=je(a.end),s=i.getTime();if(!(r.getTime()<=s))throw new RangeError("Invalid interval");var o=[],l=r;l.setHours(0,0,0,0);var u=Number((n=t==null?void 0:t.step)!==null&&n!==void 0?n:1);if(u<1||isNaN(u))throw new RangeError("`options.step` must be a number greater than 1");for(;l.getTime()<=s;)o.push(je(l)),l.setDate(l.getDate()+u),l.setHours(0,0,0,0);return o}function Ps(){return Cs(Date.now())}function St(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?St=function(n){return typeof n}:St=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},St(e)}function Rs(e,t){if(Ft(2,arguments),St(t)!=="object"||t===null)throw new RangeError("values parameter must be an object");var n=je(e);return isNaN(n.getTime())?new Date(NaN):(t.year!=null&&n.setFullYear(t.year),t.month!=null&&(n=ks(n,t.month)),t.date!=null&&n.setDate(re(t.date)),t.hours!=null&&n.setHours(re(t.hours)),t.minutes!=null&&n.setMinutes(re(t.minutes)),t.seconds!=null&&n.setSeconds(re(t.seconds)),t.milliseconds!=null&&n.setMilliseconds(re(t.milliseconds)),n)}function Ms(){return kr(Date.now())}const Or=e=>Boolean(typeof e=="string"?e==null?void 0:e.trim():e),zn=({base:e,children:t,notFound:n,routes:a})=>{const r=pr(),i=Boolean(r({fuzzy:!1,to:e})),s=a.find(o=>r({fuzzy:o.fuzzy===!0,to:[e,o.path].filter(Or).join("/")}));return i||s?$(Dn,{children:[t,s==null?void 0:s.element]}):n};zn.propTypes={base:b.string.isRequired,children:b.node,notFound:b.node,routes:b.arrayOf(b.shape({element:b.node.isRequired,fuzzy:b.bool,path:b.string.isRequired})).isRequired};zn.defaultProps={children:null,notFound:h(Ui,{})};const Ls="TRAINING_PLAN";function Ds(e,t,n){var a=-1,r=e.length;t<0&&(t=-t>r?0:r+t),n=n>r?r:n,n<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(r);++a<r;)i[a]=e[a+t];return i}var Fs=Ds,$s=Fs;function Vs(e,t,n){var a=e.length;return n=n===void 0?a:n,!t&&n>=a?e:$s(e,t,n)}var Nr=Vs;function zs(e,t,n,a){for(var r=e.length,i=n+(a?1:-1);a?i--:++i<r;)if(t(e[i],i,e))return i;return-1}var js=zs;function Us(e){return e!==e}var Hs=Us;function Bs(e,t,n){for(var a=n-1,r=e.length;++a<r;)if(e[a]===t)return a;return-1}var Ys=Bs,Ws=js,Gs=Hs,qs=Ys;function Xs(e,t,n){return t===t?qs(e,t,n):Ws(e,Gs,n)}var Tr=Xs,Ks=Tr;function Qs(e,t){for(var n=e.length;n--&&Ks(t,e[n],0)>-1;);return n}var Zs=Qs,Js=Tr;function eo(e,t){for(var n=-1,a=e.length;++n<a&&Js(t,e[n],0)>-1;);return n}var to=eo;function no(e){return e.split("")}var ao=no,ro="\\ud800-\\udfff",io="\\u0300-\\u036f",so="\\ufe20-\\ufe2f",oo="\\u20d0-\\u20ff",lo=io+so+oo,co="\\ufe0e\\ufe0f",fo="\\u200d",uo=RegExp("["+fo+ro+lo+co+"]");function mo(e){return uo.test(e)}var _r=mo,Cr="\\ud800-\\udfff",vo="\\u0300-\\u036f",po="\\ufe20-\\ufe2f",go="\\u20d0-\\u20ff",bo=vo+po+go,ho="\\ufe0e\\ufe0f",yo="["+Cr+"]",gn="["+bo+"]",bn="\\ud83c[\\udffb-\\udfff]",xo="(?:"+gn+"|"+bn+")",Ir="[^"+Cr+"]",Pr="(?:\\ud83c[\\udde6-\\uddff]){2}",Rr="[\\ud800-\\udbff][\\udc00-\\udfff]",wo="\\u200d",Mr=xo+"?",Lr="["+ho+"]?",ko="(?:"+wo+"(?:"+[Ir,Pr,Rr].join("|")+")"+Lr+Mr+")*",Ao=Lr+Mr+ko,So="(?:"+[Ir+gn+"?",gn,Pr,Rr,yo].join("|")+")",Eo=RegExp(bn+"(?="+bn+")|"+So+Ao,"g");function Oo(e){return e.match(Eo)||[]}var No=Oo,To=ao,_o=_r,Co=No;function Io(e){return _o(e)?Co(e):To(e)}var Dr=Io,Po=Hi,Ro=As,Mo=Nr,Lo=Zs,Do=to,ya=Dr,Fo=Fn;function $o(e,t,n){if(e=Fo(e),e&&(n||t===void 0))return Ro(e);if(!e||!(t=Po(t)))return e;var a=ya(e),r=ya(t),i=Do(a,r),s=Lo(a,r)+1;return Mo(a,i,s).join("")}var Vo=$o;const zo=e=>Array.isArray(e)?e:e.split("."),jo=e=>{const t=zo(e);try{const{paths:n}=t.reduce((a,r)=>{const i=a.currentLevel.find(s=>s.id===r);return{currentLevel:i.children,paths:[...a.paths,i.path]}},{currentLevel:Bi,paths:[]});return`/${n.map(a=>Vo(a,"/")).filter(Or).join("/")}`}catch{return null}};var Uo=$n,Ho=gr;function Bo(e,t,n){(n!==void 0&&!Ho(e[t],n)||n===void 0&&!(t in e))&&Uo(e,t,n)}var Fr=Bo,hn={exports:{}};(function(e,t){var n=Yi,a=t&&!t.nodeType&&t,r=a&&!0&&e&&!e.nodeType&&e,i=r&&r.exports===a,s=i?n.Buffer:void 0,o=s?s.allocUnsafe:void 0;function l(u,d){if(d)return u.slice();var p=u.length,v=o?o(p):new u.constructor(p);return u.copy(v),v}e.exports=l})(hn,hn.exports);var xa=Wi;function Yo(e){var t=new e.constructor(e.byteLength);return new xa(t).set(new xa(e)),t}var Wo=Yo,Go=Wo;function qo(e,t){var n=t?Go(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var Xo=qo;function Ko(e,t){var n=-1,a=e.length;for(t||(t=Array(a));++n<a;)t[n]=e[n];return t}var Qo=Ko,Zo=Dt,wa=Object.create,Jo=function(){function e(){}return function(t){if(!Zo(t))return{};if(wa)return wa(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),el=Jo,tl=Gi,nl=tl(Object.getPrototypeOf,Object),$r=nl,al=el,rl=$r,il=br;function sl(e){return typeof e.constructor=="function"&&!il(e)?al(rl(e)):{}}var ol=sl,ll=hr,cl=yr;function fl(e){return cl(e)&&ll(e)}var ul=fl,dl=qi,ml=$r,vl=yr,pl="[object Object]",gl=Function.prototype,bl=Object.prototype,Vr=gl.toString,hl=bl.hasOwnProperty,yl=Vr.call(Object);function xl(e){if(!vl(e)||dl(e)!=pl)return!1;var t=ml(e);if(t===null)return!0;var n=hl.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&Vr.call(n)==yl}var wl=xl;function kl(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var zr=kl,Al=$n,Sl=gr,El=Object.prototype,Ol=El.hasOwnProperty;function Nl(e,t,n){var a=e[t];(!(Ol.call(e,t)&&Sl(a,n))||n===void 0&&!(t in e))&&Al(e,t,n)}var Tl=Nl,_l=Tl,Cl=$n;function Il(e,t,n,a){var r=!n;n||(n={});for(var i=-1,s=t.length;++i<s;){var o=t[i],l=a?a(n[o],e[o],o,n,e):void 0;l===void 0&&(l=e[o]),r?Cl(n,o,l):_l(n,o,l)}return n}var Pl=Il;function Rl(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var Ml=Rl,Ll=Dt,Dl=br,Fl=Ml,$l=Object.prototype,Vl=$l.hasOwnProperty;function zl(e){if(!Ll(e))return Fl(e);var t=Dl(e),n=[];for(var a in e)a=="constructor"&&(t||!Vl.call(e,a))||n.push(a);return n}var jl=zl,Ul=Xi,Hl=jl,Bl=hr;function Yl(e){return Bl(e)?Ul(e,!0):Hl(e)}var jr=Yl,Wl=Pl,Gl=jr;function ql(e){return Wl(e,Gl(e))}var Xl=ql,ka=Fr,Kl=hn.exports,Ql=Xo,Zl=Qo,Jl=ol,Aa=Ki,Sa=Qi,ec=ul,tc=Zi.exports,nc=Ji,ac=Dt,rc=wl,ic=es,Ea=zr,sc=Xl;function oc(e,t,n,a,r,i,s){var o=Ea(e,n),l=Ea(t,n),u=s.get(l);if(u){ka(e,n,u);return}var d=i?i(o,l,n+"",e,t,s):void 0,p=d===void 0;if(p){var v=Sa(l),k=!v&&tc(l),T=!v&&!k&&ic(l);d=l,v||k||T?Sa(o)?d=o:ec(o)?d=Zl(o):k?(p=!1,d=Kl(l,!0)):T?(p=!1,d=Ql(l,!0)):d=[]:rc(l)||Aa(l)?(d=o,Aa(o)?d=sc(o):(!ac(o)||nc(o))&&(d=Jl(l))):p=!1}p&&(s.set(l,d),r(d,l,a,i,s),s.delete(l)),ka(e,n,d)}var lc=oc,cc=ts,fc=Fr,uc=ns,dc=lc,mc=Dt,vc=jr,pc=zr;function Ur(e,t,n,a,r){e!==t&&uc(t,function(i,s){if(r||(r=new cc),mc(i))dc(e,t,s,n,Ur,a,r);else{var o=a?a(pc(e,s),i,s+"",e,t,r):void 0;o===void 0&&(o=i),fc(e,s,o)}},vc)}var gc=Ur;function bc(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var hc=bc,yc=hc,Oa=Math.max;function xc(e,t,n){return t=Oa(t===void 0?e.length-1:t,0),function(){for(var a=arguments,r=-1,i=Oa(a.length-t,0),s=Array(i);++r<i;)s[r]=a[t+r];r=-1;for(var o=Array(t+1);++r<t;)o[r]=a[r];return o[t]=n(s),yc(e,this,o)}}var wc=xc;function kc(e){return function(){return e}}var Ac=kc,Sc=Ac,Na=as,Ec=xr,Oc=Na?function(e,t){return Na(e,"toString",{configurable:!0,enumerable:!1,value:Sc(t),writable:!0})}:Ec,Nc=Oc,Tc=800,_c=16,Cc=Date.now;function Ic(e){var t=0,n=0;return function(){var a=Cc(),r=_c-(a-n);if(n=a,r>0){if(++t>=Tc)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var Pc=Ic,Rc=Nc,Mc=Pc,Lc=Mc(Rc),Dc=Lc,Fc=xr,$c=wc,Vc=Dc;function zc(e,t){return Vc($c(e,t,Fc),e+"")}var jc=zc,Uc=jc,Hc=Ss;function Bc(e){return Uc(function(t,n){var a=-1,r=n.length,i=r>1?n[r-1]:void 0,s=r>2?n[2]:void 0;for(i=e.length>3&&typeof i=="function"?(r--,i):void 0,s&&Hc(n[0],n[1],s)&&(i=r<3?void 0:i,r=1),t=Object(t);++a<r;){var o=n[a];o&&e(t,o,a,i)}return t})}var Yc=Bc,Wc=gc,Gc=Yc,qc=Gc(function(e,t,n){Wc(e,t,n)}),Xc=qc,Kc=Nr,Qc=_r,Zc=Dr,Jc=Fn;function ef(e){return function(t){t=Jc(t);var n=Qc(t)?Zc(t):void 0,a=n?n[0]:t.charAt(0),r=n?Kc(n,1).join(""):t.slice(1);return a[e]()+r}}var tf=ef,nf=tf,af=nf("toUpperCase"),rf=af,sf=Fn,of=rf;function lf(e){return of(sf(e).toLowerCase())}var cf=lf;const ff={IMAGE:"image",TEXT:"text",VIDEO:"video"},uf=Object.values(ff),df=e=>e.map(t=>t.id),mf=e=>e.reduce((t,n)=>({...t,[n.id]:n}),{}),Ta=["COVID-Testung","ITP"],Zt={max:5,min:2},vf=e=>{switch(e){case pn.AWAY_GAME:return cf(Z.lorem.words(Math.round(Math.random()*(Zt.max-Zt.min))+Zt.min));case pn.OTHER:return Ta[Math.floor(Math.random()*Ta.length)];default:return null}},pf=2,Jt={max:15,min:3},gf=()=>Math.random()>pf?null:`Optional: ${Z.lorem.words(Math.round(Math.random()*(Jt.max-Jt.min))+Jt.min)}`,bf=5,hf=()=>`P${Math.ceil(Math.random()*bf)}`,yf=()=>({type:Z.helpers.arrayElement(uf)}),Hr=()=>Array.from({length:Z.datatype.number({max:5,min:0})},yf),xf=()=>({description:Z.lorem.sentence(),duration:Z.datatype.number({max:60,min:1}),files:Hr(),guestParticipantsCount:Z.datatype.number({max:20,min:0}),participantsCount:Z.datatype.number({max:20,min:1}),title:Z.random.words()}),wf=e=>e===pn.TRAINING?Array.from({length:Z.datatype.number({max:5,min:0})},xf):null,kf=.75,Af=10,Sf=({date:e,eventTypes:t=Vn,maxEvents:n=Af})=>{if(Math.random()>kf)return[];const a=Rs(e,{hours:6,minutes:0,seconds:0}),r=ha(a,{hours:12});return Z.date.betweens(a,r,Math.random()*n).map(i=>{const s=t[Math.floor(Math.random()*t.length)],o=gf(),l=hf(),u=Hr(),d=wf(s);return{endDate:Z.date.between(i,ha(i,{hours:4})).toISOString(),guestParticipantsCount:Z.datatype.number({max:20,min:0}),id:Z.datatype.uuid(),participantsCount:Z.datatype.number({max:20,min:1}),startDate:i.toISOString(),title:vf(s),type:s,...o&&{description:o},...l&&{location:l},...u&&{files:u},...d&&{exercises:d}}})},Ef=({filter:{startDate:e=Ms(),endDate:t=Ps()}={}})=>{const n=Is({end:t,start:e}).reduce((a,r)=>[...a,...Sf({date:r})],[]);return{entities:{events:mf(n)},result:{events:df(n)},meta:{rowCount:n.length}}},Of=300,Nf=(e={})=>new Promise(t=>{window.setTimeout(()=>{t(Ef(e))},Of)}),Tf=(e={},t="rowCount")=>{const{limit:n=0,offset:a=0,[t]:r=0}=e;return{hasNextPage:n+a<r,total:r}},_f=(e,t,...n)=>va(function*(){const r={};for(;;){const i=yield rs(e),{id:s}=i.payload;r[s]&&(yield is(r[s])),r[s]=yield va(t,...n.concat(i))}}),ie={FAILURE:"failure",IDLE:"idle",PENDING:"pending",SUCCESS:"success"};Object.values(ie);const Cf=({scope:e,type:t})=>{const n=`${e}/${t}`,a=Te(`${n}/${ie.PENDING}`);return a.fulfilled=Te(`${n}/${ie.SUCCESS}`),a.rejected=Te(`${n}/${ie.FAILURE}`),a},en=(e,t)=>n=>n.type.startsWith(`${e}/`)&&n.type.endsWith(`/${t}`),If=Ar({errors:{},hasNextPageIds:[],networkStatus:{},queries:{},results:{},totals:{}}),Pf=(e=[],t=[])=>(n,a)=>{const{id:r}=a.payload;e.forEach(i=>{n[i].includes(r)&&n[i].splice(n[i].indexOf(r),1)}),t.forEach(i=>{delete n[i][r]})},Rf=({scope:e})=>{const t=Cf({scope:e,type:"load"}),n=Te(`${e}/setQuery`),a=Te(`${e}/insert`),r=Te(`${e}/remove`),i=Te(`${e}/reset`);return{insert:a,load:t,remove:r,reset:i,setQuery:n}},Mf=({arrayFields:e=[],builder:t,scope:n,objectFields:a=[]})=>{t.addCase(`${n}/setQuery`,(r,i)=>{const{id:s,query:o}=i.payload;r.queries[s]=o.trim()}).addCase(`${n}/remove`,(r,i)=>{const{id:s,result:o}=i.payload;r.results[s].splice(r.results[s].indexOf(o),1),r.totals[s]-=1}).addCase(`${n}/insert`,(r,i)=>{const{id:s,index:o,result:l}=i.payload;r.results[s].splice(o,0,l),r.totals[s]+=1}).addCase(`${n}/reset`,Pf(["hasNextPageIds",...e],["errors","networkStatus","queries","results","totals",...a])).addMatcher(en(n,ie.PENDING),(r,i)=>{const{id:s,offset:o}=i.payload;delete r.errors[s],r.networkStatus[s]=ie.PENDING,o===0&&(r.results[s]=[],r.hasNextPageIds.includes(s)&&r.hasNextPageIds.splice(r.hasNextPageIds.indexOf(s),1))}).addMatcher(en(n,ie.SUCCESS),(r,i)=>{var d;const{hasNextPage:s,id:o,result:l=[],total:u}=i.payload;r.networkStatus[o]=ie.SUCCESS,(d=r.results)[o]||(d[o]=[]),r.results[o].push(...l),r.totals[o]=u,!s&&r.hasNextPageIds.includes(o)&&r.hasNextPageIds.splice(r.hasNextPageIds.indexOf(o),1),s&&!r.hasNextPageIds.includes(o)&&r.hasNextPageIds.push(o)}).addMatcher(en(n,ie.FAILURE),(r,i)=>{const{error:s,id:o}=i.payload;r.errors[o]=s,r.networkStatus[o]=ie.FAILURE})},Lf=({initialState:e,scope:t})=>{const n=os(t,e);let a={selectErrors:Re(n,"errors"),selectHasNextPageIds:Re(n,"hasNextPageIds"),selectNetworkStatus:Re(n,"networkStatus"),selectQueries:Re(n,"queries"),selectResults:Re(n,"results"),selectTotals:Re(n,"totals")};const r=[];return a={...a,selectError:Me(a.selectErrors,null),selectHasNextPage:ss(a.selectHasNextPageIds),selectIsLoaded:dn(Me(a.selectNetworkStatus,null),i=>i===ie.SUCCESS),selectIsLoading:dn(Me(a.selectNetworkStatus,null),i=>i===ie.PENDING),selectQuery:Me(a.selectQueries,""),selectResult:Me(a.selectResults,r),selectTotal:Me(a.selectTotals)},a={...a,makeSelectError:()=>a.selectError,makeSelectHasNextPage:()=>a.selectHasNextPage,makeSelectIsLoaded:()=>a.selectIsLoaded,makeSelectIsLoading:()=>a.selectIsLoading,makeSelectQuery:()=>a.selectQuery,makeSelectResult:()=>a.selectResult,makeSelectTotal:()=>a.selectTotal},a},He="eventResults",Br=Ar({...If}),Df=Rf({scope:He}),Je={...Df},Yr=Lf({initialState:Br,scope:He}),Wr=dn(Yr.selectResult,ls.selectEventEntities,(e,t)=>e.map(n=>t[n])),Ff=()=>Wr,mt={...Yr,makeSelectResultEntities:Ff,selectResultEntities:Wr},$f=cs({extraReducers:e=>{Mf({builder:e,scope:He})},initialState:Br,name:He});var Vf={key:He,reducer:$f.reducer};const _a={page:{limit:1e3}};function zf({offset:e=0}){return Xc({},_a,{page:{..._a.page,offset:e}})}function*jf({payload:{id:e,offset:t}}){try{const n=yield pa(zf,{id:e,offset:t}),a=yield pa(Nf,n),{entities:r,meta:i,result:{events:s=[]}}=a,{hasNextPage:o,total:l}=Tf(i);yield Kt(Je.load.fulfilled({hasNextPage:o,id:e,result:s,total:l})),yield Kt(fs.entitiesLoaded({entities:r}))}catch(n){yield Kt(Je.load.rejected({error:n,id:e}))}}function*Uf(){yield _f(Je.load,jf)}var Hf={key:`${He}Saga`,saga:Uf};const Bf="default",Yf=e=>({error:dt(mt.makeSelectError,{id:e}),events:dt(mt.makeSelectResult,{id:e}),isLoading:dt(mt.makeSelectIsLoading,{id:e}),total:dt(mt.makeSelectTotal,{id:e})}),Wf=e=>{const t=Sr();return{onLoad:J.exports.useCallback((n=0)=>t(Je.load({id:e,offset:n})),[e]),onReset:J.exports.useCallback(()=>{t(Je.reset({id:e}))},[e])}},Gf=({id:e=Bf,shouldLoadOnMount:t=!1})=>{const n=Yf(e),a=Wf(e);return J.exports.useEffect(()=>(t&&a.onLoad(),()=>{a.onReset()}),[t]),[n,a]},qf=us(ms(Vf),ds(Hf))(()=>null),xe="pages.trainings-plan";var Xf=wr({pageTitle:{id:`${xe}.pageTitle`,defaultMessage:"Trainingsplan",description:"title of the page"},training:{id:`${xe}.training`,defaultMessage:"Training"},homeGame:{id:`${xe}.homeGame`,defaultMessage:"Heimspiel"},roadGame:{id:`${xe}.roadGame`,defaultMessage:"Ausw\xE4rtsspiel"},other:{id:`${xe}.other`,defaultMessage:"Sonstiges"},tournament:{id:`${xe}.tournament`,defaultMessage:"Turnier"},exercises:{id:`${xe}.exercises`,defaultMessage:"\xDCbungen"},loadingError:{id:`${xe}.loadingError`,defaultMessage:"Was not able to load events. Try again later."}}),st=e=>e.type==="checkbox",De=e=>e instanceof Date,X=e=>e==null;const Gr=e=>typeof e=="object";var K=e=>!X(e)&&!Array.isArray(e)&&Gr(e)&&!De(e),Kf=e=>K(e)&&e.target?st(e.target)?e.target.checked:e.target.value:e,Qf=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Zf=(e,t)=>e.has(Qf(t)),$t=e=>Array.isArray(e)?e.filter(Boolean):[],Y=e=>e===void 0,A=(e,t,n)=>{if(!t||!K(e))return n;const a=$t(t.split(/[,[\].]+?/)).reduce((r,i)=>X(r)?r:r[i],e);return Y(a)||a===e?Y(e[t])?n:e[t]:a};const Ca={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ce={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ve={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Jf=U.createContext(null),eu=e=>{const{children:t,...n}=e;return U.createElement(Jf.Provider,{value:n},t)};var tu=(e,t,n,a=!0)=>{const r={};for(const i in e)Object.defineProperty(r,i,{get:()=>{const s=i;return t[s]!==ce.all&&(t[s]=!a||ce.all),n&&(n[s]=!0),e[s]}});return r},ae=e=>K(e)&&!Object.keys(e).length,nu=(e,t,n)=>{const{name:a,...r}=e;return ae(r)||Object.keys(r).length>=Object.keys(t).length||Object.keys(r).find(i=>t[i]===(!n||ce.all))},tn=e=>Array.isArray(e)?e:[e];function au(e){const t=U.useRef(e);t.current=e,U.useEffect(()=>{const n=r=>{r&&r.unsubscribe()},a=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>n(a)},[e.disabled])}var de=e=>typeof e=="string",ru=(e,t,n,a)=>{const r=Array.isArray(e);return de(e)?(a&&t.watch.add(e),A(n,e)):r?e.map(i=>(a&&t.watch.add(i),A(n,i))):(a&&(t.watchAll=!0),n)},Vt=e=>typeof e=="function",qr=e=>{for(const t in e)if(Vt(e[t]))return!0;return!1},iu=(e,t,n,a,r)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[a]:r||!0}}:{},jn=e=>/^\w*$/.test(e),Xr=e=>$t(e.replace(/["|']|\]/g,"").split(/\.|\[/));function V(e,t,n){let a=-1;const r=jn(t)?[t]:Xr(t),i=r.length,s=i-1;for(;++a<i;){const o=r[a];let l=n;if(a!==s){const u=e[o];l=K(u)||Array.isArray(u)?u:isNaN(+r[a+1])?{}:[]}e[o]=l,e=e[o]}return e}const yn=(e,t,n)=>{for(const a of n||Object.keys(e)){const r=A(e,a);if(r){const{_f:i,...s}=r;if(i&&t(i.name)){if(i.ref.focus&&Y(i.ref.focus()))break;if(i.refs){i.refs[0].focus();break}}else K(s)&&yn(s,t)}}};var Ia=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length)))),xn=typeof window!="undefined"&&typeof window.HTMLElement!="undefined"&&typeof document!="undefined";function Oe(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(xn&&(e instanceof Blob||e instanceof FileList))&&(n||K(e))){t=n?[]:{};for(const a in e){if(Vt(e[a])){t=e;break}t[a]=Oe(e[a])}}else return e;return t}function su(e,t){const n=t.slice(0,-1).length;let a=0;for(;a<n;)e=Y(e)?a++:e[t[a++]];return e}function Q(e,t){const n=jn(t)?[t]:Xr(t),a=n.length==1?e:su(e,n),r=n[n.length-1];let i;a&&delete a[r];for(let s=0;s<n.slice(0,-1).length;s++){let o=-1,l;const u=n.slice(0,-(s+1)),d=u.length-1;for(s>0&&(i=e);++o<u.length;){const p=u[o];l=l?l[p]:e[p],d===o&&(K(l)&&ae(l)||Array.isArray(l)&&!l.filter(v=>!Y(v)).length)&&(i?delete i[p]:delete e[p]),i=l}}return e}function nn(){let e=[];return{get observers(){return e},next:r=>{for(const i of e)i.next(r)},subscribe:r=>(e.push(r),{unsubscribe:()=>{e=e.filter(i=>i!==r)}}),unsubscribe:()=>{e=[]}}}var Tt=e=>X(e)||!Gr(e);function Fe(e,t){if(Tt(e)||Tt(t))return e===t;if(De(e)&&De(t))return e.getTime()===t.getTime();const n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(const r of n){const i=e[r];if(!a.includes(r))return!1;if(r!=="ref"){const s=t[r];if(De(i)&&De(s)||K(i)&&K(s)||Array.isArray(i)&&Array.isArray(s)?!Fe(i,s):i!==s)return!1}}return!0}var Pa=e=>({isOnSubmit:!e||e===ce.onSubmit,isOnBlur:e===ce.onBlur,isOnChange:e===ce.onChange,isOnAll:e===ce.all,isOnTouch:e===ce.onTouched}),_t=e=>typeof e=="boolean",Un=e=>e.type==="file",wn=e=>{const t=e?e.ownerDocument:0,n=t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement;return e instanceof n},Kr=e=>e.type==="select-multiple",Hn=e=>e.type==="radio",ou=e=>Hn(e)||st(e),an=e=>wn(e)&&e.isConnected;function Ct(e,t={}){const n=Array.isArray(e);if(K(e)||n)for(const a in e)Array.isArray(e[a])||K(e[a])&&!qr(e[a])?(t[a]=Array.isArray(e[a])?[]:{},Ct(e[a],t[a])):X(e[a])||(t[a]=!0);return t}function Qr(e,t,n){const a=Array.isArray(e);if(K(e)||a)for(const r in e)Array.isArray(e[r])||K(e[r])&&!qr(e[r])?Y(t)||Tt(n[r])?n[r]=Array.isArray(e[r])?Ct(e[r],[]):{...Ct(e[r])}:Qr(e[r],X(t)?{}:t[r],n[r]):n[r]=!Fe(e[r],t[r]);return n}var rn=(e,t)=>Qr(e,t,Ct(t));const Ra={value:!1,isValid:!1},Ma={value:!0,isValid:!0};var Zr=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Y(e[0].attributes.value)?Y(e[0].value)||e[0].value===""?Ma:{value:e[0].value,isValid:!0}:Ma:Ra}return Ra},Jr=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:a})=>Y(e)?e:t?e===""||X(e)?NaN:+e:n&&de(e)?new Date(e):a?a(e):e;const La={isValid:!1,value:null};var ei=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,La):La;function sn(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Un(t)?t.files:Hn(t)?ei(e.refs).value:Kr(t)?[...t.selectedOptions].map(({value:n})=>n):st(t)?Zr(e.refs).value:Jr(Y(t.value)?e.ref.value:t.value,e)}var lu=(e,t,n,a)=>{const r={};for(const i of e){const s=A(t,i);s&&V(r,i,s._f)}return{criteriaMode:n,names:[...e],fields:r,shouldUseNativeValidation:a}},It=e=>e instanceof RegExp,Ge=e=>Y(e)?void 0:It(e)?e.source:K(e)?It(e.value)?e.value.source:e.value:e,cu=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Da(e,t,n){const a=A(e,n);if(a||jn(n))return{error:a,name:n};const r=n.split(".");for(;r.length;){const i=r.join("."),s=A(t,i),o=A(e,i);if(s&&!Array.isArray(s)&&n!==i)return{name:n};if(o&&o.type)return{name:i,error:o};r.pop()}return{name:n}}var fu=(e,t,n,a,r)=>r.isOnAll?!1:!n&&r.isOnTouch?!(t||e):(n?a.isOnBlur:r.isOnBlur)?!e:(n?a.isOnChange:r.isOnChange)?e:!0,uu=(e,t)=>!$t(A(e,t)).length&&Q(e,t),Et=e=>de(e)||U.isValidElement(e);function Fa(e,t,n="validate"){if(Et(e)||Array.isArray(e)&&e.every(Et)||_t(e)&&!e)return{type:n,message:Et(e)?e:"",ref:t}}var Le=e=>K(e)&&!It(e)?e:{value:e,message:""},$a=async(e,t,n,a)=>{const{ref:r,refs:i,required:s,maxLength:o,minLength:l,min:u,max:d,pattern:p,validate:v,name:k,valueAsNumber:T,mount:R,disabled:M}=e._f;if(!R||M)return{};const I=i?i[0]:r,P=C=>{a&&I.reportValidity&&(I.setCustomValidity(_t(C)?"":C||" "),I.reportValidity())},N={},H=Hn(r),F=st(r),se=H||F,G=(T||Un(r))&&!r.value||t===""||Array.isArray(t)&&!t.length,oe=iu.bind(null,k,n,N),q=(C,_,B,te=ve.maxLength,ne=ve.minLength)=>{const We=C?_:B;N[k]={type:C?te:ne,message:We,ref:r,...oe(C?te:ne,We)}};if(s&&(!se&&(G||X(t))||_t(t)&&!t||F&&!Zr(i).isValid||H&&!ei(i).isValid)){const{value:C,message:_}=Et(s)?{value:!!s,message:s}:Le(s);if(C&&(N[k]={type:ve.required,message:_,ref:I,...oe(ve.required,_)},!n))return P(_),N}if(!G&&(!X(u)||!X(d))){let C,_;const B=Le(d),te=Le(u);if(!X(t)&&!isNaN(t)){const ne=r.valueAsNumber||+t;X(B.value)||(C=ne>B.value),X(te.value)||(_=ne<te.value)}else{const ne=r.valueAsDate||new Date(t);de(B.value)&&(C=ne>new Date(B.value)),de(te.value)&&(_=ne<new Date(te.value))}if((C||_)&&(q(!!C,B.message,te.message,ve.max,ve.min),!n))return P(N[k].message),N}if((o||l)&&!G&&de(t)){const C=Le(o),_=Le(l),B=!X(C.value)&&t.length>C.value,te=!X(_.value)&&t.length<_.value;if((B||te)&&(q(B,C.message,_.message),!n))return P(N[k].message),N}if(p&&!G&&de(t)){const{value:C,message:_}=Le(p);if(It(C)&&!t.match(C)&&(N[k]={type:ve.pattern,message:_,ref:r,...oe(ve.pattern,_)},!n))return P(_),N}if(v){if(Vt(v)){const C=await v(t),_=Fa(C,I);if(_&&(N[k]={..._,...oe(ve.validate,_.message)},!n))return P(_.message),N}else if(K(v)){let C={};for(const _ in v){if(!ae(C)&&!n)break;const B=Fa(await v[_](t),I,_);B&&(C={...B,...oe(_,B.message)},P(B.message),n&&(N[k]=C))}if(!ae(C)&&(N[k]={ref:I,...C},!n))return N}}return P(!0),N};const du={mode:ce.onSubmit,reValidateMode:ce.onChange,shouldFocusError:!0};function mu(e={}){let t={...du,...e},n={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},a={},r=Oe(t.defaultValues)||{},i=t.shouldUnregister?{}:Oe(r),s={action:!1,mount:!1,watch:!1},o={mount:new Set,unMount:new Set,array:new Set,watch:new Set},l,u=0,d={};const p={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={watch:nn(),array:nn(),state:nn()},k=Pa(t.mode),T=Pa(t.reValidateMode),R=t.criteriaMode===ce.all,M=c=>f=>{clearTimeout(u),u=window.setTimeout(c,f)},I=async c=>{let f=!1;return p.isValid&&(f=t.resolver?ae((await G()).errors):await q(a,!0),!c&&f!==n.isValid&&(n.isValid=f,v.state.next({isValid:f}))),f},P=(c,f=[],m,y,S=!0,g=!0)=>{if(y&&m){if(s.action=!0,g&&Array.isArray(A(a,c))){const E=m(A(a,c),y.argA,y.argB);S&&V(a,c,E)}if(p.errors&&g&&Array.isArray(A(n.errors,c))){const E=m(A(n.errors,c),y.argA,y.argB);S&&V(n.errors,c,E),uu(n.errors,c)}if(p.touchedFields&&g&&Array.isArray(A(n.touchedFields,c))){const E=m(A(n.touchedFields,c),y.argA,y.argB);S&&V(n.touchedFields,c,E)}p.dirtyFields&&(n.dirtyFields=rn(r,i)),v.state.next({isDirty:_(c,f),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else V(i,c,f)},N=(c,f)=>{V(n.errors,c,f),v.state.next({errors:n.errors})},H=(c,f,m,y)=>{const S=A(a,c);if(S){const g=A(i,c,Y(m)?A(r,c):m);Y(g)||y&&y.defaultChecked||f?V(i,c,f?g:sn(S._f)):ne(c,g),s.mount&&I()}},F=(c,f,m,y,S)=>{let g=!1;const E={name:c},j=A(n.touchedFields,c);if(p.isDirty){const ye=n.isDirty;n.isDirty=E.isDirty=_(),g=ye!==E.isDirty}if(p.dirtyFields&&(!m||y)){const ye=A(n.dirtyFields,c);Fe(A(r,c),f)?Q(n.dirtyFields,c):V(n.dirtyFields,c,!0),E.dirtyFields=n.dirtyFields,g=g||ye!==A(n.dirtyFields,c)}return m&&!j&&(V(n.touchedFields,c,m),E.touchedFields=n.touchedFields,g=g||p.touchedFields&&j!==m),g&&S&&v.state.next(E),g?E:{}},se=async(c,f,m,y)=>{const S=A(n.errors,c),g=p.isValid&&n.isValid!==f;if(e.delayError&&m?(l=M(()=>N(c,m)),l(e.delayError)):(clearTimeout(u),l=null,m?V(n.errors,c,m):Q(n.errors,c)),(m?!Fe(S,m):S)||!ae(y)||g){const E={...y,...g?{isValid:f}:{},errors:n.errors,name:c};n={...n,...E},v.state.next(E)}d[c]--,p.isValidating&&!Object.values(d).some(E=>E)&&(v.state.next({isValidating:!1}),d={})},G=async c=>t.resolver?await t.resolver({...i},t.context,lu(c||o.mount,a,t.criteriaMode,t.shouldUseNativeValidation)):{},oe=async c=>{const{errors:f}=await G();if(c)for(const m of c){const y=A(f,m);y?V(n.errors,m,y):Q(n.errors,m)}else n.errors=f;return f},q=async(c,f,m={valid:!0})=>{for(const y in c){const S=c[y];if(S){const{_f:g,...E}=S;if(g){const j=await $a(S,A(i,g.name),R,t.shouldUseNativeValidation);if(j[g.name]&&(m.valid=!1,f))break;f||(j[g.name]?V(n.errors,g.name,j[g.name]):Q(n.errors,g.name))}E&&await q(E,f,m)}}return m.valid},C=()=>{for(const c of o.unMount){const f=A(a,c);f&&(f._f.refs?f._f.refs.every(m=>!an(m)):!an(f._f.ref))&&Gt(c)}o.unMount=new Set},_=(c,f)=>(c&&f&&V(i,c,f),!Fe(fa(),r)),B=(c,f,m)=>{const y={...s.mount?i:Y(f)?r:de(c)?{[c]:f}:f};return ru(c,o,y,m)},te=c=>$t(A(s.mount?i:r,c,e.shouldUnregister?A(r,c,[]):[])),ne=(c,f,m={})=>{const y=A(a,c);let S=f;if(y){const g=y._f;g&&(!g.disabled&&V(i,c,Jr(f,g)),S=xn&&wn(g.ref)&&X(f)?"":f,Kr(g.ref)?[...g.ref.options].forEach(E=>E.selected=S.includes(E.value)):g.refs?st(g.ref)?g.refs.length>1?g.refs.forEach(E=>!E.disabled&&(E.checked=Array.isArray(S)?!!S.find(j=>j===E.value):S===E.value)):g.refs[0]&&(g.refs[0].checked=!!S):g.refs.forEach(E=>E.checked=E.value===S):Un(g.ref)?g.ref.value="":(g.ref.value=S,g.ref.type||v.watch.next({name:c})))}(m.shouldDirty||m.shouldTouch)&&F(c,S,m.shouldTouch,m.shouldDirty,!0),m.shouldValidate&&Wt(c)},We=(c,f,m)=>{for(const y in f){const S=f[y],g=`${c}.${y}`,E=A(a,g);(o.array.has(c)||!Tt(S)||E&&!E._f)&&!De(S)?We(g,S,m):ne(g,S,m)}},ft=(c,f,m={})=>{const y=A(a,c),S=o.array.has(c),g=Oe(f);V(i,c,g),S?(v.array.next({name:c,values:i}),(p.isDirty||p.dirtyFields)&&m.shouldDirty&&(n.dirtyFields=rn(r,i),v.state.next({name:c,dirtyFields:n.dirtyFields,isDirty:_(c,g)}))):y&&!y._f&&!X(g)?We(c,g,m):ne(c,g,m),Ia(c,o)&&v.state.next({}),v.watch.next({name:c})},ca=async c=>{const f=c.target;let m=f.name;const y=A(a,m);if(y){let S,g;const E=f.type?sn(y._f):Kf(c),j=c.type===Ca.BLUR||c.type===Ca.FOCUS_OUT,ye=!cu(y._f)&&!t.resolver&&!A(n.errors,m)&&!y._f.deps||fu(j,A(n.touchedFields,m),n.isSubmitted,T,k),ut=Ia(m,o,j);V(i,m,E),j?(y._f.onBlur&&y._f.onBlur(c),l&&l(0)):y._f.onChange&&y._f.onChange(c);const Xt=F(m,E,j,!1),zi=!ae(Xt)||ut;if(!j&&v.watch.next({name:m,type:c.type}),ye)return zi&&v.state.next({name:m,...ut?{}:Xt});if(!j&&ut&&v.state.next({}),d[m]=(d[m],1),v.state.next({isValidating:!0}),t.resolver){const{errors:da}=await G([m]),ji=Da(n.errors,a,m),ma=Da(da,a,ji.name||m);S=ma.error,m=ma.name,g=ae(da)}else S=(await $a(y,A(i,m),R,t.shouldUseNativeValidation))[m],g=await I(!0);y._f.deps&&Wt(y._f.deps),se(m,g,S,Xt)}},Wt=async(c,f={})=>{let m,y;const S=tn(c);if(v.state.next({isValidating:!0}),t.resolver){const g=await oe(Y(c)?c:S);m=ae(g),y=c?!S.some(E=>A(g,E)):m}else c?(y=(await Promise.all(S.map(async g=>{const E=A(a,g);return await q(E&&E._f?{[g]:E}:E)}))).every(Boolean),!(!y&&!n.isValid)&&I()):y=m=await q(a);return v.state.next({...!de(c)||p.isValid&&m!==n.isValid?{}:{name:c},...t.resolver?{isValid:m}:{},errors:n.errors,isValidating:!1}),f.shouldFocus&&!y&&yn(a,g=>A(n.errors,g),c?S:o.mount),y},fa=c=>{const f={...r,...s.mount?i:{}};return Y(c)?f:de(c)?A(f,c):c.map(m=>A(f,m))},ua=(c,f)=>({invalid:!!A((f||n).errors,c),isDirty:!!A((f||n).dirtyFields,c),isTouched:!!A((f||n).touchedFields,c),error:A((f||n).errors,c)}),Fi=c=>{c?tn(c).forEach(f=>Q(n.errors,f)):n.errors={},v.state.next({errors:n.errors})},$i=(c,f,m)=>{const y=(A(a,c,{_f:{}})._f||{}).ref;V(n.errors,c,{...f,ref:y}),v.state.next({name:c,errors:n.errors,isValid:!1}),m&&m.shouldFocus&&y&&y.focus&&y.focus()},Vi=(c,f)=>Vt(c)?v.watch.subscribe({next:m=>c(B(void 0,f),m)}):B(c,f,!0),Gt=(c,f={})=>{for(const m of c?tn(c):o.mount)o.mount.delete(m),o.array.delete(m),A(a,m)&&(f.keepValue||(Q(a,m),Q(i,m)),!f.keepError&&Q(n.errors,m),!f.keepDirty&&Q(n.dirtyFields,m),!f.keepTouched&&Q(n.touchedFields,m),!t.shouldUnregister&&!f.keepDefaultValue&&Q(r,m));v.watch.next({}),v.state.next({...n,...f.keepDirty?{isDirty:_()}:{}}),!f.keepIsValid&&I()},qt=(c,f={})=>{let m=A(a,c);const y=_t(f.disabled);return V(a,c,{_f:{...m&&m._f?m._f:{ref:{name:c}},name:c,mount:!0,...f}}),o.mount.add(c),m?y&&V(i,c,f.disabled?void 0:A(i,c,sn(m._f))):H(c,!0,f.value),{...y?{disabled:f.disabled}:{},...t.shouldUseNativeValidation?{required:!!f.required,min:Ge(f.min),max:Ge(f.max),minLength:Ge(f.minLength),maxLength:Ge(f.maxLength),pattern:Ge(f.pattern)}:{},name:c,onChange:ca,onBlur:ca,ref:S=>{if(S){qt(c,f),m=A(a,c);const g=Y(S.value)&&S.querySelectorAll&&S.querySelectorAll("input,select,textarea")[0]||S,E=ou(g),j=m._f.refs||[];if(E?j.find(ye=>ye===g):g===m._f.ref)return;V(a,c,{_f:{...m._f,...E?{refs:[...j.filter(an),g,...Array.isArray(A(r,c))?[{}]:[]],ref:{type:g.type,name:c}}:{ref:g}}}),H(c,!1,void 0,g)}else m=A(a,c,{}),m._f&&(m._f.mount=!1),(t.shouldUnregister||f.shouldUnregister)&&!(Zf(o.array,c)&&s.action)&&o.unMount.add(c)}}};return{control:{register:qt,unregister:Gt,getFieldState:ua,_executeSchema:G,_getWatch:B,_getDirty:_,_updateValid:I,_removeUnmounted:C,_updateFieldArray:P,_getFieldArray:te,_subjects:v,_proxyFormState:p,get _fields(){return a},get _formValues(){return i},get _stateFlags(){return s},set _stateFlags(c){s=c},get _defaultValues(){return r},get _names(){return o},set _names(c){o=c},get _formState(){return n},set _formState(c){n=c},get _options(){return t},set _options(c){t={...t,...c}}},trigger:Wt,register:qt,handleSubmit:(c,f)=>async m=>{m&&(m.preventDefault&&m.preventDefault(),m.persist&&m.persist());let y=!0,S=Oe(i);v.state.next({isSubmitting:!0});try{if(t.resolver){const{errors:g,values:E}=await G();n.errors=g,S=E}else await q(a);ae(n.errors)?(v.state.next({errors:{},isSubmitting:!0}),await c(S,m)):(f&&await f({...n.errors},m),t.shouldFocusError&&yn(a,g=>A(n.errors,g),o.mount))}catch(g){throw y=!1,g}finally{n.isSubmitted=!0,v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ae(n.errors)&&y,submitCount:n.submitCount+1,errors:n.errors})}},watch:Vi,setValue:ft,getValues:fa,reset:(c,f={})=>{const m=c||r,y=Oe(m),S=c&&!ae(c)?y:r;if(f.keepDefaultValues||(r=m),!f.keepValues){if(f.keepDirtyValues)for(const g of o.mount)A(n.dirtyFields,g)?V(S,g,A(i,g)):ft(g,A(S,g));else{if(xn&&Y(c))for(const g of o.mount){const E=A(a,g);if(E&&E._f){const j=Array.isArray(E._f.refs)?E._f.refs[0]:E._f.ref;try{wn(j)&&j.closest("form").reset();break}catch{}}}a={}}i=e.shouldUnregister?f.keepDefaultValues?Oe(r):{}:y,v.array.next({values:S}),v.watch.next({values:S})}o={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},s.mount=!p.isValid||!!f.keepIsValid,s.watch=!!e.shouldUnregister,v.state.next({submitCount:f.keepSubmitCount?n.submitCount:0,isDirty:f.keepDirty||f.keepDirtyValues?n.isDirty:!!(f.keepDefaultValues&&!Fe(c,r)),isSubmitted:f.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:f.keepDirty||f.keepDirtyValues?n.dirtyFields:f.keepDefaultValues&&c?rn(r,c):{},touchedFields:f.keepTouched?n.touchedFields:{},errors:f.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(c,f={})=>{A(a,c)&&(Y(f.defaultValue)?ft(c,A(r,c)):(ft(c,f.defaultValue),V(r,c,f.defaultValue)),f.keepTouched||Q(n.touchedFields,c),f.keepDirty||(Q(n.dirtyFields,c),n.isDirty=f.defaultValue?_(c,A(r,c)):_()),f.keepError||(Q(n.errors,c),p.isValid&&I()),v.state.next({...n}))},clearErrors:Fi,unregister:Gt,setError:$i,setFocus:(c,f={})=>{const m=A(a,c)._f,y=m.refs?m.refs[0]:m.ref;y.focus(),f.shouldSelect&&y.select()},getFieldState:ua}}function vu(e={}){const t=U.useRef(),[n,a]=U.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});t.current?t.current.control._options=e:t.current={...mu(e),formState:n};const r=t.current.control,i=U.useCallback(s=>{nu(s,r._proxyFormState,!0)&&(r._formState={...r._formState,...s},a({...r._formState}))},[r]);return au({subject:r._subjects.state,callback:i}),U.useEffect(()=>{r._stateFlags.mount||(r._proxyFormState.isValid&&r._updateValid(),r._stateFlags.mount=!0),r._stateFlags.watch&&(r._stateFlags.watch=!1,r._subjects.state.next({})),r._removeUnmounted()}),t.current.formState=tu(n,r._proxyFormState),t.current}const zt=U.forwardRef(({children:e,className:t},n)=>h("div",{className:it("min-w-[421px] w-fit shadow bg-white","flex flex-col text-left","border border-white rounded divide-y divide-black/10",t),ref:n,children:e}));zt.displayName="ModalContainerTemplate";zt.propTypes={children:b.node.isRequired,className:b.string};zt.defaultProps={className:null};const Bn=({children:e,className:t,slot:n})=>$("div",{className:it("flex gap-4 justify-start","flex-col md:flex-row-reverse md:items-center","px-6 py-4 mb-1 sticky bottom-0 bg-white",t),children:[h("div",{className:"flex gap-2 flex-col sm:flex-row-reverse md:items-center",children:e}),n&&h("div",{className:"flex gap-2 flex-1 flex-col sm:flex-row",children:n})]});Bn.propTypes={children:b.node.isRequired,className:b.string,slot:b.node};Bn.defaultProps={className:null,slot:null};const Yn=({children:e,className:t})=>h("div",{className:it("px-6 py-[18px]",t),children:e});Yn.propTypes={children:b.node.isRequired,className:b.string};Yn.defaultProps={className:null};const jt=U.forwardRef(({children:e,className:t,...n},a)=>$(zt,{ref:a,className:t,children:[n.header&&h(Yn,{children:n.header}),e,h(Bn,{slot:n.footerSlot,children:n.footer})]}));jt.displayName="ModalTemplate";jt.propTypes={children:b.node.isRequired,className:b.string,footer:b.node.isRequired,footerSlot:b.node,header:b.node};jt.defaultProps={className:null,footerSlot:null,header:null};const Ne={BLUE:"blue",GRAY:"gray",GREEN:"green",ORANGE:"orange",RED:"red"},pu=Object.values(Ne),gu={[Ne.BLUE]:"bg-gradient-blue",[Ne.GRAY]:"bg-gradient-gray",[Ne.GREEN]:"bg-gradient-green",[Ne.ORANGE]:"bg-gradient-orange",[Ne.RED]:"bg-gradient-red"},Wn=({children:e,...t})=>h(vs,{isOpen:t.isOpen,initialFocus:t.initialFocus,onClose:t.onClose,children:h("span",{className:"transform inline-block sm:align-middle",children:h(jt,{ref:t.setReference,className:it("bg-gradient-to-b max-w-[calc(100vw_-_1.5rem)] my-3",gu[t.color],t.className),footer:t.footer,footerSlot:t.footerSlot,header:t.header,children:e})})});Wn.propTypes={children:b.node.isRequired,className:b.any,color:b.oneOf(pu),footer:b.node.isRequired,footerSlot:b.node,header:b.node,initialFocus:b.shape({current:b.instanceOf(Element)}),isOpen:b.bool,onClose:b.func,setReference:b.func};Wn.defaultProps={className:null,color:Ne.GRAY,footerSlot:null,header:null,initialFocus:null,isOpen:!1,onClose:Ze,setReference:Ze};const ti=U.createContext(),ni=()=>J.exports.useContext(ti),Gn=({children:e,isPersistent:t,modal:n,...a})=>{const{close:r,isOpen:i,setReference:s}=ni(),o=J.exports.useMemo(()=>t?Ze:r,[t,r]);return h(n,{isOpen:i,onClose:o,setReference:s,...a,children:e})};Gn.propTypes={children:b.node,isPersistent:b.bool,modal:b.elementType};Gn.defaultProps={children:null,isPersistent:!1,modal:Wn};const ai=U.createContext({}),bu=()=>J.exports.useContext(ai),qn=({close:e,formId:t,isSubmittable:n,onSubmit:a})=>$(Dn,{children:[h(ga,{startIcon:h(Es,{}),onClick:a,isDisabled:!n,buttonType:"submit",form:t,children:h(mn,{...ba.save})}),h(ga,{type:ps.OUTLINED,onClick:e,children:h(mn,{...ba.cancel})})]});qn.propTypes={close:b.func,formId:b.string.isRequired,isSubmittable:b.bool,onSubmit:b.func};qn.defaultProps={close:Ze,isSubmittable:!1,onSubmit:Ze};var hu=U.memo(qn);const le="organisms.create-event-modal";var yu=wr({title:{id:`${le}.title`,defaultMessage:"Ereignis hinzuf\xFCgen",description:"title of the create-event modal"},noteLabel:{id:`${le}.noteLabel`,defaultMessage:"Bemerkung",description:"the note input label"},spaceRequestLabel:{id:`${le}.spaceRequestLabel`,defaultMessage:"Platzwunsch",description:"the space request select label"},secondSpaceRequestLabel:{id:`${le}.secondSpaceRequestLabel`,defaultMessage:"Platzwunsch 2",description:"the second space request select label"},spaceLabel:{id:`${le}.spaceLabel`,defaultMessage:"Platz",description:"the assigned space label"},secondSpaceLabel:{id:`${le}.secondSpaceLabel`,defaultMessage:"Platz 2",description:"the second assigned space label"},startTimeLabel:{id:`${le}.startTimeLabel`,defaultMessage:"Start",description:"the assigned start time"},endTimeLabel:{id:`${le}.endTimeLabel`,defaultMessage:"Ende",description:"the assigned end time"},durationQuickSelect:{id:`${le}.durationQuickSelect`,defaultMessage:"Dauer Schnellauswahl",description:"label for duration quick selection"},recurringEvent:{id:`${le}.recurringEvent`,defaultMessage:"Serientermin",description:"button text for recurring event"},date:{id:`${le}.date`,defaultMessage:"Datum",description:"label for date"}});const xu=()=>h("span",{className:"font-heading-large",children:h(mn,{...yu.title})});var wu=U.memo(xu);const Va="create-event-form",ku=()=>{const{close:e}=ni(),{type:t}=bu(),n=vu(),{reset:a,handleSubmit:r,formState:i}=n;J.exports.useEffect(()=>{a()},[t]);const s=r(e);return h(Gn,{header:h(wu,{}),footer:h(hu,{close:e,formId:Va,onSubmit:s,isSubmittable:!i.isSubmitted||i.isValid}),color:Os[t],children:h(eu,{...n,children:h("form",{className:"flex flex-col gap-4 p-6",onSubmit:s,id:Va,children:h("div",{className:"font-heading-large",children:"Form fields go here."})})})})};var Au=U.memo(ku);const Xn=({children:e})=>{const[t,n]=Ns(!0),[a,r]=J.exports.useState({}),i=Sr();J.exports.useEffect(()=>{a||i(gs())},[a]);const s=J.exports.useMemo(()=>({close:n.close,isOpen:t,setReference:r}),[t,n.close,r]);return h(ti.Provider,{value:s,children:e})};Xn.propTypes={children:b.node};Xn.defaultProps={children:null};const za={EVENTS:{CREATE:"create-event/:type"},EXERCISES:{CREATE:"create-exercise",EDIT:":exerciseId",DETAILS:"trainings/:id/:exerciseId",DETAILS_PARTICIPANTS:"trainings/:id/:exerciseId/participants"},INJURIES:{CREATE:"create-injury"},PARTICIPANTS:{DETAILS:"participants/:type/:id"},TREATMENTS:{CREATE:"create"},TRAINING_MODULES:{CREATE:"create"}},ri=({children:e,...t})=>{const n=J.exports.useMemo(()=>({type:t.type}),[t.type]);return h(ai.Provider,{value:n,children:e})};ri.propTypes={children:b.node.isRequired,type:b.oneOf(Vn).isRequired};const ii=({children:e,match:t})=>{const a=pr()({to:t});return Vn.includes(a==null?void 0:a.type)?h(ri,{type:a.type,children:e}):null};ii.propTypes={children:b.node.isRequired,match:b.string.isRequired};const Su=e=>[{element:h(Xn,{children:h(ii,{match:`${e}/${za.EVENTS.CREATE}`,children:h(Au,{})})}),path:za.EVENTS.CREATE}];function ja(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ja(Object(n),!0).forEach(function(a){W(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ja(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Pt(e){return Pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pt(e)}function Eu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ua(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Ou(e,t,n){return t&&Ua(e.prototype,t),n&&Ua(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kn(e,t){return Tu(e)||Cu(e,t)||si(e,t)||Pu()}function ot(e){return Nu(e)||_u(e)||si(e)||Iu()}function Nu(e){if(Array.isArray(e))return kn(e)}function Tu(e){if(Array.isArray(e))return e}function _u(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Cu(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,s,o;try{for(n=n.call(e);!(r=(s=n.next()).done)&&(a.push(s.value),!(t&&a.length===t));r=!0);}catch(l){i=!0,o=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw o}}return a}}function si(e,t){if(!!e){if(typeof e=="string")return kn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return kn(e,t)}}function kn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Iu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ha=function(){},Qn={},oi={},li=null,ci={mark:Ha,measure:Ha};try{typeof window!="undefined"&&(Qn=window),typeof document!="undefined"&&(oi=document),typeof MutationObserver!="undefined"&&(li=MutationObserver),typeof performance!="undefined"&&(ci=performance)}catch{}var Ru=Qn.navigator||{},Ba=Ru.userAgent,Ya=Ba===void 0?"":Ba,Ae=Qn,D=oi,Wa=li,vt=ci;Ae.document;var he=!!D.documentElement&&!!D.head&&typeof D.addEventListener=="function"&&typeof D.createElement=="function",fi=~Ya.indexOf("MSIE")||~Ya.indexOf("Trident/"),pt,gt,bt,ht,yt,pe="___FONT_AWESOME___",An=16,ui="fa",di="svg-inline--fa",Ie="data-fa-i2svg",Sn="data-fa-pseudo-element",Mu="data-fa-pseudo-element-pending",Zn="data-prefix",Jn="data-icon",Ga="fontawesome-i2svg",Lu="async",Du=["HTML","HEAD","STYLE","SCRIPT"],mi=function(){try{return!0}catch{return!1}}(),L="classic",z="sharp",ea=[L,z];function lt(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[L]}})}var et=lt((pt={},W(pt,L,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),W(pt,z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),pt)),tt=lt((gt={},W(gt,L,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),W(gt,z,{solid:"fass",regular:"fasr",light:"fasl"}),gt)),nt=lt((bt={},W(bt,L,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),W(bt,z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),bt)),Fu=lt((ht={},W(ht,L,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),W(ht,z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ht)),$u=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,vi="fa-layers-text",Vu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,zu=lt((yt={},W(yt,L,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),W(yt,z,{900:"fass",400:"fasr",300:"fasl"}),yt)),pi=[1,2,3,4,5,6,7,8,9,10],ju=pi.concat([11,12,13,14,15,16,17,18,19,20]),Uu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],_e={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},at=new Set;Object.keys(tt[L]).map(at.add.bind(at));Object.keys(tt[z]).map(at.add.bind(at));var Hu=[].concat(ea,ot(at),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",_e.GROUP,_e.SWAP_OPACITY,_e.PRIMARY,_e.SECONDARY]).concat(pi.map(function(e){return"".concat(e,"x")})).concat(ju.map(function(e){return"w-".concat(e)})),Ke=Ae.FontAwesomeConfig||{};function Bu(e){var t=D.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Yu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(D&&typeof D.querySelector=="function"){var Wu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Wu.forEach(function(e){var t=Kn(e,2),n=t[0],a=t[1],r=Yu(Bu(n));r!=null&&(Ke[a]=r)})}var gi={styleDefault:"solid",familyDefault:"classic",cssPrefix:ui,replacementClass:di,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ke.familyPrefix&&(Ke.cssPrefix=Ke.familyPrefix);var Be=x(x({},gi),Ke);Be.autoReplaceSvg||(Be.observeMutations=!1);var w={};Object.keys(gi).forEach(function(e){Object.defineProperty(w,e,{enumerable:!0,set:function(n){Be[e]=n,Qe.forEach(function(a){return a(w)})},get:function(){return Be[e]}})});Object.defineProperty(w,"familyPrefix",{enumerable:!0,set:function(t){Be.cssPrefix=t,Qe.forEach(function(n){return n(w)})},get:function(){return Be.cssPrefix}});Ae.FontAwesomeConfig=w;var Qe=[];function Gu(e){return Qe.push(e),function(){Qe.splice(Qe.indexOf(e),1)}}var we=An,me={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qu(e){if(!(!e||!he)){var t=D.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=D.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return D.head.insertBefore(t,a),e}}var Xu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function rt(){for(var e=12,t="";e-- >0;)t+=Xu[Math.random()*62|0];return t}function Ye(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ta(e){return e.classList?Ye(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function bi(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ku(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(bi(e[n]),'" ')},"").trim()}function Ut(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function na(e){return e.size!==me.size||e.x!==me.x||e.y!==me.y||e.rotate!==me.rotate||e.flipX||e.flipY}function Qu(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:u}}function Zu(e){var t=e.transform,n=e.width,a=n===void 0?An:n,r=e.height,i=r===void 0?An:r,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&fi?l+="translate(".concat(t.x/we-a/2,"em, ").concat(t.y/we-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/we,"em), calc(-50% + ").concat(t.y/we,"em)) "):l+="translate(".concat(t.x/we,"em, ").concat(t.y/we,"em) "),l+="scale(".concat(t.size/we*(t.flipX?-1:1),", ").concat(t.size/we*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ju=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function hi(){var e=ui,t=di,n=w.cssPrefix,a=w.replacementClass,r=Ju;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(a))}return r}var qa=!1;function on(){w.autoAddCss&&!qa&&(qu(hi()),qa=!0)}var ed={mixout:function(){return{dom:{css:hi,insertCss:on}}},hooks:function(){return{beforeDOMElementCreation:function(){on()},beforeI2svg:function(){on()}}}},ge=Ae||{};ge[pe]||(ge[pe]={});ge[pe].styles||(ge[pe].styles={});ge[pe].hooks||(ge[pe].hooks={});ge[pe].shims||(ge[pe].shims=[]);var fe=ge[pe],yi=[],td=function e(){D.removeEventListener("DOMContentLoaded",e),Rt=1,yi.map(function(t){return t()})},Rt=!1;he&&(Rt=(D.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(D.readyState),Rt||D.addEventListener("DOMContentLoaded",td));function nd(e){!he||(Rt?setTimeout(e,0):yi.push(e))}function ct(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?bi(e):"<".concat(t," ").concat(Ku(a),">").concat(i.map(ct).join(""),"</").concat(t,">")}function Xa(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ad=function(t,n){return function(a,r,i,s){return t.call(n,a,r,i,s)}},ln=function(t,n,a,r){var i=Object.keys(t),s=i.length,o=r!==void 0?ad(n,r):n,l,u,d;for(a===void 0?(l=1,d=t[i[0]]):(l=0,d=a);l<s;l++)u=i[l],d=o(d,t[u],u,t);return d};function rd(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function En(e){var t=rd(e);return t.length===1?t[0].toString(16):null}function id(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Ka(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function On(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Ka(t);typeof fe.hooks.addPack=="function"&&!r?fe.hooks.addPack(e,Ka(t)):fe.styles[e]=x(x({},fe.styles[e]||{}),i),e==="fas"&&On("fa",t)}var xt,wt,kt,$e=fe.styles,sd=fe.shims,od=(xt={},W(xt,L,Object.values(nt[L])),W(xt,z,Object.values(nt[z])),xt),aa=null,xi={},wi={},ki={},Ai={},Si={},ld=(wt={},W(wt,L,Object.keys(et[L])),W(wt,z,Object.keys(et[z])),wt);function cd(e){return~Hu.indexOf(e)}function fd(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!cd(r)?r:null}var Ei=function(){var t=function(i){return ln($e,function(s,o,l){return s[l]=ln(o,i,{}),s},{})};xi=t(function(r,i,s){if(i[3]&&(r[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){r[l.toString(16)]=s})}return r}),wi=t(function(r,i,s){if(r[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){r[l]=s})}return r}),Si=t(function(r,i,s){var o=i[2];return r[s]=s,o.forEach(function(l){r[l]=s}),r});var n="far"in $e||w.autoFetchSvg,a=ln(sd,function(r,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});ki=a.names,Ai=a.unicodes,aa=Ht(w.styleDefault,{family:w.familyDefault})};Gu(function(e){aa=Ht(e.styleDefault,{family:w.familyDefault})});Ei();function ra(e,t){return(xi[e]||{})[t]}function ud(e,t){return(wi[e]||{})[t]}function Ce(e,t){return(Si[e]||{})[t]}function Oi(e){return ki[e]||{prefix:null,iconName:null}}function dd(e){var t=Ai[e],n=ra("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Se(){return aa}var ia=function(){return{prefix:null,iconName:null,rest:[]}};function Ht(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?L:n,r=et[a][e],i=tt[a][e]||tt[a][r],s=e in fe.styles?e:null;return i||s||null}var Qa=(kt={},W(kt,L,Object.keys(nt[L])),W(kt,z,Object.keys(nt[z])),kt);function Bt(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},W(t,L,"".concat(w.cssPrefix,"-").concat(L)),W(t,z,"".concat(w.cssPrefix,"-").concat(z)),t),s=null,o=L;(e.includes(i[L])||e.some(function(u){return Qa[L].includes(u)}))&&(o=L),(e.includes(i[z])||e.some(function(u){return Qa[z].includes(u)}))&&(o=z);var l=e.reduce(function(u,d){var p=fd(w.cssPrefix,d);if($e[d]?(d=od[o].includes(d)?Fu[o][d]:d,s=d,u.prefix=d):ld[o].indexOf(d)>-1?(s=d,u.prefix=Ht(d,{family:o})):p?u.iconName=p:d!==w.replacementClass&&d!==i[L]&&d!==i[z]&&u.rest.push(d),!r&&u.prefix&&u.iconName){var v=s==="fa"?Oi(u.iconName):{},k=Ce(u.prefix,u.iconName);v.prefix&&(s=null),u.iconName=v.iconName||k||u.iconName,u.prefix=v.prefix||u.prefix,u.prefix==="far"&&!$e.far&&$e.fas&&!w.autoFetchSvg&&(u.prefix="fas")}return u},ia());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===z&&($e.fass||w.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ce(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=Se()||"fas"),l}var md=function(){function e(){Eu(this,e),this.definitions={}}return Ou(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=x(x({},n.definitions[o]||{}),s[o]),On(o,s[o]);var l=nt[L][o];l&&On(l,s[o]),Ei()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var s=r[i],o=s.prefix,l=s.iconName,u=s.icon,d=u[2];n[o]||(n[o]={}),d.length>0&&d.forEach(function(p){typeof p=="string"&&(n[o][p]=u)}),n[o][l]=u}),n}}]),e}(),Za=[],Ve={},Ue={},vd=Object.keys(Ue);function pd(e,t){var n=t.mixoutsTo;return Za=e,Ve={},Object.keys(Ue).forEach(function(a){vd.indexOf(a)===-1&&delete Ue[a]}),Za.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(n[s]=r[s]),Pt(r[s])==="object"&&Object.keys(r[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=r[s][o]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(s){Ve[s]||(Ve[s]=[]),Ve[s].push(i[s])})}a.provides&&a.provides(Ue)}),n}function Nn(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Ve[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(a))}),t}function Pe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=Ve[e]||[];r.forEach(function(i){i.apply(null,n)})}function be(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ue[e]?Ue[e].apply(null,t):void 0}function Tn(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Se();if(!!t)return t=Ce(n,t)||t,Xa(Ni.definitions,n,t)||Xa(fe.styles,n,t)}var Ni=new md,gd=function(){w.autoReplaceSvg=!1,w.observeMutations=!1,Pe("noAuto")},bd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return he?(Pe("beforeI2svg",t),be("pseudoElements2svg",t),be("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;w.autoReplaceSvg===!1&&(w.autoReplaceSvg=!0),w.observeMutations=!0,nd(function(){yd({autoReplaceSvgRoot:n}),Pe("watch",t)})}},hd={icon:function(t){if(t===null)return null;if(Pt(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ce(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=Ht(t[0]);return{prefix:a,iconName:Ce(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(w.cssPrefix,"-"))>-1||t.match($u))){var r=Bt(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||Se(),iconName:Ce(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=Se();return{prefix:i,iconName:Ce(i,t)||t}}}},ee={noAuto:gd,config:w,dom:bd,parse:hd,library:Ni,findIconDefinition:Tn,toHtml:ct},yd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?D:n;(Object.keys(fe.styles).length>0||w.autoFetchSvg)&&he&&w.autoReplaceSvg&&ee.dom.i2svg({node:a})};function Yt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return ct(a)})}}),Object.defineProperty(e,"node",{get:function(){if(!!he){var a=D.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function xd(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,s=e.transform;if(na(s)&&n.found&&!a.found){var o=n.width,l=n.height,u={x:o/l/2,y:.5};r.style=Ut(x(x({},i),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function wd(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(w.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:x(x({},r),{},{id:s}),children:a}]}]}function sa(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,s=e.transform,o=e.symbol,l=e.title,u=e.maskId,d=e.titleId,p=e.extra,v=e.watchable,k=v===void 0?!1:v,T=a.found?a:n,R=T.width,M=T.height,I=r==="fak",P=[w.replacementClass,i?"".concat(w.cssPrefix,"-").concat(i):""].filter(function(q){return p.classes.indexOf(q)===-1}).filter(function(q){return q!==""||!!q}).concat(p.classes).join(" "),N={children:[],attributes:x(x({},p.attributes),{},{"data-prefix":r,"data-icon":i,class:P,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(M)})},H=I&&!~p.classes.indexOf("fa-fw")?{width:"".concat(R/M*16*.0625,"em")}:{};k&&(N.attributes[Ie]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||rt())},children:[l]}),delete N.attributes.title);var F=x(x({},N),{},{prefix:r,iconName:i,main:n,mask:a,maskId:u,transform:s,symbol:o,styles:x(x({},H),p.styles)}),se=a.found&&n.found?be("generateAbstractMask",F)||{children:[],attributes:{}}:be("generateAbstractIcon",F)||{children:[],attributes:{}},G=se.children,oe=se.attributes;return F.children=G,F.attributes=oe,o?wd(F):xd(F)}function Ja(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,u=x(x(x({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(u[Ie]="");var d=x({},s.styles);na(r)&&(d.transform=Zu({transform:r,startCentered:!0,width:n,height:a}),d["-webkit-transform"]=d.transform);var p=Ut(d);p.length>0&&(u.style=p);var v=[];return v.push({tag:"span",attributes:u,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function kd(e){var t=e.content,n=e.title,a=e.extra,r=x(x(x({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Ut(a.styles);i.length>0&&(r.style=i);var s=[];return s.push({tag:"span",attributes:r,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var cn=fe.styles;function _n(e){var t=e[0],n=e[1],a=e.slice(4),r=Kn(a,1),i=r[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(w.cssPrefix,"-").concat(_e.GROUP)},children:[{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(_e.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(_e.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:s}}var Ad={found:!1,width:512,height:512};function Sd(e,t){!mi&&!w.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Cn(e,t){var n=t;return t==="fa"&&w.styleDefault!==null&&(t=Se()),new Promise(function(a,r){if(be("missingIconAbstract"),n==="fa"){var i=Oi(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&cn[t]&&cn[t][e]){var s=cn[t][e];return a(_n(s))}Sd(e,t),a(x(x({},Ad),{},{icon:w.showMissingIcons&&e?be("missingIconAbstract")||{}:{}}))})}var er=function(){},In=w.measurePerformance&&vt&&vt.mark&&vt.measure?vt:{mark:er,measure:er},qe='FA "6.4.0"',Ed=function(t){return In.mark("".concat(qe," ").concat(t," begins")),function(){return Ti(t)}},Ti=function(t){In.mark("".concat(qe," ").concat(t," ends")),In.measure("".concat(qe," ").concat(t),"".concat(qe," ").concat(t," begins"),"".concat(qe," ").concat(t," ends"))},oa={begin:Ed,end:Ti},Ot=function(){};function tr(e){var t=e.getAttribute?e.getAttribute(Ie):null;return typeof t=="string"}function Od(e){var t=e.getAttribute?e.getAttribute(Zn):null,n=e.getAttribute?e.getAttribute(Jn):null;return t&&n}function Nd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(w.replacementClass)}function Td(){if(w.autoReplaceSvg===!0)return Nt.replace;var e=Nt[w.autoReplaceSvg];return e||Nt.replace}function _d(e){return D.createElementNS("http://www.w3.org/2000/svg",e)}function Cd(e){return D.createElement(e)}function _i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?_d:Cd:n;if(typeof e=="string")return D.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(s){r.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){r.appendChild(_i(s,{ceFn:a}))}),r}function Id(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Nt={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(_i(r),n)}),n.getAttribute(Ie)===null&&w.keepOriginalSource){var a=D.createComment(Id(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~ta(n).indexOf(w.replacementClass))return Nt.replace(t);var r=new RegExp("".concat(w.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(o,l){return l===w.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=a.map(function(o){return ct(o)}).join(`
`);n.setAttribute(Ie,""),n.innerHTML=s}};function nr(e){e()}function Ci(e,t){var n=typeof t=="function"?t:Ot;if(e.length===0)n();else{var a=nr;w.mutateApproach===Lu&&(a=Ae.requestAnimationFrame||nr),a(function(){var r=Td(),i=oa.begin("mutate");e.map(r),i(),n()})}}var la=!1;function Ii(){la=!0}function Pn(){la=!1}var Mt=null;function ar(e){if(!!Wa&&!!w.observeMutations){var t=e.treeCallback,n=t===void 0?Ot:t,a=e.nodeCallback,r=a===void 0?Ot:a,i=e.pseudoElementsCallback,s=i===void 0?Ot:i,o=e.observeMutationsRoot,l=o===void 0?D:o;Mt=new Wa(function(u){if(!la){var d=Se();Ye(u).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!tr(p.addedNodes[0])&&(w.searchPseudoElements&&s(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&w.searchPseudoElements&&s(p.target.parentNode),p.type==="attributes"&&tr(p.target)&&~Uu.indexOf(p.attributeName))if(p.attributeName==="class"&&Od(p.target)){var v=Bt(ta(p.target)),k=v.prefix,T=v.iconName;p.target.setAttribute(Zn,k||d),T&&p.target.setAttribute(Jn,T)}else Nd(p.target)&&r(p.target)})}}),he&&Mt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Pd(){!Mt||Mt.disconnect()}function Rd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(a[s]=o.join(":").trim()),a},{})),n}function Md(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=Bt(ta(e));return r.prefix||(r.prefix=Se()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ud(r.prefix,e.innerText)||ra(r.prefix,En(e.innerText))),!r.iconName&&w.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Ld(e){var t=Ye(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return w.autoA11y&&(n?t["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(a||rt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Dd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:me,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function rr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Md(e),a=n.iconName,r=n.prefix,i=n.rest,s=Ld(e),o=Nn("parseNodeAttributes",{},e),l=t.styleParser?Rd(e):[];return x({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:me,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var Fd=fe.styles;function Pi(e){var t=w.autoReplaceSvg==="nest"?rr(e,{styleParser:!1}):rr(e);return~t.extra.classes.indexOf(vi)?be("generateLayersText",e,t):be("generateSvgReplacementMutation",e,t)}var Ee=new Set;ea.map(function(e){Ee.add("fa-".concat(e))});Object.keys(et[L]).map(Ee.add.bind(Ee));Object.keys(et[z]).map(Ee.add.bind(Ee));Ee=ot(Ee);function ir(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!he)return Promise.resolve();var n=D.documentElement.classList,a=function(p){return n.add("".concat(Ga,"-").concat(p))},r=function(p){return n.remove("".concat(Ga,"-").concat(p))},i=w.autoFetchSvg?Ee:ea.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Fd));i.includes("fa")||i.push("fa");var s=[".".concat(vi,":not([").concat(Ie,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(Ie,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Ye(e.querySelectorAll(s))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();var l=oa.begin("onTree"),u=o.reduce(function(d,p){try{var v=Pi(p);v&&d.push(v)}catch(k){mi||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,p){Promise.all(u).then(function(v){Ci(v,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),p(v)})})}function $d(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Pi(e).then(function(n){n&&Ci([n],t)})}function Vd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:Tn(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Tn(r||{})),e(a,x(x({},n),{},{mask:r}))}}var zd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?me:a,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,u=n.maskId,d=u===void 0?null:u,p=n.title,v=p===void 0?null:p,k=n.titleId,T=k===void 0?null:k,R=n.classes,M=R===void 0?[]:R,I=n.attributes,P=I===void 0?{}:I,N=n.styles,H=N===void 0?{}:N;if(!!t){var F=t.prefix,se=t.iconName,G=t.icon;return Yt(x({type:"icon"},t),function(){return Pe("beforeDOMElementCreation",{iconDefinition:t,params:n}),w.autoA11y&&(v?P["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(T||rt()):(P["aria-hidden"]="true",P.focusable="false")),sa({icons:{main:_n(G),mask:l?_n(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:F,iconName:se,transform:x(x({},me),r),symbol:s,title:v,maskId:d,titleId:T,extra:{attributes:P,styles:H,classes:M}})})}},jd={mixout:function(){return{icon:Vd(zd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ir,n.nodeCallback=$d,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?D:a,i=n.callback,s=i===void 0?function(){}:i;return ir(r,s)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,s=a.titleId,o=a.prefix,l=a.transform,u=a.symbol,d=a.mask,p=a.maskId,v=a.extra;return new Promise(function(k,T){Promise.all([Cn(r,o),d.iconName?Cn(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var M=Kn(R,2),I=M[0],P=M[1];k([n,sa({icons:{main:I,mask:P},prefix:o,iconName:r,transform:l,symbol:u,maskId:p,title:i,titleId:s,extra:v,watchable:!0})])}).catch(T)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,s=n.transform,o=n.styles,l=Ut(o);l.length>0&&(r.style=l);var u;return na(s)&&(u=be("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},Ud={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Yt({type:"layer"},function(){Pe("beforeDOMElementCreation",{assembler:n,params:a});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(w.cssPrefix,"-layers")].concat(ot(i)).join(" ")},children:s}]})}}}},Hd={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,s=a.classes,o=s===void 0?[]:s,l=a.attributes,u=l===void 0?{}:l,d=a.styles,p=d===void 0?{}:d;return Yt({type:"counter",content:n},function(){return Pe("beforeDOMElementCreation",{content:n,params:a}),kd({content:n.toString(),title:i,extra:{attributes:u,styles:p,classes:["".concat(w.cssPrefix,"-layers-counter")].concat(ot(o))}})})}}}},Bd={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?me:r,s=a.title,o=s===void 0?null:s,l=a.classes,u=l===void 0?[]:l,d=a.attributes,p=d===void 0?{}:d,v=a.styles,k=v===void 0?{}:v;return Yt({type:"text",content:n},function(){return Pe("beforeDOMElementCreation",{content:n,params:a}),Ja({content:n,transform:x(x({},me),i),title:o,extra:{attributes:p,styles:k,classes:["".concat(w.cssPrefix,"-layers-text")].concat(ot(u))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,s=a.extra,o=null,l=null;if(fi){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();o=d.width/u,l=d.height/u}return w.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Ja({content:n.innerHTML,width:o,height:l,transform:i,title:r,extra:s,watchable:!0})])}}},Yd=new RegExp('"',"ug"),sr=[1105920,1112319];function Wd(e){var t=e.replace(Yd,""),n=id(t,0),a=n>=sr[0]&&n<=sr[1],r=t.length===2?t[0]===t[1]:!1;return{value:En(r?t[0]:t),isSecondary:a||r}}function or(e,t){var n="".concat(Mu).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=Ye(e.children),s=i.filter(function(G){return G.getAttribute(Sn)===t})[0],o=Ae.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(Vu),u=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),a();if(l&&d!=="none"&&d!==""){var p=o.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?z:L,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?tt[v][l[2].toLowerCase()]:zu[v][u],T=Wd(p),R=T.value,M=T.isSecondary,I=l[0].startsWith("FontAwesome"),P=ra(k,R),N=P;if(I){var H=dd(R);H.iconName&&H.prefix&&(P=H.iconName,k=H.prefix)}if(P&&!M&&(!s||s.getAttribute(Zn)!==k||s.getAttribute(Jn)!==N)){e.setAttribute(n,N),s&&e.removeChild(s);var F=Dd(),se=F.extra;se.attributes[Sn]=t,Cn(P,k).then(function(G){var oe=sa(x(x({},F),{},{icons:{main:G,mask:ia()},prefix:k,iconName:N,extra:se,watchable:!0})),q=D.createElement("svg");t==="::before"?e.insertBefore(q,e.firstChild):e.appendChild(q),q.outerHTML=oe.map(function(C){return ct(C)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Gd(e){return Promise.all([or(e,"::before"),or(e,"::after")])}function qd(e){return e.parentNode!==document.head&&!~Du.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Sn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function lr(e){if(!!he)return new Promise(function(t,n){var a=Ye(e.querySelectorAll("*")).filter(qd).map(Gd),r=oa.begin("searchPseudoElements");Ii(),Promise.all(a).then(function(){r(),Pn(),t()}).catch(function(){r(),Pn(),n()})})}var Xd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=lr,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?D:a;w.searchPseudoElements&&lr(r)}}},cr=!1,Kd={mixout:function(){return{dom:{unwatch:function(){Ii(),cr=!0}}}},hooks:function(){return{bootstrap:function(){ar(Nn("mutationObserverCallbacks",{}))},noAuto:function(){Pd()},watch:function(n){var a=n.observeMutationsRoot;cr?Pn():ar(Nn("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},fr=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return a.flipX=!0,a;if(s&&o==="v")return a.flipY=!0,a;if(o=parseFloat(o),isNaN(o))return a;switch(s){case"grow":a.size=a.size+o;break;case"shrink":a.size=a.size-o;break;case"left":a.x=a.x-o;break;case"right":a.x=a.x+o;break;case"up":a.y=a.y-o;break;case"down":a.y=a.y+o;break;case"rotate":a.rotate=a.rotate+o;break}return a},n)},Qd={mixout:function(){return{parse:{transform:function(n){return fr(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=fr(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),d="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(l," ").concat(u," ").concat(d)},v={transform:"translate(".concat(s/2*-1," -256)")},k={outer:o,inner:p,path:v};return{tag:"g",attributes:x({},k.outer),children:[{tag:"g",attributes:x({},k.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:x(x({},a.icon.attributes),k.path)}]}]}}}},fn={x:0,y:0,width:"100%",height:"100%"};function ur(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Zd(e){return e.tag==="g"?e.children:[e]}var Jd={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Bt(r.split(" ").map(function(s){return s.trim()})):ia();return i.prefix||(i.prefix=Se()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,u=i.width,d=i.icon,p=s.width,v=s.icon,k=Qu({transform:l,containerWidth:p,iconWidth:u}),T={tag:"rect",attributes:x(x({},fn),{},{fill:"white"})},R=d.children?{children:d.children.map(ur)}:{},M={tag:"g",attributes:x({},k.inner),children:[ur(x({tag:d.tag,attributes:x(x({},d.attributes),k.path)},R))]},I={tag:"g",attributes:x({},k.outer),children:[M]},P="mask-".concat(o||rt()),N="clip-".concat(o||rt()),H={tag:"mask",attributes:x(x({},fn),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[T,I]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:Zd(v)},H]};return a.push(F,{tag:"rect",attributes:x({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(P,")")},fn)}),{children:a,attributes:r}}}},em={provides:function(t){var n=!1;Ae.matchMedia&&(n=Ae.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:x(x({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=x(x({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:x(x({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:x(x({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:x(x({},s),{},{values:"1;0;1;1;0;1;"})}),a.push(o),a.push({tag:"path",attributes:x(x({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:x(x({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:x(x({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:x(x({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},tm={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},nm=[ed,jd,Ud,Hd,Bd,Xd,Kd,Qd,Jd,em,tm];pd(nm,{mixoutsTo:ee});ee.noAuto;ee.config;ee.library;ee.dom;var Rn=ee.parse;ee.findIconDefinition;ee.toHtml;var am=ee.icon;ee.layer;ee.text;ee.counter;function dr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dr(Object(n),!0).forEach(function(a){ze(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Lt(e){return Lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Lt(e)}function ze(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rm(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function im(e,t){if(e==null)return{};var n=rm(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(n[a]=e[a]))}return n}function Mn(e){return sm(e)||om(e)||lm(e)||cm()}function sm(e){if(Array.isArray(e))return Ln(e)}function om(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function lm(e,t){if(!!e){if(typeof e=="string")return Ln(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ln(e,t)}}function Ln(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function cm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fm(e){var t,n=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,s=e.shake,o=e.flash,l=e.spin,u=e.spinPulse,d=e.spinReverse,p=e.pulse,v=e.fixedWidth,k=e.inverse,T=e.border,R=e.listItem,M=e.flip,I=e.size,P=e.rotation,N=e.pull,H=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":s,"fa-flash":o,"fa-spin":l,"fa-spin-reverse":d,"fa-spin-pulse":u,"fa-pulse":p,"fa-fw":v,"fa-inverse":k,"fa-border":T,"fa-li":R,"fa-flip":M===!0,"fa-flip-horizontal":M==="horizontal"||M==="both","fa-flip-vertical":M==="vertical"||M==="both"},ze(t,"fa-".concat(I),typeof I!="undefined"&&I!==null),ze(t,"fa-rotate-".concat(P),typeof P!="undefined"&&P!==null&&P!==0),ze(t,"fa-pull-".concat(N),typeof N!="undefined"&&N!==null),ze(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(H).map(function(F){return H[F]?F:null}).filter(function(F){return F})}function um(e){return e=e-0,e===e}function Ri(e){return um(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var dm=["style"];function mm(e){return e.charAt(0).toUpperCase()+e.slice(1)}function vm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=Ri(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?t[mm(r)]=i:t[r]=i,t},{})}function Mi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(l){return Mi(e,l)}),r=Object.keys(t.attributes||{}).reduce(function(l,u){var d=t.attributes[u];switch(u){case"class":l.attrs.className=d,delete t.attributes.class;break;case"style":l.attrs.style=vm(d);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=d:l.attrs[Ri(u)]=d}return l},{attrs:{}}),i=n.style,s=i===void 0?{}:i,o=im(n,dm);return r.attrs.style=ke(ke({},r.attrs.style),s),e.apply(void 0,[t.tag,ke(ke({},r.attrs),o)].concat(Mn(a)))}var Li=!1;try{Li=!0}catch{}function pm(){if(!Li&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function mr(e){if(e&&Lt(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Rn.icon)return Rn.icon(e);if(e===null)return null;if(e&&Lt(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function un(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ze({},e,t):{}}var ue=U.forwardRef(function(e,t){var n=e.icon,a=e.mask,r=e.symbol,i=e.className,s=e.title,o=e.titleId,l=e.maskId,u=mr(n),d=un("classes",[].concat(Mn(fm(e)),Mn(i.split(" ")))),p=un("transform",typeof e.transform=="string"?Rn.transform(e.transform):e.transform),v=un("mask",mr(a)),k=am(u,ke(ke(ke(ke({},d),p),v),{},{symbol:r,title:s,titleId:o,maskId:l}));if(!k)return pm("Could not find icon",u),null;var T=k.abstract,R={ref:t};return Object.keys(e).forEach(function(M){ue.defaultProps.hasOwnProperty(M)||(R[M]=e[M])}),gm(T[0],R)});ue.displayName="FontAwesomeIcon";ue.propTypes={beat:b.bool,border:b.bool,beatFade:b.bool,bounce:b.bool,className:b.string,fade:b.bool,flash:b.bool,mask:b.oneOfType([b.object,b.array,b.string]),maskId:b.string,fixedWidth:b.bool,inverse:b.bool,flip:b.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.oneOfType([b.object,b.array,b.string]),listItem:b.bool,pull:b.oneOf(["right","left"]),pulse:b.bool,rotation:b.oneOf([0,90,180,270]),shake:b.bool,size:b.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.bool,spinPulse:b.bool,spinReverse:b.bool,symbol:b.oneOfType([b.bool,b.string]),title:b.string,titleId:b.string,transform:b.oneOfType([b.string,b.object]),swapOpacity:b.bool};ue.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var gm=Mi.bind(null,U.createElement),bm={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},hm={prefix:"fas",iconName:"arrow-up-from-bracket",icon:[448,512,[],"e09a","M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"]},ym={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},xm={prefix:"fas",iconName:"image",icon:[512,512,[],"f03e","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]},wm={prefix:"fas",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"]},km={prefix:"fas",iconName:"location-crosshairs",icon:[512,512,["location"],"f601","M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"]},Am={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},Sm={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Em={prefix:"fas",iconName:"video",icon:[576,512,["video-camera"],"f03d","M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"]};const O={locationDot:Sm,user:ym,image:xm,circlePlay:wm,fileLines:bm,video:Em,clock:Am,upload:hm,target:km},Om=e=>{switch(e){case"covid":return"bg-gradient-to-b from-orange-100 to-white";case"heimspiel":return"bg-gradient-to-b from-rose-100 to-white";default:return"bg-gradient-to-b from-stone-100 to-white"}};function Nm({location:e,locationIcon:t}){return $("div",{className:"bg-neutral-200 border-2 border-neutral-300 rounded-md p-1 px-2 font-thin text-[15px] mr-3 flex ",children:[e," ",h(ue,{icon:t,className:"ml-1"})]})}function vr({participantsCount:e,participantsIcon:t,clock:n,duration:a,separate:r=!1}){return $("div",{className:"rounded-xl bg-white px-2 shadow flex mx-2",children:[$("div",{className:"flex bg-gradient-to-l from-gray-100",children:[h(ue,{icon:n,className:"text-[14px] mr-1 py-1"}),h("div",{className:`font-bold text-[14px] ${r?"pr-2 py-1 border-r":""}`,children:a})]}),$("div",{className:`flex p-1 ${e?"space-x-1":""} ${r?"pl-2":""}`,children:[h(ue,{icon:t,className:"text-[14px]"}),h("div",{className:"font-bold text-[14px]",children:e})]})]})}function Tm({upload:e}){return h("div",{className:"rounded-md p-1 px-2 shadow flex mx-2 border-gray-400 border",children:h(ue,{icon:e,className:"text-[14px] "})})}function _m({event:e,day:t}){if(!Er(e.start,t))return null;const{location:n,participantsCount:a,locationIcon:r,participantsIcon:i,type:s,exercises:o,upload:l,clock:u,duration:d}=e,p=Om(s);return h("div",{className:`event-card ${p} border-white border-2 rounded-md shadow mb-3 m-1 overflow-hidden`,children:o.map((v,k)=>$(U.Fragment,{children:[k===0&&h(Dn,{children:$("div",{className:"flex items-center flex-wrap mb-1 border-b-2 border-gray-300 ",children:[$("div",{className:"flex justify-between items-center space-x-2 m-3 pb-1 w-full",children:[$("div",{className:"flex items-center space-x-2",children:[s=="heimspiel"?h("div",{className:"bg-rose-100 border-2 border-red-200 rounded-md p-1 font-thin text-[15px]",children:Xe(e.start,"HH:mm")}):null,s=="training"?h("div",{className:"bg-neutral-200 border-2 border-neutral-300 rounded-md p-1 font-thin text-[15px]",children:Xe(e.start,"HH:mm")}):null,s=="covid"?h("div",{className:"bg-orange-100 border-2 border-orange-200 rounded-md p-1 font-thin text-[15px]",children:Xe(e.start,"HH:mm")}):null,h("div",{className:"font-bold text-[21px] ",children:e.title})]}),s!=="heimspiel"&&s!=="covid"?h(Nm,{location:n,locationIcon:r}):null]}),v.descriptionPosition==="afterTitle"&&h("div",{className:"text-lg p-3 -mt-3 w-full",children:v.description})]})}),k===0&&$("div",{className:"flex justify-between items-center m-1",children:[h(vr,{participantsCount:a,participantsIcon:i}),$("div",{className:"flex justify-end items-between",children:[s!=="covid"?h("div",{className:"rounded-xl bg-white p-1 shadow flex px-2 space-x-1 ",children:k===0&&o.reduce((T,R)=>((R.files||[]).forEach(M=>{T.find(I=>I.iconName===M.iconName)||T.push(M)}),T),[]).map((T,R)=>h(ue,{icon:T,className:"text-[14px]"},R))}):null,h(Tm,{upload:l})]})]}),s!=="heimspiel"&&s!=="covid"?h("div",{className:"border-t-2 pt-2 pb-4 border-gray-300",children:$("div",{className:"h-4/5 ",children:[$("div",{className:"flex items-center mb-2",children:[$("div",{className:"p-1.5 text-[16px] font-bold ml-2",children:[k+1,"."]}),h("div",{className:" text-[16px] font-bold",children:v.name})]}),$("div",{className:"flex justify-between items-center m-1 mx-2  ",children:[h(vr,{participantsCount:v.participantsCount||0,participantsIcon:i,clock:u,duration:v.duration,separate:!0}),v.files&&v.files.length>0&&h("div",{className:"rounded-xl bg-white p-1 shadow flex px-2 space-x-1",style:{maxWidth:"80px"},children:v.files.map((T,R)=>h(ue,{icon:T,className:"text-[14px]"},R))})]}),h("div",{className:"p-1 flex px-6 mt-2 space-x-1",children:h(ue,{icon:O.target,className:"text-[16px]"})}),v.descriptionPosition!=="afterTitle"&&h("div",{className:" -mt-5 ml-12 mr-6 text-lg ",children:v.description}),k!==o.length-1&&h("div",{className:"event-card bg-gray-200  "})]})}):null]},`${v.name}-${k}`))})}const Cm=[{id:"1",title:"Training",type:"training",start:new Date("2023-04-07T10:00:00Z"),location:"P1",locationIcon:O.locationDot,participantsCount:"13+2",participantsIcon:O.user,attachments:[],upload:O.upload,clock:O.clock,exercises:[{name:"Aktivierung",description:"Aktivierung, Qualit\xE4t, -viele Ballkontakte",participantsCount:12,files:[O.image],duration:"30"},{name:"5vs5 +2 (+TW Rondo",description:"SmB, Herrausspielen von Torchancen, \xFCber das Zentrum Durchg\xE4nge: 4x2, 1' Pause",participantsCount:5,files:[O.image,O.circlePlay,O.video],duration:"30"},{name:"Battle Passen Spielafubau",description:"SmB, Spielaufbau, gegen Mittelfeldpressing Neutralem",participantsCount:5,files:[O.image,O.fileLines],duration:"30"},{name:"Rondo Spielaufbau",description:"SmB, Spielaufbau, gegen Angriffspressing, 7v7+1 - 10",participantsCount:5,files:[O.image],duration:"30"}]},{id:"2",title:"Test",type:"training",start:new Date("2023-04-07T12:00:00Z"),location:"P1",participantsCount:"13",locationIcon:O.locationDot,participantsIcon:O.user,attachments:[],upload:O.upload,clock:O.clock,exercises:[{name:"Aktivierung",description:"This is the description",participantsCount:5,files:[O.image,O.fileLines],duration:"30"},{name:"5vs5 +2 (+TW Rondo",description:"SmB, Herrausspielen von Torchancen, \xFCber das Zentrum Durchg\xE4nge: 4x2, 1' Pause",participantsCount:5,files:[],duration:"30"},{name:"Battle Passen Spielafubau",description:"SmB, Spielaufbau, gegen Mittelfeldpressing Neutralem",participantsCount:5,files:[O.image],duration:"30"}]},{id:"3",title:"Team",type:"training",start:new Date("2023-04-05T14:00:00Z"),location:"P4",participantsCount:"6",locationIcon:O.locationDot,participantsIcon:O.user,attachments:[],upload:O.upload,clock:O.clock,exercises:[{name:"Lorem Ipsum",description:"This is the description This is the description ",participantsCount:3,duration:"30"},{name:"Spielform",description:"This is the description",participantsCount:5,files:[O.circlePlay,O.video],duration:"30"}]},{id:"4",title:"Heimspiel",type:"heimspiel",start:new Date("2023-04-05T16:00:00Z"),participantsCount:"12+2",participantsIcon:O.user,attachments:[],upload:O.upload,clock:O.clock,exercises:[{name:"",description:"RB Leipzig U16 3 : 2 CZ Jena U17",descriptionPosition:"afterTitle",participantsCount:5,files:[O.image,O.fileLines,O.video]}]},{id:"5",title:"COVID-Testung",type:"covid",start:new Date("2023-04-06T07:00:00Z"),participantsCount:"",participantsIcon:O.user,attachments:[],upload:O.upload,clock:O.clock,exercises:[{name:"",description:"G\xE4ste Kabine 3",descriptionPosition:"afterTitle"}]},{id:"6",title:"Yoga",type:"training",start:new Date("2023-04-03T07:00:00Z"),participantsIcon:O.user,location:"P4",participantsCount:"11",locationIcon:O.locationDot,attachments:[],upload:O.upload,clock:O.clock,exercises:[{name:"Pilatis Yoga",description:"Eine sch\xF6ne Yoga Stunde f\xFCr alle die mitmachen wollen",participantsCount:11,files:[O.circlePlay,O.video],duration:"30"},{name:"Spielform",description:"SmB, Spielaufbau, gegen Mittelfeldpressing Neutralem",participantsCount:8,files:[O.image],duration:"60"}]}],Di=jo([hs.HOME,ys,xs.ROOT]),Im=Su(Di),Pm=()=>{const e=kr(new Date),t=Qt(e,{weekStartsOn:1});Gf({id:Ls,shouldLoadOnMount:!0});const[n,a]=J.exports.useState(t);J.exports.useCallback(o=>{a(o)},[]);const r=J.exports.useCallback(o=>{a(Qt(o,{weekStartsOn:1}))},[]),i=Qt(n,{weekStartsOn:1});vn(i,6);const s=Array(7).fill().map((o,l)=>vn(i,l));return $(zn,{base:Di,routes:Im,children:[h(qf,{}),$("div",{className:"h-full flex flex-col overflow-hidden",children:[h("div",{children:h(bs,{className:"relative z-20",title:Xf.pageTitle,dateCyclePicker:h(Ts,{value:i,onChange:r})})}),$("div",{className:"flex flex-col h-full ",children:[h("div",{className:"flex sticky top-0 z-10 bg-secondary mx-4",children:s.map(o=>$("div",{className:it("flex-1 p-3 border-solid border-x border-gray-300 shadow",{"bg-white":o.getDate()===e.getDate()}),children:[$("div",{className:"flex",children:[h("div",{className:"font-bold text-[16px] ml-2 ",children:Xe(o,"EEEE",{locale:_s}).substring(0,2).toUpperCase()}),h("div",{className:"text-[16px] ml-2 relative",children:Xe(o,"dd.MM.")})]}),Er(o,e)&&h("div",{className:"relative",children:h("div",{className:"absolute -inset-x-1 bottom-5 h-1 rounded-sm bg-blue-900"})})]},o.getTime()))}),h("div",{className:"flex flex-row h-full mx-4 overflow-y-auto ",children:s.map((o,l)=>h("div",{className:`bg-secondary border border-gray-300 p-0.5 flex-1 h-full overflow-auto relative ${o.getDate()===e.getDate()?"bg-white":""}`,style:{overflowY:"scroll",WebkitScrollbar:{display:"none"},msOverflowStyle:"none",scrollbarWidth:"none"},children:Cm.map(u=>h(_m,{event:u,day:o},u.id))},o.getTime()))})]})]})]})};var Vm=U.memo(Pm);export{Vm as default};
