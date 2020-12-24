(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{372:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_1-vue-js是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue-js是什么"}},[t._v("#")]),t._v(" 1. Vue.js是什么?")]),t._v(" "),s("div",{staticClass:"language-tex line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-tex"}},[s("code",[t._v("1). 一位华裔前Google工程师(尤雨溪)开发的前端js库\n2). 作用: 动态构建用户界面\n3). 特点:\n\t* 遵循MVVM模式\n\t* 编码简洁, 体积小, 运行效率高, 移动/PC端开发\n\t* 它本身只关注UI, 可以轻松引入vue插件和其它第三库开发项目\n4). 与其它框架的关联:\n\t* 借鉴angular的模板和数据绑定技术\n\t* 借鉴react的组件化和虚拟DOM技术\n5). vue包含一系列的扩展插件(库):\n\t* vue-cli: vue脚手架\n\t* vue-resource(axios): ajax请求\n\t* vue-router: 路由\n\t* vuex: 状态管理\n\t* vue-lazyload: 图片懒加载\n\t* vue-scroller: 页面滑动相关\n\t* mint-ui: 基于vue的组件库(移动端)\n\t* element-ui: 基于vue的组件库(PC端)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("h1",{attrs:{id:"_2-基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-基本使用"}},[t._v("#")]),t._v(" 2. 基本使用")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("1). 引入vue.js\n2). 创建Vue实例对象(vm), 指定选项(配置)对象\n\tel : 指定dom标签容器的选择器\n\tdata : 指定初始化状态数据的对象/函数(返回一个对象)\n3). 在页面模板中使用{{}}或vue指令\n")])])]),s("h1",{attrs:{id:"_3-vue对象的选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-vue对象的选项"}},[t._v("#")]),t._v(" 3. Vue对象的选项")]),t._v(" "),s("h2",{attrs:{id:"_1-el"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-el"}},[t._v("#")]),t._v(" 1). el")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("指定dom标签容器的选择器\nVue就会管理对应的标签及其子标签\n")])])]),s("h2",{attrs:{id:"_2-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-data"}},[t._v("#")]),t._v(" 2). data")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("对象或函数类型\n指定初始化状态属性数据的对象\nvm也会自动拥有data中所有属性\n页面中可以直接访问使用\n数据代理: 由vm对象来代理对data中所有属性的操作(读/写)\n")])])]),s("h2",{attrs:{id:"_3-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-methods"}},[t._v("#")]),t._v(" 3). methods")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("包含多个方法的对象\n供页面中的事件指令来绑定回调\n回调函数默认有event参数, 但也可以指定自己的参数\n所有的方法由vue对象来调用, 访问data中的属性直接使用this.xxx\n")])])]),s("h2",{attrs:{id:"_4-computed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-computed"}},[t._v("#")]),t._v(" 4). computed")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("包含多个方法的对象\n对状态属性进行计算返回一个新的数据, 供页面获取显示\n一般情况下是相当于是一个只读的属性\n利用set/get方法来实现属性数据的计算读取, 同时监视属性数据的变化\n如何给对象定义get/set属性\n\t在创建对象时指定: get name () {return xxx} / set name (value) {}\n  \t对象创建之后指定: Object.defineProperty(obj, age, {get(){}, set(value){}})\n")])])]),s("h2",{attrs:{id:"_5-watch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-watch"}},[t._v("#")]),t._v(" 5). watch")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("包含多个属性监视的对象\n分为一般监视和深度监视\n    xxx: function(value){}\n\txxx : {\n\t\tdeep : true,\n\t\thandler : fun(value)\n\t}\n另一种添加监视方式: vm.$watch('xxx', function(value){})\n")])])]),s("h1",{attrs:{id:"_4-过渡动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-过渡动画"}},[t._v("#")]),t._v(" 4. 过渡动画")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("利用vue去操控css的transition/animation动画\n模板: 使用"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("包含带动画的标签\ncss样式\n\t.fade-enter-active: 进入过程, 指定进入的transition\n\t.fade-leave-active: 离开过程, 指定离开的transition\n\t.xxx-enter, .xxx-leave-to: 指定隐藏的样式\n编码例子\n    .xxx-enter-active, .xxx-leave-active {\n      transition: opacity .5s\n    }\n    .xxx-enter, .xxx-leave-to {\n      opacity: 0\n    }\n    \n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("show"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])]),s("h1",{attrs:{id:"_5-生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-生命周期"}},[t._v("#")]),t._v(" 5. 生命周期")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("vm/组件对象\n生命周期图\n主要的生命周期函数(钩子)\n\tcreated() / mounted(): 启动异步任务(启动定时器,发送ajax请求, 绑定监听)\n\tbeforeDestroy(): 做一些收尾的工作\n")])])]),s("h1",{attrs:{id:"_6-自定义过滤器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-自定义过滤器"}},[t._v("#")]),t._v(" 6. 自定义过滤器")]),t._v(" "),s("h2",{attrs:{id:"_1-理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-理解"}},[t._v("#")]),t._v(" 1). 理解")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("对需要显示的数据进行格式化后再显示\n")])])]),s("h2",{attrs:{id:"_2-编码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-编码"}},[t._v("#")]),t._v(" 2). 编码")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("1). 定义过滤器\n\tVue.filter(filterName, function(value[,arg1,arg2,...]){\n\t  // 进行一定的数据处理\n\t  return newValue\n\t})\n2). 使用过滤器\n\t<div>"+t._s(t._f("filterName")(t.myData))+"</div>\n\t<div>"+t._s(t._f("filterName")(t.myData,t.arg))+"</div>\n")])])]),s("h1",{attrs:{id:"_7-vue内置指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-vue内置指令"}},[t._v("#")]),t._v(" 7. vue内置指令")]),t._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("v-text/v-html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 指定标签体\n\t* v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 当作纯文本\n\t* v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("html")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 将value作为html标签来解析\nv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("if v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("else v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 显示/隐藏元素\n\t* v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 如果vlaue为true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 当前标签会输出在页面中\n\t* v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 与v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("if一起使用"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 如果value为false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 将当前标签输出到页面中\n\t* v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 就会在标签中添加display样式"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 如果vlaue为true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" display=block"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 否则是none\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("v-for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 遍历\n\t* 遍历数组 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v('for="(person'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(' index) in persons"   \n\t* 遍历对象 '),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v('for="value in person"   $key\n'),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("v-on")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 绑定事件监听\n\t* v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("事件名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("可以缩写为")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" @事件名\n\t* 监视具体的按键"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" @keyup.keyCode   @keyup.enter\n\t* 停止事件的冒泡和阻止事件默认行为"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" @click.stop   @click.prevent\n\t* 隐含对象"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $event\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("v-bind")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 强制绑定解析表达式  \n\t* html标签属性是不支持表达式的"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 就可以使用v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("bind\n\t* 可以缩写为"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("id='name'\n\t* "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("class\n\t  * "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v('class="a"\n\t\t* '),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v('class="'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("classA")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" isA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("classB")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" isB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v('"\n\t\t* '),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v('class="'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("classA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" classB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v('"\n\t* '),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("style\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v('style="'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("color")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v('"\nv'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("model\n\t* 双向数据绑定\n\t* 自动收集用户输入数据\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ref")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 标识某个标签\n\t* ref='xxx'\n\t* 读取得到标签对象"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" this.$refs.xxx\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br")])]),s("h1",{attrs:{id:"_8-自定义指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-自定义指令"}},[t._v("#")]),t._v(" 8. 自定义指令")]),t._v(" "),s("h2",{attrs:{id:"_1-注册全局指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-注册全局指令"}},[t._v("#")]),t._v(" 1). 注册全局指令")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("directive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-directive'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" binding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" binding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toUpperCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"_2-注册局部指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-注册局部指令"}},[t._v("#")]),t._v(" 2). 注册局部指令")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("directives "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-directive'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" binding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" binding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toUpperCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"_3-使用指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用指令"}},[t._v("#")]),t._v(" 3). 使用指令")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-my-directive")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);