import{i as a}from"./Core-hGU-nzEP.js";import{p as h}from"./practiceTheme-KfwvLvWs.js";const o={base:[new URL("/assets/end-base1-CjUxoWEo.png",import.meta.url).href,new URL("/assets/end-base-4AxyGSWq.jpeg",import.meta.url).href],peace:[new URL("/assets/end-peace-D43fRmcR.png",import.meta.url).href,new URL("/assets/end-peace-D43fRmcR.png",import.meta.url).href],concentration:[new URL("/assets/end-concentration-B4Z2d3ZM.png",import.meta.url).href,new URL("/assets/end-concentration1-CHESMdbJ.png",import.meta.url).href],sleep:[new URL("/assets/end-sleep-CFcq_CwD.png",import.meta.url).href,new URL("/assets/end-sleep1-BxlKV3xf.png",import.meta.url).href]},u=e=>{const r=o[e].length-1;return o[e][Math.floor(Math.random()*(r-0+1))+0]},c=a,s={base:new URL("/assets/base-bg-BZwnMzHZ.svg",import.meta.url).href,peace:new URL("/assets/peace-bg-CJLrxL0E.svg",import.meta.url).href,concentration:new URL("/assets/concentration-bg-Deh64qVV.svg",import.meta.url).href,sleep:new URL("/assets/sleep-bg-BFQNDeHY.svg",import.meta.url).href},m={base:"rgba(187,188,208, 0.57), rgba(187,188,208, 0.57)",peace:"rgba(55, 181, 165, .35), rgba(55, 181, 165, .35)",sleep:"rgba(177, 121, 198, 0.41), rgba(177, 121, 198, 0.41)",concentration:"rgba(215, 124, 170, .43), rgba(215, 124, 170, .43)"},d=e=>!c.string(e)||!s[e]?s.base:s[e],l=e=>{if(!m[e])throw new Error(`Unknown theme: ${e}`);return m[e]},g=(e={theme,imagePath,position,size})=>{const{theme:t,imagePath:r=e.imagePath?e.imagePath:u(t),position:n="top left",size:i="150%"}=e;if(a.undefined(t))throw new Error("theme is required");return{backgroundImage:`linear-gradient(${l(t)}), url(${r})`,backgroundPosition:n,backgroundSize:i}},f=(e={theme,bgSize,bgPosition})=>{const{theme:t=h.base,bgSize:r="auto 100vh",bgPosition:n="top"}=e;if(a.undefined(t))throw new Error("theme is required");return{background:`url('${d(t)}')`,backgroundSize:r,backgroundPosition:n}},w={bgByEnumTheme:(e={theme,styleBuilder,builderParams})=>{const{theme:t,styleBuilder:r=g,builderParams:n}=e;if(a.undefined(t))throw new Error("theme is required");return r({theme:t,...n})},bgStyleByPath:(e={theme,imagePath,styleBuilder})=>{const{theme:t,imagePath:r,styleBuilder:n=g}=e;if(a.undefined(r))throw new Error("imagePath is required");if(a.undefined(t))throw new Error("theme is required");return n({theme:t,imagePath:e.imagePath})}};export{w as a,f as b,u as g};