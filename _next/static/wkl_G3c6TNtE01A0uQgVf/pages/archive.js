(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1dI+":function(a,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return g}));var t=n("q1tI"),c=n.n(t),i=n("nOHt"),s=n.n(i),r=n("8Kt/"),l=n.n(r),d=n("YFqc"),o=n.n(d),u=n("vDqi"),m=n.n(u),v=n("4Gqn"),b=n("rxnA"),N=n("6yR0"),f=c.a.createElement;function g(){var a=Object(t.useState)([]),e=a[0],n=a[1],r=Object(i.useRouter)().query,d=r.name,u=r.id;Object(t.useEffect)((function(){u&&m.a.get("".concat(b.baseUrl,"/api/categories/").concat(u,".json")).then((function(a){a.data&&Array.isArray(a.data)&&n(a.data)})).catch((function(a){s.a.push("/","/",{shallow:!1})}))}),[u]);var g=e.map((function(a){var e=Object(b.getArticleUrl)(a.blogId);return f(c.a.Fragment,{key:a.blogId},f("div",{className:"card-margin"},f("div",{className:"card"},f("div",{className:"card-body"},f("h5",{className:"card-title"},a.blogName),f("div",{className:"details"},Object(v.c)(a.date)+" - "+a.readTimeMin+" mins read"),f(o.a,{href:e},"read more")))))}));return f(c.a.Fragment,null,f(N.a,null),f(l.a,null,f("title",null,"Dinesh Murali")),f("span",{className:"blog-list"},f("div",{className:"blog-list__container"},f("div",{className:"container"},f("div",{className:"row"},f("div",{className:"col-12"},f("div",{className:"heading-text"},d),d&&f("p",{className:"lead"},"Available articles"))),g))))}},"1jat":function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/archive",function(){return n("1dI+")}])}},[["1jat",0,2,1,3]]]);