(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{161:function(e,n,t){e.exports=t(171)},171:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(40),o=t.n(i),l=t(37),s=t(58),c=t(83),d=t(21),u=t(7);const m=r.a.lazy(()=>t.e(7).then(t.bind(null,203))),h=r.a.lazy(()=>Promise.all([t.e(0),t.e(3)]).then(t.bind(null,199))),p=r.a.lazy(()=>t.e(4).then(t.bind(null,200))),b=r.a.lazy(()=>t.e(5).then(t.bind(null,198))),f=r.a.lazy(()=>t.e(6).then(t.bind(null,201))),g=r.a.lazy(()=>t.e(8).then(t.bind(null,202))),w=r.a.lazy(()=>Promise.resolve().then(t.bind(null,83))),y=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{to:"/quotes"},"quotes"),r.a.createElement("br",null),r.a.createElement(d.b,{to:"/infinite-scroll"},"infinite-scroll"),r.a.createElement("br",null),r.a.createElement(d.b,{to:"/joke-teller"},"joke-teller"),r.a.createElement("br",null),r.a.createElement(d.b,{to:"/music-player"},"music-player"),r.a.createElement("br",null),r.a.createElement(d.b,{to:"/paint-clone"},"paint-clone"),r.a.createElement("br",null),r.a.createElement(d.b,{to:"/video-player"},"video-player"),r.a.createElement("br",null),r.a.createElement(d.b,{to:"/sorting-visualizer"},"sorting-visualizer")),E=()=>r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(d.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0},r.a.createElement(y,null)),r.a.createElement(u.a,{path:"/quotes"},r.a.createElement(m,null)),r.a.createElement(u.a,{path:"/infinite-scroll"},r.a.createElement(h,null)),r.a.createElement(u.a,{path:"/joke-teller"},r.a.createElement(p,null)),r.a.createElement(u.a,{path:"/music-player"},r.a.createElement(b,null)),r.a.createElement(u.a,{path:"/paint-clone"},r.a.createElement(f,null)),r.a.createElement(u.a,{path:"/video-player"},r.a.createElement(g,null)),r.a.createElement(u.a,{path:"/sorting-visualizer"},r.a.createElement(c.ThemeProvider,null,r.a.createElement(w,null)))))),v=document.querySelector("#app");o.a.render(r.a.createElement(()=>r.a.createElement(l.d,null,r.a.createElement(s.a,{value:{revalidateOnFocus:!1,revalidateOnReconnect:!1,fetcher:(...e)=>fetch(...e).then(e=>e.json())}},r.a.createElement(E,null))),null),v)},37:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return s})),t.d(n,"e",(function(){return x})),t.d(n,"d",(function(){return O}));var a=t(0),r=t.n(a);const i=e=>{const{animated:n,sources:t,alt:a,className:i}=e;return r.a.createElement("picture",null,t.map(({media:e,animatedSrc:t,src:a})=>r.a.createElement("source",{key:e,media:e,srcSet:n?t:a})),r.a.createElement("img",{alt:a,className:i}))};var o=t(5);const l=o.d.div`
  height: 12px;
  cursor: ${({disabled:e})=>e?"default":"pointer"};
  background-color: lightgrey;
`,s=o.d.div`
  height: 100%;
  background-color: darkgrey;
`,c=e=>{const{value:n,disabled:t=!1,max:a=100,className:i,onClick:o}=e;return r.a.createElement(l,{onClick:e=>{if(t||!o)return;const n=e.currentTarget.offsetWidth,r=e.nativeEvent.offsetX;o(r/n*a)},role:"progressbar",disabled:t,className:i},r.a.createElement(s,{style:{width:n/a*100+"%"}}))};var d=t(82),u=t(196),m=t(184),h=t(185),p=t(186),b=t(187),f=t(84);const g=Object(d.a)(),w={primary:[g.palette.primary.dark,g.palette.primary.main,g.palette.primary.light],secondary:[g.palette.secondary.dark,g.palette.secondary.main,g.palette.secondary.light]},y=[g.spacing(0),g.spacing(1),g.spacing(2),g.spacing(3),g.spacing(4)],E=Object(u.a)(m.a,Object(h.a)(Object(p.a)(b.a)),f.a)(g.breakpoints.values),v={sm:g.breakpoints.up("sm"),md:g.breakpoints.up("md"),lg:g.breakpoints.up("lg"),xl:g.breakpoints.up("xl")},x={mui:g,systemUI:{fontSizes:[12,14,16,20,24,32,48,64],colors:w,space:y,breakpoints:E,mediaQueries:v,shadows:g.shadows,transitions:g.transitions}};var k=t(188),z=t(75),C=t.n(z),$=t(53),S={insert:"head",singleton:!1};C()($.a,S),$.a.locals;const O=({theme:e=x,children:n})=>r.a.createElement(k.a,{theme:e.mui},r.a.createElement(o.b,{theme:e.systemUI},n))},52:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return i}));const a=(e,n)=>new Array(e).fill(void 0).map(()=>Math.round(Math.random()*n+1)),r=e=>("0"+(""+Math.floor(e))).slice(-2),i=e=>{const n=e%60;return`${r((e-n)/60%60)}:${r(n)}`}},53:function(e,n,t){"use strict";var a=t(29),r=t.n(a),i=t(76),o=t(77),l=r()((function(e){return e[1]}));l.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Changa:wght@700;800&display=swap);"]),l.i(i.a),l.i(o.a),l.push([e.i,"\n",""]),n.a=l},76:function(e,n,t){"use strict";var a=t(29),r=t.n(a)()((function(e){return e[1]}));r.push([e.i,'/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Remove the margin and padding in all browsers.\n */\n\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\n\nul {\n  list-style: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n  text-align: left;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\niframe {\n  border: 0;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]),n.a=r},77:function(e,n,t){"use strict";var a=t(29),r=t.n(a),i=t(78),o=t.n(i),l=t(79),s=r()((function(e){return e[1]})),c=o()(l.a);s.push([e.i,"@font-face {\n  font-family: OzCaramel;\n  src: url("+c+");\n}\n\nbody {\n  margin: 0;\n  font-family: OzCaramel, sans-serif;\n}\n\nbutton {\n  background-color: transparent;\n  outline: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  font: inherit;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\na:active {\n  color: inherit;\n}\n\na:focus {\n  outline: none;\n  outline-offset: 0;\n}\n",""]),n.a=s},79:function(e,n,t){"use strict";n.a="assets/OzCaramel.66b65d249f00bdd65b6a062d7ef49d04.ttf"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return S})),t.d(n,"ThemeProvider",(function(){return R}));var a=t(52),r=t(19),i=t(0),o=t.n(i),l=t(5);const s=l.d.button`
  border-radius: 20px;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;

  ${({theme:e})=>l.c`
    box-shadow: ${e.shadows[1]};
    transition-duration: ${e.transitions.duration.shorter}ms;
    padding: ${e.space[1]}px ${e.space[3]}px;
    background: ${e.colors.blue};
    color: ${e.colors.white};
    font-size: ${e.fontSizes[1]}px;

    &:active {
      box-shadow: ${e.shadows[0]};
    }
    &:hover {
      background: ${e.colors.yellow};
    }

    ${e.mediaQueries.sm} {
      font-size: ${e.fontSizes[3]}px;
    }
  `}

  ${({active:e,theme:n})=>e&&l.c`
      background: ${n.colors.yellow};
      box-shadow: ${n.shadows[0]};
    `}
`;var c=t(193);const d={height:48},u={height:12},m=Object(l.d)(c.a)`
  ${({theme:e})=>l.c`
    &.MuiSlider-root {
      height: ${u.height}px;
      padding: ${(d.height-u.height)/2}px 0;
    }

    .MuiSlider-thumb {
      width: 12px;
      border-radius: 20px;
      box-shadow: ${e.shadows[1]};
      background: ${e.colors.yellow};

      height: ${d.height}px;
      margin-top: -${(d.height-u.height)/2}px;
    }

    .MuiSlider-track,
    .MuiSlider-rail {
      border-radius: 20px;
      background: ${e.colors.blue};

      height: ${u.height}px;
    }

    .MuiSlider-rail {
      box-shadow: ${e.shadows[1]};
    }

    .MuiSlider-thumb:hover {
      box-shadow: ${e.shadows[1]};
    }

    .MuiSlider-thumb.Mui-focusVisible {
      box-shadow: ${e.shadows[0]};
    }
  `}
`,h=e=>{const{min:n,max:t,value:a,defaultValue:r,onChange:i,onChangeCommitted:l}=e;return o.a.createElement(m,{min:n,max:t,value:a,defaultValue:r,onChange:(e,n)=>i&&i(n),onChangeCommitted:(e,n)=>l&&l(n)})};var p=t(189),b=t(190);const f=l.d.div`
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;

  ${({theme:e})=>l.c`
      color: ${e.colors.purple};

      ${e.mediaQueries.sm} {
        font-size: 24px;
      }
    `};
`,g=l.d.div`
  display: grid;
  ${({theme:e})=>l.c`
    ${e.mediaQueries.sm} {
      row-gap: ${e.space[.5]}px;
    }
  `}
`,w=l.d.div`
  ${({theme:e})=>l.c`
    display: grid;
    justify-content: space-between;
    row-gap: ${e.space[3]}px;

    ${m} {
      width: 282px;
    }

    ${g}:last-of-type > ${f} {
      ${e.mediaQueries.sm} {
        justify-self: end;
      }
    }

    ${e.mediaQueries.sm} {
      grid-template-columns: auto auto;
    }
  `}
`,y=l.d.div`
  font-family: "Changa", sans-serif;

  ${s} {
    width: 100%;
  }
`,E=e=>{const{chart:n,defaultArrayLength:t,defaultSpeed:a,onSpeedChange:r,onArrayLengthChange:i,onSort:l}=e;return o.a.createElement(y,null,o.a.createElement(p.a,null,o.a.createElement(b.a,{container:!0,spacing:2,justify:"center"},o.a.createElement(b.a,{item:!0,xs:6,sm:3,lg:2},o.a.createElement(s,{onClick:()=>l&&l("bubble")},"bubble")),o.a.createElement(b.a,{item:!0,xs:6,sm:3,lg:2},o.a.createElement(s,{onClick:()=>l&&l("selection")},"selection")),o.a.createElement(b.a,{item:!0,xs:6,sm:3,lg:2},o.a.createElement(s,{onClick:()=>l&&l("merge")},"merge")),o.a.createElement(b.a,{item:!0,xs:6,sm:3,lg:2},o.a.createElement(s,{onClick:()=>l&&l("quick")},"quick"))),o.a.createElement(b.a,{container:!0,justify:"center"},o.a.createElement(b.a,{item:!0,xs:12,lg:8},n)),o.a.createElement(b.a,{container:!0,justify:"center"},o.a.createElement(b.a,{item:!0,xs:12,lg:8},o.a.createElement(w,null,o.a.createElement(g,null,o.a.createElement(f,null,"array length"),o.a.createElement(h,{min:2,max:60,defaultValue:t,onChangeCommitted:e=>i&&i(e)})),o.a.createElement(g,null,o.a.createElement(f,null,"speed"),o.a.createElement(h,{min:4,max:100,defaultValue:a,onChangeCommitted:e=>r&&r(e)})))))))},v=40,x=40,k=500-x-40,z=500-v-40,C="grey",$="lightblue",S=()=>{const e=Object(i.useRef)(null),n=Object(i.useRef)(),t=Object(i.useRef)(10),[l,s]=Object(i.useState)(Object(a.a)(t.current,2*t.current)),[c,d]=Object(i.useState)(80),u=Object(i.useMemo)(()=>Object(r.d)([100,1],[0,1e3])(c),[c]);Object(i.useEffect)(()=>{const t=Object(r.a)(l),a=Object(r.d)().domain([0,t]).range([0,z]),i=Object(r.c)().domain(Object(r.b)(0,l.length)).range([0,k]).padding(.1),o=Object(r.e)(e.current).style("background-color","pink").append("g").attr("transform",`translate(${x}, ${v})`);return n.current=o.selectAll("rect").data(l).enter().append("rect").attr("fill",C).attr("width",i.bandwidth()).attr("height",a).attr("x",(e,n)=>i(n)||null).attr("y",e=>z-a(e)).nodes().map((e,n)=>({value:l[n],node:e})),()=>{o.remove()}},[l]);const m=e=>n=>Object(r.e)(n.node).transition().duration(u).attr("fill",e).end(),h=m($),p=m(C),b=async(e,n,t)=>{if(n===t)return;const a=Object(r.e)(e[n].node),i=Object(r.e)(e[t].node),o=+a.attr("x"),l=+i.attr("x");await Promise.all([a.transition().duration(u).attr("x",l).end(),i.transition().duration(u).attr("x",o).end()]);const s=e[n];e[n]=e[t],e[t]=s},f=async(e,n=0,t=e.length-1)=>{if(n>=t)return;const a=Math.floor((n+t)/2);await f(e,n,a),await f(e,a+1,t);const r=[];let i=n,o=a+1;for(;i<=a&&o<=t;){const n=e[i],t=e[o];await Promise.all([h(n),h(t)]),n.value===t.value?(r.push(n),r.push(t),i++,o++):n.value<t.value?(r.push(n),i++):n.value>t.value&&(r.push(t),o++),await Promise.all([p(n),p(t)])}for(;i<=a;){const n=e[i];await h(n),r.push(n),i++,await p(n)}for(;o<=t;){const n=e[o];await h(n),r.push(n),o++,await p(n)}for(let a=n;a<t+1;a++){const t=e[a],i=r[a-n],o=e.indexOf(i);a!==o&&(await Promise.all([h(t),h(i)]),await b(e,a,o),await Promise.all([p(t),p(i)]))}},g=async(e,n=0,t=e.length-1)=>{if(n>=t)return e;const a=await(async(e,n,t)=>{const a=e[t];let r=n;await Promise.all([h(a),h(e[r])]);for(let i=n;i<t;i++){const n=e[i];await h(n),n.value<a.value&&(r!==i&&(await b(e,r,i),await Promise.all([p(e[r]),p(e[i])])),r++,await h(e[r])),r!==i&&await p(n)}return t!==r?(await b(e,t,r),await Promise.all([p(e[t]),p(e[r])])):await p(e[r]),r})(e,n,t);return await g(e,n,a-1),await g(e,a+1,t),e},w={bubble:async()=>{if(void 0===n.current)return;const e=n.current;for(let n=1;n<e.length;n++)for(let t=0;t<e.length-n;t++){const n=e[t],a=e[t+1];await Promise.all([h(n),h(a)]),n.value>a.value&&await b(e,t,t+1),await Promise.all([p(n),p(a)])}},selection:async()=>{if(void 0===n.current)return;const e=n.current;for(let n=0;n<e.length;n++){let t=n;await h(e[n]);for(let a=n;a<e.length;a++){const r=e[a];await h(r),r.value<e[t].value?(t!==n&&await p(e[t]),t=a):a!==n&&await p(r)}n!==t?(await b(e,n,t),await Promise.all([p(e[n]),p(e[t])])):await p(e[n])}},merge:async()=>{void 0!==n.current&&await f(n.current)},quick:async()=>{void 0!==n.current&&await g(n.current)}};return o.a.createElement(E,{defaultArrayLength:t.current,defaultSpeed:c,chart:o.a.createElement("svg",{ref:e,width:500,height:500}),onArrayLengthChange:e=>{t.current=e,s(Object(a.a)(e,2*e))},onSpeedChange:d,onSort:e=>w[e]()})};var O=t(37),j=t(195);const I=Object(j.a)(O.e.systemUI,{colors:{blue:"#8ce1fc",yellow:"#fcca1d",purple:"#8C44FD",white:"#ffffff"},fontSizes:[18,22,28,30,36],shadows:["1px 1px 4px rgba(0, 0, 0, 0.25)","4px 4px 4px rgba(0, 0, 0, 0.25)"]}),R=({children:e})=>o.a.createElement(l.b,{theme:I},e)}},[[161,2,0]]]);