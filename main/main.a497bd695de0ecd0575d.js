!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=99)}([function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"h",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return a})),n.d(e,"b",(function(){return s})),n.d(e,"g",(function(){return l}));var r=27,o={isLoggedIn:!1,userName:null},i=document.querySelector(".main"),u=document.querySelector(".header"),c=document.querySelector(".header__button"),a=document.querySelector(".header__links-container"),s=document.querySelector(".header__mobile-menu"),l=document.querySelector(".header__label")},function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(50))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(1),o=n(24),i=n(3),u=n(26),c=n(30),a=n(46),s=o("wks"),l=r.Symbol,f=a?l:l&&l.withoutSetter||u;t.exports=function(t){return i(s,t)||(c&&i(l,t)?s[t]=l[t]:s[t]=f("Symbol."+t)),s[t]}},function(t,e,n){var r=n(2);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){var r=n(6),o=n(8),i=n(12);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(6),o=n(31),i=n(9),u=n(14),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=u(e,!0),i(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(39),o=n(21);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(1),o=n(13).f,i=n(7),u=n(16),c=n(17),a=n(41),s=n(55);t.exports=function(t,e){var n,l,f,p,y,d=t.target,h=t.global,v=t.stat;if(n=h?r:v?r[d]||c(d,{}):(r[d]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(y=o(n,l))&&y.value:n[l],!s(h?l:d+(v?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;a(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),u(n,l,p,t)}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(6),o=n(38),i=n(12),u=n(10),c=n(14),a=n(3),s=n(31),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=u(t),e=c(e,!0),s)try{return l(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(42),o=n(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(1),o=n(7),i=n(3),u=n(17),c=n(32),a=n(22),s=a.get,l=a.enforce,f=String(String).split("String");(t.exports=function(t,e,n,c){var a=!!c&&!!c.unsafe,s=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),l(n).source=f.join("string"==typeof e?e:"")),t!==r?(a?!p&&t[e]&&(s=!0):delete t[e],s?t[e]=n:o(t,e,n)):s?t[e]=n:u(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||c(this)}))},function(t,e,n){var r=n(1),o=n(7);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e){t.exports={}},function(t,e,n){var r=n(21);t.exports=function(t){return Object(r(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r,o,i,u=n(51),c=n(1),a=n(4),s=n(7),l=n(3),f=n(23),p=n(18),y=c.WeakMap;if(u){var d=new y,h=d.get,v=d.has,_=d.set;r=function(t,e){return _.call(d,t,e),e},o=function(t){return h.call(d,t)||{}},i=function(t){return v.call(d,t)}}else{var b=f("state");p[b]=!0,r=function(t,e){return s(t,b,e),e},o=function(t){return l(t,b)?t[b]:{}},i=function(t){return l(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(24),o=n(26),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(25),o=n(33);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!1},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(28),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(20);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r=n(6),o=n(2),i=n(40);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(33),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(1),o=n(17),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(43),o=n(35).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r,o,i=n(1),u=n(58),c=i.process,a=c&&c.versions,s=a&&a.v8;s?o=(r=s.split("."))[0]+r[1]:u&&(!(r=u.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(49);var r=n.p+"./images/icon-logout_dark.svg",o=n.p+"./images/icon-logout_white.svg",i=n(0);function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._color=e,this.propsUser=n,this._boxMenu=i.b,this._labelMenu=i.g}var e,n,c;return e=t,(n=[{key:"render",value:function(){i.d.classList.add(this._color),this.propsUser.isLoggedIn?(i.e.classList.add("header__button_sign-out"),i.e.innerHTML="<span class='header__user'>".concat(this.propsUser.userName,'</span><img class="header__icon" src="').concat(o,'" alt="logout_dark">'),i.f.insertAdjacentHTML("beforeend",'<a href="../saved_articles" class="header__link ">Сохранённые статьи</a>'),"/"===document.location.pathname?document.querySelectorAll(".header__link")[0].classList.add("header__link_selected"):(document.querySelectorAll(".header__link")[1].classList.add("header__link_selected"),i.e.querySelector(".header__icon").src=r)):(i.e.classList.add("header__button_auth"),i.e.innerHTML="Авторизоваться")}},{key:"showMobileMenu",value:function(){this._labelMenu.style.display="block"}},{key:"hideMobileMenu",value:function(){this._boxMenu.checked=!1,this._labelMenu.style.display="none"}}])&&u(e.prototype,n),c&&u(e,c),t}()},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(2),o=n(20),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(1),o=n(4),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,e,n){var r=n(3),o=n(52),i=n(13),u=n(8);t.exports=function(t,e){for(var n=o(e),c=u.f,a=i.f,s=0;s<n.length;s++){var l=n[s];r(t,l)||c(t,l,a(e,l))}}},function(t,e,n){var r=n(1);t.exports=r},function(t,e,n){var r=n(3),o=n(10),i=n(53).indexOf,u=n(18);t.exports=function(t,e){var n,c=o(t),a=0,s=[];for(n in c)!r(u,n)&&r(c,n)&&s.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~i(s,n)||s.push(n));return s}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(4),o=n(29),i=n(5)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(30);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r,o=n(9),i=n(82),u=n(35),c=n(18),a=n(83),s=n(40),l=n(23),f=l("IE_PROTO"),p=function(){},y=function(t){return"<script>"+t+"<\/script>"},d=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;d=r?function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=s("iframe")).style.display="none",a.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(y("document.F=Object")),t.close(),t.F);for(var n=u.length;n--;)delete d.prototype[u[n]];return d()};c[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[f]=t):n=d(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(3),o=n(19),i=n(23),u=n(72),c=i("IE_PROTO"),a=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=o(t),r(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){"use strict";var r=n(11),o=n(2),i=n(29),u=n(4),c=n(19),a=n(27),s=n(56),l=n(45),f=n(57),p=n(5),y=n(36),d=p("isConcatSpreadable"),h=y>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),v=f("concat"),_=function(t){if(!u(t))return!1;var e=t[d];return void 0!==e?!!e:i(t)};r({target:"Array",proto:!0,forced:!h||!v},{concat:function(t){var e,n,r,o,i,u=c(this),f=l(u,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?u:arguments[e],_(i)){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&s(f,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(f,p++,i)}return f.length=p,f}})},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(1),o=n(32),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(15),o=n(34),i=n(44),u=n(9);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(u(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(10),o=n(27),i=n(54),u=function(t){return function(e,n,u){var c,a=r(e),s=o(a.length),l=i(u,s);if(t&&n!=n){for(;s>l;)if((c=a[l++])!=c)return!0}else for(;s>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,e,n){var r=n(28),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e,n){var r=n(2),o=/#|\.prototype\./,i=function(t,e){var n=c[u(t)];return n==s||n!=a&&("function"==typeof e?r(e):!!e)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,n){"use strict";var r=n(14),o=n(8),i=n(12);t.exports=function(t,e,n){var u=r(e);u in t?o.f(t,u,i(0,n)):t[u]=n}},function(t,e,n){var r=n(2),o=n(5),i=n(36),u=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[u]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var r=n(15);t.exports=r("navigator","userAgent")||""},function(t,e,n){var r=n(8).f,o=n(3),i=n(5)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){"use strict";var r=n(10),o=n(87),i=n(62),u=n(22),c=n(70),a=u.set,s=u.getterFor("Array Iterator");t.exports=c(Array,"Array",(function(t,e){a(this,{type:"Array Iterator",target:r(t),index:0,kind:e})}),(function(){var t=s(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e){t.exports={}},function(t,e,n){var r={};r[n(5)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,e,n){"use strict";var r=n(11),o=n(1),i=n(15),u=n(25),c=n(6),a=n(30),s=n(46),l=n(2),f=n(3),p=n(29),y=n(4),d=n(9),h=n(19),v=n(10),_=n(14),b=n(12),m=n(47),g=n(65),S=n(34),w=n(84),O=n(44),x=n(13),j=n(8),k=n(38),P=n(7),E=n(16),L=n(24),T=n(23),M=n(18),A=n(26),C=n(5),R=n(66),z=n(67),q=n(59),I=n(22),F=n(85).forEach,N=T("hidden"),D=C("toPrimitive"),G=I.set,H=I.getterFor("Symbol"),W=Object.prototype,V=o.Symbol,U=i("JSON","stringify"),$=x.f,B=j.f,Y=w.f,J=k.f,K=L("symbols"),Q=L("op-symbols"),X=L("string-to-symbol-registry"),Z=L("symbol-to-string-registry"),tt=L("wks"),et=o.QObject,nt=!et||!et.prototype||!et.prototype.findChild,rt=c&&l((function(){return 7!=m(B({},"a",{get:function(){return B(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=$(W,e);r&&delete W[e],B(t,e,n),r&&t!==W&&B(W,e,r)}:B,ot=function(t,e){var n=K[t]=m(V.prototype);return G(n,{type:"Symbol",tag:t,description:e}),c||(n.description=e),n},it=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof V},ut=function(t,e,n){t===W&&ut(Q,e,n),d(t);var r=_(e,!0);return d(n),f(K,r)?(n.enumerable?(f(t,N)&&t[N][r]&&(t[N][r]=!1),n=m(n,{enumerable:b(0,!1)})):(f(t,N)||B(t,N,b(1,{})),t[N][r]=!0),rt(t,r,n)):B(t,r,n)},ct=function(t,e){d(t);var n=v(e),r=g(n).concat(ft(n));return F(r,(function(e){c&&!at.call(n,e)||ut(t,e,n[e])})),t},at=function(t){var e=_(t,!0),n=J.call(this,e);return!(this===W&&f(K,e)&&!f(Q,e))&&(!(n||!f(this,e)||!f(K,e)||f(this,N)&&this[N][e])||n)},st=function(t,e){var n=v(t),r=_(e,!0);if(n!==W||!f(K,r)||f(Q,r)){var o=$(n,r);return!o||!f(K,r)||f(n,N)&&n[N][r]||(o.enumerable=!0),o}},lt=function(t){var e=Y(v(t)),n=[];return F(e,(function(t){f(K,t)||f(M,t)||n.push(t)})),n},ft=function(t){var e=t===W,n=Y(e?Q:v(t)),r=[];return F(n,(function(t){!f(K,t)||e&&!f(W,t)||r.push(K[t])})),r};(a||(E((V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),n=function(t){this===W&&n.call(Q,t),f(this,N)&&f(this[N],e)&&(this[N][e]=!1),rt(this,e,b(1,t))};return c&&nt&&rt(W,e,{configurable:!0,set:n}),ot(e,t)}).prototype,"toString",(function(){return H(this).tag})),E(V,"withoutSetter",(function(t){return ot(A(t),t)})),k.f=at,j.f=ut,x.f=st,S.f=w.f=lt,O.f=ft,R.f=function(t){return ot(C(t),t)},c&&(B(V.prototype,"description",{configurable:!0,get:function(){return H(this).description}}),u||E(W,"propertyIsEnumerable",at,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:V}),F(g(tt),(function(t){z(t)})),r({target:"Symbol",stat:!0,forced:!a},{for:function(t){var e=String(t);if(f(X,e))return X[e];var n=V(e);return X[e]=n,Z[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(f(Z,t))return Z[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!c},{create:function(t,e){return void 0===e?m(t):ct(m(t),e)},defineProperty:ut,defineProperties:ct,getOwnPropertyDescriptor:st}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:lt,getOwnPropertySymbols:ft}),r({target:"Object",stat:!0,forced:l((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(h(t))}}),U)&&r({target:"JSON",stat:!0,forced:!a||l((function(){var t=V();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(y(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),o[1]=e,U.apply(null,o)}});V.prototype[D]||P(V.prototype,D,V.prototype.valueOf),q(V,"Symbol"),M[N]=!0},function(t,e,n){var r=n(43),o=n(35);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(5);e.f=r},function(t,e,n){var r=n(42),o=n(3),i=n(66),u=n(8).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||u(e,t,{value:i.f(t)})}},function(t,e,n){"use strict";var r=n(11),o=n(6),i=n(1),u=n(3),c=n(4),a=n(8).f,s=n(41),l=i.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};s(p,l);var y=p.prototype=l.prototype;y.constructor=p;var d=y.toString,h="Symbol(test)"==String(l("test")),v=/^Symbol\((.*)\)[^)]+$/;a(y,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=d.call(t);if(u(f,t))return"";var n=h?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},function(t,e,n){n(67)("iterator")},function(t,e,n){"use strict";var r=n(11),o=n(88),i=n(48),u=n(89),c=n(59),a=n(7),s=n(16),l=n(5),f=n(25),p=n(62),y=n(71),d=y.IteratorPrototype,h=y.BUGGY_SAFARI_ITERATORS,v=l("iterator"),_=function(){return this};t.exports=function(t,e,n,l,y,b,m){o(n,e,l);var g,S,w,O=function(t){if(t===y&&E)return E;if(!h&&t in k)return k[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},x=e+" Iterator",j=!1,k=t.prototype,P=k[v]||k["@@iterator"]||y&&k[y],E=!h&&P||O(y),L="Array"==e&&k.entries||P;if(L&&(g=i(L.call(new t)),d!==Object.prototype&&g.next&&(f||i(g)===d||(u?u(g,d):"function"!=typeof g[v]&&a(g,v,_)),c(g,x,!0,!0),f&&(p[x]=_))),"values"==y&&P&&"values"!==P.name&&(j=!0,E=function(){return P.call(this)}),f&&!m||k[v]===E||a(k,v,E),p[e]=E,y)if(S={values:O("values"),keys:b?E:O("keys"),entries:O("entries")},m)for(w in S)(h||j||!(w in k))&&s(k,w,S[w]);else r({target:e,proto:!0,forced:h||j},S);return S}},function(t,e,n){"use strict";var r,o,i,u=n(48),c=n(7),a=n(3),s=n(5),l=n(25),f=s("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(r=o):p=!0),null==r&&(r={}),l||a(r,f)||c(r,f,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},function(t,e,n){var r=n(2);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,n){var r=n(11),o=n(2),i=n(10),u=n(13).f,c=n(6),a=o((function(){u(1)}));r({target:"Object",stat:!0,forced:!c||a,sham:!c},{getOwnPropertyDescriptor:function(t,e){return u(i(t),e)}})},function(t,e,n){var r=n(11),o=n(2),i=n(19),u=n(48),c=n(72);r({target:"Object",stat:!0,forced:o((function(){u(1)})),sham:!c},{getPrototypeOf:function(t){return u(i(t))}})},function(t,e,n){var r=n(63),o=n(16),i=n(91);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,e,n){var r=n(11),o=n(15),i=n(60),u=n(9),c=n(4),a=n(47),s=n(93),l=n(2),f=o("Reflect","construct"),p=l((function(){function t(){}return!(f((function(){}),[],t)instanceof t)})),y=!l((function(){f((function(){}))})),d=p||y;r({target:"Reflect",stat:!0,forced:d,sham:d},{construct:function(t,e){i(t),u(e);var n=arguments.length<3?t:i(arguments[2]);if(y&&!p)return f(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(s.apply(t,r))}var o=n.prototype,l=a(c(o)?o:Object.prototype),d=Function.apply.call(t,l,e);return c(d)?d:l}})},function(t,e,n){var r=n(11),o=n(4),i=n(9),u=n(3),c=n(13),a=n(48);r({target:"Reflect",stat:!0},{get:function t(e,n){var r,s,l=arguments.length<3?e:arguments[2];return i(e)===l?e[n]:(r=c.f(e,n))?u(r,"value")?r.value:void 0===r.get?void 0:r.get.call(l):o(s=a(e))?t(s,n,l):void 0}})},function(t,e,n){"use strict";var r=n(16),o=n(9),i=n(2),u=n(94),c=RegExp.prototype,a=c.toString,s=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),l="toString"!=a.name;(s||l)&&r(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in c)?u.call(t):n)}),{unsafe:!0})},function(t,e,n){"use strict";var r=n(95).charAt,o=n(22),i=n(70),u=o.set,c=o.getterFor("String Iterator");i(String,"String",(function(t){u(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,o=e.index;return o>=n.length?{value:void 0,done:!0}:(t=r(n,o),e.index+=t.length,{value:t,done:!1})}))},function(t,e,n){var r=n(1),o=n(96),i=n(61),u=n(7),c=n(5),a=c("iterator"),s=c("toStringTag"),l=i.values;for(var f in o){var p=r[f],y=p&&p.prototype;if(y){if(y[a]!==l)try{u(y,a,l)}catch(t){y[a]=l}if(y[s]||u(y,s,f),o[f])for(var d in i)if(y[d]!==i[d])try{u(y,d,i[d])}catch(t){y[d]=i[d]}}}},function(t,e,n){},function(t,e,n){var r=n(6),o=n(8),i=n(9),u=n(65);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=u(e),c=r.length,a=0;c>a;)o.f(t,n=r[a++],e[n]);return t}},function(t,e,n){var r=n(15);t.exports=r("document","documentElement")},function(t,e,n){var r=n(10),o=n(34).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},function(t,e,n){var r=n(86),o=n(39),i=n(19),u=n(27),c=n(45),a=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,l=4==t,f=6==t,p=5==t||f;return function(y,d,h,v){for(var _,b,m=i(y),g=o(m),S=r(d,h,3),w=u(g.length),O=0,x=v||c,j=e?x(y,w):n?x(y,0):void 0;w>O;O++)if((p||O in g)&&(b=S(_=g[O],O,m),t))if(e)j[O]=b;else if(b)switch(t){case 3:return!0;case 5:return _;case 6:return O;case 2:a.call(j,_)}else if(l)return!1;return f?-1:s||l?l:j}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e,n){var r=n(60);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(5),o=n(47),i=n(8),u=r("unscopables"),c=Array.prototype;null==c[u]&&i.f(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},function(t,e,n){"use strict";var r=n(71).IteratorPrototype,o=n(47),i=n(12),u=n(59),c=n(62),a=function(){return this};t.exports=function(t,e,n){var s=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),u(t,s,!1,!0),c[s]=a,t}},function(t,e,n){var r=n(9),o=n(90);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){"use strict";var r=n(63),o=n(92);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,e,n){var r=n(63),o=n(20),i=n(5)("toStringTag"),u="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:u?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},function(t,e,n){"use strict";var r=n(60),o=n(4),i=[].slice,u={},c=function(t,e,n){if(!(e in u)){for(var r=[],o=0;o<e;o++)r[o]="a["+o+"]";u[e]=Function("C,a","return new C("+r.join(",")+")")}return u[e](t,n)};t.exports=Function.bind||function(t){var e=r(this),n=i.call(arguments,1),u=function(){var r=n.concat(i.call(arguments));return this instanceof u?c(e,r.length,r):e.apply(t,r)};return o(e.prototype)&&(u.prototype=e.prototype),u}},function(t,e,n){"use strict";var r=n(9);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var r=n(28),o=n(21),i=function(t){return function(e,n){var i,u,c=String(o(e)),a=r(n),s=c.length;return a<0||a>=s?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===s||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},,,function(t,e,n){"use strict";n.r(e);n(81);var r=n(37),o=(n(64),n(68),n(69),n(61),n(73),n(74),n(75),n(76),n(77),n(78),n(79),n(80),n(0));function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=n,this._template=document.querySelector(e).content.querySelector(".popup"),this._element=this._template.cloneNode(!0),this._handleEscClose=this._handleEscClose.bind(this),this._close=this._close.bind(this),this.open=this.open.bind(this)}var e,n,r;return e=t,(n=[{key:"open",value:function(){this._setContent(),this._element.classList.add("popup_is-opened"),this._setEventListeners(),document.body.style.overflow="hidden"}},{key:"_setContent",value:function(){this._container.appendChild(this._element)}},{key:"_clearContent",value:function(){this._element.querySelector(".popup__content").lastElementChild.remove()}},{key:"_close",value:function(){this._element.classList.remove("popup_is-opened"),this._clearContent(),this._removeEventListeners(),this._element.remove(),document.body.style.overflow=""}},{key:"_setEventListeners",value:function(){document.addEventListener("keyup",this._handleEscClose),this._element.querySelector(".popup__close").addEventListener("click",this._close)}},{key:"_removeEventListeners",value:function(){document.removeEventListener("keyup",this._handleEscClose),this._element.querySelector(".popup__close").removeEventListener("click",this._close)}},{key:"_handleEscClose",value:function(t){t.keyCode===o.c&&this._close()}},{key:"_heandlerChange",value:function(t,e){this._close(),t.open(this,e)}}])&&i(e.prototype,n),r&&i(e,r),t}();function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=p(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function l(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(u,t);var e,n,r,o,i=(e=u,function(){var t,n=p(e);if(f()){var r=p(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return l(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t,e))._header=null,n}return n=u,(r=[{key:"open",value:function(t,e){var n=this;this._header=e,this._element.querySelector(".popup__title").textContent="Регистрация",this._element.querySelector(".popup__content").insertAdjacentHTML("beforeend",'<form class="popup__form">\n    <label class="inter inter_size_small popup__label" for="email">Email</label>\n    <input class="inter inter_size_medium popup__input" type="email" name="email" id="email" placeholder="Введите почту" required pattern="^[a-z0-9_-]{2,}(.[a-z0-9_-]+)*@[a-z0-9_-]{2,}(.[a-z0-9_-]{2,})*.[a-z]{2,6}$">\n    <span class="inter inter_size_small popup__error"></span>\n    <label class="inter inter_size_small popup__label" for="password">Пароль</label>\n    <input class="inter inter_size_medium popup__input" type="password" name="password" id="password" placeholder="Введите пароль" required minlength="8">\n    <span class="inter inter_size_small popup__error"></span>\n    <label class="inter inter_size_small popup__label" for="name">Имя</label>\n    <input class="inter inter_size_medium popup__input" type="text" name="name" id="name" placeholder="Введите своё имя" required pattern="^[А-Я]{1}[а-яё]+(-[А-ЯЁ]{1}[а-яё]+)?$" minlength="2" maxlength="30">\n    <span class="popup__error"></span>\n    <span class="inter inter_size_small popup__error popup__error_submit"></span>\n    <button class="button popup__button popup__button_sign-up" type="submit" disabled>Зарегистрироваться</button>\n    <p class="inter inter_size_medium popup__text">или <span class="popup__link">Войти</span></p>\n  </form>'),this._element.querySelector(".popup__link").addEventListener("click",(function(){return s(p(u.prototype),"_heandlerChange",n).call(n,t,e)})),document.body.clientWidth<=320&&this._header.hideMobileMenu(),s(p(u.prototype),"open",this).call(this)}},{key:"_close",value:function(){document.body.clientWidth<=320&&this._header.showMobileMenu(),s(p(u.prototype),"_close",this).call(this)}}])&&a(n.prototype,r),o&&a(n,o),u}(u);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(t,e,n){return(_="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function b(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(u,t);var e,n,r,o,i=(e=u,function(){var t,n=g(e);if(m()){var r=g(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return b(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t,e))._header=null,n}return n=u,(r=[{key:"open",value:function(t,e){var n=this;this._header=e,this._element.querySelector(".popup__title").textContent="Вход",this._element.querySelector(".popup__content").insertAdjacentHTML("beforeend",'<form class="popup__form">\n    <label class="inter inter_size_small popup__label" for="email">Email</label>\n    <input class="inter inter_size_medium popup__input" type="email" name="email" id="email" placeholder="Введите почту" required pattern="^[a-z0-9_-]{2,}(.[a-z0-9_-]+)*@[a-z0-9_-]{2,}(.[a-z0-9_-]{2,})*.[a-z]{2,6}$">\n    <span class="inter inter_size_small popup__error"></span>\n    <label class="inter inter_size_small popup__label" for="password">Пароль</label>\n    <input class="inter inter_size_medium popup__input" type="password" name="password" id="password" placeholder="Введите пароль" required>\n    <span class="inter inter_size_small popup__error"></span>\n    <span class="inter inter_size_small popup__error popup__error_submit"></span>\n    <button class="button popup__button popup__button_sign-in" type="submit" disabled>Войти</button>\n    <p class="inter inter_size_medium popup__text">или <span class="popup__link">Зарегистрироваться</span></p>\n  </form>'),this._element.querySelector(".popup__link").addEventListener("click",(function(){return _(g(u.prototype),"_heandlerChange",n).call(n,t,e)})),document.body.clientWidth<=320&&this._header.hideMobileMenu(),_(g(u.prototype),"open",this).call(this)}},{key:"_close",value:function(){document.body.clientWidth<=320&&this._header.showMobileMenu(),_(g(u.prototype),"_close",this).call(this)}}])&&v(n.prototype,r),o&&v(n,o),u}(u),O=new r.a("header_color_white",o.h),x=new d("#popup-template",o.a),j=new w("#popup-template",o.a);O.render(),o.e.classList.contains("header__button_auth")?o.e.addEventListener("click",(function(){x.open(j,O)})):o.e.addEventListener("click",(function(){document.querySelectorAll(".header__link")[1].remove(),O.render(o.h)}))}]);