webpackJsonp([3],{544:function(t,i,s){function e(t){s(582)}var a=s(8)(s(561),s(594),e,"data-v-0e19afca",null);t.exports=a.exports},551:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s(54),a=s.n(e),n=s(63),o=s.n(n),r=s(187),l=s.n(r),c=s(122),d=s(186),g=s.n(d),p=s(45),f=s(81),u=s.i(c.a)("transform"),m=s.i(c.a)("backdrop-filter");i.default={mixins:[f.c],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},computed:{bgStyle:function(){return"background-image: url("+this.bgImage+")"}},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTranslateY=40-this.imageHeight,this.$refs.list.$el.style.top=this.$refs.bgImage.clientHeight+"px"},created:function(){this.probeType=3,this.listenScroll=!0},components:{Scroll:o.a,SongsList:l.a,Loading:g.a},methods:a()({handlePlayList:function(t){var i=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=i,this.$refs.list.refresh()},random:function(){this.randomPlay({list:this.songs})},back:function(){this.$router.back()},scroll:function(t){this.scrollY=t.y},selectItem:function(t,i){this.selectPlay({list:this.songs,index:i})}},s.i(p.c)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var i=Math.max(this.minTranslateY,t),s=0,e=1,a=0;this.$refs.layer.style[u]="translate3d(0, "+i+"px, 0)";var n=Math.abs(t/this.imageHeight);t>0?(e=1+n,a=1-n,s=10):a=Math.min(20*n,20),this.$refs.filter.style[m]="blur("+a+"px)",t<this.minTranslateY?(s=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style.zIndex=s,this.$refs.bgImage.style[u]="scale("+e+")"}}}},552:function(t,i,s){i=t.exports=s(542)(!1),i.push([t.i,".music-list[data-v-2442a40a]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.music-list .back[data-v-2442a40a]{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back[data-v-2442a40a]{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title[data-v-2442a40a]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image[data-v-2442a40a]{position:relative;width:100%;height:0;padding-top:70%;-webkit-transform-origin:top;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-2442a40a]{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-2442a40a]{box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play[data-v-2442a40a]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text[data-v-2442a40a]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-2442a40a]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-2442a40a]{position:relative;height:100%;background:#222}.music-list .list[data-v-2442a40a]{position:fixed;top:0;bottom:0;width:100%;background:#222}.music-list .list .song-list-wrapper[data-v-2442a40a]{padding:20px 30px}.music-list .list .loading-container[data-v-2442a40a]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}",""])},553:function(t,i,s){var e=s(552);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(543)("1e8d1f1c",e,!0)},554:function(t,i,s){function e(t){s(553)}var a=s(8)(s(551),s(555),e,"data-v-2442a40a",null);t.exports=a.exports},555:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"music-list"},[s("div",{staticClass:"back",on:{click:t.back}},[s("i",{staticClass:"icon-back"})]),t._v(" "),s("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),s("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[s("div",{staticClass:"play-wrapper"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length,expression:"songs.length"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[s("i",{staticClass:"icon-play"}),t._v(" "),s("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),s("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),s("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),s("scroll",{ref:"list",staticClass:"list",attrs:{"probe-type":t.probeType,"listen-scroll":t.listenScroll,data:t.songs},on:{scroll:t.scroll}},[s("div",{staticClass:"song-list-wrapper"},[s("songs-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[s("loading")],1)])],1)},staticRenderFns:[]}},557:function(t,i,s){"use strict";function e(){var t=c()({},g.b,{platform:"h5",uin:0,needNewCode:1});return s.i(d.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,g.c)}function a(){var t=c()({},g.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return f.a.get("/api/getDiscList",{params:t}).then(function(t){return r.a.resolve(t.data)})}function n(t){var i=c()({},g.b,{disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0});return s.i(d.a)("https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg",i,g.c)}i.b=e,i.c=a,i.a=n;var o=s(83),r=s.n(o),l=s(82),c=s.n(l),d=s(185),g=s(62),p=s(188),f=s.n(p)},561:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s(54),a=s.n(e),n=s(554),o=s.n(n),r=s(45),l=s(557),c=s(123),d=s(62);i.default={data:function(){return{songs:[]}},computed:a()({title:function(){return this.disc.dissname},bgImage:function(){return this.disc.imgurl}},s.i(r.a)(["disc"])),components:{MusicList:o.a},created:function(){this._getSongList()},methods:{_getSongList:function(){var t=this;if(!this.disc.dissid)return void this.$router.push("/recommend");s.i(l.a)(this.disc.dissid).then(function(i){i.code===d.a&&(t.songs=t._normalizeSongs(i.cdlist[0].songlist))})},_normalizeSongs:function(t){var i=[];return t.forEach(function(t){var e=t;e.songid&&e.albumid&&i.push(s.i(c.b)(e))}),i}}}},572:function(t,i,s){i=t.exports=s(542)(!1),i.push([t.i,".slide-enter-active[data-v-0e19afca],.slide-leave-active[data-v-0e19afca]{transition:all .3s}.slide-enter[data-v-0e19afca],.slide-leave-to[data-v-0e19afca]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}",""])},582:function(t,i,s){var e=s(572);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(543)("0f6e9d71",e,!0)},594:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition",{attrs:{name:"slide"}},[s("music-list",{attrs:{title:t.title,"bg-image":t.bgImage,songs:t.songs}})],1)},staticRenderFns:[]}}});