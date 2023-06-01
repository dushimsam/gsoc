"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[2744],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13897:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={title:"Community Bonding",author:"Avinal Kumar",author_url:"https://github.com/avinal",author_image_url:"https://avatars.githubusercontent.com/u/74113200?v=4",tags:["gsoc21","buildsystem","ci/cd","cmake"]},l=void 0,s={unversionedId:"2021/buildsystem/updates/2021-05-28",id:"2021/buildsystem/updates/2021-05-28",title:"Community Bonding",description:"\x3c!--",source:"@site/docs/2021/buildsystem/updates/2021-05-28.md",sourceDirName:"2021/buildsystem/updates",slug:"/2021/buildsystem/updates/2021-05-28",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-05-28",draft:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/buildsystem/updates/2021-05-28.md",tags:[{label:"gsoc21",permalink:"/gsoc/docs/tags/gsoc-21"},{label:"buildsystem",permalink:"/gsoc/docs/tags/buildsystem"},{label:"ci/cd",permalink:"/gsoc/docs/tags/ci-cd"},{label:"cmake",permalink:"/gsoc/docs/tags/cmake"}],version:"current",frontMatter:{title:"Community Bonding",author:"Avinal Kumar",author_url:"https://github.com/avinal",author_image_url:"https://avatars.githubusercontent.com/u/74113200?v=4",tags:["gsoc21","buildsystem","ci/cd","cmake"]},sidebar:"2021",previous:{title:"Introduction",permalink:"/gsoc/docs/2021/buildsystem/"},next:{title:"Week 1",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-06-11"}},o={},u=[{value:"Meeting 1",id:"meeting-1",level:2},{value:"Attendees",id:"attendees",level:3},{value:"Discussions",id:"discussions",level:3},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans",level:3},{value:"Meeting 2",id:"meeting-2",level:2},{value:"Attendees",id:"attendees-1",level:3},{value:"Discussions",id:"discussions-1",level:3},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans-1",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"meeting-1"},"Meeting 1"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(May 28th, 2021)")),(0,r.kt)("p",null,"This meeting is the first of the recurring weekly GSoC project meetings. In this meeting the current status of progress according to the proposal was discussed and some topics related to current build system based on Make and the new build system based on CMake."),(0,r.kt)("h3",{id:"attendees"},"Attendees"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/GMishx"},"Gaurav Mishra")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ag4ums"},"Anupam Ghosh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hastagAB"},"Ayush Bhardwaj")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/itssingh"},"Sarita Singh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/avinal"},"Avinal Kumar"))),(0,r.kt)("h3",{id:"discussions"},"Discussions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The current progress according to schedule"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The blog on CMake is on the way."),(0,r.kt)("li",{parentName:"ul"},"I have gone through the Makefiles to get a rough estimate of the work."),(0,r.kt)("li",{parentName:"ul"},"Published the GSoC project blog"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"How are agents related to each other in terms of compilation?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Each agent is independently compiled and generally use the source code in ",(0,r.kt)("inlineCode",{parentName:"li"},"lib")," folder. If any agent needs other agent then it uses the library files instead."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Does every agent have a executable and library?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Not necessarily, there are agents written in C, C++ and PHP, depending on what is the use the configuration can be different.")))),(0,r.kt)("h3",{id:"conclusion-and-further-plans"},"Conclusion and Further Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It would be better if I get started by creating CMake configuration for any of the agent."),(0,r.kt)("li",{parentName:"ul"},"Fork and create a branch for development and mention the same in blog or wiki."),(0,r.kt)("li",{parentName:"ul"},"Add a timeline section in blog or wiki as provided in the project proposal."),(0,r.kt)("li",{parentName:"ul"},"Publish the CMake introductory blog."),(0,r.kt)("li",{parentName:"ul"},"Prepare a prototype/plan for next week."),(0,r.kt)("li",{parentName:"ul"},"Find out the best alternative for handling the global variables.")),(0,r.kt)("h2",{id:"meeting-2"},"Meeting 2"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(June 4th, 2021)")),(0,r.kt)("p",null,"In this second meeting points over default Makefiles were discussed. Ninja can be used as an alternative for Makefiles."),(0,r.kt)("h3",{id:"attendees-1"},"Attendees"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/GMishx"},"Gaurav Mishra")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ag4ums"},"Anupam Ghosh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/itssingh"},"Sarita Singh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/avinal"},"Avinal Kumar"))),(0,r.kt)("h3",{id:"discussions-1"},"Discussions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"What is the use of")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Makefile.deps")," ",(0,r.kt)("strong",{parentName:"li"},"and")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Makefile.process")," ",(0,r.kt)("strong",{parentName:"li"},"files?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Makefile.deps")," consists of many used and unused snippets. These snippets help setup the build and test environment for fossology. Since there are many directories that are hardcoded, special care is required while replacing this file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Makefile.process")," generates a master variable from list of variables. It assists the script in ",(0,r.kt)("inlineCode",{parentName:"li"},"Makefile.conf")," file. These files together generate a list of variables that can be used throughout the build process."))),(0,r.kt)("li",{parentName:"ul"},"The build can be made faster using ",(0,r.kt)("strong",{parentName:"li"},"Ninja")," instead of ",(0,r.kt)("strong",{parentName:"li"},"Make"),"."),(0,r.kt)("li",{parentName:"ul"},"Ninja supports parallel builds by default."),(0,r.kt)("li",{parentName:"ul"},"Print the flags used once the CMake configuration is working. That will help us debug the process.")),(0,r.kt)("h3",{id:"conclusion-and-further-plans-1"},"Conclusion and Further Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Write a ",(0,r.kt)("em",{parentName:"li"},"CMakeLists.txt")," for ",(0,r.kt)("strong",{parentName:"li"},"lib"),"."),(0,r.kt)("li",{parentName:"ul"},"Push the working branch and update the link either on wiki or blog.")))}d.isMDXComponent=!0}}]);