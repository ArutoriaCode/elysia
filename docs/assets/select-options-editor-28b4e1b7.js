import{B as k,r as y,f as h,i as C}from"./module-ant-design-vue-a41deff3.js";import{at as V,aj as g,au as j,ar as w}from"./vendor-71a1a0f8.js";import{c as B}from"./complete-77a84a6a.js";import{u as N}from"./useDefineModel-84ea8c7d.js";import{k as E,aJ as O,_ as D,bm as a,f as t,u as e,D as r,E as J,a1 as c}from"./module-@vue-bde5bc49.js";import"./module-dayjs-a26c16b1.js";import"./index-2545223d.js";import"./module-lodash-clonedeep-8dddd65f.js";import"./module-axios-1453fd4d.js";import"./module-lodash-isequal-55ce7966.js";const M=c("div",null,[r(" 可以使用 "),c("span",{style:{"font-weight":"bold"}},"ctx"),r(" 来获取组件实例上下文 ")],-1),K={__name:"select-options-editor",setup(T){const m=[V(),B,g()],{modelValue:l,propertyCN:i,property:u,action:p}=N(),s=E(!1),d=()=>{s.value=!0},_=`
  合法的JSON
  [{"label":"标签","value":"值"}]

  js代码直接返回数组
  return [{ label: 'label', value: 'value' }]

  js代码异步请求返回数组数据
  return ctx.axios.post(...).then((res) => {
    省略错误处理的代码等，最终一定要返回数组
    return [{ label: 'label', value: 'value' }]
  })
`;return(U,o)=>{const f=k,b=y,v=h,x=C;return O(),D(x,{class:"select-options-editor property-editor",label:e(i)||e(u)},{default:a(()=>[t(f,{onClick:d,class:"property-edit-btn",block:""},{default:a(()=>[t(e(j)),r(" 编辑数据来源 ")]),_:1}),t(v,{visible:s.value,"onUpdate:visible":o[1]||(o[1]=n=>s.value=n),title:e(i)||e(u),footer:null,keyboard:!1,class:"custom-code-modal",onCancel:e(p).record,onOk:e(p).record},{default:a(()=>[t(b,{type:"info","show-icon":""},{message:a(()=>[M]),_:1}),t(e(w),{modelValue:e(l),"onUpdate:modelValue":o[0]||(o[0]=n=>J(l)?l.value=n:null),style:{width:"100%",height:"450px"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:m,placeholder:_},null,8,["modelValue"])]),_:1},8,["visible","title","onCancel","onOk"])]),_:1},8,["label"])}}};export{K as default};
