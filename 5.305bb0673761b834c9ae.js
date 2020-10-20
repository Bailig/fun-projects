(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return G}));var o=n(50),a=n.n(o),r=n(0),c=n.n(r),d=n(27),p=n(18),i=n.p+"0898426a81f79f26c7dd8c67b1fb633b.png",l=n.p+"8cfcb90e3f0495edfb000a72e7ba886e.png",u=n.p+"0e5da75f4a645c363775355499aebf1d.png",s=n.p+"4795ddd42f447ee083dfcbf02defe8ec.png",b=n.p+"d5c0d0d0eda954c84fe12402bc4151c2.png",g=n.p+"bae69d33426322414273454774ba9fb5.png";const m={downMD:290,upLG:500},f={downMD:150,upLG:258},w=p.d.div`
  background-repeat: no-repeat;
  ${({theme:e})=>p.c`
      ${e.breakpoints.down("md")} {
        width: 206px;
        height: ${m.downMD}px;
        background-image: url(${u});
      }

      ${e.breakpoints.up("lg")} {
        width: 354px;
        height: ${m.upLG}px;
        background-image: url(${s});
      }
    `}
`,h=p.d.div`
  padding-top: var(--top-bottom-space);
`,$=p.d.div`
  display: grid;
  background-repeat: repeat-y;
  justify-items: center;

  ${({theme:e})=>p.c`
      ${e.breakpoints.down("md")} {
        width: 179px;
        background-image: url(${b});
        grid-row-gap: ${e.spacing(1)}px;
      }

      ${e.breakpoints.up("lg")} {
        width: 308px;
        background-image: url(${g});
        grid-row-gap: ${e.spacing(2)}px;
      }
    `};
`,k=p.d.div`
  background-repeat: no-repeat;

  ${({theme:e})=>p.c`
      ${e.breakpoints.down("md")} {
        width: 180px;
        height: ${f.downMD}px;
        background-image: url(${i});
      }

      ${e.breakpoints.up("lg")} {
        width: 309px;
        height: ${f.upLG}px;
        background-image: url(${l});
      }
    `}
`,x=p.d.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: var(--top-bottom-space);
  background-color: ${"#f2ebdf"};
  display: flex;
  justify-content: center;
`,v=p.d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${"#f2ebdf"};

  ${({theme:e})=>p.c`
      ${e.breakpoints.down("md")} {
        --top-bottom-space: calc(
          (
              100vh - ${m.downMD}px -
                ${f.downMD}px
            ) / 2
        );
      }

      ${e.breakpoints.up("lg")} {
        --top-bottom-space: calc(
          (
              100vh - ${m.upLG}px -
                ${f.upLG}px
            ) / 2
        );
      }
    `}
`,E=Object(r.memo)(e=>{const{photos:t,onScrolledToBottom:n}=e,o=Object(r.useRef)(!1),[a,d]=Object(r.useState)(0);Object(r.useEffect)(()=>{a>0&&a===(null==t?void 0:t.length)&&(o.current=!0)},[a,null==t?void 0:t.length]),Object(r.useEffect)(()=>{const e=()=>{window.innerHeight+window.scrollY>=document.body.offsetHeight-1e3&&o.current&&(o.current=!1,n())};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[n]);return c.a.createElement($,null,t.map(({id:e,url:t,alt:n})=>c.a.createElement("img",{key:e,src:t,onLoad:()=>{d(e=>e+1)},alt:n,width:"80%"})))});var j=n(57),O=n(59),y=n(56);const L=e=>"https://api.unsplash.com/photos/random?client_id=jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek&count="+(0===e?5:20),D=Object(j.a)(O.a,Object(y.a)(e=>({id:e.id,url:e.urls.small,alt:e.alt_description}))),G=()=>{const{data:e,error:t,setSize:n}=Object(d.c)(L),[o,p]=Object(r.useState)(0),i=Object(r.useMemo)(()=>e&&D(e),[e]);Object(r.useEffect)(()=>{const e=a()(()=>{p(window.scrollY)},30);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[n]);const l=Object(r.useCallback)(()=>{n(e=>e+1)},[n]);if(!i)return c.a.createElement(c.a.Fragment,null,"loading...");if(t)return c.a.createElement(c.a.Fragment,null,"Oops!");const u={paddingBottom:`calc(var(--top-bottom-space) - ${o}px)`};return c.a.createElement(v,null,c.a.createElement(h,null,c.a.createElement(w,null)),c.a.createElement(E,{photos:i,onScrolledToBottom:l}),c.a.createElement(x,{style:u},c.a.createElement(k,null)))}}}]);