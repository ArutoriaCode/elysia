import{o as E,B as R,f as L,i as M}from"./module-ant-design-vue-864937ee.js";import{ay as U}from"./vendor-617d4299.js";import{m as J,s as P,n as $,d as f,p as b}from"./index-ac255be8.js";import{u as z,a as A}from"./usePropEditorModel-3f3004d2.js";import{k as y,aR as v,aJ as F,$ as G,bm as c,f as l,u as o,E as C,a2 as H}from"./module-@vue-50b83bc4.js";import"./module-dayjs-a26c16b1.js";import"./module-lodash-clonedeep-8dddd65f.js";import"./module-axios-1453fd4d.js";import"./module-lodash-isequal-55ce7966.js";const O=H("span",{style:{"margin-bottom":"2px"}},"编辑",-1),Z={__name:"style-editor",setup(T){const g=[U()],r=y(!1),x=()=>{r.value=!0},{modelValue:s,propertyCN:m,property:u,action:h}=z(),{propertyModel:i,action:N}=A("className"),p=y([]);function d(){o(s)&&J(o(s),P.value.id);let n=[];!$()&&f.options.globalStyle&&n.push(...b(f.options.globalStyle,t=>({value:"$global-"+t,label:"[Global] "+t})));const e=b(s,t=>({value:t,label:t,key:t}));e.length>0&&n.push(...e),p.value=n}d();const _=()=>{h.record(()=>d())};return(n,e)=>{const t=E,k=v("css-icon"),w=R,V=v("codemirror"),B=L,S=M;return F(),G(S,{class:"style-editor",label:o(m)||o(u)},{default:c(()=>[l(t,{showSearch:"",mode:"multiple",style:{width:"calc(100% - 90px)"},value:o(i),"onUpdate:value":e[0]||(e[0]=a=>C(i)?i.value=a:null),options:p.value,"max-tag-count":2,allowClear:"",onChange:o(N).record},null,8,["value","options","onChange"]),l(w,{onClick:x,class:"property-edit-btn"},{default:c(()=>[l(k),O]),_:1}),l(B,{visible:r.value,"onUpdate:visible":e[2]||(e[2]=a=>r.value=a),title:o(m)||o(u),footer:null,keyboard:!1,class:"custom-code-modal",onCancel:_,onOk:_},{default:c(()=>[l(V,{modelValue:o(s),"onUpdate:modelValue":e[1]||(e[1]=a=>C(s)?s.value=a:null),style:{width:"100%",height:"450px"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:g},null,8,["modelValue"])]),_:1},8,["visible","title"])]),_:1},8,["label"])}}};export{Z as default};
