import{D as _}from"./module-vuedraggable-cb99c523.js";import{C as x,u as g,P as C,F as L,c as d,a as f,s as y,b as T}from"./index-1c2e4fb4.js";import{ao as A}from"./vendor-7fe5cd63.js";import{r as E,k as K,aR as v,aJ as o,_ as c,bm as n,f as s,u as t,a0 as h,aS as k,D as b,b1 as D}from"./module-@vue-9afab382.js";import"./module-@codemirror-0a1ca704.js";import"./module-ant-design-vue-3c30247f.js";const S=[{id:A(),name:"card",type:x,icon:"card-icon",childrenList:[],options:{title:"卡片标题",hidden:!1,cardWidth:"100%"}}],$=S.map(a=>(a.nameAlias=g([C,a.name]),a)),B=[{id:A(),name:"button",type:L,icon:"button-icon",options:{text:"按钮",type:"default"},selects:{type:[{value:"default"},{value:"primary"},{value:"danger"}]}}],O=B.map(a=>(a.nameAlias=g([C,a.name]),a)),F=E($),G=E(O);const I=["title","onDblclick"],J=["title","onDblclick"],j={__name:"panel-component",setup(a){const i=K(["1","2"]),m=r=>{y.childrenList.push(r),T(y.childrenList)};return(r,p)=>{const u=v("a-collapse-panel"),N=v("a-collapse");return o(),c(N,{activeKey:i.value,"onUpdate:activeKey":p[0]||(p[0]=e=>i.value=e),bordered:!1,class:"custom-collapse",ghost:""},{default:n(()=>[s(u,{key:"1",header:"容器组件"},{default:n(()=>[s(t(_),{tag:"ul",class:"widget-ul",list:t(F),group:{name:"dragGroup",pull:"clone",put:!1},move:t(d),clone:t(f),"item-key":"id"},{item:n(({element:e,index:l})=>[(o(),h("li",{class:"widget-item",key:l,title:e.name,onDblclick:P=>m(e),slot:"item"},[(o(),c(k(e.icon))),b(" "+D(e.nameAlias||e.name),1)],40,I))]),_:1},8,["list","move","clone"])]),_:1}),s(u,{key:"2",header:"基础字段"},{default:n(()=>[s(t(_),{tag:"ul",class:"widget-ul",list:t(G),group:{name:"dragGroup",pull:"clone",put:!1},move:t(d),clone:t(f),"item-key":"id"},{item:n(({element:e,index:l})=>[(o(),h("li",{class:"widget-item",key:l,title:e.name,onDblclick:P=>m(e),slot:"item"},[(o(),c(k(e.icon))),b(" "+D(e.nameAlias||e.name),1)],40,J))]),_:1},8,["list","move","clone"])]),_:1})]),_:1},8,["activeKey"])}}};export{j as default};
