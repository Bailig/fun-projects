(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{63:function(e,t,o){"use strict";o.r(t),o.d(t,"InfiniteScroll",(function(){return E})),o.d(t,"default",(function(){return G}));var n=o(50),a=o.n(n),c=o(0),r=o.n(c),d=o(18),l=o.p+"d5c0d0d0eda954c84fe12402bc4151c2.png",p=o.p+"bae69d33426322414273454774ba9fb5.png";const i=d.d.div`
  display: grid;
  background-repeat: repeat-y;
  justify-items: center;

  ${({theme:e})=>d.c`
      ${e.breakpoints.down("md")} {
        width: 179px;
        background-image: url(${l});
        grid-row-gap: ${e.spacing(1)}px;
      }

      ${e.breakpoints.up("lg")} {
        width: 308px;
        background-image: url(${p});
        grid-row-gap: ${e.spacing(2)}px;
      }
    `};
`,s=Object(c.memo)(e=>{const{photos:t,onScrolledToBottom:o}=e,n=Object(c.useRef)(!1),[a,d]=Object(c.useState)(0);Object(c.useEffect)(()=>{a>0&&a===(null==t?void 0:t.length)&&(n.current=!0)},[a,null==t?void 0:t.length]),Object(c.useEffect)(()=>{const e=()=>{window.innerHeight+window.scrollY>=document.body.offsetHeight-1e3&&n.current&&(n.current=!1,o())};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[o]);return r.a.createElement(i,null,t.map(({id:e,url:t,alt:o})=>r.a.createElement("img",{key:e,src:t,onLoad:()=>{d(e=>e+1)},alt:o,width:"80%"})))});var u=o.p+"0898426a81f79f26c7dd8c67b1fb633b.png",b=o.p+"8cfcb90e3f0495edfb000a72e7ba886e.png",g=o.p+"0e5da75f4a645c363775355499aebf1d.png",m=o.p+"4795ddd42f447ee083dfcbf02defe8ec.png";const f={downMD:290,upLG:500},w={downMD:150,upLG:258},h=d.d.div`
  background-repeat: no-repeat;
  ${({theme:e})=>d.c`
      ${e.breakpoints.down("md")} {
        width: 206px;
        height: ${f.downMD}px;
        background-image: url(${g});
      }

      ${e.breakpoints.up("lg")} {
        width: 354px;
        height: ${f.upLG}px;
        background-image: url(${m});
      }
    `}
`,$=d.d.div`
  padding-top: var(--top-bottom-space);
`,k=d.d.div`
  background-repeat: no-repeat;

  ${({theme:e})=>d.c`
      ${e.breakpoints.down("md")} {
        width: 180px;
        height: ${w.downMD}px;
        background-image: url(${u});
      }

      ${e.breakpoints.up("lg")} {
        width: 309px;
        height: ${w.upLG}px;
        background-image: url(${b});
      }
    `}
`,v=d.d.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: var(--top-bottom-space);
  background-color: ${"#f2ebdf"};
  display: flex;
  justify-content: center;
`,x=d.d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${"#f2ebdf"};

  ${({theme:e})=>d.c`
      ${e.breakpoints.down("md")} {
        --top-bottom-space: calc(
          (
              100vh - ${f.downMD}px -
                ${w.downMD}px
            ) / 2
        );
      }

      ${e.breakpoints.up("lg")} {
        --top-bottom-space: calc(
          (
              100vh - ${f.upLG}px -
                ${w.upLG}px
            ) / 2
        );
      }
    `}
`,E=e=>{const{photos:t,onScrolledToBottom:o}=e,[n,d]=Object(c.useState)(0);Object(c.useEffect)(()=>{const e=a()(()=>{d(window.scrollY)},15);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);const l={paddingBottom:`calc(var(--top-bottom-space) - ${n}px)`};return r.a.createElement(x,null,r.a.createElement($,null,r.a.createElement(h,null)),r.a.createElement(s,{photos:t,onScrolledToBottom:o}),r.a.createElement(v,{style:l},r.a.createElement(k,null)))};var j=o(27),O=o(57),y=o(59),L=o(56);const S=e=>"https://api.unsplash.com/photos/random?client_id=jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek&count="+(0===e?5:20),D=Object(O.a)(y.a,Object(L.a)(e=>({id:e.id,url:e.urls.small,alt:e.alt_description}))),G=()=>{const{data:e,error:t,setSize:o}=Object(j.c)(S),n=Object(c.useMemo)(()=>e&&D(e),[e]),a=Object(c.useCallback)(()=>{o(e=>e+1)},[o]);return t?r.a.createElement(r.a.Fragment,null,"Oops!"):n?r.a.createElement(E,{photos:n,onScrolledToBottom:a}):r.a.createElement(r.a.Fragment,null,"loading...")}}}]);