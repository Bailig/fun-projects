(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{73:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return g}));var n=t(0),s=t.n(n),i=t(29),o=t(28);const r=o.c.button`
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

  ${({disabled:e})=>e&&o.b`
      cursor: default;
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
    `}

  ${({theme:e})=>o.b`
      ${e.breakpoints.down("xs")} {
        font-size: 18px;
      }

      ${e.breakpoints.up("sm")} {
        font-size: 26px;
      }
    `}
`,c=o.c.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  ${r} {
    position: absolute;
    left: 20%;
    top: 10%;
  }
`;var d=t(66);const b=3e3,p=o.c.img`
  ${({theme:e})=>o.b`
      ${e.breakpoints.down("xs")} {
        width: 361px;
        height: 470px;
      }

      ${e.breakpoints.up("sm")} {
        width: 665px;
        height: 867px;
      }
    `}
`,l=e=>{const{animated:a}=e,t=Object(d.a)();return s.a.createElement("picture",null,s.a.createElement("source",{media:t.breakpoints.down("xs").replace("@media ",""),srcSet:a?"assets/onigiri-xs.238149d6b85da357eefaee06af37b139.gif":"assets/onigiri-xs.b9dda0017e5a0681fc78d7605aa93a94.png"}),s.a.createElement("source",{media:t.breakpoints.up("sm").replace("@media ",""),srcSet:a?"assets/onigiri-up-sm.6290bba389a04d4f9849def06c96d402.gif":"assets/onigiri-up-sm.ffcb9dfab5a53be0b5a7067661326050.png"}),s.a.createElement(p,{src:"assets/onigiri-up-sm.ffcb9dfab5a53be0b5a7067661326050.png",alt:"onigiri"}))},u=e=>{const{audioSrc:a,loading:t,onEnded:i}=e,o=Object(n.useRef)(null),[d,p]=Object(n.useState)(!1),[u,m]=Object(n.useState)(!1);return s.a.createElement(c,null,s.a.createElement(l,{animated:u}),s.a.createElement(r,{onClick:()=>{m(!0),setTimeout(()=>{o.current.play(),m(!1),p(!0)},b)},disabled:u||d||t},"Tell me a joke"),s.a.createElement("audio",{ref:o,src:a,onEnded:()=>{p(!1),i()}}))},{TEXT_TO_SPEECH_API_KEY:m}=Object({TEXT_TO_SPEECH_API_KEY:"e6cb0150821f40f2b73ecaa2d0ac7425"}),f=async(...e)=>(await fetch(...e)).text(),g=()=>{const e=Object(i.b)("https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist"),a=e.data&&("setup"in(t=e.data)?`${t.setup} ${t.delivery}`:t.joke);var t;const n=Object(i.b)((o=a)?`https://api.voicerss.org/?key=${m}&hl=en-us&c=MP3&b64=true&src=${o}`:null,f);var o;const r=n.isValidating||e.isValidating;return s.a.createElement(u,{loading:r,audioSrc:n.data,onEnded:()=>e.mutate()})}}}]);