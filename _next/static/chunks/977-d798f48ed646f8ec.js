(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{8872:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let n=r(8754),o=r(1757),i=o._(r(7294)),a=n._(r(2636)),s=r(5471),u=r(3735),c=r(3341);r(4210);let l=n._(r(7746)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://alreadynyeong.github.io/Portfolio/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function d(e,t,r,n,o,i){let a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function p(e){let[t,r]=i.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let m=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:a,width:s,decoding:u,className:c,style:l,fetchPriority:f,placeholder:m,loading:y,unoptimized:h,fill:v,onLoadRef:g,onLoadingCompleteRef:b,setBlurComplete:w,setShowAltText:j,onLoad:x,onError:_,...O}=e;return i.default.createElement("img",{...O,...p(f),loading:y,width:s,height:a,decoding:u,"data-nimg":v?"fill":"1",className:c,style:l,sizes:o,srcSet:n,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&d(e,m,g,b,w,h))},[r,m,g,b,w,_,h,t]),onLoad:e=>{let t=e.currentTarget;d(t,m,g,b,w,h)},onError:e=>{j(!0),"blur"===m&&w(!0),_&&_(e)}})}),y=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(c.ImageConfigContext),n=(0,i.useMemo)(()=>{let e=f||r||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:o,onLoadingComplete:d}=e,y=(0,i.useRef)(o);(0,i.useEffect)(()=>{y.current=o},[o]);let h=(0,i.useRef)(d);(0,i.useEffect)(()=>{h.current=d},[d]);let[v,g]=(0,i.useState)(!1),[b,w]=(0,i.useState)(!1),{props:j,meta:x}=(0,s.getImgProps)(e,{defaultLoader:l.default,imgConf:n,blurComplete:v,showAltText:b});return i.default.createElement(i.default.Fragment,null,i.default.createElement(m,{...j,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:y,onLoadingCompleteRef:h,setBlurComplete:g,setShowAltText:w,ref:t}),x.priority?i.default.createElement(a.default,null,i.default.createElement("link",{key:"__nimg-"+j.src+j.srcSet+j.sizes,rel:"preload",as:"image",href:j.srcSet?void 0:j.src,imageSrcSet:j.srcSet,imageSizes:j.sizes,crossOrigin:j.crossOrigin,referrerPolicy:j.referrerPolicy,...p(j.fetchPriority)})):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5471:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(4210);let n=r(7757),o=r(3735);function i(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r;let s,u,c,{src:l,sizes:f,unoptimized:d=!1,priority:p=!1,loading:m,className:y,quality:h,width:v,height:g,fill:b=!1,style:w,onLoad:j,onLoadingComplete:x,placeholder:_="empty",blurDataURL:O,fetchPriority:S,layout:P,objectFit:E,objectPosition:C,lazyBoundary:I,lazyRoot:k,...M}=e,{imgConf:R,showAltText:T,blurComplete:A,defaultLoader:z}=t,$=R||o.imageConfigDefault;if("allSizes"in $)s=$;else{let e=[...$.deviceSizes,...$.imageSizes].sort((e,t)=>e-t),t=$.deviceSizes.sort((e,t)=>e-t);s={...$,allSizes:e,deviceSizes:t}}let L=M.loader||z;delete M.loader,delete M.srcSet;let D="__next_img_default"in L;if(D){if("custom"===s.loader)throw Error('Image with src "'+l+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...n}=t;return e(n)}}if(P){"fill"===P&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!f&&(f=t)}let W="",q=a(v),N=a(g);if("object"==typeof(r=l)&&(i(r)||void 0!==r.src)){let e=i(l)?l.default:l;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,c=e.blurHeight,O=O||e.blurDataURL,W=e.src,!b){if(q||N){if(q&&!N){let t=q/e.width;N=Math.round(e.height*t)}else if(!q&&N){let t=N/e.height;q=Math.round(e.width*t)}}else q=e.width,N=e.height}}let F=!p&&("lazy"===m||void 0===m);(!(l="string"==typeof l?l:W)||l.startsWith("data:")||l.startsWith("blob:"))&&(d=!0,F=!1),s.unoptimized&&(d=!0),D&&l.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(d=!0),p&&(S="high");let Q=a(h),V=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:C}:{},T?{}:{color:"transparent"},w),B="blur"===_&&O&&!A?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:q,heightInt:N,blurWidth:u,blurHeight:c,blurDataURL:O,objectFit:V.objectFit})+'")'}:{},H=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:a,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,a),l=u.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:u.map((e,n)=>s({config:t,src:r,quality:i,width:e})+" "+("w"===c?e:n+1)+c).join(", "),src:s({config:t,src:r,quality:i,width:u[l]})}}({config:s,src:l,unoptimized:d,width:q,quality:Q,sizes:f,loader:L}),U={...M,loading:F?"lazy":m,fetchPriority:S,width:q,height:N,decoding:"async",className:y,style:{...V,...B},sizes:H.sizes,srcSet:H.srcSet,src:H.src},Y={unoptimized:d,priority:p,placeholder:_,fill:b};return{props:U,meta:Y}}},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:a}=e,s=n||t,u=o||r,c=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&u?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+s+" "+u+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&o?"1":"20")+"'/%3E"+c+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return c},unstable_getImgProps:function(){return u}});let n=r(8754),o=r(5471),i=r(4210),a=r(8872),s=n._(r(7746)),u=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://alreadynyeong.github.io/Portfolio/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=a.Image},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},5675:function(e,t,r){e.exports=r(2555)},1852:function(e,t,r){var n;e.exports=(n=r(7294),(()=>{var e={"./node_modules/css-mediaquery/index.js":(e,t)=>{"use strict";t.match=function(e,t){return s(e).some(function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!(n||r))return!1;var o=e.expressions.every(function(e){var r=e.feature,n=e.modifier,o=e.value,i=t[r];if(!i)return!1;switch(r){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=l(o),i=l(i);break;case"resolution":o=c(o),i=c(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=u(o),i=u(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(n){case"min":return i>=o;case"max":return i<=o;default:return i===o}});return o&&!r||!o&&r})},t.parse=s;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map(function(e){var t=(e=e.trim()).match(r),i=t[1],a=t[2],s=t[3]||"",u={};return u.inverse=!!i&&"not"===i.toLowerCase(),u.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],u.expressions=s.map(function(e){var t=e.match(n),r=t[1].toLowerCase().match(o);return{modifier:r[1],feature:r[2],value:t[2]}}),u})}function u(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function l(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=/[A-Z]/g,o=/^ms-/,i={};function a(e){return"-"+e.toLowerCase()}let s=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(n,a);return i[e]=o.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":(e,t,r)=>{"use strict";var n=r(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,o="undefined"!=typeof window?window.matchMedia:null;function i(e,t,r){var i=this;if(o&&!r){var a=o.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=n(e,t),this.media=e;function s(e){i.matches=e.matches,i.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,t,r){return new i(e,t,r)}},"./node_modules/object-assign/index.js":e=>{"use strict";/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var o={};if("abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},o)).join(""))return!1;return!0}catch(e){return!1}}()?function(e,o){for(var i,a,s=function(e){if(null==e)throw TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in i=Object(arguments[u]))r.call(i,c)&&(s[c]=i[c]);if(t){a=t(i);for(var l=0;l<a.length;l++)n.call(i,a[l])&&(s[a[l]]=i[a[l]])}}return s}:Object.assign},"./node_modules/prop-types/checkPropTypes.js":(e,t,r)=>{"use strict";var n=function(){},o=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,r,s,u){for(var c in e)if(a(e,c)){var l;try{if("function"!=typeof e[c]){var f=Error((s||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw f.name="Invariant Violation",f}l=e[c](t,c,s,r,null,o)}catch(e){l=e}if(!l||l instanceof Error||n((s||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in i)){i[l.message]=!0;var d=u?u():"";n("Failed "+r+" type: "+l.message+(null!=d?d:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw Error(t)}catch(e){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":(e,t,r)=>{"use strict";var n=r(/*! react-is */"./node_modules/react-is/index.js"),o=r(/*! object-assign */"./node_modules/object-assign/index.js"),i=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),s=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js"),u=function(){};function c(){return null}u=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,l="<<anonymous>>",f={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:p(c),arrayOf:function(e){return p(function(t,r,n,o,a){if("function"!=typeof e)return new d("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s)){var u=h(s);return new d("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+n+"`, expected an array.")}for(var c=0;c<s.length;c++){var l=e(s,c,n,o,a+"["+c+"]",i);if(l instanceof Error)return l}return null})},element:p(function(t,r,n,o,i){var a=t[r];if(!e(a)){var s=h(a);return new d("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+n+"`, expected a single ReactElement.")}return null}),elementType:p(function(e,t,r,o,i){var a=e[t];if(!n.isValidElementType(a)){var s=h(a);return new d("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected a single ReactElement type.")}return null}),instanceOf:function(e){return p(function(t,r,n,o,i){if(!(t[r]instanceof e)){var a,s=e.name||l,u=(a=t[r]).constructor&&a.constructor.name?a.constructor.name:l;return new d("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+n+"`, expected instance of `"+s+"`.")}return null})},node:p(function(t,n,o,i,a){return!function t(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(t);if(null===n||e(n))return!0;var o=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(n);if(!o)return!1;var i,a=o.call(n);if(o!==n.entries){for(;!(i=a.next()).done;)if(!t(i.value))return!1}else for(;!(i=a.next()).done;){var s=i.value;if(s&&!t(s[1]))return!1}return!0;default:return!1}}(t[n])?new d("Invalid "+i+" `"+a+"` supplied to `"+o+"`, expected a ReactNode."):null}),objectOf:function(e){return p(function(t,r,n,o,s){if("function"!=typeof e)return new d("Property `"+s+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var u=t[r],c=h(u);if("object"!==c)return new d("Invalid "+o+" `"+s+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var l in u)if(a(u,l)){var f=e(u,l,n,o,s+"."+l,i);if(f instanceof Error)return f}return null})},oneOf:function(e){return Array.isArray(e)?p(function(t,r,n,o,i){for(var a,s=t[r],u=0;u<e.length;u++)if(s===(a=e[u])?0!==s||1/s==1/a:s!=s&&a!=a)return null;var c=JSON.stringify(e,function(e,t){return"symbol"===v(t)?String(t):t});return new d("Invalid "+o+" `"+i+"` of value `"+String(s)+"` supplied to `"+n+"`, expected one of "+c+".")}):(arguments.length>1?u("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):u("Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return u("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return u("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+function(e){var t=v(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}(r)+" at index "+t+"."),c}return p(function(t,r,n,o,s){for(var u=[],c=0;c<e.length;c++){var l=(0,e[c])(t,r,n,o,s,i);if(null==l)return null;l.data&&a(l.data,"expectedType")&&u.push(l.data.expectedType)}var f=u.length>0?", expected one of type ["+u.join(", ")+"]":"";return new d("Invalid "+o+" `"+s+"` supplied to `"+n+"`"+f+".")})},shape:function(e){return p(function(t,r,n,o,a){var s=t[r],u=h(s);if("object"!==u)return new d("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var l=e[c];if("function"!=typeof l)return y(n,o,a,c,v(l));var f=l(s,c,n,o,a+"."+c,i);if(f)return f}return null})},exact:function(e){return p(function(t,r,n,s,u){var c=t[r],l=h(c);if("object"!==l)return new d("Invalid "+s+" `"+u+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");var f=o({},t[r],e);for(var p in f){var m=e[p];if(a(e,p)&&"function"!=typeof m)return y(n,s,u,p,v(m));if(!m)return new d("Invalid "+s+" `"+u+"` key `"+p+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=m(c,p,n,s,u+"."+p,i);if(g)return g}return null})}};function d(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){var r={},n=0;function o(o,a,s,c,f,p,m){if(c=c||l,p=p||s,m!==i){if(t){var y=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("undefined"!=typeof console){var h=c+":"+s;!r[h]&&n<3&&(u("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[h]=!0,n++)}}return null!=a[s]?e(a,s,c,f,p):o?new d(null===a[s]?"The "+f+" `"+p+"` is marked as required in `"+c+"`, but its value is `null`.":"The "+f+" `"+p+"` is marked as required in `"+c+"`, but its value is `undefined`."):null}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function m(e){return p(function(t,r,n,o,i,a){var s=t[r];if(h(s)!==e){var u=v(s);return new d("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e})}return null})}function y(e,t,r,n,o){return new d((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function h(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":"symbol"===t||e&&("Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol)?"symbol":t}function v(e){if(null==e)return""+e;var t=h(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}return d.prototype=Error.prototype,f.checkPropTypes=s,f.resetWarningCache=s.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":(e,t,r)=>{var n=r(/*! react-is */"./node_modules/react-is/index.js");e.exports=r(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(n.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(e,t)=>{"use strict";!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var p=e.type;switch(p){case c:case l:case o:case a:case i:case d:return p;default:var h=p&&p.$$typeof;switch(h){case u:case f:case y:case m:case s:return h;default:return t}}case n:return t}}}var j=!1;function x(e){return w(e)===l}t.AsyncMode=c,t.ConcurrentMode=l,t.ContextConsumer=u,t.ContextProvider=s,t.Element=r,t.ForwardRef=f,t.Fragment=o,t.Lazy=y,t.Memo=m,t.Portal=n,t.Profiler=a,t.StrictMode=i,t.Suspense=d,t.isAsyncMode=function(e){return j||(j=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),x(e)||w(e)===c},t.isConcurrentMode=x,t.isContextConsumer=function(e){return w(e)===u},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===f},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===y},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===n},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===l||e===a||e===i||e===d||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===s||e.$$typeof===u||e.$$typeof===f||e.$$typeof===v||e.$$typeof===g||e.$$typeof===b||e.$$typeof===h)},t.typeOf=w}()},"./node_modules/react-is/index.js":(e,t,r)=>{"use strict";e.exports=r(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(e,t,r)=>{"use strict";function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),o=r.length;if(n.length!==o)return!1;for(var i=0;i<o;i++){var a=r[i];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:()=>o,shallowEqualObjects:()=>n})},"./src/Component.ts":function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,o=e.onChange,a=n(e,["children","device","onChange"]),s=(0,i.default)(a,r,o);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r(/*! react */"react").createContext)(void 0);t.default=n},"./src/index.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=n(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=o.default;var i=n(r(/*! ./Component */"./src/Component.ts"));t.default=i.default;var a=n(r(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=a.default;var s=n(r(/*! ./Context */"./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),u={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(u)};c.type;var l=o(c,["type"]),f=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},l),d=n(n({},u),f);t.default={all:d,types:u,matchers:c,features:f}},"./src/toQuery.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts")),a=function(e,t){var r=(0,o.default)(e);return("number"==typeof t&&(t="".concat(t,"px")),!0===t)?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")};t.default=function(e){var t=[];return Object.keys(i.default.all).forEach(function(r){var n=e[r];null!=n&&t.push(a(r,n))}),t.join(" and ")}},"./src/useMediaQuery.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(/*! react */"react"),i=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),u=n(r(/*! ./toQuery */"./src/toQuery.ts")),c=n(r(/*! ./Context */"./src/Context.ts")),l=function(e){if(e)return Object.keys(e).reduce(function(t,r){return t[(0,a.default)(r)]=e[r],t},{})},f=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)(function(){e.current=!0},[]),e.current},d=function(e){var t=(0,o.useContext)(c.default),r=function(){return l(e)||l(t)},n=(0,o.useState)(r),i=n[0],a=n[1];return(0,o.useEffect)(function(){var e=r();(0,s.shallowEqualObjects)(i,e)||a(e)},[e,t]),i},p=function(e){var t=function(){return e.query||(0,u.default)(e)},r=(0,o.useState)(t),n=r[0],i=r[1];return(0,o.useEffect)(function(){var e=t();n!==e&&i(e)},[e]),n},m=function(e,t){var r=function(){return(0,i.default)(e,t||{},!!t)},n=(0,o.useState)(r),a=n[0],s=n[1],u=f();return(0,o.useEffect)(function(){if(u){var e=r();return s(e),function(){e&&e.dispose()}}},[e,t]),a},y=function(e){var t=(0,o.useState)(e.matches),r=t[0],n=t[1];return(0,o.useEffect)(function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}},[e]),r};t.default=function(e,t,r){var n=d(t),i=p(e);if(!i)throw Error("Invalid or missing MediaQuery!");var a=m(i,n),s=y(a),u=f();return(0,o.useEffect)(function(){u&&r&&r(s)},[s]),(0,o.useEffect)(function(){return function(){a&&a.dispose()}},[]),s}},react:e=>{"use strict";e.exports=n}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})())}}]);