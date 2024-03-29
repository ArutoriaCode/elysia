import{B as k,t as y,f as h,i as C}from"./module-ant-design-vue-cd44f240.js";import{ax as V,ak as g,ay as w,av as B}from"./vendor-27e8d7b7.js";import{c as N}from"./complete-6f804add.js";import{u as j}from"./usePropEditorModel-e634d3d0.js";import{k as E,aJ as O,$ as J,bm as a,f as o,u as e,D as r,E as M,a2 as c}from"./module-@vue-50b83bc4.js";import"./module-dayjs-a26c16b1.js";import"./index-ad4bb90e.js";import"./module-lodash-isequal-55ce7966.js";import"./module-lodash-clonedeep-8dddd65f.js";import"./module-axios-1453fd4d.js";const T=c("div",null,[r(" 可以使用 "),c("span",{style:{"font-weight":"bold"}},"ctx"),r(" 来获取组件实例上下文 ")],-1),I={__name:"select-options-editor",setup(U){const d=[V(),N,g()],{modelValue:l,propertyCN:i,property:p,action:u}=j(),s=E(!1),m=()=>{s.value=!0},_=`
  合法的JSON
  [{"label":"标签","value":"值"}]

  js代码直接返回数组
  return [{ label: 'label', value: 'value' }]

  js代码异步请求返回数组数据
  return ctx.axios.post(...).then((res) => {
    省略错误处理的代码等，最终一定要返回数组
    return [{ label: 'label', value: 'value' }]
  })
`;return($,t)=>{const f=k,b=y,v=h,x=C;return O(),J(x,{class:"select-options-editor property-editor",label:e(i)||e(p)},{default:a(()=>[o(f,{onClick:m,class:"property-edit-btn",block:""},{default:a(()=>[o(e(w)),r(" 编辑数据来源 ")]),_:1}),o(v,{visible:s.value,"onUpdate:visible":t[1]||(t[1]=n=>s.value=n),title:e(i)||e(p),footer:null,keyboard:!1,class:"custom-code-modal",onCancel:e(u).record,onOk:e(u).record},{default:a(()=>[o(b,{type:"info","show-icon":""},{message:a(()=>[T]),_:1}),o(e(B),{modelValue:e(l),"onUpdate:modelValue":t[0]||(t[0]=n=>M(l)?l.value=n:null),style:{width:"100%",height:"450px"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:d,placeholder:_},null,8,["modelValue"])]),_:1},8,["visible","title","onCancel","onOk"])]),_:1},8,["label"])}}};export{I as default};
