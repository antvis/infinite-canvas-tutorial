import{_ as s,c as a,o as i,a6 as e}from"./chunks/framework.B2LRalDI.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"zh/reference/canvas.md","filePath":"zh/reference/canvas.md"}'),t={name:"zh/reference/canvas.md"},n=e(`<h2 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CanvasConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    canvas</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HTMLCanvasElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    renderer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;webgl&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;webgpu&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    shaderCompilerPath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    devicePixelRatio</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;render&quot;">​</a></h2><p>手动创建一个动画循环不断调用 <code>render</code> 方法。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> animate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    canvas.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    requestAnimationFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(animate);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">animate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="resize" tabindex="-1">resize <a class="header-anchor" href="#resize" aria-label="Permalink to &quot;resize&quot;">​</a></h2><p>重新设置画布的大小。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">canvas.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;destroy&quot;">​</a></h2><p>销毁画布。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">canvas.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">destroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="appendchild" tabindex="-1">appendChild <a class="header-anchor" href="#appendchild" aria-label="Permalink to &quot;appendChild&quot;">​</a></h2><p>Adds a shape to the end of the list of children.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">canvas.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(circle);</span></span></code></pre></div><h2 id="removechild" tabindex="-1">removeChild <a class="header-anchor" href="#removechild" aria-label="Permalink to &quot;removeChild&quot;">​</a></h2><p>Removes a child shape from canvas and returns the removed shape.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">canvas.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(circle);</span></span></code></pre></div><h2 id="elementsfrompoint" tabindex="-1">elementsFromPoint <a class="header-anchor" href="#elementsfrompoint" aria-label="Permalink to &quot;elementsFromPoint&quot;">​</a></h2><h2 id="elementfrompoint" tabindex="-1">elementFromPoint <a class="header-anchor" href="#elementfrompoint" aria-label="Permalink to &quot;elementFromPoint&quot;">​</a></h2><h2 id="client2viewport" tabindex="-1">client2Viewport <a class="header-anchor" href="#client2viewport" aria-label="Permalink to &quot;client2Viewport&quot;">​</a></h2><h2 id="viewport2client" tabindex="-1">viewport2Client <a class="header-anchor" href="#viewport2client" aria-label="Permalink to &quot;viewport2Client&quot;">​</a></h2><h2 id="zoomin" tabindex="-1">zoomIn <a class="header-anchor" href="#zoomin" aria-label="Permalink to &quot;zoomIn&quot;">​</a></h2><h2 id="zoomout" tabindex="-1">zoomOut <a class="header-anchor" href="#zoomout" aria-label="Permalink to &quot;zoomOut&quot;">​</a></h2><h2 id="setcheckboardstyle" tabindex="-1">setCheckboardStyle <a class="header-anchor" href="#setcheckboardstyle" aria-label="Permalink to &quot;setCheckboardStyle&quot;">​</a></h2>`,24),h=[n];function l(p,r,o,d,k,c){return i(),a("div",null,h)}const m=s(t,[["render",l]]);export{g as __pageData,m as default};