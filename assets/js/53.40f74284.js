(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{355:function(t,a,_){"use strict";_.r(a);var v=_(0),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"项目一些思路"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#项目一些思路"}},[t._v("#")]),t._v(" 项目一些思路")]),t._v(" "),_("h3",{attrs:{id:"一-项目基本设置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一-项目基本设置"}},[t._v("#")]),t._v(" 一. 项目基本设置")]),t._v(" "),_("h4",{attrs:{id:"_1-1-目录结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-目录结构"}},[t._v("#")]),t._v(" 1.1. 目录结构")]),t._v(" "),_("ul",[_("li",[t._v("network")]),t._v(" "),_("li",[t._v("components -> common/content")]),t._v(" "),_("li",[t._v("pages -> 路由分层")]),t._v(" "),_("li",[t._v("common")]),t._v(" "),_("li",[t._v("assets")]),t._v(" "),_("li",[t._v("router")]),t._v(" "),_("li",[t._v("store")])]),t._v(" "),_("h4",{attrs:{id:"_1-2-设置css初始化和全局样式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-设置css初始化和全局样式"}},[t._v("#")]),t._v(" 1.2. 设置CSS初始化和全局样式")]),t._v(" "),_("ul",[_("li",[t._v("initialize.css")]),t._v(" "),_("li",[t._v("base.css")])]),t._v(" "),_("h4",{attrs:{id:"_1-3-tabbar的封装"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-tabbar的封装"}},[t._v("#")]),t._v(" 1.3. tabbar的封装")]),t._v(" "),_("ul",[_("li",[t._v("封装HYTabbar")]),t._v(" "),_("li",[t._v("封装HYTabbarItem")]),t._v(" "),_("li",[t._v("响应点击切换的设计")]),t._v(" "),_("li",[t._v("封装完成后，使用时对HYTabbar重新包装")])]),t._v(" "),_("h4",{attrs:{id:"_1-4-axios的封装"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-axios的封装"}},[t._v("#")]),t._v(" 1.4. axios的封装")]),t._v(" "),_("ul",[_("li",[t._v("创建axios实例")]),t._v(" "),_("li",[t._v("拦截响应，返回.data数据")]),t._v(" "),_("li",[t._v("根据传入的options发送请求，并且调用对应resolve和reject")])]),t._v(" "),_("h3",{attrs:{id:"二-首先开发"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二-首先开发"}},[t._v("#")]),t._v(" 二. 首先开发")]),t._v(" "),_("h4",{attrs:{id:"_2-1-navbar的封装和使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-navbar的封装和使用"}},[t._v("#")]),t._v(" 2.1. navbar的封装和使用")]),t._v(" "),_("ul",[_("li",[t._v("封装navbar包含三个插槽：left、center、right")]),t._v(" "),_("li",[t._v("设置navbar相关的样式")]),t._v(" "),_("li",[t._v("使用navbar实现首页的导航栏")])]),t._v(" "),_("h4",{attrs:{id:"_2-2-请求首页数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-请求首页数据"}},[t._v("#")]),t._v(" 2.2. 请求首页数据")]),t._v(" "),_("ul",[_("li",[t._v("封装请求首页更多数据")]),t._v(" "),_("li",[t._v("将banner数据放在banners变量中")]),t._v(" "),_("li",[t._v("将recommend数据放在recommends变量中")])]),t._v(" "),_("h4",{attrs:{id:"_2-3-根据swiper封装homeswiper"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-根据swiper封装homeswiper"}},[t._v("#")]),t._v(" 2.3. 根据Swiper封装HomeSwiper")]),t._v(" "),_("ul",[_("li",[t._v("使用Swiper和SwiperItem")]),t._v(" "),_("li",[t._v("传入banners进行展示")])]),t._v(" "),_("h4",{attrs:{id:"_2-4-封装featureview"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-封装featureview"}},[t._v("#")]),t._v(" 2.4. 封装FeatureView")]),t._v(" "),_("ul",[_("li",[t._v("传入recommends数据，进行展示")])]),t._v(" "),_("h4",{attrs:{id:"_2-5-封装recommendview"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-封装recommendview"}},[t._v("#")]),t._v(" 2.5. 封装RecommendView")]),t._v(" "),_("ul",[_("li",[t._v("展示一张图片即可")])]),t._v(" "),_("h4",{attrs:{id:"_2-6-封装tabcontrol"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-封装tabcontrol"}},[t._v("#")]),t._v(" 2.6. 封装tabControl")]),t._v(" "),_("ul",[_("li",[t._v("基本结构的封装")]),t._v(" "),_("li",[t._v("监听点击")])]),t._v(" "),_("h4",{attrs:{id:"_2-7-请求和保存商品数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-请求和保存商品数据"}},[t._v("#")]),t._v(" 2.7. 请求和保存商品数据")]),t._v(" "),_("ul",[_("li",[t._v("定义goodsList变量，用于存储请求到的商品数据")]),t._v(" "),_("li",[t._v("根据type和page请求商品数据")]),t._v(" "),_("li",[t._v("将商品数据保存起来")])]),t._v(" "),_("h4",{attrs:{id:"_2-8-封装goodslist和goodslistitem"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-封装goodslist和goodslistitem"}},[t._v("#")]),t._v(" 2.8. 封装GoodsList和GoodsListItem")]),t._v(" "),_("ul",[_("li",[t._v("展示商品列表，封装GoodsList")]),t._v(" "),_("li",[t._v("列表中每一个商品，封装GoodsListItem")]),t._v(" "),_("li",[t._v("注意CSS属性的设置即可")])]),t._v(" "),_("h4",{attrs:{id:"_2-9-滚动的封装scroll"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-滚动的封装scroll"}},[t._v("#")]),t._v(" 2.9. 滚动的封装Scroll")]),t._v(" "),_("ul",[_("li",[t._v("学习BetterScroll的使用")]),t._v(" "),_("li",[t._v("安装better-scroll")]),t._v(" "),_("li",[t._v("封装一个独立的组件，用于作为滚动组件：Scroll")]),t._v(" "),_("li",[t._v("组件内代码的封装：\n"),_("ul",[_("li",[t._v("1.创建BetterScroll对象，并且传入DOM和选项（probeType、click、pullUpLoad）")]),t._v(" "),_("li",[t._v("2.监听scroll事件，该事件会返回一个position")]),t._v(" "),_("li",[t._v("3.监听pullingUp事件，监听到该事件进行上拉加载更多")]),t._v(" "),_("li",[t._v("4.封装刷新的方法：this.scroll.refresh()")]),t._v(" "),_("li",[t._v("5.封装滚动的方法：this.scroll.scrollTo(x, y, time)")]),t._v(" "),_("li",[t._v("6.封装完成刷新的方法：this.scroll.finishedPullUp")])])])]),t._v(" "),_("h4",{attrs:{id:"_2-10-上拉加载更多"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-10-上拉加载更多"}},[t._v("#")]),t._v(" 2.10. 上拉加载更多")]),t._v(" "),_("ul",[_("li",[t._v("通过Scroll监听上拉加载更多。")]),t._v(" "),_("li",[t._v("在Home中加载更多的数据。")]),t._v(" "),_("li",[t._v("请求数据完成后，调动finishedPullUp")])]),t._v(" "),_("h4",{attrs:{id:"_2-11-返回顶部"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-11-返回顶部"}},[t._v("#")]),t._v(" 2.11. 返回顶部")]),t._v(" "),_("ul",[_("li",[t._v("封装BackTop组件")]),t._v(" "),_("li",[t._v("定义一个常量，用于决定在什么数值下显示BackTop组件")]),t._v(" "),_("li",[t._v("监听滚动，决定BackTop的显示和隐藏")]),t._v(" "),_("li",[t._v("监听BackTop的点击，点击时，调用scrollTo返回顶部")])]),t._v(" "),_("h4",{attrs:{id:"_2-12-tabcontrol的停留"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-12-tabcontrol的停留"}},[t._v("#")]),t._v(" 2.12. tabControl的停留")]),t._v(" "),_("ul",[_("li",[t._v("重新添加一个tabControl组件（需要设置定位，否则会被盖住）")]),t._v(" "),_("li",[t._v("在updated钩子中获取tabControl的offsetTop")]),t._v(" "),_("li",[t._v("判断是否滚动超过了offsetTop来决定是否显示新添加的tabControl")])])])}),[],!1,null,null,null);a.default=r.exports}}]);