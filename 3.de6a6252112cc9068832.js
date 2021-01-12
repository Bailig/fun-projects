(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{189:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));const n=(e,t)=>new Array(e).fill(void 0).map(()=>Math.round(Math.random()*t+1)),i=e=>("0"+(""+Math.floor(e))).slice(-2),r=e=>{const t=e%60;return`${i((e-t)/60%60)}:${i(t)}`}},190:function(e,t,a){"use strict";a.r(t),a.d(t,"MusicPlayer",(function(){return O})),a.d(t,"MusicName",(function(){return l})),a.d(t,"AuthorName",(function(){return p})),a.d(t,"PlayButton",(function(){return b})),a.d(t,"PreviousButton",(function(){return g})),a.d(t,"NextButton",(function(){return f})),a.d(t,"MusicNumber",(function(){return x})),a.d(t,"MusicControls",(function(){return $})),a.d(t,"MusicPlayerSoupRoot",(function(){return w})),a.d(t,"ProgressLabel",(function(){return y})),a.d(t,"progressBar",(function(){return j})),a.d(t,"ProgressBar",(function(){return M})),a.d(t,"chopstickImage",(function(){return k})),a.d(t,"ChopstickImage",(function(){return S})),a.d(t,"MusicPlayerRoot",(function(){return C})),a.d(t,"SoupImage",(function(){return d})),a.d(t,"soupImage",(function(){return c})),a.d(t,"SoupImageRoot",(function(){return o})),a.d(t,"default",(function(){return P}));var n=a(0),i=a.n(n),r=a(74),s=a(50),u=a(26);const c={width:{xs:290,sm:426},height:{xs:290,sm:426}},o=Object(u.c)(s.a)`
  ${({theme:e})=>u.b`
      width: ${c.width.xs}px;
      height: ${c.height.xs}px;

      ${e.mediaQueries.sm} {
        width: ${c.width.sm}px;
        height: ${c.height.sm}px;
      }
    `}
`,d=Object(n.memo)(e=>{const{animated:t}=e,a=Object(r.a)();return i.a.createElement(o,{animated:t,sources:[{media:a.breakpoints.down("xs").replace("@media ",""),src:"assets/soup-xs.812694cb924029f7b50805e28cd1c907.png",animatedSrc:"assets/soup-xs.2dc4f4090c67c98975c173f9d7ddb9c2.gif"},{media:a.breakpoints.up("sm").replace("@media ",""),src:"assets/soup-up-sm.6db4cc0e594d5d90b7c8963afa3a0895.png",animatedSrc:"assets/soup-up-sm.acc807d2099e9ab4ca8823ba2671bf16.gif"}],alt:"soup"})});const l=u.c.a`
  font-weight: 500;

  ${({theme:e})=>u.b`
      font-size: 20px;

      ${e.mediaQueries.sm} {
        font-size: 38px;
      }
    `}
`,p=u.c.div`
  font-weight: 300;

  ${({theme:e})=>u.b`
      font-size: 14px;

      ${e.mediaQueries.sm} {
        font-size: 22px;
      }
    `}
`,m=({disabled:e})=>u.b`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:active {
    filter: none;
  }
  ${e?u.b`
        opacity: 0.3;
        cursor: default;
      `:u.b`
        &:hover {
          filter: drop-shadow(0px 4px 4px #ffc700);
        }
      `}
`,h=u.b`
  ${({theme:e})=>u.b`
      width: 28px;
      height: 24px;

      ${e.mediaQueries.sm} {
        width: 40px;
        height: 35px;
      }
    `}
`,b=u.c.button`
  ${m}
  ${({theme:e,playing:t})=>u.b`
      width: 55px;
      height: 49px;
      background-image: url(${t?"assets/pause-xs.641b30fbc31c54596062107fbc5ae9d3.png":"assets/play-xs.698791dea690c1f008d815529919a595.png"});

      ${e.mediaQueries.sm} {
        width: 81px;
        height: 71px;
        background-image: url(${t?"assets/pause-up-sm.86975dcdae9ec4b6b24609d26b2951e4.png":"assets/play-up-sm.1e98962e365eb36c5fb404825718a4ab.png"});
      }
    `}
`,g=u.c.button`
  ${m}
  ${h}
  ${({theme:e})=>u.b`
      background-image: url(${"assets/previous-xs.c616f4d68337802c793c6b147a579080.png"});

      ${e.mediaQueries.sm} {
        background-image: url(${"assets/previous-up-sm.8de22869d7d047c546a4558b64edb15c.png"});
      }
    `}
`,f=u.c.button`
  ${m}
  ${h}
  ${({theme:e})=>u.b`
      background-image: url(${"assets/next-xs.6dbe2bd013009389d6cc2807e182f1fa.png"});

      ${e.mediaQueries.sm} {
        background-image: url(${"assets/next-up-sm.10090aba8570ba4374f430ae3808737b.png"});
      }
    `}
`,x=u.c.div`
  color: #4ebf4b;

  ${({theme:e})=>u.b`
      font-size: 14px;

      ${e.mediaQueries.sm} {
        font-size: 18px;
      }
    `}
`,$=u.c.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: end;
  justify-content: center;

  ${({theme:e})=>u.b`
    ${g} {
      z-index: 100;
      margin-right: -${e.space[2]}px;
    }
    ${f} {
      z-index: 100;
      margin-left: -${e.space[2]}px;
    }
  `}
`,w=u.c.div`
  position: relative;

  ${x}, ${l}, ${$}, ${p} {
    position: absolute;
  }

  ${l}, ${$}, ${p} {
    left: 50%;
    transform: translateX(-50%);
  }

  ${({theme:e})=>u.b`
      width: ${c.width.xs}px;
      height: ${c.height.xs}px;

      ${x} {
        top: 88px;
        left: 76px;
      }
      ${l} {
        top: 127px;
      }
      ${$} {
        top: 186px;
      }
      ${p} {
        top: 154px;
      }

      ${e.mediaQueries.sm} {
        width: ${c.width.sm}px;
        height: ${c.height.sm}px;

        ${x} {
          top: 129px;
          left: 112px;
        }
        ${l} {
          top: 185px;
        }
        ${$} {
          top: 278px;
        }
        ${p} {
          top: 230px;
        }
      }
    `}
`,y=u.c.div`
  ${({theme:e})=>u.b`
      font-size: 14px;

      ${e.mediaQueries.sm} {
        font-size: 18px;
      }
    `}
`,j={width:{downXS:262,upSM:388},height:{downXS:8,upSM:11}},M=Object(u.c)(s.b)`
  clip-path: polygon(0 0, 100% 25%, 100% 75%, 0% 100%);
  background-color: #c9b9a9;

  ${({theme:e})=>u.b`
      width: ${j.width.downXS}px;
      height: ${j.height.downXS}px;

      ${e.mediaQueries.sm} {
        width: ${j.width.upSM}px;
        height: ${j.height.upSM}px;
      }
    `}

  ${s.c} {
    background-color: #805034;
  }
`,k={width:{downXS:260,upSM:388},height:{downXS:53,upSM:83}},S=u.c.div`
  background-image: url(${"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYwIiBoZWlnaHQ9IjUzIiB2aWV3Qm94PSIwIDAgMjYwIDUzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMjU5LjMwOSA3LjQ0Mjc1TDEuMDA3NjEgNTEuMDQzMUwwLjM4MTY0NiA0Ny42NjAzTDI1OC4wMiAtMS4xNDkxMmUtMDVMMjU5LjMwOSA3LjQ0Mjc1WiIgZmlsbD0iIzgwNTAzNCIvPgo8L3N2Zz4K"});
  background-size: contain;
  background-repeat: no-repeat;

  ${({theme:e})=>u.b`
      width: ${k.width.downXS}px;
      height: ${k.height.downXS}px;

      ${e.mediaQueries.sm} {
        width: ${k.width.upSM}px;
        height: ${k.height.upSM}px;
      }
    `}
`,C=u.c.div`
  background: #f2ebdf;
  color: #ffc700;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  ${y} {
    display: flex;
    justify-content: space-between;

    ${({theme:e})=>u.b`
        width: ${j.width.downXS}px;

        ${e.mediaQueries.sm} {
          width: ${j.width.upSM}px;
        }
      `}
  }
`;var v=a(189);const O=e=>{const{musics:t}=e,{src:a,name:r,author:s,url:u,musicIndex:c,playing:o,totalMusicCount:m,musicRef:h,currentTime:j,currentTimeText:k,duration:O,durationText:E,loading:P,handlePrevious:T,handleNext:z,handlePause:I,handlePlay:Q,handleTimeUpdate:N,handleProgressBarClick:D,handleDurationChange:B,handleLoaded:A}=(e=>{const[t,a]=Object(n.useState)(0),[i,r]=Object(n.useState)(!1),[s,u]=Object(n.useState)(0),[c,o]=Object(n.useState)(0),[d,l]=Object(n.useState)(!0),p=Object(n.useRef)(!1),m=Object(n.useRef)(null),{src:h,name:b,author:g,url:f}=e[t],x=e.length,$=Object(v.b)(c),w=Object(v.b)(s),y=c/s;Object(n.useEffect)(()=>{r(!1),o(0),l(!0)},[t]);const j=Object(n.useCallback)(()=>{m.current.play(),p.current=!0,r(!0)},[]);Object(n.useEffect)(()=>{p.current&&!d&&j()},[j,d]);const M=Object(n.useCallback)(()=>{0!==t&&a(t-1)},[t]),k=Object(n.useCallback)(()=>{t!==x-1&&a(t+1)},[t,x]),S=Object(n.useCallback)(()=>{m.current.pause(),p.current=!1,r(!1)},[]),C=Object(n.useCallback)(e=>{if(!i)return;const t=e.currentTarget;o(t.currentTime)},[i]),O=Object(n.useCallback)(e=>{const t=m.current;t.currentTime=e,o(t.currentTime)},[]),E=Object(n.useCallback)(e=>{u(e.currentTarget.duration)},[]),P=Object(n.useCallback)(()=>{l(!1)},[]);return{src:h,name:b,author:g,url:f,musicIndex:t,playing:i,progress:y,duration:s,currentTime:c,totalMusicCount:x,musicRef:m,currentTimeText:$,durationText:w,loading:d,handlePrevious:M,handleNext:k,handlePause:S,handlePlay:j,handleTimeUpdate:C,handleProgressBarClick:O,handleDurationChange:E,handleLoaded:P}})(t);return i.a.createElement(C,null,i.a.createElement(w,null,i.a.createElement(d,{animated:o}),i.a.createElement(x,null,c+1,"/",m),i.a.createElement(l,{href:u,target:"_blank"},P?"loading":r),i.a.createElement(p,null,s),i.a.createElement($,null,i.a.createElement(g,{disabled:P,onClick:T}),i.a.createElement(b,{disabled:P,onClick:()=>o?I():Q(),playing:o}),i.a.createElement(f,{disabled:P,onClick:z}))),i.a.createElement(y,null,i.a.createElement("div",null,k),i.a.createElement("div",null,E)),i.a.createElement(M,{value:j,max:O,disabled:P,onClick:D}),i.a.createElement(S,null),i.a.createElement("audio",{src:a,ref:h,onEnded:z,onTimeUpdate:N,onDurationChange:B,onCanPlayThrough:A}))};const E=[{src:"assets/cant-you-see.232bb858084f1f454bfd49d834b2623e.mp3",name:"Can't you see",author:"Dyalla",credit:"Can't you see by Dyalla",url:"https://soundcloud.com/dyallas/cant-you-see"},{src:"assets/holiday-blues.fd1e13384a3f32ff381a036543d30831.mp3",name:"Holiday blues",author:"Joakim Karud",credit:"Holiday blues by Joakim Karud",url:"https://soundcloud.com/joakimkarud/holiday-blues"},{src:"assets/strawberry.211ab273323322d6237e633605957746.mp3",name:"Strawberry",author:"Jeff Kaale",credit:"Strawberry by Jeff Kaale",url:"https://soundcloud.com/jeff-kaale/strawberry"}],P=()=>i.a.createElement(O,{musics:E})}}]);