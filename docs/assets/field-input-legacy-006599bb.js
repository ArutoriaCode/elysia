System.register(["./module-ant-design-vue-legacy-28c365f4.js","./useDefineModel-legacy-f9bfb955.js","./index-legacy-920fada8.js","./module-@vue-legacy-fc3cdb82.js","./vendor-legacy-721791aa.js"],(function(e,r){"use strict";var l,u,t,a,s,n,o,i,d,c,g,m,v;return{setters:[e=>{l=e.s,u=e.I,t=e.g},e=>{a=e.u},e=>{s=e.i,n=e.s},e=>{o=e.r,i=e.u,d=e.aJ,c=e._,g=e.bm,m=e.f,v=e.E},null],execute:function(){e("default",{__name:"field-input",setup(e){const{propertyCN:r,modelValue:p,action:y,property:f}=a(),b=o([{required:!0,message:"唯一标识为必填项",trigger:"blur"},{validator:(e,r)=>(Object.keys(s).some((e=>i(s[e])===r&&e!==n.value.id))&&(y.undoChange(),l.error("唯一标识已存在，已撤销标识的更改！",3)),Promise.resolve()),trigger:"blur"}]);return(e,l)=>{const a=u,s=t;return d(),c(s,{class:"property-editor",label:i(r),name:i(f),rules:b,help:"标识必须唯一，除非你并不需要操作该字段"},{default:g((()=>[m(a,{value:i(p),"onUpdate:value":l[0]||(l[0]=e=>v(p)?p.value=e:null),valueModifiers:{trim:!0},onBlur:i(y).record},null,8,["value","onBlur"])])),_:1},8,["label","name","rules"])}}})}}}));