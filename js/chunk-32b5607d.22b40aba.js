(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32b5607d"],{"05e3":function(t,e,r){},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),a=r("2d00"),i=o("species");t.exports=function(t){return a>=51||!n((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),a=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?o.f(t,i,a(0,r)):t[i]=r}},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch($){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new R(n||[]);return a._invoke=C(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch($){return{type:"throw",arg:$}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function g(){}function m(){}function y(){}var w={};w[a]=function(){return this};var _=Object.getPrototypeOf,b=_&&_(_(O([])));b&&b!==r&&n.call(b,a)&&(w=b);var k=y.prototype=g.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function C(t,e,r){var n=f;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return j()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?p:h,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return m.prototype=k.constructor=y,y.constructor=m,m.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},x(S.prototype),S.prototype[i]=function(){return this},t.AsyncIterator=S,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new S(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(k),s(k,c,"Generator"),k[a]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"99af":function(t,e,r){"use strict";var n=r("23e7"),o=r("d039"),a=r("e8b5"),i=r("861d"),c=r("7b0b"),s=r("50c4"),u=r("8418"),l=r("65f0"),f=r("1dde"),h=r("b622"),d=r("2d00"),p=h("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",m=d>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),y=f("concat"),w=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:a(t)},_=!m||!y;n({target:"Array",proto:!0,forced:_},{concat:function(t){var e,r,n,o,a,i=c(this),f=l(i,0),h=0;for(e=-1,n=arguments.length;e<n;e++)if(a=-1===e?i:arguments[e],w(a)){if(o=s(a.length),h+o>v)throw TypeError(g);for(r=0;r<o;r++,h++)r in a&&u(f,h,a[r])}else{if(h>=v)throw TypeError(g);u(f,h++,a)}return f.length=h,f}})},c3ac:function(t,e,r){"use strict";var n=r("05e3"),o=r.n(n);o.a},d504:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index-wrapper"},[r("div",{staticClass:"top-bar"},[t._m(0),r("div",{staticClass:"options"},[r("div",{staticClass:"change-shelf option-icon",on:{click:t.openShelfModal}},[r("i",{staticClass:"ri-loader-4-line"})]),r("div",{staticClass:"change-shelf option-icon",on:{click:function(e){return t.beginCheckIn(t.checkIn)}}},[r("i",{class:{"ri-calendar-check-line":t.checkIn,"ri-calendar-line":!t.checkIn}})]),t._m(1),r("div",{staticClass:"change-shelf option-icon",on:{click:t.gotoSettings}},[r("i",{staticClass:"ri-settings-line"})])])]),0===t.loadStatus?r("a-spin",{attrs:{size:"large"}}):1===t.loadStatus?r("div",{staticClass:"books-wrapper"},[r("div",{staticClass:"books"},t._l(t.book_list,(function(e){return r("div",{key:e.id,staticClass:"book",on:{click:function(r){return t.gotoBook(e)}}},[r("img",{staticClass:"book-cover",attrs:{src:e.book_info.cover}}),r("div",{staticClass:"book-name"},[t._v(t._s(e.book_info.book_name))])])})),0)]):r("div",{staticClass:"err-wrapper"},[r("div",{staticClass:"err-title"},[t._v(" 获取数据失败，原因可能是与后端 api 通信出错，您可以尝试 "),r("font",{staticClass:"clickable",attrs:{color:"#ff4d4f"},on:{click:t.refreshPage}},[t._v("刷新")]),t._v(" 或者 "),r("font",{staticClass:"clickable",attrs:{color:"#ff4d4f"},on:{click:t.gotoSettings}},[t._v("设置 api-host")])],1),r("div",{staticClass:"err-text"},[t._v(" "+t._s(t.errText)+" ")])]),r("a-modal",{staticClass:"shelf-modal",attrs:{footer:null,title:"切换书架",closable:!1,centered:""},on:{ok:function(){return t.shelfModal=!1}},model:{value:t.shelfModal,callback:function(e){t.shelfModal=e},expression:"shelfModal"}},[r("div",{staticClass:"shelf-wrapper"},t._l(t.shelves,(function(e){return r("div",{key:e.shelf_id,staticClass:"shelf",on:{click:function(r){return t.changeShelf(e.shelf_id)}}},[t._v(" "+t._s(e.shelf_name)+" ")])})),0)])],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[r("div",{staticClass:"text"},[t._v("我的书架")]),r("div",{staticClass:"decoration"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"change-shelf option-icon"},[r("i",{staticClass:"ri-search-2-line"})])}],a=(r("99af"),r("96cf"),r("1da1")),i={name:"Shelf",data:function(){return{shelves:[],book_list:[],currentShelfId:null,avatar:this.$store.state.reader_info.avatar_thumb_url,checkIn:!1,shelfModal:!1,loadStatus:0,errText:""}},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("----"),console.log(t.$route.params.forceReload),t.$route.params.forceReload&&t.refreshBooks(),e.next=5,t.getInfo();case 5:r=e.sent,r&&t.refreshBooks();case 7:case"end":return e.stop()}}),e)})))()},mounted:function(){},computed:{},methods:{refreshBooks:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isCheckIn(),e.next=3,t.getShelves();case 3:r=e.sent,null===r?t.loadStatus=-1:(t.shelves=r,null===t.currentShelfId&&(t.currentShelfId=t.shelves[0]["shelf_id"]),t.getBooks());case 5:case"end":return e.stop()}}),e)})))()},refreshPage:function(){this.loadStatus=0,this.currentShelfId=null,this.shelves=[],this.refreshBooks()},getInfo:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t.$get({url:"/reader/get_my_info"}).then(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.avatar=r.data.reader_info.avatar_thumb_url,t.$store.commit("setPropInfo",r.data.prop_info),t.$store.commit("setReaderInfo",r.data.reader_info),e.abrupt("return",!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return t.loadStatus=-1,t.errText=e,!1})));case 1:case"end":return e.stop()}}),e)})))()},isCheckIn:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,n,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$get({url:"/task/get_sign_record"});case 2:r=e.sent,r=r.data.sign_record_list,console.log(r),n=new Date,o=n.getDay(),a=[6,0,1,2,3,4,5],t.checkIn="1"===r[a[o]]["is_signed"];case 9:case"end":return e.stop()}}),e)})))()},beginCheckIn:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!t){r.next=4;break}e.$message.warn("请勿重复签到。"),r.next=7;break;case 4:return r.next=6,e.$get({url:"/reader/get_task_bonus_with_sign_recommend",urlParas:{task_type:1}}).then((function(t){e.checkIn=!0;var r=t.data,n=r.bonus;e.$store.commit("setPropInfo",r.prop_info),e.$store.commit("setReaderInfo",r.reader_info),e.$message.success("签到成功，".concat(n.hlb,"代币，").concat(n.exp,"经验,获得").concat(n.recommend,"推荐票。"))}));case 6:r.sent;case 7:case"end":return r.stop()}}),r)})))()},openShelfModal:function(){this.shelfModal=!0},changeShelf:function(t){this.shelfModal=!1,t===this.currentShelfId||(this.currentShelfId=t,this.getBooks())},getShelves:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t.$get({url:"/bookshelf/get_shelf_list",urlParas:{}}).then((function(t){return console.log(t.data.shelf_list),t.data.shelf_list}),(function(e){return t.loadStatus=-1,t.errText=e,null})));case 1:case"end":return e.stop()}}),e)})))()},getBooks:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$get({url:"/bookshelf/get_shelf_book_list_new",urlParas:{shelf_id:t.currentShelfId,count:9999,page:0,order:"last_read_time"}}).then((function(e){t.book_list=e.data.book_list,t.$nextTick((function(){t.loadStatus=1}))}),(function(e){t.loadStatus=-1,t.errText=e}));case 1:case"end":return e.stop()}}),e)})))()},gotoBook:function(t){this.$router.push({name:"Book",query:{bid:t.book_info.book_id,cid:t.last_read_chapter_id}})},gotoSettings:function(){this.$router.push({name:"Settings"})}}},c=i,s=(r("c3ac"),r("2877")),u=Object(s["a"])(c,n,o,!1,null,"cbc3ce98",null);e["default"]=u.exports}}]);