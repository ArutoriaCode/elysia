System.register(["./module-ant-design-vue-legacy-ac6a0cdf.js","./vendor-legacy-bceb1902.js","./complete-legacy-0f49a24b.js","./useDefineModel-legacy-e5c7dd6c.js","./module-@vue-legacy-fc3cdb82.js","./index-legacy-770b5bb6.js"],(function(e,l){"use strict";var t,n,a,o,s,u,r,i,c,d,p,v,b,y,f,m,g,j,h;return{setters:[e=>{t=e.B,n=e.q,a=e.f,o=e.i},e=>{s=e.av,u=e.ak,r=e.aw,i=e.as},e=>{c=e.c},e=>{d=e.u},e=>{p=e.k,v=e.aJ,b=e._,y=e.bm,f=e.f,m=e.u,g=e.D,j=e.E,h=e.a1},null],execute:function(){const l=h("div",null,[g(" 可以使用 "),h("span",{style:{"font-weight":"bold"}},"ctx"),g(" 来获取组件实例上下文 ")],-1);e("default",{__name:"select-options-editor",setup(e){const h=[s(),c,u()],{modelValue:k,propertyCN:x,property:_,action:w}=d(),C=p(!1),V=()=>{C.value=!0};return(e,s)=>{const u=t,c=n,d=a,p=o;return v(),b(p,{class:"select-options-editor property-editor",label:m(x)||m(_)},{default:y((()=>[f(u,{onClick:V,class:"property-edit-btn",block:""},{default:y((()=>[f(m(r)),g(" 编辑数据来源 ")])),_:1}),f(d,{visible:C.value,"onUpdate:visible":s[1]||(s[1]=e=>C.value=e),title:m(x)||m(_),footer:null,keyboard:!1,class:"custom-code-modal",onCancel:m(w).record,onOk:m(w).record},{default:y((()=>[f(c,{type:"info","show-icon":""},{message:y((()=>[l])),_:1}),f(m(i),{modelValue:m(k),"onUpdate:modelValue":s[0]||(s[0]=e=>j(k)?k.value=e:null),style:{width:"100%",height:"450px"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:h,placeholder:"\n  合法的JSON\n  [{\"label\":\"标签\",\"value\":\"值\"}]\n\n  js代码直接返回数组\n  return [{ label: 'label', value: 'value' }]\n\n  js代码异步请求返回数组数据\n  return ctx.axios.post(...).then((res) => {\n    省略错误处理的代码等，最终一定要返回数组\n    return [{ label: 'label', value: 'value' }]\n  })\n"},null,8,["modelValue"])])),_:1},8,["visible","title","onCancel","onOk"])])),_:1},8,["label"])}}})}}}));