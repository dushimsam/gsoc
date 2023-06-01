"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[7493],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var o=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,s=function(e,t){if(null==e)return{};var a,o,s={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(a),c=s,g=u["".concat(l,".").concat(c)]||u[c]||h[c]||n;return a?o.createElement(g,i(i({ref:t},p),{},{components:a})):o.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,i=new Array(n);i[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:s,i[1]=r;for(var d=2;d<n;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},74375:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var o=a(87462),s=(a(67294),a(3905));const n={title:"Week 5",author:"Shruti Agarwal"},i=void 0,r={unversionedId:"2021/ui/updates/shruti/2021-07-13",id:"2021/ui/updates/shruti/2021-07-13",title:"Week 5",description:"\x3c!--",source:"@site/docs/2021/ui/updates/shruti/2021-07-13.md",sourceDirName:"2021/ui/updates/shruti",slug:"/2021/ui/updates/shruti/2021-07-13",permalink:"/gsoc/docs/2021/ui/updates/shruti/2021-07-13",draft:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/ui/updates/shruti/2021-07-13.md",tags:[],version:"current",frontMatter:{title:"Week 5",author:"Shruti Agarwal"},sidebar:"2021",previous:{title:"Week 4",permalink:"/gsoc/docs/2021/ui/updates/shruti/2021-07-06"},next:{title:"Week 6",permalink:"/gsoc/docs/2021/ui/updates/shruti/2021-07-20"}},l={},d=[{value:"Screenshots",id:"screenshots",level:2},{value:"Edit Uploads",id:"edit-uploads",level:3},{value:"Snackbar",id:"snackbar",level:3},{value:"One-Shot License Analysis",id:"one-shot-license-analysis",level:3},{value:"One-Shot Copright/Email/URL Analysis",id:"one-shot-coprightemailurl-analysis",level:3},{value:"One-Shot Monk",id:"one-shot-monk",level:3},{value:"Upload From Version Control System",id:"upload-from-version-control-system",level:3},{value:"Browse Page Pagination",id:"browse-page-pagination",level:3},{value:"Contributions",id:"contributions",level:2}],p={toc:d},u="wrapper";function h(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Added the edit Uploads page. Created the getFolders page from where it is fetching all the folders. Created the organizeUploads which contains deleteUploadFile and getUploadsById."),(0,s.kt)("li",{parentName:"ul"},"Replaced the getFolders Api function with the common function in editUploads."),(0,s.kt)("li",{parentName:"ul"},"Updated the alerts styling to snackbars. Closes issue ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/issues/67"},"#67"),"."),(0,s.kt)("li",{parentName:"ul"},"Added the vcs upload page."),(0,s.kt)("li",{parentName:"ul"},"Added the recursive request for the request of ",(0,s.kt)("inlineCode",{parentName:"li"},"/uploads/{id}"),", retries is set to be for 10 now."),(0,s.kt)("li",{parentName:"ul"},"Created the issue for single request for the upload and analysis as discussed in the meeting with which user don't have to wait for the analysis process."),(0,s.kt)("li",{parentName:"ul"},"Currently, we are not having REST API for edit the uploads, we need to expose the edit upload from api, so created the issue for it."),(0,s.kt)("li",{parentName:"ul"},"Remove the redundancy of credentials in the api by setting initial value of credentials to include."),(0,s.kt)("li",{parentName:"ul"},"Added the one-shot license analysis page and all the related states to it."),(0,s.kt)("li",{parentName:"ul"},"Added the one-shot copyright/email/url page and all the related states to it."),(0,s.kt)("li",{parentName:"ul"},"Added the one-shot monk page and all the related states to it."),(0,s.kt)("li",{parentName:"ul"},"Created the issue for Access-Control-Expose-Headers response header indicates which headers can be exposed as part of the response by listing their names."),(0,s.kt)("li",{parentName:"ul"},"Added the list of all Access control headers and Expose headers used in the fossology."),(0,s.kt)("li",{parentName:"ul"},"Added the pagination feature in browse page."),(0,s.kt)("li",{parentName:"ul"},"Added the entries field and pagination just like the current implementation."),(0,s.kt)("li",{parentName:"ul"},"Stored the response header of x-total-pages in localStorage.")),(0,s.kt)("h2",{id:"screenshots"},"Screenshots"),(0,s.kt)("h3",{id:"edit-uploads"},"Edit Uploads"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"edit-uploads",src:a(57301).Z,width:"1920",height:"1080"})),(0,s.kt)("h3",{id:"snackbar"},"Snackbar"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"danger-snackbar",src:a(32780).Z,width:"1920",height:"1080"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"sucess-snackbar",src:a(86725).Z,width:"1920",height:"1080"})),(0,s.kt)("h3",{id:"one-shot-license-analysis"},"One-Shot License Analysis"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"one-shot-license-analysis",src:a(34113).Z,width:"1920",height:"1080"})),(0,s.kt)("h3",{id:"one-shot-coprightemailurl-analysis"},"One-Shot Copright/Email/URL Analysis"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"one-shot-copyright-email-url-analysis",src:a(86459).Z,width:"1920",height:"1080"})),(0,s.kt)("h3",{id:"one-shot-monk"},"One-Shot Monk"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"one-shot-monk",src:a(3672).Z,width:"1920",height:"1080"})),(0,s.kt)("h3",{id:"upload-from-version-control-system"},"Upload From Version Control System"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"upload-from-version-control-system",src:a(65958).Z,width:"1920",height:"1080"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"upload-from-version-control-system-request",src:a(33403).Z,width:"1920",height:"1080"})),(0,s.kt)("h3",{id:"browse-page-pagination"},"Browse Page Pagination"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"browse-page-pagination",src:a(29801).Z,width:"1920",height:"1080"})),(0,s.kt)("h2",{id:"contributions"},"Contributions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/issues/70"},"feat(copyright): Added the one-shot copyright/email/url page")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/70"},"feat(oneShotMonk): Added the one-shot monk page ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/70"},"feat(oneShotAnalysis): Added the one-shot license analysis page ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/71"},"feat(vcs): added the upload vcs page")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/fossology/fossology/issues/2046"},"REST API: Created the single request for the upload and analysis")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/74"},"fix(api): remove the redundancy of credentials")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/77"},"feat(edit-upload): added the edit upload page")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/77"},"fix(folder): fixed the getAllFolders api")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/fossology/fossology/issues/2047"},"REST API: Edit request for the Uploads")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/78"},"feat(snackbar): updated the alerts to snackbar")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/81"},"feat(browse-pagination): Added the browse pagination feature")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/fossology/fossology/issues/2041"},"Getting all the headers in response from the Rest APIs")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/fossology/fossology/pull/2042"},"feat(expose-headers): added the expose headers option"))))}h.isMDXComponent=!0},29801:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/browsePagePagination-e24f8d3c38adf3f2623814248a37dac7.png"},57301:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/editUpload-a6a5602484bae59bb842e78926bd1cc4.png"},86459:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/oneShotCopyrightAnalysis-fdc30a9e5b997cb1a12092bb3bf0aeed.png"},34113:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/oneShotLicenseAnalysis-cfd9d2862842b6c2f328df21d11e48d7.png"},3672:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/oneShotMonk-722d6a763e5ecbc9687a54c1430ebb7a.png"},65958:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/uploadVcs-2085d770c18d976e830e378ff96d2bfc.png"},33403:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/uploadVcsRequest-414bc9eb24bfbffe65aabbfae30bc00d.png"},32780:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/dangerSnackbar-b60dd15fbcdca60bbb7c6468ee468284.png"},86725:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/successSnackbar-152d2a01f0187c8b2215bed5f4eb56b7.png"}}]);