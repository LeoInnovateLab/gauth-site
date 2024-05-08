"use strict";(self.webpackChunkgauth_site=self.webpackChunkgauth_site||[]).push([[361],{7726:(e,t,n)=>{n.d(t,{Ay:()=>l,RM:()=>r});var i=n(4848),o=n(8453);const r=[{value:"Demo",id:"demo",level:2}];function s(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"demo",children:"Demo"}),"\n",(0,i.jsxs)(t.p,{children:["Recommend using ",(0,i.jsx)(t.a,{href:"https://github.com/LeoInnovateLab/gauth-demo",children:"GAuth Demo"})," for testing."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Clone ",(0,i.jsx)(t.a,{href:"https://github.com/LeoInnovateLab/gauth-demo.git",children:"https://github.com/LeoInnovateLab/gauth-demo.git"})]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Fill in the requested ",(0,i.jsx)(t.code,{children:"App Id"})," and ",(0,i.jsx)(t.code,{children:"App secrets"})," in ",(0,i.jsx)(t.code,{children:".env.demo"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Then, Start project, visit ",(0,i.jsx)(t.code,{children:"http://localhost:8080/"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Demo",src:n(7664).A+"",title:"demo",width:"2594",height:"1854"})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},4838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var i=n(4848),o=n(8453),r=n(7726);const s={sidebar_position:1},l="Introduction",c={id:"index",title:"Introduction",description:"\u26a1\ufe0f GAuth can help simplify the authorization login process for third-party platforms.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Github Authorization",permalink:"/docs/Integrations/github"}},a={},h=[{value:"Currently Supported",id:"currently-supported",level:2},{value:"Installation",id:"installation",level:2},{value:"Step",id:"step",level:2},...r.RM];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"\u26a1\ufe0f GAuth can help simplify the authorization login process for third-party platforms."}),"\n",(0,i.jsx)(t.h2,{id:"currently-supported",children:"Currently Supported"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.github.com/zh/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps",children:"Github OAuth"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://developers.google.com/identity/protocols/oauth2?hl=zh-cn",children:"Google OAuth"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://developers.facebook.com/products/facebook-login/",children:"Facebook OAuth"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://api.slack.com/authentication",children:"Slack OAuth"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"go get github.com/LeoInnovateLab/gauth\n"})}),"\n",(0,i.jsx)(t.h2,{id:"step",children:"Step"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Register as a developer account for third-party platforms, such as: ",(0,i.jsx)(t.a,{href:"https://github.com/settings/developers",children:"GitHub developer account"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Create an application for the third-party platform and obtain configuration information.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Client Id"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Client Secrets"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Callback URL"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Utilize GAuth for authorization login."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'// create authorization request\nauthRequest, err := gauth.New().\n\t\tSource("github").\n\t\tClientId("your_client_id").\n\t\tClientSecret("your_client_secret").\n\t\tRedirectUrl("http://localhost:8080/auth/github/callback").\n\t\tBuild()\n\n// generate authorization URL\t\t\nauthorizeUrl, err := authRequest.Authorize("state")\n\n// After authorization login, it will return login information.\nresponse, err := authRequest.Login(callback)\n'})}),"\n",(0,i.jsx)(r.Ay,{})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7664:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/demo-afd423f5dc83b5700ad0b1d4a78e093d.jpg"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var i=n(6540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);