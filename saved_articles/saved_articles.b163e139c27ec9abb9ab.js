!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=97)}([function(t,n,e){"use strict";e.d(n,"c",(function(){return r})),e.d(n,"h",(function(){return o})),e.d(n,"a",(function(){return u})),e.d(n,"d",(function(){return i})),e.d(n,"e",(function(){return c})),e.d(n,"f",(function(){return f})),e.d(n,"b",(function(){return a})),e.d(n,"g",(function(){return s}));var r=27,o={isLoggedIn:!0,userName:"Дмитрий"},u=document.querySelector(".main"),i=document.querySelector(".header"),c=document.querySelector(".header__button"),f=document.querySelector(".header__links-container"),a=document.querySelector(".header__mobile-menu"),s=document.querySelector(".header__label")},function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(50))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(1),o=e(24),u=e(3),i=e(26),c=e(30),f=e(46),a=o("wks"),s=r.Symbol,l=f?s:s&&s.withoutSetter||i;t.exports=function(t){return u(a,t)||(c&&u(s,t)?a[t]=s[t]:a[t]=l("Symbol."+t)),a[t]}},function(t,n,e){var r=e(2);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(6),o=e(8),u=e(12);t.exports=r?function(t,n,e){return o.f(t,n,u(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(6),o=e(31),u=e(9),i=e(14),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(u(t),n=i(n,!0),u(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(39),o=e(21);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(1),o=e(13).f,u=e(7),i=e(16),c=e(17),f=e(41),a=e(55);t.exports=function(t,n){var e,s,l,p,v,d=t.target,y=t.global,h=t.stat;if(e=y?r:h?r[d]||c(d,{}):(r[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!a(y?s:d+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;f(p,l)}(t.sham||l&&l.sham)&&u(p,"sham",!0),i(e,s,p,t)}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(6),o=e(38),u=e(12),i=e(10),c=e(14),f=e(3),a=e(31),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=i(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return u(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(42),o=e(1),u=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?u(r[t])||u(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(1),o=e(7),u=e(3),i=e(17),c=e(32),f=e(22),a=f.get,s=f.enforce,l=String(String).split("String");(t.exports=function(t,n,e,c){var f=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof n||u(e,"name")||o(e,"name",n),s(e).source=l.join("string"==typeof n?n:"")),t!==r?(f?!p&&t[n]&&(a=!0):delete t[n],a?t[n]=e:o(t,n,e)):a?t[n]=e:i(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},function(t,n,e){var r=e(1),o=e(7);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n){t.exports={}},function(t,n,e){var r=e(21);t.exports=function(t){return Object(r(t))}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r,o,u,i=e(51),c=e(1),f=e(4),a=e(7),s=e(3),l=e(23),p=e(18),v=c.WeakMap;if(i){var d=new v,y=d.get,h=d.has,b=d.set;r=function(t,n){return b.call(d,t,n),n},o=function(t){return y.call(d,t)||{}},u=function(t){return h.call(d,t)}}else{var g=l("state");p[g]=!0,r=function(t,n){return a(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},u=function(t){return s(t,g)}}t.exports={set:r,get:o,has:u,enforce:function(t){return u(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(24),o=e(26),u=r("keys");t.exports=function(t){return u[t]||(u[t]=o(t))}},function(t,n,e){var r=e(25),o=e(33);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!1},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(28),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(20);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(6),o=e(2),u=e(40);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(33),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(1),o=e(17),u=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=u},function(t,n,e){var r=e(43),o=e(35).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r,o,u=e(1),i=e(58),c=u.process,f=c&&c.versions,a=f&&f.v8;a?o=(r=a.split("."))[0]+r[1]:i&&(!(r=i.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));e(49);var r=e(0);function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._color=n,this._boxMenu=r.b,this._labelMenu=r.g}var n,e,u;return n=t,(e=[{key:"render",value:function(t){r.d.style.color=this._color,t.isLoggedIn?(r.e.classList.add("header__button_sign-out"),r.e.innerHTML="<span class='header__user'>".concat(t.userName,'</span>\n      <svg class="header__icon" width="18" height="16" viewBox="0 0 18 16" fill="').concat(this._color,'" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2L2 2L2 14H6V16H2C0.89543 16 0 15.1046 0 14V2C0 0.89543 0.895432 0 2 0H6V2ZM13.5856 9.00002L9.29274 13.1339L10.707 14.4958L17.4141 8.03706L10.707 1.57837L9.29274 2.9402L13.5856 7.0741H4V9.00002H13.5856Z"/></svg>'),r.f.insertAdjacentHTML("beforeend",'<a href="./saved_articles" class="header__link ">Сохранённые статьи</a>')):(r.e.classList.add("header__button_auth"),r.e.innerHTML="Авторизоваться")}},{key:"showMobileMenu",value:function(){this._labelMenu.style.display="block"}},{key:"hideMobileMenu",value:function(){this._boxMenu.checked=!1,this._labelMenu.style.display="none"}}])&&o(n.prototype,e),u&&o(n,u),t}()},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,u=o&&!r.call({1:2},1);n.f=u?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(2),o=e(20),u="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?u.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(1),o=e(4),u=r.document,i=o(u)&&o(u.createElement);t.exports=function(t){return i?u.createElement(t):{}}},function(t,n,e){var r=e(3),o=e(52),u=e(13),i=e(8);t.exports=function(t,n){for(var e=o(n),c=i.f,f=u.f,a=0;a<e.length;a++){var s=e[a];r(t,s)||c(t,s,f(n,s))}}},function(t,n,e){var r=e(1);t.exports=r},function(t,n,e){var r=e(3),o=e(10),u=e(53).indexOf,i=e(18);t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)!r(i,e)&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~u(a,e)||a.push(e));return a}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(4),o=e(29),u=e(5)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[u])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(30);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},,,function(t,n,e){"use strict";var r=e(11),o=e(2),u=e(29),i=e(4),c=e(19),f=e(27),a=e(56),s=e(45),l=e(57),p=e(5),v=e(36),d=p("isConcatSpreadable"),y=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),h=l("concat"),b=function(t){if(!i(t))return!1;var n=t[d];return void 0!==n?!!n:u(t)};r({target:"Array",proto:!0,forced:!y||!h},{concat:function(t){var n,e,r,o,u,i=c(this),l=s(i,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(u=-1===n?i:arguments[n],b(u)){if(p+(o=f(u.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,p++)e in u&&a(l,p,u[e])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");a(l,p++,u)}return l.length=p,l}})},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(1),o=e(32),u=r.WeakMap;t.exports="function"==typeof u&&/native code/.test(o(u))},function(t,n,e){var r=e(15),o=e(34),u=e(44),i=e(9);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(i(t)),e=u.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(10),o=e(27),u=e(54),i=function(t){return function(n,e,i){var c,f=r(n),a=o(f.length),s=u(i,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},function(t,n,e){var r=e(28),o=Math.max,u=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):u(e,n)}},function(t,n,e){var r=e(2),o=/#|\.prototype\./,u=function(t,n){var e=c[i(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},i=u.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=u.data={},f=u.NATIVE="N",a=u.POLYFILL="P";t.exports=u},function(t,n,e){"use strict";var r=e(14),o=e(8),u=e(12);t.exports=function(t,n,e){var i=r(n);i in t?o.f(t,i,u(0,e)):t[i]=e}},function(t,n,e){var r=e(2),o=e(5),u=e(36),i=o("species");t.exports=function(t){return u>=51||!r((function(){var n=[];return(n.constructor={})[i]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,e){var r=e(15);t.exports=r("navigator","userAgent")||""},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);e(98);var r=e(37),o=e(0);new r.a("#1A1B22").render(o.h),document.querySelectorAll(".header__link")[1].classList.add("header__link_selected")},function(t,n,e){}]);