System.register(["./module-ant-design-vue-legacy-ea759397.js","./index-legacy-7b9b8c8d.js","./vendor-legacy-4ac25bea.js","./module-@vue-legacy-fc3cdb82.js"],(function(e,t){"use strict";var n,a,o,l,i,r,c,s,p,u,d,h,m,y,g,f,v,w=document.createElement("style");return w.textContent=".panel-outline{padding-top:12px;height:100%}.panel-outline .ant-tree-node-content-wrapper{display:flex;align-items:center}.panel-outline .ant-tree-node-content-wrapper .anticon,.panel-outline .ant-tree-node-content-wrapper .elysia-icon{font-size:16px;color:var(--primary-color)!important}.panel-outline .ant-tree-node-content-wrapper .ant-tree-title{min-width:32px;text-align:center;color:var(--primary-color)!important}\n",document.head.appendChild(w),{setters:[e=>{n=e.h},e=>{a=e.s,o=e.d,l=e.e,i=e.C},e=>{r=e.D},e=>{c=e.e,s=e.r,p=e.w,u=e.aJ,d=e.a0,h=e.f,m=e.bm,y=e.u,g=e.az,f=e._,v=e.aS}],execute:function(){const t={class:"panel-outline"};e("default",{__name:"panel-outline",setup(e){const w=c((()=>a.value&&a.value.id?[a.value.id]:[]));function x(e,t){return e&&0==e.length?[]:e.map(((e,n)=>{const a={title:e.nameAlias||e.name,key:e.id,iconType:e.icon,path:[...t,n]};return e.type===i&&(a.children=x(e.childrenList,a.path)),a}))}const T=s([{title:"表单",key:o.id,iconType:"layer-group-icon",children:[],path:["root"]}]),j=function(e,t=250){let n=null;return function(...a){n&&clearTimeout(n),n=setTimeout((()=>{e(...a),n=null}),t||250)}}((e=>{const t=x(e,["root"]);T[0].children=t}),800);function C(e,{node:t}){void 0!==t.parent?l(t.path):l()}return p((()=>o.childrenList),j,{deep:!0}),(e,a)=>{const o=n;return u(),d("div",t,[h(o,{"tree-data":T,selectedKeys:y(w),"show-icon":"","default-expand-all":"",onSelect:C},{switcherIcon:m((({switcherCls:e})=>[h(y(r),{class:g(e)},null,8,["class"])])),icon:m((({iconType:e})=>[(u(),f(v(e)))])),_:1},8,["tree-data","selectedKeys"])])}}})}}}));