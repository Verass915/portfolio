(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[5],{58:function(e,t,a){"use strict";var A=a(1),n=a(0),c=a(4),s=a.n(c),o=a(20),r=a.p+"static/media/gotham-bold.73ce573b.woff2";a(63);t.a=({children:e,level:t=1,as:a,align:c="auto",weight:i="medium",className:l,...g})=>{const d=Math.min(Math.max(t,0),4),p=a||`h${Math.max(d,1)}`;return Object(A.jsxs)(n.Fragment,{children:["bold"===i&&Object(A.jsxs)(o.a,{children:[Object(A.jsx)("link",{rel:"preload",href:r,as:"font",crossorigin:""}),Object(A.jsx)("style",{children:`\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${r}) format('woff2');\n                font-display: swap;\n              }\n            `})]}),Object(A.jsx)(p,{className:s()(l,"heading",`heading--align-${c}`,`heading--level-${d}`,`heading--weight-${i}`),...g,children:e})]})}},59:function(e,t,a){"use strict";var A=a(1),n=a(0),c=a(4),s=a.n(c),o=a(8),r=a(61),i=a(21),l=a(26);a(62);const g=["V","E","R","A","A","K","S","I","U","C","H","I","T","S","\u0412","\u0415","\u0420","\u0410","\u0410","\u041a","\u0421","\u042e","\u0427","\u0418","\u0426"],d="glyph",p="value";const h=({text:e,start:t=!0,delay:a=0,className:c,...h})=>{const j=Object(n.useRef)([{type:d,value:""}]),u=Object(n.useRef)(),m=Object(o.e)();return Object(n.useEffect)((()=>{const A=u.current,n=e.split("");let c;const s=()=>{const e=j.current.map((e=>`<span class="decoder-text__${e.type}">${e.value}</span>`));A.innerHTML=e.join("")},o=Object(r.d)(0,(e=>{j.current=function(e,t,a){return e.map(((e,A)=>{if(A<a)return{type:p,value:e};if(a%1<.5){const e=Math.floor(Math.random()*g.length);return{type:d,value:g[e]}}return{type:d,value:t[A].value}}))}(n,j.current,e),s()}));return!t||c||m||l.a||(c=Object(r.a)(Object(r.b)(a),Object(r.c)({from:0,to:n.length,stiffness:8,damping:5})).start(o)),m&&(j.current=n.map(((e,t)=>({type:p,value:n[t]}))),s()),()=>{c&&c.stop()}}),[m,t,a,e]),Object(A.jsxs)("span",{className:s()("decoder-text",c),...h,children:[Object(A.jsx)(i.a,{className:"decoder-text__label",children:e}),Object(A.jsx)("span",{"aria-hidden":!0,className:"decoder-text__content",ref:u})]})};t.a=Object(n.memo)(h)},60:function(e,t,a){"use strict";var A=a(1),n=a(4),c=a.n(n);a(64);t.a=({children:e,size:t="m",as:a="p",align:n="auto",weight:s="auto",secondary:o,className:r,...i})=>Object(A.jsx)(a,{className:c()(r,"text",`text--align-${n}`,`text--size-${t}`,`text--weight-${s}`,{"text--secondary":o}),...i,children:e})},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},79:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var A=a(1),n=a(0),c=a(4),s=a.n(c),o=a(57),r=a(20),i=a(22),l=a(59),g=a.p+"static/media/notfound.ced869d1.mp4",d=a(19),p=a(58),h=a(60);a(79);t.default=function(){return Object(A.jsxs)("section",{className:"page-404",children:[Object(A.jsxs)(r.a,{children:[Object(A.jsx)("title",{tag:"title",children:"404 | Not Found"}),Object(A.jsx)("meta",{name:"description",content:"404 page not found. This page doesn't exist"})]}),Object(A.jsx)(o.a,{appear:!0,in:!0,timeout:0,onEnter:d.b,children:e=>Object(A.jsxs)(n.Fragment,{children:[Object(A.jsx)("div",{className:"page-404__details",children:Object(A.jsxs)("div",{className:"page-404__text",children:[Object(A.jsx)(p.a,{className:s()("page-404__title",`page-404__title--${e}`),level:0,children:"404"}),Object(A.jsx)(p.a,{"aria-hidden":!0,className:s()("page-404__subheading",`page-404__subheading--${e}`),as:"h2",level:3,children:Object(A.jsx)(l.a,{text:"Error: Redacted",start:"exited"!==e,delay:300})}),Object(A.jsx)(h.a,{className:s()("page-404__description",`page-404__description--${e}`),children:"This page could not be found. It either doesn\u2019t exist or was deleted. Or perhaps you don\u2019t exist."}),Object(A.jsx)(i.a,{secondary:!0,iconHoverShift:!0,className:s()("page-404__button",`page-404__button--${e}`),href:"/",icon:"chevronRight",children:"Back to homepage"})]})}),Object(A.jsxs)("div",{className:s()("page-404__video-container",`page-404__video-container--${e}`),children:[Object(A.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:s()("page-404__video",`page-404__video--${e}`),poster:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAAoADIDAREAAhEBAxEB/8QAHAAAAgICAwAAAAAAAAAAAAAAAAQFBgECAwcK/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAQBAwUGAv/aAAwDAQACEAMQAAAA8/4AXvY5WLXfrGftgAAAXPV5uvI7EbQ4ABvPm97HLcUe6lmb+ZFKmNYmQuU7F3OOil364jsI0tp1MaR6euWWrtmGc9GppGlnBIH/xAApEAABAwMBCAEFAAAAAAAAAAABAgMEAAURBgcQEhMUISIyICQxQWGR/9oACAEBAAE/AN2znSNqlM9Vc0BRV6g1tFhwLfcTGhsBI/XxT2qz35EGzpKVELSPGtRXR+5yi6/9/gww9KdDDCCpROEgVozYTqLULZmThyGkpz5VcNLtW5qRFQ6FdOf7Sj1EzBT+alwkFZKDinGlNe27Tc42y5JnBAUWzmoe2qZJiGLx8A4cYFXR0vWw3ND2eYrzFSkRIX1Lae6hUmTkcwHvTrynVZVuZjdPCL5PtUV0pcNTL0UW5MVCu1SJJeh4J70VEjG//8QAIBEAAgICAQUBAAAAAAAAAAAAAQIAEQMEEgUQICFRMv/aAAgBAgEBPwDtoayMLabyoj0vlizBMUz5Dkaz4KCxoTV6Pmzjk3oR9cICPk/TRkhFdtduD8ovVWKkTIbx8/sYIvuFoTfYLSXENGNlpKELcl8P/8QAJBEAAgICAQMEAwAAAAAAAAAAAgMAAQQSEQUQMQYgIlETIUH/2gAIAQMBAT8A7dY6g8C1XOisc5Ox37n4ltyL+phIFC+B9hGIDtc6l6qw8O9A+VxGcTrErrzK+C4pl8fuCVF2zFU5Fh9w/TKgZt5mOOrvxXXiLtjORuLD+QR1rtZ7s1qGPIxWNy2yuLDVk47/AP/Z",children:Object(A.jsx)("source",{src:g,type:"video/mp4"})}),Object(A.jsx)("a",{className:s()("page-404__credit",`page-404__credit--${e}`),href:"https://twitter.com/ruinergame",target:"_blank",rel:"noopener noreferrer",children:"Animation from Ruiner"})]})]})})]})}}}]);
//# sourceMappingURL=5.8ad8ce84.chunk.js.map