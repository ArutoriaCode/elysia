import{h as T}from"./module-ant-design-vue-cc689e66.js";import{s as i,d as p,e as d,C as w}from"./index-8510ee37.js";import{D as k}from"./vendor-30660da8.js";import{e as x,r as C,w as S,aJ as _,a0 as g,f as m,bm as f,u as h,az as D,_ as K,aS as b}from"./module-@vue-bde5bc49.js";function v(u,c=250){let t=null;function o(...r){t&&clearTimeout(t),t=setTimeout(()=>{u(...r),t=null},c||250)}return o}const B={class:"panel-outline"},A={__name:"panel-outline",setup(u){const c=x(()=>i.value&&i.value.id?[i.value.id]:[]);function t(n,a){return n&&n.length==0?[]:n.map((e,s)=>{const l={title:e.nameAlias||e.name,key:e.id,iconType:e.icon,path:[...a,s]};return e.type===w&&(l.children=t(e.childrenList,l.path)),l})}const o=C([{title:"表单",key:p.id,iconType:"layer-group-icon",children:[],path:["root"]}]),r=v(n=>{const a=t(n,["root"]);o[0].children=a},800);S(()=>p.childrenList,r,{deep:!0});function y(n,{node:a}){if(a.parent===void 0){d();return}d(a.path)}return(n,a)=>{const e=T;return _(),g("div",B,[m(e,{"tree-data":o,selectedKeys:h(c),"show-icon":"","default-expand-all":"",onSelect:y},{switcherIcon:f(({switcherCls:s})=>[m(h(k),{class:D(s)},null,8,["class"])]),icon:f(({iconType:s})=>[(_(),K(b(s)))]),_:1},8,["tree-data","selectedKeys"])])}}};export{A as default};
