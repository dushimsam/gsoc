"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[808],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},20162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Week 6",author:"Kaushlendra"},o=void 0,l={unversionedId:"2021/copyrights/updates/2021-07-13",id:"2021/copyrights/updates/2021-07-13",title:"Week 6",description:"\x3c!--",source:"@site/docs/2021/copyrights/updates/2021-07-13.md",sourceDirName:"2021/copyrights/updates",slug:"/2021/copyrights/updates/2021-07-13",permalink:"/gsoc/docs/2021/copyrights/updates/2021-07-13",draft:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/copyrights/updates/2021-07-13.md",tags:[],version:"current",frontMatter:{title:"Week 6",author:"Kaushlendra"},sidebar:"2021",previous:{title:"Week 4 & 5",permalink:"/gsoc/docs/2021/copyrights/updates/2021-07-06"},next:{title:"Week 7",permalink:"/gsoc/docs/2021/copyrights/updates/2021-07-20"}},s={},c=[{value:"Attendees",id:"attendees",level:3},{value:"Discussions",id:"discussions",level:3},{value:"Week 6 Progress",id:"week-6-progress",level:3},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"coding-week-6-meeting"},"Coding Week 6 Meeting"),(0,a.kt)("h3",{id:"attendees"},"Attendees"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Anupam Ghosh"),(0,a.kt)("li",{parentName:"ul"},"Gaurav Mishra"),(0,a.kt)("li",{parentName:"ul"},"Vasudev "),(0,a.kt)("li",{parentName:"ul"},"Ayush Bharadwaj"),(0,a.kt)("li",{parentName:"ul"},"Shreya Singh"),(0,a.kt)("li",{parentName:"ul"},"Kaushlendra Pratap Singh"),(0,a.kt)("li",{parentName:"ul"},"Omar AbdelSamea ")),(0,a.kt)("h3",{id:"discussions"},"Discussions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Checking results manually and understanding the edge cases."),(0,a.kt)("li",{parentName:"ul"},"Implementation of the edge cases like Differentiating between ","['Date']"," and ","['Cardinal]","."),(0,a.kt)("li",{parentName:"ul"},"Figuring out the solutions for the DATE and CARDINAL anomaly."),(0,a.kt)("li",{parentName:"ul"},"Go through different manually checked copyright CSV provided and The final CSV provided by Michael."),(0,a.kt)("li",{parentName:"ul"},"Generating the Accuracy score for true positives."),(0,a.kt)("li",{parentName:"ul"},"Thoughts for implementing our own NER model and creating an entity-based table according to our copyrights.")),(0,a.kt)("h3",{id:"week-6-progress"},"Week 6 Progress"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[Date]"," needed to be an important entity for copyright recognition. Various solutions have been implemented to get more and more accurate about it."),(0,a.kt)("li",{parentName:"ul"},"Solution was: ","['Cardinal']"," --\x3e was included into the NER list and then a python date format check has been implemented which will check whether the date is present in the NER",'["Entity"]'," list. (This is reducing the accuracy that means it is not working)"),(0,a.kt)("li",{parentName:"ul"},"I am working on another solution using regex which will help in removing one more kind of edge case."),(0,a.kt)("li",{parentName:"ul"},"Divided the datasets into chunks of 10,000 and will traverse through it and check the ideal results on all over it."),(0,a.kt)("li",{parentName:"ul"},"Accuracy Score for True Positives was calculated: ",(0,a.kt)("strong",{parentName:"li"},"87.6%")," which will further increase after removing few more edge cases."),(0,a.kt)("li",{parentName:"ul"},"The dataset also contains human errors and it is impacting our accuracy score for TP as well."),(0,a.kt)("li",{parentName:"ul"},"Wiki has been Updated")),(0,a.kt)("h3",{id:"conclusion-and-further-plans"},"Conclusion and Further Plans"),(0,a.kt)("p",null,"Understanding the edge cases and calculating the accuracy score for statements more than 50 thousand statements."))}p.isMDXComponent=!0}}]);