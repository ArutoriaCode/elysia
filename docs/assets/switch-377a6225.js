import{q as m,i as _}from"./module-ant-design-vue-cd44f240.js";import{u}from"./usePropEditorModel-b4c1ecdb.js";import{e as d,aJ as h,$ as f,bm as k,f as g,u as e,E as C}from"./module-@vue-50b83bc4.js";import"./vendor-27e8d7b7.js";import"./module-dayjs-a26c16b1.js";import"./index-c45ea083.js";import"./module-lodash-clonedeep-8dddd65f.js";import"./module-axios-1453fd4d.js";import"./module-lodash-isequal-55ce7966.js";const J={__name:"switch",setup(b){const{propertyCN:r,modelValue:o,property:n,action:p}=u(),s=d(()=>({hidden:"注：隐藏组件需要在预览中才能看到效果",vertical:"注：设计器为了方便展示会有个默认最小高度，但预览需要你自身调整容器高度"})[n]||null);return(a,t)=>{const c=m,l=_;return h(),f(l,{label:e(r),help:e(s),class:"property-editor"},{default:k(()=>[g(c,{checked:e(o),"onUpdate:checked":t[0]||(t[0]=i=>C(o)?o.value=i:null),onChange:e(p).record},null,8,["checked","onChange"])]),_:1},8,["label","help"])}}};export{J as default};