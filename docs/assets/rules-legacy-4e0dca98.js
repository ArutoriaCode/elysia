System.register(["./module-ant-design-vue-legacy-68991d64.js","./useDefineModel-legacy-7876be01.js","./module-@vue-legacy-fc3cdb82.js","./vendor-legacy-721791aa.js","./index-legacy-34ff0946.js"],(function(e,l){"use strict";var a,u,r,n,o,t,d,s,c,p,v,g,i,y;return{setters:[e=>{a=e.j,u=e.g,r=e.I,n=e.h},e=>{o=e.u,t=e.a},e=>{d=e.aJ,s=e.a0,c=e.f,p=e.bm,v=e.u,g=e.E,i=e.F,y=e.$},null,null],execute:function(){const l={class:"rules-editor property-editor"};e("default",{__name:"rules",setup(e){const{modelValue:h,propertyCN:b}=o(),{propertyAlias:m,propertyModel:f,checkChangeRecord:k}=t("x-rules"),{propertyAlias:j,propertyModel:x,checkChangeRecord:C}=t("x-required-message"),{propertyAlias:_,propertyModel:B,checkChangeRecord:M}=t("x-error-message"),U=[{value:"/^w*?$/",label:"只允许字母"},{value:"/^d*$/",label:"只允许数字"}];return(e,o)=>{const t=a,A=u,R=r,$=n;return d(),s("div",l,[c(A,{label:v(b)},{default:p((()=>[c(t,{checked:v(h),"onUpdate:checked":o[0]||(o[0]=e=>g(h)?h.value=e:null)},null,8,["checked"])])),_:1},8,["label"]),v(h)?(d(),s(i,{key:0},[c(A,{label:v(j)},{default:p((()=>[c(R,{value:v(x),"onUpdate:value":o[1]||(o[1]=e=>g(x)?x.value=e:null),onBlur:v(C)},null,8,["value","onBlur"])])),_:1},8,["label"]),c(A,{label:v(m)},{default:p((()=>[c($,{mode:"tags",value:v(f),"onUpdate:value":o[2]||(o[2]=e=>g(f)?f.value=e:null),placeholder:"可输入正则表单式定义自定义的规则",options:U,"max-tag-count":3,onChange:v(k)},null,8,["value","onChange"])])),_:1},8,["label"]),c(A,{label:v(_)},{default:p((()=>[c(R,{value:v(B),"onUpdate:value":o[3]||(o[3]=e=>g(B)?B.value=e:null),onBlur:v(M)},null,8,["value","onBlur"])])),_:1},8,["label"])],64)):y("",!0)])}}})}}}));
