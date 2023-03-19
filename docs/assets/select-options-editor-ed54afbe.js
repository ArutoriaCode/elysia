import{B as k,l as y,n as h,g as C}from"./module-ant-design-vue-f08df730.js";import{au as V,aj as g,aw as w,ak as j}from"./vendor-e924a219.js";import{c as B}from"./complete-0619fdd1.js";import{u as N}from"./useDefineModel-676c8c6c.js";import{k as E,aJ as O,_ as D,bm as a,f as o,u as e,D as r,E as J,a1 as p}from"./module-@vue-bde5bc49.js";import"./index-261ad9e4.js";const M=p("div",null,[r(" 可以使用 "),p("span",{style:{"font-weight":"bold"}},"ctx"),r(" 来获取组件实例上下文 ")],-1),A={__name:"select-options-editor",setup(T){const d=[V(),B,g()],{modelValue:l,propertyCN:i,property:u,action:c}=N(),s=E(!1),m=()=>{s.value=!0},_=`
  合法的JSON
  [{"label":"标签","value":"值"}]

  js代码直接返回数组
  return [{ label: 'label', value: 'value' }]

  js代码异步请求返回数组数据
  return ctx.axios.post(...).then((res) => {
    省略错误处理的代码等，最终一定要返回数组
    return [{ label: 'label', value: 'value' }]
  })
`;return(U,t)=>{const f=k,b=y,v=h,x=C;return O(),D(x,{class:"select-options-editor property-editor",label:e(i)||e(u)},{default:a(()=>[o(f,{onClick:m,class:"property-edit-btn",block:""},{default:a(()=>[o(e(w)),r(" 编辑数据来源 ")]),_:1}),o(v,{visible:s.value,"onUpdate:visible":t[1]||(t[1]=n=>s.value=n),title:e(i)||e(u),footer:null,keyboard:!1,class:"custom-code-modal",onCancel:e(c).record,onOk:e(c).record},{default:a(()=>[o(b,{type:"info","show-icon":""},{message:a(()=>[M]),_:1}),o(e(j),{modelValue:e(l),"onUpdate:modelValue":t[0]||(t[0]=n=>J(l)?l.value=n:null),style:{width:"100%",height:"450px"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:d,placeholder:_},null,8,["modelValue"])]),_:1},8,["visible","title","onCancel","onOk"])]),_:1},8,["label"])}}};export{A as default};
