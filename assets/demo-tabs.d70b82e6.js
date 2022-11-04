import{a6 as $e,a7 as G,a8 as de,H as A,a9 as te,t as E,x as R,aa as ae,L as K,M as se,U as be,W as $,Z as Ce,ab as H,g as L,v as fe,ac as Se,T as i,ad as xe,a2 as ke,B as Be,X as ve,z as Oe,ae as Re,af as Ae,ag as ze,ah as Ue,ai as Ve,Y as De,h as Fe,K as pe,$ as Le,a0 as J}from"./chunk-X6HE2CCA.e63f2e2c.js";import{b as W,d as ne,u as j,_ as me,E as M,e as Me,f as Ie,g as Ke,p as He,i as We,h as le,j as re,w as je,k as qe}from"./index.ba4401f9.js";import{t as oe,a as _e,b as Xe,c as Ye}from"./error.836e6816.js";import{u as Ze}from"./index.16db6156.js";const O=e=>$e(e),I={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},he="update:modelValue",ee=e=>{const t=G(e)?e:[e],c=[];return t.forEach(p=>{G(p)?c.push(...ee(p)):de(p)&&G(p.children)?c.push(...ee(p.children)):c.push(p)}),c},ge=e=>e,q=Symbol("tabsRootContextKey"),Ge=W({tabs:{type:ne(Array),default:()=>ge([])}}),ye="ElTabBar",Je=A({name:ye}),Qe=A({...Je,props:Ge,setup(e,{expose:t}){const c=e,p=H(),o=te(q);o||oe(ye,"<el-tabs><el-tab-bar /></el-tabs>");const l=j("tabs"),C=E(),g=E(),d=()=>{let _=0,r=0;const f=["top","bottom"].includes(o.props.tabPosition)?"width":"height",v=f==="width"?"x":"y";return c.tabs.every(S=>{var x,z,a,y;const u=(z=(x=p.parent)==null?void 0:x.refs)==null?void 0:z[`tab-${S.uid}`];if(!u)return!1;if(!S.active)return!0;r=u[`client${O(f)}`];const k=v==="x"?"left":"top";_=u[`offset${O(k)}`]-((y=(a=u.parentElement)==null?void 0:a[`offset${O(k)}`])!=null?y:0);const V=u.closest(".is-scrollable");if(V){const F=window.getComputedStyle(V);_+=Number.parseFloat(F[`padding${O(k)}`])}const D=window.getComputedStyle(u);return f==="width"&&(c.tabs.length>1&&(r-=Number.parseFloat(D.paddingLeft)+Number.parseFloat(D.paddingRight)),_+=Number.parseFloat(D.paddingLeft)),!1}),{[f]:`${r}px`,transform:`translate${O(v)}(${_}px)`}},m=()=>g.value=d();return R(()=>c.tabs,async()=>{await ae(),m()},{immediate:!0}),_e(C,()=>m()),t({ref:C,update:m}),(_,r)=>(K(),se("div",{ref_key:"barRef",ref:C,class:be([$(l).e("active-bar"),$(l).is($(o).props.tabPosition)]),style:Ce(g.value)},null,6))}});var et=me(Qe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const tt=W({panes:{type:ne(Array),default:()=>ge([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),at={tabClick:(e,t,c)=>c instanceof Event,tabRemove:(e,t)=>t instanceof Event},ce="ElTabNav",st=A({name:ce,props:tt,emits:at,setup(e,{expose:t,emit:c}){const p=H(),o=te(q);o||oe(ce,"<el-tabs><tab-nav /></el-tabs>");const l=j("tabs"),C=Xe(),g=Ye(),d=E(),m=E(),_=E(),r=E(!1),f=E(0),v=E(!1),S=E(!0),x=L(()=>["top","bottom"].includes(o.props.tabPosition)?"width":"height"),z=L(()=>({transform:`translate${x.value==="width"?"X":"Y"}(-${f.value}px)`})),a=()=>{if(!d.value)return;const s=d.value[`offset${O(x.value)}`],b=f.value;if(!b)return;const n=b>s?b-s:0;f.value=n},y=()=>{if(!d.value||!m.value)return;const s=m.value[`offset${O(x.value)}`],b=d.value[`offset${O(x.value)}`],n=f.value;if(s-n<=b)return;const T=s-n>b*2?n+b:s-b;f.value=T},u=async()=>{const s=m.value;if(!r.value||!_.value||!d.value||!s)return;await ae();const b=_.value.querySelector(".is-active");if(!b)return;const n=d.value,T=["top","bottom"].includes(o.props.tabPosition),w=b.getBoundingClientRect(),N=n.getBoundingClientRect(),B=T?s.offsetWidth-N.width:s.offsetHeight-N.height,P=f.value;let h=P;T?(w.left<N.left&&(h=P-(N.left-w.left)),w.right>N.right&&(h=P+w.right-N.right)):(w.top<N.top&&(h=P-(N.top-w.top)),w.bottom>N.bottom&&(h=P+(w.bottom-N.bottom))),h=Math.max(h,0),f.value=Math.min(h,B)},k=()=>{if(!m.value||!d.value)return;const s=m.value[`offset${O(x.value)}`],b=d.value[`offset${O(x.value)}`],n=f.value;if(b<s){const T=f.value;r.value=r.value||{},r.value.prev=T,r.value.next=T+b<s,s-T<b&&(f.value=s-b)}else r.value=!1,n>0&&(f.value=0)},V=s=>{const b=s.code,{up:n,down:T,left:w,right:N}=I;if(![n,T,w,N].includes(b))return;const B=Array.from(s.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),P=B.indexOf(s.target);let h;b===w||b===n?P===0?h=B.length-1:h=P-1:P<B.length-1?h=P+1:h=0,B[h].focus({preventScroll:!0}),B[h].click(),D()},D=()=>{S.value&&(v.value=!0)},F=()=>v.value=!1;return R(C,s=>{s==="hidden"?S.value=!1:s==="visible"&&setTimeout(()=>S.value=!0,50)}),R(g,s=>{s?setTimeout(()=>S.value=!0,50):S.value=!1}),_e(_,k),fe(()=>setTimeout(()=>u(),0)),Se(()=>k()),t({scrollToActiveTab:u,removeFocus:F}),R(()=>e.panes,()=>p.update(),{flush:"post"}),()=>{const s=r.value?[i("span",{class:[l.e("nav-prev"),l.is("disabled",!r.value.prev)],onClick:a},[i(M,null,{default:()=>[i(Me,null,null)]})]),i("span",{class:[l.e("nav-next"),l.is("disabled",!r.value.next)],onClick:y},[i(M,null,{default:()=>[i(Ie,null,null)]})])]:null,b=e.panes.map((n,T)=>{var w,N,B,P;const h=n.uid,X=n.props.disabled,Y=(N=(w=n.props.name)!=null?w:n.index)!=null?N:`${T}`,Z=!X&&(n.isClosable||e.editable);n.index=`${T}`;const Te=Z?i(M,{class:"is-icon-close",onClick:U=>c("tabRemove",n,U)},{default:()=>[i(Ke,null,null)]}):null,Pe=((P=(B=n.slots).label)==null?void 0:P.call(B))||n.props.label,Ee=!X&&n.active?0:-1;return i("div",{ref:`tab-${h}`,class:[l.e("item"),l.is(o.props.tabPosition),l.is("active",n.active),l.is("disabled",X),l.is("closable",Z),l.is("focus",v.value)],id:`tab-${Y}`,key:`tab-${h}`,"aria-controls":`pane-${Y}`,role:"tab","aria-selected":n.active,tabindex:Ee,onFocus:()=>D(),onBlur:()=>F(),onClick:U=>{F(),c("tabClick",n,Y,U)},onKeydown:U=>{Z&&(U.code===I.delete||U.code===I.backspace)&&c("tabRemove",n,U)}},[Pe,Te])});return i("div",{ref:_,class:[l.e("nav-wrap"),l.is("scrollable",!!r.value),l.is(o.props.tabPosition)]},[s,i("div",{class:l.e("nav-scroll"),ref:d},[i("div",{class:[l.e("nav"),l.is(o.props.tabPosition),l.is("stretch",e.stretch&&["top","bottom"].includes(o.props.tabPosition))],ref:m,style:z.value,role:"tablist",onKeydown:V},[e.type?null:i(et,{tabs:[...e.panes]},null),b])])])}}}),nt=e=>ee(e.subTree).filter(c=>{var p;return de(c)&&((p=c.type)==null?void 0:p.name)==="ElTabPane"&&!!c.component}),ie=(e,t)=>nt(e).map(o=>o.component.uid).map(o=>t[o]).filter(o=>!!o),ot=W({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:ne(Function),default:()=>!0},stretch:Boolean}),Q=e=>Oe(e)||We(e),lt={[he]:e=>Q(e),tabClick:(e,t)=>t instanceof Event,tabChange:e=>Q(e),edit:(e,t)=>["remove","add"].includes(t),tabRemove:e=>Q(e),tabAdd:()=>!0};var rt=A({name:"ElTabs",props:ot,emits:lt,setup(e,{emit:t,slots:c,expose:p}){var o,l;const C=H(),g=j("tabs"),d=E(),m=xe({}),_=ke([]),r=E((l=(o=e.modelValue)!=null?o:e.activeName)!=null?l:"0"),f=a=>{r.value=a,t(he,a),t("tabChange",a)},v=async a=>{var y,u,k;if(!(r.value===a||le(a)))try{await((y=e.beforeLeave)==null?void 0:y.call(e,a,r.value))!==!1&&(f(a),(k=(u=d.value)==null?void 0:u.removeFocus)==null||k.call(u))}catch{}},S=(a,y,u)=>{a.props.disabled||(v(y),t("tabClick",a,u))},x=(a,y)=>{a.props.disabled||le(a.props.name)||(y.stopPropagation(),t("edit",a.props.name,"remove"),t("tabRemove",a.props.name))},z=()=>{t("edit",void 0,"add"),t("tabAdd")};return Ze({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},L(()=>!!e.activeName)),R(()=>e.activeName,a=>v(a)),R(()=>e.modelValue,a=>v(a)),R(r,async()=>{var a;await ae(),(a=d.value)==null||a.scrollToActiveTab()}),Be(q,{props:e,currentName:r,registerPane:u=>{m[u.uid]=u,_.value=ie(C,m)},unregisterPane:u=>{delete m[u],_.value=ie(C,m)}}),p({currentName:r}),()=>{const a=e.editable||e.addable?i("span",{class:g.e("new-tab"),tabindex:"0",onClick:z,onKeydown:k=>{k.code===I.enter&&z()}},[i(M,{class:g.is("icon-plus")},{default:()=>[i(He,null,null)]})]):null,y=i("div",{class:[g.e("header"),g.is(e.tabPosition)]},[a,i(st,{ref:d,currentName:r.value,editable:e.editable,type:e.type,panes:_.value,stretch:e.stretch,onTabClick:S,onTabRemove:x},null)]),u=i("div",{class:g.e("content")},[ve(c,"default")]);return i("div",{class:[g.b(),g.m(e.tabPosition),{[g.m("card")]:e.type==="card",[g.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[y,u]:[u,y]])}}});const ct=W({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),it=["id","aria-hidden","aria-labelledby"],Ne="ElTabPane",ut=A({name:Ne}),dt=A({...ut,props:ct,setup(e){const t=e,c=H(),p=Re(),o=te(q);o||oe(Ne,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const l=j("tab-pane"),C=E(),g=L(()=>t.closable||o.props.closable),d=re(()=>{var v;return o.currentName.value===((v=t.name)!=null?v:C.value)}),m=E(d.value),_=L(()=>{var v;return(v=t.name)!=null?v:C.value}),r=re(()=>!t.lazy||m.value||d.value);R(d,v=>{v&&(m.value=!0)});const f=Ae({uid:c.uid,slots:p,props:t,paneName:_,active:d,index:C,isClosable:g});return fe(()=>{o.registerPane(f)}),ze(()=>{o.unregisterPane(f.uid)}),(v,S)=>$(r)?Ue((K(),se("div",{key:0,id:`pane-${$(_)}`,class:be($(l).b()),role:"tabpanel","aria-hidden":!$(d),"aria-labelledby":`tab-${$(_)}`},[ve(v.$slots,"default")],10,it)),[[Ve,$(d)]]):De("v-if",!0)}});var we=me(dt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const bt=je(rt,{TabPane:we}),ue=qe(we),ft=A({setup(){return()=>Fe("div","Task")}}),vt={};function pt(e,t){return K(),se("div",null,"User")}const mt=pe(vt,[["render",pt],["__file","demo-tabs-user.vue"]]),_t=A({__name:"demo-tabs",setup(e){return(t,c)=>(K(),Le($(bt),{type:"border-card"},{default:J(()=>[i($(ue),{label:"Task"},{default:J(()=>[i($(ft))]),_:1}),i($(ue),{label:"User"},{default:J(()=>[i(mt)]),_:1})]),_:1}))}}),wt=pe(_t,[["__file","demo-tabs.vue"]]);export{wt as default};
