(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f824b88"],{"057f":function(t,e,i){var n=i("fc6a"),r=i("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?s(t):r(n(t))}},1276:function(t,e,i){"use strict";var n=i("d784"),r=i("44e7"),a=i("825a"),o=i("1d80"),s=i("4840"),c=i("8aa5"),u=i("50c4"),l=i("14c3"),f=i("9263"),d=i("d039"),h=[].push,p=Math.min,m=4294967295,v=!d((function(){return!RegExp(m,"y")}));n("split",2,(function(t,e,i){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var n=String(o(this)),a=void 0===i?m:i>>>0;if(0===a)return[];if(void 0===t)return[n];if(!r(t))return e.call(n,t,a);var s,c,u,l=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=new RegExp(t.source,d+"g");while(s=f.call(v,n)){if(c=v.lastIndex,c>p&&(l.push(n.slice(p,s.index)),s.length>1&&s.index<n.length&&h.apply(l,s.slice(1)),u=s[0].length,p=c,l.length>=a))break;v.lastIndex===s.index&&v.lastIndex++}return p===n.length?!u&&v.test("")||l.push(""):l.push(n.slice(p)),l.length>a?l.slice(0,a):l}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var r=o(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,r,i):n.call(String(r),e,i)},function(t,r){var o=i(n,t,this,r,n!==e);if(o.done)return o.value;var f=a(t),d=String(this),h=s(f,RegExp),k=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),g=new h(v?f:"^(?:"+f.source+")",b),_=void 0===r?m:r>>>0;if(0===_)return[];if(0===d.length)return null===l(g,d)?[d]:[];var w=0,y=0,C=[];while(y<d.length){g.lastIndex=v?y:0;var x,S=l(g,v?d:d.slice(y));if(null===S||(x=p(u(g.lastIndex+(v?0:y)),d.length))===w)y=c(d,y,k);else{if(C.push(d.slice(w,y)),C.length===_)return C;for(var T=1;T<=S.length-1;T++)if(C.push(S[T]),C.length===_)return C;y=w=x}}return C.push(d.slice(w)),C}]}),!v)},"13f6":function(t,e,i){t.exports=i.p+"img/d_avatar.da8e974d.jpg"},"159b":function(t,e,i){var n=i("da84"),r=i("fdbc"),a=i("17c2"),o=i("9112");for(var s in r){var c=n[s],u=c&&c.prototype;if(u&&u.forEach!==a)try{o(u,"forEach",a)}catch(l){u.forEach=a}}},"17c2":function(t,e,i){"use strict";var n=i("b727").forEach,r=i("a640"),a=i("ae40"),o=r("forEach"),s=a("forEach");t.exports=o&&s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,i){var n=i("d039"),r=i("b622"),a=i("2d00"),o=r("species");t.exports=function(t){return a>=51||!n((function(){var e=[],i=e.constructor={};return i[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,i){"use strict";var n=i("6eeb"),r=i("825a"),a=i("d039"),o=i("ad6d"),s="toString",c=RegExp.prototype,u=c[s],l=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=s;(l||f)&&n(RegExp.prototype,s,(function(){var t=r(this),e=String(t.source),i=t.flags,n=String(void 0===i&&t instanceof RegExp&&!("flags"in c)?o.call(t):i);return"/"+e+"/"+n}),{unsafe:!0})},3838:function(t,e,i){},"3ca3":function(t,e,i){"use strict";var n=i("6547").charAt,r=i("69f3"),a=i("7dd0"),o="String Iterator",s=r.set,c=r.getterFor(o);a(String,"String",(function(t){s(this,{type:o,string:String(t),index:0})}),(function(){var t,e=c(this),i=e.string,r=e.index;return r>=i.length?{value:void 0,done:!0}:(t=n(i,r),e.index+=t.length,{value:t,done:!1})}))},4160:function(t,e,i){"use strict";var n=i("23e7"),r=i("17c2");n({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"44e7":function(t,e,i){var n=i("861d"),r=i("c6b6"),a=i("b622"),o=a("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==r(t))}},4910:function(t,e,i){},"498a":function(t,e,i){"use strict";var n=i("23e7"),r=i("58a8").trim,a=i("c8d2");n({target:"String",proto:!0,forced:a("trim")},{trim:function(){return r(this)}})},"4de4":function(t,e,i){"use strict";var n=i("23e7"),r=i("b727").filter,a=i("1dde"),o=i("ae40"),s=a("filter"),c=o("filter");n({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,i){"use strict";var n=i("0366"),r=i("7b0b"),a=i("9bdd"),o=i("e95a"),s=i("50c4"),c=i("8418"),u=i("35a1");t.exports=function(t){var e,i,l,f,d,h,p=r(t),m="function"==typeof this?this:Array,v=arguments.length,k=v>1?arguments[1]:void 0,b=void 0!==k,g=u(p),_=0;if(b&&(k=n(k,v>2?arguments[2]:void 0,2)),void 0==g||m==Array&&o(g))for(e=s(p.length),i=new m(e);e>_;_++)h=b?k(p[_],_):p[_],c(i,_,h);else for(f=g.call(p),d=f.next,i=new m;!(l=d.call(f)).done;_++)h=b?a(f,k,[l.value,_],!0):l.value,c(i,_,h);return i.length=_,i}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var n=i("1d80"),r=i("5899"),a="["+r+"]",o=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),c=function(t){return function(e){var i=String(n(e));return 1&t&&(i=i.replace(o,"")),2&t&&(i=i.replace(s,"")),i}};t.exports={start:c(1),end:c(2),trim:c(3)}},"746f":function(t,e,i){var n=i("428f"),r=i("5135"),a=i("e5383"),o=i("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});r(e,t)||o(e,t,{value:a.f(t)})}},"7f14":function(t,e,i){},8245:function(t,e,i){"use strict";var n=i("dac3"),r=i.n(n);r.a},8418:function(t,e,i){"use strict";var n=i("c04e"),r=i("9bf2"),a=i("5c6c");t.exports=function(t,e,i){var o=n(e);o in t?r.f(t,o,a(0,i)):t[o]=i}},"968f":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"book",staticClass:"book-page",class:{"book-page-tsu":t.showTsukkomi}},[i("div",{ref:"contentContainer",staticClass:"content-container"},[i("div",{directives:[{name:"show",rawName:"v-show",value:1===t.loading,expression:"loading === 1"}],ref:"bookContent",staticClass:"book-content"},[i("div",{staticClass:"top-bar"},[i("i",{staticClass:"ri-arrow-left-line icon-button",on:{click:t.goBack}}),i("div",{staticClass:"topbar-title"},[t._v(t._s(t.chapterTitle))])]),i("paragraph",{ref:"paragraph",staticClass:"text-content",attrs:{paragraphs:t.chapterContentData,isDark:!1,size:16},on:{showTsu:t.showTsu,showPic:t.showPic}}),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.auth,expression:"!auth"}],staticClass:"buy-container"},[i("div",{staticClass:"title"},[t._v(" 本章是 VIP 章节，购买后才能阅读 ")]),i("div",{staticClass:"subtitle"},[t._v(" 本章节需 "+t._s(t.chapterAmount)+" 币，当前剩余 "+t._s(t.prop_info.rest_hlb)+" 币，共 "+t._s(t.buyAmount)+" 人购买 ")]),i("div",{staticClass:"buy-chapter-button",on:{click:t.buyChapter}},[t._v("购买本章")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.auth,expression:"auth"}],staticClass:"book-footer"},[i("div",{staticClass:"next-chapter-button",on:{click:t.nextChapter}},[t._v("下一章")])])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:1===t.loading&&t.showTsukkomi,expression:"loading === 1 && showTsukkomi"}],staticClass:"tsukkomi-container",style:{right:t.tsukkomiRight+"px"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:0===t.tsukkomi_list.length,expression:"tsukkomi_list.length === 0"}],staticClass:"skeleton-container"},[i("a-skeleton",{attrs:{active:""}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.tsukkomi_list.length,expression:"tsukkomi_list.length !== 0"}]},[i("div",{staticClass:"title-container"},[i("div",{staticClass:"title-text",on:{click:t.toTsukkomiTop}},[t._v("共 "+t._s(t.tsukkomi_num)+" 条帖子")]),i("div",{staticClass:"title-button",on:{click:t.closeTsu}},[i("i",{staticClass:"ri-close-line"})])]),i("div",{ref:"tsukkomi",staticClass:"tsukkomis"},[t._l(t.tsukkomi_list,(function(e){return i("div",{key:e.tsukkomi_id,staticClass:"tsukkomi"},[i("div",{staticClass:"tsukkomi-info"},[i("div",{staticClass:"avatar"},[i("img",{attrs:{src:0!==e.reader_info.avatar_thumb_url.length?e.reader_info.avatar_thumb_url:t.tempAvatar}})]),i("div",{staticClass:"tsukkomi-info-text"},[i("div",{staticClass:"user-name"},[t._v(t._s(e.reader_info.reader_name))]),i("div",{staticClass:"time"},[t._v(t._s(e.ctime))])])]),i("div",{staticClass:"tsukkomi-content"},[t._v(" "+t._s(e.tsukkomi_content)+" ")]),i("div",{staticClass:"tsukkomi-options"},[i("div",{staticClass:"option-button",class:{"like-selected":e.is_like+""!=="0"},on:{click:function(i){return t.tsukkomiOperate(0,e.tsukkomi_id)}}},[i("i",{staticClass:"ri-thumb-up-line"}),i("div",{staticClass:"num"},[t._v(t._s(e.like_amount))])]),i("div",{staticClass:"option-button",class:{"unlike-selected":e.is_unlike+""!=="0"},on:{click:function(i){return t.tsukkomiOperate(1,e.tsukkomi_id)}}},[i("i",{staticClass:"ri-thumb-down-line"}),i("div",{staticClass:"num"},[t._v(t._s(e.unlike_amount))])])])])})),i("div",{staticClass:"pagination-container"},[i("a-pagination",{attrs:{size:"small",total:t.tsukkomi_num,defaultPageSize:20,hideOnSinglePage:!0},on:{change:t.changeTsukkomiPage},model:{value:t.tsukkomiPage,callback:function(e){t.tsukkomiPage=e},expression:"tsukkomiPage"}})],1)],2)])]),i("div",{directives:[{name:"show",rawName:"v-show",value:0===t.loading,expression:"loading === 0"}],staticClass:"skeleton-container"},[i("a-skeleton",{attrs:{active:""}})],1)]),i("div",{directives:[{name:"show",rawName:"v-show",value:1===t.loading,expression:"loading === 1"}],staticClass:"control-bar-container content-bar",style:{"margin-left":t.controlBarLeftMargin+"px"}},[i("div",{staticClass:"control-button-container",on:{click:t.showCatalog}},[i("i",{staticClass:"ri-menu-line control-button"})]),i("div",{staticClass:"control-button-container",on:{click:t.noAccess}},[i("i",{staticClass:"ri-settings-line control-button"})]),i("div",{staticClass:"control-button-container",on:{click:t.noAccess}},[i("i",{staticClass:"ri-download-cloud-2-line control-button"})]),i("div",{staticClass:"control-button-container",on:{click:t.giveTickets}},[i("i",{staticClass:"ri-coupon-3-line control-button"})]),i("div",{staticClass:"control-button-container",on:{click:t.toChapterTop}},[i("i",{staticClass:"ri-arrow-up-s-line control-button"})])]),i("div",{staticClass:"control-bar-container tsukkomi-bar",class:{"tsukkomi-bar-show":t.showTsukkomi},style:{"margin-right":t.controlBarLeftMargin+"px"}},[i("div",{staticClass:"control-button-container",on:{click:t.newTsukkomi}},[i("i",{staticClass:"ri-edit-circle-line control-button"})])]),i("catalog",{ref:"catalog",attrs:{info:t.book_info,currentChapter:t.chapterIndex,marginLeft:t.tsukkomiRight,chapters:t.book_chapters},on:{getContent:t.jumpChapter}}),i("Picture",{ref:"picture"}),i("Tsukkomi",{ref:"tsukkomiWriter",on:{refreshTsukkomi:t.refreshTsukkomi,refreshPara:t.refreshPara}}),i("Tickets",{ref:"tickets"})],1)},r=[];i("99af"),i("c975"),i("d81d"),i("d3b7"),i("ac1f"),i("5319"),i("1276"),i("5cc6"),i("9a8c"),i("a975"),i("735e"),i("c1ac"),i("d139"),i("3a7b"),i("d5d6"),i("82f8"),i("e91f"),i("60bd"),i("5f96"),i("3280"),i("3fcc"),i("ca91"),i("25a1"),i("cd26"),i("3c5d"),i("2954"),i("649e"),i("219c"),i("170b"),i("b39a"),i("72f7"),i("a4d3"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("159b");function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function u(t){if(Array.isArray(t))return c(t)}i("e01a"),i("d28b"),i("a630"),i("3ca3"),i("ddb0");function l(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}i("fb6a"),i("b0c0"),i("25f0");function f(t,e){if(t){if("string"===typeof t)return c(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?c(t,e):void 0}}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(t){return u(t)||l(t)||f(t)||d()}function p(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=f(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return o=t.done,t},e:function(t){s=!0,a=t},f:function(){try{o||null==i["return"]||i["return"]()}finally{if(s)throw a}}}}i("96cf");var m,v,k=i("1da1"),b=i("1c46"),g=i.n(b),_=i("2f62"),w=i("b7f5"),y=(i("7da8"),i("466d"),/^\s+?<img.+>$/),C=/(?<=alt=').+?(?=')/,x=/(?<=src=").+?(?=")/,S={name:"Paragraph",data:function(){return{picParaReg:y,picAltReg:C,picSrcReg:x}},created:function(){},props:["paragraphs","isDark","size"],render:function(){var t=this,e=arguments[0];return this.paragraphs.length>0?e("div",{class:"content",style:{color:+this.isDark?"#d0d3d8":"#0d141e"}},[e("div",{class:"chapter-title tssukomi-wrapper",style:{"font-size":+this.size+8+"px"}},[this.paragraphs[0].text,this.paragraphs[0].tsukkomi_num>0?e("span",{class:"tssukomi",on:{click:function(){t.$emit("showTsu",0,t.paragraphs[0].tsukkomi_num)}}},[this.paragraphs[0].tsukkomi_num,e("i",[e("cite")])]):null]),this.paragraphs.map((function(i,n){if(0!==n)return e("p",{class:"tssukomi-wrapper",style:{"font-size":+t.size+"px"}},[t.picParaReg.test(i.text)?e("span",{class:"content-text pic-alt",on:{click:function(){t.$emit("showPic",i.text.match(t.picSrcReg)[0])}}},["　　【"+i.text.match(t.picAltReg)[0]+"】"]):e("span",{class:"content-text"},[i.text]),i.tsukkomi_num>0?e("span",{class:"tssukomi",on:{click:function(){t.$emit("showTsu",n,i.tsukkomi_num)}}},[i.tsukkomi_num,e("i",[e("cite")])]):null])})),e("div",{class:"content-footer"})]):e("div")},computed:{show:function(){return!0}},watch:{paragraphs:function(t){}}},T=S,P=(i("ff8e"),i("2877")),O=Object(P["a"])(T,m,v,!1,null,"6cf6bf5e",null),$=O.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"catalog-container"},[i("a-modal",{staticClass:"catalog-dialog-container",attrs:{closable:!1,footer:null,dialogClass:"cata-dialog",dialogStyle:{"margin-left":t.marginLeft+"px"}},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[i("div",{staticClass:"header-wrapper"},[i("div",{staticClass:"catalog-head"},[i("div",{staticClass:"book-cover",style:t.getCover}),i("div",{staticClass:"book-info"},[i("div",{staticClass:"book-name"},[t._v(t._s(t.info.book_name))]),i("div",{staticClass:"book-author"},[t._v(t._s(t.info.author_name))]),i("div",{staticClass:"read-speed"},[t._v(t._s("上次更新 "+t.info.uptime))])])]),i("div",{staticClass:"catalog-button-container"},[i("i",{staticClass:"ri-sort-asc catalog-button"})])]),i("div",{ref:"bsWrapper",staticClass:"scroll-wrapper"},[i("div",{staticClass:"catalog-content"},t._l(t.chapters,(function(e,n){return i("div",{key:n,staticClass:"catalog",on:{click:function(i){return t.getContent(e.chapter_id)}}},[i("div",{staticClass:"chaper-title",class:{"chapter-title-selected":n===t.currentChapter}},[t._v(" "+t._s(e.chapter_title)+" ")])])})),0)])])],1)},I=[],A=(i("a9e3"),{name:"Catalog",props:{chapters:{type:Array,default:function(){return[]}},currentChapter:{type:Number,default:0},info:{type:Object,default:function(){return{}}},reverse:{type:Boolean,default:!1},marginLeft:{type:Number,default:0}},data:function(){return{visible:!1,cataScroll:null}},computed:{getCover:function(){return"background: url(".concat(this.info.cover,") no-repeat;background-size: cover;")}},created:function(){},watch:{marginLeft:function(t){this.$forceUpdate()},currentChapter:function(t){this.$forceUpdate()}},methods:{showCatalog:function(){var t=this;this.visible=!0,this.$nextTick((function(){t.cataScroll=new w["a"](t.$refs.bsWrapper,{wheelSpeed:2,wheelPropagation:!0,minScrollbarLength:20}),t.$refs.bsWrapper.scrollTop=52*(t.currentChapter-1)}))},hideCatalog:function(){this.visible=!1},initScroll:function(){},getContent:function(t){this.hideCatalog(),this.$emit("getContent",t)}}}),j=A,E=(i("e362"),Object(P["a"])(j,L,I,!1,null,"ef4090d0",null)),N=E.exports,R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pic-dialog"},[i("a-modal",{attrs:{title:"",footer:null,closable:!1},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[i("div",{staticClass:"img-body"},[i("img",{staticClass:"pic-img",attrs:{src:t.picImg,alt:""}})])])],1)},D=[],M={name:"Picture",data:function(){return{visible:!1,picImg:""}},methods:{showPic:function(t,e){var i=this;this.picImg=t,this.$nextTick((function(){i.visible=!0}))}}},z=M,H=(i("e356"),Object(P["a"])(z,R,D,!1,null,"3b4f7d7a",null)),F=H.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tsukkomi"},[i("a-modal",{attrs:{cancelText:"",okText:"发表",title:"发表间贴",width:"42vw",maskClosable:!1,allowClear:!0},on:{cancel:t.cancel},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[i("template",{slot:"footer"},[i("a-button",{key:"submit",attrs:{type:"primary",loading:t.confirmLoading,disabled:t.postDisabled},on:{click:t.post}},[t._v(" 发表 ")])],1),i("div",{ref:"text",staticClass:"text-area"},[t._v(t._s(t.text))]),i("div",{staticClass:"input-area"},[i("a-textarea",{staticClass:"input",attrs:{placeholder:"来写点什么吧",rows:3},model:{value:t.tsukkomiContent,callback:function(e){t.tsukkomiContent=e},expression:"tsukkomiContent"}})],1)],2)],1)},B=[],G=(i("498a"),{name:"Tsukkomi",data:function(){return{visible:!1,text:"",textScroll:null,tsukkomiContent:"",confirmLoading:!1,bid:0,cid:0,pid:0,postDisabled:!0}},watch:{tsukkomiContent:function(t){t=t.trim(),t.length>0?this.postDisabled=!1:this.postDisabled=!0}},methods:{show:function(t,e,i,n){var r=this;this.visible=!0,this.bid=e,this.cid=i,this.pid=n,this.text=t.trim(),this.$nextTick((function(){r.textScroll=new w["a"](r.$refs.text,{wheelSpeed:2,wheelPropagation:!0,minScrollbarLength:20})}))},cancel:function(){this.tsukkomiContent="",this.$refs.text.scrollTo(0,0),this.textScroll.destroy()},post:function(){var t=this;console.log(this.tsukkomiContent),this.confirmLoading=!0,this.$get({url:"/chapter/add_tsukkomi",urlParas:{book_id:this.bid,chapter_id:this.cid,paragraph_index:this.pid,tsukkomi_content:this.tsukkomiContent}}).then((function(e){var i=e.data.tsukkomi_info,n=i.paragraph_index;t.confirmLoading=!1,t.cancel(),t.$emit("refreshTsukkomi"),t.$emit("refreshPara",n),t.visible=!1}))}}}),W=G,q=(i("9b81"),Object(P["a"])(W,V,B,!1,null,"251f1738",null)),U=q.exports,J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tickets"},[i("a-modal",{attrs:{title:"打赏投票",width:"30vw",allowClear:!0},on:{cancel:t.cancel},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[i("template",{slot:"footer"},[i("a-button",{key:"submit",attrs:{type:"primary",loading:t.confirmLoading},on:{click:t.post}},[t._v(" 确定 ")])],1),i("div",{staticClass:"container"},[i("div",{staticClass:"tickets"},[i("div",{staticClass:"ticket"},[i("div",{staticClass:"title"},[t._v("推荐票")]),i("a-input-number",{attrs:{min:0,max:parseInt(t.prop_info.rest_recommend),size:"small"},model:{value:t.recommandNum,callback:function(e){t.recommandNum=e},expression:"recommandNum"}})],1)]),i("div",{staticClass:"info"},[i("div",{staticClass:"info-line"},[t._v("剩余推荐票 "+t._s(t.prop_info.rest_recommend))]),i("div",{staticClass:"info-line"},[t._v("剩余月票 "+t._s(t.prop_info.rest_yp))]),i("div",{staticClass:"info-line"},[t._v("剩余刀片 "+t._s(t.prop_info.rest_month_blade))]),i("div",{staticClass:"info-line"},[t._v("剩余欢乐币 "+t._s(t.prop_info.rest_hlb))])])])],2)],1)},X=[],Q={name:"Tickets",data:function(){return{visible:!1,bid:0,recommandNum:0,ypNum:0,bladeNum:0,confirmLoading:!1}},watch:{},computed:s({},Object(_["b"])(["prop_info"])),methods:{show:function(t){this.visible=!0,this.bid=t},cancel:function(){},post:function(){var t=this;this.confirmLoading=!0,this.$get({url:"/book/give_recommend",urlParas:{book_id:this.bid,count:this.recommandNum}}).then((function(e){var i=e.data;t.$store.commit("setPropInfo",i.prop_info),t.$store.commit("setReaderInfo",i.reader_info),t.confirmLoading=!1,t.visible=!1,t.$message.success("投票成功")}))}}},Y=Q,K=(i("8245"),Object(P["a"])(Y,J,X,!1,null,"01ed2213",null)),Z=K.exports,tt={name:"Reader",components:{Paragraph:$,Catalog:N,Picture:F,Tsukkomi:U,Tickets:Z},data:function(){return{bid:null,cid:null,contentDiv:null,contentWidth:0,controlBarLeftMargin:0,loading:0,chapterTitle:"",book_info:{},book_chapters:[],book_chapterids:[],chapterIndex:0,chapter_info:{},chapterContentData:[],containerScroll:null,tsukkomi_num:0,tsukkomi_list:[],showTsukkomi:!1,tsukkomiRight:0,tsukkomiPage:1,tsukkomiScroll:null,tsukkomiIndex:0,tempAvatar:i("13f6"),cataMarginLeft:0,auth:!0,chapterAmount:0,buyAmount:0}},created:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.bid=t.$route.query.bid,t.cid=t.$route.query.cid,0!=t.cid&&t.getContent(t.cid),e.next=5,t.$get({url:"/book/get_info_by_id",urlParas:{book_id:t.bid}});case 5:return i=e.sent,t.book_info=i.data.book_info,e.next=9,t.$get({url:"/book/get_division_list",urlParas:{book_id:t.bid}}).then(function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(i){var n,r,a,o,s,c,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=[],r=i.data.division_list,a=0,o=p(r),e.prev=4,o.s();case 6:if((s=o.n()).done){e.next=17;break}return c=s.value,u=c["division_id"],e.next=11,t.$get({url:"/chapter/get_updated_chapter_by_division_id",urlParas:{division_id:u,last_update_time:0}});case 11:l=e.sent,0===a&&0==t.cid&&(t.cid=l.data.chapter_list[0],t.$router.replace({query:{bid:t.bid,cid:t.cid}}),t.getContent(t.cid)),n.push.apply(n,h(l.data.chapter_list)),a++;case 15:e.next=6;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](4),o.e(e.t0);case 22:return e.prev=22,o.f(),e.finish(22);case 25:return e.abrupt("return",n);case 26:case"end":return e.stop()}}),e,null,[[4,19,22,25]])})));return function(t){return e.apply(this,arguments)}}());case 9:n=e.sent,t.book_chapters=n,t.book_chapterids=t.book_chapters.map((function(t){return t["chapter_id"]})),t.chapterIndex=t.book_chapterids.indexOf(t.cid);case 13:case"end":return e.stop()}}),e)})))()},mounted:function(){this.contentDiv=this.$refs.contentContainer,window.addEventListener("resize",this.windowSizeHandler)},watch:{contentWidth:function(t){}},computed:s({},Object(_["b"])(["prop_info","reader_info"])),methods:{windowSizeHandler:function(){var t=window.innerWidth,e=this.contentDiv.clientWidth;this.controlBarLeftMargin=-(e/2+96),this.tsukkomiRight=(t-e)/2},getContent:function(t){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function i(){var n,r,a,o,s,c,u,l,f,d,m,v;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return"string"!==typeof t&&(t="".concat(t)),e.cid=t,e.loading=0,e.chapterIndex=e.book_chapterids.indexOf(t),i.next=6,e.$get({url:"/chapter/get_chapter_cmd",urlParas:{chapter_id:t}});case 6:return n=i.sent,r=n.data.command,i.next=10,e.$get({url:"/chapter/get_cpt_ifm",urlParas:{chapter_id:t,chapter_command:r}});case 10:return a=i.sent,a.data.chapter_info.txt_content=e.decrypt(a.data.chapter_info.txt_content,r),e.chapter_info=a.data.chapter_info,console.log(e.chapter_info),1==e.chapter_info.auth_access?(e.auth=!0,e.setLastRead()):e.auth=!1,e.chapterAmount=e.chapter_info.unit_hlb,e.buyAmount=e.chapter_info.buy_amount,e.chapterTitle=e.chapter_info.chapter_title,o=e.chapter_info.txt_content,s=o.split("\n"),s.pop(),c=e.chapter_info.author_say,u=[e.chapterTitle].concat(h(s),h(c.split("\n"))),u=u.map((function(t){var e={};return e.text=t,e.tsukkomi_num=0,e})),i.next=26,e.getTsukkomiNum(t);case 26:l=i.sent,f=p(l);try{for(f.s();!(d=f.n()).done;)m=d.value,v=m["paragraph_index"],v<u.length&&(u[m["paragraph_index"]].tsukkomi_num=m.tsukkomi_num)}catch(k){f.e(k)}finally{f.f()}e.chapterContentData=u,e.loading=1,e.$nextTick((function(){e.windowSizeHandler(),e.containerScroll=new w["a"](e.$refs.book,{wheelSpeed:2,wheelPropagation:!0,minScrollbarLength:20})}));case 32:case"end":return i.stop()}}),i)})))()},decrypt:function(t,e){e=null==e?g.a.createHash("sha256").update("zG2nSeEfSHfvTCHy5LCcqtBbQehKNLXn").digest():g.a.createHash("sha256").update(e).digest();var i=g.a.createDecipheriv("aes-256-cbc",e,new Uint8Array(16));i.setAutoPadding(!1);var n=i.update(t,"base64","utf8");return n},getTsukkomiNum:function(t){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return"string"!==typeof t&&(t="".concat(t)),i.next=3,e.$get({url:"/chapter/get_tsukkomi_num",urlParas:{chapter_id:t}});case 3:return n=i.sent,i.abrupt("return",n.data.tsukkomi_num_info);case 5:case"end":return i.stop()}}),i)})))()},getTsukkomiList:function(t){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$get({url:"/chapter/get_paragraph_tsukkomi_list_new",urlParas:{chapter_id:e.cid,paragraph_index:t,count:20,page:e.tsukkomiPage-1}});case 2:n=i.sent,e.tsukkomi_list=n.data.tsukkomi_list,e.$nextTick((function(){e.tsukkomiScroll=new w["a"](e.$refs.tsukkomi,{wheelSpeed:1,wheelPropagation:!1,minScrollbarLength:20})}));case 5:case"end":return i.stop()}}),i)})))()},toChapterTop:function(){this.$refs.book.scrollTo(0,0)},toTsukkomiTop:function(){this.$refs.tsukkomi.scrollTo(0,0)},showTsu:function(t,e,i,n){var r=this;this.tsukkomiIndex=t,e&&(this.tsukkomi_num=parseInt(e)),this.tsukkomiPage=i||1,this.tsukkomiScroll&&this.tsukkomiScroll.destroy(),n||(this.tsukkomi_list=[],this.showTsukkomi=!0,this.toTsukkomiTop()),this.getTsukkomiList(t),this.$nextTick((function(){r.windowSizeHandler()}))},closeTsu:function(){var t=this;this.showTsukkomi=!1,this.toTsukkomiTop(),this.$nextTick((function(){t.windowSizeHandler()}))},nextChapter:function(){if(this.chapterIndex<this.book_chapters.length-1){this.showTsukkomi=!1,this.loading=0,this.toChapterTop(),this.toTsukkomiTop(),this.containerScroll.destroy(),this.tsukkomiScroll&&this.tsukkomiScroll.destroy(),this.chapterIndex++;var t=this.book_chapterids[this.chapterIndex];this.getContent(t),this.$router.replace({query:{bid:this.bid,cid:t}})}else this.$message.error("已经是最后一章了")},jumpChapter:function(t){this.showTsukkomi=!1,this.loading=0,this.toChapterTop(),this.toTsukkomiTop(),this.containerScroll.destroy(),this.getContent(t),this.$router.replace({query:{bid:this.bid,cid:t}})},changeTsukkomiPage:function(t){this.showTsu(this.tsukkomiIndex,null,t)},showCatalog:function(){this.$refs.catalog.showCatalog()},tsukkomiOperate:function(t,e){var i=this;return Object(k["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r="",r=t?"/chapter/unlike_tsukkomi":"/chapter/like_tsukkomi",n.next=4,i.$get({url:r,urlParas:{tsukkomi_id:e}});case 4:n.sent,i.refreshTsukkomi();case 6:case"end":return n.stop()}}),n)})))()},refreshTsukkomi:function(){this.showTsu(this.tsukkomiIndex,this.tsukkomi_num,this.tsukkomiPage,!0)},refreshPara:function(t){this.chapterContentData[t].tsukkomi_num++,this.tsukkomi_num++},newTsukkomi:function(){var t=this.chapterContentData[this.tsukkomiIndex].text;this.$refs.tsukkomiWriter.show(t,this.bid,this.cid,this.tsukkomiIndex)},showPic:function(t){this.$refs.picture.showPic(t)},buyChapter:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var i,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$get({url:"/chapter_buy",urlParas:{chapter_id:t.cid}});case 2:i=e.sent,n=i.data.prop_info,r=i.data.reader_info,t.$store.commit("setPropInfo",n),t.$store.commit("setReaderInfo",r),t.getContent(t.cid);case 8:case"end":return e.stop()}}),e)})))()},giveTickets:function(){this.$refs.tickets.show(this.bid)},setLastRead:function(){this.$get({url:"/bookshelf/set_last_read_chapter",urlParas:{book_id:this.bid,last_read_chapter_id:this.cid}})},noAccess:function(){this.$message.info("此功能尚未开放")},goBack:function(){this.$router.back()}}},et=tt,it=(i("a457"),Object(P["a"])(et,n,r,!1,null,"1ae9aba6",null));e["default"]=it.exports},"99af":function(t,e,i){"use strict";var n=i("23e7"),r=i("d039"),a=i("e8b5"),o=i("861d"),s=i("7b0b"),c=i("50c4"),u=i("8418"),l=i("65f0"),f=i("1dde"),d=i("b622"),h=i("2d00"),p=d("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",k=h>=51||!r((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),b=f("concat"),g=function(t){if(!o(t))return!1;var e=t[p];return void 0!==e?!!e:a(t)},_=!k||!b;n({target:"Array",proto:!0,forced:_},{concat:function(t){var e,i,n,r,a,o=s(this),f=l(o,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(a=-1===e?o:arguments[e],g(a)){if(r=c(a.length),d+r>m)throw TypeError(v);for(i=0;i<r;i++,d++)i in a&&u(f,d,a[i])}else{if(d>=m)throw TypeError(v);u(f,d++,a)}return f.length=d,f}})},"9b81":function(t,e,i){"use strict";var n=i("e460"),r=i.n(n);r.a},a457:function(t,e,i){"use strict";var n=i("7f14"),r=i.n(n);r.a},a4d3:function(t,e,i){"use strict";var n=i("23e7"),r=i("da84"),a=i("d066"),o=i("c430"),s=i("83ab"),c=i("4930"),u=i("fdbf"),l=i("d039"),f=i("5135"),d=i("e8b5"),h=i("861d"),p=i("825a"),m=i("7b0b"),v=i("fc6a"),k=i("c04e"),b=i("5c6c"),g=i("7c73"),_=i("df75"),w=i("241c"),y=i("057f"),C=i("7418"),x=i("06cf"),S=i("9bf2"),T=i("d1e7"),P=i("9112"),O=i("6eeb"),$=i("5692"),L=i("f772"),I=i("d012"),A=i("90e3"),j=i("b622"),E=i("e5383"),N=i("746f"),R=i("d44e"),D=i("69f3"),M=i("b727").forEach,z=L("hidden"),H="Symbol",F="prototype",V=j("toPrimitive"),B=D.set,G=D.getterFor(H),W=Object[F],q=r.Symbol,U=a("JSON","stringify"),J=x.f,X=S.f,Q=y.f,Y=T.f,K=$("symbols"),Z=$("op-symbols"),tt=$("string-to-symbol-registry"),et=$("symbol-to-string-registry"),it=$("wks"),nt=r.QObject,rt=!nt||!nt[F]||!nt[F].findChild,at=s&&l((function(){return 7!=g(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,e,i){var n=J(W,e);n&&delete W[e],X(t,e,i),n&&t!==W&&X(W,e,n)}:X,ot=function(t,e){var i=K[t]=g(q[F]);return B(i,{type:H,tag:t,description:e}),s||(i.description=e),i},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},ct=function(t,e,i){t===W&&ct(Z,e,i),p(t);var n=k(e,!0);return p(i),f(K,n)?(i.enumerable?(f(t,z)&&t[z][n]&&(t[z][n]=!1),i=g(i,{enumerable:b(0,!1)})):(f(t,z)||X(t,z,b(1,{})),t[z][n]=!0),at(t,n,i)):X(t,n,i)},ut=function(t,e){p(t);var i=v(e),n=_(i).concat(pt(i));return M(n,(function(e){s&&!ft.call(i,e)||ct(t,e,i[e])})),t},lt=function(t,e){return void 0===e?g(t):ut(g(t),e)},ft=function(t){var e=k(t,!0),i=Y.call(this,e);return!(this===W&&f(K,e)&&!f(Z,e))&&(!(i||!f(this,e)||!f(K,e)||f(this,z)&&this[z][e])||i)},dt=function(t,e){var i=v(t),n=k(e,!0);if(i!==W||!f(K,n)||f(Z,n)){var r=J(i,n);return!r||!f(K,n)||f(i,z)&&i[z][n]||(r.enumerable=!0),r}},ht=function(t){var e=Q(v(t)),i=[];return M(e,(function(t){f(K,t)||f(I,t)||i.push(t)})),i},pt=function(t){var e=t===W,i=Q(e?Z:v(t)),n=[];return M(i,(function(t){!f(K,t)||e&&!f(W,t)||n.push(K[t])})),n};if(c||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),i=function(t){this===W&&i.call(Z,t),f(this,z)&&f(this[z],e)&&(this[z][e]=!1),at(this,e,b(1,t))};return s&&rt&&at(W,e,{configurable:!0,set:i}),ot(e,t)},O(q[F],"toString",(function(){return G(this).tag})),O(q,"withoutSetter",(function(t){return ot(A(t),t)})),T.f=ft,S.f=ct,x.f=dt,w.f=y.f=ht,C.f=pt,E.f=function(t){return ot(j(t),t)},s&&(X(q[F],"description",{configurable:!0,get:function(){return G(this).description}}),o||O(W,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:q}),M(_(it),(function(t){N(t)})),n({target:H,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var i=q(e);return tt[e]=i,et[i]=e,i},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ht,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:l((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(m(t))}}),U){var mt=!c||l((function(){var t=q();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))}));n({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,i){var n,r=[t],a=1;while(arguments.length>a)r.push(arguments[a++]);if(n=e,(h(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),r[1]=e,U.apply(null,r)}})}q[F][V]||P(q[F],V,q[F].valueOf),R(q,H),I[z]=!0},a630:function(t,e,i){var n=i("23e7"),r=i("4df4"),a=i("1c7e"),o=!a((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:o},{from:r})},a9e3:function(t,e,i){"use strict";var n=i("83ab"),r=i("da84"),a=i("94ca"),o=i("6eeb"),s=i("5135"),c=i("c6b6"),u=i("7156"),l=i("c04e"),f=i("d039"),d=i("7c73"),h=i("241c").f,p=i("06cf").f,m=i("9bf2").f,v=i("58a8").trim,k="Number",b=r[k],g=b.prototype,_=c(d(g))==k,w=function(t){var e,i,n,r,a,o,s,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(i=u.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+u}for(a=u.slice(2),o=a.length,s=0;s<o;s++)if(c=a.charCodeAt(s),c<48||c>r)return NaN;return parseInt(a,n)}return+u};if(a(k,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var y,C=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof C&&(_?f((function(){g.valueOf.call(i)})):c(i)!=k)?u(new b(w(e)),i,C):w(e)},x=n?h(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;x.length>S;S++)s(b,y=x[S])&&!s(C,y)&&m(C,y,p(b,y));C.prototype=g,g.constructor=C,o(r,k,C)}},b0c0:function(t,e,i){var n=i("83ab"),r=i("9bf2").f,a=Function.prototype,o=a.toString,s=/^\s*function ([^ (]*)/,c="name";n&&!(c in a)&&r(a,c,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},b64b:function(t,e,i){var n=i("23e7"),r=i("7b0b"),a=i("df75"),o=i("d039"),s=o((function(){a(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(t){return a(r(t))}})},c8d2:function(t,e,i){var n=i("d039"),r=i("5899"),a="​᠎";t.exports=function(t){return n((function(){return!!r[t]()||a[t]()!=a||r[t].name!==t}))}},d28b:function(t,e,i){var n=i("746f");n("iterator")},d81d:function(t,e,i){"use strict";var n=i("23e7"),r=i("b727").map,a=i("1dde"),o=i("ae40"),s=a("map"),c=o("map");n({target:"Array",proto:!0,forced:!s||!c},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},dac3:function(t,e,i){},dbb4:function(t,e,i){var n=i("23e7"),r=i("83ab"),a=i("56ef"),o=i("fc6a"),s=i("06cf"),c=i("8418");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,i,n=o(t),r=s.f,u=a(n),l={},f=0;while(u.length>f)i=r(n,e=u[f++]),void 0!==i&&c(l,e,i);return l}})},ddb0:function(t,e,i){var n=i("da84"),r=i("fdbc"),a=i("e260"),o=i("9112"),s=i("b622"),c=s("iterator"),u=s("toStringTag"),l=a.values;for(var f in r){var d=n[f],h=d&&d.prototype;if(h){if(h[c]!==l)try{o(h,c,l)}catch(m){h[c]=l}if(h[u]||o(h,u,f),r[f])for(var p in a)if(h[p]!==a[p])try{o(h,p,a[p])}catch(m){h[p]=a[p]}}}},e01a:function(t,e,i){"use strict";var n=i("23e7"),r=i("83ab"),a=i("da84"),o=i("5135"),s=i("861d"),c=i("9bf2").f,u=i("e893"),l=a.Symbol;if(r&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(d,l);var h=d.prototype=l.prototype;h.constructor=d;var p=h.toString,m="Symbol(test)"==String(l("test")),v=/^Symbol\((.*)\)[^)]+$/;c(h,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(o(f,t))return"";var i=m?e.slice(7,-1):e.replace(v,"$1");return""===i?void 0:i}}),n({global:!0,forced:!0},{Symbol:d})}},e356:function(t,e,i){"use strict";var n=i("f1ba"),r=i.n(n);r.a},e362:function(t,e,i){"use strict";var n=i("3838"),r=i.n(n);r.a},e439:function(t,e,i){var n=i("23e7"),r=i("d039"),a=i("fc6a"),o=i("06cf").f,s=i("83ab"),c=r((function(){o(1)})),u=!s||c;n({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(a(t),e)}})},e460:function(t,e,i){},e5383:function(t,e,i){var n=i("b622");e.f=n},f1ba:function(t,e,i){},fb6a:function(t,e,i){"use strict";var n=i("23e7"),r=i("861d"),a=i("e8b5"),o=i("23cb"),s=i("50c4"),c=i("fc6a"),u=i("8418"),l=i("b622"),f=i("1dde"),d=i("ae40"),h=f("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),m=l("species"),v=[].slice,k=Math.max;n({target:"Array",proto:!0,forced:!h||!p},{slice:function(t,e){var i,n,l,f=c(this),d=s(f.length),h=o(t,d),p=o(void 0===e?d:e,d);if(a(f)&&(i=f.constructor,"function"!=typeof i||i!==Array&&!a(i.prototype)?r(i)&&(i=i[m],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return v.call(f,h,p);for(n=new(void 0===i?Array:i)(k(p-h,0)),l=0;h<p;h++,l++)h in f&&u(n,l,f[h]);return n.length=l,n}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},ff8e:function(t,e,i){"use strict";var n=i("4910"),r=i.n(n);r.a}}]);