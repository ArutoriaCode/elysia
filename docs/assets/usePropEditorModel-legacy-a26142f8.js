System.register(["./index-legacy-e9398c37.js","./module-lodash-isequal-legacy-66f33d3f.js","./module-@vue-legacy-a25e776b.js"],(function(e,t){"use strict";var r,o,u,n,l,a,s,p,i,c;return{setters:[e=>{r=e.u,o=e.i,u=e.s,n=e.r,l=e.p},e=>{a=e.i},e=>{s=e.y,p=e.x,i=e.b6,c=e.k}],execute:function(){function t(e){const t=r([o,e]),i=s(u.value.options,e);return{action:(()=>{let e=i.value;return{undoChange:()=>{i.value=e},record:r=>{p((()=>{if(a(e,i.value))return;const{name:o,nameAlias:s}=u.value;n.add(`${s||o}组件属性[${t}]被修改`,"prop-icon"),l(),"function"==typeof r&&r(i.value,e),e=i.value}))}}})(),propertyAlias:t,propertyModel:i}}e({a:t,u:function(){const{property:e}=i(),{propertyModel:r,propertyAlias:o,...n}=t(e),l=c([]),a=u.value["x-selects"]||[];return a&&a[e]&&(l.value=a[e]),{property:e,modelValue:r,selectOptions:l,propertyCN:o,...n}}})}}}));
