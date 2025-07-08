import{d as r,r as n,o as c,V as a,W as i,X as p,H as t,y as l,x as d,B as m}from"./D8zcN_Cm.js";import{c as h}from"./8mVmalma.js";/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=h("arrow-up-to-line",[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]]),v=r({__name:"GoToTop",setup(u){const o=n(!1),e=()=>{o.value=window.scrollY>200},s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return c(()=>{window.addEventListener("scroll",e)}),a(()=>{window.removeEventListener("scroll",e)}),(x,f)=>i((l(),d("div",{onClick:s,class:"fixed bottom-[40px] right-[20px] md:bottom-[60px] md:right-[30px] flex justify-center items-center w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] cursor-pointer z-[1000] bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)]"},[m(t(w))],512)),[[p,t(o)]])}});export{v as _};
