(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{69:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return p})),a.d(t,"c",(function(){return i}));var n=a(0),s=a.n(n);const r=e=>{const{animated:t,sources:a,alt:n,className:r}=e;return s.a.createElement("picture",null,a.map(({media:e,animatedSrc:a,src:n})=>s.a.createElement("source",{media:e,srcSet:t?a:n})),s.a.createElement("img",{alt:n,className:r}))};var o=a(28);const c=o.c.div`
  height: 12px;
  cursor: pointer;
  background-color: lightgrey;
`,i=o.c.div`
  height: 100%;
  background-color: darkgrey;
`,p=e=>{const{value:t,className:a,onClick:n}=e;return s.a.createElement(c,{onClick:e=>{if(!n)return;const t=e.currentTarget.offsetWidth,a=e.nativeEvent.offsetX;n(a/t)},role:"progressbar",className:a},s.a.createElement(i,{style:{width:100*t+"%"}}))}},70:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));const n=e=>("0"+(""+Math.floor(e))).slice(-2),s=e=>{const t=e%60;return`${n((e-t)/60%60)}:${n(t)}`}},72:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var n=a(0),s=a.n(n),r=a(70),o=a(69),c=a(28);const i={downXS:290,upSM:426},p={downXS:290,upSM:426},u=Object(c.c)(o.a)`
  ${({theme:e})=>c.b`
      ${e.breakpoints.down("xs")} {
        width: ${i.downXS}px;
        height: ${p.downXS}px;
      }

      ${e.breakpoints.up("sm")} {
        width: ${i.upSM}px;
        height: ${p.upSM}px;
      }
    `}
`,d=c.c.a`
  font-weight: 500;

  ${({theme:e})=>c.b`
      ${e.breakpoints.down("xs")} {
        font-size: 20px;
      }

      ${e.breakpoints.up("sm")} {
        font-size: 38px;
      }
    `}
`,l=c.c.div`
  font-weight: 300;

  ${({theme:e})=>c.b`
      ${e.breakpoints.down("xs")} {
        font-size: 14px;
      }

      ${e.breakpoints.up("sm")} {
        font-size: 22px;
      }
    `}
`,b=c.b`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:active {
    filter: none;
  }
  &:hover {
    filter: drop-shadow(0px 4px 4px #ffc700);
  }
`,m=c.b`
  ${({theme:e})=>c.b`
      ${e.breakpoints.down("xs")} {
        width: 28px;
        height: 24px;
      }

      ${e.breakpoints.up("sm")} {
        width: 40px;
        height: 35px;
      }
    `}
`,$=c.c.button`
  ${b}
  ${({theme:e,isPlaying:t})=>c.b`
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
`,x=c.c.button`
  ${b}
  ${m}
  ${({theme:e})=>c.b`
      ${e.breakpoints.down("xs")} {
        background-image: url(${"assets/previous-xs.c616f4d68337802c793c6b147a579080.png"});
      }

      ${e.breakpoints.up("sm")} {
        background-image: url(${"assets/previous-up-sm.8de22869d7d047c546a4558b64edb15c.png"});
      }
    `}
`,h=c.c.button`
  ${b}
  ${m}
  ${({theme:e})=>c.b`
      ${e.breakpoints.down("xs")} {
        background-image: url(${"assets/next-xs.6dbe2bd013009389d6cc2807e182f1fa.png"});
      }

      ${e.breakpoints.up("sm")} {
        background-image: url(${"assets/next-up-sm.10090aba8570ba4374f430ae3808737b.png"});
      }
    `}
`,g=c.c.div`
  color: #4ebf4b;

  ${({theme:e})=>c.b`
      ${e.breakpoints.down("xs")} {
        font-size: 14px;
      }

      ${e.breakpoints.up("sm")} {
        font-size: 18px;
      }
    `}
`,f=c.c.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: end;
  justify-content: center;

  ${({theme:e})=>c.b`
    ${x} {
      z-index: 100;
      margin-right: -${e.spacing(2)}px;
    }
    ${h} {
      z-index: 100;
      margin-left: -${e.spacing(2)}px;
    }
  `}
`,w=c.c.div`
  position: relative;

  ${g}, ${d}, ${f}, ${l} {
    position: absolute;
  }

  ${d}, ${f}, ${l} {
    left: 50%;
    transform: translateX(-50%);
  }

  ${({theme:e})=>c.b`
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
        ${f} {
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
        ${f} {
          top: 278px;
        }
        ${l} {
          top: 230px;
        }
      }
    `}
`,k=c.c.div`
  ${({theme:e})=>c.b`
      ${e.breakpoints.down("xs")} {
        font-size: 14px;
      }

      ${e.breakpoints.up("sm")} {
        font-size: 18px;
      }
    `}
`,S={downXS:262,upSM:388},y={downXS:8,upSM:11},M=Object(c.c)(o.b)`
  clip-path: polygon(0 0, 100% 25%, 100% 75%, 0% 100%);
  background-color: #c9b9a9;

  ${({theme:e})=>c.b`
      ${e.breakpoints.down("xs")} {
        width: ${S.downXS}px;
        height: ${y.downXS}px;
      }

      ${e.breakpoints.up("sm")} {
        width: ${S.upSM}px;
        height: ${y.upSM}px;
      }
    `}

  ${o.c} {
    background-color: #805034;
  }
`,v={downXS:260,upSM:388},j={downXS:53,upSM:83},E=c.c.div`
  background-image: url(${"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYwIiBoZWlnaHQ9IjUzIiB2aWV3Qm94PSIwIDAgMjYwIDUzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMjU5LjMwOSA3LjQ0Mjc1TDEuMDA3NjEgNTEuMDQzMUwwLjM4MTY0NiA0Ny42NjAzTDI1OC4wMiAtMS4xNDkxMmUtMDVMMjU5LjMwOSA3LjQ0Mjc1WiIgZmlsbD0iIzgwNTAzNCIvPgo8L3N2Zz4K"});
  background-size: contain;
  background-repeat: no-repeat;

  ${({theme:e})=>c.b`
      ${e.breakpoints.down("xs")} {
        width: ${v.downXS}px;
        height: ${j.downXS}px;
      }

      ${e.breakpoints.up("sm")} {
        width: ${v.upSM}px;
        height: ${j.upSM}px;
      }
    `}
`,z=c.c.div`
  background: #f2ebdf;
  color: #ffc700;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  ${k} {
    display: flex;
    justify-content: space-between;

    ${({theme:e})=>c.b`
        ${e.breakpoints.down("xs")} {
          width: ${S.downXS}px;
        }

        ${e.breakpoints.up("sm")} {
          width: ${S.upSM}px;
        }
      `}
  }
`;var X=a(66);const O=Object(n.memo)(e=>{const{animated:t}=e,a=Object(X.a)();return s.a.createElement(u,{animated:t,sources:[{media:a.breakpoints.down("xs").replace("@media ",""),src:"assets/soup-xs.812694cb924029f7b50805e28cd1c907.png",animatedSrc:"assets/soup-xs.2dc4f4090c67c98975c173f9d7ddb9c2.gif"},{media:a.breakpoints.up("sm").replace("@media ",""),src:"assets/soup-up-sm.6db4cc0e594d5d90b7c8963afa3a0895.png",animatedSrc:"assets/soup-up-sm.acc807d2099e9ab4ca8823ba2671bf16.gif"}],alt:"soup"})}),N=e=>{const{musics:t}=e,[a,o]=Object(n.useState)(0),[c,i]=Object(n.useState)(!1),[p,u]=Object(n.useState)(0),[b,m]=Object(n.useState)(0),[S,y]=Object(n.useState)(0),v=Object(n.useRef)(null),{src:j,name:X,author:N,url:D}=t[a],C=t.length;Object(n.useEffect)(()=>{var e;u(0),c&&(null===(e=v.current)||void 0===e||e.play())},[a]);const T=()=>{a!==C-1&&o(a+1)};return s.a.createElement(z,null,s.a.createElement(w,null,s.a.createElement(O,{animated:c}),s.a.createElement(g,null,a+1,"/",C),s.a.createElement(d,{href:D,target:"_blank"},X),s.a.createElement(l,null,N),s.a.createElement(f,null,s.a.createElement(x,{onClick:()=>{0!==a&&o(a-1)}}),s.a.createElement($,{onClick:()=>c?(v.current.pause(),void i(!1)):(v.current.play(),void i(!0)),isPlaying:c}),s.a.createElement(h,{onClick:T}))),s.a.createElement(k,null,s.a.createElement("div",null,Object(r.a)(S)),s.a.createElement("div",null,Object(r.a)(b))),s.a.createElement(M,{value:p,onClick:e=>{u(e);const t=v.current;t.currentTime=e*t.duration,y(t.currentTime)}}),s.a.createElement(E,null),s.a.createElement("audio",{src:j,ref:v,onEnded:T,onTimeUpdate:e=>{if(!c)return;const t=e.currentTarget;u(t.currentTime/t.duration),y(t.currentTime)},onDurationChange:e=>{m(e.currentTarget.duration)}}))},D=[{src:"assets/cant-you-see.232bb858084f1f454bfd49d834b2623e.mp3",name:"Can't you see",author:"Dyalla",credit:"Can't you see by Dyalla",url:"https://soundcloud.com/dyallas/cant-you-see"},{src:"assets/holiday-blues.fd1e13384a3f32ff381a036543d30831.mp3",name:"Holiday blues",author:"Joakim Karud",credit:"Holiday blues by Joakim Karud",url:"https://soundcloud.com/joakimkarud/holiday-blues"},{src:"assets/strawberry.211ab273323322d6237e633605957746.mp3",name:"Strawberry",author:"Jeff Kaale",credit:"Strawberry by Jeff Kaale",url:"https://soundcloud.com/jeff-kaale/strawberry"}],C=()=>s.a.createElement(N,{musics:D})}}]);