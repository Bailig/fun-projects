(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{69:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return p}));var n=a(0),s=a.n(n);const r=e=>{const{animated:t,sources:a,alt:n,className:r}=e;return s.a.createElement("picture",null,a.map(({media:e,animatedSrc:a,src:n})=>s.a.createElement("source",{media:e,srcSet:t?a:n})),s.a.createElement("img",{alt:n,className:r}))};var c=a(28);const o=c.c.div`
  height: 12px;
  cursor: pointer;
  border: solid 1px black;
`,i=c.c.div`
  height: 100%;
  background-color: black;
`,p=e=>{const{value:t,className:a,onClick:n}=e;return s.a.createElement(o,{onClick:e=>{if(!n)return;const t=e.currentTarget.offsetWidth,a=e.nativeEvent.offsetX;n(a/t)},role:"progressbar",className:a},s.a.createElement(i,{style:{width:100*t+"%"}}))}},70:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));const n=e=>("0"+(""+Math.floor(e))).slice(-2),s=e=>{const t=e%60;return`${n((e-t)/60%60)}:${n(t)}`}},72:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var n=a(0),s=a.n(n),r=a(69),c=a(70),o=a(28);const i={downXS:290,upSM:426},p={downXS:290,upSM:426},u=Object(o.c)(r.a)`
  ${({theme:e})=>o.b`
      ${e.breakpoints.down("xs")} {
        width: ${i.downXS}px;
        height: ${p.downXS}px;
      }

      ${e.breakpoints.up("sm")} {
        width: ${i.upSM}px;
        height: ${p.upSM}px;
      }
    `}
`,d=o.c.a`
  font-weight: 500;

  ${({theme:e})=>o.b`
      ${e.breakpoints.down("xs")} {
        font-size: 20px;
      }

      ${e.breakpoints.up("sm")} {
        font-size: 38px;
      }
    `}
`,l=o.c.div`
  font-weight: 300;

  ${({theme:e})=>o.b`
      ${e.breakpoints.down("xs")} {
        font-size: 14px;
      }

      ${e.breakpoints.up("sm")} {
        font-size: 22px;
      }
    `}
`,b=o.c.div`
  ${({theme:e})=>o.b`
      ${e.breakpoints.down("xs")} {
        font-size: 14px;
      }

      ${e.breakpoints.up("sm")} {
        font-size: 18px;
      }
    `}
`,m=o.b`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:active {
    filter: none;
  }
  &:hover {
    filter: drop-shadow(0px 4px 4px #ffc700);
  }
`,f=o.b`
  ${({theme:e})=>o.b`
      ${e.breakpoints.down("xs")} {
        width: 28px;
        height: 24px;
      }

      ${e.breakpoints.up("sm")} {
        width: 40px;
        height: 35px;
      }
    `}
`,$=o.c.button`
  ${m}
  ${({theme:e,isPlaying:t})=>o.b`
      ${e.breakpoints.down("xs")} {
        width: 55px;
        height: 49px;
        background-image: url(${t?"assets/pause-xs.641b30fbc31c54596062107fbc5ae9d3.png":"assets/play-xs.698791dea690c1f008d815529919a595.png"});
      }

      ${e.breakpoints.up("sm")} {
        width: 81px;
        height: 71px;
        background-image: url(${t?"assets/pause-up-sm.86975dcdae9ec4b6b24609d26b2951e4.png":"assets/play-up-sm.1e98962e365eb36c5fb404825718a4ab.png"});
      }
    `}
`,x=o.c.button`
  ${m}
  ${f}
  ${({theme:e})=>o.b`
      ${e.breakpoints.down("xs")} {
        background-image: url(${"assets/previous-xs.c616f4d68337802c793c6b147a579080.png"});
      }

      ${e.breakpoints.up("sm")} {
        background-image: url(${"assets/previous-up-sm.8de22869d7d047c546a4558b64edb15c.png"});
      }
    `}
`,h=o.c.button`
  ${m}
  ${f}
  ${({theme:e})=>o.b`
      ${e.breakpoints.down("xs")} {
        background-image: url(${"assets/next-xs.6dbe2bd013009389d6cc2807e182f1fa.png"});
      }

      ${e.breakpoints.up("sm")} {
        background-image: url(${"assets/next-up-sm.10090aba8570ba4374f430ae3808737b.png"});
      }
    `}
`,g=o.c.div`
  color: #4ebf4b;

  ${({theme:e})=>o.b`
      ${e.breakpoints.down("xs")} {
        font-size: 14px;
      }

      ${e.breakpoints.up("sm")} {
        font-size: 18px;
      }
    `}
`,k=o.c.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: end;
  justify-content: center;

  ${({theme:e})=>o.b`
    ${x} {
      z-index: 100;
      margin-right: -${e.spacing(2)}px;
    }
    ${h} {
      z-index: 100;
      margin-left: -${e.spacing(2)}px;
    }
  `}
`,w=o.c.div`
  position: relative;

  ${g}, ${d}, ${k}, ${l} {
    position: absolute;
  }

  ${d}, ${k}, ${l} {
    left: 50%;
    transform: translateX(-50%);
  }

  ${({theme:e})=>o.b`
      ${e.breakpoints.down("xs")} {
        width: ${i.downXS}px;
        height: ${p.downXS}px;

        ${g} {
          top: 88px;
          left: 76px;
        }
        ${d} {
          top: 127px;
        }
        ${k} {
          top: 186px;
        }
        ${l} {
          top: 154px;
        }
      }

      ${e.breakpoints.up("sm")} {
        width: ${i.upSM}px;
        height: ${p.upSM}px;

        ${g} {
          top: 129px;
          left: 112px;
        }
        ${d} {
          top: 185px;
        }
        ${k} {
          top: 278px;
        }
        ${l} {
          top: 230px;
        }
      }
    `}
`,y=o.c.div`
  background: #f2ebdf;
  color: #ffc700;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;var v=a(66);const E=Object(n.memo)(e=>{const{animated:t}=e,a=Object(v.a)();return s.a.createElement(u,{animated:t,sources:[{media:a.breakpoints.down("xs").replace("@media ",""),src:"assets/soup-xs.812694cb924029f7b50805e28cd1c907.png",animatedSrc:"assets/soup-xs.2dc4f4090c67c98975c173f9d7ddb9c2.gif"},{media:a.breakpoints.up("sm").replace("@media ",""),src:"assets/soup-up-sm.6db4cc0e594d5d90b7c8963afa3a0895.png",animatedSrc:"assets/soup-up-sm.acc807d2099e9ab4ca8823ba2671bf16.gif"}],alt:"soup"})}),S=e=>{const{musics:t}=e,[a,o]=Object(n.useState)(0),[i,p]=Object(n.useState)(!1),[u,m]=Object(n.useState)(0),[f,v]=Object(n.useState)(0),[S,j]=Object(n.useState)(0),O=Object(n.useRef)(null),{src:z,name:C,author:T,url:X}=t[a],M=t.length;Object(n.useEffect)(()=>{var e;m(0),i&&(null===(e=O.current)||void 0===e||e.play())},[a]);const J=()=>{a!==M-1&&o(a+1)};return s.a.createElement(y,null,s.a.createElement(w,null,s.a.createElement(E,{animated:i}),s.a.createElement(g,null,a+1,"/",M),s.a.createElement(d,{href:X,target:"_blank"},C),s.a.createElement(l,null,T),s.a.createElement(k,null,s.a.createElement(x,{onClick:()=>{0!==a&&o(a-1)}}),s.a.createElement($,{onClick:()=>i?(O.current.pause(),void p(!1)):(O.current.play(),void p(!0)),isPlaying:i}),s.a.createElement(h,{onClick:J})),s.a.createElement(b,null,s.a.createElement("div",null,Object(c.a)(S)),s.a.createElement("div",null,Object(c.a)(f))),s.a.createElement(r.b,{value:u,onClick:e=>{m(e);const t=O.current;t.currentTime=e*t.duration,j(t.currentTime)}}),s.a.createElement("audio",{src:z,ref:O,onEnded:J,onTimeUpdate:e=>{if(!i)return;const t=e.currentTarget;m(t.currentTime/t.duration),j(t.currentTime)},onDurationChange:e=>{v(e.currentTarget.duration)}})))},j=[{src:"assets/cant-you-see.232bb858084f1f454bfd49d834b2623e.mp3",name:"Can't you see",author:"Dyalla",credit:"Can't you see by Dyalla",url:"https://soundcloud.com/dyallas/cant-you-see"},{src:"assets/holiday-blues.fd1e13384a3f32ff381a036543d30831.mp3",name:"Holiday blues",author:"Joakim Karud",credit:"Holiday blues by Joakim Karud",url:"https://soundcloud.com/joakimkarud/holiday-blues"},{src:"assets/strawberry.211ab273323322d6237e633605957746.mp3",name:"Strawberry",author:"Jeff Kaale",credit:"Strawberry by Jeff Kaale",url:"https://soundcloud.com/jeff-kaale/strawberry"}],O=()=>s.a.createElement(S,{musics:j})}}]);