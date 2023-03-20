import{B as k,q as y,f as h,i as C}from"./module-ant-design-vue-95e6c6e8.js";import{av as V,ak as w,aw as g,as as B}from"./vendor-77887a9f.js";import{c as N}from"./complete-ef47576a.js";import{u as j}from"./useDefineModel-3d383046.js";import{k as E,aJ as O,_ as D,bm as a,f as o,u as e,D as r,E as J,a1 as p}from"./module-@vue-bde5bc49.js";import"./index-1b8adc0e.js";const M=p("div",null,[r(" 可以使用 "),p("span",{style:{"font-weight":"bold"}},"ctx"),r(" 来获取组件实例上下文 ")],-1),A={__name:"select-options-editor",setup(T){const d=[V(),N,w()],{modelValue:l,propertyCN:i,property:u,action:c}=j(),s=E(!1),m=()=>{s.value=!0},_=`
  合法的JSON
  [{"label":"标签","value":"值"}]

  js代码直接返回数组
  return [{ label: 'label', value: 'value' }]

  js代码异步请求返回数组数据
  return ctx.axios.post(...).then((res) => {
    省略错误处理的代码等，最终一定要返回数组
    return [{ label: 'label', value: 'value' }]
  })
`;return(U,t)=>{const f=k,b=y,v=h,x=C;return O(),D(x,{class:"select-options-editor property-editor",label:e(i)||e(u)},{default:a(()=>[o(f,{onClick:m,class:"property-edit-btn",block:""},{default:a(()=>[o(e(g)),r(" 编辑数据来源 ")]),_:1}),o(v,{visible:s.value,"onUpdate:visible":t[1]||(t[1]=n=>s.value=n),title:e(i)||e(u),footer:null,keyboard:!1,class:"custom-code-modal",onCancel:e(c).record,onOk:e(c).record},{default:a(()=>[o(b,{type:"info","show-icon":""},{message:a(()=>[M]),_:1}),o(e(B),{modelValue:e(l),"onUpdate:modelValue":t[0]||(t[0]=n=>J(l)?l.value=n:null),style:{width:"100%",height:"450px"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:d,placeholder:_},null,8,["modelValue"])]),_:1},8,["visible","title","onCancel","onOk"])]),_:1},8,["label"])}}};export{A as default};
