(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[640],{2605:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(5893);n(7294);function a(e){var t=e.className,n=void 0===t?"":t,a=e.href,i=void 0===a?"":a,r=e.children,l=e.target,o=void 0===l?"_blank":l,c=e.rel,h=void 0===c?"noopener noreferrer":c;return(0,s.jsx)("a",{className:n,href:i,target:o,rel:h,children:r})}},902:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var s=n(5893),a=n(7294),i=n(9008),r=n(8443),l=n(5675),o=n(7366),c=n(6767),h=n(6573),d=n(2443),u=n(6707),p=n.n(u),x=n(7073),g=n(541),A=n(1590),m=n(3971),f=n(7331),j=n(2322),w=n.n(j),b=n(2605),N={src:"/_next/static/image/public/blog/next_js_crash_course/next_js_crash_course.38823274b306a2240246090d6e1175e5.jpg",height:1240,width:1748,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAH/9oACAEBAAAAADT/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAE//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAC//xAAdEAABAgcAAAAAAAAAAAAAAAARAxIAARMVIzFx/9oACAEBAAE/ALgUJJDK7dNMMHCY/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="},_={src:"/_next/static/image/public/blog/next_js_crash_course/cropped-file-structure.e25bb4fbdc24e08cc70d2d7de3754d3f.png",height:367,width:403,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAsUlEQVR42lWOwarCMBRE8yPyMGnTlsQnWjFVUNAuFNJUxdZd//8vZrx05+IwizucuepyuXIcP5ymiff7jYvFH4uipLXFjHLeI6WEpmngnIfWGsZkgplRx8MZw/BBXe/h/Qbrdf2DarYtXs83YoxiWIm+QlU5lKWbU+1Dyb5P6B8PhhBotGGWZRAoU1Sn0z+H4SUzI9u2pc2tFCxySYFqtQuIXUIXO8qTXC415CCGfC5+AaYzWb62Yb9EAAAAAElFTkSuQmCC"},y=j.articleIds.nextJsCrashCourse;function v(){var e=(0,A.qr)().state,t=(0,a.useRef)(null),n=(0,a.useRef)("https://www.linkedin.com/sharing/share-offsite/?url=https://www.".concat(f.domain)),u=(0,a.useRef)(),j=(0,a.useRef)();(0,a.useEffect)((function(){if(t.current&&y&&f.domain)for(var e=t.current.querySelectorAll("a"),s=0;s<e.length;s+=1)e[s].href&&(e[s].href.includes("twitter")?j.current=e[s].href:e[s].href.includes("facebook")?u.current=e[s].href:e[s].href.includes("linkedin")&&(n.current=e[s].href))}),[t]);var v=function(e){e&&window.open(e,"","width=500,height=500")},k="https://www.".concat(f.domain).concat(w().nextJsCrashCourse),C="Next.js crash course",I=["ReactJS","NextJS"],S=(0,a.useRef)("npx create-next-app@latest"),E=(0,a.useRef)("import React from 'react';\n\nimport styles from '../styles/sample.module.css';\n\nexport default function index() {\n\n    return <h1 className={styles.heading}>Sample</h1>;\n}\n"),R=(0,a.useRef)(".heading {\n    font-size: 24px;\n    color: red;\n}\n"),T=(0,a.useRef)("import React from 'react';\n\nimport styles from '../styles/sample.module.css'\n\nexport default function index({\n    title\n}) {\n\n    return <h1 className={styles.heading}>{title}</h1>;\n}\n\nexport async function getStaticProps(context) {\n\n    let data = await fetch('http://localhost:3000/data.json');\n    data = await data.json();\n\n    return {\n        props: {\n            title: data.data.title\n        }, // will be passed to the page component as props\n    }\n}\n"),Z=(0,a.useRef)('{\n    "data": {\n        "title": "Simple"\n    }\n}'),B=(0,a.useRef)("module.exports = {\n    reactStrictMode: true,\n    images: {\n      loader: 'akamai',\n      path: '/',\n    },\n}\n"),P=(0,a.useRef)("import React from 'react';\n\nimport styles from '../styles/sample.module.css'\n\nexport default function index({\n    title\n}) {\n\n    return <h1 className={styles.heading}>{title}</h1>;\n}\n\nexport async function getStaticProps(context) {\n\n    let data = await fetch('http://localhost:3000/data.json');\n    data = await data.json();\n\n    return {\n        props: {\n            title: data.data.title\n        }, // will be passed to the page component as props\n        revalidate: 10, // In seconds\n    }\n}\n");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.default,{children:[(0,s.jsx)("title",{children:C}),(0,s.jsx)(g.Z,{blogTitle:C,blogDescription:"In this tutorial we will learn what next.js is and ",coverImage:"/blog/next_js_crash_course/next_js_crash_course.jpg",currentBlogUrl:k,datePublished:"Sat, 12 Feb 2022 10:07:00 -0500",dateModified:"Sat, 12 Feb 2022 10:07:00 -0500",estimatedReadingTimeInMinutes:8,tags:I.join(", ")})]}),(0,s.jsx)(d.Z,{}),(0,s.jsxs)("div",{ref:t,className:"d-none",children:[(0,s.jsx)(r.Twitter,{link:"https://www.".concat(f.domain,"/").concat(y)}),(0,s.jsx)(r.Facebook,{link:"https://www.".concat(f.domain,"/").concat(y)}),(0,s.jsx)(r.Linkedin,{link:"https://www.".concat(f.domain,"/").concat(y)})]}),(0,s.jsxs)("article",{className:"container ".concat(p().blog_container),itemScope:!0,itemType:"http://schema.org/Article",children:[(0,s.jsxs)("div",{className:p().blog_header_container,children:[(0,s.jsx)("header",{children:(0,s.jsx)("h1",{itemProp:"name",className:p().blog_title,children:C})}),(0,s.jsx)("figure",{children:(0,s.jsx)(l.default,{alt:"Photo by Elijah O'Donnell from Pexels",className:p().blog_image,src:N,width:"1748",height:"1249"})}),(0,s.jsxs)("div",{className:p().blog_large_screens,children:[(0,s.jsxs)("div",{className:p().sub_header,children:[(0,s.jsx)("div",{className:"d-flex justify-content-left ".concat(p().blog_tags),children:I.map((function(e){return(0,s.jsx)("div",{className:p().tag,children:e},e)}))}),(0,s.jsxs)("div",{className:p().read_time,children:[8," Minute Read"]})]}),(0,s.jsxs)("div",{className:"d-flex justify-content-right mt-30",children:[(0,s.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:function(){return v(u.current)},children:(0,s.jsx)(o.Z,{})}),(0,s.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:function(){return v(j.current)},children:(0,s.jsx)(c.Z,{})}),(0,s.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:function(){return v(n.current)},children:(0,s.jsx)(h.Z,{})})]})]}),(0,s.jsxs)("div",{className:p().blog_small_screens,children:[(0,s.jsxs)("div",{className:p().sub_header,children:[(0,s.jsx)("div",{className:"d-flex justify-content-left ".concat(p().blog_tags),children:I.map((function(e){return(0,s.jsx)("div",{className:p().tag,children:e},e)}))}),(0,s.jsxs)("div",{className:p().read_time,children:[8," Minute Read"]})]}),(0,s.jsxs)("div",{className:"d-flex justify-content-right mt-10",children:[(0,s.jsx)("a",{"aria-label":"facebook",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:function(){return v(u.current)},children:(0,s.jsx)(o.Z,{})}),(0,s.jsx)("a",{"aria-label":"twitter",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:function(){return v(j.current)},children:(0,s.jsx)(c.Z,{})}),(0,s.jsx)("a",{"aria-label":"linkedin",className:"mr-30 cursor-pointer",rel:"noopener noreferrer",onClick:function(){return v(n.current)},children:(0,s.jsx)(h.Z,{})})]})]})]}),(0,s.jsx)("div",{className:"d-flex ".concat(p().blog_content),children:(0,s.jsxs)("div",{className:p().article,children:[(0,s.jsxs)("p",{children:["In this tutorial we will learn what\xa0",(0,s.jsx)(b.Z,{className:p().highlight_link,href:"https://nextjs.org/",children:"Next.js"})," ","is, and how we can use it with React. A traditional React app is rendered in client side. When we open a React application in the browser it will download a shell of the HTML page lacking any rendered content. Then it will fetch the javascript that contains our React code to make the page usable. There are 2 drawbacks with this"]}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"The content is not reliably indexed by all search engines or read by social media link bots"}),(0,s.jsx)("li",{children:"It can take longer for the first content to paint when a user first lands on the webpage"})]}),(0,s.jsx)("p",{children:"Next.js is React framework that allows us to write web apps that support SEO (Search Engine Optimization). Instead of rendering the page in the client side, the page will be rendered in the server and the user or bot that visits our webpage will get the fully rendered HTML. After rendering the initial page client side rendering takes over and it works like a traditional React app. It is the best of both world."}),(0,s.jsx)("p",{children:"Next.js is flexible and can be used in different ways:"}),(0,s.jsx)("h2",{children:"Static generation:"}),(0,s.jsx)("p",{children:"This is suitable for websites that have content that doesn't change often, like a blog for example. Static generation allows you to render your pages at build time and you can use those build file in a server or a CDN."}),(0,s.jsx)("p",{children:"This is fine if your application has less than 100 pages, as your application gets bigger it will become hard to maintain."}),(0,s.jsx)("h2",{children:"Server side rendering:"}),(0,s.jsx)("p",{children:"This type of rendering it suitable for applications that change often and has a lot of dynamic content. In this approach the page will rendered every time there is a request to the server, unlike static generation where the files are rendered at build time."}),(0,s.jsx)("h2",{children:"Incremental Static Generation:"}),(0,s.jsx)("p",{children:"Incremental Static Generation is something in between the above two approaches. In this approach the server will send static files to the client but we can set a time interval, and Next will rerender the pages again and those newly generated files will be sent to the browser."}),(0,s.jsx)("h2",{children:"Setup a Next.js project:"}),(0,s.jsxs)("p",{children:["Lets learn how to setup a simple Next.js project. Next.js requires\xa0",(0,s.jsx)(b.Z,{className:p().highlight_link,href:"https://nodejs.org/",children:"Node.js 12.22.0"})," ","or later. Start by running the following command in you terminal. This will setup a simple next.js project"]}),(0,s.jsx)(x.Z,{code:S.current}),(0,s.jsx)("p",{children:"The above command will generate a project structure to something similar to the following. Open the project in your favorite editor, and lets explore what the project structure looks like."}),(0,s.jsx)(l.default,{alt:"",className:p().result_preview,src:_,width:"403",height:"367"}),(0,s.jsxs)("p",{children:["Next.js has its own router out of the box. Each file in the",(0,s.jsx)("span",{className:p().highlight_text,children:"pages"}),"directory exports a React component that represents a route. The folder structure will mirror the actual URLs that user will navigate to. We will see more about this shortly."]}),(0,s.jsxs)("p",{children:["The ",(0,s.jsx)("span",{className:p().highlight_text,children:"styles"})," ","directory contains all the styles that are used in the application. In the",(0,s.jsx)("span",{className:p().highlight_text,children:"globals.css"})," file you can put styles that apply to the entire application. Next.js supports\xa0",(0,s.jsx)(b.Z,{className:p().highlight_link,href:"https://css-tricks.com/css-modules-part-1-need/",children:"css modules"}),", any css file that ends with",(0,s.jsx)("span",{className:p().highlight_text,children:".module.css"})," is a css module. You can write css for a specific file using css modules. Using css modules you don't have to think of unique class names, next.js will handle the class names."]}),(0,s.jsxs)("p",{children:["The ",(0,s.jsx)("span",{className:p().highlight_text,children:"public"})," folder is where static assets like images and other files are present."]}),(0,s.jsxs)("p",{children:["You can change some configurations for your Next.js app in",(0,s.jsx)("span",{className:p().highlight_text,children:"next.config.js"})," file"]}),(0,s.jsxs)("p",{children:["Now lets add a new route to our application, in the ",(0,s.jsx)("b",{children:"pages"})," ","folder create a new file called"," ",(0,s.jsx)("span",{className:p().highlight_text,children:"sample.js"}),"and paste the following code into it."]}),(0,s.jsx)(x.Z,{code:E.current}),(0,s.jsxs)("p",{children:["Create a new file under ",(0,s.jsx)("b",{children:"styles"})," folder called"," ",(0,s.jsx)("span",{className:p().highlight_text,children:"sample.module.css"}),"and paste the following content inside it."]}),(0,s.jsx)(x.Z,{code:R.current}),(0,s.jsxs)("p",{children:["You will notice that in the ",(0,s.jsx)("b",{children:"sample.js"})," we have imported"," ",(0,s.jsx)("b",{children:"sample.module.css"}),"\xa0 as a css module and used the class"," ",(0,s.jsx)("span",{className:p().highlight_text,children:"heading"}),"as a JavaScript object."]}),(0,s.jsxs)("p",{children:["start the server by running"," ",(0,s.jsx)("span",{className:p().highlight_text,children:"npm run dev"})," or",(0,s.jsx)("span",{className:p().highlight_text,children:"yarn dev"})," in the terminal. If you goto\xa0",(0,s.jsx)(b.Z,{className:p().highlight_link,href:"http://localhost:3000/sample/",children:"localhost:3000/sample/"})," ","in you browser you will notice that the new page that we added in the next.js app is rendered"]}),(0,s.jsxs)("p",{children:["If you use the browser's ",(0,s.jsx)("b",{children:"devTools"})," and check the class name that is used in the ",(0,s.jsx)("b",{children:"<h1>"})," tag you will notice that it is different and probably has a random string appened at the end of the class name. This is how the class names are kept unique throught out the application."]}),(0,s.jsx)("h2",{children:"Setup static generation:"}),(0,s.jsxs)("p",{children:["Now lets setup static generation in our app. In our"," ",(0,s.jsx)("b",{children:"sample.js"})," file lets add a method called"," ",(0,s.jsx)("span",{className:p().highlight_text,children:"getStaticProps"}),"\xa0 and update the code to the following"]}),(0,s.jsx)(x.Z,{code:T.current}),(0,s.jsxs)("p",{children:["Create a file called"," ",(0,s.jsx)("span",{className:p().highlight_text,children:"data.json"})," under the\xa0",(0,s.jsx)("b",{children:"public"})," directory and paste the following content into it"]}),(0,s.jsx)(x.Z,{code:Z.current}),(0,s.jsxs)("p",{children:["At build time when Next is building the app, it will call the"," ",(0,s.jsx)("b",{children:"getStaticProps"}),"\xa0 method to get the data needed for rendering the page. We can fetch the data that we need by calling an API or making a database connection in this function since this function runs asynchronously. In this case we are calling an api to get data from a json file."]}),(0,s.jsxs)("p",{children:["Now before we can build we need to put an the export script in the package so that next will generate the build files. Open your"," ",(0,s.jsx)("span",{className:p().highlight_text,children:"package.json"}),"\xa0 and put"," ",(0,s.jsx)("span",{className:p().highlight_text,children:'"postbuild": "next export"'})," ","under the scripts section along side"," ",(0,s.jsx)("span",{className:p().highlight_text,children:'"build":"next build"'})]}),(0,s.jsxs)("p",{children:["Now keep the development server running (run ",(0,s.jsx)("b",{children:"yarn dev"}),"), and open another terminal and run",(0,s.jsx)("span",{className:p().highlight_text,children:"yarn build"}),". This will build our app and will automatically run the ",(0,s.jsx)("b",{children:"postbuild"})," ","script that we just added. We needed to keep the development server running because it will serve the ",(0,s.jsx)("b",{children:"data.json"})," file that next will use at build time."]}),(0,s.jsxs)("p",{children:["If you are getting an error during build please update your"," ",(0,s.jsx)("b",{children:"next.config.js"}),"\xa0 file to the following. This will fix the image export problem which might occure"]}),(0,s.jsx)(x.Z,{code:B.current}),(0,s.jsxs)("p",{children:["If the build worked you should see a folder called"," ",(0,s.jsx)("span",{className:p().highlight_text,children:"out"}),"\xa0 Which contains all the static html."]}),(0,s.jsx)("h2",{children:"Setup server side rendering:"}),(0,s.jsxs)("p",{children:["To setup server size rendering rename ",(0,s.jsx)("b",{children:"getStaticProps"})," to"," ",(0,s.jsx)("span",{className:p().highlight_text,children:"getServerSideProps"}),".\xa0 It work exactly like before, except instead of generating the html at build time, it will generate for each request."]}),(0,s.jsx)("h2",{children:"Setup incremental static generation:"}),(0,s.jsxs)("p",{children:["To setup"," ",(0,s.jsx)("span",{className:p().highlight_text,children:"Incremental Static Generation"})," ","you just need to add\xa0",(0,s.jsx)("span",{className:p().highlight_text,children:"revalidate: 10, // In seconds"})," ","to the ",(0,s.jsx)("b",{children:"getStaticProps"}),"\xa0 method as show below"]}),(0,s.jsx)(x.Z,{code:P.current}),(0,s.jsxs)("p",{children:["The interval we have given here is 10 seconds, Next will generate the html every 10 seconds instead of generating at each request. However you need a service provide like\xa0",(0,s.jsx)(b.Z,{className:p().highlight_link,href:"https://vercel.com/",children:"vercel"})," ","who provide the servers that support incremental static generation. Because the generated files need to be cached to global CDN based on the given interval"]}),(0,s.jsxs)("p",{children:["The source code for this entire tutorial can be found in this\xa0",(0,s.jsx)(b.Z,{className:p().highlight_link,href:"https://github.com/dinesh24murali/nextjs_example",children:"repo"}),"."]})]})})]}),(0,s.jsx)(m.Z,{className:"".concat(p().footer," ").concat(0===e.theme?p().dark:p().light),footerTextColor:p().footer_text_color})]})}},6206:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/react/next_js_crash_course",function(){return n(902)}])}},function(e){e.O(0,[75,516,774,888,179],(function(){return t=6206,e(e.s=t);var t}));var t=e.O();_N_E=t}]);