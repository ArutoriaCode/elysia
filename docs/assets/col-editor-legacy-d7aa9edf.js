System.register(["./module-ant-design-vue-legacy-3f1c3b6b.js","./useDefineModel-legacy-1f065454.js","./index-legacy-068a994d.js","./vendor-legacy-30af2910.js","./module-@vue-legacy-fc3cdb82.js"],(function(e,n){"use strict";var l,a,t,s,i,o,d,u,c,r,p,y,v,f,g,m,j,h,_,b,k,x,$,C,B,L;return{setters:[e=>{l=e.j,a=e.v,t=e.B,s=e.i},e=>{i=e.u},e=>{o=e.u,d=e.P,u=e.g,c=e.s,r=e.i,p=e.r,y=e.j,v=e.k},e=>{f=e.as,g=e.av},e=>{m=e.y,j=e.aJ,h=e.a0,_=e.f,b=e.bm,k=e.D,x=e.F,$=e.aQ,C=e._,B=e.u,L=e.b1}],execute:function(){e("default",{__name:"col-editor",setup(e){const n=o([d,"col"]),D=u(c.value.path),U=m(D,"childrenList"),{propertyCN:w}=i(),A=()=>U.value.reduce(((e,n)=>(e[n.id]=n.options.span,e)),{});let F=A();const I=()=>{D.childrenList.push(y(v)),F=A(),p.add(`${w}组件增加一列[${n+(deleteIndex+1)}]`,"history-add-icon")},J=o([r,"span"]);return(e,i)=>{const o=l,d=a,u=t,c=s;return j(),h(x,null,[_(o,null,{default:b((()=>[k("栅格属性设置")])),_:1}),(j(!0),h(x,null,$(B(U),((e,l)=>(j(),C(c,{key:e.id,label:B(n)+(l+1)},{default:b((()=>[_(d,{style:{width:"calc(100% - 90px)"},precision:0,min:0,max:24,value:e.options.span,"onUpdate:value":n=>e.options.span=n,onBlur:n=>(e=>{const n=F[e.id],l=e.options.span;l>24||l<0||n!==e.options.span&&(p.add(`${e.nameAlias}组件[${J}]被修改`),F[e.id]=e.options.span)})(e)},null,8,["value","onUpdate:value","onBlur"]),_(u,{danger:"",style:{"margin-left":"6px"},onClick:e=>(e=>{D.childrenList.splice(e,1),F=A(),p.add(`${w}组件[${n+(e+1)}]被删除`,f)})(l)},{icon:b((()=>[_(B(f))])),default:b((()=>[k(" 删除 ")])),_:2},1032,["onClick"])])),_:2},1032,["label"])))),128)),_(u,{block:"",onClick:I,class:"property-edit-btn"},{icon:b((()=>[_(B(g))])),default:b((()=>[k(" 添加"+L(B(n)),1)])),_:1})],64)}}})}}}));