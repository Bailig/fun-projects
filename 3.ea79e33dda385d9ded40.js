(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{203:function(e,t,o){"use strict";o.r(t),o.d(t,"ImageList",(function(){return s})),o.d(t,"ImageListRoot",(function(){return c})),o.d(t,"InfiniteScroll",(function(){return S})),o.d(t,"ChopsticksImage",(function(){return m})),o.d(t,"ChopsticksImageWrapper",(function(){return f})),o.d(t,"BowlImage",(function(){return b})),o.d(t,"BowlImageWrapper",(function(){return h})),o.d(t,"DownArrow",(function(){return w})),o.d(t,"ScrollMeLabel",(function(){return $})),o.d(t,"ScrollMe",(function(){return x})),o.d(t,"InfiniteScrollRoot",(function(){return v})),o.d(t,"default",(function(){return H}));var n=o(0),a=o.n(n),r=o(2);const c=r.d.div`
  display: grid;
  background-repeat: repeat-y;
  justify-items: center;

  ${({theme:e})=>r.c`
      width: 179px;
      background-image: url(${"assets/noodles-down-md.d5c0d0d0eda954c84fe12402bc4151c2.png"});
      grid-row-gap: ${e.space[1]}px;

      ${e.mediaQueries.lg} {
        width: 308px;
        background-image: url(${"assets/noodles-up-lg.bae69d33426322414273454774ba9fb5.png"});
        grid-row-gap: ${e.space[2]}px;
      }
    `};
`;var l=o(173),d=o.n(l);const s=Object(n.memo)(e=>{const{loading:t,photos:o,onScrolledToBottom:r}=e,{isImagesLoaded:l,handleImageLoad:s}=(e=>{const t=Object(n.useRef)(0),o=Object(n.useCallback)(()=>t.current===e,[e]),a=Object(n.useCallback)(()=>{t.current+=1},[]);return{loadedImageCountRef:t,isImagesLoaded:o,handleImageLoad:a}})(o.length);return(e=>{Object(n.useEffect)(()=>{const t=d()(()=>{window.innerHeight+window.scrollY>=document.body.offsetHeight-1e3&&e()},500);return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e])})(Object(n.useCallback)(()=>{!t&&l()&&r()},[l,t,r])),a.a.createElement(c,null,o.map(({id:e,url:t,alt:o})=>a.a.createElement("img",{key:e,src:t,onLoad:()=>s(),alt:o,width:"80%"})))});const i={xs:290,lg:500},u={xs:206,lg:354},p={xs:150,lg:258},g={xs:180,lg:309},m=r.d.div`
  background-repeat: no-repeat;

  ${({theme:e})=>r.c`
      width: ${u.xs}px;
      height: ${i.xs}px;
      background-image: url(${"assets/chopsticks-noodles-down-md.0e5da75f4a645c363775355499aebf1d.png"});
      ${e.mediaQueries.lg} {
        width: ${u.lg}px;
        height: ${i.lg}px;
        background-image: url(${"assets/chopsticks-noodles-up-lg.4795ddd42f447ee083dfcbf02defe8ec.png"});
      }
    `}
`,f=r.d.div`
  padding-top: var(--top-bottom-space);
`,b=r.d.div`
  background-repeat: no-repeat;

  ${({theme:e})=>r.c`
      width: ${g.xs}px;
      height: ${p.xs}px;
      background-image: url(${"assets/bowl-down-md.0898426a81f79f26c7dd8c67b1fb633b.png"});
      ${e.mediaQueries.lg} {
        width: ${g.lg}px;
        height: ${p.lg}px;
        background-image: url(${"assets/bowl-up-lg.8cfcb90e3f0495edfb000a72e7ba886e.png"});
      }
    `}
`,h=r.d.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: var(--top-bottom-space);
  background-color: ${"#f2ebdf"};
  display: flex;
  justify-content: center;
`,w=r.d.div`
  width: 49px;
  height: 49px;
  background-image: url(${"assets/down-arrow.d2e6a1d08c4850a421881576246cf87f.gif"});
`,$=r.d.div`
  ${({theme:e})=>r.c`
      font-size: 20px;
      ${e.mediaQueries.lg} {
        font-size: 30px;
      }
    `}
`,x=r.d.div`
  display: grid;
  justify-items: center;
`,v=r.d.div`
  font-family: OzCaramel, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${"#f2ebdf"};

  ${({theme:e})=>r.c`
      --top-bottom-space: calc(
        (100vh - ${i.xs}px - ${p.xs}px) / 2
      );

      ${e.mediaQueries.lg} {
        --top-bottom-space: calc(
          (100vh - ${i.lg}px - ${p.lg}px) /
            2
        );
      }
    `}

  ${x} {
    position: fixed;
    top: 50vh;
    transform: translateY(-50%);

    ${({theme:e})=>r.c`
        left: calc(
          100vw / 2 + ${g.xs}px / 2 + ${e.space[1]}px
        );

        ${e.mediaQueries.lg} {
          left: calc(
            100vw / 2 + ${g.lg}px / 2 + ${e.space[2]}px
          );
        }
      `}
  }
`;var E=o(174),k=o.n(E);const S=e=>{const{loading:t,photos:o,onScrolledToBottom:r}=e,{scrollY:c}=(()=>{const[e,t]=Object(n.useState)(0);return Object(n.useEffect)(()=>{const e=k()(()=>{window.scrollY>=window.innerHeight/2||t(window.scrollY)},15);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),{scrollY:e}})(),l={paddingBottom:`calc(var(--top-bottom-space) - ${c}px)`};return a.a.createElement(v,null,a.a.createElement(f,null,a.a.createElement(m,null)),a.a.createElement(s,{loading:t,photos:o,onScrolledToBottom:r}),a.a.createElement(h,{style:l},a.a.createElement(b,null)),a.a.createElement(x,null,a.a.createElement($,null,"Scroll me"),a.a.createElement(w,null)))};var j=o(58);const{UNSPLASH_ACCESS_KEY:O}=Object({TEXT_TO_SPEECH_API_KEY:"e6cb0150821f40f2b73ecaa2d0ac7425",UNSPLASH_ACCESS_KEY:"0NSr7g5aLAthlhl_UdRGh12uxyo_N6QMHA9SUGVgc8M"}),L=e=>[`https://api.unsplash.com/photos/random?client_id=${O}&count=${0===e?5:20}`,e],I=e=>fetch(e).then(e=>e.json());var y=o(199),C=o(201),_=o(195),Y=o(194),A=o(197);const B=Object(y.a)(C.a,Object(_.a)(e=>({id:e.id,url:e.urls.small,alt:e.alt_description})),Object(Y.a)(Object(A.a)("id"))),H=()=>{const{photos:e,loading:t,error:o,handleFetchMore:r}=(()=>{const{data:e,isValidating:t,error:o,setSize:a}=Object(j.c)(L,I);return{photos:e,loading:t,error:o,handleFetchMore:Object(n.useCallback)(()=>{a(e=>e+1)},[a])}})(),{photos:c}=(e=>({photos:Object(n.useMemo)(()=>e&&B(e),[e])}))(e);return o?(console.error(o),a.a.createElement(a.a.Fragment,null,"Oops! ",o.message)):c?a.a.createElement(S,{loading:t,photos:c,onScrolledToBottom:r}):a.a.createElement(a.a.Fragment,null,"loading...")}}}]);