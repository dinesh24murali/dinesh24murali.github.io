(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"B+ae":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return _}));var n=a("q1tI"),r=a.n(n),c=a("8Kt/"),l=a.n(c),i=(a("YFqc"),a("nOHt")),o=a.n(i),s=a("vDqi"),m=a.n(s),u=a("RPjP"),d=a.n(u),f=a("9+7C"),h=a("6ldB"),E=a.n(h),b=a("rxnA"),p=a("6yR0"),w=a("6821"),g=a("4Gqn"),y=a("RQaA");function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(o){r=!0,c=o}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return N(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function _(e){var t=Object(i.useRouter)().query.id,a=v(Object(n.useState)({title:"",description:"",categoryId:"",readTimeMin:0,date:Object(g.a)(),content:[]}),2),c=a[0],s=a[1],u=v(Object(n.useState)([]),2),h=u[0],N=u[1];Object(n.useEffect)((function(){t&&m.a.get("".concat(b.baseUrl,"/api/articles/").concat(t,".json")).then((function(e){if(e){s({content:e.data.content&&e.data.content.length?e.data.content:[],title:e.data.title,description:e.data.description,date:Object(g.a)(e.data.date),readTimeMin:e.data.readTimeMin,categoryId:e.data.categoryId})}window.scrollTo(0,0)})).catch((function(e){o.a.push("/","/",{shallow:!1})}))}),[t]),Object(n.useEffect)((function(){Object(g.b)().then((function(e){e&&N(e.data&&e.data.length?e.data:[])})).catch((function(e){}))}),[]);var _,k=!(_=c.content)||_.length<=0?null:_.map((function(e,t){return e.isGist&&e.gist?r.a.createElement(f.a,{key:t,className:"mt-3 mb-3",id:e.gist}):e.isMainHeading?r.a.createElement("div",{className:"main-heading",key:t,dangerouslySetInnerHTML:{__html:e.html}}):e.isSubHeading?r.a.createElement("div",{className:"sub-heading",key:t,dangerouslySetInnerHTML:{__html:e.html}}):e.isCodeSection?r.a.createElement("div",{className:"code-section",key:t,dangerouslySetInnerHTML:{__html:e.html}}):e.isQuoted?r.a.createElement("div",{className:"quote",key:t,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}})})),j={linkedIn:"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.dineshmg.com/".concat(t,"&title=Learn%20Web%20development&summary=&source="),facebook:"https://www.facebook.com/sharer/sharer.php?u=https%3A//www.dineshmg.com/".concat(t),twitter:"https://twitter.com/home?status=https%3A//www.dineshmg.com/".concat(t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null),r.a.createElement(l.a,null,r.a.createElement("title",null,c.title),r.a.createElement("meta",{name:"description",content:c.description})),r.a.createElement("span",{className:"blog-page"},r.a.createElement("div",{className:"blog-page__container"},r.a.createElement(w.a,{urls:j}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(E.a.Google,{client:"ca-pub-3929370842605036",slot:"3072497734",format:"auto",responsive:"true"})),r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"heading-text"},c.title),r.a.createElement("p",{className:"lead"},Object(g.c)(c.date),"\xa0-\xa0",c.readTimeMin," mins read",r.a.createElement("ul",{className:"share"},r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",className:"mr-5",rel:"noopener noreferrer",href:j.linkedIn},r.a.createElement("i",{className:"fab fa-linkedin"}))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",className:"mr-5",rel:"noopener noreferrer",href:j.facebook},r.a.createElement("i",{className:"fab fa-facebook"}))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",className:"mr-5",rel:"noopener noreferrer",href:j.twitter},r.a.createElement("i",{className:"fab fa-twitter"})))))),r.a.createElement("div",{className:"contents col-12"},k),r.a.createElement("div",{className:"col-12"},r.a.createElement("hr",null)),r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"recent"},"Recent Articles:")),r.a.createElement(y.a,{articles:h}),r.a.createElement("div",{className:"col-12"},r.a.createElement("hr",null)),r.a.createElement("div",{className:"col-12"},r.a.createElement(d.a,{shortname:"shadowfalls-github-io-webtutor-1",identifier:c.title+"123",title:c.title,onNewComment:function(){}})))))))}},QYyz:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/archive/archive_backup_id",function(){return a("B+ae")}])}},[["QYyz",0,2,1,3,4]]]);