(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{64:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(0),o=a.n(n),i=a(49);const{TEXT_TO_SPEECH_API_KEY:c}=Object({TEXT_TO_SPEECH_API_KEY:"e6cb0150821f40f2b73ecaa2d0ac7425"});var r=a(18),s=a.p+"1c1a027f1919d823d8a7c28e79b7901c.png",d=a.p+"1983e35091ad23b4241b1cfd1a232ba1.png";const p=r.d.div`
  ${({theme:e})=>r.c`
      ${e.breakpoints.down("md")} {
        width: 308px;
        height: 333px;
        background-image: url(${s});
      }

      ${e.breakpoints.up("lg")} {
        width: 504px;
        height: 545px;
        background-image: url(${d});
      }
    `}
`,b=r.d.button`
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

  ${({disabled:e})=>e&&r.c`
      cursor: default;
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
    `}

  ${({theme:e})=>r.c`
      ${e.breakpoints.down("md")} {
        font-size: 10px;
      }

      ${e.breakpoints.up("lg")} {
        font-size: 14px;
      }
    `}
`,l=r.d.div`
  position: relative;

  ${b} {
    position: absolute;
    ${({theme:e})=>r.c`
      right: ${e.spacing(2)}px;
      bottom: ${e.spacing(4)}px;
    `}
  }
`,u=r.d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #67beb1;
`,h=async(...e)=>(await fetch(...e)).text(),g=async(...e)=>(await fetch(...e)).json(),x={revalidateOnFocus:!1,revalidateOnReconnect:!1},f=()=>{const{data:e,mutate:t}=Object(i.a)("https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist",g,x),a=(()=>{if(e)return"setup"in e?`${e.setup} ${e.delivery}`:e.joke})(),{data:r}=Object(i.a)(a?`https://api.voicerss.org/?key=${c}&hl=en-us&c=MP3&b64=true&src=${a}`:null,h,x),s=Object(n.useRef)(null),[d,f]=Object(n.useState)(!1),m=!r||!e;return o.a.createElement(u,null,o.a.createElement(l,null,o.a.createElement(p,null),o.a.createElement(b,{type:"button",onClick:()=>{s.current.play(),f(!0)},disabled:d||m},"Ask Onigiri for a joke")),o.a.createElement("audio",{ref:s,src:r,onEnded:()=>{t(),f(!1)}}))}}}]);