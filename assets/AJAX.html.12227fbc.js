import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,b as a,d as n,e,f as t,r as l}from"./app.bb959cb8.js";const r={},c=t(`<h1 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> AJAX</h1><h2 id="\u539F\u751Fajax\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u539F\u751Fajax\u57FA\u7840" aria-hidden="true">#</a> \u539F\u751FAJAX\u57FA\u7840</h2><h3 id="\u4EC0\u4E48\u662Fajax" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fajax" aria-hidden="true">#</a> \u4EC0\u4E48\u662Fajax\uFF1F</h3><p>AJAX (\u5F02\u6B65 JavaScript \u548C XML) \uFF0C\u6307\u2F00\u79CD\u521B\u5EFA\u4EA4\u4E92\u5F0F\u2F79\u2EDA\u5E94\u2F64\u7684\u2F79\u2EDA\u5F00\u53D1\u6280\u672F\u3002</p><p>\u7279\u6027\uFF1A</p><p><strong>\u2F46\u9700\u91CD\u65B0\u52A0\u8F7D\u6574\u4E2A\u2F79\u2EDA\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u2F79\u2EDA\u5B9E\u73B0\u5F02\u6B65\u66F4\u65B0\u3002</strong></p><h3 id="\u5B9E\u73B0\u7684\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u7684\u6B65\u9AA4" aria-hidden="true">#</a> \u5B9E\u73B0\u7684\u6B65\u9AA4</h3><ol><li>\u5B9A\u4E49\u2F00\u4E2AXMLHttpRequest\u6838\u2F3C\u5BF9\u8C61xhr;</li><li>\u901A\u8FC7xhr.open\u2F45\u6CD5\u7ED9\u5F53\u524D\u5BF9\u8C61\u63D0\u4F9B\u8BBF\u95EE\u2F45\u5F0F\u3001URL\u7B49\u3002</li><li>\u53D1\u9001\u5F53\u524D\u7684\u8BF7\u6C42\u2F84\u6307\u5B9A\u7684URL</li><li>\u63A5\u6536\u8FD4\u56DE\u503C\u5E76\u5904\u7406</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token comment">//1. \u521B\u5EFA\u6838\u2F3C\u5BF9\u8C61</span>
<span class="token keyword">var</span> xmlhttp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//2.\u901A\u8FC7\u6838\u2F3C\u5BF9\u8C61\u2F45\u6CD5\u7ED9\u5F53\u524D\u7684\u5BF9\u8C61\u63D0\u4F9B\u8BBF\u95EE\u2F45\u5F0F\u548CURL\u8DEF\u5F84</span>
xmlhttp<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;jsAjax?name=liuyan&quot;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//3.\u53D1\u9001\u5F53\u524D\u7684\u8BF7\u6C42\u2F84\u6307\u5B9A\u7684URL</span>
xmlhttp<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//4.\u63A5\u6536\u8FD4\u56DE\u503C\u5E76\u5904\u7406</span>
xmlhttp<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//xmlhttp.readyState == 4\u4EE3\u8868XMLHttpRequest\u5BF9\u8C61\u8BFB\u53D6\u670D\u52A1\u5668\u7684\u54CD\u5E94\u7ED3\u675F</span>
    <span class="token comment">//xmlhttp.status == 200\u54CD\u5E94\u6210\u529F</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>xmlhttp<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xmlhttp<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> msg <span class="token operator">=</span> xmlhttp<span class="token punctuation">.</span>responseText<span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="xmlhttprequestopen-\u7684\u5C5E\u6027\u548C\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#xmlhttprequestopen-\u7684\u5C5E\u6027\u548C\u65B9\u6CD5" aria-hidden="true">#</a> XMLHttpRequestopen()\u7684\u5C5E\u6027\u548C\u65B9\u6CD5</h3><h4 id="open" tabindex="-1"><a class="header-anchor" href="#open" aria-hidden="true">#</a> open()</h4><p><code>open(method, url, async, user, psw)</code></p><p>\u89C4\u5B9A\u8BF7\u6C42</p><ul><li>method\uFF1A\u8BF7\u6C42\u7C7B\u578B GET \u6216 POST</li><li>url\uFF1A\u6587\u4EF6\u4F4D\u7F6E</li><li>async\uFF1Atrue\uFF08\u5F02\u6B65\uFF09\u6216 false\uFF08\u540C\u6B65\uFF09</li><li>user\uFF1A\u53EF\u9009\u7684\u7528\u6237\u540D\u79F0</li><li>psw\uFF1A\u53EF\u9009\u7684\u5BC6\u7801</li></ul><h4 id="send" tabindex="-1"><a class="header-anchor" href="#send" aria-hidden="true">#</a> send()</h4><p>\u5C06\u8BF7\u6C42\u53D1\u9001\u5230\u670D\u52A1\u5668\uFF0C\u7528\u4E8E\u53D1\u9001\u8BF7\u6C42\uFF0Cget\u8BF7\u6C42\u65E0\u9700\u53C2\u6570\uFF0Cpost\u9700\u8981\u52A0\u53C2\u6570</p><h4 id="onreadystatechange" tabindex="-1"><a class="header-anchor" href="#onreadystatechange" aria-hidden="true">#</a> onreadystatechange</h4><p>\u5B9A\u4E49\u5F53 readyState \u5C5E\u6027\u53D1\u751F\u53D8\u5316\u65F6\u88AB\u8C03\u7528\u7684\u51FD\u6570</p><h4 id="readystate" tabindex="-1"><a class="header-anchor" href="#readystate" aria-hidden="true">#</a> readyState</h4><p>\u4FDD\u5B58 XMLHttpRequest \u7684\u72B6\u6001\u3002</p><ul><li>0\uFF1A\u8BF7\u6C42\u672A\u521D\u59CB\u5316</li><li>1\uFF1A\u670D\u52A1\u5668\u8FDE\u63A5\u5DF2\u5EFA\u7ACB</li><li>2\uFF1A\u8BF7\u6C42\u5DF2\u6536\u5230</li><li>3\uFF1A\u6B63\u5728\u5904\u7406\u8BF7\u6C42</li><li>4\uFF1A\u8BF7\u6C42\u5DF2\u5B8C\u6210\u4E14\u54CD\u5E94\u5DF2\u5C31\u7EEA</li></ul><h4 id="status" tabindex="-1"><a class="header-anchor" href="#status" aria-hidden="true">#</a> status</h4><p>\u8FD4\u56DE\u8BF7\u6C42\u7684\u72B6\u6001\u53F7\uFF08http\u72B6\u6001\u7801\uFF09</p><ul><li>200: &quot;OK&quot;</li><li>403: &quot;Forbidden&quot;</li><li>404: &quot;Not Found&quot;</li></ul><h4 id="get\u4E0Epost" tabindex="-1"><a class="header-anchor" href="#get\u4E0Epost" aria-hidden="true">#</a> get\u4E0Epost</h4><p>GET \u6BD4 POST \u66F4\u7B80\u5355\u66F4\u5FEB\uFF0C\u53EF\u7528\u4E8E\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u3002\u4E0D\u8FC7\uFF0C\u8BF7\u5728\u4EE5\u4E0B\u60C5\u51B5\u59CB\u7EC8\u4F7F\u7528</p><p>POST\uFF1A</p><ul><li>\u7F13\u5B58\u6587\u4EF6\u4E0D\u662F\u9009\u9879\uFF08\u66F4\u65B0\u670D\u52A1\u5668\u4E0A\u7684\u6587\u4EF6\u6216\u6570\u636E\u5E93\uFF09</li><li>\u5411\u670D\u52A1\u5668\u53D1\u9001\u5927\u91CF\u6570\u636E\uFF08POST \u65E0\u5927\u5C0F\u9650\u5236\uFF09</li><li>\u53D1\u9001\u7528\u6237\u8F93\u5165\uFF08\u53EF\u5305\u542B\u672A\u77E5\u5B57\u7B26\uFF09\uFF0CPOST \u6BD4 GET \u66F4\u5F3A\u5927\u66F4\u5B89\u5168</li></ul><h3 id="\u8FD4\u56DE\u503C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C\u7C7B\u578B" aria-hidden="true">#</a> \u8FD4\u56DE\u503C\u7C7B\u578B</h3><p>Ajax\u2F40\u6301\u591A\u79CD\u8FD4\u56DE\u503C\u7C7B\u578B\uFF1A</p><p>XML\uFF1A\u592A\u9EBB\u70E6\uFF0C\u89E3\u6790\u592A\u8D39\u52B2\uFF0C\u5DF2\u7ECF\u4E0D\u4F7F\u2F64</p><p>HTML\uFF1A\u2F79\u2EDA\uFF0C\u5176\u5B9E\u8D28\u548C\u8FD4\u56DE\u2F42\u672C\u2F00\u6837\uFF0C\u6CA1\u533A\u522B\uFF0C\u2F00\u822C\u4F7F\u2F64\u2F42\u672C\u4EE3\u66FF</p><p>Script\uFF1A \u76F4\u63A5\u8FD4\u56DE\u811A\u672C</p><p>Text\uFF08\u2F42\u672C\uFF09\uFF1A\uFF08\u9ED8\u8BA4\u8FD4\u56DE\u7C7B\u578B\uFF09\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u8FD4\u56DE\u76F4\u63A5\u63A5\u6536\u5B57\u7B26\u4E32</p><p>Json\uFF1A\u8FD4\u56DE\u662F\u2F00\u4E2Ajs\u5BF9\u8C61\uFF0C\u811A\u672C\u4E2D\u53EF\u4EE5\u76F4\u63A5\u64CD\u4F5C\u8FD9\u4E2A\u5BF9\u8C61\uFF0C\u2FAE\u5E38\u2F45\u4FBF</p><h2 id="jquery" tabindex="-1"><a class="header-anchor" href="#jquery" aria-hidden="true">#</a> JQuery</h2><table><thead><tr><th style="text-align:center;">\u8BF7\u6C42\u65B9\u5F0F</th><th>\u8BED\u6CD5</th></tr></thead><tbody><tr><td style="text-align:center;">ajax\u8BF7\u6C42</td><td>$.ajax([settings])</td></tr><tr><td style="text-align:center;">GET\u8BF7\u6C42</td><td>$.(url,[data],[callback],[type])</td></tr><tr><td style="text-align:center;">POST\u8BF7\u6C42</td><td>$.(url,[data],[callback],[type])</td></tr></tbody></table><h2 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> axios</h2><p>\u4EC0\u4E48\u662Faxios\uFF1F</p><p>Axios \u662F\u4E00\u4E2A\u57FA\u4E8E promise \u7684 HTTP \u5E93\uFF0C\u53EF\u4EE5\u7528\u5728\u6D4F\u89C8\u5668\u548C node.js \u4E2D</p><p><strong>\u7279\u6027</strong></p>`,41),d={href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest",target:"_blank",rel:"noopener noreferrer"},u={href:"http://nodejs.org/api/http.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},k=a("li",null,[a("p",null,"\u62E6\u622A\u8BF7\u6C42\u548C\u54CD\u5E94")],-1),m=a("li",null,[a("p",null,"\u8F6C\u6362\u8BF7\u6C42\u6570\u636E\u548C\u54CD\u5E94\u6570\u636E")],-1),x=a("li",null,[a("p",null,"\u53D6\u6D88\u8BF7\u6C42")],-1),b=a("li",null,[a("p",null,"\u81EA\u52A8\u8F6C\u6362 JSON \u6570\u636E")],-1),v=t(`<h3 id="axiosapi" tabindex="-1"><a class="header-anchor" href="#axiosapi" aria-hidden="true">#</a> axiosAPI</h3><h4 id="axios-1" tabindex="-1"><a class="header-anchor" href="#axios-1" aria-hidden="true">#</a> axios()</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u53D1\u9001 POST \u8BF7\u6C42</span>
<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8BF7\u6C42\u65B9\u5F0F</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>    <span class="token comment">// \u8BF7\u6C42\u5730\u5740</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
 		     <span class="token comment">// \u8BF7\u6C42\u6570\u636E</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8BF7\u6C42\u65B9\u6CD5\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u65B9\u6CD5\u522B\u540D" aria-hidden="true">#</a> \u8BF7\u6C42\u65B9\u6CD5\u522B\u540D</h4><p><code>axios.request(config)</code></p><p><code>axios.get(url[, config])</code></p><p><code>axios.delete(url[, config])</code></p><p><code>axios.head(url[, config])</code></p><p><code>axios.options(url[, config])</code></p><p><code>axios.post(url[, data[, config]])</code></p><p><code>axios.put(url[, data[, config]])</code></p><p><code>axios.patch(url[, data[, config]])</code></p><h4 id="\u57FA\u672C\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u7684\u4F7F\u7528</h4><p>axios.get(&#39;url?act=1&amp;id=2&#39;)</p><p>axios.post(&#39;url&#39;,{act:1,id:2 })</p><p>axios({&#39;url&#39;})</p><h3 id="\u5E38\u89C1\u8BF7\u6C42\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u8BF7\u6C42\u914D\u7F6E" aria-hidden="true">#</a> \u5E38\u89C1\u8BF7\u6C42\u914D\u7F6E</h3><p>url</p><p>method \u8BF7\u6C42\u65B9\u5F0F</p><p>baseURL</p><p>headers \u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934</p><p>data\uFF1A{} post\u8BF7\u6C42\uFF0C\u524D\u7AEF\u7ED9\u540E\u7AEF\u7684\u53C2\u6570</p><p>params\uFF1A{} get\u8BF7\u6C42\uFF0C\u524D\u7AEF\u7ED9\u540E\u7AEF\u7684\u53C2\u6570</p><p>timeout\u8BF7\u6C42\u8D85\u65F6</p><p>responesType:&#39;json&#39; \u540E\u7AEF\u8FD4\u56DE\u7684\u6570\u636E\u7C7B\u578B</p><h3 id="axios\u7684\u4E8C\u6B21\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#axios\u7684\u4E8C\u6B21\u5C01\u88C5" aria-hidden="true">#</a> axios\u7684\u4E8C\u6B21\u5C01\u88C5</h3><p><strong>\u4E3A\u4EC0\u4E48\u8981\u4E8C\u6B21\u5C01\u88C5</strong></p><ul><li>\u6BCF\u4E2A\u9875\u9762\u6709\u4E0D\u540C\u7684axios\u8BF7\u6C42\uFF0C\u5F53\u9879\u76EE\u4E0A\u7EBF\u65F6\uFF0C\u9700\u8981\u66F4\u6539\u8BF7\u6C42\u5730\u5740\uFF0C\u4E00\u4E2A\u4E2A\u66F4\u6539\u5F88\u9EBB\u70E6</li><li>\u68C0\u6D4B\u767B\u5F55\u7684\u72B6\u6001</li><li>\u603B\u7684\u6765\u8BF4\u65B9\u4FBF\u7EDF\u4E00\u7BA1\u7406\u8BF7\u6C42</li></ul><p><strong>\u65B9\u6CD5\uFF1A\u5728src\u4E2D\u65B0\u5EFA\u4E00\u4E2A\u5DE5\u5177\u7C7Butils/requst.js</strong></p><h4 id="\u8BF7\u6C42\u62E6\u622A\u5668\u91CC\u505A\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u62E6\u622A\u5668\u91CC\u505A\u4EC0\u4E48" aria-hidden="true">#</a> \u8BF7\u6C42\u62E6\u622A\u5668\u91CC\u505A\u4EC0\u4E48\uFF1F</h4><p>\u505A\u767B\u5F55\u7684\u5224\u65AD\uFF0C\u5982\u679C\u662F\u767B\u5F55\u72B6\u6001\uFF0C\u4F1A\u628Aheaders\u4E2D\u7684token\u4F20\u9012\u7ED9\u540E\u7AEF</p><h4 id="\u54CD\u5E94\u62E6\u622A\u5668\u91CC\u505A\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u62E6\u622A\u5668\u91CC\u505A\u4EC0\u4E48" aria-hidden="true">#</a> \u54CD\u5E94\u62E6\u622A\u5668\u91CC\u505A\u4EC0\u4E48\uFF1F</h4><p>\u540E\u7AEF\u7ED9\u524D\u7AEF\u4F20\u6570\u636E\u65F6</p><h4 id="api\u7684\u89E3\u8026" tabindex="-1"><a class="header-anchor" href="#api\u7684\u89E3\u8026" aria-hidden="true">#</a> api\u7684\u89E3\u8026</h4><p>\u4E3A\u4EC0\u4E48\u89E3\u8026\uFF1F</p><p>\u540C\u4E00\u4E2Aapi\u53EF\u80FD\u591A\u6B21\u4F7F\u7528\uFF0C\u5C01\u88C5\u8D77\u6765\u76F4\u63A5\u8C03\u7528</p><p>\u4E3A\u4E86\u65B9\u4FBFapi\u7684\u7EDF\u4E00\u7BA1\u7406</p><p>\u5728api\u6587\u4EF6\u4E0B\u65B0\u5EFA\u67D0\u4E00\u4E2Ajs\u6587\u4EF6</p>`,38);function f(g,y){const s=l("ExternalLinkIcon");return o(),i("div",null,[c,a("ul",null,[a("li",null,[a("p",null,[n("\u4ECE\u6D4F\u89C8\u5668\u4E2D\u521B\u5EFA "),a("a",d,[n("XMLHttpRequests"),e(s)])])]),a("li",null,[a("p",null,[n("\u4ECE node.js \u521B\u5EFA "),a("a",u,[n("http"),e(s)]),n(" \u8BF7\u6C42")])]),a("li",null,[a("p",null,[n("\u652F\u6301 "),a("a",h,[n("Promise"),e(s)]),n(" API")])]),k,m,x,b]),v])}const q=p(r,[["render",f],["__file","AJAX.html.vue"]]);export{q as default};
