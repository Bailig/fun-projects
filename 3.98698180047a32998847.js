(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{69:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),i=a.n(n),r=a(28);const o=r.c.div`
  height: 12px;
  cursor: pointer;
  border: solid 1px black;
`,c=r.c.div`
  height: 100%;
  background-color: black;
`,l=e=>{const{value:t,className:a,onClick:n}=e;return i.a.createElement(o,{onClick:e=>{if(!n)return;const t=e.currentTarget.offsetWidth,a=e.nativeEvent.offsetX;n(a/t)},role:"progressbar",className:a},i.a.createElement(c,{style:{width:100*t+"%"}}))}},70:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));const n=e=>("0"+(""+Math.floor(e))).slice(-2),i=e=>{const t=e%60;return`${n((e-t)/60%60)}:${n(t)}`}},74:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return I}));var n=a(69),i=a(70),r=a(0),o=a.n(r),c=a(28);const l=c.c.div`
  font-family: sans-serif;
`,s=c.c.div`
  font-weight: 500;
  text-align: center;
  color: #ffdd63;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  ${({theme:e})=>c.b`
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
`,u=c.c.div`
  font-weight: 300;
  text-align: center;
  color: #f2ebdf;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

  ${({theme:e})=>c.b`
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
`,d=c.c.div`
  color: #f2ebdf;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ${({theme:e})=>c.b`
      ${e.breakpoints.down("xs")} {
        font-size: 8px;
        line-height: 9px;
      }

      ${e.breakpoints.up("sm","md")} {
        font-size: 12px;
        line-height: 14px;
      }
    `}
`,g=c.c.img`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:active {
    filter: none;
  }
  &:hover {
    filter: drop-shadow(0px 4px 4px #ffc700);
  }
`,M=[{src:"assets/cant-you-see.232bb858084f1f454bfd49d834b2623e.mp3",name:"Can't you see",author:"Dyalla",credit:"Can't you see by Dyalla",url:"https://soundcloud.com/dyallas/cant-you-see"},{src:"assets/holiday-blues.fd1e13384a3f32ff381a036543d30831.mp3",name:"Holiday blues",author:"Joakim Karud",credit:"Holiday blues by Joakim Karud",url:"https://soundcloud.com/joakimkarud/holiday-blues"},{src:"assets/strawberry.211ab273323322d6237e633605957746.mp3",name:"Strawberry",author:"Jeff Kaale",credit:"Strawberry by Jeff Kaale",url:"https://soundcloud.com/jeff-kaale/strawberry"}],I=()=>{const[e,t]=Object(r.useState)(0),[a,c]=Object(r.useState)(!1),[I,b]=Object(r.useState)(0),[m,j]=Object(r.useState)(0),[p,y]=Object(r.useState)(0),D=Object(r.useRef)(null),{src:f,name:x,author:T,url:h}=M[e],z=M.length;Object(r.useEffect)(()=>{var e;b(0),a&&(null===(e=D.current)||void 0===e||e.play())},[e]);const w=()=>{e!==z-1&&t(e+1)};return o.a.createElement(l,null,o.a.createElement(s,null,x),o.a.createElement(u,null,T),o.a.createElement("a",{href:h,target:"_blank",rel:"noreferrer"},"link to original music"),o.a.createElement(d,null,o.a.createElement("div",null,Object(i.a)(p)),o.a.createElement("div",null,Object(i.a)(m))),o.a.createElement(n.a,{value:I,onClick:e=>{b(e);const t=D.current;t.currentTime=e*t.duration,y(t.currentTime)}}),o.a.createElement("button",{type:"button",onClick:()=>{0!==e&&t(e-1)}},o.a.createElement(g,{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAxOCAyNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjA2OTggNi44Mjk5VjEzLjgyNzJWMjAuODI5OUwxMS41Njk4IDE3LjMyNThMNi4wNjk4MiAxMy44MjcyTDExLjU2OTggMTAuMzI4NUwxNy4wNjk4IDYuODI5OVoiIGZpbGw9IiNGMkVCREYiLz4KPHBhdGggZD0iTTUuMjY5ODQgNy4zODk4OUwxMC41NDk4IDAuOTI5OTMyVjEzLjg0OTlWMjYuNzc5OUw1LjI2OTg0IDIwLjMwOTlMLTAuMDAwMTIyMDcgMTMuODQ5OUw1LjI2OTg0IDcuMzg5ODlaIiBmaWxsPSIjRjJFQkRGIi8+Cjwvc3ZnPgo=",alt:"previous"})),o.a.createElement("button",{type:"button",onClick:()=>{return a?(null===(e=D.current)||void 0===e||e.pause(),void c(!1)):(()=>{var e;null===(e=D.current)||void 0===e||e.play(),c(!0)})();var e}},o.a.createElement(g,{src:a?"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAzMyA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iMC45MzMzNSIgd2lkdGg9IjkuNTMzMzMiIGhlaWdodD0iMzguMTMzMyIgZmlsbD0iI0YyRUJERiIvPgo8cmVjdCB4PSIyMy40NjY3IiB5PSIwLjkzMzM1IiB3aWR0aD0iOS41MzMzMyIgaGVpZ2h0PSIzOC4xMzMzIiBmaWxsPSIjRjJFQkRGIi8+Cjwvc3ZnPgo=":"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA0NSA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ0Ljc3IDI1Ljg1TDIyLjM4IDM4Ljc4TDAgNTEuN1YyNS44NVYwTDIyLjM4IDEyLjkzTDQ0Ljc3IDI1Ljg1WiIgZmlsbD0iI0YyRUJERiIvPgo8L3N2Zz4K",alt:a?"pause":"play"})),o.a.createElement("button",{type:"button",onClick:w},o.a.createElement(g,{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAxOCAyNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgNi44Mjk5VjEzLjgyNzJWMjAuODI5OUw1LjUgMTcuMzI1OEwxMSAxMy44MjcyTDUuNSAxMC4zMjg1TDAgNi44Mjk5WiIgZmlsbD0iI0YyRUJERiIvPgo8cGF0aCBkPSJNMTEuOCA3LjM4OTg5TDYuNTIwMDIgMC45Mjk5MzJWMTMuODQ5OVYyNi43Nzk5TDExLjggMjAuMzA5OUwxNy4wNjk5IDEzLjg0OTlMMTEuOCA3LjM4OTg5WiIgZmlsbD0iI0YyRUJERiIvPgo8L3N2Zz4K",alt:"next"})),o.a.createElement("audio",{src:f,ref:D,onEnded:w,onTimeUpdate:e=>{if(!a)return;const t=e.currentTarget;b(t.currentTime/t.duration),y(t.currentTime)},onDurationChange:e=>{j(e.currentTarget.duration)}}),o.a.createElement("div",null,e+1,"/",z))}}}]);