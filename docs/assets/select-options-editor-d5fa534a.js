import{B as k,l as h,n as y,g as C}from"./module-ant-design-vue-bbf48e41.js";import{au as g,aj as V,aw as w,ak as j}from"./vendor-e924a219.js";import{c as B}from"./complete-9c456391.js";import{u as N}from"./useDefineModel-db4099ba.js";import{k as E,aJ as O,_ as D,bm as a,f as t,u as e,D as r,E as J,a1 as p}from"./module-@vue-bde5bc49.js";import"./index-24605b24.js";const M=p("div",null,[r(" 可以使用 "),p("span",{style:{"font-weight":"bold"}},"ctx"),r(" 来获取组件实例上下文 ")],-1),A={__name:"select-options-editor",setup(R){const d=[g(),B,V()],{modelValue:l,propertyCN:i,property:u,checkChangeRecord:c}=N(),s=E(!1),m=()=>{s.value=!0},_=`/**
   * 合法的JSON
   * [{"label":"标签","value":"值"}]
   * 
   * js代码直接返回数组
   * return [{ label: 'label', value: 'value' }]
   * 
   * js代码异步请求返回数组数据
   * return ctx.axios.post(...).then((res) => {
   *   省略错误处理的代码等，最终一定要返回数组
   *   return [{ label: 'label', value: 'value' }]
   * })
   * 
*/`;return(T,o)=>{const f=k,b=h,v=y,x=C;return O(),D(x,{class:"select-options-editor property-editor",label:e(i)||e(u)},{default:a(()=>[t(f,{onClick:m,class:"property-edit-btn",block:""},{default:a(()=>[t(e(w)),r(" 编辑数据来源 ")]),_:1}),t(v,{visible:s.value,"onUpdate:visible":o[1]||(o[1]=n=>s.value=n),title:e(i)||e(u),footer:null,keyboard:!1,class:"custom-code-modal",onCancel:e(c),onOk:e(c)},{default:a(()=>[t(b,{type:"info","show-icon":""},{message:a(()=>[M]),_:1}),t(e(j),{modelValue:e(l),"onUpdate:modelValue":o[0]||(o[0]=n=>J(l)?l.value=n:null),style:{width:"100%",height:"450px"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:d,placeholder:_},null,8,["modelValue"])]),_:1},8,["visible","title","onCancel","onOk"])]),_:1},8,["label"])}}};export{A as default};
