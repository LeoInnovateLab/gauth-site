"use strict";(self.webpackChunkgauth_site=self.webpackChunkgauth_site||[]).push([[210],{7169:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>a});var r=n(4848),o=n(8453);const s={sidebar_position:1},i="GAuth \u4ecb\u7ecd",u={id:"index",title:"GAuth \u4ecb\u7ecd",description:"\u26a1\ufe0f GAuth \u53ef\u4ee5\u5e2e\u60a8\u7b80\u5316\u7b2c\u4e09\u65b9\u5e73\u53f0\u7684\u6388\u6743\u767b\u5f55\u6d41\u7a0b",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/index.md",sourceDirName:".",slug:"/",permalink:"/zh/docs/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Github \u6388\u6743\u767b\u5f55",permalink:"/zh/docs/Integrations/github"}},l={},a=[{value:"\u76ee\u524d\u652f\u6301\u7684\u7b2c\u4e09\u65b9",id:"\u76ee\u524d\u652f\u6301\u7684\u7b2c\u4e09\u65b9",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528\u6b65\u9aa4",id:"\u4f7f\u7528\u6b65\u9aa4",level:2},{value:"\u6f14\u793a\u7a0b\u5e8f",id:"\u6f14\u793a\u7a0b\u5e8f",level:2}];function c(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"gauth-\u4ecb\u7ecd",children:"GAuth \u4ecb\u7ecd"}),"\n",(0,r.jsx)(e.p,{children:"\u26a1\ufe0f GAuth \u53ef\u4ee5\u5e2e\u60a8\u7b80\u5316\u7b2c\u4e09\u65b9\u5e73\u53f0\u7684\u6388\u6743\u767b\u5f55\u6d41\u7a0b"}),"\n",(0,r.jsx)(e.h2,{id:"\u76ee\u524d\u652f\u6301\u7684\u7b2c\u4e09\u65b9",children:"\u76ee\u524d\u652f\u6301\u7684\u7b2c\u4e09\u65b9"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://docs.github.com/zh/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps",children:"Github OAuth"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://developers.google.com/identity/protocols/oauth2?hl=zh-cn",children:"Google OAuth"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"go get github.com/LeoInnovateLab/gauth\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u4f7f\u7528\u6b65\u9aa4",children:"\u4f7f\u7528\u6b65\u9aa4"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\u7533\u8bf7\u6ce8\u518c\u7b2c\u4e09\u65b9\u5e73\u53f0\u7684\u5f00\u53d1\u8005\u8d26\u53f7\uff0c\u6bd4\u5982\uff1a",(0,r.jsx)(e.a,{href:"https://github.com/settings/developers",children:"Github \u7684\u5f00\u53d1\u8005\u8d26\u53f7"}),"\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["\u521b\u5efa\u7b2c\u4e09\u65b9\u5e73\u53f0\u7684\u5e94\u7528\uff0c\u83b7\u53d6\u914d\u7f6e\u4fe1\u606f\u3002","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"Client Id"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"Client Secrets"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"Callback URL"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"GAuth"})," \u6388\u6743\u767b\u5f55"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'// \u521b\u5efa\u6388\u6743 request\nauthRequest, err := gauth.New().\n\t\tSource("github").\n\t\tClientId("your_client_id").\n\t\tClientSecret("your_client_secret").\n\t\tRedirectUrl("http://localhost:8080/auth/github/callback").\n\t\tBuild()\n\n// \u751f\u6210\u6388\u6743 URL\t\t\nauthorizeUrl, err := authRequest.Authorize("state")\n\n// \u6388\u6743\u767b\u5f55\u540e\u4f1a\u8fd4\u56de\u8ba4\u8bc1\u767b\u5f55\u4fe1\u606f\nresponse, err := authRequest.Login(callback)\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u6f14\u793a\u7a0b\u5e8f",children:"\u6f14\u793a\u7a0b\u5e8f"}),"\n",(0,r.jsx)(e.p,{children:"main.go"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"encoding/json"\n\t"fmt"\n\t"github.com/LeoInnovateLab/gauth"\n\t_ "github.com/LeoInnovateLab/gauth/register"\n\t"github.com/LeoInnovateLab/gauth/utils"\n\t"github.com/gorilla/schema"\n\t"github.com/joho/godotenv"\n\t"log"\n\t"net/http"\n\t"os"\n)\n\nvar authRequestMap = make(map[string]gauth.AuthRequest)\n\nfunc main() {\n\terr := godotenv.Load(".env.local")\n\tif err != nil {\n\t\tlog.Fatalf("Error loading .env file %v", err)\n\t}\n\n\tport := 8080\n\n\thttp.HandleFunc("GET /auth/{source}/login", login)\n\thttp.HandleFunc("GET /auth/{source}/callback", callback)\n\n\terr = http.ListenAndServe(fmt.Sprintf(":%d", port), nil)\n\tif err != nil {\n\t\tlog.Printf("Failed to start server:%v", err)\n\t\treturn\n\t}\n}\n\nfunc pickAuthRequest(source string) gauth.AuthRequest {\n\tif authRequest, ok := authRequestMap[source]; ok {\n\t\treturn authRequest\n\t}\n\n\tvar clientId, secret string\n\n\tswitch source {\n\tcase "github":\n\t\tclientId = os.Getenv("GITHUB_CLIENT_ID")\n\t\tsecret = os.Getenv("GITHUB_SECRET")\n\t\tbreak\n\tcase "google":\n\t\tclientId = os.Getenv("GOOGLE_CLIENT_ID")\n\t\tsecret = os.Getenv("GOOGLE_SECRET")\n\t\tbreak\n\t}\n\n\tauthRequest, err := gauth.New().\n\t\tSource(source).\n\t\tClientId(clientId).\n\t\tClientSecret(secret).\n\t\tRedirectUrl(fmt.Sprintf("http://localhost:8080/auth/%s/callback", source)).\n\t\tBuild()\n\n\tif err != nil {\n\t\tlog.Fatalf("Failed to build request:%v", err)\n\t}\n\n\tauthRequestMap[source] = authRequest\n\n\treturn authRequest\n}\n\nfunc login(w http.ResponseWriter, r *http.Request) {\n\tsource := r.PathValue("source")\n\tauthRequest := pickAuthRequest(source)\n\tauthorizeUrl, err := authRequest.Authorize(utils.CreateState())\n\tif err != nil {\n\t\tlog.Printf("Failed to authorize:%v", err)\n\t\thttp.Error(w, "Failed to authorize", http.StatusInternalServerError)\n\t\treturn\n\t}\n\n\thttp.Redirect(w, r, authorizeUrl, http.StatusMovedPermanently)\n}\n\nfunc callback(w http.ResponseWriter, r *http.Request) {\n\tsource := r.PathValue("source")\n\tauthRequest := pickAuthRequest(source)\n\n\tvar c gauth.AuthCallback\n\n\tdecoder := schema.NewDecoder()\n\tdecoder.IgnoreUnknownKeys(true)\n\terr := decoder.Decode(&c, r.URL.Query())\n\tif err != nil {\n\t\tlog.Printf("Failed to decode request body:%v", err)\n\t\thttp.Error(w, "Failed to decode request body", http.StatusBadRequest)\n\t\treturn\n\t}\n\n\tresponse, err := authRequest.Login(c)\n\tvar jsonByte []byte\n\tif err != nil {\n\t\tlog.Printf("Failed to login:%v", err)\n\t\tjsonByte, _ = json.Marshal(err)\n\t\thttp.Error(w, string(jsonByte), http.StatusBadRequest)\n\t\treturn\n\t} else {\n\t\tjsonByte, _ = json.Marshal(response)\n\t}\n\tw.Header().Set("Content-Type", "application/json")\n\tw.Write(jsonByte)\n}\n\n'})}),"\n",(0,r.jsx)(e.p,{children:".env.local"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-env",children:"GITHUB_CLIENT_ID=your_github_client_id\nGITHUB_SECRET=your_github_secret\n\nGOOGLE_CLIENT_ID=your_google_client_id\nGOOGLE_SECRET=your_google_secret\n"})})]})}function h(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(c,{...t})}):c(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>u});var r=n(6540);const o={},s=r.createContext(o);function i(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function u(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);