System.register(["./index-legacy-f984dee1.js","./vendor-legacy-0bea67dd.js","./module-@vue-legacy-fc3cdb82.js","./module-vuedraggable-legacy-5b5814bb.js","./module-@codemirror-legacy-14bf1a88.js","./module-ant-design-vue-legacy-1075fa93.js"],(function(e,t){"use strict";var n,l,a,i,o,c,r,s,d,u,p,y,m,g,h,v,f=document.createElement("style");return f.textContent=".panel-outline{padding-top:12px;height:100%}.panel-outline .ant-tree-node-content-wrapper{display:flex;align-items:center}.panel-outline .ant-tree-node-content-wrapper .anticon.elysia-icon{font-size:16px}.panel-outline .ant-tree-node-content-wrapper .ant-tree-title{min-width:32px;text-align:center;color:var(--primary-color)!important}\n",document.head.appendChild(f),{setters:[e=>{n=e.d,l=e.s,a=e.C,i=e.e},e=>{o=e.Q},e=>{c=e.e,r=e.aR,s=e.aJ,d=e.a0,u=e.f,p=e.bm,y=e.u,m=e.az,g=e._,h=e.aS,v=e.E},null,null,null],execute:function(){const t={class:"panel-outline"};e("default",{__name:"panel-outline",setup(e){const f=c((()=>n.value&&n.value.id?[n.value.id]:[]));function x(e){return e&&0==e.length?[]:e.map((e=>{const t={title:e.nameAlias||e.name,key:e.id,iconType:e.icon,path:e.path};return e.type===a&&(t.children=x(e.childrenList)),t}))}const w=c((()=>[{title:"表单",key:l.id,iconType:"layer-group-icon",children:x(l.childrenList)}]));function j(e,{node:t}){void 0!==t.parent?i(t.path):i()}return(e,n)=>{const l=r("a-tree");return s(),d("div",t,[u(l,{selectedKeys:y(f),"onUpdate:selectedKeys":n[0]||(n[0]=e=>v(f)?f.value=e:null),"tree-data":y(w),"show-icon":"","default-expand-all":"",onSelect:j},{switcherIcon:p((({switcherCls:e})=>[u(y(o),{class:m(e)},null,8,["class"])])),icon:p((({iconType:e})=>[(s(),g(h(e)))])),_:1},8,["selectedKeys","tree-data"])])}}})}}}));
