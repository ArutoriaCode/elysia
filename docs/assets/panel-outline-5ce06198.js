import{s,a as r,b as c}from"./index-f6d222cf.js";import{D as y}from"./vendor-5a34a4af.js";import{e as i,aR as h,aJ as u,a0 as k,f as p,bm as d,u as l,az as x,_ as K,aS as S,E as v}from"./module-@vue-9afab382.js";import"./module-ant-design-vue-644479de.js";const w={class:"panel-outline"},b={__name:"panel-outline",setup(C){const a=i(()=>s.value&&s.value.id?[s.value.id]:[]);function o(t){return t&&t.length==0?[]:t.map(e=>({title:e.nameAlias||e.name,key:e.id,iconType:e.icon,path:e.path,children:o(e.childrenList)}))}const m=i(()=>[{title:"表单",key:r.id,iconType:"layer-group-icon",children:o(r.childrenList)}]);function _(t,{node:e}){if(e.parent===void 0){c();return}c(e.path)}return(t,e)=>{const f=h("a-tree");return u(),k("div",w,[p(f,{selectedKeys:l(a),"onUpdate:selectedKeys":e[0]||(e[0]=n=>v(a)?a.value=n:null),"tree-data":l(m),"show-icon":"","default-expand-all":"",onSelect:_},{switcherIcon:d(({switcherCls:n})=>[p(l(y),{class:x(n)},null,8,["class"])]),icon:d(({iconType:n})=>[(u(),K(S(n)))]),_:1},8,["selectedKeys","tree-data"])])}}};export{b as default};