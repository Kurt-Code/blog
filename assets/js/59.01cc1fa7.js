(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{362:function(t,s,a){"use strict";a.r(s);var r=a(0),_=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h4",{attrs:{id:"_1-目标与思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-目标与思路"}},[t._v("#")]),t._v(" \\1. 目标与思路")]),t._v(" "),a("p",[t._v("人工智能，知识图谱等前沿信息技术在教育中的应用，推动信息化教育进入高校，学科知识图谱将不断为智慧的教学提供知识功能，人工智能为智慧教育的发展提供了强有力的技术支持，推动人工智能与教育都应刻不容缓。")]),t._v(" "),a("h4",{attrs:{id:"_2-传统教育"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-传统教育"}},[t._v("#")]),t._v(" \\2. 传统教育")]),t._v(" "),a("p",[t._v("现阶段，智慧教育课堂教学仍是学校教育的主阵地，传统课堂教学过程中，教师讲授课程知识以知识点为基本元素，更多偏向将过于细琐和庞杂的知识点填鸭式的、照本宣科的讲授给大学生，")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/img/genesis/%E7%8E%B0%E9%98%B6%E6%AE%B5.jpg",alt:""}})]),t._v(" "),a("p",[t._v("然而，搜索引擎的功能迅速发展，已能非常快捷方便地为大学生提供知识点的解读，教师教学时，应强调课程相关知识点的发现逻辑、关联机理和思维导引。学科知识图谱的构建，能有效的寻找关联逻辑，从而引导学生更加快速进入学习状态，引导思维发散，提高学习效率，达到预期教学质量和效果。学生的学习效果是反映教学质量的最直接表现，如何合理的进行教学效果测评，则成了更加重要的一环。利用人工智能识别分析反馈学生学习状态，更是推进人了工智能与教育的真融合。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/img/genesis/%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.jpg",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"_3-系统构想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-系统构想"}},[t._v("#")]),t._v(" \\3. 系统构想")]),t._v(" "),a("p",[t._v("为此，我们开发了本系统，帮助教师了解学生在教学过程中对某一知识点的掌握情况，及时调整教学内容和教学方法，合理分配，重新组合知识点教学，构建和调整课程知识图谱，优化学生与老师的学习与授课体验。其次能提供一个高效且安全的学生数据采集处理平台，为学校及时了解学生近况和相关措施的有效实施作为有力保障。更能帮助落实教育改革，利用人工智能改善教学方式，引导和推动教育内容和模式的变革。")]),t._v(" "),a("h4",{attrs:{id:"_4-系统实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-系统实现"}},[t._v("#")]),t._v(" \\4. 系统实现")]),t._v(" "),a("p",[t._v("为实现这一目的，系统包含以下几个核心功能：分别是知识点设置、知识点识别、与定时学习效果可视化反馈和知识图谱构建与调整。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/img/genesis/%E7%8E%B0%E9%98%B6%E6%AE%B5.jpg",alt:""}})]),t._v(" "),a("p",[t._v("具体功能实现流程如下：首先，教师课前通过系统预先设置某课时的知识点，上课过程中有一台球机始终对准教师所用PPT屏幕，用于获取整堂课PPT播放情况视频；一台对准学生，用于获取学生的课堂全景信息。接着，课后系统将对拍摄视频处理后进行知识点关键字的识别，与教师预设的知识点进行比对，获取知识点对应的时间段。然后，对知识点出现的时间段进行学生状态检测，统计对应知识点学生的掌握情况并可视化展示。最后，在课程结束后，由系统根据知识点识别的时间线以及此时学生的听课状态构建调整知识图谱呈现。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/img/genesis/%E5%8A%9F%E8%83%BD%E6%B5%81%E7%A8%8B.jpg",alt:""}})]),t._v(" "),a("p",[t._v("\\5. 技术架构")]),t._v(" "),a("p",[t._v("为实现以上功能，本系统采用SSM架构。可分为数据层，服务层，应用层，和视图层。利用springboot+mybtis框架搭建基础应用后，引入自定义状态监测接口和Ocr文字识别，Face++人脸检测，ffmpeg图像处理，第三方服务接口完善系统架构，引入shiro权限管理框架帮助系统完善安全性与可靠性。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/img/genesis/%E6%9E%84%E6%80%9D%E5%9B%BE.jpg",alt:""}})]),t._v(" "),a("p",[t._v("\\6. 系统成果")]),t._v(" "),a("p",[t._v("最后我们实现包括教学系统以外，还完善了包括学生信息管理，角色管理，人员权限分配等一系列基本教务功能。操作日志和数据监控等安全性功能也一并所完善。在此过程中，我们解决了帮助教师知识点把控难易程度，更加理性的知识点组合，课程结束后的学习效果和授课评价数据可视化。构建和调整知识图谱，以帮助教师寻找知识点关联逻辑，从而引导学生更加快速进入学习状态，引导思维发散，提高学习效率，达到预期教学质量和效果。完成教学目标。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/img/genesis/%E5%8A%9F%E8%83%BD%E5%AE%8C%E6%88%90.jpg",alt:""}})])])}),[],!1,null,null,null);s.default=_.exports}}]);