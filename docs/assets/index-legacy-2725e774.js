System.register(["./module-@vue-legacy-fc3cdb82.js","./module-ant-design-vue-legacy-75692194.js","./vendor-legacy-20cf4371.js"],(function(e,t){"use strict";var n,l,o,r,i,a,s,c,d,u,p,g,m,v,y,h,f,w,b,_,x,z,j,O,S,M,L,k,C,A,P,T,V,H,B,$,E,N,J,K,R,U,I,Y,D,q,F,G,Q,W,Z,X,ee,te,ne,le,oe,re,ie,ae,se,ce,de,ue,pe,ge=document.createElement("style");return ge.textContent="html,body{margin:0!important;padding:0!important}body{font-size:16px}:root{--primary-color: #e98add;--primary-color-2: #f9cdf1;--primary-color-3: #fae9f7;--info-color: #e98add;--scrollbar-color: #929292;--border-color: #fafafa;--danger-color: #ec555a;--success-color: #2ed573}.ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ellipsis-l2{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical}.ellipsis-l3{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:3;-webkit-box-orient:vertical}.elysia-panel .elysia-menu{height:100%}.elysia-panel .elysia-menu.ant-menu-inline-collapsed{width:60px}.elysia-panel .elysia-menu .ant-menu-item{text-align:center;height:52px;line-height:56px;margin:0!important}.elysia-panel .elysia-menu .ant-menu-item span.anticon.elysia-icon{font-size:24px}.elysia-panel .menu-header .menu-header-title{color:var(--primary-color)}.elysia-panel .menu-content{width:calc(100% - 57px)}.elysia-panel .menu-content .menu-header{padding:10px 15px;display:flex;flex-direction:row;justify-content:space-between;border-bottom:1px solid var(--border-color)}.elysia-panel .menu-content .menu-header-title{margin:0;font-size:20px}.elysia-panel .menu-content .menu-header-actions{display:flex;align-items:center}.elysia-panel .menu-content .menu-body{width:100%;max-height:calc(100vh - 54px);overflow:auto}.elysia-render,.elysia-render .root-form{width:100%}.elysia-render .root-form .draggable-render{width:100%;min-height:calc(100vh - 96px)}.elysia-main .elysia-toolbar{display:flex;justify-content:space-between;align-items:center;padding:0 16px;border-bottom:1px solid var(--info-color)}.elysia-main .elysia-toolbar .anticon{font-size:22px;color:var(--primary-color);cursor:pointer;user-select:none;padding:8px;transition:transform .4s}.elysia-main .elysia-toolbar .anticon:hover{transform:scale(1.3)}.elysia-main .elysia-toolbar .anticon:active{transform:scale(1.1)}.elysia-main .elysia-main-content.active-json{padding:0}body{overflow:hidden}.elysia-designer{display:flex;flex-direction:row}.elysia-designer .elysia-panel{height:100%;width:20vw;display:flex;flex-direction:row;border-right:1px solid var(--primary-color)}.elysia-designer .elysia-toolbar{width:100%;height:48px}.elysia-designer .main-wrapper{transition:width .3s}.elysia-designer .main-wrapper .elysia-main-content{padding:24px;height:calc(100vh - 48px);width:100%;overflow:hidden;overflow-y:auto}.elysia-designer .aside-wrapper.settings{transition:width .3s}.elysia-designer .aside-wrapper.settings .elysia-setting{height:100vh;width:100%;border-left:1px solid var(--primary-color)}span.anticon.elysia-icon{display:inline-block;color:var(--primary-color)!important;font-size:20px}.static-wrapper[data-v-44a01144]{position:relative;margin-bottom:3px;width:auto}.static-wrapper+.static-wrapper[data-v-44a01144]{margin-top:8px}.static-wrapper .static-tr[data-v-44a01144]{position:absolute;right:-2px;top:-26px;z-index:99;background-color:var(--info-color);display:flex;flex-direction:row;border-radius:4px}.static-wrapper .static-tr .w-name[data-v-44a01144]{text-align:center;line-height:26px;color:#fff;padding:0 8px;cursor:pointer;display:flex;flex-direction:row;align-items:center}.static-wrapper .static-tr .w-name .anticon-eye-invisible[data-v-44a01144]{display:inline-block;background-color:var(--info-color);color:#fff;padding-top:2px;font-size:18px}.static-wrapper .static-tr .anticon[data-v-44a01144]{color:#fff;font-size:20px;padding:0 4px;cursor:pointer}.static-wrapper .baisc-btns .anticon[data-v-44a01144]{background-color:var(--info-color);color:#fff;padding:3px;font-size:20px}.static-wrapper .move-area[data-v-44a01144]{cursor:move!important}.static-wrapper .warapper-slot.show-shadow[data-v-44a01144]{outline:2px solid var(--info-color)!important}.container-draggable{padding:4px}\n",document.head.appendChild(ge),{setters:[e=>{n=e.aR,l=e.aJ,o=e._,r=e.a9,i=e.k,a=e.e,s=e.a0,c=e.f,d=e.bm,u=e.F,p=e.aQ,g=e.aS,m=e.u,v=e.E,y=e.a1,h=e.b1,f=e.q,w=e.z,b=e.H,_=e.r,x=e.as,z=e.ay,j=e.w,O=e.L,S=e.az,M=e.aB,L=e.D,k=e.a6,C=e.aA,A=e.ak,P=e.d,T=e.A,V=e.$,H=e.aY,B=e.Z},e=>{$=e._,E=e.M,N=e.F,J=e.a,K=e.C,R=e.B,U=e.b,I=e.I,Y=e.c,D=e.d,q=e.e,F=e.f},e=>{G=e.a3,Q=e.a4,W=e.a5,Z=e.a6,X=e.a7,ee=e.a8,te=e.a9,ne=e.aa,le=e.ab,oe=e.ac,re=e.ad,ie=e.ae,ae=e.af,se=e.ag,ce=e.ah,de=e.ai,ue=e.aj,pe=e.ak}],execute:function(){e({a:Ee,b:El,d:Te,g:Le});const ge=(e,t)=>{const n=e.__vccOpts||e;for(const[l,o]of t)n[l]=o;return n},me=ge({},[["render",function(e,t){const r=n("elysia-designer");return l(),o(r)}]]),ve=function(e,t,n){return e()},ye={class:"elysia-panel"},he={class:"menu-content"},fe={class:"menu-header"},we={class:"menu-header-title"},be=y("div",{class:"menu-header-actions"},null,-1),_e={class:"menu-body"},xe={__name:"ElysiaPanel",setup(e){const n=r((()=>ve((()=>t.import("./panel-component-legacy-44b23579.js"))))),b=r((()=>ve((()=>t.import("./panel-outline-legacy-29112f28.js"))))),_=r((()=>ve((()=>t.import("./panel-history-legacy-51580965.js"))))),x={1:{title:"组件",icon:"cubes-icon"},2:{title:"大纲",icon:"bars-staggered-icon"},3:{title:"历史",icon:"history-icon"}},z=i("1"),j=a({set(e){z.value=e.pop()},get:()=>[z.value]});return(e,t)=>{const r=$,i=E;return l(),s("div",ye,[c(i,{selectedKeys:m(j),"onUpdate:selectedKeys":t[0]||(t[0]=e=>v(j)?j.value=e:null),mode:"vertical",class:"elysia-menu"},{default:d((()=>[(l(),s(u,null,p(x,((e,t)=>c(r,{key:t,title:e.title},{default:d((()=>[(l(),o(g(e.icon)))])),_:2},1032,["title"]))),64))])),_:1},8,["selectedKeys"]),y("div",he,[y("div",fe,[y("h2",we,h(x[z.value].title),1),be]),y("div",_e,[f(c(m(n),null,null,512),[[w,"1"===z.value]]),f(c(m(b),null,null,512),[[w,"2"===z.value]]),f(c(m(_),null,null,512),[[w,"3"===z.value]])])])])}}},ze=e=>"object"==typeof e&&null!==e&&!Array.isArray(e),je=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);function Oe(e){if(ze(e)&&je(e,"path")&&(e=e.path),Array.isArray(e)||(e=[e]),0===e.length)return He;const t=[];return e.forEach((e=>{void 0===e?t.push("childrenList"):t.push("childrenList",e)})),G(He,t)}function Se(e){return ze(e)&&je(e,"path")&&(e=e.path),Oe([...1===e.length?[]:e.slice(0,e.length-1)])}const Me=e("e",b({}));function Le(e){if(null==e)return Me.value={},e;let t=[];t=ze(e)&&je(e,"path")?e.path:Array.isArray(e)?e:[e];const n=Oe(t);return Me.value={...n},n}const ke=e("h",_({historyList:[],step:-1})),Ce=b(null),Ae=a((()=>null!==Ce.value)),Pe=e("r",{add(e,t){10===ke.historyList.length&&ke.historyList.pop();const n=Me.value;ke.historyList.unshift({action:e,store:Q(He),selectedPath:n?n.path:[],icon:t||"",recordTime:W().format("YY/MM/DD HH:mm:ss")})},viewHistory(e){Ce.value||(Ce.value=Q(He)),Object.keys(e.store).forEach((t=>{He[t]=e.store[t]})),He.childrenList=Te(He.childrenList),Le(e.selectedPath)},restore(e=!0){Ae.value&&(Ce.value=null,e&&Pe.add("还原","restore-icon"))}});function Te(e,t=[]){return e.map(((e,n)=>(e.path=[...t,n],Array.isArray(e.childrenList)&&(e.childrenList=Te(e.childrenList,e.path)),x(e)?e:_(e))))}const Ve={globalStyles:"",onMounted:"",onUnmounted:""},He=e("s",_({id:Z(),name:"a-form",childrenList:[],path:[],options:{...Ve}})),Be=b(null);a((()=>!!Be.value));const $e=b(null);function Ee(e){const{_underlying_vm_:t}=e.dragged,{futureIndex:n}=e.draggedContext,{component:l}=e.relatedContext,{path:o=[]}=l.componentData||{};return t.path=[...o,n],!0}function Ne(e){const{path:t,nameAlias:n}=e,l=t[t.length-1],o=l-1;if(o<0)return;const r=Se(t),i=Q(r.childrenList);i.splice(l,1),i.splice(o,0,e),r.childrenList=Te(i,r.path),Pe.add(`向上移动 ${n} 组件`,"history-up-icon")}function Je(e){const{path:t,nameAlias:n}=e,l=Se(t),o=t[t.length-1],r=o+1;if(r>l.childrenList.length)return;const i=Q(l.childrenList);i.splice(o,1),i.splice(r,0,e),l.childrenList=Te(i,l.path),Pe.add(`向下移动 ${n} 组件`,"history-down-icon")}function Ke(e){const{path:t,nameAlias:n,id:l}=e,o=Se(t);if(o){const e=o.childrenList.filter((e=>e.id!==l));o.childrenList=Te(e,o.path),Pe.add(`删除${n}组件`,"minus-icon")}}a((()=>!!$e.value));const Re={class:"elysia-render"},Ue={__name:"ElysiaRender",setup(e){const t=a((()=>He.childrenList)),n=e=>{Le(e.newIndex);const{name:t,nameAlias:n}=e.item._underlying_vm_;Pe.add(`添加${n||t}组件`,"history-add-icon")};return(e,r)=>{const i=N;return l(),s("div",Re,[c(i,{class:"root-form"},{default:d((()=>[c(m(X),z({scroll:"",handle:".move-area",class:"draggable-render"},{group:"dragGroup",ghostClass:"ghost",animation:300},{list:m(t),move:m(Ee),disabled:m(Ae),onAdd:n,"item-key":"id"}),{item:d((({element:e})=>[(l(),o(g("elysia-"+e.name),{widget:e},null,8,["widget"]))])),_:1},16,["list","move","disabled"])])),_:1})])}}},Ie="PANEL_COMPONENT",Ye="field",De=e("C","container"),qe="BASE_PROPERTYS",Fe="EVENT_PROPERTYS",Ge=_({[qe]:{title:"text-input",text:"text-input",type:"type-select",hidden:"switch"},[Fe]:{onClick:"js-code-editor"}}),Qe=_({[qe]:{title:"标题",text:"文本",type:"类型",hidden:"隐藏"},[Fe]:{onClick:"点击触发"},[Ie]:{card:"卡片",button:"按钮"}});function We(e,t){if(!t){let t="";return"string"===e&&(t=e),Array.isArray(e)&&(t=[...e].pop()),G(Qe,e,t)}if("string"==typeof e)return void(Qe[e]=t);if(!Array.isArray(e))return;let n=null;return e.map((t=>{n=n?n[e]:Qe[e]})),n=t,t}function Ze(e,t){return Reflect.has(Ge[e],t)||Reflect.has(Ge[e],t)?Ge[e][t]:void 0}const Xe=Object.assign({"./switch.vue":()=>ve((()=>t.import("./switch-legacy-ef0e1048.js"))),"./text-input.vue":()=>ve((()=>t.import("./text-input-legacy-fa670d28.js"))),"./type-select.vue":()=>ve((()=>t.import("./type-select-legacy-bfeb3228.js")))});function et(e,t){const n=[];if(t=m(t),Array.isArray(t)&&t.length>0&&t.map((t=>{const l="./"+Ze(e,t)+".vue";Xe[l]&&n.push({type:e,property:t,propertyCN:We([e,t]),module:r(Xe[l])})})),"string"==typeof t){const l="./"+Ze(e,prop)+".vue";Xe[l]&&n.push({type:e,property:t,propertyCN:We([e,t]),module:r(Xe[l])})}return n}const tt={class:"elysia-setting"},nt={__name:"ElysiaSetting",setup(e){const t=i(["1","2"]),n=a((()=>{if(Ae.value)return!1;const e=Me.value;return e&&!!e.id})),r=a((()=>Object.keys(Me.value.options||{}))),v=b([]),y=b([]);return j(r,(()=>{v.value=et(qe,r),y.value=et(Fe,r)}),{immediate:!0}),(e,r)=>{const i=N,a=J,h=K;return l(),s("div",tt,[f(c(h,{activeKey:t.value,"onUpdate:activeKey":r[0]||(r[0]=e=>t.value=e),bordered:!1,class:"custom-collapse",ghost:""},{default:d((()=>[f(c(a,{key:"1",header:"常见属性"},{default:d((()=>[c(i,{layout:"horizontal","label-align":"left","label-col":{span:4},"wrapper-col":{span:20}},{default:d((()=>[(l(!0),s(u,null,p(m(v),(e=>(l(),o(g(e.module),{key:e.property,property:e.property,propertyCN:e.propertyCN},null,8,["property","propertyCN"])))),128))])),_:1})])),_:1},512),[[w,m(v).length>0]]),f(c(a,{key:"2",header:"事件"},{default:d((()=>[c(i,{layout:"horizontal","label-align":"left","label-col":{span:4},"wrapper-col":{span:20}},{default:d((()=>[(l(!0),s(u,null,p(m(y),(e=>(l(),o(g(e.module),{key:e.property,property:e.property,propertyCN:e.propertyCN},null,8,["property","propertyCN"])))),128))])),_:1})])),_:1},512),[[w,m(y).length>0]])])),_:1},8,["activeKey"]),[[w,m(n)]])])}}},lt={class:"elysia-main"},ot={class:"elysia-toolbar"},rt={key:0},it={key:1},at={__name:"ElysiaToolbar",props:{modelValue:String},emits:["update:modelValue"],setup(e,{emit:t}){const r=e,i=a({set(e){t("update:modelValue",e)},get:()=>r.modelValue}),d=()=>{Ae.value||(Le(null),function(e=!0){He.childrenList=[],He.options={...Ve},e&&Pe.add("清空数据","broom-icon")}())},p=()=>{i.value="builds",$e.value=JSON.stringify(He,null,2)},g=()=>{i.value="json",Be.value=JSON.stringify(He,null,2)},v=()=>{$e.value=null,Be.value=null,i.value="render"};return(e,t)=>{const r=n("undo-icon"),a=n("redo-icon"),h=n("restore-icon");return l(),s("div",lt,[y("div",ot,[m(Ae)?(l(),s("div",it,[c(h,{title:"还原",onClick:m(Pe).restore},null,8,["onClick"])])):(l(),s("div",rt,[c(r,{title:"撤销"}),c(a,{title:"重做"})])),y("div",null,["render"===m(i)?(l(),s(u,{key:0},[c(m(ee),{title:"清空设计",onClick:d}),c(m(te),{title:"预览",onClick:p}),c(m(ne),{title:"查看代码",onClick:g})],64)):(l(),o(m(le),{key:1,title:"设计视图",onClick:v}))])]),y("div",{class:S(["elysia-main-content",{[`active-${m(i)}`]:!0}])},[O(e.$slots,"default",{active:m(i)})],2)])}}},st={class:"elysia-json"},ct={__name:"ElysiaJson",setup(e){const t=[oe()];return(e,n)=>(l(),s("div",st,[c(m(re),{modelValue:m(Be),"onUpdate:modelValue":n[0]||(n[0]=e=>v(Be)?Be.value=e:null),style:{width:"100%"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:t,readonly:""},null,8,["modelValue"])]))}},dt={class:"elysia-builds-render"},ut={__name:"ElysiaBuilds",setup:e=>(e,t)=>{const o=n("builds-render");return l(),s("div",dt,[c(o,{"schema-json":m($e)},null,8,["schema-json"])])}},pt={class:"elysia-designer"},gt={class:"aside-wrapper"},mt={__name:"index",setup(e){const t=i("render"),n=a((()=>"builds"!==t.value?{width:"55vw"}:{width:"80vw"})),o=a((()=>"builds"!==t.value?{width:"25vw"}:{width:0,display:"none"}));return(e,r)=>(l(),s("div",pt,[y("div",gt,[c(xe)]),y("div",{class:"main-wrapper",style:M(m(n))},[c(at,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e)},{default:d((()=>[f(c(Ue,null,null,512),[[w,"render"===t.value]]),f(c(ct,null,null,512),[[w,"json"===t.value]]),f(c(ut,null,null,512),[[w,"builds"===t.value]])])),_:1},8,["modelValue"])],4),y("div",{class:"aside-wrapper settings",style:M(m(o))},[c(nt)],4)]))}},vt={__name:"button",props:{widget:Object},setup:e=>(t,n)=>{const r=R;return l(),o(r,{type:e.widget.options.type},{default:d((()=>[L(h(e.widget.options.text),1)])),_:1},8,["type"])}},yt=Object.freeze(Object.defineProperty({__proto__:null,default:vt},Symbol.toStringTag,{value:"Module"}));function ht(e){return"ely-"+e.name}const ft={__name:"card",props:{widget:Object},setup:e=>(t,n)=>{const r=U;return f((l(),o(r,{title:e.widget.options.title},{default:d((()=>[(l(!0),s(u,null,p(e.widget.childrenList,(e=>(l(),o(g(m(ht)(e)),{widget:e,key:e.id},k({_:2},[p(Object.keys(t.$slots),(e=>({name:e,fn:d((e=>[O(t.$slots,"slot",C(A(e)))]))})))]),1032,["widget"])))),128))])),_:3},8,["title"])),[[w,!e.widget.options.hidden]])}},wt=Object.freeze(Object.defineProperty({__proto__:null,default:ft},Symbol.toStringTag,{value:"Module"})),bt={__name:"text",props:{widget:Object},setup:e=>(t,n)=>f((l(),s("p",null,h(e.widget.options.text),513)),[[w,!e.widget.options.hidden]])},_t=Object.freeze(Object.defineProperty({__proto__:null,default:bt},Symbol.toStringTag,{value:"Module"})),xt={__name:"builds-render",props:{schemaJson:{type:[String,Object]}},setup(e){const t=e,n={id:"default-root-id",name:"a-form",childrenList:[],path:[],options:{globalStyles:"",onMounted:"",onUnmounted:""}},r=a((()=>"string"==typeof t.schemaJson?JSON.parse(t.schemaJson):"object"==typeof t.schemaJson&&null!==t.schemaJson?t.schemaJson:n));return(e,t)=>{const n=N;return l(),o(n,null,{default:d((()=>[(l(!0),s(u,null,p(m(r)?.childrenList||[],(t=>(l(),o(g(m(ht)(t)),{key:t.id,widget:t},k({_:2},[p(Object.keys(e.$slots),(t=>({name:t,fn:d((t=>[O(e.$slots,"slot",C(A(t)))]))})))]),1032,["widget"])))),128))])),_:3})}},install:e=>{e.component("builds-render",xt);const t=Object.assign({"./components/button/button.vue":yt,"./components/card/card.vue":wt,"./components/text/text.vue":_t});Object.keys(t).forEach((n=>{const l=n.replace(/\.\/components\/.*\/(.*?)\.vue$/,"ely-$1");e.component(l,t[n].default)}))}},zt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},jt=[y("path",{d:"M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm64 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm384 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"},null,-1)];function Ot(e,t){return l(),s("svg",zt,jt)}const St={render:Ot},Mt=Object.freeze(Object.defineProperty({__proto__:null,default:St,render:Ot},Symbol.toStringTag,{value:"Module"})),Lt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},kt=[y("path",{d:"M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6-12.5 0-22.6 10.1-22.6 22.6v29.1L364.3 320h29.1c12.5 0 22.6-10.1 22.6-22.6 0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4 222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8c-22.3 22.3-34.8 52.5-34.8 84 0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9 0 502.1 9.9 512 22.1 512h173.3c38.8 0 75.9-15.4 103.4-42.8 30.6-30.6 45.9-73.1 42.3-115.8z"},null,-1)];function Ct(e,t){return l(),s("svg",Lt,kt)}const At={render:Ct},Pt=Object.freeze(Object.defineProperty({__proto__:null,default:At,render:Ct},Symbol.toStringTag,{value:"Module"})),Tt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},Vt=[y("path",{d:"M576 128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h352V320c0-17.7 14.3-32 32-32h128V128zM448 448l128-128H448v128zM96 192c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},null,-1)];function Ht(e,t){return l(),s("svg",Tt,Vt)}const Bt={render:Ht},$t=Object.freeze(Object.defineProperty({__proto__:null,default:Bt,render:Ht},Symbol.toStringTag,{value:"Module"})),Et={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Nt=[y("path",{d:"M7.724 65.49A64.308 64.308 0 0 1 32 40.56a63.55 63.55 0 0 1 25.46-8.23c2.15-.22 4.33-.33 6.54-.33h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-2.21.112-4.39.33-6.54a63.634 63.634 0 0 1 7.394-23.97zM48 416c0 8.8 7.16 16 16 16h384c8.8 0 16-7.2 16-16V224H48v192z"},null,-1)];function Jt(e,t){return l(),s("svg",Et,Nt)}const Kt={render:Jt},Rt=Object.freeze(Object.defineProperty({__proto__:null,default:Kt,render:Jt},Symbol.toStringTag,{value:"Module"})),Ut={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},It=[y("path",{d:"M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0 0 114.6 0 256s114.6 256 256 256z"},null,-1)];function Yt(e,t){return l(),s("svg",Ut,It)}const Dt={render:Yt},qt=Object.freeze(Object.defineProperty({__proto__:null,default:Dt,render:Yt},Symbol.toStringTag,{value:"Module"})),Ft={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Gt=[y("path",{d:"M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64v256h160V160H64zm384 0H288v256h160V160z"},null,-1)];function Qt(e,t){return l(),s("svg",Ft,Gt)}const Wt={render:Qt},Zt=Object.freeze(Object.defineProperty({__proto__:null,default:Wt,render:Qt},Symbol.toStringTag,{value:"Module"})),Xt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},en=[y("path",{d:"M224 0c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64v-64h-64v64H64V224h64v-64H64z"},null,-1)];function tn(e,t){return l(),s("svg",Xt,en)}const nn={render:tn},ln=Object.freeze(Object.defineProperty({__proto__:null,default:nn,render:tn},Symbol.toStringTag,{value:"Module"})),on={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},rn=[y("path",{d:"M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6c25.4 9.1 42.4 33.2 42.4 60.3v242.8c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66 82.3 128 256 190l173.7-62L256 66zm32 368.6 160-57.1v-188l-160 57.1v188z"},null,-1)];function an(e,t){return l(),s("svg",on,rn)}const sn={render:an},cn=Object.freeze(Object.defineProperty({__proto__:null,default:sn,render:an},Symbol.toStringTag,{value:"Module"})),dn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},un=[y("path",{d:"m290.8 48.6 78.4 29.7-81.2 31.2-81.2-31.2 78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5v112.2c-1.3.4-2.6.8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7v119.2c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3V294.7c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3V92.5c0-23.3-14.4-44.1-36.1-52.4L308 3.7c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zm256 118.1-82.4 31.2v-89.2L392 121v89.6zm-237.2 40.3 78.4 29.7-81.2 31.1-81.2-31.1 78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4V354.8l82.4-31.6v95.9l-82.4 36.2zm247.6-204.4c1.8-.7 3.8-.7 5.7 0l78.4 29.7-81.3 31.1-81.2-31.1 78.4-29.7zm102 170.3-77.6 34.1V354.8l82.4-31.6v90.7c0 3.2-1.9 6-4.8 7.3z"},null,-1)];function pn(e,t){return l(),s("svg",dn,un)}const gn={render:pn},mn=Object.freeze(Object.defineProperty({__proto__:null,default:gn,render:pn},Symbol.toStringTag,{value:"Module"})),vn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},yn=[y("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4 142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zm144 224c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.6-8.4-.2 2.8-.4 5.5-.4 8.4 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-2.8 0-5.6.1-8.4.4 5.3 9.3 8.4 20.1 8.4 31.6z"},null,-1)];function hn(e,t){return l(),s("svg",vn,yn)}const fn={render:hn},wn=Object.freeze(Object.defineProperty({__proto__:null,default:fn,render:hn},Symbol.toStringTag,{value:"Module"})),bn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},_n=[y("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-105.2-82.4c39.6-40.6 66.4-86.1 79.9-118.4 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm184.3 144.4c25.5-23.3 59.6-37.5 96.9-37.5 79.5 0 144 64.5 144 144 0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5 0-53-43-96-96-96-2.8 0-5.6.1-8.4.4 5.3 9.3 8.4 20.1 8.4 31.6 0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1-79.5 0-144-64.5-144-144 0-6.9.5-13.6 1.4-20.2l-94.3-74.3c-22.8 29.7-39.1 59.3-48.6 82.2-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47 43.8 111.7 80.6 192.5 80.6 47.8 0 89.9-12.9 126.2-32.5z"},null,-1)];function xn(e,t){return l(),s("svg",bn,_n)}const zn={render:xn},jn=Object.freeze(Object.defineProperty({__proto__:null,default:zn,render:xn},Symbol.toStringTag,{value:"Module"})),On={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Sn=[y("path",{d:"M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm96 64c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm0-384c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm192 256c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm0-448c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 256c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm-96 128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0-320c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm192 256c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm0-384c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zM32 32C14.3 32 0 46.3 0 64s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm384 256c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zM32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm192 160c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm192-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM32 384c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm384-256c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM32 192c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm192-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"},null,-1)];function Mn(e,t){return l(),s("svg",On,Sn)}const Ln={render:Mn},kn=Object.freeze(Object.defineProperty({__proto__:null,default:Ln,render:Mn},Symbol.toStringTag,{value:"Module"})),Cn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},An=[y("path",{d:"M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0 0 114.6 0 256s114.6 256 256 256zm-24-168v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"},null,-1)];function Pn(e,t){return l(),s("svg",Cn,An)}const Tn={render:Pn},Vn=Object.freeze(Object.defineProperty({__proto__:null,default:Tn,render:Pn},Symbol.toStringTag,{value:"Module"})),Hn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Bn=[y("path",{d:"M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512zm120.9 294.6-107.1 99.9c-3.8 3.5-8.7 5.5-13.8 5.5s-10.1-2-13.8-5.5l-107.1-99.9c-4.5-4.2-7.1-10.1-7.1-16.3 0-12.3 10-22.3 22.3-22.3H208v-96c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v96h57.7c12.3 0 22.3 10 22.3 22.3 0 6.2-2.6 12.1-7.1 16.3z"},null,-1)];function $n(e,t){return l(),s("svg",Hn,Bn)}const En={render:$n},Nn=Object.freeze(Object.defineProperty({__proto__:null,default:En,render:$n},Symbol.toStringTag,{value:"Module"})),Jn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Kn=[y("path",{d:"M75 75 41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24h110.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24v104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"},null,-1)];function Rn(e,t){return l(),s("svg",Jn,Kn)}const Un={render:Rn},In=Object.freeze(Object.defineProperty({__proto__:null,default:Un,render:Rn},Symbol.toStringTag,{value:"Module"})),Yn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Dn=[y("path",{d:"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm129-281c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71V376c0 13.3-10.7 24-24 24s-24-10.7-24-24V193.9l-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 119c9.4-9.4 24.6-9.4 33.9 0L385 231z"},null,-1)];function qn(e,t){return l(),s("svg",Yn,Dn)}const Fn={render:qn},Gn=Object.freeze(Object.defineProperty({__proto__:null,default:Fn,render:qn},Symbol.toStringTag,{value:"Module"})),Qn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},Wn=[y("path",{d:"M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0l-218.6-101c-8.5-4-13.9-12.5-13.9-21.8s5.4-17.9 13.9-21.8l218.6-101zm212.4 204.4 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0l-218.6-101c-8.5-4-13.9-12.5-13.9-21.8s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2a88.1 88.1 0 0 0 73.8 0l152-70.2zm-152 198.2 152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0l-218.6-101c-8.5-4-13.9-12.5-13.9-21.8s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2a88.1 88.1 0 0 0 73.8 0z"},null,-1)];function Zn(e,t){return l(),s("svg",Qn,Wn)}const Xn={render:Zn},el=Object.freeze(Object.defineProperty({__proto__:null,default:Xn,render:Zn},Symbol.toStringTag,{value:"Module"})),tl={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},nl=[y("path",{d:"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 200h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"},null,-1)];function ll(e,t){return l(),s("svg",tl,nl)}const ol={render:ll},rl=Object.freeze(Object.defineProperty({__proto__:null,default:ol,render:ll},Symbol.toStringTag,{value:"Module"})),il={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},al=[y("path",{d:"M512 256v2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48 0 3.4.4 6.7 1 9.9 2.1 10.2 6.5 20 10.8 29.9 6.1 13.8 12.1 27.5 12.1 42 0 31.8-21.6 60.7-53.4 62-3.5.1-7 .2-10.6.2C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256zm-384 32c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm0-96c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-96c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"},null,-1)];function sl(e,t){return l(),s("svg",il,al)}const cl={render:sl},dl=Object.freeze(Object.defineProperty({__proto__:null,default:cl,render:sl},Symbol.toStringTag,{value:"Module"})),ul={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},pl=[y("path",{d:"M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80v352c0 17.4 9.4 33.4 24.5 41.9S58.2 482 73 473l288-176c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"},null,-1)];function gl(e,t){return l(),s("svg",ul,pl)}const ml={render:gl},vl=Object.freeze(Object.defineProperty({__proto__:null,default:ml,render:gl},Symbol.toStringTag,{value:"Module"})),yl={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},hl=[y("path",{d:"M463.5 224h8.5c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2S461.9 48.1 455 55l-41.6 41.6c-87.6-86.5-228.7-86.2-315.8 1-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 224 344 224h119.5z"},null,-1)];function fl(e,t){return l(),s("svg",yl,hl)}const wl={render:fl},bl=Object.freeze(Object.defineProperty({__proto__:null,default:wl,render:fl},Symbol.toStringTag,{value:"Module"})),_l={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},xl=[y("path",{d:"M432 64H208c-8.8 0-16 7.2-16 16v16h-64V80c0-44.2 35.8-80 80-80h224c44.2 0 80 35.8 80 80v224c0 44.2-35.8 80-80 80h-16v-64h16c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zM0 192c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192zm64 32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32 14.3-32 32z"},null,-1)];function zl(e,t){return l(),s("svg",_l,xl)}const jl={render:zl},Ol=Object.freeze(Object.defineProperty({__proto__:null,default:jl,render:zl},Symbol.toStringTag,{value:"Module"})),Sl={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Ml=[y("path",{d:"M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48h159.6l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-25.8L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z"},null,-1)];function Ll(e,t){return l(),s("svg",Sl,Ml)}const kl={render:Ll},Cl=Object.freeze(Object.defineProperty({__proto__:null,default:kl,render:Ll},Symbol.toStringTag,{value:"Module"})),Al={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Pl=[y("path",{d:"M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2S50.1 48.1 57 55l41.6 41.6c87.6-86.5 228.7-86.2 315.8 1 87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2S177.7 224 168 224H48.5z"},null,-1)];function Tl(e,t){return l(),s("svg",Al,Pl)}const Vl={render:Tl},Hl=Object.freeze(Object.defineProperty({__proto__:null,default:Vl,render:Tl},Symbol.toStringTag,{value:"Module"})),Bl={install(e){const t=Object.assign({"./bars-staggered-icon.svg":Mt,"./broom-icon.svg":Pt,"./button-icon.svg":$t,"./card-icon.svg":Rt,"./circle-icon.svg":qt,"./columns-icon.svg":Zt,"./copy-icon.svg":ln,"./cube-icon.svg":cn,"./cubes-icon.svg":mn,"./eye-icon.svg":wn,"./eye-slash-icon.svg":jn,"./grid-icon.svg":kn,"./history-add-icon.svg":Vn,"./history-down-icon.svg":Nn,"./history-icon.svg":In,"./history-up-icon.svg":Gn,"./layer-group-icon.svg":el,"./minus-icon.svg":rl,"./pallette-icon.svg":dl,"./play-icon.svg":vl,"./redo-icon.svg":bl,"./restore-icon.svg":Ol,"./text-icon.svg":Cl,"./undo-icon.svg":Hl});Object.keys(t).forEach((n=>{const l=n.replace(/\.\/(.*?)\.svg/,"$1"),o=P({setup(){const e=`elysia-icon ${l}`;return()=>c(ie,{class:e,component:t[n]},null)}});e.component(l,o)}))}},$l={install(e){e.use(E).use(R).use(K).use(U).use(N).use(I).use(Y).use(D).use(q).use(F)}};function El(e){const t=Q(e);return t.id=Z(),t.options={field:t.name+5*Math.round(1e3*Math.random()*Math.random()),...t.options||{}},t.type!==De||Array.isArray(t.childrenList)||(t.childrenList=[]),_(t)}const Nl={__name:"draggable",props:{list:{type:Array,default:()=>[]},group:{type:String,default:"dragGroup"},ghostClass:{type:String,default:"ghost"},animation:{type:Number,default:300},widget:{type:Object,required:!0},itemKey:{type:String,default:"id"},handle:{type:String,default:".move-area"}},setup(e){const t=e,n=e=>{const{path:n,nameAlias:l}=t.widget,o=Le([...n,e.newIndex]);Pe.add(`向${l}组件插入${o.nameAlias}组件`,"history-add-icon")};return(t,r)=>(l(),o(m(X),z(t.$attrs,{handle:e.handle,move:m(Ee),clone:m(El),list:e.widget.childrenList,group:e.group,ghostClass:e.ghostClass,animation:e.animation,"component-data":{path:e.widget.path},"item-key":e.itemKey,disabled:m(Ae),onAdd:n}),k({_:2},[p(Object.keys(t.$slots),(e=>({name:e,fn:d((n=>[O(t.$slots,e,C(A(n)))]))})))]),1040,["handle","move","clone","list","group","ghostClass","animation","component-data","item-key","disabled"]))}};function Jl(e){const{path:t=[],nameAlias:n}=e,l=function(e){function t(e){const n=Q(e);return n.id=Z(),n.type!==De?n:Array.isArray(n.childrenList)?(0===n.childrenList.length||(n.childrenList=n.childrenList.map((e=>t(e)))),n):n}return ze(e)||Array.isArray(e)?ze(e)?t(e):Array.isArray(e)&&0===e.length?e:e.map((e=>t(e))):e}(e),o=Se(t),r=[...o.childrenList,l];o.childrenList=Te(r,o.path),Le(l.path),Pe.add(`复制${n}组件`,"copy-icon")}const Kl={class:"static-wrapper"},Rl=["onClick"],Ul={key:0,class:"static-tr"},Il={class:"w-name move-area",title:"长按拖拽"},Yl={class:"baisc-btns"},Dl=ge({__name:"static-wrapper",props:{widget:{type:Object,default:()=>({})}},setup(e){const t=e,n=a((()=>{if(Ae.value)return!1;const e=Me.value;return e&&e.id===t.widget.id})),o=()=>{Ae.value||n.value||Le(t.widget)};return(t,r)=>(l(),s("div",Kl,[y("div",{class:S(["warapper-slot",{"show-shadow":m(n)}]),onClick:T(o,["stop"])},[O(t.$slots,"default",{},void 0,!0)],10,Rl),m(n)?(l(),s("div",Ul,[y("span",Il,[f(c(m(ae),{title:"已隐藏"},null,512),[[w,!0===e.widget.options.hidden]]),L(" "+h(e.widget.nameAlias),1)]),y("div",Yl,[c(m(se),{class:"move-area",title:"长按拖拽"}),c(m(ce),{onClick:r[0]||(r[0]=t=>m(Jl)(e.widget)),title:"拷贝组件"}),c(m(de),{onClick:r[1]||(r[1]=t=>m(Ne)(e.widget)),title:"上移组件"}),c(m(ue),{onClick:r[2]||(r[2]=t=>m(Je)(e.widget)),title:"下移组件"}),O(t.$slots,"custom-bar",{},void 0,!0),c(m(pe),{onClick:r[3]||(r[3]=t=>m(Ke)(e.widget)),title:"删除组件"})])])):V("",!0)]))}},[["__scopeId","data-v-44a01144"]]),ql={__name:"card",props:{widget:Object},setup:e=>(t,n)=>{const r=U;return l(),o(Dl,{widget:e.widget},{default:d((()=>[c(r,{title:e.widget.options.title},{default:d((()=>[c(Nl,{widget:e.widget,class:"container-draggable"},{item:d((({element:e})=>[(l(),o(g("elysia-"+e.name),{widget:e},null,8,["widget"]))])),_:1},8,["widget"])])),_:1},8,["title"])])),_:1},8,["widget"])}},Fl=Object.freeze(Object.defineProperty({__proto__:null,default:ql},Symbol.toStringTag,{value:"Module"})),Gl={__name:"button",props:{widget:Object},setup:e=>(t,n)=>{const r=R;return l(),o(Dl,{widget:e.widget},{default:d((()=>[c(r,{type:e.widget.options.type},{default:d((()=>[L(h(e.widget.options.text),1)])),_:1},8,["type"])])),_:1},8,["widget"])}},Ql=Object.freeze(Object.defineProperty({__proto__:null,default:Gl},Symbol.toStringTag,{value:"Module"})),Wl={install(e){const t={...Object.assign({"./containers/card/card.vue":Fl}),...Object.assign({"./fields/button/button.vue":Ql})};Object.keys(t).forEach((n=>{const l=n.replace(/\.\/.*\/(.*?)\.vue/,"elysia-$1"),o=t[n].default;e.component(l,o)}))}},Zl={install(e){e.use(Bl).use($l).use(Wl).use(xt),e.component("elysia-designer",mt)}},Xl={__name:"text",props:{widget:Object},setup:e=>(t,n)=>(l(),o(Dl,{widget:e.widget},{default:d((()=>[f(y("p",null,h(e.widget.options.text),513),[[w,!e.widget.options.hidden]])])),_:1},8,["widget"]))},eo=[{id:Z(),name:"card",type:De,icon:"card-icon",childrenList:[],options:{title:"卡片标题",hidden:!1,cardWidth:"100%"}}].map((e=>(e.nameAlias=We([Ie,e.name]),e))),to=[{id:Z(),name:"button",type:Ye,icon:"button-icon",options:{text:"按钮",type:"default"},selects:{type:[{value:"default"},{value:"primary"},{value:"danger"}]}}].map((e=>(e.nameAlias=We([Ie,e.name]),e))),no=e("c",H(eo)),lo=e("f",H(to));!function(e,t){const n={[De]:no,[Ye]:lo}[e];n&&n.push(t)}(Ye,{id:Z(),name:"text",nameAlias:We([qe,"text"],"扩展"),type:Ye,icon:r((()=>ve((()=>t.import("./vendor-legacy-20cf4371.js").then((e=>e.al)))))),options:{text:"https://arutoriacode.github.io/elysia/",hidden:!1}});const oo=Object.freeze(Object.defineProperty({__proto__:null,default:Xl},Symbol.toStringTag,{value:"Module"})),ro=Object.assign({"./text/index.js":oo}),io={install:e=>{Object.keys(ro).forEach((t=>{const n=t.replace(/\.\/(.*?)\/index\.js/,"elysia-$1");e.component(n,ro[t].default)}))}};B(me).use(Zl).use(io).mount("#app")}}}));