import{J as n,K as s,L as a,M as e}from"./clientConfigs.5b3b1163.js";const t={},p=e(`<h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><p>\u7528\u4E8E\u7F16\u5199\u6587\u6863\u4F7F\u7528\u7684\u7EC4\u4EF6\u3002</p><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i -D @bfehub/vuepress-components
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// docs/.vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/client&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VpNpmBadge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@bfehub/vuepress-components&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VpNpmBadge<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[p];function i(o,l){return s(),a("div",null,c)}var d=n(t,[["render",i],["__file","index.html.vue"]]);export{d as default};
