System.register(["./module-ant-design-vue-legacy-f3f2d62e.js","./useDefineModel-legacy-0a575210.js","./index-legacy-9ff74d5e.js","./module-@vue-legacy-fc3cdb82.js","./vendor-legacy-c702f7e0.js","./module-dayjs-legacy-bde31d1a.js","./module-lodash-isequal-legacy-66f33d3f.js","./module-lodash-clonedeep-legacy-42e4bf90.js","./module-axios-legacy-e74dd017.js"],(function(e,l){"use strict";var u,r,a,s,n,o,t,d,i,c,g,m,y;return{setters:[e=>{u=e.m,r=e.I,a=e.i},e=>{s=e.u},e=>{n=e.l,o=e.s},e=>{t=e.r,d=e.u,i=e.aJ,c=e._,g=e.bm,m=e.f,y=e.E},null,null,null,null,null],execute:function(){e("default",{__name:"field-input",setup(e){const{propertyCN:l,modelValue:v,action:j,property:p}=s(),f=t([{required:!0,message:"唯一标识为必填项",trigger:"blur"},{validator:(e,l)=>(Object.keys(n).some((e=>d(n[e])===l&&e!==o.value.id))&&(j.undoChange(),u.error("唯一标识已存在，已撤销标识的更改！",3)),Promise.resolve()),trigger:"blur"}]);return(e,u)=>{const s=r,n=a;return i(),c(n,{class:"property-editor",label:d(l),name:d(p),rules:f,help:"标识必须唯一，除非你并不需要操作该字段"},{default:g((()=>[m(s,{value:d(v),"onUpdate:value":u[0]||(u[0]=e=>y(v)?v.value=e:null),valueModifiers:{trim:!0},onBlur:d(j).record},null,8,["value","onBlur"])])),_:1},8,["label","name","rules"])}}})}}}));
