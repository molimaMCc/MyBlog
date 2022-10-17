import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as e,f as i}from"./app.bed35d21.js";const o={},c=i('<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><p>git\u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u5206\u5E03\u5F0F\u7248\u672C\u63A7\u5236\u7CFB\u7EDF</p><p>\u8BF4\u660E\uFF1A</p><p><strong>workspace</strong>\uFF1A\u5DE5\u4F5C\u533A</p><p><strong>staging area</strong>\uFF1A\u6682\u5B58\u533A/\u7F13\u5B58\u533A</p><p><strong>local repository</strong>\uFF1A\u7248\u672C\u5E93\u6216\u672C\u5730\u4ED3\u5E93</p><p><strong>remote repository</strong>\uFF1A\u8FDC\u7A0B\u4ED3\u5E93</p><h1 id="git\u57FA\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#git\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> git\u57FA\u672C\u64CD\u4F5C</h1><p><code>git clone</code> &lt;\u4ED3\u5E93\u5730\u5740&gt;</p><p>\u62F7\u8D1D\u4E00\u4E2Agit\u4ED3\u5E93\u5230\u672C\u5730</p><p><code>git branch</code></p><p>\u67E5\u770B\u672C\u5730\u4ED3\u5E93\u5206\u652F\u548C\u8FDC\u7A0B\u4ED3\u5E93\u5206\u652F</p><p><code>git remote add [shortname] [url]</code></p><p>\u6DFB\u52A0\u8FDC\u7A0B\u7248\u672C\u5E93\uFF08\u672C\u5730\u4EE3\u7801\u5E93\u4E0E\u8FDC\u7A0B\u4ED3\u5E93\u5EFA\u7ACB\u8054\u7CFB\uFF09</p><p><code>git fetch</code></p><p>\u4ECE\u8FDC\u7A0B\u83B7\u53D6\u4EE3\u7801\u5E93</p><p><code>git checkout</code> &lt;\u672C\u5730\u5206\u652F&gt;</p><p>\u5207\u6362\u672C\u5730\u5206\u652F</p><p><code>git pull</code> &lt;\u672C\u5730\u5206\u652F&gt;</p><p>\u4ECE\u8FDC\u7A0B\u83B7\u53D6\u4EE3\u7801\u5E76\u5408\u5E76\u672C\u5730\u4EE3\u7801\u7248\u672C</p><p><code>git add .</code></p><p>\u6DFB\u52A0\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u5230\u7F13\u5B58\u533A</p><p><code>git commit -m [message]</code></p><p>\u5C06\u7F13\u5B58\u533A\u5185\u5BB9\u6DFB\u52A0\u5230\u672C\u5730\u4ED3\u5E93\u4E2D</p><p><code>git push</code> &lt;\u672C\u5730\u5206\u652F\u540D&gt;|&lt;\u8FDC\u7A0B\u4ED3\u5E93\u540D&gt;</p><p>\u7528\u4E8E\u5C06\u672C\u5730\u5206\u652F\u7248\u672C\u4E0A\u4F20\u5230\u8FDC\u7A0B\u5E76\u5408\u5E76</p><p><code>git pull</code>\uFF0C<code>git fetch</code>\u7684\u533A\u522B</p><p>git pull = git fetch + git merge</p><p><strong>\u4E00\u3001\u8FDC\u7AEF\u8DDF\u8E2A\u5206\u652F\u4E0D\u540C</strong></p><ol><li>Git fetch\uFF1AGit fetch\u80FD\u591F\u76F4\u63A5\u66F4\u6539\u8FDC\u7AEF\u8DDF\u8E2A\u5206\u652F\u3002</li><li>git pull\uFF1Agit pull\u65E0\u6CD5\u76F4\u63A5\u5BF9\u8FDC\u7A0B\u8DDF\u8E2A\u5206\u652F\u64CD\u4F5C\uFF0C\u6211\u4EEC\u5FC5\u987B\u5148\u5207\u56DE\u672C\u5730\u5206\u652F\u7136\u540E\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684commit\u63D0\u4EA4\u3002</li></ol><p><strong>\u4E8C\u3001\u62C9\u53D6\u4E0D\u540C</strong></p><ol><li>Git fetch\uFF1AGit fetch\u4F1A\u5C06\u6570\u636E\u62C9\u53D6\u5230\u672C\u5730\u4ED3\u5E93 - \u5B83\u5E76\u4E0D\u4F1A\u81EA\u52A8\u5408\u5E76\u6216\u4FEE\u6539\u5F53\u524D\u7684\u5DE5\u4F5C\u3002</li><li>git pull\uFF1Agit pull\u662F\u4ECE\u8FDC\u7A0B\u83B7\u53D6\u6700\u65B0\u7248\u672C\u5E76merge\u5230\u672C\u5730\uFF0C\u4F1A\u81EA\u52A8\u5408\u5E76\u6216\u4FEE\u6539\u5F53\u524D\u7684\u5DE5\u4F5C</li></ol><p>#\u9879\u76EE\u4E2Dgit\u4F7F\u7528\u6D41\u7A0B</p><p>\u9879\u76EE\u521D\u59CB\u5316</p><p>git init \u521B\u5EFA\u4ED3\u5E93</p><p>git add . \u63D0\u4EA4\u6240\u6709\u4EE3\u7801\u5230\u7F13\u5B58\u533A</p><p>git commit -m&#39;\u63D0\u4EA4\u4FE1\u606F&#39; \u63D0\u4EA4\u4EE3\u7801\u5230\u672C\u5730\u4ED3\u5E93</p><p>git remote add \u4ED3\u5E93\u540D \u4ED3\u5E93\u5730\u5740\uFF08url\uFF09</p><p>git push -u \u4ED3\u5E93\u540D &quot;\u5206\u652F\u540D&quot;</p><h1 id="\u9879\u76EE\u4E2D\u4F7F\u7528git\u7684\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u4E2D\u4F7F\u7528git\u7684\u573A\u666F" aria-hidden="true">#</a> \u9879\u76EE\u4E2D\u4F7F\u7528git\u7684\u573A\u666F</h1><p>1.\u9700\u6C42\u5F00\u53D1\u524D\u7684\u5206\u652F\u62C9\u53D6\u6D41\u7A0B\uFF1F</p><p>git pull \u672C\u5730\u66F4\u65B0</p><p>git checkout -b dev-LTW-\u65E5\u671F \u521B\u5EFA\u672C\u5730\u5206\u652F</p><p>\u7EE7\u7EED\u63D0\u4EA4\u4EE3\u7801\u5230\u8FDC\u7A0B\u4ED3\u5E93</p><p>2.\u9700\u6C42\u5F00\u53D1\u540E\u7684\u5206\u652F\u5E76\u5408\u5E76\u6D41\u7A0B\uFF1F</p><p>git merge \u9700\u8981\u5408\u5E76\u7684\u5206\u652F\u540D\u79F0</p><p>3.\u5206\u652F\u5408\u5E76\u51FA\u73B0\u51B2\u7A81\u5982\u4F55\u89E3\u51B3\uFF1F</p><p>\u6C9F\u901A\u89E3\u51B3\uFF0C\u770B\u770B\u662F\u4E0D\u662F\u90FD\u9700\u8981\u8FD8\u662F\u53EA\u9700\u8981\u4E00\u65B9\u7684</p>',48),g=[c];function r(d,l){return p(),e("div",null,g)}const n=t(o,[["render",r],["__file","Git.html.vue"]]);export{n as default};
