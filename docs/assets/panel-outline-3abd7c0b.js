import{s,a as o,b as i}from"./index-cda51cb1.js";import{D as _}from"./vendor-ec62499d.js";import{e as c,aR as f,aJ as h,a0 as y,f as u,bm as x,u as l,az as K,E as k}from"./module-@vue-9afab382.js";import"./module-ant-design-vue-258d5cb4.js";const S={class:"panel-outline"},z={__name:"panel-outline",setup(g){const n=c(()=>s.value&&s.value.id?[s.value.id]:[]);function r(t){return t&&t.length==0?[]:t.map(e=>({title:e.nameAlias||e.name,key:e.id,icon:e.icon,path:e.path,children:r(e.childrenList)}))}const d=c(()=>[{title:"表单",key:o.id,icon:"layer-group-icon",children:r(o.childrenList)}]);function p(t,{node:e}){if(e.parent===void 0){i();return}i(e.path)}return(t,e)=>{const m=f("a-tree");return h(),y("div",S,[u(m,{selectedKeys:l(n),"onUpdate:selectedKeys":e[0]||(e[0]=a=>k(n)?n.value=a:null),"tree-data":l(d),"default-expand-all":"",onSelect:p},{switcherIcon:x(({switcherCls:a})=>[u(l(_),{class:K(a)},null,8,["class"])]),_:1},8,["selectedKeys","tree-data"])])}}};export{z as default};
