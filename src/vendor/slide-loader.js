!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SlideLoader=t():e.SlideLoader=t()}(this,function(){return function(e){function t(o){if(r[o])return r[o].exports;var i=r[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=19)}([function(e,t,r){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var n=this[i][0];"number"==typeof n&&(o[n]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(e,t,r){"use strict";function o(e,t){return new n(t).process(e)}var i=r(4),n=r(12);t=e.exports=o,t.FilterCSS=n;for(var a in i)t[a]=i[a];"undefined"!=typeof window&&(window.filterCSS=e.exports)},function(e,t,r){"use strict";e.exports={indexOf:function(e,t){var r,o;if(Array.prototype.indexOf)return e.indexOf(t);for(r=0,o=e.length;r<o;r++)if(e[r]===t)return r;return-1},forEach:function(e,t,r){var o,i;if(Array.prototype.forEach)return e.forEach(t,r);for(o=0,i=e.length;o<i;o++)t.call(r,e[o],o,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")}}},function(e,t){function r(e,t){for(var r=0;r<e.length;r++){var o=e[r],i=d[o.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](o.parts[n]);for(;n<o.parts.length;n++)i.parts.push(s(o.parts[n],t))}else{for(var a=[],n=0;n<o.parts.length;n++)a.push(s(o.parts[n],t));d[o.id]={id:o.id,refs:1,parts:a}}}}function o(e){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],n=i[0],a=i[1],l=i[2],s=i[3],c={css:a,media:l,sourceMap:s};r[n]?r[n].parts.push(c):t.push(r[n]={id:n,parts:[c]})}return t}function i(e,t){var r=h(),o=v[v.length-1];if("top"===e.insertAt)o?o.nextSibling?r.insertBefore(t,o.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function n(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function s(e,t){var r,o,i;if(t.singleton){var s=m++;r=b||(b=a(t)),o=c.bind(null,r,s,!1),i=c.bind(null,r,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=l(t),o=u.bind(null,r),i=function(){n(r),r.href&&URL.revokeObjectURL(r.href)}):(r=a(t),o=f.bind(null,r),i=function(){n(r)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}function c(e,t,r,o){var i=r?"":o.css;if(e.styleSheet)e.styleSheet.cssText=k(t,i);else{var n=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(n,a[t]):e.appendChild(n)}}function f(e,t){var r=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function u(e,t){var r=t.css,o=t.sourceMap;o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),n=e.href;e.href=URL.createObjectURL(i),n&&URL.revokeObjectURL(n)}var d={},p=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},g=p(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),h=p(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,m=0,v=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},void 0===t.singleton&&(t.singleton=g()),void 0===t.insertAt&&(t.insertAt="bottom");var i=o(e);return r(i,t),function(e){for(var n=[],a=0;a<i.length;a++){var l=i[a],s=d[l.id];s.refs--,n.push(s)}if(e){r(o(e),t)}for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete d[s.id]}}}};var k=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){"use strict";function o(){var e={};return e["align-content"]=!1,e["align-items"]=!1,e["align-self"]=!1,e["alignment-adjust"]=!1,e["alignment-baseline"]=!1,e.all=!1,e["anchor-point"]=!1,e.animation=!1,e["animation-delay"]=!1,e["animation-direction"]=!1,e["animation-duration"]=!1,e["animation-fill-mode"]=!1,e["animation-iteration-count"]=!1,e["animation-name"]=!1,e["animation-play-state"]=!1,e["animation-timing-function"]=!1,e.azimuth=!1,e["backface-visibility"]=!1,e.background=!0,e["background-attachment"]=!0,e["background-clip"]=!0,e["background-color"]=!0,e["background-image"]=!0,e["background-origin"]=!0,e["background-position"]=!0,e["background-repeat"]=!0,e["background-size"]=!0,e["baseline-shift"]=!1,e.binding=!1,e.bleed=!1,e["bookmark-label"]=!1,e["bookmark-level"]=!1,e["bookmark-state"]=!1,e.border=!0,e["border-bottom"]=!0,e["border-bottom-color"]=!0,e["border-bottom-left-radius"]=!0,e["border-bottom-right-radius"]=!0,e["border-bottom-style"]=!0,e["border-bottom-width"]=!0,e["border-collapse"]=!0,e["border-color"]=!0,e["border-image"]=!0,e["border-image-outset"]=!0,e["border-image-repeat"]=!0,e["border-image-slice"]=!0,e["border-image-source"]=!0,e["border-image-width"]=!0,e["border-left"]=!0,e["border-left-color"]=!0,e["border-left-style"]=!0,e["border-left-width"]=!0,e["border-radius"]=!0,e["border-right"]=!0,e["border-right-color"]=!0,e["border-right-style"]=!0,e["border-right-width"]=!0,e["border-spacing"]=!0,e["border-style"]=!0,e["border-top"]=!0,e["border-top-color"]=!0,e["border-top-left-radius"]=!0,e["border-top-right-radius"]=!0,e["border-top-style"]=!0,e["border-top-width"]=!0,e["border-width"]=!0,e.bottom=!1,e["box-decoration-break"]=!0,e["box-shadow"]=!0,e["box-sizing"]=!0,e["box-snap"]=!0,e["box-suppress"]=!0,e["break-after"]=!0,e["break-before"]=!0,e["break-inside"]=!0,e["caption-side"]=!1,e.chains=!1,e.clear=!0,e.clip=!1,e["clip-path"]=!1,e["clip-rule"]=!1,e.color=!0,e["color-interpolation-filters"]=!0,e["column-count"]=!1,e["column-fill"]=!1,e["column-gap"]=!1,e["column-rule"]=!1,e["column-rule-color"]=!1,e["column-rule-style"]=!1,e["column-rule-width"]=!1,e["column-span"]=!1,e["column-width"]=!1,e.columns=!1,e.contain=!1,e.content=!1,e["counter-increment"]=!1,e["counter-reset"]=!1,e["counter-set"]=!1,e.crop=!1,e.cue=!1,e["cue-after"]=!1,e["cue-before"]=!1,e.cursor=!1,e.direction=!1,e.display=!0,e["display-inside"]=!0,e["display-list"]=!0,e["display-outside"]=!0,e["dominant-baseline"]=!1,e.elevation=!1,e["empty-cells"]=!1,e.filter=!1,e.flex=!1,e["flex-basis"]=!1,e["flex-direction"]=!1,e["flex-flow"]=!1,e["flex-grow"]=!1,e["flex-shrink"]=!1,e["flex-wrap"]=!1,e.float=!1,e["float-offset"]=!1,e["flood-color"]=!1,e["flood-opacity"]=!1,e["flow-from"]=!1,e["flow-into"]=!1,e.font=!0,e["font-family"]=!0,e["font-feature-settings"]=!0,e["font-kerning"]=!0,e["font-language-override"]=!0,e["font-size"]=!0,e["font-size-adjust"]=!0,e["font-stretch"]=!0,e["font-style"]=!0,e["font-synthesis"]=!0,e["font-variant"]=!0,e["font-variant-alternates"]=!0,e["font-variant-caps"]=!0,e["font-variant-east-asian"]=!0,e["font-variant-ligatures"]=!0,e["font-variant-numeric"]=!0,e["font-variant-position"]=!0,e["font-weight"]=!0,e.grid=!1,e["grid-area"]=!1,e["grid-auto-columns"]=!1,e["grid-auto-flow"]=!1,e["grid-auto-rows"]=!1,e["grid-column"]=!1,e["grid-column-end"]=!1,e["grid-column-start"]=!1,e["grid-row"]=!1,e["grid-row-end"]=!1,e["grid-row-start"]=!1,e["grid-template"]=!1,e["grid-template-areas"]=!1,e["grid-template-columns"]=!1,e["grid-template-rows"]=!1,e["hanging-punctuation"]=!1,e.height=!0,e.hyphens=!1,e.icon=!1,e["image-orientation"]=!1,e["image-resolution"]=!1,e["ime-mode"]=!1,e["initial-letters"]=!1,e["inline-box-align"]=!1,e["justify-content"]=!1,e["justify-items"]=!1,e["justify-self"]=!1,e.left=!1,e["letter-spacing"]=!0,e["lighting-color"]=!0,e["line-box-contain"]=!1,e["line-break"]=!1,e["line-grid"]=!1,e["line-height"]=!1,e["line-snap"]=!1,e["line-stacking"]=!1,e["line-stacking-ruby"]=!1,e["line-stacking-shift"]=!1,e["line-stacking-strategy"]=!1,e["list-style"]=!0,e["list-style-image"]=!0,e["list-style-position"]=!0,e["list-style-type"]=!0,e.margin=!0,e["margin-bottom"]=!0,e["margin-left"]=!0,e["margin-right"]=!0,e["margin-top"]=!0,e["marker-offset"]=!1,e["marker-side"]=!1,e.marks=!1,e.mask=!1,e["mask-box"]=!1,e["mask-box-outset"]=!1,e["mask-box-repeat"]=!1,e["mask-box-slice"]=!1,e["mask-box-source"]=!1,e["mask-box-width"]=!1,e["mask-clip"]=!1,e["mask-image"]=!1,e["mask-origin"]=!1,e["mask-position"]=!1,e["mask-repeat"]=!1,e["mask-size"]=!1,e["mask-source-type"]=!1,e["mask-type"]=!1,e["max-height"]=!0,e["max-lines"]=!1,e["max-width"]=!0,e["min-height"]=!0,e["min-width"]=!0,e["move-to"]=!1,e["nav-down"]=!1,e["nav-index"]=!1,e["nav-left"]=!1,e["nav-right"]=!1,e["nav-up"]=!1,e["object-fit"]=!1,e["object-position"]=!1,e.opacity=!1,e.order=!1,e.orphans=!1,e.outline=!1,e["outline-color"]=!1,e["outline-offset"]=!1,e["outline-style"]=!1,e["outline-width"]=!1,e.overflow=!1,e["overflow-wrap"]=!1,e["overflow-x"]=!1,e["overflow-y"]=!1,e.padding=!0,e["padding-bottom"]=!0,e["padding-left"]=!0,e["padding-right"]=!0,e["padding-top"]=!0,e.page=!1,e["page-break-after"]=!1,e["page-break-before"]=!1,e["page-break-inside"]=!1,e["page-policy"]=!1,e.pause=!1,e["pause-after"]=!1,e["pause-before"]=!1,e.perspective=!1,e["perspective-origin"]=!1,e.pitch=!1,e["pitch-range"]=!1,e["play-during"]=!1,e.position=!1,e["presentation-level"]=!1,e.quotes=!1,e["region-fragment"]=!1,e.resize=!1,e.rest=!1,e["rest-after"]=!1,e["rest-before"]=!1,e.richness=!1,e.right=!1,e.rotation=!1,e["rotation-point"]=!1,e["ruby-align"]=!1,e["ruby-merge"]=!1,e["ruby-position"]=!1,e["shape-image-threshold"]=!1,e["shape-outside"]=!1,e["shape-margin"]=!1,e.size=!1,e.speak=!1,e["speak-as"]=!1,e["speak-header"]=!1,e["speak-numeral"]=!1,e["speak-punctuation"]=!1,e["speech-rate"]=!1,e.stress=!1,e["string-set"]=!1,e["tab-size"]=!1,e["table-layout"]=!1,e["text-align"]=!0,e["text-align-last"]=!0,e["text-combine-upright"]=!0,e["text-decoration"]=!0,e["text-decoration-color"]=!0,e["text-decoration-line"]=!0,e["text-decoration-skip"]=!0,e["text-decoration-style"]=!0,e["text-emphasis"]=!0,e["text-emphasis-color"]=!0,e["text-emphasis-position"]=!0,e["text-emphasis-style"]=!0,e["text-height"]=!0,e["text-indent"]=!0,e["text-justify"]=!0,e["text-orientation"]=!0,e["text-overflow"]=!0,e["text-shadow"]=!0,e["text-space-collapse"]=!0,e["text-transform"]=!0,e["text-underline-position"]=!0,e["text-wrap"]=!0,e.top=!1,e.transform=!1,e["transform-origin"]=!1,e["transform-style"]=!1,e.transition=!1,e["transition-delay"]=!1,e["transition-duration"]=!1,e["transition-property"]=!1,e["transition-timing-function"]=!1,e["unicode-bidi"]=!1,e["vertical-align"]=!1,e.visibility=!1,e["voice-balance"]=!1,e["voice-duration"]=!1,e["voice-family"]=!1,e["voice-pitch"]=!1,e["voice-range"]=!1,e["voice-rate"]=!1,e["voice-stress"]=!1,e["voice-volume"]=!1,e.volume=!1,e["white-space"]=!1,e.widows=!1,e.width=!0,e["will-change"]=!1,e["word-break"]=!0,e["word-spacing"]=!0,e["word-wrap"]=!0,e["wrap-flow"]=!1,e["wrap-through"]=!1,e["writing-mode"]=!1,e["z-index"]=!1,e}function i(e,t,r){}function n(e,t,r){}t.whiteList=o(),t.getDefaultWhiteList=o,t.onAttr=i,t.onIgnoreAttr=n},function(e,t,r){"use strict";e.exports={indexOf:function(e,t){var r,o;if(Array.prototype.indexOf)return e.indexOf(t);for(r=0,o=e.length;r<o;r++)if(e[r]===t)return r;return-1},forEach:function(e,t,r){var o,i;if(Array.prototype.forEach)return e.forEach(t,r);for(o=0,i=e.length;o<i;o++)t.call(r,e[o],o,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(e){return String.prototype.trimRight?e.trimRight():e.replace(/(\s*$)/g,"")}}},function(e,t,r){"use strict";function o(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]}}function i(e,t,r){}function n(e,t,r){}function a(e,t,r){}function l(e,t,r){}function s(e){return e.replace(T,"&lt;").replace(z,"&gt;")}function c(e,t,r,o){if(r=h(r),"href"===t||"src"===t){if(r=q.trim(r),"#"===r)return"#";if("http://"!==r.substr(0,7)&&"https://"!==r.substr(0,8)&&"mailto:"!==r.substr(0,7)&&"#"!==r[0]&&"/"!==r[0])return""}else if("background"===t){if(E.lastIndex=0,E.test(r))return""}else if("style"===t){if(j.lastIndex=0,j.test(r))return"";if(B.lastIndex=0,B.test(r)&&(E.lastIndex=0,E.test(r)))return"";o!==!1&&(o=o||A,r=o.process(r))}return r=b(r)}function f(e){return e.replace(C,"&quot;")}function u(e){return e.replace(S,'"')}function d(e){return e.replace(I,function(e,t){return"x"===t[0]||"X"===t[0]?String.fromCharCode(parseInt(t.substr(1),16)):String.fromCharCode(parseInt(t,10))})}function p(e){return e.replace(F,":").replace(L," ")}function g(e){for(var t="",r=0,o=e.length;r<o;r++)t+=e.charCodeAt(r)<32?" ":e.charAt(r);return q.trim(t)}function h(e){return e=u(e),e=d(e),e=p(e),e=g(e)}function b(e){return e=f(e),e=s(e)}function m(){return""}function v(e,t){function r(t){return!!o||q.indexOf(e,t)!==-1}"function"!=typeof t&&(t=function(){});var o=!Array.isArray(e),i=[],n=!1;return{onIgnoreTag:function(e,o,a){if(r(e)){if(a.isClosing){var l="[/removed]",s=a.position+l.length;return i.push([n!==!1?n:a.position,s]),n=!1,l}return n||(n=a.position),"[removed]"}return t(e,o,a)},remove:function(e){var t="",r=0;return q.forEach(i,function(o){t+=e.slice(r,o[0]),r=o[1]}),t+=e.slice(r)}}}function k(e){return e.replace(O,"")}function x(e){var t=e.split("");return t=t.filter(function(e){var t=e.charCodeAt(0);return 127!==t&&(!(t<=31)||(10===t||13===t))}),t.join("")}var w=r(1).FilterCSS,y=r(1).getDefaultWhiteList,q=r(2),A=new w,T=/</g,z=/>/g,C=/"/g,S=/&quot;/g,I=/&#([a-zA-Z0-9]*);?/gim,F=/&colon;?/gim,L=/&newline;?/gim,E=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,j=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,B=/u\s*r\s*l\s*\(.*/gi,O=/<!--[\s\S]*?-->/g;t.whiteList=o(),t.getDefaultWhiteList=o,t.onTag=i,t.onIgnoreTag=n,t.onTagAttr=a,t.onIgnoreTagAttr=l,t.safeAttrValue=c,t.escapeHtml=s,t.escapeQuote=f,t.unescapeQuote=u,t.escapeHtmlEntities=d,t.escapeDangerHtml5Entities=p,t.clearNonPrintableCharacter=g,t.friendlyAttrValue=h,t.escapeAttrValue=b,t.onIgnoreTagStripAll=m,t.StripTagBody=v,t.stripCommentTag=k,t.stripBlankChar=x,t.cssFilter=A,t.getDefaultCSSWhiteList=y},function(e,t,r){"use strict";function o(e){var t=e.indexOf(" ");if(t===-1)var r=e.slice(1,-1);else var r=e.slice(1,t+1);return r=u.trim(r).toLowerCase(),"/"===r.slice(0,1)&&(r=r.slice(1)),"/"===r.slice(-1)&&(r=r.slice(0,-1)),r}function i(e){return"</"===e.slice(0,2)}function n(e,t,r){"user strict";var n="",a=0,l=!1,s=!1,c=0,f=e.length,u="",d="";for(c=0;c<f;c++){var p=e.charAt(c);if(l===!1){if("<"===p){l=c;continue}}else if(s===!1){if("<"===p){n+=r(e.slice(a,c)),l=c,a=c;continue}if(">"===p){n+=r(e.slice(a,l)),u=e.slice(l,c+1),d=o(u),n+=t(l,n.length,d,u,i(u)),a=c+1,l=!1;continue}if(('"'===p||"'"===p)&&"="===e.charAt(c-1)){s=p;continue}}else if(p===s){s=!1;continue}}return a<e.length&&(n+=r(e.substr(a))),n}function a(e,t){"user strict";function r(e,r){if(e=u.trim(e),e=e.replace(d,"").toLowerCase(),!(e.length<1)){var o=t(e,r||"");o&&i.push(o)}}for(var o=0,i=[],n=!1,a=e.length,c=0;c<a;c++){var p,g,h=e.charAt(c);if(n!==!1||"="!==h)if(n===!1||c!==o||'"'!==h&&"'"!==h||"="!==e.charAt(c-1))if(" "!==h);else{if(n===!1){if(g=l(e,c),g===-1){p=u.trim(e.slice(o,c)),r(p),n=!1,o=c+1;continue}c=g-1;continue}if(g=s(e,c-1),g===-1){p=u.trim(e.slice(o,c)),p=f(p),r(n,p),n=!1,o=c+1;continue}}else{if(g=e.indexOf(h,c+1),g===-1)break;p=u.trim(e.slice(o+1,g)),r(n,p),n=!1,c=g,o=c+1}else n=e.slice(o,c),o=c+1}return o<e.length&&(n===!1?r(e.slice(o)):r(n,f(u.trim(e.slice(o))))),u.trim(i.join(" "))}function l(e,t){for(;t<e.length;t++){var r=e[t];if(" "!==r)return"="===r?t:-1}}function s(e,t){for(;t>0;t--){var r=e[t];if(" "!==r)return"="===r?t:-1}}function c(e){return'"'===e[0]&&'"'===e[e.length-1]||"'"===e[0]&&"'"===e[e.length-1]}function f(e){return c(e)?e.substr(1,e.length-2):e}var u=r(2),d=/[^a-zA-Z0-9_:\.\-]/gim;t.parseTag=n,t.parseAttr=a},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.XssFilter=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),a=r(14),l=o(a);t.XssFilter=function(){function e(){i(this,e),this.mxss=new l.default.FilterXSS({css:!1,whiteList:{div:["class","auto-width","animation-order","style","image","srcid","base64","id"],img:["src","class","style"],p:["class","style"],table:["rows","columns","class","style"],tbody:["class","style"],tr:["class","style"],td:["rownum","colnum","auto","style","rowspan","colspan"],strong:["class","style"],em:["class","latex","contenteditable","latex-id","new","style"],u:["class","style"],a:["href","target","style"],span:["class","style"],br:["class"],sub:["class","style"],sup:["class","style"],g:["transform"],text:["font-family","transform","stroke"]},onTag:function(e,t,r){return"svg"===e?t:"defs"===e?t:"path"===e?t:"g"===e?t:"use"===e?t:"rect"===e?t:void 0},onTagAttr:function(e,t,r,o){if("img"===e&&o&&"src"===t)return'src="'+r+'"'}})}return n(e,null,[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),n(e,[{key:"clean",value:function(e){return e?this.mxss.process(e):""}}]),e}()},function(e,t,r){var o=r(16);"string"==typeof o&&(o=[[e.i,o,""]]);r(3)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,r){var o=r(17);"string"==typeof o&&(o=[[e.i,o,""]]);r(3)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,r){var o=r(18);"string"==typeof o&&(o=[[e.i,o,""]]);r(3)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,r){"use strict";function o(e){return void 0===e||null===e}function i(e){var t={};for(var r in e)t[r]=e[r];return t}function n(e){e=i(e||{}),e.whiteList=e.whiteList||a.whiteList,e.onAttr=e.onAttr||a.onAttr,e.onIgnoreAttr=e.onIgnoreAttr||a.onIgnoreAttr,this.options=e}var a=r(4),l=r(13);r(5);n.prototype.process=function(e){if(e=e||"",e=e.toString(),!e)return"";var t=this,r=t.options,i=r.whiteList,n=r.onAttr,a=r.onIgnoreAttr;return l(e,function(e,t,r,l,s){var c=i[r],f=!1;c===!0?f=c:"function"==typeof c?f=c(l):c instanceof RegExp&&(f=c.test(l)),f!==!0&&(f=!1);var u={position:t,sourcePosition:e,source:s,isWhite:f};if(f){var d=n(r,l,u);return o(d)?r+":"+l:d}var d=a(r,l,u);if(!o(d))return d})},e.exports=n},function(e,t,r){"use strict";function o(e,t){function r(){if(!n){var r=i.trim(e.slice(a,l)),o=r.indexOf(":");if(o!==-1){var c=i.trim(r.slice(0,o)),f=i.trim(r.slice(o+1));if(c){var u=t(a,s.length,c,f,r);u&&(s+=u+"; ")}}}a=l+1}e=i.trimRight(e),";"!==e[e.length-1]&&(e+=";");for(var o=e.length,n=!1,a=0,l=0,s="";l<o;l++){var c=e[l];if("/"===c&&"*"===e[l+1]){var f=e.indexOf("*/",l+2);if(f===-1)break;l=f+1,a=l+1,n=!1}else"("===c?n=!0:")"===c?n=!1:";"===c?n||r():"\n"===c&&r()}return i.trim(s)}var i=r(5);e.exports=o},function(e,t,r){"use strict";function o(e,t){return new a(t).process(e)}var i=r(6),n=r(7),a=r(15);t=e.exports=o,t.FilterXSS=a;for(var l in i)t[l]=i[l];for(var l in n)t[l]=n[l];"undefined"!=typeof window&&(window.filterXSS=e.exports)},function(e,t,r){"use strict";function o(e){return void 0===e||null===e}function i(e){var t=e.indexOf(" ");if(t===-1)return{html:"",closing:"/"===e[e.length-2]};e=d.trim(e.slice(t+1,-1));var r="/"===e[e.length-1];return r&&(e=d.trim(e.slice(0,-1))),{html:e,closing:r}}function n(e){var t={};for(var r in e)t[r]=e[r];return t}function a(e){e=n(e||{}),e.stripIgnoreTag&&(e.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),e.onIgnoreTag=s.onIgnoreTagStripAll),e.whiteList=e.whiteList||s.whiteList,e.onTag=e.onTag||s.onTag,e.onTagAttr=e.onTagAttr||s.onTagAttr,e.onIgnoreTag=e.onIgnoreTag||s.onIgnoreTag,e.onIgnoreTagAttr=e.onIgnoreTagAttr||s.onIgnoreTagAttr,e.safeAttrValue=e.safeAttrValue||s.safeAttrValue,e.escapeHtml=e.escapeHtml||s.escapeHtml,this.options=e,e.css===!1?this.cssFilter=!1:(e.css=e.css||{},this.cssFilter=new l(e.css))}var l=r(1).FilterCSS,s=r(6),c=r(7),f=c.parseTag,u=c.parseAttr,d=r(2);a.prototype.process=function(e){if(e=e||"",e=e.toString(),!e)return"";var t=this,r=t.options,n=r.whiteList,a=r.onTag,l=r.onIgnoreTag,c=r.onTagAttr,p=r.onIgnoreTagAttr,g=r.safeAttrValue,h=r.escapeHtml,b=t.cssFilter;r.stripBlankChar&&(e=s.stripBlankChar(e)),r.allowCommentTag||(e=s.stripCommentTag(e));var m=!1;if(r.stripIgnoreTagBody){var m=s.StripTagBody(r.stripIgnoreTagBody,l);l=m.onIgnoreTag}var v=f(e,function(e,t,r,s,f){var m={sourcePosition:e,position:t,isClosing:f,isWhite:r in n},v=a(r,s,m);if(!o(v))return v;if(m.isWhite){if(m.isClosing)return"</"+r+">";var k=i(s),x=n[r],w=u(k.html,function(e,t){var i=d.indexOf(x,e)!==-1,n=c(r,e,t,i);if(!o(n))return n;if(i)return t=g(r,e,t,b),t?e+'="'+t+'"':e;var n=p(r,e,t,i);return o(n)?void 0:n}),s="<"+r;return w&&(s+=" "+w),k.closing&&(s+=" /"),s+=">"}var v=l(r,s,m);return o(v)?h(s):v},h);return m&&(v=m.remove(v)),v},e.exports=a},function(e,t,r){t=e.exports=r(0)(),t.push([e.i,'@font-face{font-family:Material Icons;font-style:normal;font-weight:400;src:local("Material Icons"),local("MaterialIcons-Regular"),url("http://static.keleshuxue.com/icons/google/3.0.0/MaterialIcons-Regular.woff2") format("woff2"),url("http://static.keleshuxue.com/icons/google/3.0.0/MaterialIcons-Regular.woff") format("woff"),url("http://static.keleshuxue.com/icons/google/3.0.0/iconfont/MaterialIcons-Regular.ttf") format("truetype")}#KSEditor .icons,.ks-slide .icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}',""])},function(e,t,r){t=e.exports=r(0)(),t.push([e.i,'.ql-snow .ql-picker.ql-size .ql-picker-label:before{content:"\\8BF7\\9009\\62E9"}.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=normal]:before{content:"\\5C0F\\5B57\\53F7"}.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]:before{content:"\\4E2D\\5B57\\53F7"}.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]:before{content:"\\5927\\5B57\\53F7"}.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]:before{content:"\\8D85\\5927\\5B57\\53F7"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=normal]:before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{font-size:14px}.ql-snow .ql-picker.ql-font .ql-picker-label:before{content:"\\8BF7\\9009\\62E9"}.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=songti]:before{content:"\\5B8B\\4F53"}.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=heiti]:before{content:"\\9ED1\\4F53"}.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=yahei]:before{content:"\\5FAE\\8F6F\\96C5\\9ED1"}.ql-snow .ql-out-bottom{visibility:visible}.ql-snow .ql-tooltip:before{content:"\\94FE\\63A5\\5730\\5740"}.ql-snow .ql-tooltip a.ql-action:after{content:"\\4FEE\\6539"}.ql-snow .ql-tooltip a.ql-action:after:hover{text-decoration:underline}.ql-snow .ql-tooltip .ql-preview{font-size:16px}.ql-snow .ql-tooltip a:hover{text-decoration:underline!important}.ql-snow .ql-tooltip input{outline:none}.ql-snow .ql-tooltip a.ql-remove:before{content:"\\79FB\\9664"}.ql-snow .ql-tooltip a.ql-remove:before:hover{text-decoration:underline}.ql-snow .ql-tooltip[data-mode=link]:before{content:"\\8F93\\5165\\7F51\\5740:"}.ql-snow .ql-tooltip.ql-editing a.ql-action:after{content:"\\786E\\5B9A"}.ql-snow.ql-toolbar button{width:36px;height:32px;border:1px solid #ddd;border-radius:4px;margin-left:3px;font-weight:300}.ql-snow.ql-toolbar button:hover{background:#f3f3f3}.ql-snow .ql-picker{height:32px;margin-left:3px}.ql-snow .ql-picker .ql-picker-label{line-height:32px;border:1px solid #ddd;border-radius:4px}.ql-snow .ql-picker .ql-picker-label:hover{background:#f3f3f3}.ql-snow .ql-picker.ql-color-picker{width:55px}.ql-snow .ql-picker.ql-color-picker .ql-picker-label{padding-right:0}.ql-snow .ql-picker.ql-color-picker .drop{width:16px;overflow:hidden;margin-left:5px;font-size:20px;border-left:1px solid #ddd}.ql-formats .ql-picker:first-child{margin-left:0}.ql-editor{font-weight:400;font-family:microsoft yahei,\\\\5FAE\\8F6F\\96C5\\9ED1;overflow:hidden;line-height:1.5}.ql-editor,.ql-editor p{font-size:24px;white-space:pre-wrap}.ql-editor p{padding:0;margin:0;vertical-align:middle}.ql-editor .ql-size-huge{font-size:2.5em!important}.ql-editor .ql-size-large{font-size:2em!important}.ql-editor .ql-size-small{font-size:1.5em!important}.ql-editor .ql-picker-item{font-size:16px!important}.ql-editor .ql-font-songti{font-family:Songti SC,\\\\5B8B\\4F53!important}.ql-editor .ql-font-heiti{font-family:Heiti SC,\\\\9ED1\\4F53!important}.ql-editor .ql-font-yahei{font-family:microsoft yahei,\\\\5FAE\\8F6F\\96C5\\9ED1!important}.ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-editor h1,.ql-editor h2,.ql-editor h3{font-weight:400}.ql-editor h1{font-size:2em}.ql-editor h2{font-size:1.5em}.ql-editor .ql-mathjax{display:inline-block;user-select:none;border:1px solid transparent;font-size:.8em}',""])},function(e,t,r){t=e.exports=r(0)(),t.push([e.i,".ks-slide{position:relative}.ks-slide section{width:960px;height:540px;color:#000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;position:relative;top:0!important;box-sizing:border-box}.ks-slide .block{position:absolute;z-index:100010;padding:1px;border:1px solid transparent;box-sizing:border-box}.ks-slide .block.snap-align{border:1px dashed red;background:rgba(255,0,0,.1)}.ks-slide .block.snap-align *{opacity:.7}.ks-slide .block-image{padding:0}.ks-slide .block-image.loading{background:rgba(0,0,0,.5)}.ks-slide .block-image img{width:100%;margin:0;background:none;border:0;box-shadow:none;max-width:100%;max-height:100%;float:left}.ks-slide .block.block-text{cursor:pointer;outline:none;text-align:left;overflow:visible!important}.ks-slide .block.block-text .block-content{padding:5px}.ks-slide .block.block-text.ql-editor{padding:1px;overflow:auto!important;white-space:normal}.ks-slide .block.block-text.ql-editor .ql-mathjax.active{box-sizing:border-box;cursor:pointer}.ks-slide .block.block-table{z-index:100009}.ks-slide .block.block-table .block-content{width:calc(100% + 1px);height:calc(100% + 2px);margin-left:-1px;margin-top:-1px;pointer-events:auto}.ks-slide .block.block-table table{width:100%;height:100%;border-width:0 0 1px 1px;border-color:#600;border-style:solid;border-spacing:0;border-collapse:collapse}.ks-slide .block.block-table table tr:first-child{height:0;overflow:hidden}.ks-slide .block.block-table table tr:first-child td{height:0;padding:0;border:none}.ks-slide .block.block-table table td{margin:0;padding:4px;border-color:#600;border-style:solid;border-width:1px 1px 0 0;background-color:transparent}.ks-slide .block.block-table table td:first-child{width:1px;padding:0;overflow:hidden;border-right:none}.ks-slide .block.block-geogebra{width:300px;height:169px}.ks-slide .block.block-geogebra.block-focus .resize-anchor{display:none}.ks-slide .block.block-geogebra .block-content img{width:296px;height:165px}.ks-slide .block.block-geogebra .block-content .play-btn{position:absolute;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);color:#fff;line-height:165px;font-size:48px;cursor:pointer;text-align:center}",""])},function(e,t,r){"use strict";function o(e,t){var r=new XMLHttpRequest;r.onreadystatechange=function(){4==r.readyState&&200==r.status&&t(r.responseText)},r.open("GET",e,!0),r.send(null)}Object.defineProperty(t,"__esModule",{value:!0}),r(9),r(11),r(10);var i=r(8),n=i.XssFilter.getInstance();t.default={renderSlide:function(e,t){return e?(t||(t=document.createElement("div"),t.setAttribute("class","ks-slide")),setTimeout(function(){t.innerHTML||(t.innerHTML='<?xml version="1.0" encoding="utf-8"?><svg width=\'64px\' height=\'64px\' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ring-alt"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><circle cx="50" cy="50" r="40" stroke="none" fill="none" stroke-width="10" stroke-linecap="round"></circle><circle cx="50" cy="50" r="40" stroke="#1897f2" fill="none" stroke-width="6" stroke-linecap="round"><animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" from="0" to="502"></animate><animate attributeName="stroke-dasharray" dur="2s" repeatCount="indefinite" values="150.6 100.4;1 250;150.6 100.4"></animate></circle></svg>')},100),o(e,function(e){t.innerHTML=n.clean(e)}),t):null}}}])});