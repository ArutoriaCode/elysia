System.register(["./module-ant-design-vue-legacy-a2d966db.js","./vendor-legacy-0e535be1.js","./index-legacy-03f4eee9.js","./module-@vue-legacy-fc3cdb82.js"],(function(e,t){"use strict";var n,a,l,o,i,c,s,r,d,m,p,u,g,x,h,y,_,f,v,b,k,w,D=document.createElement("style");return D.textContent=".custom-collapse .ant-collapse-header,.custom-collapse .ant-collapse-header span.anticon{color:var(--primary-color)!important}.custom-collapse .widget-ul{margin:0;padding:0;display:flex;flex-wrap:wrap}.custom-collapse .widget-item{min-width:84px;height:36px;padding:0 8px;line-height:36px;text-align:center;border-radius:8px;border:1px solid var(--info-color);color:var(--info-color);list-style:none;cursor:grab;margin:0 6px 6px 0;font-size:15px;display:flex;align-items:center;justify-content:center;user-select:none}.custom-collapse .widget-item span.anticon{font-size:18px;padding-right:8px}\n",document.head.appendChild(D),{setters:[e=>{n=e.a,a=e.C},e=>{l=e.aa},e=>{o=e.c,i=e.a,c=e.b,s=e.f,r=e.d,d=e.r,m=e.e,p=e.g},e=>{u=e.k,g=e.aJ,x=e._,h=e.bm,y=e.f,_=e.u,f=e.a0,v=e.aS,b=e.D,k=e.b1,w=e.x}],execute:function(){const t=["title","onDblclick"],D=["title","onDblclick"];e("default",{__name:"panel-component",setup(e){const j=u(["1","2"]),A=e=>{const t=r.childrenList.length-1;e.path=[t<0?0:t],r.childrenList.push(e)},C=e=>{if(e.to===e.from)return;const t=e.item._underlying_vm_,n=e.to.__draggable_component__.componentData,a=n.name?`向${n.name}组件插入${t.nameAlias||t.name}组件`:`添加${t.nameAlias}组件`;d.add(a,"history-add-icon"),1===n.index.length&&n.index.includes("root")&&m(r),w((()=>{const n=e.to.__draggable_component__.componentData.index;t.path=[...n,e.newIndex],p(t.path)}))};return(e,r)=>{const d=n,m=a;return g(),x(m,{activeKey:j.value,"onUpdate:activeKey":r[0]||(r[0]=e=>j.value=e),bordered:!1,class:"custom-collapse",ghost:""},{default:h((()=>[y(d,{key:"1",header:"容器组件"},{default:h((()=>[y(_(l),{tag:"ul",class:"widget-ul","item-key":"id",list:_(o),group:{name:"dragGroup",pull:"clone",put:!1},move:_(i),clone:_(c),sort:!1,onEnd:C},{item:h((({element:e,index:n})=>[(g(),f("li",{class:"widget-item",key:n,title:e.name,onDblclick:t=>A(e),slot:"item"},[(g(),x(v(e.icon))),b(" "+k(e.nameAlias||e.name),1)],40,t))])),_:1},8,["list","move","clone"])])),_:1}),y(d,{key:"2",header:"基础字段"},{default:h((()=>[y(_(l),{tag:"ul",class:"widget-ul","item-key":"id",list:_(s),group:{name:"dragGroup",pull:"clone",put:!1},clone:_(c),sort:!1,move:_(i),onEnd:C},{item:h((({element:e,index:t})=>[(g(),f("li",{class:"widget-item",key:t,title:e.name,onDblclick:t=>A(e),slot:"item"},[(g(),x(v(e.icon))),b(" "+k(e.nameAlias||e.name),1)],40,D))])),_:1},8,["list","clone","move"])])),_:1})])),_:1},8,["activeKey"])}}})}}}));