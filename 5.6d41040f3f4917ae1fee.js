(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{63:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a(56),o=a(58),r=a(55),d=a(0),c=a.n(d),p=a(49),i=a(18),l=a.p+"713ad42f09b7a7ac9a2b16579e9d06cc.png",u=a.p+"85fd068ffedbc68c31518bb5c04af86a.png",s=a.p+"8a9150841d34a35841d1aa1d6dbd3b52.png",g=a.p+"9e574a0164a35769ad90de5ae110912a.png",b=a.p+"b65dfc82b9f8f6e26e2895628445eb6a.png",m=a.p+"80ca0d7aa94e2d178102753090ba967f.png";const f={downMD:304,upLG:510},w={downMD:153,upLG:257},h=i.d.div`
  background-repeat: no-repeat;
  ${({theme:e})=>i.c`
      ${e.breakpoints.down("md")} {
        width: 187px;
        height: ${f.downMD}px;
        background-image: url(${s});
        transform: translateX(20px);
      }

      ${e.breakpoints.up("lg")} {
        width: 314px;
        height: ${f.upLG}px;
        background-image: url(${g});
        transform: translateX(34px);
      }
    `}
`,$=i.d.div`
  padding-top: var(--top-bottom-space);
`,x=i.d.div`
  display: grid;
  background-repeat: repeat-y;

  ${({theme:e})=>i.c`
      ${e.breakpoints.down("md")} {
        width: 140px;
        background-image: url(${b});
        grid-row-gap: ${e.spacing(1)}px;
      }

      ${e.breakpoints.up("lg")} {
        width: 240px;
        background-image: url(${m});
        grid-row-gap: ${e.spacing(2)}px;
      }
    `}
`,k=i.d.div`
  background-repeat: no-repeat;

  ${({theme:e})=>i.c`
      ${e.breakpoints.down("md")} {
        width: 193px;
        height: 153px;
        background-image: url(${l});
      }

      ${e.breakpoints.up("lg")} {
        width: 325px;
        height: 257px;
        background-image: url(${u});
      }
    `}
`,v=i.d.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: var(--top-bottom-space);
  background-color: ${"#f2ebdf"};
  display: flex;
  justify-content: center;
`,E=i.d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${"#f2ebdf"};

  ${({theme:e})=>i.c`
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
`,j=async(...e)=>(await fetch(...e)).json(),y=()=>{const{data:e,error:t,setSize:a}=Object(p.b)(e=>"https://api.unsplash.com/photos/random?client_id=jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek&count="+(0===e?5:20),j,{revalidateOnFocus:!1,revalidateOnReconnect:!1}),i=Object(d.useRef)(!1),[l,u]=Object(d.useState)(0),[s,g]=Object(d.useState)(0),b=Object(d.useMemo)(()=>{if(e)return Object(n.a)(o.a,Object(r.a)(e=>({id:e.id,url:e.urls.small,alt:e.alt_description})))(e)},[e]);if(Object(d.useEffect)(()=>{l>0&&l===(null==b?void 0:b.length)&&(i.current=!0)},[l,null==b?void 0:b.length]),Object(d.useEffect)(()=>{const e=()=>{window.innerHeight+window.scrollY>=document.body.offsetHeight-1e3&&i.current&&(i.current=!1,a(e=>e+1)),g(window.scrollY)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[a]),!b)return c.a.createElement(c.a.Fragment,null,"loading...");if(t)return c.a.createElement(c.a.Fragment,null,"Oops!");return c.a.createElement(E,null,c.a.createElement($,null,c.a.createElement(h,null)),c.a.createElement(x,null,b.map(({id:e,url:t,alt:a})=>c.a.createElement("img",{key:e,src:t,onLoad:()=>{u(e=>e+1)},alt:a,width:"100%"}))),c.a.createElement(v,{style:{paddingBottom:`calc(var(--top-bottom-space) - ${s}px)`}},c.a.createElement(k,null)))}}}]);