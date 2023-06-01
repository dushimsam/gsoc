"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[9052],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Week 10",author:"Soham Banerjee",author_url:"https://github.com/soham4abc",author_image_url:"https://avatars.githubusercontent.com/u/63705023?v=4",tags:["gsoc22","react","API"]},o=void 0,s={unversionedId:"2022/ui/updates/soham/2022-08-08",id:"2022/ui/updates/soham/2022-08-08",title:"Week 10",description:"\x3c!--",source:"@site/docs/2022/ui/updates/soham/2022-08-08.md",sourceDirName:"2022/ui/updates/soham",slug:"/2022/ui/updates/soham/2022-08-08",permalink:"/gsoc/docs/2022/ui/updates/soham/2022-08-08",draft:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2022/ui/updates/soham/2022-08-08.md",tags:[{label:"gsoc22",permalink:"/gsoc/docs/tags/gsoc-22"},{label:"react",permalink:"/gsoc/docs/tags/react"},{label:"API",permalink:"/gsoc/docs/tags/api"}],version:"current",frontMatter:{title:"Week 10",author:"Soham Banerjee",author_url:"https://github.com/soham4abc",author_image_url:"https://avatars.githubusercontent.com/u/63705023?v=4",tags:["gsoc22","react","API"]},sidebar:"2022",previous:{title:"Week 8 and 9",permalink:"/gsoc/docs/2022/ui/updates/soham/2022-08-05"},next:{title:"Installation",permalink:"/gsoc/docs/2022/ui/installation"}},l={},c=[{value:"Fix failing tests due to lint errors",id:"fix-failing-tests-due-to-lint-errors",level:2},{value:"PR link - fix(lint): openapi lint corrected",id:"pr-link---fixlint-openapi-lint-corrected",level:3},{value:"Started with UI integration for clearing status",id:"started-with-ui-integration-for-clearing-status",level:2},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"fix-failing-tests-due-to-lint-errors"},"Fix failing tests due to lint errors"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(September 14th, 2022)")),(0,a.kt)("p",null,"Worked on finding failing tests and linting issues."),(0,a.kt)("p",null,"found issues on the file ",(0,a.kt)("inlineCode",{parentName:"p"},"openapi.yaml")," and fixed them"),(0,a.kt)("h3",{id:"pr-link---fixlint-openapi-lint-corrected"},"PR link - ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/fossology/fossology/pull/2311"},"fix(lint): openapi lint corrected")),(0,a.kt)("h2",{id:"started-with-ui-integration-for-clearing-status"},"Started with UI integration for clearing status"),(0,a.kt)("p",null,"Started with the implementation of UI for the clearing statuses:\nCurrently finished indexing the images as follows:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"index",src:n(96250).Z,width:"600",height:"142"})),(0,a.kt)("h3",{id:"conclusion-and-further-plans"},"Conclusion and Further Plans"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Completing documentations and preparing for final evaluation sumbission"),(0,a.kt)("li",{parentName:"ul"},"Implementing the Files to be cleared operation in both Backend and UI")))}d.isMDXComponent=!0},96250:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/indexing-9b01b96d73c19322ba3cd6a96534b530.png"}}]);