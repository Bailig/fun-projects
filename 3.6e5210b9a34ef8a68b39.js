(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{77:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const n=e=>("0"+(""+Math.floor(e))).slice(-2),r=e=>{const t=e%60;return`${n((e-t)/60%60)}:${n(t)}`}},79:function(e,t,a){"use strict";a.r(t),a.d(t,"MusicPlayer",(function(){return O})),a.d(t,"MusicName",(function(){return p})),a.d(t,"AuthorName",(function(){return l})),a.d(t,"PlayButton",(function(){return m})),a.d(t,"PreviousButton",(function(){return g})),a.d(t,"NextButton",(function(){return x})),a.d(t,"MusicNumber",(function(){return f})),a.d(t,"MusicControls",(function(){return $})),a.d(t,"MusicPlayerSoupRoot",(function(){return w})),a.d(t,"ProgressLabel",(function(){return k})),a.d(t,"progressBar",(function(){return S})),a.d(t,"ProgressBar",(function(){return M})),a.d(t,"chopstickImage",(function(){return y})),a.d(t,"ChopstickImage",(function(){return j})),a.d(t,"MusicPlayerRoot",(function(){return C})),a.d(t,"SoupImage",(function(){return d})),a.d(t,"soupImage",(function(){return u})),a.d(t,"SoupImageRoot",(function(){return c})),a.d(t,"default",(function(){return P}));var n=a(0),r=a.n(n),s=a(74),o=a(34),i=a(17);const u={width:{downXS:290,upSM:426},height:{downXS:290,upSM:426}},c=Object(i.c)(o.a)`
  ${({theme:e})=>i.b`
      ${e.breakpoints.down("xs")} {
        width: ${u.width.downXS}px;
        height: ${u.height.downXS}px;
      }

      ${e.breakpoints.up("sm")} {
        width: ${u.width.upSM}px;
        height: ${u.height.upSM}px;
      }
    `}
`,d=Object(n.memo)(e=>{const{animated:t}=e,a=Object(s.a)();return r.a.createElement(c,{animated:t,sources:[{media:a.breakpoints.down("xs").replace("@media ",""),src:"assets/soup-xs.812694cb924029f7b50805e28cd1c907.png",animatedSrc:"assets/soup-xs.2dc4f4090c67c98975c173f9d7ddb9c2.gif"},{media:a.breakpoints.up("sm").replace("@media ",""),src:"assets/soup-up-sm.6db4cc0e594d5d90b7c8963afa3a0895.png",animatedSrc:"assets/soup-up-sm.acc807d2099e9ab4ca8823ba2671bf16.gif"}],alt:"soup"})});const p=i.c.a`
  font-weight: 500;

  ${({theme:e})=>i.b`
      ${e.breakpoints.down("xs")} {
        font-size: 20px;
      }

      ${e.breakpoints.up("sm")} {
        font-size: 38px;
      }
    `}
`,l=i.c.div`
  font-weight: 300;

  ${({theme:e})=>i.b`
      ${e.breakpoints.down("xs")} {
        font-size: 14px;
      }

      ${e.breakpoints.up("sm")} {
        font-size: 22px;
      }
    `}
`,b=({disabled:e})=>i.b`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:active {
    filter: none;
  }
  ${e?i.b`
        opacity: 0.3;
        cursor: default;
      `:i.b`
        &:hover {
          filter: drop-shadow(0px 4px 4px #ffc700);
        }
      `}
`,h=i.b`
  ${({theme:e})=>i.b`
      ${e.breakpoints.down("xs")} {
        width: 28px;
        height: 24px;
      }

      ${e.breakpoints.up("sm")} {
        width: 40px;
        height: 35px;
      }
    `}
`,m=i.c.button`
  ${b}
  ${({theme:e,playing:t})=>i.b`
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
`,g=i.c.button`
  ${b}
  ${h}
  ${({theme:e})=>i.b`
      ${e.breakpoints.down("xs")} {
        background-image: url(${"assets/previous-xs.c616f4d68337802c793c6b147a579080.png"});
      }

      ${e.breakpoints.up("sm")} {
        background-image: url(${"assets/previous-up-sm.8de22869d7d047c546a4558b64edb15c.png"});
      }
    `}
`,x=i.c.button`
  ${b}
  ${h}
  ${({theme:e})=>i.b`
      ${e.breakpoints.down("xs")} {
        background-image: url(${"assets/next-xs.6dbe2bd013009389d6cc2807e182f1fa.png"});
      }

      ${e.breakpoints.up("sm")} {
        background-image: url(${"assets/next-up-sm.10090aba8570ba4374f430ae3808737b.png"});
      }
    `}
`,f=i.c.div`
  color: #4ebf4b;

  ${({theme:e})=>i.b`
      ${e.breakpoints.down("xs")} {
        font-size: 14px;
      }

      ${e.breakpoints.up("sm")} {
        font-size: 18px;
      }
    `}
`,$=i.c.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: end;
  justify-content: center;

  ${({theme:e})=>i.b`
    ${g} {
      z-index: 100;
      margin-right: -${e.spacing(2)}px;
    }
    ${x} {
      z-index: 100;
      margin-left: -${e.spacing(2)}px;
    }
  `}
`,w=i.c.div`
  position: relative;

  ${f}, ${p}, ${$}, ${l} {
    position: absolute;
  }

  ${p}, ${$}, ${l} {
    left: 50%;
    transform: translateX(-50%);
  }

  ${({theme:e})=>i.b`
      ${e.breakpoints.down("xs")} {
        width: ${u.width.downXS}px;
        height: ${u.height.downXS}px;

        ${f} {
          top: 88px;
          left: 76px;
        }
        ${p} {
          top: 127px;
        }
        ${$} {
          top: 186px;
        }
        ${l} {
          top: 154px;
        }
      }

      ${e.breakpoints.up("sm")} {
        width: ${u.width.upSM}px;
        height: ${u.height.upSM}px;

        ${f} {
          top: 129px;
          left: 112px;
        }
        ${p} {
          top: 185px;
        }
        ${$} {
          top: 278px;
        }
        ${l} {
          top: 230px;
        }
      }
    `}
`,k=i.c.div`
  ${({theme:e})=>i.b`
      ${e.breakpoints.down("xs")} {
        font-size: 14px;
      }

      ${e.breakpoints.up("sm")} {
        font-size: 18px;
      }
    `}
`,S={width:{downXS:262,upSM:388},height:{downXS:8,upSM:11}},M=Object(i.c)(o.b)`
  clip-path: polygon(0 0, 100% 25%, 100% 75%, 0% 100%);
  background-color: #c9b9a9;

  ${({theme:e})=>i.b`
      ${e.breakpoints.down("xs")} {
        width: ${S.width.downXS}px;
        height: ${S.height.downXS}px;
      }

      ${e.breakpoints.up("sm")} {
        width: ${S.width.upSM}px;
        height: ${S.height.upSM}px;
      }
    `}

  ${o.c} {
    background-color: #805034;
  }
`,y={width:{downXS:260,upSM:388},height:{downXS:53,upSM:83}},j=i.c.div`
  background-image: url(${"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYwIiBoZWlnaHQ9IjUzIiB2aWV3Qm94PSIwIDAgMjYwIDUzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMjU5LjMwOSA3LjQ0Mjc1TDEuMDA3NjEgNTEuMDQzMUwwLjM4MTY0NiA0Ny42NjAzTDI1OC4wMiAtMS4xNDkxMmUtMDVMMjU5LjMwOSA3LjQ0Mjc1WiIgZmlsbD0iIzgwNTAzNCIvPgo8L3N2Zz4K"});
  background-size: contain;
  background-repeat: no-repeat;

  ${({theme:e})=>i.b`
      ${e.breakpoints.down("xs")} {
        width: ${y.width.downXS}px;
        height: ${y.height.downXS}px;
      }

      ${e.breakpoints.up("sm")} {
        width: ${y.width.upSM}px;
        height: ${y.height.upSM}px;
      }
    `}
`,C=i.c.div`
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

    ${({theme:e})=>i.b`
        ${e.breakpoints.down("xs")} {
          width: ${S.width.downXS}px;
        }

        ${e.breakpoints.up("sm")} {
          width: ${S.width.upSM}px;
        }
      `}
  }
`;var v=a(77);const O=e=>{const{musics:t}=e,{src:a,name:s,author:o,url:i,musicIndex:u,playing:c,totalMusicCount:b,musicRef:h,currentTime:S,currentTimeText:y,duration:O,durationText:E,loading:P,handlePrevious:T,handleNext:z,handlePause:I,handlePlay:N,handleTimeUpdate:D,handleProgressBarClick:X,handleDurationChange:B,handleLoaded:A}=(e=>{const[t,a]=Object(n.useState)(0),[r,s]=Object(n.useState)(!1),[o,i]=Object(n.useState)(0),[u,c]=Object(n.useState)(0),[d,p]=Object(n.useState)(!0),l=Object(n.useRef)(!1),b=Object(n.useRef)(null),{src:h,name:m,author:g,url:x}=e[t],f=e.length,$=Object(v.a)(u),w=Object(v.a)(o),k=u/o;Object(n.useEffect)(()=>{s(!1),c(0),p(!0)},[t]);const S=Object(n.useCallback)(()=>{b.current.play(),l.current=!0,s(!0)},[]);Object(n.useEffect)(()=>{l.current&&!d&&S()},[S,d]);const M=Object(n.useCallback)(()=>{0!==t&&a(t-1)},[t]),y=Object(n.useCallback)(()=>{t!==f-1&&a(t+1)},[t,f]),j=Object(n.useCallback)(()=>{b.current.pause(),l.current=!1,s(!1)},[]),C=Object(n.useCallback)(e=>{if(!r)return;const t=e.currentTarget;c(t.currentTime)},[r]),O=Object(n.useCallback)(e=>{const t=b.current;t.currentTime=e,c(t.currentTime)},[]),E=Object(n.useCallback)(e=>{i(e.currentTarget.duration)},[]),P=Object(n.useCallback)(()=>{p(!1)},[]);return{src:h,name:m,author:g,url:x,musicIndex:t,playing:r,progress:k,duration:o,currentTime:u,totalMusicCount:f,musicRef:b,currentTimeText:$,durationText:w,loading:d,handlePrevious:M,handleNext:y,handlePause:j,handlePlay:S,handleTimeUpdate:C,handleProgressBarClick:O,handleDurationChange:E,handleLoaded:P}})(t);return r.a.createElement(C,null,r.a.createElement(w,null,r.a.createElement(d,{animated:c}),r.a.createElement(f,null,u+1,"/",b),r.a.createElement(p,{href:i,target:"_blank"},P?"loading":s),r.a.createElement(l,null,o),r.a.createElement($,null,r.a.createElement(g,{disabled:P,onClick:T}),r.a.createElement(m,{disabled:P,onClick:()=>c?I():N(),playing:c}),r.a.createElement(x,{disabled:P,onClick:z}))),r.a.createElement(k,null,r.a.createElement("div",null,y),r.a.createElement("div",null,E)),r.a.createElement(M,{value:S,max:O,disabled:P,onClick:X}),r.a.createElement(j,null),r.a.createElement("audio",{src:a,ref:h,onEnded:z,onTimeUpdate:D,onDurationChange:B,onCanPlayThrough:A}))};const E=[{src:"assets/cant-you-see.232bb858084f1f454bfd49d834b2623e.mp3",name:"Can't you see",author:"Dyalla",credit:"Can't you see by Dyalla",url:"https://soundcloud.com/dyallas/cant-you-see"},{src:"assets/holiday-blues.fd1e13384a3f32ff381a036543d30831.mp3",name:"Holiday blues",author:"Joakim Karud",credit:"Holiday blues by Joakim Karud",url:"https://soundcloud.com/joakimkarud/holiday-blues"},{src:"assets/strawberry.211ab273323322d6237e633605957746.mp3",name:"Strawberry",author:"Jeff Kaale",credit:"Strawberry by Jeff Kaale",url:"https://soundcloud.com/jeff-kaale/strawberry"}],P=()=>r.a.createElement(O,{musics:E})}}]);