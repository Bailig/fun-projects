(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{192:function(e,a,t){"use strict";t.r(a),t.d(a,"JokeTeller",(function(){return p})),t.d(a,"Button",(function(){return u})),t.d(a,"JokeTellerRoot",(function(){return b})),t.d(a,"OnigiriImage",(function(){return l})),t.d(a,"onigiriImage",(function(){return s})),t.d(a,"OnigiriGIFRoot",(function(){return c})),t.d(a,"default",(function(){return x}));var n=t(0),i=t.n(n),d=t(74),o=t(50),r=t(26);const s={duration:3e3},c=Object(r.c)(o.a)`
  ${({theme:e})=>r.b`
      width: 361px;
      height: 470px;

      ${e.mediaQueries.sm} {
        width: 665px;
        height: 867px;
      }
    `}
`,l=e=>{const{animated:a}=e,t=Object(d.a)();return i.a.createElement(c,{animated:a,sources:[{media:t.breakpoints.down("xs").replace("@media ",""),src:"assets/onigiri-xs.b9dda0017e5a0681fc78d7605aa93a94.png",animatedSrc:"assets/onigiri-xs.238149d6b85da357eefaee06af37b139.gif"},{media:t.breakpoints.up("sm").replace("@media ",""),src:"assets/onigiri-up-sm.ffcb9dfab5a53be0b5a7067661326050.png",animatedSrc:"assets/onigiri-up-sm.6290bba389a04d4f9849def06c96d402.gif"}],alt:"onigiri"})},u=r.c.button`
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

  ${({disabled:e})=>e&&r.b`
      cursor: default;
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
    `}

  ${({theme:e})=>r.b`
      ${e.mediaQueries.sm} {
        font-size: 26px;
      }
    `}
`,b=r.c.div`
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
`,p=e=>{const{audioSrc:a,loading:t,onEnded:d}=e,{audioRef:o,animated:r,disabled:s,handleClick:c,handleEnded:p}=((e,a)=>{const t=Object(n.useRef)(null),[i,d]=Object(n.useState)(!1),[o,r]=Object(n.useState)(!1),s=o||i||e,c=Object(n.useCallback)(()=>{t.current.play(),r(!0),d(!0)},[]),l=Object(n.useCallback)(()=>{d(!1),r(!1),a()},[a]);return{audioRef:t,playing:i,animated:o,disabled:s,handleClick:c,handleEnded:l}})(t,d);return i.a.createElement(b,null,i.a.createElement(l,{animated:r}),i.a.createElement(u,{onClick:c,disabled:s},"Tell me a joke"),i.a.createElement("audio",{ref:o,src:a,onEnded:p}))};var f=t(51);const{TEXT_TO_SPEECH_API_KEY:m}=Object({TEXT_TO_SPEECH_API_KEY:"e6cb0150821f40f2b73ecaa2d0ac7425",UNSPLASH_ACCESS_KEY:"0NSr7g5aLAthlhl_UdRGh12uxyo_N6QMHA9SUGVgc8M"}),h=async e=>(await fetch(e)).text(),g=e=>Object(f.b)((e=>e?`https://api.voicerss.org/?key=${m}&hl=en-us&c=MP3&b64=true&src=${e}`:null)(e),h),x=()=>{const e=(()=>{const e=Object(f.b)("https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist"),a=Object(n.useCallback)(()=>e.mutate(),[e]);return{...e,handleRefetch:a}})(),{jokeText:a}=(t=e.data,{jokeText:Object(n.useMemo)(()=>t&&(e=>"setup"in e?`${e.setup} ${e.delivery}`:e.joke)(t),[t])});var t;const d=g(a),o=d.isValidating||e.isValidating;return i.a.createElement(p,{loading:o,audioSrc:d.data,onEnded:e.handleRefetch})}}}]);