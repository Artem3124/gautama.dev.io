import{i as n}from"./Core-hGU-nzEP.js";import{p as m}from"./practiceTheme-KfwvLvWs.js";const o={base:["/src/assets/img/end-base1.png","/src/assets/img/end-base.jpeg"],peace:["/src/assets/img/end-peace.png","/src/assets/img/end-peace.png"],concentration:["/src/assets/img/end-concentration.png","/src/assets/img/end-concentration1.png"],sleep:["/src/assets/img/end-sleep.png","/src/assets/img/end-sleep1.png"]},d=e=>{const r=o[e].length-1;return o[e][Math.floor(Math.random()*(r-0+1))+0]},b=n,a={base:"/src/assets/svg/backgrounds/base-bg.svg",peace:"/src/assets/svg/backgrounds/peace-bg.svg",concentration:"/src/assets/svg/backgrounds/concentration-bg.svg",sleep:"/src/assets/svg/backgrounds/sleep-bg.svg"},g={base:"rgba(187,188,208, 0.57), rgba(187,188,208, 0.57)",peace:"rgba(55, 181, 165, .35), rgba(55, 181, 165, .35)",sleep:"rgba(177, 121, 198, 0.41), rgba(177, 121, 198, 0.41)",concentration:"rgba(215, 124, 170, .43), rgba(215, 124, 170, .43)"},u=e=>!b.string(e)||!a[e]?a.base:a[e],h=e=>{if(!g[e])throw new Error(`Unknown theme: ${e}`);return g[e]},c=(e={theme,imagePath,position,size})=>{const{theme:s,imagePath:r=e.imagePath?e.imagePath:d(s),position:t="top left",size:i="150%"}=e;if(n.undefined(s))throw new Error("theme is required");return{backgroundImage:`linear-gradient(${h(s)}), url(${r})`,backgroundPosition:t,backgroundSize:i}},P=(e={theme,bgSize,bgPosition})=>{const{theme:s=m.base,bgSize:r="auto 100vh",bgPosition:t="top"}=e;if(n.undefined(s))throw new Error("theme is required");return{background:`url('${u(s)}')`,backgroundSize:r,backgroundPosition:t}},f={bgByEnumTheme:(e={theme,styleBuilder,builderParams})=>{const{theme:s,styleBuilder:r=c,builderParams:t}=e;if(n.undefined(s))throw new Error("theme is required");return r({theme:s,...t})},bgStyleByPath:(e={theme,imagePath,styleBuilder})=>{const{theme:s,imagePath:r,styleBuilder:t=c}=e;if(n.undefined(r))throw new Error("imagePath is required");if(n.undefined(s))throw new Error("theme is required");return t({theme:s,imagePath:e.imagePath})}};export{f as a,P as b,d as g};