import{B as C,t as V,f as g,i as h}from"./module-ant-design-vue-16910fa5.js";import{av as j}from"./vendor-3155b9bf.js";import{c as w}from"./complete-e86c1d15.js";import{u as B}from"./useDefineModel-ba6fa5d6.js";import{k as N,aR as p,aJ as D,$ as E,bm as n,f as e,u as o,E as M,a2 as r,D as _}from"./module-@vue-50b83bc4.js";import"./module-dayjs-a26c16b1.js";import"./index-0fc332d2.js";import"./module-lodash-clonedeep-8dddd65f.js";import"./module-axios-1453fd4d.js";import"./module-lodash-isequal-55ce7966.js";const O=r("span",{style:{"margin-bottom":"2px"}},"编辑",-1),R=r("div",null,[_(" 可以使用 "),r("span",{style:{"font-weight":"bold"}},"ctx"),_(" 来获取组件实例上下文 ")],-1),L={__name:"js-editor",setup(U){const d=[j(),w],{modelValue:s,propertyCN:i,property:c,action:m}=B(),a=N(!1),u=()=>{a.value=!0};return($,t)=>{const f=p("js-code-icon"),b=C,v=V,x=p("codemirror"),k=g,y=h;return D(),E(y,{class:"javascript-editor",label:o(i)||o(c)},{default:n(()=>[e(b,{onClick:u,class:"property-edit-btn",block:""},{default:n(()=>[e(f),O]),_:1}),e(k,{visible:a.value,"onUpdate:visible":t[1]||(t[1]=l=>a.value=l),title:o(i)||o(c),footer:null,keyboard:!1,class:"custom-code-modal",onCancel:o(m).record,onOk:o(m).record},{default:n(()=>[e(v,{type:"info","show-icon":""},{message:n(()=>[R]),_:1}),e(x,{modelValue:o(s),"onUpdate:modelValue":t[0]||(t[0]=l=>M(s)?s.value=l:null),style:{width:"100%",height:"450px"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:d},null,8,["modelValue"])]),_:1},8,["visible","title","onCancel","onOk"])]),_:1},8,["label"])}}};export{L as default};