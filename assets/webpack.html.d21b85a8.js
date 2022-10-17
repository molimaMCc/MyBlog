import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.bb959cb8.js";const p={},t=e(`<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h1><p>webpack:\u524D\u7AEF\u6253\u5305\u5DE5\u5177</p><h3 id="webpack\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#webpack\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> webpack\u57FA\u672C\u4F7F\u7528</h3><p><strong>\u5728\u9879\u76EE\u4E2D\u5B89\u88C5\u548C\u914D\u7F6Ewebpack:</strong></p><p>1.\u8FD0\u884Cnpm install webpack webpack-cli-D\u547D\u4EE4,\u5B89\u88C5 webpack \u76F8\u5173\u7684\u5305</p><p>2.\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E2D\uFF0C\u521B\u5EFA\u540D\u4E3A<code>webpack.config.js</code>\u7684webpack\u914D\u7F6E\u6587\u4EF6</p><p>3.\u5728webpack \u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u521D\u59CB\u5316\u5982\u4E0B\u57FA\u672C\u914D\u7F6E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">&#39;development&#39;</span> <span class="token comment">//mode\u7528\u6765\u6307\u5B9A\u6784\u5EFA\u6A21\u5F0F</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.\u5728<code>package.json</code>\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684scripts\u8282\u70B9\u4E0B\uFF0C\u65B0\u589Edev\u811A\u672C\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span><span class="token string">&quot;webpack&quot;</span><span class="token comment">//script\u8282\u70B9\u4E0B\u7684\u811A\u672C\uFF0C\u53EF\u4EE5\u901A</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.\u5728\u7EC8\u7AEF\u8FD0\u884C npm run dev \u547D\u4EE4\uFF0C\u542F\u52A8webpack\u6253\u5305</p><h4 id="\u914D\u7F6E\u6253\u5305\u7684\u5165\u53E3\u4E0E\u51FA\u53E3" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6253\u5305\u7684\u5165\u53E3\u4E0E\u51FA\u53E3" aria-hidden="true">#</a> \u914D\u7F6E\u6253\u5305\u7684\u5165\u53E3\u4E0E\u51FA\u53E3</h4><p><strong>\u6253\u5305\u7684\u5165\u53E3\u6587\u4EF6\u4E3Asrc-&gt; index.js</strong><strong>\u6253\u5305\u7684\u8F93\u51FA\u6587\u4EF6\u4E3Adist-&gt; main.js</strong></p><p>\u5982\u679C\u8981\u4FEE\u6539\u6253\u5305\u7684\u5165\u53E3\u4E0E\u51FA\u53E3\uFF0C\u53EF\u4EE5\u5728webpack.config.js\u4E2D\u914D\u7F6E\u4FE1\u606F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> require\uFF08<span class="token string">&#39;path&#39;</span>\uFF09<span class="token comment">//\u5BFC\u5165 node.js\u4E2D\u4E13\u95E8\u64CD\u4F5C\u8DEF\u5F84\u7684\u6A21\u5757</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span><span class="token punctuation">{</span>
<span class="token literal-property property">entry</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//\u6253\u5305\u5165\u53E3\u6587\u4EF6\u7684\u8DEF\u5F84</span>
<span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;./dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//\u8F93\u51FA\u6587\u4EF6\u7684\u5B58\u653E\u8DEF\u5F84</span>
	<span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">&#39;bundle.js&#39;</span><span class="token comment">//\u8F93\u51FA\u6587\u4EF6\u7684\u540D\u79F0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u81EA\u52A8\u5F15\u5165\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u5F15\u5165\u8D44\u6E90" aria-hidden="true">#</a> \u81EA\u52A8\u5F15\u5165\u8D44\u6E90</h4><p><strong>html-webpack-plugin\u7684\u4F7F\u7528</strong></p><p>npm i html-webpack-plugin -D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span> <span class="token comment">//\u5F15\u5165\u63D2\u4EF6</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./01study/src/study.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u6253\u5305\u5165\u53E3\u6587\u4EF6\u7684\u8DEF\u5F84</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./01study/dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//\u8F93\u51FA\u6587\u4EF6\u7684\u5B58\u653E\u8DEF\u5F84</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u8F93\u51FA\u6587\u4EF6\u7684\u540D\u79F0</span>
        <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u6E05\u7406dist</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./01study/index.html&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u6307\u5B9A\u4EE5\u54EA\u4E2Ahtml\u6587\u4EF6\u4E3A\u6A21\u677F</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;app.html&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// \u751F\u6210\u65B0\u7684html\u6587\u4EF6\u540D</span>
            <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token string">&#39;body&#39;</span><span class="token punctuation">,</span>         <span class="token comment">// \u6307\u5B9A\u65B0\u7684\u81EA\u52A8\u751F\u4EA7\u7684script\u6807\u7B7E\u653E\u5728\u54EA</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u4F7F\u7528\u63D2\u4EF6</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4F7F\u7528soruce-map\u6392\u9519" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528soruce-map\u6392\u9519" aria-hidden="true">#</a> \u4F7F\u7528soruce-map\u6392\u9519</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&#39;inline-source-map&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u627E\u51FA\u5728\u539F\u6587\u4EF6\u51FA\u9519\u7684\u4F4D\u7F6E\uFF0C\u800C\u4E0D\u662F\u5728\u6253\u5305\u540E\u7684js\u6587\u4EF6\u4E2D</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4F7F\u7528webpack-dev-server" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528webpack-dev-server" aria-hidden="true">#</a> \u4F7F\u7528webpack-dev-server</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token comment">// ....</span>

<span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// static: {</span>
        <span class="token comment">//     directory: path.resolve(__dirname, &#39;./01study/dist&#39;),</span>
        <span class="token comment">// },  //\u4E0D\u5728\u751F\u6548</span>
        <span class="token literal-property property">contentBase</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./01study/dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
 <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u70ED\u6A21\u5757\u66F4\u65B0\u5F00\u542F\uFF0C\u5B9E\u65BD\u66F4\u65B0\u5F00\u542F</p><p><strong>\u9047\u5230\u7684\u5751\uFF1A \u5728webpack5\u4E2D static \u4E0D\u5728\u4F7F\u7528</strong></p><h3 id="\u8D44\u6E90\u6A21\u5757-asset-module" tabindex="-1"><a class="header-anchor" href="#\u8D44\u6E90\u6A21\u5757-asset-module" aria-hidden="true">#</a> \u8D44\u6E90\u6A21\u5757(asset module)</h3>`,26),o=[t];function c(l,i){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","webpack.html.vue"]]);export{d as default};
