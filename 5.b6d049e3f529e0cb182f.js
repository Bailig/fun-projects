(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{72:function(e,t,o){"use strict";o.r(t),o.d(t,"InfiniteScroll",(function(){return x})),o.d(t,"default",(function(){return G}));var n=o(58),a=o.n(n),d=o(0),r=o.n(d),c=o(28);const l=c.c.div`
  display: grid;
  background-repeat: repeat-y;
  justify-items: center;

  ${({theme:e})=>c.b`
      ${e.breakpoints.down("md")} {
        width: 179px;
        background-image: url(${"assets/noodles-down-md.d5c0d0d0eda954c84fe12402bc4151c2.png"});
        grid-row-gap: ${e.spacing(1)}px;
      }

      ${e.breakpoints.up("lg")} {
        width: 308px;
        background-image: url(${"assets/noodles-up-lg.bae69d33426322414273454774ba9fb5.png"});
        grid-row-gap: ${e.spacing(2)}px;
      }
    `};
`,i=Object(d.memo)(e=>{const{photos:t,onScrolledToBottom:o}=e,n=Object(d.useRef)(!1),[a,c]=Object(d.useState)(0);Object(d.useEffect)(()=>{a>0&&a===(null==t?void 0:t.length)&&(n.current=!0)},[a,null==t?void 0:t.length]),Object(d.useEffect)(()=>{const e=()=>{window.innerHeight+window.scrollY>=document.body.offsetHeight-1e3&&n.current&&(n.current=!1,o())};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[o]);return r.a.createElement(l,null,t.map(({id:e,url:t,alt:o})=>r.a.createElement("img",{key:e,src:t,onLoad:()=>{c(e=>e+1)},alt:o,width:"80%"})))});const p={downMD:290,upLG:500},s={downMD:206,upLG:354},u={downMD:150,upLG:258},m={downMD:180,upLG:309},g=c.c.div`
  background-repeat: no-repeat;
  ${({theme:e})=>c.b`
      ${e.breakpoints.down("md")} {
        width: ${s.downMD}px;
        height: ${p.downMD}px;
        background-image: url(${"assets/chopsticks-noodles-down-md.0e5da75f4a645c363775355499aebf1d.png"});
      }

      ${e.breakpoints.up("lg")} {
        width: ${s.upLG}px;
        height: ${p.upLG}px;
        background-image: url(${"assets/chopsticks-noodles-up-lg.4795ddd42f447ee083dfcbf02defe8ec.png"});
      }
    `}
`,b=c.c.div`
  padding-top: var(--top-bottom-space);
`,w=c.c.div`
  background-repeat: no-repeat;

  ${({theme:e})=>c.b`
      ${e.breakpoints.down("md")} {
        width: ${m.downMD}px;
        height: ${u.downMD}px;
        background-image: url(${"assets/bowl-down-md.0898426a81f79f26c7dd8c67b1fb633b.png"});
      }

      ${e.breakpoints.up("lg")} {
        width: ${m.upLG}px;
        height: ${u.upLG}px;
        background-image: url(${"assets/bowl-up-lg.8cfcb90e3f0495edfb000a72e7ba886e.png"});
      }
    `}
`,f=c.c.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: var(--top-bottom-space);
  background-color: ${"#f2ebdf"};
  display: flex;
  justify-content: center;
`,A=c.c.div`
  ${({theme:e})=>c.b`
      ${e.breakpoints.down("md")} {
        width: 14px;
        height: 38px;
        background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAmCAYAAAD0t6qKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGtSURBVHgB7VQxa8JAGD1r1KhRokYJ0uGGiriIYMWOGYtTRt26Fgr9Aw5Cf0D9EYUOHRw7ODj0DygdHRx0qBQxWCRiwPRdisW2UXp2KvggPHLfvfve3X3fEXLAAf8fNBQKvZXL5TMulSRJVZAdi8WqbvGjbUKPx7NgjKwilzCRSLwwns/nhEs4mUwMxpZl8QmLxeJir4zdbtcgO7BVqGka+Qtsn893QXgyruH3+8leQtzjfsJwOEy4oOu6DLK9Xq/OldEwDKfUuK2Ox2OF8Wq1WnAJTdN0hMFg0F2IQEtVVfo9MBqNHKuBQMBdiCLWZrNZC5XypX1wmpTxcrl0F2YymUvYKvR6vZvNAPpRZYyGnm6Oy7J8HYlEntY/dUy0KaXn6wkotSbIrlQqzgKdTkfAtm7ZmKIo7c+V0LhNTH5NJpMn5ONQ7tmkRqMh1Wo1JR6Pt3GnVjQarf/wnUql7hAclkqlAmr0EQdj5/P5Y9jtY3yQy+XcHy5mB5kfkNmCcAr7JniArTxjMZXsAqwJ6XTasck+CPt4DRTyW8DmQBCEoSiKlPAAlq+y2ezptvg77Tpxnf9aiuEAAAAASUVORK5CYII="});
      }

      ${e.breakpoints.up("lg")} {
        width: 26px;
        height: 70px;
        background-image: url(${"assets/down-arrow-up-lg.f86b59b374334ff1f44c14fed68795dc.png"});
      }
    `}
`,h=c.c.div`
  ${({theme:e})=>c.b`
      ${e.breakpoints.down("md")} {
        font-size: 20px;
      }

      ${e.breakpoints.up("lg")} {
        font-size: 30px;
      }
    `}
`,$=c.c.div`
  display: grid;
  justify-items: center;
`,k=c.c.div`
  font-family: OzCaramel;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${"#f2ebdf"};

  ${({theme:e})=>c.b`
      ${e.breakpoints.down("md")} {
        --top-bottom-space: calc(
          (
              100vh - ${p.downMD}px -
                ${u.downMD}px
            ) / 2
        );
      }

      ${e.breakpoints.up("lg")} {
        --top-bottom-space: calc(
          (
              100vh - ${p.upLG}px -
                ${u.upLG}px
            ) / 2
        );
      }
    `}

  ${$} {
    position: fixed;
    top: 50vh;
    transform: translateY(-50%);

    ${({theme:e})=>c.b`
        ${e.breakpoints.down("md")} {
          left: calc(100vw / 2 + ${m.downMD}px / 2);
        }

        ${e.breakpoints.up("lg")} {
          left: calc(100vw / 2 + ${m.upLG}px / 2);
        }
      `}
  }
`,x=e=>{const{photos:t,onScrolledToBottom:o}=e,[n,c]=Object(d.useState)(0);Object(d.useEffect)(()=>{const e=a()(()=>{c(window.scrollY)},15);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);const l={paddingBottom:`calc(var(--top-bottom-space) - ${n}px)`};return r.a.createElement(k,null,r.a.createElement(b,null,r.a.createElement(g,null)),r.a.createElement(i,{photos:t,onScrolledToBottom:o}),r.a.createElement(f,{style:l},r.a.createElement(w,null)),r.a.createElement($,null,r.a.createElement(h,null,"Scroll me"),r.a.createElement(A,null)))};var v=o(29),E=o(65),y=o(68),O=o(64);const j=e=>"https://api.unsplash.com/photos/random?client_id=jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek&count="+(0===e?5:20),L=Object(E.a)(y.a,Object(O.a)(e=>({id:e.id,url:e.urls.small,alt:e.alt_description}))),G=()=>{const{data:e,error:t,setSize:o}=Object(v.c)(j),n=Object(d.useMemo)(()=>e&&L(e),[e]),a=Object(d.useCallback)(()=>{o(e=>e+1)},[o]);return t?r.a.createElement(r.a.Fragment,null,"Oops!"):n?r.a.createElement(x,{photos:n,onScrolledToBottom:a}):r.a.createElement(r.a.Fragment,null,"loading...")}}}]);