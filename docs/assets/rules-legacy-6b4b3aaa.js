System.register(["./module-ant-design-vue-legacy-cc3d60ba.js","./useDefineModel-legacy-69b121eb.js","./module-@vue-legacy-a25e776b.js","./vendor-legacy-449d5988.js","./module-dayjs-legacy-bde31d1a.js","./index-legacy-ea57042d.js","./module-lodash-clonedeep-legacy-42e4bf90.js","./module-axios-legacy-e74dd017.js","./module-lodash-isequal-legacy-66f33d3f.js"],(function(e,l){"use strict";var a,u,o,r,n,t,d,s,c,p,i,v,y,g;return{setters:[e=>{a=e.q,u=e.i,o=e.I,r=e.o},e=>{n=e.u,t=e.a},e=>{d=e.aJ,s=e.a1,c=e.f,p=e.bm,i=e.u,v=e.E,y=e.F,g=e.a0},null,null,null,null,null,null],execute:function(){const l={class:"rules-editor property-editor"};e("default",{__name:"rules",setup(e){const{modelValue:m,propertyCN:b}=n(),{propertyAlias:j,propertyModel:f,action:h}=t("x-rules"),{propertyAlias:x,propertyModel:_,action:k}=t("x-required-message"),{propertyAlias:B,propertyModel:M,action:U}=t("x-error-message"),q=[{value:"/^w*?$/",label:"只允许字母"},{value:"/^d*$/",label:"只允许数字"}];return(e,n)=>{const t=a,A=u,C=o,$=r;return d(),s("div",l,[c(A,{label:i(b)},{default:p((()=>[c(t,{checked:i(m),"onUpdate:checked":n[0]||(n[0]=e=>v(m)?m.value=e:null)},null,8,["checked"])])),_:1},8,["label"]),i(m)?(d(),s(y,{key:0},[c(A,{label:i(x)},{default:p((()=>[c(C,{value:i(_),"onUpdate:value":n[1]||(n[1]=e=>v(_)?_.value=e:null),onBlur:i(k).record},null,8,["value","onBlur"])])),_:1},8,["label"]),c(A,{label:i(j)},{default:p((()=>[c($,{mode:"tags",value:i(f),"onUpdate:value":n[2]||(n[2]=e=>v(f)?f.value=e:null),placeholder:"可输入正则表单式定义自定义的规则",options:q,"max-tag-count":3,onChange:i(h).record},null,8,["value","onChange"])])),_:1},8,["label"]),c(A,{label:i(B)},{default:p((()=>[c(C,{value:i(M),"onUpdate:value":n[3]||(n[3]=e=>v(M)?M.value=e:null),onBlur:i(U).record},null,8,["value","onBlur"])])),_:1},8,["label"])],64)):g("",!0)])}}})}}}));