import{q,i as C,I as U,o as w}from"./module-ant-design-vue-cd44f240.js";import{u as E,a as d}from"./usePropEditorModel-e634d3d0.js";import{aJ as c,a1 as _,f as l,bm as n,u as e,E as s,F as L,a0 as N}from"./module-@vue-50b83bc4.js";import"./vendor-27e8d7b7.js";import"./module-dayjs-a26c16b1.js";import"./index-ad4bb90e.js";import"./module-lodash-isequal-55ce7966.js";import"./module-lodash-clonedeep-8dddd65f.js";import"./module-axios-1453fd4d.js";const V={class:"rules-editor property-editor"},H={__name:"rules",setup($){const{modelValue:r,propertyCN:v}=E(),{propertyAlias:g,propertyModel:u,action:b}=d("x-rules"),{propertyAlias:f,propertyModel:p,action:y}=d("x-required-message"),{propertyAlias:M,propertyModel:i,action:x}=d("x-error-message"),k=[{value:"/^w*?$/",label:"只允许字母"},{value:"/^d*$/",label:"只允许数字"}];return(h,o)=>{const A=q,t=C,m=U,B=w;return c(),_("div",V,[l(t,{label:e(v)},{default:n(()=>[l(A,{checked:e(r),"onUpdate:checked":o[0]||(o[0]=a=>s(r)?r.value=a:null)},null,8,["checked"])]),_:1},8,["label"]),e(r)?(c(),_(L,{key:0},[l(t,{label:e(f)},{default:n(()=>[l(m,{value:e(p),"onUpdate:value":o[1]||(o[1]=a=>s(p)?p.value=a:null),onBlur:e(y).record},null,8,["value","onBlur"])]),_:1},8,["label"]),l(t,{label:e(g)},{default:n(()=>[l(B,{mode:"tags",value:e(u),"onUpdate:value":o[2]||(o[2]=a=>s(u)?u.value=a:null),placeholder:"可输入正则表单式定义自定义的规则",options:k,"max-tag-count":3,onChange:e(b).record},null,8,["value","onChange"])]),_:1},8,["label"]),l(t,{label:e(M)},{default:n(()=>[l(m,{value:e(i),"onUpdate:value":o[3]||(o[3]=a=>s(i)?i.value=a:null),onBlur:e(x).record},null,8,["value","onBlur"])]),_:1},8,["label"])],64)):N("",!0)])}}};export{H as default};