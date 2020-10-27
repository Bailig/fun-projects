(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{69:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return c}));var n=a(0),s=a.n(n);const r=e=>{const{animated:t,sources:a,alt:n,className:r}=e;return s.a.createElement("picture",null,a.map(({media:e,animatedSrc:a,src:n})=>s.a.createElement("source",{media:e,srcSet:t?a:n})),s.a.createElement("img",{alt:n,className:r}))};var i=a(28);const o=i.c.div`
  height: 12px;
  cursor: pointer;
  background-color: lightgrey;
`,c=i.c.div`
  height: 100%;
  background-color: darkgrey;
`,d=e=>{const{value:t,className:a,onClick:n}=e;return s.a.createElement(o,{onClick:e=>{if(!n)return;const t=e.currentTarget.offsetWidth,a=e.nativeEvent.offsetX;n(a/t)},role:"progressbar",className:a},s.a.createElement(c,{style:{width:100*t+"%"}}))}},74:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(0),s=a.n(n),r=a(29),i=a(28);const o=i.c.button`
  background: #f48b95;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  padding: 0.8em;
  color: #f3ede0;

  &:hover {
    box-shadow: 0px 4px 4px #746d57;
  }

  &:active {
    box-shadow: none;
  }

  ${({disabled:e})=>e&&i.b`
      cursor: default;
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
    `}

  ${({theme:e})=>i.b`
      ${e.breakpoints.down("xs")} {
        font-size: 18px;
      }

      ${e.breakpoints.up("sm")} {
        font-size: 26px;
      }
    `}
`,c=i.c.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  ${o} {
    position: absolute;
    left: 20%;
    top: 10%;
  }
`;var d=a(66),l=a(69);const u=3e3,b=Object(i.c)(l.a)`
  ${({theme:e})=>i.b`
      ${e.breakpoints.down("xs")} {
        width: 361px;
        height: 470px;
      }

      ${e.breakpoints.up("sm")} {
        width: 665px;
        height: 867px;
      }
    `}
`,p=e=>{const{animated:t}=e,a=Object(d.a)();return s.a.createElement(b,{animated:t,sources:[{media:a.breakpoints.down("xs").replace("@media ",""),src:"assets/onigiri-xs.b9dda0017e5a0681fc78d7605aa93a94.png",animatedSrc:"assets/onigiri-xs.238149d6b85da357eefaee06af37b139.gif"},{media:a.breakpoints.up("sm").replace("@media ",""),src:"assets/onigiri-up-sm.ffcb9dfab5a53be0b5a7067661326050.png",animatedSrc:"assets/onigiri-up-sm.6290bba389a04d4f9849def06c96d402.gif"}],alt:"onigiri"})},m=e=>{const{audioSrc:t,loading:a,onEnded:r}=e,i=Object(n.useRef)(null),[d,l]=Object(n.useState)(!1),[b,m]=Object(n.useState)(!1);return s.a.createElement(c,null,s.a.createElement(p,{animated:b}),s.a.createElement(o,{onClick:()=>{m(!0),setTimeout(()=>{i.current.play(),m(!1),l(!0)},u)},disabled:b||d||a},"Tell me a joke"),s.a.createElement("audio",{ref:i,src:t,onEnded:()=>{l(!1),r()}}))},{TEXT_TO_SPEECH_API_KEY:f}=Object({TEXT_TO_SPEECH_API_KEY:"e6cb0150821f40f2b73ecaa2d0ac7425"}),g=async(...e)=>(await fetch(...e)).text(),h=()=>{const e=Object(r.b)("https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist"),t=e.data&&("setup"in(a=e.data)?`${a.setup} ${a.delivery}`:a.joke);var a;const n=Object(r.b)((i=t)?`https://api.voicerss.org/?key=${f}&hl=en-us&c=MP3&b64=true&src=${i}`:null,g);var i;const o=n.isValidating||e.isValidating;return s.a.createElement(m,{loading:o,audioSrc:n.data,onEnded:()=>e.mutate()})}}}]);