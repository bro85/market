(self.webpackChunkbuildmarket_angular=self.webpackChunkbuildmarket_angular||[]).push([[949],{866:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(1116),a=r(5366);let n=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[s.ez]]}),e})()},1663:(e,t,r)=>{"use strict";r.d(t,{f:()=>a});var s=r(5366);let a=(()=>{class e{transform(e){return null!=e?e.replace(/,/g," "):""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=s.Yjl({name:"removeComma",type:e,pure:!0}),e})()},5031:(e,t,r)=>{"use strict";r.d(t,{M:()=>c});var s=r(529),a=r(9996),n=r(5366),i=r(2693),u=r(5540);let c=(()=>{class e{constructor(e,t){this._http=e,this._angularFireDatabase=t}create(e){return this._angularFireDatabase.list(`/products/${e.type}`).push(e)}getAll(){return this._http.get(`${s.N.firebaseConfig.databaseURL}/products.json`).pipe((0,a.U)(e=>{let t={};const r=Object.values(e);for(let s=0;s<r.length;s++)t=Object.assign(t,r[s]);return Object.keys(t).map(e=>Object.assign(Object.assign({},t[e]),{id:e}))}))}getByTypeAndID(e,t){return this._http.get(`${s.N.firebaseConfig.databaseURL}/products/${e}/${t}.json`).pipe((0,a.U)(e=>null===e?{}:Object.assign(Object.assign({},e),{id:t})))}getProductsByType(e){return this._http.get(`${s.N.firebaseConfig.databaseURL}/products/${e}.json`).pipe((0,a.U)(e=>e?Object.keys(e).map(t=>Object.assign(Object.assign({},e[t]),{id:t})):[]))}remove(e){return this._angularFireDatabase.object(`/products/${e.type}/${e.id}`).remove()}update(e){return this._angularFireDatabase.list(`/products/${e.type}`).set(e.id,e)}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(i.eN),n.LFG(u.KQ))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);