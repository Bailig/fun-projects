(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{60:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(0),n=a.n(r),o=a(18);const c=o.d.div`
  height: 12px;
  cursor: pointer;
  border: solid 1px black;
`,s=o.d.div`
  height: 100%;
  background-color: black;
`,l=e=>{const{value:t,className:a,onClick:r}=e;return n.a.createElement(c,{onClick:e=>{if(!r)return;const t=e.currentTarget.offsetWidth,a=e.nativeEvent.offsetX;r(a/t)},role:"progressbar",className:a},n.a.createElement(s,{style:{width:100*t+"%"}}))}},61:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const r=e=>("0"+(""+Math.floor(e))).slice(-2),n=e=>{const t=e%60;return`${r((e-t)/60%60)}:${r(t)}`}},64:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var r=a(60),n=a(61),o=a(0),c=a.n(o),s=a.p+"5099d9d9a04390cc604eee7a1c3e8172.svg",l=a.p+"030882ee45470aa7c3d01648088651a5.svg",i=a.p+"b3e1c77ae5a57e862a312242b4b51cee.svg",u=a.p+"9fee9d38aa00397af6ba69d8ecf4601c.svg",d=a(18);const p=d.d.div`
  font-family: sans-serif;
`,f=d.d.div`
  font-weight: 500;
  text-align: center;
  color: #ffdd63;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  ${({theme:e})=>d.c`
      ${e.breakpoints.down("xs")} {
        font-size: 20px;
      }

      ${e.breakpoints.between("sm","md")} {
        font-size: 46px;
      }

      ${e.breakpoints.up("lg")} {
        font-size: 54px;
      }
    `}
`,b=d.d.div`
  font-weight: 300;
  text-align: center;
  color: #f2ebdf;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

  ${({theme:e})=>d.c`
      ${e.breakpoints.down("xs")} {
        font-size: 14px;
      }

      ${e.breakpoints.between("sm","md")} {
        font-size: 26px;
      }

      ${e.breakpoints.up("lg")} {
        font-size: 30px;
      }
    `}
`,m=d.d.div`
  color: #f2ebdf;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ${({theme:e})=>d.c`
      ${e.breakpoints.down("xs")} {
        font-size: 8px;
        line-height: 9px;
      }

      ${e.breakpoints.up("sm","md")} {
        font-size: 12px;
        line-height: 14px;
      }
    `}
`,x=d.d.img`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:active {
    filter: none;
  }
  &:hover {
    filter: drop-shadow(0px 4px 4px #ffc700);
  }
`,h=[{src:"assets/cant-you-see.232bb858084f1f454bfd49d834b2623e.mp3",name:"Can't you see",author:"Dyalla",credit:"Can't you see by Dyalla",url:"https://soundcloud.com/dyallas/cant-you-see"},{src:"assets/holiday-blues.fd1e13384a3f32ff381a036543d30831.mp3",name:"Holiday blues",author:"Joakim Karud",credit:"Holiday blues by Joakim Karud",url:"https://soundcloud.com/joakimkarud/holiday-blues"},{src:"assets/strawberry.211ab273323322d6237e633605957746.mp3",name:"Strawberry",author:"Jeff Kaale",credit:"Strawberry by Jeff Kaale",url:"https://soundcloud.com/jeff-kaale/strawberry"}],v=()=>{const[e,t]=Object(o.useState)(0),[a,d]=Object(o.useState)(!1),[v,g]=Object(o.useState)(0),[k,y]=Object(o.useState)(0),[w,E]=Object(o.useState)(0),$=Object(o.useRef)(null),{src:j,name:C,author:O,url:z}=h[e],T=h.length;Object(o.useEffect)(()=>{var e;g(0),a&&(null===(e=$.current)||void 0===e||e.play())},[e]);const S=()=>{e!==T-1&&t(e+1)};return c.a.createElement(p,null,c.a.createElement(f,null,C),c.a.createElement(b,null,O),c.a.createElement("a",{href:z,target:"_blank",rel:"noreferrer"},"link to original music"),c.a.createElement(m,null,c.a.createElement("div",null,Object(n.a)(w)),c.a.createElement("div",null,Object(n.a)(k))),c.a.createElement(r.a,{value:v,onClick:e=>{g(e);const t=$.current;t.currentTime=e*t.duration,E(t.currentTime)}}),c.a.createElement("button",{type:"button",onClick:()=>{0!==e&&t(e-1)}},c.a.createElement(x,{src:u,alt:"previous"})),c.a.createElement("button",{type:"button",onClick:()=>{return a?(null===(e=$.current)||void 0===e||e.pause(),void d(!1)):(()=>{var e;null===(e=$.current)||void 0===e||e.play(),d(!0)})();var e}},c.a.createElement(x,{src:a?l:i,alt:a?"pause":"play"})),c.a.createElement("button",{type:"button",onClick:S},c.a.createElement(x,{src:s,alt:"next"})),c.a.createElement("audio",{src:j,ref:$,onEnded:S,onTimeUpdate:e=>{if(!a)return;const t=e.currentTarget;g(t.currentTime/t.duration),E(t.currentTime)},onDurationChange:e=>{y(e.currentTarget.duration)}}),c.a.createElement("div",null,e+1,"/",T))}}}]);