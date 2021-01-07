(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{168:function(e,t,o){"use strict";o.r(t),o.d(t,"ImageList",(function(){return i})),o.d(t,"ImageListRoot",(function(){return c})),o.d(t,"InfiniteScroll",(function(){return E})),o.d(t,"ChopsticksImage",(function(){return m})),o.d(t,"ChopsticksImageWrapper",(function(){return b})),o.d(t,"BowlImage",(function(){return f})),o.d(t,"BowlImageWrapper",(function(){return w})),o.d(t,"DownArrow",(function(){return h})),o.d(t,"ScrollMeLabel",(function(){return $})),o.d(t,"ScrollMe",(function(){return k})),o.d(t,"InfiniteScrollRoot",(function(){return x})),o.d(t,"default",(function(){return D}));var n=o(0),a=o.n(n),r=o(19);const c=r.c.div`
  display: grid;
  background-repeat: repeat-y;
  justify-items: center;

  ${({theme:e})=>r.b`
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
`;var d=o(151),l=o.n(d);const i=Object(n.memo)(e=>{const{loading:t,photos:o,onScrolledToBottom:r}=e,{isImagesLoaded:d,handleImageLoad:i}=(e=>{const t=Object(n.useRef)(0),o=Object(n.useCallback)(()=>t.current===e,[e]),a=Object(n.useCallback)(()=>{t.current+=1},[]);return{loadedImageCountRef:t,isImagesLoaded:o,handleImageLoad:a}})(o.length);return(e=>{Object(n.useEffect)(()=>{const t=l()(()=>{window.innerHeight+window.scrollY>=document.body.offsetHeight-1e3&&e()},500);return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e])})(Object(n.useCallback)(()=>{!t&&d()&&r()},[d,t,r])),a.a.createElement(c,null,o.map(({id:e,url:t,alt:o})=>a.a.createElement("img",{key:e,src:t,onLoad:()=>i(),alt:o,width:"80%"})))});const s={downMD:290,upLG:500},p={downMD:206,upLG:354},u={downMD:150,upLG:258},g={downMD:180,upLG:309},m=r.c.div`
  background-repeat: no-repeat;
  ${({theme:e})=>r.b`
      ${e.breakpoints.down("md")} {
        width: ${p.downMD}px;
        height: ${s.downMD}px;
        background-image: url(${"assets/chopsticks-noodles-down-md.0e5da75f4a645c363775355499aebf1d.png"});
      }

      ${e.breakpoints.up("lg")} {
        width: ${p.upLG}px;
        height: ${s.upLG}px;
        background-image: url(${"assets/chopsticks-noodles-up-lg.4795ddd42f447ee083dfcbf02defe8ec.png"});
      }
    `}
`,b=r.c.div`
  padding-top: var(--top-bottom-space);
`,f=r.c.div`
  background-repeat: no-repeat;

  ${({theme:e})=>r.b`
      ${e.breakpoints.down("md")} {
        width: ${g.downMD}px;
        height: ${u.downMD}px;
        background-image: url(${"assets/bowl-down-md.0898426a81f79f26c7dd8c67b1fb633b.png"});
      }

      ${e.breakpoints.up("lg")} {
        width: ${g.upLG}px;
        height: ${u.upLG}px;
        background-image: url(${"assets/bowl-up-lg.8cfcb90e3f0495edfb000a72e7ba886e.png"});
      }
    `}
`,w=r.c.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: var(--top-bottom-space);
  background-color: ${"#f2ebdf"};
  display: flex;
  justify-content: center;
`,h=r.c.div`
  width: 49px;
  height: 49px;
  background-image: url(${"assets/down-arrow.d2e6a1d08c4850a421881576246cf87f.gif"});
`,$=r.c.div`
  ${({theme:e})=>r.b`
      ${e.breakpoints.down("md")} {
        font-size: 20px;
      }

      ${e.breakpoints.up("lg")} {
        font-size: 30px;
      }
    `}
`,k=r.c.div`
  display: grid;
  justify-items: center;
`,x=r.c.div`
  font-family: OzCaramel;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${"#f2ebdf"};

  ${({theme:e})=>r.b`
      ${e.breakpoints.down("md")} {
        --top-bottom-space: calc(
          (
              100vh - ${s.downMD}px -
                ${u.downMD}px
            ) / 2
        );
      }

      ${e.breakpoints.up("lg")} {
        --top-bottom-space: calc(
          (
              100vh - ${s.upLG}px -
                ${u.upLG}px
            ) / 2
        );
      }
    `}

  ${k} {
    position: fixed;
    top: 50vh;
    transform: translateY(-50%);

    ${({theme:e})=>r.b`
        ${e.breakpoints.down("md")} {
          left: calc(
            100vw / 2 + ${g.downMD}px / 2 + ${e.spacing(1)}px
          );
        }

        ${e.breakpoints.up("lg")} {
          left: calc(
            100vw / 2 + ${g.upLG}px / 2 + ${e.spacing(2)}px
          );
        }
      `}
  }
`,E=e=>{const{loading:t,photos:o,onScrolledToBottom:r}=e,{scrollY:c}=(()=>{const[e,t]=Object(n.useState)(0);return Object(n.useEffect)(()=>{const e=l()(()=>{window.scrollY>=window.innerHeight/2||t(window.scrollY)},15);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),{scrollY:e}})(),d={paddingBottom:`calc(var(--top-bottom-space) - ${c}px)`};return a.a.createElement(x,null,a.a.createElement(b,null,a.a.createElement(m,null)),a.a.createElement(i,{loading:t,photos:o,onScrolledToBottom:r}),a.a.createElement(w,{style:d},a.a.createElement(f,null)),a.a.createElement(k,null,a.a.createElement($,null,"Scroll me"),a.a.createElement(h,null)))};var v=o(41);const{UNSPLASH_ACCESS_KEY:L}=Object({TEXT_TO_SPEECH_API_KEY:"e6cb0150821f40f2b73ecaa2d0ac7425",UNSPLASH_ACCESS_KEY:"0NSr7g5aLAthlhl_UdRGh12uxyo_N6QMHA9SUGVgc8M"}),S=e=>[`https://api.unsplash.com/photos/random?client_id=${L}&count=${0===e?5:20}`,e],j=e=>fetch(e).then(e=>e.json());var O=o(160),M=o(164),I=o(159),y=o(158),C=o(161);const G=Object(O.a)(M.a,Object(I.a)(e=>({id:e.id,url:e.urls.small,alt:e.alt_description})),Object(y.a)(Object(C.a)("id"))),D=()=>{const{photos:e,loading:t,error:o,handleFetchMore:r}=(()=>{const{data:e,isValidating:t,error:o,setSize:a}=Object(v.c)(S,j);return{photos:e,loading:t,error:o,handleFetchMore:Object(n.useCallback)(()=>{a(e=>e+1)},[a])}})(),{photos:c}=(e=>({photos:Object(n.useMemo)(()=>e&&G(e),[e])}))(e);return o?(console.error(o),a.a.createElement(a.a.Fragment,null,"Oops! ",o.message)):c?a.a.createElement(E,{loading:t,photos:c,onScrolledToBottom:r}):a.a.createElement(a.a.Fragment,null,"loading...")}}}]);