import{S as h,C as f}from"./theme.Bx59wom8.js";import{h as d,l as v,o as _,c as M,m as a,t as p,a as u,F as y}from"./framework.B2LRalDI.js";const C=a("div",{style:{position:"relative"}},[a("ic-canvas-lesson8")],-1),E={__name:"Culling",setup(g){const o=d(0),c=d(0),s=[];let r;const n=new h;n.showPanel(0);const l=n.dom;l.style.position="absolute",l.style.left="0px",l.style.top="0px";const i=()=>{for(let e=0;e<500;e++){const t=new f({cx:Math.random()*1e3,cy:Math.random()*1e3,r:Math.random()*20,fill:`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`});r.appendChild(t),s.push(t)}};return v(()=>{const e=document.querySelector("ic-canvas-lesson8");e.parentElement.appendChild(l),e.addEventListener("ic-ready",t=>{r=t.detail,i()}),e.addEventListener("ic-frame",t=>{n.update(),o.value=s.length,c.value=s.filter(m=>m.culled).length})}),(e,t)=>(_(),M(y,null,[a("span",null,"total: "+p(o.value),1),u("   "),a("span",null,"culled: "+p(c.value),1),u("   "),a("sl-button",{size:"small",onClick:i},"Add 500 circles"),C],64))}};export{E as _};
