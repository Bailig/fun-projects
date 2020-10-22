(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"InfiniteScroll",(function(){return M})),n.d(t,"default",(function(){return C}));var o=n(50),a=n.n(o),d=n(0),r=n.n(d),c=n(18),p=n.p+"d5c0d0d0eda954c84fe12402bc4151c2.png",l=n.p+"bae69d33426322414273454774ba9fb5.png";const i=c.d.div`
  display: grid;
  background-repeat: repeat-y;
  justify-items: center;

  ${({theme:e})=>c.c`
      ${e.breakpoints.down("md")} {
        width: 179px;
        background-image: url(${p});
        grid-row-gap: ${e.spacing(1)}px;
      }

      ${e.breakpoints.up("lg")} {
        width: 308px;
        background-image: url(${l});
        grid-row-gap: ${e.spacing(2)}px;
      }
    `};
`,u=Object(d.memo)(e=>{const{photos:t,onScrolledToBottom:n}=e,o=Object(d.useRef)(!1),[a,c]=Object(d.useState)(0);Object(d.useEffect)(()=>{a>0&&a===(null==t?void 0:t.length)&&(o.current=!0)},[a,null==t?void 0:t.length]),Object(d.useEffect)(()=>{const e=()=>{window.innerHeight+window.scrollY>=document.body.offsetHeight-1e3&&o.current&&(o.current=!1,n())};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[n]);return r.a.createElement(i,null,t.map(({id:e,url:t,alt:n})=>r.a.createElement("img",{key:e,src:t,onLoad:()=>{c(e=>e+1)},alt:n,width:"80%"})))});var s=n.p+"0898426a81f79f26c7dd8c67b1fb633b.png",m=n.p+"8cfcb90e3f0495edfb000a72e7ba886e.png",b=n.p+"0e5da75f4a645c363775355499aebf1d.png",g=n.p+"4795ddd42f447ee083dfcbf02defe8ec.png",f=n.p+"1ecca6a416cee4749216a385ba48d984.png",w=n.p+"f86b59b374334ff1f44c14fed68795dc.png";const $={downMD:290,upLG:500},h={downMD:206,upLG:354},k={downMD:150,upLG:258},x={downMD:180,upLG:309},v=c.d.div`
  background-repeat: no-repeat;
  ${({theme:e})=>c.c`
      ${e.breakpoints.down("md")} {
        width: ${h.downMD}px;
        height: ${$.downMD}px;
        background-image: url(${b});
      }

      ${e.breakpoints.up("lg")} {
        width: ${h.upLG}px;
        height: ${$.upLG}px;
        background-image: url(${g});
      }
    `}
`,E=c.d.div`
  padding-top: var(--top-bottom-space);
`,j=c.d.div`
  background-repeat: no-repeat;

  ${({theme:e})=>c.c`
      ${e.breakpoints.down("md")} {
        width: ${x.downMD}px;
        height: ${k.downMD}px;
        background-image: url(${s});
      }

      ${e.breakpoints.up("lg")} {
        width: ${x.upLG}px;
        height: ${k.upLG}px;
        background-image: url(${m});
      }
    `}
`,L=c.d.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: var(--top-bottom-space);
  background-color: ${"#f2ebdf"};
  display: flex;
  justify-content: center;
`,y=c.d.div`
  ${({theme:e})=>c.c`
      ${e.breakpoints.down("md")} {
        width: 14px;
        height: 38px;
        background-image: url(${f});
      }

      ${e.breakpoints.up("lg")} {
        width: 26px;
        height: 70px;
        background-image: url(${w});
      }
    `}
`,O=c.d.div`
  ${({theme:e})=>c.c`
      ${e.breakpoints.down("md")} {
        font-size: 20px;
      }

      ${e.breakpoints.up("lg")} {
        font-size: 30px;
      }
    `}
`,D=c.d.div`
  display: grid;
  justify-items: center;
`,G=c.d.div`
  font-family: OzCaramel;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${"#f2ebdf"};

  ${({theme:e})=>c.c`
      ${e.breakpoints.down("md")} {
        --top-bottom-space: calc(
          (
              100vh - ${$.downMD}px -
                ${k.downMD}px
            ) / 2
        );
      }

      ${e.breakpoints.up("lg")} {
        --top-bottom-space: calc(
          (
              100vh - ${$.upLG}px -
                ${k.upLG}px
            ) / 2
        );
      }
    `}

  ${D} {
    position: fixed;
    top: 50vh;
    transform: translateY(-50%);

    ${({theme:e})=>c.c`
        ${e.breakpoints.down("md")} {
          left: calc(100vw / 2 + ${x.downMD}px / 2);
        }

        ${e.breakpoints.up("lg")} {
          left: calc(100vw / 2 + ${x.upLG}px / 2);
        }
      `}
  }
`,M=e=>{const{photos:t,onScrolledToBottom:n}=e,[o,c]=Object(d.useState)(0);Object(d.useEffect)(()=>{const e=a()(()=>{c(window.scrollY)},15);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);const p={paddingBottom:`calc(var(--top-bottom-space) - ${o}px)`};return r.a.createElement(G,null,r.a.createElement(E,null,r.a.createElement(v,null)),r.a.createElement(u,{photos:t,onScrolledToBottom:n}),r.a.createElement(L,{style:p},r.a.createElement(j,null)),r.a.createElement(D,null,r.a.createElement(O,null,"Scroll me"),r.a.createElement(y,null)))};var S=n(27),z=n(57),B=n(59),F=n(56);const T=e=>"https://api.unsplash.com/photos/random?client_id=jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek&count="+(0===e?5:20),Y=Object(z.a)(B.a,Object(F.a)(e=>({id:e.id,url:e.urls.small,alt:e.alt_description}))),C=()=>{const{data:e,error:t,setSize:n}=Object(S.c)(T),o=Object(d.useMemo)(()=>e&&Y(e),[e]),a=Object(d.useCallback)(()=>{n(e=>e+1)},[n]);return t?r.a.createElement(r.a.Fragment,null,"Oops!"):o?r.a.createElement(M,{photos:o,onScrolledToBottom:a}):r.a.createElement(r.a.Fragment,null,"loading...")}}}]);