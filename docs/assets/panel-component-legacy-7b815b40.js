System.register(["./module-ant-design-vue-legacy-a44cb5cc.js","./vendor-legacy-bceb1902.js","./index-legacy-985b0c1d.js","./module-@vue-legacy-fc3cdb82.js"],(function(e,t){"use strict";var n,l,a,o,i,s,c,r,d,m,p,u,g,x,y,h,f,v,_,b=document.createElement("style");return b.textContent=".custom-collapse .ant-collapse-header,.custom-collapse .ant-collapse-header span.anticon{color:var(--primary-color)!important}.custom-collapse .ant-collapse-content-box{padding:16px 8px}.custom-collapse .widget-ul{margin:0;padding:0;display:flex;flex-wrap:wrap}.custom-collapse .widget-item{min-width:95px;height:36px;padding:0 4px;line-height:36px;text-align:center;border-radius:8px;border:1px solid var(--info-color);color:var(--info-color);list-style:none;cursor:grab;margin:0 6px 6px 0;font-size:15px;display:flex;align-items:center;justify-content:center;user-select:none;white-space:nowrap}.custom-collapse .widget-item span.anticon{font-size:18px;padding-right:8px}\n",document.head.appendChild(b),{setters:[e=>{n=e.e,l=e.C},e=>{a=e.ab},e=>{o=e.c,i=e.a,s=e.b,c=e.f,r=e.d,d=e.r},e=>{m=e.k,p=e.aJ,u=e._,g=e.bm,x=e.f,y=e.u,h=e.a0,f=e.aS,v=e.D,_=e.b1}],execute:function(){const t=["title","onDblclick"],b=["title","onDblclick"];e("default",{__name:"panel-component",setup(e){const w=m(["1","2"]),k=e=>{const t=r.childrenList.length-1;e.path=[t<0?0:t],r.childrenList.push(e)},A=e=>{if(e.to===e.from)return;const t=e.item._underlying_vm_,n=e.to.__draggable_component__.componentData,l=n.name?`向${n.name}组件插入${t.nameAlias||t.name}组件`:`添加${t.nameAlias}组件`;d.add(l,"history-add-icon")};return(e,r)=>{const d=n,m=l;return p(),u(m,{activeKey:w.value,"onUpdate:activeKey":r[0]||(r[0]=e=>w.value=e),bordered:!1,class:"custom-collapse",ghost:""},{default:g((()=>[x(d,{key:"1",header:"容器组件"},{default:g((()=>[x(y(a),{tag:"ul",class:"widget-ul","item-key":"id",list:y(o),group:{name:"dragGroup",pull:"clone",put:!1},move:y(i),clone:y(s),sort:!1,onEnd:A},{item:g((({element:e,index:n})=>[(p(),h("li",{class:"widget-item",key:n,title:e.nameAlias||e.name,onDblclick:t=>k(e),slot:"item"},[(p(),u(f(e.icon))),v(" "+_(e.nameAlias||e.name),1)],40,t))])),_:1},8,["list","move","clone"])])),_:1}),x(d,{key:"2",header:"基础字段"},{default:g((()=>[x(y(a),{tag:"ul",class:"widget-ul","item-key":"id",list:y(c),group:{name:"dragGroup",pull:"clone",put:!1},clone:y(s),sort:!1,move:y(i),onEnd:A},{item:g((({element:e,index:t})=>[(p(),h("li",{class:"widget-item",key:t,title:e.nameAlias||e.name,onDblclick:t=>k(e),slot:"item"},[(p(),u(f(e.icon))),v(" "+_(e.nameAlias||e.name),1)],40,b))])),_:1},8,["list","clone","move"])])),_:1})])),_:1},8,["activeKey"])}}})}}}));