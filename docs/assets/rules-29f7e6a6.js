import{j as x,g as B,I as q,h as U}from"./module-ant-design-vue-bbf48e41.js";import{u as $,a as c}from"./useDefineModel-db4099ba.js";import{aJ as m,a0 as i,f as a,bm as t,u as e,E as s,F as w,$ as A}from"./module-@vue-bde5bc49.js";import"./vendor-e924a219.js";import"./index-24605b24.js";const L={class:"rules-editor property-editor"},J={__name:"rules",setup(N){const{modelValue:r,propertyCN:g}=$(),{propertyAlias:v,propertyModel:u,checkChangeRecord:f}=c("x-rules"),{propertyAlias:b,propertyModel:p,checkChangeRecord:h}=c("x-required-message"),{propertyAlias:C,propertyModel:d,checkChangeRecord:k}=c("x-error-message"),y=[{value:"/^w*?$/",label:"只允许字母"},{value:"/^d*$/",label:"只允许数字"}];return(V,l)=>{const M=x,n=B,_=q,R=U;return m(),i("div",L,[a(n,{label:e(g)},{default:t(()=>[a(M,{checked:e(r),"onUpdate:checked":l[0]||(l[0]=o=>s(r)?r.value=o:null)},null,8,["checked"])]),_:1},8,["label"]),e(r)?(m(),i(w,{key:0},[a(n,{label:e(b)},{default:t(()=>[a(_,{value:e(p),"onUpdate:value":l[1]||(l[1]=o=>s(p)?p.value=o:null),onBlur:e(h)},null,8,["value","onBlur"])]),_:1},8,["label"]),a(n,{label:e(v)},{default:t(()=>[a(R,{mode:"tags",value:e(u),"onUpdate:value":l[2]||(l[2]=o=>s(u)?u.value=o:null),placeholder:"可输入正则表单式定义自定义的规则",options:y,"max-tag-count":3,onChange:e(f)},null,8,["value","onChange"])]),_:1},8,["label"]),a(n,{label:e(C)},{default:t(()=>[a(_,{value:e(d),"onUpdate:value":l[3]||(l[3]=o=>s(d)?d.value=o:null),onBlur:e(k)},null,8,["value","onBlur"])]),_:1},8,["label"])],64)):A("",!0)])}}};export{J as default};
