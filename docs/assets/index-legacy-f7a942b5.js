System.register(["./module-@vue-legacy-e46b3d3d.js","./module-ant-design-vue-legacy-ee65683d.js","./module-vuedraggable-legacy-9612d79b.js","./vendor-legacy-b433af9c.js","./module-vue-codemirror-legacy-25ca75fd.js","./module-@codemirror-legacy-968182d5.js"],(function(e,t){"use strict";var n,l,o,r,a,i,s,c,d,u,p,g,v,m,y,h,f,w,b,_,x,z,j,O,S,M,C,L,k,A,P,T,V,H,B,$,E,N,J,K,R,U,D,I,F,Y,q,G,Q,W,X,Z,ee,te,ne,le,oe,re,ae,ie,se,ce,de,ue,pe=document.createElement("style");return pe.textContent="html,body{margin:0!important;padding:0!important}body{font-size:16px}:root{--primary-color: #e98add;--primary-color-2: #f9cdf1;--primary-color-3: #fae9f7;--info-color: #e98add;--scrollbar-color: #929292;--border-color: #fafafa;--danger-color: #ec555a;--success-color: #2ed573}.ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ellipsis-l2{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical}.ellipsis-l3{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:3;-webkit-box-orient:vertical}.elysia-panel .elysia-menu{height:100%}.elysia-panel .elysia-menu.ant-menu-inline-collapsed{width:60px}.elysia-panel .elysia-menu .ant-menu-item{text-align:center;height:52px;line-height:56px;margin:0!important}.elysia-panel .elysia-menu .ant-menu-item span.anticon.elysia-icon{font-size:24px}.elysia-panel .menu-header .menu-header-title{color:var(--primary-color)}.elysia-panel .menu-content{width:calc(100% - 57px)}.elysia-panel .menu-content .menu-header{padding:10px 15px;display:flex;flex-direction:row;justify-content:space-between;border-bottom:1px solid var(--border-color)}.elysia-panel .menu-content .menu-header-title{margin:0;font-size:20px}.elysia-panel .menu-content .menu-header-actions{display:flex;align-items:center}.elysia-panel .menu-content .menu-body{width:100%;max-height:calc(100vh - 54px);overflow:auto}.elysia-render,.elysia-render .root-form{width:100%}.elysia-render .root-form .draggable-render{width:100%;min-height:calc(100vh - 96px)}.elysia-main .elysia-toolbar{display:flex;justify-content:space-between;align-items:center;padding:0 16px;border-bottom:1px solid var(--info-color)}.elysia-main .elysia-toolbar .anticon{font-size:22px;color:var(--primary-color);cursor:pointer;user-select:none;padding:8px;transition:transform .4s}.elysia-main .elysia-toolbar .anticon:hover{transform:scale(1.3)}.elysia-main .elysia-toolbar .anticon:active{transform:scale(1.1)}.elysia-main .elysia-main-content.active-json{padding:0}body{overflow:hidden}.elysia-designer{display:flex;flex-direction:row}.elysia-designer .elysia-panel{height:100%;width:20vw;display:flex;flex-direction:row;border-right:1px solid var(--primary-color)}.elysia-designer .elysia-toolbar{width:100%;height:48px}.elysia-designer .main-wrapper{transition:width .3s}.elysia-designer .main-wrapper .elysia-main-content{padding:24px;height:calc(100vh - 48px);width:100%;overflow:hidden;overflow-y:auto}.elysia-designer .aside-wrapper.settings{transition:width .3s}.elysia-designer .aside-wrapper.settings .elysia-setting{height:100vh;width:100%;border-left:1px solid var(--primary-color)}span.anticon.elysia-icon{display:inline-block;color:var(--primary-color)!important;font-size:20px}.static-wrapper[data-v-44a01144]{position:relative;margin-bottom:3px;width:auto}.static-wrapper+.static-wrapper[data-v-44a01144]{margin-top:8px}.static-wrapper .static-tr[data-v-44a01144]{position:absolute;right:-2px;top:-26px;z-index:99;background-color:var(--info-color);display:flex;flex-direction:row;border-radius:4px}.static-wrapper .static-tr .w-name[data-v-44a01144]{text-align:center;line-height:26px;color:#fff;padding:0 8px;cursor:pointer;display:flex;flex-direction:row;align-items:center}.static-wrapper .static-tr .w-name .anticon-eye-invisible[data-v-44a01144]{display:inline-block;background-color:var(--info-color);color:#fff;padding-top:2px;font-size:18px}.static-wrapper .static-tr .anticon[data-v-44a01144]{color:#fff;font-size:20px;padding:0 4px;cursor:pointer}.static-wrapper .baisc-btns .anticon[data-v-44a01144]{background-color:var(--info-color);color:#fff;padding:3px;font-size:20px}.static-wrapper .move-area[data-v-44a01144]{cursor:move!important}.static-wrapper .warapper-slot.show-shadow[data-v-44a01144]{outline:2px solid var(--info-color)!important}.container-draggable{padding:4px}\n",document.head.appendChild(pe),{setters:[e=>{n=e.aa,l=e.k,o=e.e,r=e.aJ,a=e.a1,i=e.f,s=e.bm,c=e.F,d=e.aQ,u=e.$,p=e.aS,g=e.u,v=e.E,m=e.a2,y=e.b1,h=e.q,f=e.z,w=e.H,b=e.r,_=e.as,x=e.ay,z=e.w,j=e.aR,O=e.L,S=e.az,M=e.aB,C=e.D,L=e.a7,k=e.aA,A=e.al,P=e.d,T=e.A,V=e.a0,H=e._},e=>{B=e._,$=e.M,E=e.F,N=e.a,J=e.C,K=e.B,R=e.b,U=e.I,D=e.c,I=e.d,F=e.e,Y=e.f},e=>{q=e.D},e=>{G=e.am,Q=e.an,W=e.ao,X=e.ap,Z=e.aq,ee=e.ar,te=e.as,ne=e.at,le=e.au,oe=e.av,re=e.aw,ae=e.ax,ie=e.ay,se=e.az,ce=e.aA},e=>{de=e.T},e=>{ue=e.F}],execute:function(){e({a:Tl,b:ke,c:He,e:Oe,u:Ye});const pe=function(e,t,n){return e()},ge={class:"elysia-panel"},ve={class:"menu-content"},me={class:"menu-header"},ye={class:"menu-header-title"},he=m("div",{class:"menu-header-actions"},null,-1),fe={class:"menu-body"},we={__name:"ElysiaPanel",setup(e){const w=n((()=>pe((()=>t.import("./panel-component-legacy-8f1ccb54.js"))))),b=n((()=>pe((()=>t.import("./panel-outline-legacy-a0f79c6d.js"))))),_=n((()=>pe((()=>t.import("./panel-history-legacy-3ac54f36.js"))))),x={1:{title:"组件",icon:"cubes-icon"},2:{title:"大纲",icon:"bars-staggered-icon"},3:{title:"历史",icon:"history-icon"}},z=l("1"),j=o({set(e){z.value=e.pop()},get:()=>[z.value]});return(e,t)=>{const n=B,l=$;return r(),a("div",ge,[i(l,{selectedKeys:g(j),"onUpdate:selectedKeys":t[0]||(t[0]=e=>v(j)?j.value=e:null),mode:"vertical",class:"elysia-menu"},{default:s((()=>[(r(),a(c,null,d(x,((e,t)=>i(n,{key:t,title:e.title},{default:s((()=>[(r(),u(p(e.icon)))])),_:2},1032,["title"]))),64))])),_:1},8,["selectedKeys"]),m("div",ve,[m("div",me,[m("h2",ye,y(x[z.value].title),1),he]),m("div",fe,[h(i(g(w),null,null,512),[[f,"1"===z.value]]),h(i(g(b),null,null,512),[[f,"2"===z.value]]),h(i(g(_),null,null,512),[[f,"3"===z.value]])])])])}}},be=e=>"object"==typeof e&&null!==e&&!Array.isArray(e),_e=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);function xe(e){if(be(e)&&_e(e,"path")&&(e=e.path),Array.isArray(e)||(e=[e]),0===e.length)return Pe;const t=[];return e.forEach((e=>{void 0===e?t.push("childrenList"):t.push("childrenList",e)})),G(Pe,t)}function ze(e){return be(e)&&_e(e,"path")&&(e=e.path),xe([...1===e.length?[]:e.slice(0,e.length-1)])}const je=e("d",w({}));function Oe(e){if(null==e)return je.value={},e;let t=[];t=be(e)&&_e(e,"path")?e.path:Array.isArray(e)?e:[e];const n=xe(t);return je.value={...n},n}const Se=e("h",b({historyList:[],step:-1})),Me=w(null),Ce=o((()=>null!==Me.value)),Le=e("r",{add(e,t){10===Se.historyList.length&&Se.historyList.pop();const n=je.value;Se.historyList.unshift({action:e,store:Q(Pe),selectedPath:n?n.path:[],icon:t||"",recordTime:W().format("YY/MM/DD HH:mm:ss")})},viewHistory(e){Me.value||(Me.value=Q(Pe)),Object.keys(e.store).forEach((t=>{Pe[t]=e.store[t]})),Pe.childrenList=ke(Pe.childrenList),Oe(e.selectedPath)},restore(e=!0){Ce.value&&(Me.value=null,e&&Le.add("还原","restore-icon"))}});function ke(e,t=[]){return e.map(((e,n)=>(e.path=[...t,n],Array.isArray(e.childrenList)&&(e.childrenList=ke(e.childrenList,e.path)),_(e)?e:b(e))))}const Ae={globalStyles:"",onMounted:"",onUnmounted:""},Pe=e("s",b({id:X(),name:"a-form",childrenList:[],path:[],options:{...Ae}})),Te=w(null);o((()=>!!Te.value));const Ve=w(null);function He(e){const{_underlying_vm_:t}=e.dragged,{futureIndex:n}=e.draggedContext,{component:l}=e.relatedContext,{path:o=[]}=l.componentData||{};return t.path=[...o,n],!0}function Be(e){const{path:t,nameAlias:n}=e,l=t[t.length-1],o=l-1;if(o<0)return;const r=ze(t),a=Q(r.childrenList);a.splice(l,1),a.splice(o,0,e),r.childrenList=ke(a,r.path),Le.add(`向上移动 ${n} 组件`,"history-up-icon")}function $e(e){const{path:t,nameAlias:n}=e,l=ze(t),o=t[t.length-1],r=o+1;if(r>l.childrenList.length)return;const a=Q(l.childrenList);a.splice(o,1),a.splice(r,0,e),l.childrenList=ke(a,l.path),Le.add(`向下移动 ${n} 组件`,"history-down-icon")}function Ee(e){const{path:t,nameAlias:n,id:l}=e,o=ze(t);if(o){const e=o.childrenList.filter((e=>e.id!==l));o.childrenList=ke(e,o.path),Le.add(`删除${n}组件`,"minus-icon")}}o((()=>!!Ve.value));const Ne={class:"elysia-render"},Je={__name:"ElysiaRender",setup(e){const t=o((()=>Pe.childrenList)),n=e=>{Oe(e.newIndex);const{name:t,nameAlias:n}=e.item._underlying_vm_;Le.add(`添加${n||t}组件`,"history-add-icon")};return(e,l)=>{const o=E;return r(),a("div",Ne,[i(o,{class:"root-form"},{default:s((()=>[i(g(q),x({scroll:"",handle:".move-area",class:"draggable-render"},{group:"dragGroup",ghostClass:"ghost",animation:300},{list:g(t),move:g(He),disabled:g(Ce),onAdd:n,"item-key":"id"}),{item:s((({element:e})=>[(r(),u(p("elysia-"+e.name),{widget:e},null,8,["widget"]))])),_:1},16,["list","move","disabled"])])),_:1})])}}},Ke=e("P","PANEL_COMPONENT"),Re=(e("F","field"),e("C","container")),Ue="BASE_PROPERTYS",De="EVENT_PROPERTYS",Ie=b({[Ue]:{title:"text-input",text:"text-input",type:"type-select",hidden:"switch"},[De]:{onClick:"js-code-editor"}}),Fe=b({[Ue]:{title:"标题",text:"文本",type:"类型",hidden:"隐藏"},[De]:{onClick:"点击触发"},[Ke]:{card:"卡片",button:"按钮"}});function Ye(e,t){if(!t){let t="";return"string"===e&&(t=e),Array.isArray(e)&&(t=[...e].pop()),G(Fe,e,t)}if("string"==typeof e)return void(Fe[e]=t);if(!Array.isArray(e))return;let n=null;return e.map((t=>{n=n?n[e]:Fe[e]})),n=t,t}function qe(e,t){return Reflect.has(Ie[e],t)||Reflect.has(Ie[e],t)?Ie[e][t]:void 0}const Ge=Object.assign({"./switch.vue":()=>pe((()=>t.import("./switch-legacy-1ecc186d.js"))),"./text-input.vue":()=>pe((()=>t.import("./text-input-legacy-8be66a6c.js"))),"./type-select.vue":()=>pe((()=>t.import("./type-select-legacy-87670351.js")))});function Qe(e,t){const l=[];if(t=g(t),Array.isArray(t)&&t.length>0&&t.map((t=>{const o="./"+qe(e,t)+".vue";Ge[o]&&l.push({type:e,property:t,propertyCN:Ye([e,t]),module:n(Ge[o])})})),"string"==typeof t){const o="./"+qe(e,prop)+".vue";Ge[o]&&l.push({type:e,property:t,propertyCN:Ye([e,t]),module:n(Ge[o])})}return l}const We={class:"elysia-setting"},Xe={__name:"ElysiaSetting",setup(e){const t=l(["1","2"]),n=o((()=>{if(Ce.value)return!1;const e=je.value;return e&&!!e.id})),v=o((()=>Object.keys(je.value.options||{}))),m=w([]),y=w([]);return z(v,(()=>{m.value=Qe(Ue,v),y.value=Qe(De,v)}),{immediate:!0}),(e,l)=>{const o=E,v=N,w=J;return r(),a("div",We,[h(i(w,{activeKey:t.value,"onUpdate:activeKey":l[0]||(l[0]=e=>t.value=e),bordered:!1,class:"custom-collapse",ghost:""},{default:s((()=>[h(i(v,{key:"1",header:"常见属性"},{default:s((()=>[i(o,{layout:"horizontal","label-align":"left","label-col":{span:4},"wrapper-col":{span:20}},{default:s((()=>[(r(!0),a(c,null,d(g(m),(e=>(r(),u(p(e.module),{key:e.property,property:e.property,propertyCN:e.propertyCN},null,8,["property","propertyCN"])))),128))])),_:1})])),_:1},512),[[f,g(m).length>0]]),h(i(v,{key:"2",header:"事件"},{default:s((()=>[i(o,{layout:"horizontal","label-align":"left","label-col":{span:4},"wrapper-col":{span:20}},{default:s((()=>[(r(!0),a(c,null,d(g(y),(e=>(r(),u(p(e.module),{key:e.property,property:e.property,propertyCN:e.propertyCN},null,8,["property","propertyCN"])))),128))])),_:1})])),_:1},512),[[f,g(y).length>0]])])),_:1},8,["activeKey"]),[[f,g(n)]])])}}},Ze={class:"elysia-main"},et={class:"elysia-toolbar"},tt={key:0},nt={key:1},lt={__name:"ElysiaToolbar",props:{modelValue:String},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,l=o({set(e){t("update:modelValue",e)},get:()=>n.modelValue}),s=()=>{Ce.value||(Oe(null),function(e=!0){Pe.childrenList=[],Pe.options={...Ae},e&&Le.add("清空数据","broom-icon")}())},d=()=>{l.value="builds",Ve.value=JSON.stringify(Pe,null,2)},p=()=>{l.value="json",Te.value=JSON.stringify(Pe,null,2)},v=()=>{Ve.value=null,Te.value=null,l.value="render"};return(e,t)=>{const n=j("undo-icon"),o=j("redo-icon"),y=j("restore-icon");return r(),a("div",Ze,[m("div",et,[g(Ce)?(r(),a("div",nt,[i(y,{title:"还原",onClick:g(Le).restore},null,8,["onClick"])])):(r(),a("div",tt,[i(n,{title:"撤销"}),i(o,{title:"重做"})])),m("div",null,["render"===g(l)?(r(),a(c,{key:0},[i(g(Z),{title:"清空设计",onClick:s}),i(g(ee),{title:"预览",onClick:d}),i(g(te),{title:"查看代码",onClick:p})],64)):(r(),u(g(ne),{key:1,title:"设计视图",onClick:v}))])]),m("div",{class:S(["elysia-main-content",{[`active-${g(l)}`]:!0}])},[O(e.$slots,"default",{active:g(l)})],2)])}}},ot={class:"elysia-json"},rt={__name:"ElysiaJson",setup(e){const t=[ue()];return(e,n)=>(r(),a("div",ot,[i(g(de),{modelValue:g(Te),"onUpdate:modelValue":n[0]||(n[0]=e=>v(Te)?Te.value=e:null),style:{width:"100%"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:t,readonly:""},null,8,["modelValue"])]))}},at={class:"elysia-builds-render"},it={__name:"ElysiaBuilds",setup:e=>(e,t)=>{const n=j("builds-render");return r(),a("div",at,[i(n,{"schema-json":g(Ve)},null,8,["schema-json"])])}},st={class:"elysia-designer"},ct={class:"aside-wrapper"},dt={__name:"index",setup(e){const t=l("render"),n=o((()=>"builds"!==t.value?{width:"55vw"}:{width:"80vw"})),c=o((()=>"builds"!==t.value?{width:"25vw"}:{width:0,display:"none"}));return(e,l)=>(r(),a("div",st,[m("div",ct,[i(we)]),m("div",{class:"main-wrapper",style:M(g(n))},[i(lt,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e)},{default:s((()=>[h(i(Je,null,null,512),[[f,"render"===t.value]]),h(i(rt,null,null,512),[[f,"json"===t.value]]),h(i(it,null,null,512),[[f,"builds"===t.value]])])),_:1},8,["modelValue"])],4),m("div",{class:"aside-wrapper settings",style:M(g(c))},[i(Xe)],4)]))}},ut={__name:"App",setup:e=>(e,t)=>(r(),u(dt))},pt={__name:"button",props:{widget:Object},setup:e=>(t,n)=>{const l=K;return r(),u(l,{type:e.widget.options.type},{default:s((()=>[C(y(e.widget.options.text),1)])),_:1},8,["type"])}},gt=Object.freeze(Object.defineProperty({__proto__:null,default:pt},Symbol.toStringTag,{value:"Module"}));function vt(e){return"ely-"+e.name}const mt={__name:"card",props:{widget:Object},setup:e=>(t,n)=>{const l=R;return h((r(),u(l,{title:e.widget.options.title},{default:s((()=>[(r(!0),a(c,null,d(e.widget.childrenList,(e=>(r(),u(p(g(vt)(e)),{widget:e,key:e.id},L({_:2},[d(Object.keys(t.$slots),(e=>({name:e,fn:s((e=>[O(t.$slots,"slot",k(A(e)))]))})))]),1032,["widget"])))),128))])),_:3},8,["title"])),[[f,!e.widget.options.hidden]])}},yt=Object.freeze(Object.defineProperty({__proto__:null,default:mt},Symbol.toStringTag,{value:"Module"})),ht={__name:"builds-render",props:{schemaJson:{type:[String,Object]}},setup(e){const t=e,n={id:"default-root-id",name:"a-form",childrenList:[],path:[],options:{globalStyles:"",onMounted:"",onUnmounted:""}},l=o((()=>"string"==typeof t.schemaJson?JSON.parse(t.schemaJson):"object"==typeof t.schemaJson&&null!==t.schemaJson?t.schemaJson:n));return(e,t)=>{const n=E;return r(),u(n,null,{default:s((()=>[(r(!0),a(c,null,d(g(l)?.childrenList||[],(t=>(r(),u(p(g(vt)(t)),{key:t.id,widget:t},L({_:2},[d(Object.keys(e.$slots),(t=>({name:t,fn:s((t=>[O(e.$slots,"slot",k(A(t)))]))})))]),1032,["widget"])))),128))])),_:3})}},install:e=>{e.component("builds-render",ht);const t=Object.assign({"./components/button/button.vue":gt,"./components/card/card.vue":yt});Object.keys(t).forEach((n=>{const l=n.replace(/\.\/components\/.*\/(.*?)\.vue$/,"ely-$1");e.component(l,t[n].default)}))}},ft={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wt=[m("path",{d:"M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm64 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm384 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"},null,-1)];function bt(e,t){return r(),a("svg",ft,wt)}const _t={render:bt},xt=Object.freeze(Object.defineProperty({__proto__:null,default:_t,render:bt},Symbol.toStringTag,{value:"Module"})),zt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},jt=[m("path",{d:"M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6-12.5 0-22.6 10.1-22.6 22.6v29.1L364.3 320h29.1c12.5 0 22.6-10.1 22.6-22.6 0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4 222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8c-22.3 22.3-34.8 52.5-34.8 84 0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9 0 502.1 9.9 512 22.1 512h173.3c38.8 0 75.9-15.4 103.4-42.8 30.6-30.6 45.9-73.1 42.3-115.8z"},null,-1)];function Ot(e,t){return r(),a("svg",zt,jt)}const St={render:Ot},Mt=Object.freeze(Object.defineProperty({__proto__:null,default:St,render:Ot},Symbol.toStringTag,{value:"Module"})),Ct={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},Lt=[m("path",{d:"M576 128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h352V320c0-17.7 14.3-32 32-32h128V128zM448 448l128-128H448v128zM96 192c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},null,-1)];function kt(e,t){return r(),a("svg",Ct,Lt)}const At={render:kt},Pt=Object.freeze(Object.defineProperty({__proto__:null,default:At,render:kt},Symbol.toStringTag,{value:"Module"})),Tt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Vt=[m("path",{d:"M7.724 65.49A64.308 64.308 0 0 1 32 40.56a63.55 63.55 0 0 1 25.46-8.23c2.15-.22 4.33-.33 6.54-.33h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-2.21.112-4.39.33-6.54a63.634 63.634 0 0 1 7.394-23.97zM48 416c0 8.8 7.16 16 16 16h384c8.8 0 16-7.2 16-16V224H48v192z"},null,-1)];function Ht(e,t){return r(),a("svg",Tt,Vt)}const Bt={render:Ht},$t=Object.freeze(Object.defineProperty({__proto__:null,default:Bt,render:Ht},Symbol.toStringTag,{value:"Module"})),Et={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Nt=[m("path",{d:"M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0 0 114.6 0 256s114.6 256 256 256z"},null,-1)];function Jt(e,t){return r(),a("svg",Et,Nt)}const Kt={render:Jt},Rt=Object.freeze(Object.defineProperty({__proto__:null,default:Kt,render:Jt},Symbol.toStringTag,{value:"Module"})),Ut={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Dt=[m("path",{d:"M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64v256h160V160H64zm384 0H288v256h160V160z"},null,-1)];function It(e,t){return r(),a("svg",Ut,Dt)}const Ft={render:It},Yt=Object.freeze(Object.defineProperty({__proto__:null,default:Ft,render:It},Symbol.toStringTag,{value:"Module"})),qt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Gt=[m("path",{d:"M224 0c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64v-64h-64v64H64V224h64v-64H64z"},null,-1)];function Qt(e,t){return r(),a("svg",qt,Gt)}const Wt={render:Qt},Xt=Object.freeze(Object.defineProperty({__proto__:null,default:Wt,render:Qt},Symbol.toStringTag,{value:"Module"})),Zt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},en=[m("path",{d:"M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6c25.4 9.1 42.4 33.2 42.4 60.3v242.8c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66 82.3 128 256 190l173.7-62L256 66zm32 368.6 160-57.1v-188l-160 57.1v188z"},null,-1)];function tn(e,t){return r(),a("svg",Zt,en)}const nn={render:tn},ln=Object.freeze(Object.defineProperty({__proto__:null,default:nn,render:tn},Symbol.toStringTag,{value:"Module"})),on={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},rn=[m("path",{d:"m290.8 48.6 78.4 29.7-81.2 31.2-81.2-31.2 78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5v112.2c-1.3.4-2.6.8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7v119.2c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3V294.7c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3V92.5c0-23.3-14.4-44.1-36.1-52.4L308 3.7c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zm256 118.1-82.4 31.2v-89.2L392 121v89.6zm-237.2 40.3 78.4 29.7-81.2 31.1-81.2-31.1 78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4V354.8l82.4-31.6v95.9l-82.4 36.2zm247.6-204.4c1.8-.7 3.8-.7 5.7 0l78.4 29.7-81.3 31.1-81.2-31.1 78.4-29.7zm102 170.3-77.6 34.1V354.8l82.4-31.6v90.7c0 3.2-1.9 6-4.8 7.3z"},null,-1)];function an(e,t){return r(),a("svg",on,rn)}const sn={render:an},cn=Object.freeze(Object.defineProperty({__proto__:null,default:sn,render:an},Symbol.toStringTag,{value:"Module"})),dn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},un=[m("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4 142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zm144 224c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.6-8.4-.2 2.8-.4 5.5-.4 8.4 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-2.8 0-5.6.1-8.4.4 5.3 9.3 8.4 20.1 8.4 31.6z"},null,-1)];function pn(e,t){return r(),a("svg",dn,un)}const gn={render:pn},vn=Object.freeze(Object.defineProperty({__proto__:null,default:gn,render:pn},Symbol.toStringTag,{value:"Module"})),mn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},yn=[m("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-105.2-82.4c39.6-40.6 66.4-86.1 79.9-118.4 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm184.3 144.4c25.5-23.3 59.6-37.5 96.9-37.5 79.5 0 144 64.5 144 144 0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5 0-53-43-96-96-96-2.8 0-5.6.1-8.4.4 5.3 9.3 8.4 20.1 8.4 31.6 0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1-79.5 0-144-64.5-144-144 0-6.9.5-13.6 1.4-20.2l-94.3-74.3c-22.8 29.7-39.1 59.3-48.6 82.2-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47 43.8 111.7 80.6 192.5 80.6 47.8 0 89.9-12.9 126.2-32.5z"},null,-1)];function hn(e,t){return r(),a("svg",mn,yn)}const fn={render:hn},wn=Object.freeze(Object.defineProperty({__proto__:null,default:fn,render:hn},Symbol.toStringTag,{value:"Module"})),bn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},_n=[m("path",{d:"M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm96 64c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm0-384c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm192 256c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm0-448c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 256c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm-96 128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0-320c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm192 256c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm0-384c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zM32 32C14.3 32 0 46.3 0 64s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm384 256c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zM32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm192 160c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm192-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM32 384c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm384-256c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM32 192c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm192-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"},null,-1)];function xn(e,t){return r(),a("svg",bn,_n)}const zn={render:xn},jn=Object.freeze(Object.defineProperty({__proto__:null,default:zn,render:xn},Symbol.toStringTag,{value:"Module"})),On={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Sn=[m("path",{d:"M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0 0 114.6 0 256s114.6 256 256 256zm-24-168v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"},null,-1)];function Mn(e,t){return r(),a("svg",On,Sn)}const Cn={render:Mn},Ln=Object.freeze(Object.defineProperty({__proto__:null,default:Cn,render:Mn},Symbol.toStringTag,{value:"Module"})),kn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},An=[m("path",{d:"M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512zm120.9 294.6-107.1 99.9c-3.8 3.5-8.7 5.5-13.8 5.5s-10.1-2-13.8-5.5l-107.1-99.9c-4.5-4.2-7.1-10.1-7.1-16.3 0-12.3 10-22.3 22.3-22.3H208v-96c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v96h57.7c12.3 0 22.3 10 22.3 22.3 0 6.2-2.6 12.1-7.1 16.3z"},null,-1)];function Pn(e,t){return r(),a("svg",kn,An)}const Tn={render:Pn},Vn=Object.freeze(Object.defineProperty({__proto__:null,default:Tn,render:Pn},Symbol.toStringTag,{value:"Module"})),Hn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Bn=[m("path",{d:"M75 75 41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24h110.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24v104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"},null,-1)];function $n(e,t){return r(),a("svg",Hn,Bn)}const En={render:$n},Nn=Object.freeze(Object.defineProperty({__proto__:null,default:En,render:$n},Symbol.toStringTag,{value:"Module"})),Jn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Kn=[m("path",{d:"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm129-281c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71V376c0 13.3-10.7 24-24 24s-24-10.7-24-24V193.9l-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 119c9.4-9.4 24.6-9.4 33.9 0L385 231z"},null,-1)];function Rn(e,t){return r(),a("svg",Jn,Kn)}const Un={render:Rn},Dn=Object.freeze(Object.defineProperty({__proto__:null,default:Un,render:Rn},Symbol.toStringTag,{value:"Module"})),In={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},Fn=[m("path",{d:"M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0l-218.6-101c-8.5-4-13.9-12.5-13.9-21.8s5.4-17.9 13.9-21.8l218.6-101zm212.4 204.4 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0l-218.6-101c-8.5-4-13.9-12.5-13.9-21.8s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2a88.1 88.1 0 0 0 73.8 0l152-70.2zm-152 198.2 152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0l-218.6-101c-8.5-4-13.9-12.5-13.9-21.8s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2a88.1 88.1 0 0 0 73.8 0z"},null,-1)];function Yn(e,t){return r(),a("svg",In,Fn)}const qn={render:Yn},Gn=Object.freeze(Object.defineProperty({__proto__:null,default:qn,render:Yn},Symbol.toStringTag,{value:"Module"})),Qn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},Wn=[m("path",{d:"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 200h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"},null,-1)];function Xn(e,t){return r(),a("svg",Qn,Wn)}const Zn={render:Xn},el=Object.freeze(Object.defineProperty({__proto__:null,default:Zn,render:Xn},Symbol.toStringTag,{value:"Module"})),tl={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},nl=[m("path",{d:"M512 256v2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48 0 3.4.4 6.7 1 9.9 2.1 10.2 6.5 20 10.8 29.9 6.1 13.8 12.1 27.5 12.1 42 0 31.8-21.6 60.7-53.4 62-3.5.1-7 .2-10.6.2C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256zm-384 32c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm0-96c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-96c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"},null,-1)];function ll(e,t){return r(),a("svg",tl,nl)}const ol={render:ll},rl=Object.freeze(Object.defineProperty({__proto__:null,default:ol,render:ll},Symbol.toStringTag,{value:"Module"})),al={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},il=[m("path",{d:"M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80v352c0 17.4 9.4 33.4 24.5 41.9S58.2 482 73 473l288-176c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"},null,-1)];function sl(e,t){return r(),a("svg",al,il)}const cl={render:sl},dl=Object.freeze(Object.defineProperty({__proto__:null,default:cl,render:sl},Symbol.toStringTag,{value:"Module"})),ul={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},pl=[m("path",{d:"M463.5 224h8.5c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2S461.9 48.1 455 55l-41.6 41.6c-87.6-86.5-228.7-86.2-315.8 1-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 224 344 224h119.5z"},null,-1)];function gl(e,t){return r(),a("svg",ul,pl)}const vl={render:gl},ml=Object.freeze(Object.defineProperty({__proto__:null,default:vl,render:gl},Symbol.toStringTag,{value:"Module"})),yl={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},hl=[m("path",{d:"M432 64H208c-8.8 0-16 7.2-16 16v16h-64V80c0-44.2 35.8-80 80-80h224c44.2 0 80 35.8 80 80v224c0 44.2-35.8 80-80 80h-16v-64h16c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zM0 192c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192zm64 32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32 14.3-32 32z"},null,-1)];function fl(e,t){return r(),a("svg",yl,hl)}const wl={render:fl},bl=Object.freeze(Object.defineProperty({__proto__:null,default:wl,render:fl},Symbol.toStringTag,{value:"Module"})),_l={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},xl=[m("path",{d:"M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48h159.6l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-25.8L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z"},null,-1)];function zl(e,t){return r(),a("svg",_l,xl)}const jl={render:zl},Ol=Object.freeze(Object.defineProperty({__proto__:null,default:jl,render:zl},Symbol.toStringTag,{value:"Module"})),Sl={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Ml=[m("path",{d:"M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2S50.1 48.1 57 55l41.6 41.6c87.6-86.5 228.7-86.2 315.8 1 87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2S177.7 224 168 224H48.5z"},null,-1)];function Cl(e,t){return r(),a("svg",Sl,Ml)}const Ll={render:Cl},kl=Object.freeze(Object.defineProperty({__proto__:null,default:Ll,render:Cl},Symbol.toStringTag,{value:"Module"})),Al={install(e){const t=Object.assign({"./bars-staggered-icon.svg":xt,"./broom-icon.svg":Mt,"./button-icon.svg":Pt,"./card-icon.svg":$t,"./circle-icon.svg":Rt,"./columns-icon.svg":Yt,"./copy-icon.svg":Xt,"./cube-icon.svg":ln,"./cubes-icon.svg":cn,"./eye-icon.svg":vn,"./eye-slash-icon.svg":wn,"./grid-icon.svg":jn,"./history-add-icon.svg":Ln,"./history-down-icon.svg":Vn,"./history-icon.svg":Nn,"./history-up-icon.svg":Dn,"./layer-group-icon.svg":Gn,"./minus-icon.svg":el,"./pallette-icon.svg":rl,"./play-icon.svg":dl,"./redo-icon.svg":ml,"./restore-icon.svg":bl,"./text-icon.svg":Ol,"./undo-icon.svg":kl});Object.keys(t).forEach((n=>{const l=n.replace(/\.\/(.*?)\.svg/,"$1"),o=P({setup(){const e=`elysia-icon ${l}`;return()=>i(le,{class:e,component:t[n]},null)}});e.component(l,o)}))}},Pl={install(e){e.use($).use(K).use(J).use(R).use(E).use(U).use(D).use(I).use(F).use(Y)}};function Tl(e){const t=Q(e);return t.id=X(),t.options={field:t.name+5*Math.round(1e3*Math.random()*Math.random()),...t.options||{}},t.type!==Re||Array.isArray(t.childrenList)||(t.childrenList=[]),b(t)}const Vl={__name:"draggable",props:{list:{type:Array,default:()=>[]},group:{type:String,default:"dragGroup"},ghostClass:{type:String,default:"ghost"},animation:{type:Number,default:300},widget:{type:Object,required:!0},itemKey:{type:String,default:"id"},handle:{type:String,default:".move-area"}},setup(e){const t=e,n=e=>{const{path:n,nameAlias:l}=t.widget,o=Oe([...n,e.newIndex]);Le.add(`向${l}组件插入${o.nameAlias}组件`,"history-add-icon")};return(t,l)=>(r(),u(g(q),x(t.$attrs,{handle:e.handle,move:g(He),clone:g(Tl),list:e.widget.childrenList,group:e.group,ghostClass:e.ghostClass,animation:e.animation,"component-data":{path:e.widget.path},"item-key":e.itemKey,disabled:g(Ce),onAdd:n}),L({_:2},[d(Object.keys(t.$slots),(e=>({name:e,fn:s((n=>[O(t.$slots,e,k(A(n)))]))})))]),1040,["handle","move","clone","list","group","ghostClass","animation","component-data","item-key","disabled"]))}};function Hl(e){const{path:t=[],nameAlias:n}=e,l=function(e){function t(e){const n=Q(e);return n.id=X(),n.type!==Re?n:Array.isArray(n.childrenList)?(0===n.childrenList.length||(n.childrenList=n.childrenList.map((e=>t(e)))),n):n}return be(e)||Array.isArray(e)?be(e)?t(e):Array.isArray(e)&&0===e.length?e:e.map((e=>t(e))):e}(e),o=ze(t),r=[...o.childrenList,l];o.childrenList=ke(r,o.path),Oe(l.path),Le.add(`复制${n}组件`,"copy-icon")}const Bl={class:"static-wrapper"},$l=["onClick"],El={key:0,class:"static-tr"},Nl={class:"w-name move-area",title:"长按拖拽"},Jl={class:"baisc-btns"},Kl=((e,t)=>{const n=e.__vccOpts||e;for(const[l,o]of t)n[l]=o;return n})({__name:"static-wrapper",props:{widget:{type:Object,default:()=>({})}},setup(e){const t=e,n=o((()=>{if(Ce.value)return!1;const e=je.value;return e&&e.id===t.widget.id})),l=()=>{Ce.value||n.value||Oe(t.widget)};return(t,o)=>(r(),a("div",Bl,[m("div",{class:S(["warapper-slot",{"show-shadow":g(n)}]),onClick:T(l,["stop"])},[O(t.$slots,"default",{},void 0,!0)],10,$l),g(n)?(r(),a("div",El,[m("span",Nl,[h(i(g(oe),{title:"已隐藏"},null,512),[[f,!0===e.widget.options.hidden]]),C(" "+y(e.widget.nameAlias),1)]),m("div",Jl,[i(g(re),{class:"move-area",title:"长按拖拽"}),i(g(ae),{onClick:o[0]||(o[0]=t=>g(Hl)(e.widget)),title:"拷贝组件"}),i(g(ie),{onClick:o[1]||(o[1]=t=>g(Be)(e.widget)),title:"上移组件"}),i(g(se),{onClick:o[2]||(o[2]=t=>g($e)(e.widget)),title:"下移组件"}),O(t.$slots,"custom-bar",{},void 0,!0),i(g(ce),{onClick:o[3]||(o[3]=t=>g(Ee)(e.widget)),title:"删除组件"})])])):V("",!0)]))}},[["__scopeId","data-v-44a01144"]]),Rl={__name:"card",props:{widget:Object},setup:e=>(t,n)=>{const l=R;return r(),u(Kl,{widget:e.widget},{default:s((()=>[i(l,{title:e.widget.options.title},{default:s((()=>[i(Vl,{widget:e.widget,class:"container-draggable"},{item:s((({element:e})=>[(r(),u(p("elysia-"+e.name),{widget:e},null,8,["widget"]))])),_:1},8,["widget"])])),_:1},8,["title"])])),_:1},8,["widget"])}},Ul=Object.freeze(Object.defineProperty({__proto__:null,default:Rl},Symbol.toStringTag,{value:"Module"})),Dl={__name:"button",props:{widget:Object},setup:e=>(t,n)=>{const l=K;return r(),u(Kl,{widget:e.widget},{default:s((()=>[i(l,{type:e.widget.options.type},{default:s((()=>[C(y(e.widget.options.text),1)])),_:1},8,["type"])])),_:1},8,["widget"])}},Il=Object.freeze(Object.defineProperty({__proto__:null,default:Dl},Symbol.toStringTag,{value:"Module"})),Fl={install(e){const t={...Object.assign({"./containers/card/card.vue":Ul}),...Object.assign({"./fields/button/button.vue":Il})};Object.keys(t).forEach((n=>{const l=n.replace(/\.\/.*\/(.*?)\.vue/,"elysia-$1"),o=t[n].default;e.component(l,o)}))}},Yl={install(e){e.use(Al).use(Pl).use(Fl).use(ht),e.component(dt)}};H(ut).use(Yl).mount("#app")}}}));
