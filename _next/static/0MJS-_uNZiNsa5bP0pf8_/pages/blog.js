(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{BR8T:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n("YbiN")}])},YbiN:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),i=n.n(a),c=n("q1tI"),l=n.n(c),r=n("8Kt/"),o=n.n(r),s=n("nOHt"),d=n.n(s),u=n("e3s2"),m=n("9+7C"),h=n("6ldB"),f=n.n(h),p=n("rxnA"),g=n("6yR0"),v=n("4Gqn"),b=n("RQaA"),w=n("vPY1"),N=l.a.createElement;function y(){var e=Object(s.useRouter)().query.id,t=Object(c.useState)({title:"",description:"",categoryId:"",readTimeMin:0,date:Object(v.c)(),content:[]}),n=t[0],a=t[1],i=Object(c.useState)([]),r=i[0],h=i[1],y=Object(c.useRef)(null),_=Object(c.useState)([{provider:"linkedin",url:"https://www.linkedin.com/sharing/share-offsite/?url=http%3A%2F%2F".concat(p.domain)}]),k=_[0],O=_[1];Object(c.useEffect)((function(){e&&Object(v.a)(e).then((function(e){if(e){var t=e.data&&e.data.data?e.data.data:e.data?e.data:{};a({content:t.content&&t.content.length?t.content:[],title:t.title,description:t.description,date:Object(v.c)(t.date),readTimeMin:t.readTimeMin,categoryId:t.categoryId})}window.scrollTo(0,0)})).catch((function(){d.a.push("/","/",{shallow:!1})}))}),[e]),Object(c.useEffect)((function(){Object(v.d)().then((function(e){e&&h(e.data&&e.data.length?e.data:[])})).catch((function(){}))}),[]),Object(c.useEffect)((function(){if(y.current&&e&&p.domain){for(var t=y.current.querySelectorAll("a"),n=JSON.parse(JSON.stringify(k)),a=0;a<t.length;a+=1)t[a].href&&(t[a].href.includes("twitter")?n.push({provider:"twitter",url:t[a].href}):t[a].href.includes("facebook")&&n.push({provider:"facebook",url:t[a].href}));O(n)}}),[y,e,p.domain]);var T,j=!(T=n.content)||T.length<=0?null:T.map((function(e,t){return e.isImage&&e.imageUrl?N("div",{className:"d-flex justify-content-center"},N("img",{src:e.imageUrl,alt:""})):e.isGist&&e.gist?N(m.a,{key:t,className:"mt-3 mb-3",id:e.gist}):e.isMainHeading?N("div",{className:"main-heading",key:t,dangerouslySetInnerHTML:{__html:e.html}}):e.isSubHeading?N("div",{className:"sub-heading",key:t,dangerouslySetInnerHTML:{__html:e.html}}):e.isCodeSection?N("div",{className:"code-section",key:t,dangerouslySetInnerHTML:{__html:e.html}}):e.isQuoted?N("div",{className:"quote",key:t,dangerouslySetInnerHTML:{__html:e.html}}):N("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}})}));return N(l.a.Fragment,null,N(g.a,null),N(o.a,null,N("title",null,n.title),N("meta",{name:"description",content:n.description})),N("span",{className:"blog-page"},N("div",{className:"blog-page__container"},N(w.a,null),N("div",{className:"container"},N("div",{className:"row"},N("div",{className:"col-12 header-ad"},N(f.a.Google,{client:p.adClientId,slot:"3072497734",format:"auto",responsive:"true"})),N("div",{className:"col-12"},N("h1",{className:"heading-text"},n.title),N("p",{className:"lead"},Object(v.e)(n.date),"\xa0-\xa0",n.readTimeMin," ","mins read"),N("ul",{className:"share"},N("li",{ref:y,className:"hide-links"},N(u.Twitter,{link:"https://www.".concat(p.domain,"/").concat(e)}),N(u.Facebook,{link:"https://www.".concat(p.domain,"/").concat(e)})),k.map((function(e){return N("li",null,N("a",{"aria-label":e.provider,style:{cursor:"pointer"},className:"mr-5",rel:"noopener noreferrer",onClick:function(){var t;(t=e.url)&&window.open(t,"","width=500,height=500")}},N("i",{className:"fab fa-".concat(e.provider)})))})))),N("div",{className:"contents col-12"},j),N("div",{className:"col-12"},N("hr",null)),N("div",{className:"col-12"},N(f.a.Google,{client:p.adClientId,slot:"9591641415",format:"auto",responsive:"true"})),N("div",{className:"col-12"},N("div",{className:"recent"},"You might be interested in:")),N(b.a,{articles:r}))))))}y.getInitialProps=function(e){var t,n;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.Component,n=e.pageProps,a.abrupt("return",N(t,n));case 2:case"end":return a.stop()}}),null,null,null,Promise)},t.default=y}},[["BR8T",0,2,1,3,4]]]);