import{e as x,C as A}from"./module-ant-design-vue-cd44f240.js";import{ac as h}from"./vendor-27e8d7b7.js";import{u as $,c as E,a as v,b as r,f as K,d as y,e as B,r as M}from"./index-c45ea083.js";import{k as P,aJ as s,$ as p,bm as l,f as c,u as o,a1 as k,aS as b,D,b1 as g}from"./module-@vue-50b83bc4.js";import"./module-dayjs-a26c16b1.js";import"./module-lodash-clonedeep-8dddd65f.js";import"./module-axios-1453fd4d.js";const V=["title","onDblclick"],G=["title","onDblclick"],q={__name:"panel-component",setup(J){const _=P(["1","2"]),u=n=>{const a=y.childrenList.length-1;n.path=[a<0?0:a],y.childrenList.push(r(n))},C=$(),d=()=>{C.value<=768&&B(!1)},f=n=>{if(n.to===n.from)return;const a=n.item._underlying_vm_,t=n.to.__draggable_component__.componentData,i=t.name?`向${t.name}组件插入${a.nameAlias||a.name}组件`:`添加${a.nameAlias}组件`;M.add(i,"history-add-icon")};return(n,a)=>{const t=x,i=A;return s(),p(i,{activeKey:_.value,"onUpdate:activeKey":a[0]||(a[0]=e=>_.value=e),bordered:!1,class:"custom-collapse",ghost:""},{default:l(()=>[c(t,{key:"1",header:"容器组件"},{default:l(()=>[c(o(h),{tag:"ul",class:"widget-ul","item-key":"id",list:o(E),group:{name:"dragGroup",pull:"clone",put:!1},move:o(v),clone:o(r),sort:!1,onStart:d,onEnd:f},{item:l(({element:e,index:m})=>[(s(),k("li",{class:"widget-item",key:m,title:e.nameAlias||e.name,onDblclick:S=>u(e),slot:"item"},[(s(),p(b(e.icon))),D(" "+g(e.nameAlias||e.name),1)],40,V))]),_:1},8,["list","move","clone"])]),_:1}),c(t,{key:"2",header:"基础字段"},{default:l(()=>[c(o(h),{tag:"ul",class:"widget-ul","item-key":"id",list:o(K),group:{name:"dragGroup",pull:"clone",put:!1},clone:o(r),sort:!1,move:o(v),onStart:d,onEnd:f},{item:l(({element:e,index:m})=>[(s(),k("li",{class:"widget-item",key:m,title:e.nameAlias||e.name,onDblclick:S=>u(e),slot:"item"},[(s(),p(b(e.icon))),D(" "+g(e.nameAlias||e.name),1)],40,G))]),_:1},8,["list","clone","move"])]),_:1})]),_:1},8,["activeKey"])}}};export{q as default};
