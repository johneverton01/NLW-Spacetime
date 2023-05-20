(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1060],{19981:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(19013),a=n(61436),o=n(4810),i=n(83946);function s(e,t){if(arguments.length<1)throw new TypeError("1 arguments required, but only ".concat(arguments.length," present"));var n=(0,r.Z)(e);if(!(0,a.Z)(n))throw new RangeError("Invalid time value");var s=t||{},u=s.fractionDigits,l=void 0===u?0:u;if(!(l>=0&&l<=3))throw new RangeError("fractionDigits must be between 0 and 3 inclusively");var d=(0,o.Z)(n.getDate(),2),c=(0,o.Z)(n.getMonth()+1,2),f=n.getFullYear(),p=(0,o.Z)(n.getHours(),2),h=(0,o.Z)(n.getMinutes(),2),m=(0,o.Z)(n.getSeconds(),2),y="";if(l>0){var g=n.getMilliseconds(),v=Math.floor(g*Math.pow(10,l-3));y="."+(0,o.Z)(v,l)}var b="",P=n.getTimezoneOffset();if(0!==P){var w=Math.abs(P),_=(0,o.Z)((0,i.Z)(w/60),2),E=(0,o.Z)(w%60,2),C=P<0?"+":"-";b="".concat(C).concat(_,":").concat(E)}else b="Z";return"".concat(f,"-").concat(c,"-").concat(d,"T").concat(p,":").concat(h,":").concat(m).concat(y).concat(b)}},42699:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(19013),a=n(13882);function o(e,t){(0,a.Z)(2,arguments);var n=(0,r.Z)(e),o=(0,r.Z)(t);return n.getTime()>o.getTime()}},33913:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(19013),a=n(13882);function o(e){return(0,a.Z)(1,arguments),(0,r.Z)(e).getTime()<Date.now()}},29081:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 m\xeas",other:"cerca de {{count}} meses"},xMonths:{one:"1 m\xeas",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};var a=n(49526),o={date:(0,a.Z)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,a.Z)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,a.Z)({formats:{full:"{{date}} '\xe0s' {{time}}",long:"{{date}} '\xe0s' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},i={lastWeek:function(e,t,n){var r=e.getUTCDay();return"'"+(0===r||6===r?"\xfaltimo":"\xfaltima")+"' eeee '\xe0s' p"},yesterday:"'ontem \xe0s' p",today:"'hoje \xe0s' p",tomorrow:"'amanh\xe3 \xe0s' p",nextWeek:"eeee '\xe0s' p",other:"P"};var s=n(88486);var u={ordinalNumber:function(e,t){var n=Number(e),r=String((t||{}).unit);return"week"===r||"isoWeek"===r?n+"\xaa":n+"\xba"},era:(0,s.Z)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},defaultWidth:"wide"}),quarter:(0,s.Z)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,s.Z)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},defaultWidth:"wide"}),day:(0,s.Z)({values:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sab"],abbreviated:["domingo","segunda","ter\xe7a","quarta","quinta","sexta","s\xe1bado"],wide:["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:(0,s.Z)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"}},defaultFormattingWidth:"wide"})},l=n(76723),d={code:"pt-BR",formatDistance:function(e,t,n){var a;return n=n||{},a="string"===typeof r[e]?r[e]:1===t?r[e].one:r[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"em "+a:"h\xe1 "+a:a},formatLong:o,formatRelative:function(e,t,n,r){var a=i[e];return"function"===typeof a?a(t,n,r):a},localize:u,match:{ordinalNumber:(0,n(60974).Z)({matchPattern:/^(\d+)[\xba\xaao]?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,l.Z)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},defaultParseWidth:"any"}),quarter:(0,l.Z)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,l.Z)({matchPatterns:{narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|mar\xe7o|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},defaultParseWidth:"any"}),day:(0,l.Z)({matchPatterns:{narrow:/^(dom|[23456]\xaa?|s[a\xe1]b)/i,short:/^(dom|[23456]\xaa?|s[a\xe1]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[a\xe1]b)/i,wide:/^(domingo|(segunda|ter[c\xe7]a|quarta|quinta|sexta)([- ]feira)?|s[a\xe1]bado)/i},defaultMatchWidth:"wide",parsePatterns:{short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[a\xe1]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[a\xe1]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[a\xe1]b/i]},defaultParseWidth:"any"}),dayPeriod:(0,l.Z)({matchPatterns:{narrow:/^(a|p|mn|md|(da) (manh\xe3|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manh\xe3|tarde|noite))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manh\xe3/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}}},64063:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,a,o;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(a=r;0!==a--;)if(!e(t[a],n[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(a=r;0!==a--;)if(!Object.prototype.hasOwnProperty.call(n,o[a]))return!1;for(a=r;0!==a--;){var i=o[a];if(!e(t[i],n[i]))return!1}return!0}return t!==t&&n!==n}},49090:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function n(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,r,a){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"===typeof r&&(a=r,r={}),r=r||{},a=a||function(){},i.type=r.type||"text/javascript",i.charset=r.charset||"utf8",i.async=!("async"in r)||!!r.async,i.src=e,r.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,r.attrs),r.text&&(i.text=""+r.text),("onload"in i?t:n)(i,a),i.onload||t(i,a),o.appendChild(i)}},90638:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=o.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};i=e,u=Promise,(null!=u&&"undefined"!==typeof Symbol&&u[Symbol.hasInstance]?u[Symbol.hasInstance](i):i instanceof u)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=a({},r,e));var i,u;var l=r=a({},r,t);if(l.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(l.suspense)return n(l);r.loadableGenerated&&delete(r=a({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,s(n,r);delete r.ssr}return n(r)};i(n(67294));var o=i(n(14302));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}},16319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=((r=n(67294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=a},14302:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,s=(i=n(67294))&&i.__esModule?i:{default:i},u=n(67161),l=n(16319);var d=[],c=[],f=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,a;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this,t=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var n=this._res,r=this._opts;if(n.loading){if("number"===typeof r.delay)if(0===r.delay)this._state.pastDelay=!0;else{var a=this;this._delay=setTimeout((function(){a._update({pastDelay:!0})}),r.delay)}if("number"===typeof r.timeout){var o=this;this._timeout=setTimeout((function(){o._update({timedOut:!0})}),r.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(e){t._update({}),t._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),a&&r(t,a),e}();function m(e){return function(e,t){var n=function(){if(!a){var t=new h(e,r);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=s.default.lazy(r.loader));var a=null;if(!f&&"function"===typeof r.webpack&&!r.suspense){var i=r.webpack();c.push((function(e){var t=!0,r=!1,a=void 0;try{for(var o,s=i[Symbol.iterator]();!(t=(o=s.next()).done);t=!0){var u=o.value;if(-1!==e.indexOf(u))return n()}}catch(l){r=!0,a=l}finally{try{t||null==s.return||s.return()}finally{if(r)throw a}}}))}var d=r.suspense?function(e,t){return s.default.createElement(r.lazy,o({},e,{ref:t}))}:function(e,t){n();var o=s.default.useContext(l.LoadableContext),i=u.useSubscription(a);return s.default.useImperativeHandle(t,(function(){return{retry:a.retry}}),[]),o&&Array.isArray(r.modules)&&r.modules.forEach((function(e){o(e)})),s.default.useMemo((function(){return i.loading||i.error?s.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:a.retry}):i.loaded?s.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return d.preload=function(){return!r.suspense&&n()},d.displayName="LoadableComponent",s.default.forwardRef(d)}(p,e)}function y(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return y(e,t)}))}m.preloadAll=function(){return new Promise((function(e,t){y(d).then(e,t)}))},m.preloadReady=function(e){var t=void 0===e?[]:e;return new Promise((function(e){var n=function(){return f=!0,e()};y(c,t).then(n,n)}))},window.__NEXT_PRELOADREADY=m.preloadReady;var g=m;t.default=g},5152:function(e,t,n){e.exports=n(90638)},9008:function(e,t,n){e.exports=n(5443)},24320:function(e,t,n){"use strict";var r=n(56627);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},76853:function(e,t,n){e.exports=n(24320)()},56627:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},33988:function(e){"use strict";var t;t=function(){var e={},t={};return e.on=function(e,n){var r={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var r,a=t[e];if(a)for(r=a.length;r--;)a[r].handler(n)},e},e.exports=t},66006:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(22275),o=(r=a)&&r.__esModule?r:{default:r};t.default={pauseVideo:{acceptableStates:[o.default.ENDED,o.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[o.default.ENDED,o.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[o.default.ENDED,o.default.PLAYING,o.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},89125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(9215)),a=s(n(28255)),o=s(n(65279)),i=s(n(66006));function s(e){return e&&e.__esModule?e:{default:e}}var u=(0,r.default)("youtube-player"),l={proxyEvents:function(e){var t={},n=function(n){var r="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[r]=function(t){u('event "%s"',r,t),e.trigger(n,t)}},r=!0,a=!1,i=void 0;try{for(var s,l=o.default[Symbol.iterator]();!(r=(s=l.next()).done);r=!0){n(s.value)}}catch(d){a=!0,i=d}finally{try{!r&&l.return&&l.return()}finally{if(a)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},r=function(r){t&&i.default[r]?n[r]=function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];return e.then((function(e){var t=i.default[r],a=e.getPlayerState(),o=e[r].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(a)?new Promise((function(n){e.addEventListener("onStateChange",(function r(){var a=e.getPlayerState(),o=void 0;"number"===typeof t.timeout&&(o=setTimeout((function(){e.removeEventListener("onStateChange",r),n()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(a)&&(e.removeEventListener("onStateChange",r),clearTimeout(o),n())}))})).then((function(){return o})):o}))}:n[r]=function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];return e.then((function(e){return e[r].apply(e,n)}))}},o=!0,s=!1,u=void 0;try{for(var l,d=a.default[Symbol.iterator]();!(o=(l=d.next()).done);o=!0){var c=l.value;r(c)}}catch(f){s=!0,u=f}finally{try{!o&&d.return&&d.return()}finally{if(s)throw u}}return n}};t.default=l,e.exports=t.default},22275:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},65279:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},28255:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},11062:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=s(n(33988)),o=s(n(55900)),i=s(n(89125));function s(e){return e&&e.__esModule?e:{default:e}}var u=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=(0,a.default)();if(u||(u=(0,o.default)(s)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"===typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(s);var l=new Promise((function(n){"object"===("undefined"===typeof e?"undefined":r(e))&&e.playVideo instanceof Function?n(e):u.then((function(r){var a=new r.Player(e,t);return s.on("ready",(function(){n(a)})),null}))})),d=i.default.promisifyPlayer(l,n);return d.on=s.on,d.off=s.off,d},e.exports=t.default},55900:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(49090),o=(r=a)&&r.__esModule?r:{default:r};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,o.default)(n+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var r=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){r&&r(),t(window.YT)}}}))},e.exports=t.default},9215:function(e,t,n){var r=n(34155);function a(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!==typeof r&&"env"in r&&(e=r.env.DEBUG),e}(t=e.exports=n(55046)).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var a=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(a++,"%c"===e&&(o=a))})),e.splice(o,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=a,t.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(a())},55046:function(e,t,n){var r;function a(e){function n(){if(n.enabled){var e=n,a=+new Date,o=a-(r||a);e.diff=o,e.prev=r,e.curr=a,r=a;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!==typeof i[0]&&i.unshift("%O");var u=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;u++;var a=t.formatters[r];if("function"===typeof a){var o=i[u];n=a.call(e,o),i.splice(u,1),u--}return n})),t.formatArgs.call(e,i);var l=n.log||t.log||console.log.bind(console);l.apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"===typeof t.init&&t.init(n),n}(t=e.exports=a.debug=a.default=a).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"===typeof e?e:"").split(/[\s,]+/),r=n.length,a=0;a<r;a++)n[a]&&("-"===(e=n[a].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(14680),t.names=[],t.skips=[],t.formatters={}},14680:function(e){var t=1e3,n=60*t,r=60*n,a=24*r,o=365.25*a;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,s){s=s||{};var u,l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var i=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!i)return;var s=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*o;case"days":case"day":case"d":return s*a;case"hours":case"hour":case"hrs":case"hr":case"h":return s*r;case"minutes":case"minute":case"mins":case"min":case"m":return s*n;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===l&&!1===isNaN(e))return s.long?i(u=e,a,"day")||i(u,r,"hour")||i(u,n,"minute")||i(u,t,"second")||u+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},3191:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(76853),a=n(67294),o=n(64063),i=n(11062),s=Object.defineProperty,u=Object.defineProperties,l=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(d)for(var n of d(t))f.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>u(e,l(t));function y(e={}){return m(h({},e),{height:0,width:0,playerVars:m(h({},e.playerVars),{autoplay:0,start:0,end:0})})}var g={videoId:r.string,id:r.string,className:r.string,iframeClassName:r.string,style:r.object,title:r.string,loading:r.oneOf(["lazy","eager"]),opts:r.objectOf(r.any),onReady:r.func,onError:r.func,onPlay:r.func,onPause:r.func,onEnd:r.func,onStateChange:r.func,onPlaybackRateChange:r.func,onPlaybackQualityChange:r.func},v=class extends a.Component{constructor(e){super(e),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var t,n;return null==(n=(t=this.props).onReady)?void 0:n.call(t,e)},this.onPlayerError=e=>{var t,n;return null==(n=(t=this.props).onError)?void 0:n.call(t,e)},this.onPlayerStateChange=e=>{var t,n,r,a,o,i,s,u;switch(null==(n=(t=this.props).onStateChange)||n.call(t,e),e.data){case v.PlayerState.ENDED:null==(a=(r=this.props).onEnd)||a.call(r,e);break;case v.PlayerState.PLAYING:null==(i=(o=this.props).onPlay)||i.call(o,e);break;case v.PlayerState.PAUSED:null==(u=(s=this.props).onPause)||u.call(s,e)}},this.onPlayerPlaybackRateChange=e=>{var t,n;return null==(n=(t=this.props).onPlaybackRateChange)?void 0:n.call(t,e)},this.onPlayerPlaybackQualityChange=e=>{var t,n;return null==(n=(t=this.props).onPlaybackQualityChange)?void 0:n.call(t,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then((()=>this.destroyPlayerPromise=void 0)),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if("undefined"===typeof document)return;if(this.destroyPlayerPromise)return void this.destroyPlayerPromise.then(this.createPlayer);const e=m(h({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=i(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then((e=>{this.props.title&&e.setAttribute("title",this.props.title),this.props.loading&&e.setAttribute("loading",this.props.loading)}))},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;null==(e=this.internalPlayer)||e.getIframe().then((e=>{this.props.id?e.setAttribute("id",this.props.id):e.removeAttribute("id"),this.props.iframeClassName?e.setAttribute("class",this.props.iframeClassName):e.removeAttribute("class"),this.props.opts&&this.props.opts.width?e.setAttribute("width",this.props.opts.width.toString()):e.removeAttribute("width"),this.props.opts&&this.props.opts.height?e.setAttribute("height",this.props.opts.height.toString()):e.removeAttribute("height"),this.props.title?e.setAttribute("title",this.props.title):e.setAttribute("title","YouTube video player"),this.props.loading?e.setAttribute("loading",this.props.loading):e.removeAttribute("loading")}))},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,t,n,r;if("undefined"===typeof this.props.videoId||null===this.props.videoId)return void(null==(e=this.internalPlayer)||e.stopVideo());let a=!1;const o={videoId:this.props.videoId};(null==(t=this.props.opts)?void 0:t.playerVars)&&(a=1===this.props.opts.playerVars.autoplay,"start"in this.props.opts.playerVars&&(o.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(o.endSeconds=this.props.opts.playerVars.end)),a?null==(n=this.internalPlayer)||n.loadVideoById(o):null==(r=this.internalPlayer)||r.cueVideoById(o)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}async componentDidUpdate(e){(function(e,t){var n,r,a,o;return e.id!==t.id||e.className!==t.className||(null==(n=e.opts)?void 0:n.width)!==(null==(r=t.opts)?void 0:r.width)||(null==(a=e.opts)?void 0:a.height)!==(null==(o=t.opts)?void 0:o.height)||e.iframeClassName!==t.iframeClassName||e.title!==t.title})(e,this.props)&&this.updatePlayer(),function(e,t){return e.videoId!==t.videoId||!o(y(e.opts),y(t.opts))}(e,this.props)&&await this.resetPlayer(),function(e,t){var n,r;if(e.videoId!==t.videoId)return!0;const a=(null==(n=e.opts)?void 0:n.playerVars)||{},o=(null==(r=t.opts)?void 0:r.playerVars)||{};return a.start!==o.start||a.end!==o.end}(e,this.props)&&this.updateVideo()}componentWillUnmount(){this.destroyPlayer()}render(){return a.createElement("div",{className:this.props.className,style:this.props.style},a.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},b=v;b.propTypes=g,b.defaultProps={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},b.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var P=b}}]);