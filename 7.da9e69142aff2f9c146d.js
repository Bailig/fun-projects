(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{169:function(e,t,a){"use strict";a.r(t),a.d(t,"JokeTeller",(function(){return p})),a.d(t,"Button",(function(){return u})),a.d(t,"JokeTellerRoot",(function(){return b})),a.d(t,"OnigiriImage",(function(){return l})),a.d(t,"onigiriImage",(function(){return r})),a.d(t,"OnigiriGIFRoot",(function(){return c})),a.d(t,"default",(function(){return x}));var n=a(0),i=a.n(n),o=a(162),s=a(42),d=a(19);const r={duration:3e3},c=Object(d.c)(s.a)`
  ${({theme:e})=>d.b`
      ${e.breakpoints.down("xs")} {
        width: 361px;
        height: 470px;
      }

      ${e.breakpoints.up("sm")} {
        width: 665px;
        height: 867px;
      }
    `}
`,l=e=>{const{animated:t}=e,a=Object(o.a)();return i.a.createElement(c,{animated:t,sources:[{media:a.breakpoints.down("xs").replace("@media ",""),src:"assets/onigiri-xs.b9dda0017e5a0681fc78d7605aa93a94.png",animatedSrc:"assets/onigiri-xs.238149d6b85da357eefaee06af37b139.gif"},{media:a.breakpoints.up("sm").replace("@media ",""),src:"assets/onigiri-up-sm.ffcb9dfab5a53be0b5a7067661326050.png",animatedSrc:"assets/onigiri-up-sm.6290bba389a04d4f9849def06c96d402.gif"}],alt:"onigiri"})},u=d.c.button`
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

  ${({disabled:e})=>e&&d.b`
      cursor: default;
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
    `}

  ${({theme:e})=>d.b`
      ${e.breakpoints.down("xs")} {
        font-size: 18px;
      }

      ${e.breakpoints.up("sm")} {
        font-size: 26px;
      }
    `}
`,b=d.c.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  ${u} {
    position: absolute;
    left: 20%;
    top: 10%;
  }
`,p=e=>{const{audioSrc:t,loading:a,onEnded:o}=e,{audioRef:s,animated:d,disabled:r,handleClick:c,handleEnded:p}=((e,t)=>{const a=Object(n.useRef)(null),[i,o]=Object(n.useState)(!1),[s,d]=Object(n.useState)(!1),r=s||i||e,c=Object(n.useCallback)(()=>{a.current.play(),d(!0),o(!0)},[]),l=Object(n.useCallback)(()=>{o(!1),d(!1),t()},[t]);return{audioRef:a,playing:i,animated:s,disabled:r,handleClick:c,handleEnded:l}})(a,o);return i.a.createElement(b,null,i.a.createElement(l,{animated:d}),i.a.createElement(u,{onClick:c,disabled:r},"Tell me a joke"),i.a.createElement("audio",{ref:s,src:t,onEnded:p}))};var f=a(41);const{TEXT_TO_SPEECH_API_KEY:h}=Object({TEXT_TO_SPEECH_API_KEY:"e6cb0150821f40f2b73ecaa2d0ac7425",UNSPLASH_ACCESS_KEY:"0NSr7g5aLAthlhl_UdRGh12uxyo_N6QMHA9SUGVgc8M"}),m=async e=>(await fetch(e)).text(),g=e=>Object(f.b)((e=>e?`https://api.voicerss.org/?key=${h}&hl=en-us&c=MP3&b64=true&src=${e}`:null)(e),m),x=()=>{const e=(()=>{const e=Object(f.b)("https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist"),t=Object(n.useCallback)(()=>e.mutate(),[e]);return{...e,handleRefetch:t}})(),{jokeText:t}=(a=e.data,{jokeText:Object(n.useMemo)(()=>a&&(e=>"setup"in e?`${e.setup} ${e.delivery}`:e.joke)(a),[a])});var a;const o=g(t),s=o.isValidating||e.isValidating;return i.a.createElement(p,{loading:s,audioSrc:o.data,onEnded:e.handleRefetch})}}}]);