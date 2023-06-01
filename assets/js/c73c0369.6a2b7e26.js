"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[4414],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),p=a,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},77542:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"Week 7",author:"Omar AbdelSamea"},o=void 0,l={unversionedId:"2021/microservice/updates/2021-07-20",id:"2021/microservice/updates/2021-07-20",title:"Week 7",description:"\x3c!--",source:"@site/docs/2021/microservice/updates/2021-07-20.md",sourceDirName:"2021/microservice/updates",slug:"/2021/microservice/updates/2021-07-20",permalink:"/gsoc/docs/2021/microservice/updates/2021-07-20",draft:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/microservice/updates/2021-07-20.md",tags:[],version:"current",frontMatter:{title:"Week 7",author:"Omar AbdelSamea"},sidebar:"2021",previous:{title:"Week 6",permalink:"/gsoc/docs/2021/microservice/updates/2021-07-13"},next:{title:"Week 8",permalink:"/gsoc/docs/2021/microservice/updates/2021-07-27"}},s={},u=[{value:"Meeting 0",id:"meeting-0",level:2},{value:"Organizer",id:"organizer",level:3},{value:"Attendees",id:"attendees",level:3},{value:"Outcomes",id:"outcomes",level:3},{value:"Meeting 1",id:"meeting-1",level:2},{value:"Organizer",id:"organizer-1",level:3},{value:"Attendees",id:"attendees-1",level:3},{value:"Outcomes",id:"outcomes-1",level:3},{value:"End of the week result",id:"end-of-the-week-result",level:2}],c={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"coding-week-7"},"Coding Week 7"),(0,a.kt)("h2",{id:"meeting-0"},"Meeting 0"),(0,a.kt)("h3",{id:"organizer"},"Organizer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gaurav Mishra")),(0,a.kt)("h3",{id:"attendees"},"Attendees"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Anupam Ghosh"),(0,a.kt)("li",{parentName:"ul"},"Vasudev"),(0,a.kt)("li",{parentName:"ul"},"Ayush Bharadwaj"),(0,a.kt)("li",{parentName:"ul"},"Shreya Singh"),(0,a.kt)("li",{parentName:"ul"},"Kaushlendra Pratap Singh"),(0,a.kt)("li",{parentName:"ul"},"Omar AbdelSamea")),(0,a.kt)("h3",{id:"outcomes"},"Outcomes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Discussed the issue of agent UI folders, agent UI folders are present in each agent container. The web container can't access those folders. The discussed solution will be to bundle all UI folders in the web Debian package."),(0,a.kt)("li",{parentName:"ul"},"Presented integration of etcd in scheduler code after migrating the ",(0,a.kt)("inlineCode",{parentName:"li"},"Hosts")," from ",(0,a.kt)("inlineCode",{parentName:"li"},"fossology.conf")," to etcd."),(0,a.kt)("li",{parentName:"ul"},"Showed the structure of agent configuration in Json format."),(0,a.kt)("li",{parentName:"ul"},"Gaurav provided solution for agent UI issue for the current build system.")),(0,a.kt)("h2",{id:"meeting-1"},"Meeting 1"),(0,a.kt)("h3",{id:"organizer-1"},"Organizer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gaurav Mishra")),(0,a.kt)("h3",{id:"attendees-1"},"Attendees"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ayush Bharadwaj"),(0,a.kt)("li",{parentName:"ul"},"Vasudev Maduri"),(0,a.kt)("li",{parentName:"ul"},"Kaushlendra Singh"),(0,a.kt)("li",{parentName:"ul"},"Shreya Pratap"),(0,a.kt)("li",{parentName:"ul"},"Omar AbdelSamea")),(0,a.kt)("h3",{id:"outcomes-1"},"Outcomes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Showed a demo for a working system using hosts from etcd. "),(0,a.kt)("li",{parentName:"ul"},"Discussed the migration of agent configuration to etcd.")),(0,a.kt)("h2",{id:"end-of-the-week-result"},"End of the week result"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Migrated Hosts from ",(0,a.kt)("inlineCode",{parentName:"li"},"fossology.conf")," to etcd ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/OmarAbdelSamea/fossology/blob/OmarAbdelSamea/GSoC/Microservices/src/scheduler/agent/scheduler.c#L971"},"scheduler_foss_config")," in scheduler.c"))),(0,a.kt)("li",{parentName:"ul"},"Started on migrating agent configuration to etcd")))}m.isMDXComponent=!0}}]);