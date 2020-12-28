(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{339:function(e,a,r){"use strict";r.r(a);var t=r(0),i=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"shiro框架中有三个核心概念-subject-securitymanager和realms。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shiro框架中有三个核心概念-subject-securitymanager和realms。"}},[e._v("#")]),e._v(" Shiro框架中有三个核心概念：Subject ，SecurityManager和Realms。")]),e._v(" "),r("h3",{attrs:{id:"_1-subject"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-subject"}},[e._v("#")]),e._v(" 1    Subject")]),e._v(" "),r("p",[e._v("Subject一词是一个安全术语，其基本意思是“当前的操作用户”。称之为“用户”并不准确，因为“用户”一词通常跟人相关。在安全领域，术语“Subject”可以是人，也可以是第三方进程、后台帐户（Daemon Account）、定时作业（Corn Job）或其他类似事物。它仅仅意味着“当前跟软件交互的东西”。但考虑到大多数目的和用途，你可以把它认为是Shiro的“用户”概念。\n在程序中你都能轻易的获得Subject，允许在任何需要的地方进行安全操作。每个Subject对象都必须与一个SecurityManager进行绑定，你访问Subject对象其实都是在与SecurityManager里的特定Subject进行交互。")]),e._v(" "),r("h3",{attrs:{id:"_2-securitymanager"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-securitymanager"}},[e._v("#")]),e._v(" 2    SecurityManager")]),e._v(" "),r("p",[e._v("Subject的“幕后”推手是SecurityManager。Subject代表了当前用户的安全操作，SecurityManager则管理所有用户的安全操作。它是Shiro框架的核心，充当“保护伞”，引用了多个内部嵌套安全组件，它们形成了对象图。但是，一旦SecurityManager及其内部对象图配置好，它就会退居幕后，应用开发人员几乎把他们的所有时间都花在Subject API调用上。\n那么，如何设置SecurityManager呢？嗯，这要看应用的环境。例如，Web应用通常会在Web.xml中指定一个Shiro Servlet Filter，这会创建SecurityManager实例，如果你运行的是一个独立应用，你需要用其他配置方式，但有很多配置选项。\n一个应用几乎总是只有一个SecurityManager实例。它实际是应用的Singleton（尽管不必是一个静态Singleton）。跟Shiro里的几乎所有组件一样，SecurityManager的缺省实现是POJO，而且可用POJO兼容的任何配置机制进行配置 - 普通的Java代码、Spring XML、YAML、.properties和.ini文件等。基本来讲，能够实例化类和调用JavaBean兼容方法的任何配置形式都可使用。")]),e._v(" "),r("h3",{attrs:{id:"_3-realms"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-realms"}},[e._v("#")]),e._v(" 3    Realms")]),e._v(" "),r("p",[e._v("Shiro的第三个也是最后一个概念是Realm。Realm充当了Shiro与应用安全数据间的“桥梁”或者“连接器”。也就是说，当与像用户帐户这类安全相关数据进行交互，执行认证（登录）和授权（访问控制）时，Shiro会从应用配置的Realm中查找很多内容。\n从这个意义上讲，Realm实质上是一个安全相关的DAO：它封装了数据源的连接细节，并在需要时将相关数据提供给Shiro。当配置Shiro时，你必须至少指定一个Realm，用于认证和（或）授权。配置多个Realm是可以的，但是至少需要一个。\nShiro内置了可以连接大量安全数据源（又名目录）的Realm，如LDAP、关系数据库（JDBC）、类似INI的文本配置资源以及属性文件 等。如果缺省的Realm不能满足需求，你还可以插入代表自定义数据源的自己的Realm实现。\n象其他内部组件一样，由SecurityManager来管理如何使用Realms来获取安全的身份数据。")])])}),[],!1,null,null,null);a.default=i.exports}}]);