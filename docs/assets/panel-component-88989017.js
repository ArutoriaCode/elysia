import{e as x,C as A}from"./module-ant-design-vue-cd44f240.js";import{ac as h}from"./vendor-27e8d7b7.js";import{u as $,c as E,a as v,b as r,f as K,d as y,e as B,r as M}from"./index-ad4bb90e.js";import{k as P,aJ as s,$ as p,bm as l,f as c,u as t,a1 as k,aS as b,D,b1 as g}from"./module-@vue-50b83bc4.js";import"./module-dayjs-a26c16b1.js";import"./module-lodash-isequal-55ce7966.js";import"./module-lodash-clonedeep-8dddd65f.js";import"./module-axios-1453fd4d.js";const V=["title","onDblclick"],G=["title","onDblclick"],z={__name:"panel-component",setup(J){const _=P(["1","2"]),u=o=>{const a=y.childrenList.length-1;o.path=[a<0?0:a],y.childrenList.push(r(o))},C=$(),d=()=>{C.value<=768&&B(!1)},f=o=>{if(o.to===o.from)return;const a=o.item._underlying_vm_,n=o.to.__draggable_component__.componentData,i=n.name?`向${n.name}组件插入${a.nameAlias||a.name}组件`:`添加${a.nameAlias}组件`;M.add(i,"history-add-icon")};return(o,a)=>{const n=x,i=A;return s(),p(i,{activeKey:_.value,"onUpdate:activeKey":a[0]||(a[0]=e=>_.value=e),bordered:!1,class:"custom-collapse",ghost:""},{default:l(()=>[c(n,{key:"1",header:"容器组件"},{default:l(()=>[c(t(h),{tag:"ul",class:"widget-ul","item-key":"id",list:t(E),group:{name:"dragGroup",pull:"clone",put:!1},move:t(v),clone:t(r),sort:!1,onStart:d,onEnd:f},{item:l(({element:e,index:m})=>[(s(),k("li",{class:"widget-item",key:m,title:e.nameAlias||e.name,onDblclick:S=>u(e),slot:"item"},[(s(),p(b(e.icon))),D(" "+g(e.nameAlias||e.name),1)],40,V))]),_:1},8,["list","move","clone"])]),_:1}),c(n,{key:"2",header:"基础字段"},{default:l(()=>[c(t(h),{tag:"ul",class:"widget-ul","item-key":"id",list:t(K),group:{name:"dragGroup",pull:"clone",put:!1},clone:t(r),sort:!1,move:t(v),onStart:d,onEnd:f},{item:l(({element:e,index:m})=>[(s(),k("li",{class:"widget-item",key:m,title:e.nameAlias||e.name,onDblclick:S=>u(e),slot:"item"},[(s(),p(b(e.icon))),D(" "+g(e.nameAlias||e.name),1)],40,G))]),_:1},8,["list","clone","move"])]),_:1})]),_:1},8,["activeKey"])}}};export{z as default};