System.register(["./module-ant-design-vue-legacy-cc3d60ba.js","./useDefineModel-legacy-69b121eb.js","./index-legacy-ea57042d.js","./vendor-legacy-449d5988.js","./module-@vue-legacy-a25e776b.js","./module-dayjs-legacy-bde31d1a.js","./module-lodash-isequal-legacy-66f33d3f.js","./module-lodash-clonedeep-legacy-42e4bf90.js","./module-axios-legacy-e74dd017.js"],(function(e,l){"use strict";var n,a,s,o,t,u,d,i,c,r,p,y,g,m,j,f,v,h,k,x,$,b,_,C,B,L;return{setters:[e=>{n=e.j,a=e.k,s=e.B,o=e.i},e=>{t=e.u},e=>{u=e.u,d=e.P,i=e.i,c=e.s,r=e.C,p=e.r,y=e.j,g=e.k},e=>{m=e.aq,j=e.au},e=>{f=e.y,v=e.aJ,h=e.a1,k=e.f,x=e.bm,$=e.D,b=e.F,_=e.aQ,C=e.$,B=e.u,L=e.b1},null,null,null,null],execute:function(){e("default",{__name:"col-editor",setup(e){const l=u([d,"col"]),q=i(c.value.path),D=f(q,"childrenList"),{propertyCN:U}=t(),w=()=>D.value.reduce(((e,l)=>(e[l.id]=l.options.span,e)),{});let A=w();const F=()=>{q.childrenList.push(y(g)),A=w(),p.add(`${U}组件增加一列[${l+(deleteIndex+1)}]`,"history-add-icon")},I=u([r,"span"]);return(e,t)=>{const u=n,d=a,i=s,c=o;return v(),h(b,null,[k(u,null,{default:x((()=>[$("栅格属性设置")])),_:1}),(v(!0),h(b,null,_(B(D),((e,n)=>(v(),C(c,{key:e.id,label:B(l)+(n+1)},{default:x((()=>[k(d,{style:{width:"calc(100% - 90px)"},precision:0,min:0,max:24,value:e.options.span,"onUpdate:value":l=>e.options.span=l,onBlur:l=>(e=>{const l=A[e.id],n=e.options.span;n>24||n<0||l!==e.options.span&&(p.add(`${e.nameAlias}组件[${I}]被修改`),A[e.id]=e.options.span)})(e)},null,8,["value","onUpdate:value","onBlur"]),k(i,{danger:"",style:{"margin-left":"6px"},onClick:e=>(e=>{q.childrenList.splice(e,1),A=w(),p.add(`${U}组件[${l+(e+1)}]被删除`,m)})(n)},{icon:x((()=>[k(B(m))])),default:x((()=>[$(" 删除 ")])),_:2},1032,["onClick"])])),_:2},1032,["label"])))),128)),k(i,{block:"",onClick:F,class:"property-edit-btn"},{icon:x((()=>[k(B(j))])),default:x((()=>[$(" 添加"+L(B(l)),1)])),_:1})],64)}}})}}}));