System.register(["./module-ant-design-vue-legacy-cc3d60ba.js","./vendor-legacy-449d5988.js","./complete-legacy-86ae1562.js","./useDefineModel-legacy-69b121eb.js","./module-@vue-legacy-a25e776b.js","./module-dayjs-legacy-bde31d1a.js","./index-legacy-ea57042d.js","./module-lodash-clonedeep-legacy-42e4bf90.js","./module-axios-legacy-e74dd017.js","./module-lodash-isequal-legacy-66f33d3f.js"],(function(e,l){"use strict";var t,a,n,o,s,u,c,d,i,r,p,y,v,b,m,g,j,f,h;return{setters:[e=>{t=e.B,a=e.t,n=e.f,o=e.i},e=>{s=e.av,u=e.aj,c=e.ax,d=e.at},e=>{i=e.c},e=>{r=e.u},e=>{p=e.k,y=e.aJ,v=e.$,b=e.bm,m=e.f,g=e.u,j=e.D,f=e.E,h=e.a2},null,null,null,null,null],execute:function(){const l=h("div",null,[j(" 可以使用 "),h("span",{style:{"font-weight":"bold"}},"ctx"),j(" 来获取组件实例上下文 ")],-1);e("default",{__name:"select-options-editor",setup(e){const h=[s(),i,u()],{modelValue:x,propertyCN:k,property:_,action:w}=r(),C=p(!1),V=()=>{C.value=!0};return(e,s)=>{const u=t,i=a,r=n,p=o;return y(),v(p,{class:"select-options-editor property-editor",label:g(k)||g(_)},{default:b((()=>[m(u,{onClick:V,class:"property-edit-btn",block:""},{default:b((()=>[m(g(c)),j(" 编辑数据来源 ")])),_:1}),m(r,{visible:C.value,"onUpdate:visible":s[1]||(s[1]=e=>C.value=e),title:g(k)||g(_),footer:null,keyboard:!1,class:"custom-code-modal",onCancel:g(w).record,onOk:g(w).record},{default:b((()=>[m(i,{type:"info","show-icon":""},{message:b((()=>[l])),_:1}),m(g(d),{modelValue:g(x),"onUpdate:modelValue":s[0]||(s[0]=e=>f(x)?x.value=e:null),style:{width:"100%",height:"450px"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:h,placeholder:"\n  合法的JSON\n  [{\"label\":\"标签\",\"value\":\"值\"}]\n\n  js代码直接返回数组\n  return [{ label: 'label', value: 'value' }]\n\n  js代码异步请求返回数组数据\n  return ctx.axios.post(...).then((res) => {\n    省略错误处理的代码等，最终一定要返回数组\n    return [{ label: 'label', value: 'value' }]\n  })\n"},null,8,["modelValue"])])),_:1},8,["visible","title","onCancel","onOk"])])),_:1},8,["label"])}}})}}}));