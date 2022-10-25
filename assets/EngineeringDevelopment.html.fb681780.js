import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,b as n,d as t,e as o,f as i,r as c}from"./app.965a661c.js";const l={},r=i(`<h1 id="\u524D\u7AEF\u5DE5\u7A0B\u5316" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u5DE5\u7A0B\u5316" aria-hidden="true">#</a> \u524D\u7AEF\u5DE5\u7A0B\u5316</h1><h2 id="\u6A21\u5757\u5316\u76F8\u5173\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u5316\u76F8\u5173\u89C4\u8303" aria-hidden="true">#</a> \u6A21\u5757\u5316\u76F8\u5173\u89C4\u8303</h2><h3 id="\u6D4F\u89C8\u5668\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u7AEF" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u7AEF</h3><h4 id="_1-amda" tabindex="-1"><a class="header-anchor" href="#_1-amda" aria-hidden="true">#</a> 1.AMDA</h4><p><code>Require.js (http://www.requirejs.cn)</code></p><h4 id="_2-cmd" tabindex="-1"><a class="header-anchor" href="#_2-cmd" aria-hidden="true">#</a> 2.CMD</h4><p><code>Sea.js (https://seajs.github.io/seajs/docs)</code></p><h3 id="\u670D\u52A1\u7AEF\u6A21\u5757\u5316\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7AEF\u6A21\u5757\u5316\u89C4\u8303" aria-hidden="true">#</a> \u670D\u52A1\u7AEF\u6A21\u5757\u5316\u89C4\u8303</h3><h4 id="commonjs" tabindex="-1"><a class="header-anchor" href="#commonjs" aria-hidden="true">#</a> CommonJS</h4><ol><li>\u6A21\u5757\u5206\u4E3A\u5355\u6587\u4EF6\u6A21\u5757 \u4E0E \u5305</li><li>\u6A21\u5757\u6210\u5458\u5BFC\u51FA module.exports \u548C exports</li><li>\u6A21\u5757\u6210\u5458\u5F15\u5165\uFF1Arequire(&#39;\u6A21\u5757\u6807\u8BC6\u7B26&#39;)</li></ol><h3 id="\u5927\u4E00\u7EDF\u7684\u6A21\u5757\u5316\u89C4\u8303-es6" tabindex="-1"><a class="header-anchor" href="#\u5927\u4E00\u7EDF\u7684\u6A21\u5757\u5316\u89C4\u8303-es6" aria-hidden="true">#</a> \u5927\u4E00\u7EDF\u7684\u6A21\u5757\u5316\u89C4\u8303-ES6</h3><ul><li>\u6BCF\u4E2AJS\u6587\u4EF6\u90FD\u662F\u4E00\u4E2A\u72EC\u7ACB\u6A21\u5757</li><li>\u5BFC\u5165\u6A21\u5757\u6210\u5458\u4F7F\u7528import</li><li>\u66B4\u9732\u6A21\u5757\u6210\u5458\u4F7F\u7528export</li></ul><h4 id="node-js\u4E2D\u901A\u8FC7babel\u4F53\u9A8Ces6\u6A21\u5757\u5316" tabindex="-1"><a class="header-anchor" href="#node-js\u4E2D\u901A\u8FC7babel\u4F53\u9A8Ces6\u6A21\u5757\u5316" aria-hidden="true">#</a> Node.js\u4E2D\u901A\u8FC7babel\u4F53\u9A8CES6\u6A21\u5757\u5316</h4><ul><li>npm install--save-dev ebabel/core Qbabel/cli Qbabel/preset-env ebabel/node</li><li>npm install--save@babel/polyfill</li><li>\u9879\u76EE\u8DDF\u76EE\u5F55\u521B\u5EFA\u6587\u4EF6babel.config.js</li><li>babel.config.js\u6587\u4EF6\u5185\u5BB9\u5982\u53F3\u4FA7\u4EE3\u7801</li><li>\u901A\u8FC7npx babel-node index.js\u6267\u884C\u4EE3\u7801</li></ul><h4 id="es6\u6A21\u5757\u5316\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#es6\u6A21\u5757\u5316\u4EE3\u7801" aria-hidden="true">#</a> ES6\u6A21\u5757\u5316\u4EE3\u7801</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5206\u522B\u66B4\u9732</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> school <span class="token operator">=</span> <span class="token string">&#39;\u6E05\u534E&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">finejob</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u80FD\u4E3A\u4F60\u627E\u5DE5\u4F5C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7EDF\u4E00\u66B4\u9732</span>
<span class="token keyword">let</span> school2 <span class="token operator">=</span> <span class="token string">&#39;\u5317\u5927&#39;</span>

<span class="token keyword">function</span> <span class="token function">bigschool</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u4EEC\u662F\u5317\u4EAC\u5927\u5B66&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> school2<span class="token punctuation">,</span> bigschool <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9ED8\u8BA4\u66B4\u9732</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">school</span><span class="token operator">:</span> <span class="token string">&#39;\u5C1A\u7845\u8C37&#39;</span><span class="token punctuation">,</span>
    <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u4EEC\u53EF\u4EE5\u6539\u53D8\u4F60&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u901A\u7528\u5F15\u5165</span>
<span class="token comment">// \u5F15\u5165m.js \u6A21\u5757</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> m form <span class="token string">&#39;./src/js/m.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u89E3\u6784\u8D4B\u503C\u5F62\u5F0F</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>school<span class="token punctuation">,</span>teach<span class="token punctuation">}</span> form <span class="token string">&#39;./src/js/m.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7B80\u4FBF\u5F62\u5F0F \u9488\u5BF9\u9ED8\u8BA4\u66B4\u9732</span>
<span class="token keyword">import</span> m <span class="token keyword">from</span>  <span class="token string">&#39;./src/js/m.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h2><p>webpack:\u524D\u7AEF\u6253\u5305\u5DE5\u5177</p><h3 id="webpack\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#webpack\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> webpack\u57FA\u672C\u4F7F\u7528</h3><p><strong>\u5728\u9879\u76EE\u4E2D\u5B89\u88C5\u548C\u914D\u7F6Ewebpack:</strong></p><p>1.\u8FD0\u884Cnpm install webpack webpack-cli-D\u547D\u4EE4,\u5B89\u88C5 webpack \u76F8\u5173\u7684\u5305</p><p>2.\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E2D\uFF0C\u521B\u5EFA\u540D\u4E3A<code>webpack.config.js</code>\u7684webpack\u914D\u7F6E\u6587\u4EF6</p><p>3.\u5728webpack \u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u521D\u59CB\u5316\u5982\u4E0B\u57FA\u672C\u914D\u7F6E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u70ED\u6A21\u5757\u66F4\u65B0\u5F00\u542F\uFF0C\u5B9E\u65BD\u66F4\u65B0\u5F00\u542F</p><p><strong>\u9047\u5230\u7684\u5751\uFF1A \u5728webpack5\u4E2D static \u4E0D\u5728\u4F7F\u7528</strong></p><h3 id="\u8D44\u6E90\u6A21\u5757-asset-module" tabindex="-1"><a class="header-anchor" href="#\u8D44\u6E90\u6A21\u5757-asset-module" aria-hidden="true">#</a> \u8D44\u6E90\u6A21\u5757(asset module)</h3><h2 id="\u9879\u76EE\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u90E8\u7F72" aria-hidden="true">#</a> \u9879\u76EE\u90E8\u7F72</h2><p><strong>\u5FC5\u5907\u6761\u4EF6</strong>\uFF1A</p><ol><li>\u67B6\u8BBE\u5728\u516C\u7F51\u7684\u670D\u52A1\u5668\u53CA\u5176\u5BF9\u5E94\u7684\u7CFB\u7EDF\uFF08windows/CentOS/Ubuntu\uFF09</li><li>web\u670D\u52A1\u5668\uFF08nginx/Apache\uFF09</li><li>\u7F51\u7AD9\u57DF\u540D</li></ol><p><strong>\u7B2C\u4E00\u6B65</strong>\uFF1A\u9009\u62E9\u670D\u52A1\u5668\uFF08\u534E\u4E3A\u4E91/\u963F\u91CC\u4E91/\u817E\u8BAF\u4E91\uFF09</p><p><strong>\u7B2C\u4E8C\u6B65</strong>\uFF1A\u5BF9\u670D\u52A1\u5668\u914D\u7F6E</p><p><strong>\u7B2C\u4E09\u6B65</strong>\uFF1A\u8FDE\u63A5\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\uFF0C\u5B89\u88C5web\u670D\u52A1\u5668\uFF08\u5DE5\u5177Xshell\uFF09</p><h3 id="nginx\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#nginx\u5B89\u88C5" aria-hidden="true">#</a> nginx\u5B89\u88C5</h3><p>\u5728Xshell\u4E0A\u5B89\u88C5nginx</p><p>\u547D\u4EE4\uFF1A</p><p><code>yum install epel-release</code></p><p><code>yum install nginx</code></p><p>\u7B2C\u56DB\u6B65\uFF1A\u914D\u7F6Eweb\u670D\u52A1\u5668</p><h4 id="nginx\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#nginx\u914D\u7F6E" aria-hidden="true">#</a> nginx\u914D\u7F6E</h4><p>\u6253\u5F00nginx.config</p><p><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20220909204820118.png" alt="image-20220909204820118" loading="lazy"></p><p><img src="https://raw.githubusercontent.com/molimaMCc/Image/main/imgs/image-20220909204933523.png" alt="image-20220909204933523" loading="lazy"></p><p><strong>\u53E6\u5916\u4E00\u79CD\u7BA1\u7406\u670D\u52A1\u5668\u9762\u677F\u5DE5\u5177\uFF08\u5B9D\u5854\uFF09</strong></p>`,64),d={href:"https://www.bt.cn",target:"_blank",rel:"noopener noreferrer"};function u(k,m){const s=c("ExternalLinkIcon");return e(),p("div",null,[r,n("p",null,[n("a",d,[t("https://www.bt.cn"),o(s)])])])}const h=a(l,[["render",u],["__file","EngineeringDevelopment.html.vue"]]);export{h as default};
