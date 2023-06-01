"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[4683],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45597:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Week 8",author:"Omar AbdelSamea"},o=void 0,l={unversionedId:"2021/microservice/updates/2021-07-27",id:"2021/microservice/updates/2021-07-27",title:"Week 8",description:"\x3c!--",source:"@site/docs/2021/microservice/updates/2021-07-27.md",sourceDirName:"2021/microservice/updates",slug:"/2021/microservice/updates/2021-07-27",permalink:"/gsoc/docs/2021/microservice/updates/2021-07-27",draft:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/microservice/updates/2021-07-27.md",tags:[],version:"current",frontMatter:{title:"Week 8",author:"Omar AbdelSamea"},sidebar:"2021",previous:{title:"Week 7",permalink:"/gsoc/docs/2021/microservice/updates/2021-07-20"},next:{title:"Week 9",permalink:"/gsoc/docs/2021/microservice/updates/2021-08-03"}},c={},s=[{value:"Meeting 0",id:"meeting-0",level:2},{value:"Organizer",id:"organizer",level:3},{value:"Attendees",id:"attendees",level:3},{value:"Outcomes",id:"outcomes",level:3},{value:"Migrating agent configuration to etcd",id:"migrating-agent-configuration-to-etcd",level:2},{value:"End of the week result",id:"end-of-the-week-result",level:2}],u={toc:s},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"coding-week-8"},"Coding Week 8"),(0,a.kt)("h2",{id:"meeting-0"},"Meeting 0"),(0,a.kt)("h3",{id:"organizer"},"Organizer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gaurav Mishra")),(0,a.kt)("h3",{id:"attendees"},"Attendees"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Anupam Ghosh"),(0,a.kt)("li",{parentName:"ul"},"Vasudev"),(0,a.kt)("li",{parentName:"ul"},"Ayush Bharadwaj"),(0,a.kt)("li",{parentName:"ul"},"Shreya Singh"),(0,a.kt)("li",{parentName:"ul"},"Kaushlendra Pratap Singh"),(0,a.kt)("li",{parentName:"ul"},"Omar AbdelSamea")),(0,a.kt)("h3",{id:"outcomes"},"Outcomes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Presented a possible implementation of migrating agent configuration to etcd."),(0,a.kt)("li",{parentName:"ul"},"Discussed the issues that happened while trying to apply agent UI issue solution.")),(0,a.kt)("h2",{id:"migrating-agent-configuration-to-etcd"},"Migrating agent configuration to etcd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"in the agent's entrypoint, ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OmarAbdelSamea/fossology/blob/OmarAbdelSamea/GSoC/Microservices/Docker/conf.sh"},"conf.sh")," will open agent conf file in ",(0,a.kt)("inlineCode",{parentName:"li"},"/usr/share/fossology/<agent_name>/<agent_name>.conf")," and start iterating over it and extracts agent conf then create a PUT request to etcd pod for each configuration."),(0,a.kt)("li",{parentName:"ul"},"To reload the scheduler configuration ",(0,a.kt)("inlineCode",{parentName:"li"},"fo_cli")," will be used using ",(0,a.kt)("inlineCode",{parentName:"li"},"--reload")," option.")),(0,a.kt)("h2",{id:"end-of-the-week-result"},"End of the week result"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Migrated Agent configuraiton from ",(0,a.kt)("inlineCode",{parentName:"li"},"<agent_name>.conf")," to etcd ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/OmarAbdelSamea/fossology/blob/OmarAbdelSamea/GSoC/Microservices/src/scheduler/agent/scheduler.c#L795"},"scheduler_agent_config")))),(0,a.kt)("li",{parentName:"ul"},"created conf.sh to iterate over agent configuration and make the appropriate API calls to etcd container."),(0,a.kt)("li",{parentName:"ul"},"Added fo_cli and modified entrypoint to reload scheduler configuration."),(0,a.kt)("li",{parentName:"ul"},"Applied discussed solution of bundling UI folders inside web package.")))}p.isMDXComponent=!0}}]);