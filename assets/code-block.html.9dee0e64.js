var B=Object.defineProperty,D=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var h=(o,u,e)=>u in o?B(o,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[u]=e,F=(o,u)=>{for(var e in u||(u={}))y.call(u,e)&&h(o,e,u[e]);if(v)for(var e of v(u))q.call(u,e)&&h(o,e,u[e]);return o},b=(o,u)=>D(o,_(u));import f from"./demo-basic.a1bb7208.js";import{T as w,U as x,G as E,W as S,g as T,K as m,L as g,X as C,Y as l,Z as P,$ as V,a0 as j,a1 as U,a2 as I,J as A,a3 as N,a4 as t,Q as n,N as d,P as s,M as k,O as a}from"./clientConfigs.5b3b1163.js";import $ from"./demo-iframe.b29a14fd.js";import W from"./demo-tabs.d066113d.js";import"./error2.e19f91a3.js";const z=w({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:x(String),default:"solid"}}),G={name:"ElDivider"},J=E(b(F({},G),{props:z,setup(o){const u=o,e=S("divider"),c=T(()=>e.cssVar({"border-style":u.borderStyle}));return(p,i)=>(m(),g("div",{class:C([l(e).b(),l(e).m(p.direction)]),style:j(l(c)),role:"separator"},[p.$slots.default&&p.direction!=="vertical"?(m(),g("div",{key:0,class:C([l(e).e("text"),l(e).is(p.contentPosition)])},[P(p.$slots,"default")],2)):V("v-if",!0)],6))}}));var K=U(J,[["__file","/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]);const L=I(K),M=n("\u6211\u662F inline \u6A21\u5F0F\u4E0B\u6E32\u67D3\u51FA\u6765"),O=E({name:"demo-inline",setup(o){return(u,e)=>(m(),N(l(L),{"content-position":"left"},{default:t(()=>[M]),_:1}))}});var Q=A(O,[["__file","demo-inline.vue"]]);const X=k(`<h1 id="\u7EC4\u4EF6\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u6F14\u793A" aria-hidden="true">#</a> \u7EC4\u4EF6\u6F14\u793A</h1><p>\u5728\u5F00\u53D1\u7EC4\u4EF6\u7684\u65F6\u5019\u63D0\u4F9B\u7EC4\u4EF6\u6548\u679C\u7684\u6F14\u793A\u3002</p><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i -D @bfehub/vuepress-plugin-code-block
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> codeBlockPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@bfehub/vuepress-plugin-code-block&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">codeBlockPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6E32\u67D3\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6E32\u67D3\u6A21\u5F0F" aria-hidden="true">#</a> \u6E32\u67D3\u6A21\u5F0F</h2><p>\u4EE5\u4E0B\u5C55\u793A\u7684\u7EC4\u4EF6\u5168\u90E8\u6765\u81EA <code>element-plus</code> \u7684\u4F7F\u7528\u793A\u4F8B\u3002</p><h3 id="basic" tabindex="-1"><a class="header-anchor" href="#basic" aria-hidden="true">#</a> basic</h3><p>\u4F7F\u7528 <code>src</code> \u6307\u5B9A\u5F53\u524D <code>demo</code> \u7EC4\u4EF6\u7684\u8DEF\u5F84\u5730\u5740\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>demo</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./demos/demo-basic.vue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>demo</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6E32\u67D3\u6548\u679C\u5982\u4E0B</p>`,11),Y=a("div",{class:"language-vue ext-vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("ElButton")]),a("span",{class:"token punctuation"},">")]),n("Default"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("ElButton")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("ElButton")]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("primary"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("Primary"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("ElButton")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("ElButton")]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("success"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("Success"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("ElButton")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("ElButton")]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("info"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("Info"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("ElButton")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("ElButton")]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("warning"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("Warning"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("ElButton")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("ElButton")]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("danger"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("Danger"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("ElButton")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`

`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),n(),a("span",{class:"token attr-name"},"lang"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("ts"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"setup"),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" ElButton "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'element-plus'"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),Z=k(`<h3 id="inline" tabindex="-1"><a class="header-anchor" href="#inline" aria-hidden="true">#</a> inline</h3><p>\u4F7F\u7528 <code>inline</code> \u6A21\u5F0F\u7528\u4E8E\u6307\u793A\u8BE5 <code>demo</code> \u4E3A\u81EA\u7531 <code>demo</code>\uFF0C\u5C06\u4F1A\u76F4\u63A5\u5728\u6587\u6863\u4E2D\u5D4C\u5165\u6E32\u67D3\uFF0C\u4E0D\u4F1A\u88AB <code>demo</code> \u5BB9\u5668\u5305\u88F9\uFF0C\u7528\u6237\u4E5F\u65E0\u6CD5\u67E5\u770B\u6E90\u4EE3\u7801\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>demo</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./demos/demo-inline.vue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">inline</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>demo</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6E32\u67D3\u6548\u679C\u5982\u4E0B</p>`,4),H=k(`<h3 id="raw" tabindex="-1"><a class="header-anchor" href="#raw" aria-hidden="true">#</a> raw</h3><p>\u4F7F\u7528 <code>raw</code> \u6A21\u5F0F\u7528\u4E8E\u6307\u793A\u8BE5 <code>demo</code> \u4E3A\u6E90\u4EE3\u7801\uFF0C\u5C06\u4F1A\u628A\u5185\u5BB9\u5F53\u505A\u4EE3\u7801\u5757\u6E32\u67D3\u4E0D\u4F1A\u6E32\u67D3\u6548\u679C\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>demo</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./demos/demo-raw.vue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">raw</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>demo</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6E32\u67D3\u6548\u679C\u5982\u4E0B</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElDivider</span> <span class="token attr-name">content-position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6211\u662F raw \u6A21\u5F0F\u4E0B\u6E32\u67D3\u51FA\u6765<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElDivider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElDivider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iframe" tabindex="-1"><a class="header-anchor" href="#iframe" aria-hidden="true">#</a> iframe</h3><p>\u4F7F\u7528 <code>iframe</code> \u6A21\u5F0F\u6E32\u67D3\u5F53\u524D demo\uFF0C\u5BF9\u4E8E\u6E32\u67D3 layout \u578B\u7684 demo \u975E\u5E38\u6709\u7528\uFF0C\u5F53\u6211\u4EEC\u4F20\u9012\u6570\u503C\u65F6\u53EF\u4EE5\u63A7\u5236 iframe \u7684\u9AD8\u5EA6\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>demo</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./demos/demo-iframe.vue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">iframe</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>demo</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6E32\u67D3\u6548\u679C\u5982\u4E0B</p>`,9),R=a("div",{class:"language-vue ext-vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("ul")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("li")]),n(),a("span",{class:"token attr-name"},"v-for"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("i in 100"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},":key"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("i"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
      Scroll down to see the bottom-right button.
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("li")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("ul")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("ElBacktop")]),n(),a("span",{class:"token attr-name"},":right"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("20"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},":bottom"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("20"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`

`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),n(),a("span",{class:"token attr-name"},"lang"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("ts"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"setup"),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" ElBacktop "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'element-plus'"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),aa=k(`<h2 id="\u63A7\u5236\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u6E32\u67D3" aria-hidden="true">#</a> \u63A7\u5236\u6E32\u67D3</h2><h3 id="defaultshowcode" tabindex="-1"><a class="header-anchor" href="#defaultshowcode" aria-hidden="true">#</a> defaultShowCode</h3><p>\u7528\u4E8E\u63A7\u5236\u5F53\u524D demo \u7684\u5305\u88F9\u5BB9\u5668\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6E90\u4EE3\u7801\u663E\u793A\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>demo</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./demos/demo-basic.vue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">defaultShowCode</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>demo</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6E32\u67D3\u6548\u679C\u5982\u4E0B</p>`,5),na=a("div",{class:"language-vue ext-vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("ElButton")]),a("span",{class:"token punctuation"},">")]),n("Default"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("ElButton")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("ElButton")]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("primary"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("Primary"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("ElButton")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("ElButton")]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("success"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("Success"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("ElButton")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("ElButton")]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("info"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("Info"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("ElButton")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("ElButton")]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("warning"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("Warning"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("ElButton")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("ElButton")]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("danger"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("Danger"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("ElButton")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`

`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),n(),a("span",{class:"token attr-name"},"lang"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("ts"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"setup"),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" ElButton "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'element-plus'"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),sa=k(`<h2 id="\u5176\u4ED6\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u7279\u6027" aria-hidden="true">#</a> \u5176\u4ED6\u7279\u6027</h2><h3 id="\u4EFB\u610F\u7C7B\u578B\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u610F\u7C7B\u578B\u6587\u4EF6" aria-hidden="true">#</a> \u4EFB\u610F\u7C7B\u578B\u6587\u4EF6</h3><p>\u5982\u679C\u6587\u4EF6\u662F\u975E <code>.vue</code>\u3001<code>.jsx</code>\u3001<code>.tsx</code> \u540E\u7F00\u7684\u6587\u4EF6\uFF0C\u5C06\u663E\u793A\u6E90\u4EE3\u7801\u76F8\u5F53\u4E8E\u6307\u5B9A <code>raw</code> \u6A21\u5F0F\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>demo</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./demos/demo-file.json<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>demo</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>demo</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./demos/demo-file.d.ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>demo</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6E32\u67D3\u6548\u679C\u5982\u4E0B</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;A theme for vuepress&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;@internal/name&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">const</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C55\u793A\u5B50\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5C55\u793A\u5B50\u6587\u4EF6" aria-hidden="true">#</a> \u5C55\u793A\u5B50\u6587\u4EF6</h3><p>\u5982\u679C\u662F <code>vue</code> \u7EC4\u4EF6\uFF0C\u5E76\u4E14\u7EC4\u4EF6\u5185\u5BFC\u5165\u4E86 <em>\u76F8\u5BF9\u8DEF\u5F84</em> \u7684\u6587\u4EF6\u4E5F\u4E00\u5E76\u5C55\u793A\u3002\u652F\u6301\u81EA\u52A8\u8865\u5168 <code>[&#39;.js&#39;, &#39;.ts&#39;, &#39;.jsx&#39;, &#39;.tsx&#39;, &#39;.json&#39;, &#39;.vue&#39;]</code> \u540E\u7F00\u7684\u6587\u4EF6\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>demo</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./demos/demo-tabs.vue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>demo</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6E32\u67D3\u6548\u679C\u5982\u4E0B</p>`,12),ta=a("div",{class:"language-vue ext-vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("ElTabs")]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("border-card"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("ElTabPane")]),n(),a("span",{class:"token attr-name"},"label"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("Task"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("Task")]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("ElTabPane")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("ElTabPane")]),n(),a("span",{class:"token attr-name"},"label"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("User"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("User")]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("ElTabPane")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("ElTabs")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`

`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),n(),a("span",{class:"token attr-name"},"lang"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("ts"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"setup"),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" ElTabs"),a("span",{class:"token punctuation"},","),n(" ElTabPane "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'element-plus'"),n(`
`),a("span",{class:"token keyword"},"import"),n(" Task "),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'./demo-tabs-task'"),n(`
`),a("span",{class:"token keyword"},"import"),n(" User "),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'./demo-tabs-user.vue'"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),ea=a("div",{class:"language-tsx ext-tsx"},[a("pre",{class:"language-tsx"},[a("code",null,[a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" h"),a("span",{class:"token punctuation"},","),n(" defineComponent "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'vue'"),n(`

`),a("span",{class:"token keyword"},"export"),n(),a("span",{class:"token keyword"},"default"),n(),a("span",{class:"token function"},"defineComponent"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token function"},"setup"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token punctuation"},"{"),n(`
    `),a("span",{class:"token keyword"},"return"),n(),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token function"},"h"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'div'"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token string"},"'Task'"),a("span",{class:"token punctuation"},")"),n(`
  `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
`),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),n(`
`)])])],-1),ua=a("div",{class:"language-vue ext-vue"},[a("pre",{class:"language-vue"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),a("span",{class:"token punctuation"},">")]),n("User"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),oa=E({name:"code-block.html",setup(o){return(u,e)=>{const c=d("VmiExample"),p=d("VmiSourceCodeItem"),i=d("VmiSourceCode"),r=d("VmiPreviewer");return m(),g("div",null,[X,s(r,null,{default:t(()=>[s(c,{id:"ce39ad2a",iframeSrc:"/vmi/-iframe.html#/ce39ad2a"},{default:t(()=>[s(f)]),_:1}),s(i,{iframeSrc:"/vmi/-iframe.html#/ce39ad2a"},{default:t(()=>[s(p,{name:"demo-basic.vue",rawCode:"%3Ctemplate%3E%0A%20%20%3CElButton%3EDefault%3C%2FElButton%3E%0A%20%20%3CElButton%20type%3D%22primary%22%3EPrimary%3C%2FElButton%3E%0A%20%20%3CElButton%20type%3D%22success%22%3ESuccess%3C%2FElButton%3E%0A%20%20%3CElButton%20type%3D%22info%22%3EInfo%3C%2FElButton%3E%0A%20%20%3CElButton%20type%3D%22warning%22%3EWarning%3C%2FElButton%3E%0A%20%20%3CElButton%20type%3D%22danger%22%3EDanger%3C%2FElButton%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ElButton%20%7D%20from%20'element-plus'%0A%3C%2Fscript%3E%0A"},{default:t(()=>[Y]),_:1})]),_:1})]),_:1}),Z,s(Q),H,s(r,null,{default:t(()=>[s(c,{id:"1bbe0e37",iframe:"",iframeSrc:"/vmi/-iframe.html#/1bbe0e37"},{default:t(()=>[s($)]),_:1}),s(i,{iframeSrc:"/vmi/-iframe.html#/1bbe0e37"},{default:t(()=>[s(p,{name:"demo-iframe.vue",rawCode:"%3Ctemplate%3E%0A%20%20%3Cul%3E%0A%20%20%20%20%3Cli%20v-for%3D%22i%20in%20100%22%20%3Akey%3D%22i%22%3E%0A%20%20%20%20%20%20Scroll%20down%20to%20see%20the%20bottom-right%20button.%0A%20%20%20%20%3C%2Fli%3E%0A%20%20%3C%2Ful%3E%0A%20%20%3CElBacktop%20%3Aright%3D%2220%22%20%3Abottom%3D%2220%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ElBacktop%20%7D%20from%20'element-plus'%0A%3C%2Fscript%3E%0A"},{default:t(()=>[R]),_:1})]),_:1})]),_:1}),aa,s(r,null,{default:t(()=>[s(c,{id:"ce39ad2a",iframeSrc:"/vmi/-iframe.html#/ce39ad2a"},{default:t(()=>[s(f)]),_:1}),s(i,{iframeSrc:"/vmi/-iframe.html#/ce39ad2a",defaultShowCode:""},{default:t(()=>[s(p,{name:"demo-basic.vue",rawCode:"%3Ctemplate%3E%0A%20%20%3CElButton%3EDefault%3C%2FElButton%3E%0A%20%20%3CElButton%20type%3D%22primary%22%3EPrimary%3C%2FElButton%3E%0A%20%20%3CElButton%20type%3D%22success%22%3ESuccess%3C%2FElButton%3E%0A%20%20%3CElButton%20type%3D%22info%22%3EInfo%3C%2FElButton%3E%0A%20%20%3CElButton%20type%3D%22warning%22%3EWarning%3C%2FElButton%3E%0A%20%20%3CElButton%20type%3D%22danger%22%3EDanger%3C%2FElButton%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ElButton%20%7D%20from%20'element-plus'%0A%3C%2Fscript%3E%0A"},{default:t(()=>[na]),_:1})]),_:1})]),_:1}),sa,s(r,null,{default:t(()=>[s(c,{id:"3e7944d1",iframeSrc:"/vmi/-iframe.html#/3e7944d1"},{default:t(()=>[s(W)]),_:1}),s(i,{iframeSrc:"/vmi/-iframe.html#/3e7944d1"},{default:t(()=>[s(p,{name:"demo-tabs.vue",rawCode:"%3Ctemplate%3E%0A%20%20%3CElTabs%20type%3D%22border-card%22%3E%0A%20%20%20%20%3CElTabPane%20label%3D%22Task%22%3E%0A%20%20%20%20%20%20%3CTask%20%2F%3E%0A%20%20%20%20%3C%2FElTabPane%3E%0A%20%20%20%20%3CElTabPane%20label%3D%22User%22%3E%0A%20%20%20%20%20%20%3CUser%20%2F%3E%0A%20%20%20%20%3C%2FElTabPane%3E%0A%20%20%3C%2FElTabs%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ElTabs%2C%20ElTabPane%20%7D%20from%20'element-plus'%0Aimport%20Task%20from%20'.%2Fdemo-tabs-task'%0Aimport%20User%20from%20'.%2Fdemo-tabs-user.vue'%0A%3C%2Fscript%3E%0A"},{default:t(()=>[ta]),_:1}),s(p,{name:"demo-tabs-task.tsx",rawCode:"import%20%7B%20h%2C%20defineComponent%20%7D%20from%20'vue'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20()%20%3D%3E%20h('div'%2C%20'Task')%0A%20%20%7D%2C%0A%7D)%0A"},{default:t(()=>[ea]),_:1}),s(p,{name:"demo-tabs-user.vue",rawCode:"%3Ctemplate%3E%0A%20%20%3Cdiv%3EUser%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A"},{default:t(()=>[ua]),_:1})]),_:1})]),_:1})])}}});var da=A(oa,[["__file","code-block.html.vue"]]);export{da as default};
