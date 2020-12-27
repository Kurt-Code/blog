(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{329:function(s,a,e){"use strict";e.r(a);var t=e(0),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_1-用户组操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-用户组操作"}},[s._v("#")]),s._v(" 1 用户组操作")]),s._v(" "),e("p",[s._v("创建"),e("code",[s._v("admin")]),s._v("用户组，指定组编号，命令如下：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" -g "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" admin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200623220944164.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("blockquote",[e("p",[s._v("其他用户组相关命令：")]),s._v(" "),e("ul",[e("li",[s._v("删除xxx用户组："),e("code",[s._v("groupdel xxx")])]),s._v(" "),e("li",[s._v("修改用户组groupb名称为groupa："),e("code",[s._v("groupmod -n groupa groupb")])])])]),s._v(" "),e("h1",{attrs:{id:"_2-用户操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-用户操作"}},[s._v("#")]),s._v(" 2 用户操作")]),s._v(" "),e("h2",{attrs:{id:"_2-1-创建用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-创建用户"}},[s._v("#")]),s._v(" 2.1 创建用户")]),s._v(" "),e("p",[s._v("创建"),e("code",[s._v("crane")]),s._v("用户，并归属到"),e("code",[s._v("admin")]),s._v("用户组中")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -g admin crane\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020062322143654.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("h2",{attrs:{id:"_2-2-修改用户密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-修改用户密码"}},[s._v("#")]),s._v(" 2.2 修改用户密码")]),s._v(" "),e("p",[s._v("修改用户"),e("code",[s._v("crane")]),s._v("的密码")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" crane\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200623221658719.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("h2",{attrs:{id:"_2-3-用户权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-用户权限"}},[s._v("#")]),s._v(" 2.3 用户权限")]),s._v(" "),e("p",[s._v("为用户"),e("code",[s._v("crane")]),s._v("添加"),e("code",[s._v("sudo")]),s._v("权限：\n使用"),e("code",[s._v("root")]),s._v("用户执行"),e("code",[s._v("visudo")]),s._v("命令，编辑文件，添加一行"),e("code",[s._v("crane")]),s._v("相关的信息，如下图")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("visudo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200623222751147.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("h2",{attrs:{id:"_2-4-切换用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-切换用户"}},[s._v("#")]),s._v(" 2.4 切换用户")]),s._v(" "),e("p",[s._v("切换用户到"),e("code",[s._v("crane")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" crane\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200623221911376.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("h2",{attrs:{id:"用户更改-usermod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户更改-usermod"}},[s._v("#")]),s._v(" 用户更改 usermod")]),s._v(" "),e("h3",{attrs:{id:"语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("usermod [-LU][-c <备注>][-d <登入目录>][-e <有效期限>][-f <缓冲天数>][-g <群组>][-G <群组>][-l <帐号名称>][-s <shell>][-u <uid>][用户帐号]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("参数说明")]),s._v("：")]),s._v(" "),e("ul",[e("li",[s._v("-c<备注> 　修改用户帐号的备注文字。")]),s._v(" "),e("li",[s._v("-d登入目录> 　修改用户登入时的目录。")]),s._v(" "),e("li",[s._v("-e<有效期限> 　修改帐号的有效期限。")]),s._v(" "),e("li",[s._v("-f<缓冲天数> 　修改在密码过期后多少天即关闭该帐号。")]),s._v(" "),e("li",[s._v("-g<群组> 　修改用户所属的群组。")]),s._v(" "),e("li",[s._v("-G<群组> 　修改用户所属的附加群组。")]),s._v(" "),e("li",[s._v("-l<帐号名称> 　修改用户帐号名称。")]),s._v(" "),e("li",[s._v("-L 　锁定用户密码，使密码无效。")]),s._v(" "),e("li",[s._v("-s"),e("shell",[s._v(" 　修改用户登入后所使用的shell。")])],1),s._v(" "),e("li",[s._v("-u"),e("uid",[s._v(" 　修改用户ID。")])],1),s._v(" "),e("li",[s._v("-U 　解除密码锁定。")])]),s._v(" "),e("h3",{attrs:{id:"实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),e("p",[s._v("更改登录目录")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# usermod -d /home/hnlinux root\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("改变用户的uid")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# usermod -u 777 root\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);