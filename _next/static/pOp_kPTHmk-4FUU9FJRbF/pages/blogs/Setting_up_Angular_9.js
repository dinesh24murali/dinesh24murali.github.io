(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{EhlY:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var n=a("q1tI"),l=a.n(n),i=a("8Kt/"),s=a.n(i),c=a("nOHt"),o=a.n(c),r=a("vDqi"),d=a.n(r),m=a("RPjP"),u=a.n(m),h=a("9+7C"),f=a("6ldB"),g=a.n(f),w=a("rxnA"),p=a("6yR0"),b=a("6821"),N=a("4Gqn"),_=a("RQaA"),v=l.a.createElement;function k(e){var t="Setting_up_Angular_9",a=Object(n.useState)({title:"",description:"",categoryId:"",readTimeMin:0,date:Object(N.a)(),content:[]}),i=a[0],c=a[1],r=Object(n.useState)([]),m=r[0],f=r[1];Object(n.useEffect)((function(){d.a.get("".concat(w.baseUrl,"/api/articles/").concat(t,".json")).then((function(e){if(e){c({content:e.data.content&&e.data.content.length?e.data.content:[],title:e.data.title,description:e.data.description,date:Object(N.a)(e.data.date),readTimeMin:e.data.readTimeMin,categoryId:e.data.categoryId})}window.scrollTo(0,0)})).catch((function(e){o.a.push("/","/",{shallow:!1})}))}),[t]),Object(n.useEffect)((function(){Object(N.b)().then((function(e){e&&f(e.data&&e.data.length?e.data:[])})).catch((function(e){}))}),[]);var k,y=!(k=i.content)||k.length<=0?null:k.map((function(e,t){return e.isGist&&e.gist?v(h.a,{key:t,className:"mt-3 mb-3",id:e.gist}):e.isMainHeading?v("div",{className:"main-heading",key:t,dangerouslySetInnerHTML:{__html:e.html}}):e.isSubHeading?v("div",{className:"sub-heading",key:t,dangerouslySetInnerHTML:{__html:e.html}}):e.isCodeSection?v("div",{className:"code-section",key:t,dangerouslySetInnerHTML:{__html:e.html}}):e.isQuoted?v("div",{className:"quote",key:t,dangerouslySetInnerHTML:{__html:e.html}}):v("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}})})),T={linkedIn:"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.dineshmg.com/".concat(t,"&title=Learn%20Web%20development&summary=&source="),facebook:"https://www.facebook.com/sharer/sharer.php?u=https%3A//www.dineshmg.com/".concat(t),twitter:"https://twitter.com/home?status=https%3A//www.dineshmg.com/".concat(t)};return v(l.a.Fragment,null,v(p.a,null),v(s.a,null,v("title",null,i.title),v("meta",{name:"description",content:i.description})),v("span",{className:"blog-page"},v("div",{className:"blog-page__container"},v(b.a,{urls:T}),v("div",{className:"container"},v("div",{className:"row"},v("div",{className:"col-12"},v(g.a.Google,{client:"ca-pub-3929370842605036",slot:"3072497734",format:"auto",responsive:"true"})),v("div",{className:"col-12"},v("div",{className:"heading-text"},i.title),v("p",{className:"lead"},Object(N.c)(i.date),"\xa0-\xa0",i.readTimeMin," mins read",v("ul",{className:"share"},v("li",null,v("a",{target:"_blank",className:"mr-5",rel:"noopener noreferrer",href:T.linkedIn},v("i",{className:"fab fa-linkedin"}))),v("li",null,v("a",{target:"_blank",className:"mr-5",rel:"noopener noreferrer",href:T.facebook},v("i",{className:"fab fa-facebook"}))),v("li",null,v("a",{target:"_blank",className:"mr-5",rel:"noopener noreferrer",href:T.twitter},v("i",{className:"fab fa-twitter"})))))),v("div",{className:"contents col-12"},y),v("div",{className:"col-12"},v("hr",null)),v("div",{className:"col-12"},v("div",{className:"recent"},"Recent Articles:")),v(_.a,{articles:m}),v("div",{className:"col-12"},v("hr",null)),v("div",{className:"col-12"},v(u.a,{shortname:"shadowfalls-github-io-webtutor-1",identifier:i.title+"123",title:i.title,onNewComment:function(){}})))))))}},d9Oe:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/Setting_up_Angular_9",function(){return a("EhlY")}])}},[["d9Oe",0,2,1,3,4]]]);