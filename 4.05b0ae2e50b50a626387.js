(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{45:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(0),r=n.n(a),c=n(22);const l=c.b.div`
  height: 12px;
  cursor: pointer;
  border: solid 1px black;
`,o=c.b.div`
  height: 100%;
  background-color: black;
`,u=e=>{const{value:t,className:n,onClick:a}=e;return r.a.createElement(l,{onClick:e=>{if(!a)return;const t=e.currentTarget.offsetWidth,n=e.nativeEvent.offsetX;a(n/t)},role:"progressbar",className:n},r.a.createElement(o,{style:{width:100*t+"%"}}))}},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const a=e=>("0"+(""+Math.floor(e))).slice(-2),r=e=>{const t=e%60;return`${a((e-t)/60%60)}:${a(t)}`}},50:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n(0),r=n.n(a),c=n(45),l=n(46);const o=[.5,.75,1,1.5,2],u=({totalTime:e,currentTime:t=0,isPlaying:n=!1,onToggle:u=(()=>{}),onVolumeChange:s=(()=>{}),onProgressChange:i=(()=>{}),onPlaybackSpeedChange:m=(()=>{}),onFullScreen:b=(()=>{})})=>{const[d,g]=Object(a.useState)(.5),[p,v]=Object(a.useState)(!1),[h,f]=Object(a.useState)(1);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{value:t/e,onClick:i}),r.a.createElement("button",{type:"button",title:n?"Pause":"Play",onClick:()=>u()},n?"Pause":"Play"),r.a.createElement("button",{type:"button",title:p?"Unmute":"Mute",onClick:()=>p?(v(!1),void s(d)):(v(!0),void s(0))},p?"unmute":"mute"),r.a.createElement("div",null,"Volume"),r.a.createElement(c.a,{value:p?0:d,onClick:e=>{const t=e<.1?0:e>.9?1:e;g(t),s(t)}}),r.a.createElement("select",{title:"Playback speed",value:h,onChange:e=>{const t=parseFloat(e.target.value);f(t),m(t)}},o.map(e=>r.a.createElement("option",{key:e,value:e},e," x"))),r.a.createElement("div",null,Object(l.a)(t)," / ",Object(l.a)(e)),r.a.createElement("button",{type:"button",title:"Full screen",onClick:()=>b()},"full screen"))};var s=n(22);const i=s.b.video`
  cursor: pointer;
`,m=s.b.div`
  max-width: 80vw;
  max-height: 80vh;
  position: relative;

  ${i} {
    width: 100%;
    height: auto;
  }
`,b=()=>{const e=Object(a.useRef)(null),[t,n]=Object(a.useState)(0),[c,l]=Object(a.useState)(0),[o,s]=Object(a.useState)(!1),b=Object(a.useRef)(!1),d=()=>{const t=e.current;o?(t.pause(),s(!1)):(t.play(),s(!0))},g=()=>{const t=e.current;n(t.currentTime)};return r.a.createElement(m,null,r.a.createElement(i,{ref:e,src:"assets/travel.b6deaf83e610a7fb5922932d00b6a849.mp4",playsInline:!0,onClick:d,onTimeUpdate:g,onCanPlay:g,onDurationChange:e=>{l(e.currentTarget.duration)}}),r.a.createElement(u,{currentTime:t,totalTime:c,isPlaying:o,onToggle:d,onProgressChange:t=>{e.current.currentTime=t*c,n(t*c)},onVolumeChange:t=>{e.current.volume=t},onPlaybackSpeedChange:t=>{e.current.playbackRate=t},onFullScreen:()=>{const t=e.current,n=b.current;n?document.exitFullscreen():t.requestFullscreen(),b.current=!n}}))}}}]);