(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"Mpn+":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/Interceptors_in_Angular_9",function(){return a("xt1S")}])},xt1S:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return _}));var n=a("q1tI"),l=a.n(n),c=a("8Kt/"),r=a.n(c),i=a("nOHt"),s=a.n(i),m=a("vDqi"),o=a.n(m),d=a("RPjP"),u=a.n(d),h=a("9+7C"),E=a("6ldB"),f=a.n(E),p=a("rxnA"),w=a("6yR0"),g=a("6821"),b=a("4Gqn"),N=a("RQaA");l.a.createElement;function _(e){var t="Interceptors_in_Angular_9",a=Object(n.useState)({title:"",description:"",categoryId:"",readTimeMin:0,date:Object(b.a)(),content:[]}),c=a[0],i=a[1],m=Object(n.useState)([]),d=m[0],E=m[1];Object(n.useEffect)((function(){o.a.get("".concat(p.baseUrl,"/api/articles/").concat(t,".json")).then((function(e){if(e){i({content:e.data.content&&e.data.content.length?e.data.content:[],title:e.data.title,description:e.data.description,date:Object(b.a)(e.data.date),readTimeMin:e.data.readTimeMin,categoryId:e.data.categoryId})}window.scrollTo(0,0)})).catch((function(e){s.a.push("/","/",{shallow:!1})}))}),[t]),Object(n.useEffect)((function(){Object(b.b)().then((function(e){e&&E(e.data&&e.data.length?e.data:[])})).catch((function(e){}))}),[]);var _,v=!(_=c.content)||_.length<=0?null:_.map((function(e,t){return e.isGist&&e.gist?l.a.createElement(h.a,{key:t,className:"mt-3 mb-3",id:e.gist}):e.isMainHeading?l.a.createElement("div",{className:"main-heading",key:t,dangerouslySetInnerHTML:{__html:e.html}}):e.isSubHeading?l.a.createElement("div",{className:"sub-heading",key:t,dangerouslySetInnerHTML:{__html:e.html}}):e.isCodeSection?l.a.createElement("div",{className:"code-section",key:t,dangerouslySetInnerHTML:{__html:e.html}}):e.isQuoted?l.a.createElement("div",{className:"quote",key:t,dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}})})),k={linkedIn:"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.dineshmg.com/".concat(t,"&title=Learn%20Web%20development&summary=&source="),facebook:"https://www.facebook.com/sharer/sharer.php?u=https%3A//www.dineshmg.com/".concat(t),twitter:"https://twitter.com/home?status=https%3A//www.dineshmg.com/".concat(t)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,null),l.a.createElement(r.a,null,l.a.createElement("title",null,c.title),l.a.createElement("meta",{name:"description",content:c.description})),l.a.createElement("span",{className:"blog-page"},l.a.createElement("div",{className:"blog-page__container"},l.a.createElement(g.a,{urls:k}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(f.a.Google,{client:"ca-pub-3929370842605036",slot:"3072497734",format:"auto",responsive:"true"})),l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"heading-text"},c.title),l.a.createElement("p",{className:"lead"},Object(b.c)(c.date),"\xa0-\xa0",c.readTimeMin," mins read",l.a.createElement("ul",{className:"share"},l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",className:"mr-5",rel:"noopener noreferrer",href:k.linkedIn},l.a.createElement("i",{className:"fab fa-linkedin"}))),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",className:"mr-5",rel:"noopener noreferrer",href:k.facebook},l.a.createElement("i",{className:"fab fa-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",className:"mr-5",rel:"noopener noreferrer",href:k.twitter},l.a.createElement("i",{className:"fab fa-twitter"})))))),l.a.createElement("div",{className:"contents col-12"},v),l.a.createElement("div",{className:"col-12"},l.a.createElement("hr",null)),l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"recent"},"Recent Articles:")),l.a.createElement(N.a,{articles:d}),l.a.createElement("div",{className:"col-12"},l.a.createElement("hr",null)),l.a.createElement("div",{className:"col-12"},l.a.createElement(u.a,{shortname:"shadowfalls-github-io-webtutor-1",identifier:c.title+"123",title:c.title,onNewComment:function(){}})))))))}}},[["Mpn+",0,2,1,3,4]]]);