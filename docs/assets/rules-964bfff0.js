import{k as C,h as q,I as U,i as $}from"./module-ant-design-vue-4cc9ad31.js";import{u as h,a as i}from"./useDefineModel-99cb9cfb.js";import{aJ as _,a0 as m,f as o,bm as n,u as e,E as s,F as w,$ as L}from"./module-@vue-bde5bc49.js";import"./vendor-42b082d7.js";import"./index-ed9e4c27.js";const N={class:"rules-editor property-editor"},P={__name:"rules",setup(V){const{modelValue:r,propertyCN:v}=h(),{propertyAlias:f,propertyModel:u,action:g}=i("x-rules"),{propertyAlias:b,propertyModel:p,action:y}=i("x-required-message"),{propertyAlias:M,propertyModel:d,action:k}=i("x-error-message"),x=[{value:"/^w*?$/",label:"只允许字母"},{value:"/^d*$/",label:"只允许数字"}];return(E,l)=>{const A=C,t=q,c=U,B=$;return _(),m("div",N,[o(t,{label:e(v)},{default:n(()=>[o(A,{checked:e(r),"onUpdate:checked":l[0]||(l[0]=a=>s(r)?r.value=a:null)},null,8,["checked"])]),_:1},8,["label"]),e(r)?(_(),m(w,{key:0},[o(t,{label:e(b)},{default:n(()=>[o(c,{value:e(p),"onUpdate:value":l[1]||(l[1]=a=>s(p)?p.value=a:null),onBlur:e(y).record},null,8,["value","onBlur"])]),_:1},8,["label"]),o(t,{label:e(f)},{default:n(()=>[o(B,{mode:"tags",value:e(u),"onUpdate:value":l[2]||(l[2]=a=>s(u)?u.value=a:null),placeholder:"可输入正则表单式定义自定义的规则",options:x,"max-tag-count":3,onChange:e(g).record},null,8,["value","onChange"])]),_:1},8,["label"]),o(t,{label:e(M)},{default:n(()=>[o(c,{value:e(d),"onUpdate:value":l[3]||(l[3]=a=>s(d)?d.value=a:null),onBlur:e(k).record},null,8,["value","onBlur"])]),_:1},8,["label"])],64)):L("",!0)])}}};export{P as default};