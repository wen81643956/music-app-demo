webpackJsonp([1],{116:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return r});var i={g_tk:5381,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},s={param:"jsonpCallback"},r=0},161:function(t,e,n){"use strict";var i=n(110),s=n(446),r=n(433),a=n.n(r),o=n(435),c=n.n(o),u=n(432),l=n.n(u),d=n(434),f=n.n(d);i.a.use(s.a),e.a=new s.a({routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",component:a.a},{path:"/singer",component:c.a},{path:"/rank",component:l.a},{path:"/search",component:f.a}]})},163:function(t,e){},165:function(t,e,n){function i(t){n(420)}var s=n(31)(n(188),n(441),i,"data-v-6f25ebe8",null);t.exports=s.exports},184:function(t,e,n){"use strict";function i(){var t=c()({},l.b,{platform:"h5",uin:0,needNewCode:1});return n.i(u.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,l.c)}function s(){var t=c()({},l.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return f.a.get("/api/getDiscList",{params:t}).then(function(t){return a.a.resolve(t.data)})}e.a=i,e.b=s;var r=n(117),a=n.n(r),o=n(197),c=n.n(o),u=n(186),l=n(116),d=n(166),f=n.n(d)},185:function(t,e,n){"use strict";function i(t,e){if(!s(t,e)){var n=t.className.split(" ");n.push(e),t.className=n.join(" ")}}function s(t,e){return new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)}e.a=i},186:function(t,e,n){"use strict";function i(t){var e="";for(var n in t){var i=void 0!==t[n]?t[n]:"";e+="&"+n+"="+encodeURIComponent(i)}return e?e.substring(1):""}var s=n(117),r=n.n(s),a=n(426),o=n.n(a);e.a=function(t,e,n){return t+=(t.indexOf("?")<0?"?":"&")+i(e),new r.a(function(e,i){o()(t,n,function(t,n){t?i(t):e(n)})})}},187:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(162),s=(n.n(i),n(110)),r=n(165),a=n.n(r),o=n(161),c=n(164),u=n.n(c),l=n(163);n.n(l);s.a.config.productionTip=!1,u.a.attach(document.body),new s.a({el:"#app",router:o.a,render:function(t){return t(a.a)}})},188:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(431),s=n.n(i),r=n(436),a=n.n(r);e.default={components:{MHeader:s.a,Tab:a.a}}},189:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(118),s=n.n(i);e.default={props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,default:null}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},methods:{_initScroll:function(){this.$refs.wrapper&&(this.scroll=new s.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click}))},enable:function(){this.scroll&&this.scroll.enable()},disable:function(){this.scroll&&this.scroll.disable()},refresh:function(){this.scroll&&this.scroll.refresh()}},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},20)}}}},190:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(118),s=n.n(i),r=n(185);e.default={data:function(){return{dots:[],currentPageIndex:0}},props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},mounted:function(){var t=this;setTimeout(function(){t._setSliderWidth(),t._initDots(),t._initSilder(),t.autoPlay&&t._play()},20),window.addEventListener("resize",this._resizeWindow)},methods:{_resizeWindow:function(){this.slider&&this._setSliderWidth(!0)},_setSliderWidth:function(t){this.children=this.$refs.sliderGroup.children;for(var e=0,i=this.$refs.slider.clientWidth,s=0;s<this.children.length;s++){var a=this.children[s];n.i(r.a)(a,"slider-item"),a.style.width=i+"px",e+=i}this.loop&&!t&&(e+=2*i),this.$refs.sliderGroup.style.width=e+"px"},_initSilder:function(){var t=this;this.slider=new s.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:.3,snapSpeed:400}),this.slider.on("scrollEnd",function(){var e=t.slider.getCurrentPage().pageX;t.loop&&(e-=1),t.currentPageIndex=e,t.autoPlay&&(clearTimeout(t.timer),t._play())})},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var t=this,e=this.currentPageIndex+1;this.loop&&(e+=1),this.timer=setTimeout(function(){t.slider.goToPage(e,0,400)},this.interval)}},destory:function(){window.removeEventListener("resize",this._resizeWindow),clearTimeout(this.timer)}}},191:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},192:function(t,e){},193:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(429),s=n.n(i),r=n(430),a=n.n(r),o=n(184),c=n(116);e.default={data:function(){return{recommends:[],discList:[]}},created:function(){var t=this;this._getRecommond(),setTimeout(function(){t._getDiscList()},20)},components:{Slider:a.a,Scroll:s.a},methods:{_getRecommond:function(){var t=this;n.i(o.a)().then(function(e){e.code===c.a&&(t.recommends=e.data.slider)})},_getDiscList:function(){var t=this;n.i(o.b)().then(function(e){e.code===c.a&&(t.discList=e.data.list)})}}}},194:function(t,e){},195:function(t,e){},196:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},416:function(t,e){},417:function(t,e){},418:function(t,e){},419:function(t,e){},420:function(t,e){},421:function(t,e){},422:function(t,e){},423:function(t,e){},424:function(t,e){},429:function(t,e,n){function i(t){n(422)}var s=n(31)(n(189),n(443),i,"data-v-8f74cd54",null);t.exports=s.exports},430:function(t,e,n){function i(t){n(423)}var s=n(31)(n(190),n(444),i,"data-v-a08fca54",null);t.exports=s.exports},431:function(t,e,n){function i(t){n(418)}var s=n(31)(n(191),n(439),i,"data-v-4ac92a1b",null);t.exports=s.exports},432:function(t,e,n){function i(t){n(421)}var s=n(31)(n(192),n(442),i,"data-v-7f6b7e7b",null);t.exports=s.exports},433:function(t,e,n){function i(t){n(416)}var s=n(31)(n(193),n(437),i,"data-v-22ddc116",null);t.exports=s.exports},434:function(t,e,n){function i(t){n(419)}var s=n(31)(n(194),n(440),i,"data-v-58c28c3b",null);t.exports=s.exports},435:function(t,e,n){function i(t){n(417)}var s=n(31)(n(195),n(438),i,"data-v-3a3055bb",null);t.exports=s.exports},436:function(t,e,n){function i(t){n(424)}var s=n(31)(n(196),n(445),i,"data-v-f8d23932",null);t.exports=s.exports},437:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},[n("scroll",{staticClass:"recommend-content",attrs:{data:t.discList}},[n("div",[t.recommends.length?n("div",{staticClass:"slider-wrapper"},[n("slider",t._l(t.recommends,function(t){return n("div",[n("a",{attrs:{href:t.linkUrl}},[n("img",{attrs:{src:t.picUrl}})])])}))],1):t._e(),t._v(" "),n("div",{staticClass:"recommend-list"},[n("h1",{staticClass:"list-title"},[t._v("热门歌单推荐")]),t._v(" "),n("ul",t._l(t.discList,function(e){return n("li",{staticClass:"item"},[n("div",{staticClass:"icon"},[n("img",{attrs:{width:"68",height:"68",src:e.imgurl}})]),t._v(" "),n("div",{staticClass:"text"},[n("h2",{staticClass:"name",domProps:{innerHTML:t._s(e.creator.name)}}),t._v(" "),n("p",{staticClass:"desc",domProps:{innerHTML:t._s(e.dissname)}})])])}))])])])],1)},staticRenderFns:[]}},438:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  歌手页面\n")])},staticRenderFns:[]}},439:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-header"},[n("div",{staticClass:"icon"}),t._v(" "),n("h1",{staticClass:"text"},[t._v("Chicken Music")])])}]}},440:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  搜索页面\n")])},staticRenderFns:[]}},441:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("m-header"),t._v(" "),n("tab"),t._v(" "),n("keep-alive",[n("router-view")],1)],1)},staticRenderFns:[]}},442:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  排行页面\n")])},staticRenderFns:[]}},443:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"wrapper"},[t._t("default")],2)},staticRenderFns:[]}},444:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"slider",staticClass:"slider"},[n("div",{ref:"sliderGroup",staticClass:"slider-group"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"dots"},t._l(t.dots,function(e,i){return n("span",{staticClass:"dot",class:{active:t.currentPageIndex===i}})}))])},staticRenderFns:[]}},445:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab"},[n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/recommend"}},[n("span",{staticClass:"tab-link"},[t._v("推荐")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/singer"}},[n("span",{staticClass:"tab-link"},[t._v("歌手")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/rank"}},[n("span",{staticClass:"tab-link"},[t._v("排行\n    ")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/search"}},[n("span",{staticClass:"tab-link"},[t._v("搜索")])])],1)},staticRenderFns:[]}}},[187]);