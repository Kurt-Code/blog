(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{339:function(s,a,e){"use strict";e.r(a);var t=e(0),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("​\tDocker 核心：镜像，首先重点讲解一下镜像的基本操作，然后介绍一下镜像的实现原理。")]),s._v(" "),e("h3",{attrs:{id:"_1-镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-镜像"}},[s._v("#")]),s._v(" 1. 镜像")]),s._v(" "),e("p",[s._v("​\t镜像是一个只读的 Docker 容器模板，包含启动容器所需要的所有文件系统结构和内容。简单来讲，"),e("strong",[s._v("镜像是一个特殊的文件系统")]),s._v("，它提供了容器运行时所需的程序、软件库、资源、配置等静态数据。即镜像不包含任何动态数据，镜像内容在构建后不会被改变。")]),s._v(" "),e("p",[s._v("如何操作镜像：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/images/3docker-%E9%95%9C%E5%83%8F%E6%93%8D%E4%BD%9C.png",alt:""}})]),s._v(" "),e("p",[s._v("从图中可知，镜像的操作可分为：")]),s._v(" "),e("p",[s._v("​\t拉取镜像，使用docker pull命令拉取远程仓库的镜像到本地 ；")]),s._v(" "),e("p",[s._v("​\t重命名镜像，使用docker tag命令“重命名”镜像 ；")]),s._v(" "),e("p",[s._v("​\t查看镜像，使用docker image ls或docker images命令查看本地已经存在的镜像 ；")]),s._v(" "),e("p",[s._v("​\t删除镜像，使用docker rmi命令删除无用镜像 ；")]),s._v(" "),e("p",[s._v("​\t构建镜像，构建镜像有两种方式。第一种方式是使用docker build命令基于 Dockerfile 构建镜像，也是我比较推荐的镜像构建方式；第二种方式是使用docker commit命令基于已经运行的容器提交为镜像。")]),s._v(" "),e("h4",{attrs:{id:"_1-1-拉取镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-拉取镜像"}},[s._v("#")]),s._v(" "),e("strong",[s._v("1.1 拉取镜像")])]),s._v(" "),e("p",[s._v("Docker 镜像的拉取使用"),e("strong",[s._v("docker pull命令")]),s._v("， 命令格式一般为 "),e("strong",[s._v("docker pull [Registry]/[Repository]/[Image]:[Tag]")]),s._v("。")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("Registry 为注册服务器，Docker 默认会从 docker.io 拉取镜像，如果你有自己的镜像仓库，可以把 Registry 替换为自己的注册服务器。")])]),s._v(" "),e("li",[e("p",[s._v("Repository 为镜像仓库，通常把一组相关联的镜像归为一个镜像仓库，library为 Docker 默认的镜像仓库。")])]),s._v(" "),e("li",[e("p",[s._v("Image 为镜像名称。")])]),s._v(" "),e("li",[e("p",[s._v("Tag 为镜像的标签，如果你不指定拉取镜像的标签，默认为latest。")])])]),s._v(" "),e("p",[s._v("例如，我们需要获取一个 busybox 镜像，可以执行以下命令：")]),s._v(" "),e("p",[s._v("busybox 是一个集成了数百个 Linux 命令（例如 curl、grep、mount、telnet 等）的精简工具箱，只有几兆大小，被誉为 Linux 系统的瑞士军刀。我经常会使用 busybox 做调试来查找生产环境中遇到的问题。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker pull busybox\nUsing default tag: latest\nlatest: Pulling from library/busybox\n61c5ed1cbdf8: Pull complete\nDigest: sha256:4f47c01fa91355af2865ac10fef5bf6ec9c7f42ad2321377c21e844427972977\nStatus: Downloaded newer image for busybox:latest\ndocker.io/library/busybox:latest\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("​\t实际上执行docker pull busybox命令，都是先从本地搜索，如果本地搜索不到busybox镜像则从 Docker Hub 下载镜像。")]),s._v(" "),e("h4",{attrs:{id:"_1-2-操作镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-操作镜像"}},[s._v("#")]),s._v(" 1.2 操作镜像")]),s._v(" "),e("h5",{attrs:{id:"查看镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看镜像"}},[s._v("#")]),s._v(" 查看镜像")]),s._v(" "),e("p",[s._v("Docker 镜像查看使用"),e("strong",[s._v("docker images或者docker image ls")]),s._v("命令。")]),s._v(" "),e("p",[s._v("下面我们使用docker images命令列出本地所有的镜像。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker images\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nnginx               latest              4bb46517cac3        9 days ago          133MB\nnginx               1.15                53f3fd8007f7        15 months ago       109MB\nbusybox             latest              018c9d7b792b        3 weeks ago         1.22MB\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("如果我们想要查询指定的镜像，可以使用docker image ls命令来查询。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker image ls busybox\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nbusybox             latest              018c9d7b792b        3 weeks ago         1.22MB\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("当然你也可以使用docker images命令列出所有镜像，然后使用grep命令进行过滤。使用方法如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker images |grep busybox\nbusybox             latest              018c9d7b792b        3 weeks ago         1.22MB\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("“重命名”镜像")])]),s._v(" "),e("p",[s._v("如果你想要自定义镜像名称或者推送镜像到其他镜像仓库，你可以使用docker tag命令将镜像重命名。docker tag的命令格式为 docker tag [SOURCE_IMAGE][:TAG] [TARGET_IMAGE][:TAG]。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker tag busybox:latest mybusybox:latest\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("执行完docker tag命令后，可以使用查询镜像命令查看一下镜像列表：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker images\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nbusybox             latest              018c9d7b792b        3 weeks ago         1.22MB\nmybusybox           latest              018c9d7b792b        3 weeks ago         1.22MB\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("可以看到，镜像列表中多了一个mybusybox的镜像。busybox和mybusybox这两个镜像的 IMAGE ID 是完全一样的。为什么呢？实际上它们指向了同一个镜像文件，只是别名不同而已。")]),s._v(" "),e("h5",{attrs:{id:"删除镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除镜像"}},[s._v("#")]),s._v(" 删除镜像")]),s._v(" "),e("p",[s._v("你可以使用"),e("strong",[s._v("docker rmi或者docker image rm")]),s._v("命令删除镜像。")]),s._v(" "),e("p",[s._v("例：删除mybusybox镜像")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker rmi mybusybox\n此时，再次使用docker images命令查看一下我们机器上的镜像列表。\n\n$ docker images\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nbusybox             latest              018c9d7b792b        3 weeks ago         1.22MB\n通过上面的输出，我们可以看到，mybusybox镜像已经被删除。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h5",{attrs:{id:"构建镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像"}},[s._v("#")]),s._v(" "),e("strong",[s._v("构建镜像")])]),s._v(" "),e("p",[s._v("构建镜像主要有两种方式：")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("docker commit")]),s._v("命令从运行中的容器提交为镜像；")]),s._v(" "),e("li",[e("strong",[s._v("docker build")]),s._v("命令从 Dockerfile 构建镜像。")])]),s._v(" "),e("p",[e("strong",[s._v("Docker commit命令")])]),s._v(" "),e("p",[s._v("首先介绍下如何从运行中的容器提交为镜像。我依旧使用 busybox 镜像举例，使用以下命令创建一个名为 busybox 的容器并进入 busybox 容器。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 创建容器\n$ docker run -itd busybox\n\n# 进入容器\n$ docker exec -it 容器id /binn/bash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("执行完上面的命令后，当前窗口会启动一个 busybox 容器并且进入容器中。在容器中，执行以下命令创建一个文件并写入内容：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('touch hello.txt && echo "I love Docker. " > hello.txt\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v('此时在容器的根目录下，已经创建了一个 hello.txt 文件，并写入了 "I love Docker. "。下面，我们新打开另一个命令行窗口，运行以下命令提交镜像：')]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker commit busybox busybox:hello\nsha256:cbc6406aaef080d1dd3087d4ea1e6c6c9915ee0ee0f5dd9e0a90b03e2215e81c\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("然后使用上面讲到的docker image ls命令查看镜像：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker image ls busybox\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nbusybox             hello               cbc6406aaef0        2 minutes ago       1.22MB\nbusybox             latest              018c9d7b792b        4 weeks ago         1.22MB\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("此时我们可以看到主机上新生成了 busybox:hello 这个镜像。")]),s._v(" "),e("p",[e("strong",[s._v("Docker build命令")])]),s._v(" "),e("p",[s._v("最常用的镜像构建方式：Dockerfile。Dockerfile 是一个包含了用户所有构建命令的文本。"),e("strong",[s._v("通过docker build命令可以从 Dockerfile 生成镜像。")])]),s._v(" "),e("p",[s._v("使用 Dockerfile 构建镜像具有以下特性：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("Dockerfile 的每一行命令都会生成一个独立的镜像层，并且拥有唯一的 ID；")])]),s._v(" "),e("li",[e("p",[s._v("Dockerfile 的命令是完全透明的，通过查看 Dockerfile 的内容，就可以知道镜像是如何一步步构建的；")])]),s._v(" "),e("li",[e("p",[s._v("Dockerfile 是纯文本的，方便跟随代码一起存放在代码仓库并做版本管理。")])])]),s._v(" "),e("p",[s._v("先学习下 Dockerfile 常用的指令。")]),s._v(" "),e("p",[s._v("Dockerfile 指令\t指令简介")]),s._v(" "),e("ul",[e("li",[s._v("FROM\tDockerfile 除了注释第一行必须是 FROM ，FROM 后面跟镜像名称，代表我们要基于哪个基础镜像构建我们的容器。（ "),e("strong",[s._v("默认会先从本地去查找镜像")]),s._v("）")]),s._v(" "),e("li",[s._v("RUN\tRUN 后面跟一个具体的命令，类似于 Linux 命令行执行命令。")]),s._v(" "),e("li",[s._v("ADD\t拷贝本机文件或者远程文件到镜像内")]),s._v(" "),e("li",[s._v("COPY\t拷贝本机文件到镜像内")]),s._v(" "),e("li",[s._v("USER\t指定容器启动的用户")]),s._v(" "),e("li",[s._v("ENTRYPOINT\t容器的启动命令")]),s._v(" "),e("li",[s._v("CMD\tCMD 为 ENTRYPOINT 指令提供默认参数，也可以单独使用 CMD 指定容器启动参数")]),s._v(" "),e("li",[s._v("ENV\t指定容器运行时的环境变量，格式为 key=value")]),s._v(" "),e("li",[s._v("ARG\t定义外部变量，构建镜像时可以使用 build-arg = 的格式传递参数用于构建")]),s._v(" "),e("li",[s._v("EXPOSE\t指定容器监听的端口，格式为 [port]/tcp 或者 [port]/udp")]),s._v(" "),e("li",[s._v("WORKDIR\t为 Dockerfile 中跟在其后的所有 RUN、CMD、ENTRYPOINT、COPY 和 ADD 命令设置工作目录。")])]),s._v(" "),e("p",[s._v("先分析下如下Dockerfile文件中的含义：")]),s._v(" "),e("div",{staticClass:"language-dockerfile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" centos"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("7\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" nginx.repo /etc/yum.repos.d/nginx.repo\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yum install "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("y nginx\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 80\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" HOST=mynginx\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-g"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"daemon off;"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ul",[e("li",[e("p",[s._v("第一行表示我要基于 centos:7 这个镜像来构建自定义镜像。这里需要注意，每个 Dockerfile 的第一行除了注释都必须以 FROM 开头。")])]),s._v(" "),e("li",[e("p",[s._v("第二行表示拷贝本地文件 nginx.repo 文件到容器内的 /etc/yum.repos.d 目录下。这里拷贝 nginx.repo 文件是为了添加 nginx 的安装源。")])]),s._v(" "),e("li",[e("p",[s._v("第三行表示在容器内运行yum install -y nginx命令，安装 nginx 服务到容器内，执行完第三行命令，容器内的 nginx 已经安装完成。")])]),s._v(" "),e("li",[e("p",[s._v("第四行声明容器内业务（nginx）使用 80 端口对外提供服务。")])]),s._v(" "),e("li",[e("p",[s._v("第五行定义容器启动时的环境变量 HOST=mynginx，容器启动后可以获取到环境变量 HOST 的值为 mynginx。")])]),s._v(" "),e("li",[e("p",[s._v("第六行定义容器的启动命令，命令格式为 json 数组。这里设置了容器的启动命令为 nginx ，并且添加了 nginx 的启动参数 -g 'daemon off;' ，使得 nginx 以前台的方式启动。")])])]),s._v(" "),e("p",[s._v("上面这个 Dockerfile 的例子基本涵盖了常用的镜像构建指令。")]),s._v(" "),e("h3",{attrs:{id:"_2-镜像的实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-镜像的实现原理"}},[s._v("#")]),s._v(" 2. 镜像的实现原理")]),s._v(" "),e("h4",{attrs:{id:"_2-1-bootfs和rootfs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-bootfs和rootfs"}},[s._v("#")]),s._v(" 2.1 Bootfs和Rootfs")]),s._v(" "),e("p",[s._v("先下拉ubuntu镜像和python:3镜像：")]),s._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[s._v("root@iZ2ze1lioikou185atzucgZ"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker pull ubuntu")]),s._v("\n\nUsing default tag"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" latest\n\nlatest"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Pulling "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" library"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ubuntu\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("54ee1f796a1e")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Pull complete \n\nf7bfea53ad12"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Pull complete \n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("46d371e02073")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Pull complete \n\nb66c17bbf772"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Pull complete \n\nDigest"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" sha256"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("31dfb10d52ce76c5ca0aa19d10b3e6424b830729e32a89a7c6eee2cda2be67a5")]),s._v("\n\nStatus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Downloaded newer image "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" ubuntu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("latest\n\ndocker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("library"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ubuntu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("latest\n\nroot@iZ2ze1lioikou185atzucgZ"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker images")]),s._v("\n\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\n\npython              "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("                   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("28a4c88cdbbf")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" hours ago        882MB\n\nubuntu              latest              "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4e2eef94cd6b")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" weeks ago         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("73.")]),s._v("9MB\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br")])]),e("p",[s._v("大家可能注意到上面命令输出的最后一列， 它显示 ubuntu 这个镜像才 73.9MB ！但是大家应该都知道，安装一个 ubuntu 系统怎么也不可能就几十兆，那么 Docker 是怎么做到的呢？")]),s._v(" "),e("p",[s._v("这是因为典型的 Linux 运行需要两个 FS: "),e("strong",[s._v("bootfs 和 rootfs")]),s._v("，Linux 刚启动时会加载 bootfs 文件系统，之后 bootfs 会被卸载掉。对于不同的 Linux 发行版, bootfs 基本是一致的, 但 rootfs 会有差别，其包含我们熟悉的 /dev, /proc, /bin 等目录。对于 ubuntu 镜像来说，其底层直接使用 Host 的 "),e("strong",[s._v("kernel内核")]),s._v("，自己只需要提供 rootfs 就行了。如下图所示：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/images/3docker-bootfs-rootfs.png",alt:""}})]),s._v(" "),e("p",[s._v("为了确定 ubuntu 镜像使用的是 Host 的Kernel内核，我们可以使用"),e("strong",[s._v("uname -a命令查看内核版本")]),s._v("：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/images/3docker-kernel.png",alt:""}})]),s._v(" "),e("p",[s._v("说明如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("第一个组数字：4, 主版本号\n第二个组数字：15, 次版本号，当前为稳定版本\n第三个组数字：0, 修订版本号\n第四个组数字：111，当前内核版本（4.15.0）的第111次微调patch\ngeneric：当前内核版本为通用版本，另有表示不同含义的server（针对服务器）、i386（针对老式英特尔处理器）\npae（Physical Address Extension）：物理地址扩展，为了弥补32位地址在PC服务器应用上的不足而推出，表示此32位系统可以支持超过4G的内存\nx86_64：采用的是64位的CPU\nSMP：对称多处理机，表示内核支持多核、多处理器\nTue Jul 15 17:46:11 UTC 2014：内核的编译时间（build date）为 2014/07/15 17:46:11  \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("**重点：**如果我们在同一个 host 上下载不同 Linux 发行版镜像，如python:3和Ubuntu，可以从上图中发现其都是使用的公用 host 的 bootfs。抽象一下，如下图所示：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/images/3docker-bootfs.png",alt:""}})]),s._v(" "),e("p",[s._v("理解到bootfs和rootfs后，就可以解释什么是镜像分层了。")]),s._v(" "),e("h4",{attrs:{id:"_2-1-镜像分层"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-镜像分层"}},[s._v("#")]),s._v(" 2.1 镜像分层")]),s._v(" "),e("p",[s._v("​\t每个镜像都是通过 DockerFile 文本文件定义的，Dockerfile 中的每条指令最终都会成为镜像中的 Layer。Layer 是按顺序构成的，"),e("strong",[s._v("最底层的 Layer 是基础镜像（base image），最上层是最终镜像（final image）")]),s._v("。当一个镜像被更新或重新构建时，只有更新的层需要修改，其他没有更新的层可以直接复用本地缓存。这就是 Docker 镜像如此快速和轻量级的部分原因，每一层的大小加起来等于最终镜像的大小。")]),s._v(" "),e("p",[s._v("​\t理解上面的设计之后，我们现在来解释最上面关于 Layer 这个概念。假设我们的 Dockerfile 定义如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("FROM debian\nRUN apt-get update && apt-get -y -f install emacs\nRUN apt-get update && apt-get -y -f install apache2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("上面一共有三条指令，如果编译这个 Dockerfile，其会生成三个镜像：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@iteblog.com ~]$ docker build -t iteblog-docker ./\nSending build context to Docker daemon  2.048kB\nStep 1/3: FROM debian\n---\x3e a8797652cfd9\nStep 2/3: RUN apt-get update && apt-get -y -f install emacs\n---\x3e Using cache\n---\x3e 4b2cc711d0f1\nStep 3/3: RUN apt-get update && apt-get -y -f installapache2\n---\x3e Using cache\n---\x3e 48ec647c89a1\nSuccessfully built 48ec647c89a1\nSuccessfully tagged iteblog-docker:latest\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("如果用图片表示的话，这个过程如下：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/images/3docker-%E9%95%9C%E5%83%8F%E5%88%86%E5%B1%82.png",alt:""}})]),s._v(" "),e("h3",{attrs:{id:"_3-容器层"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-容器层"}},[s._v("#")]),s._v(" 3. 容器层")]),s._v(" "),e("p",[s._v("​\t如果多个镜像共用一个基础镜像，内存中也只需加载一份基础镜像，就可以为所有容器服务了。那么问题来了，如果我们需要修改基础镜像里面的东西咋办呢？Docker 很好的处理了这个问题，"),e("strong",[s._v("当容器启动时，一个新的可写层被加载到镜像的顶部，这一层通常被称作容器层（container layer），容器层之下的都叫镜像层（image layer）")]),s._v("，所有的修改（比如删除文件、添加文件）都是在容器层进行的，如下图所示：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/images/3docker-container1.png",alt:""}})]),s._v(" "),e("p",[s._v("​\t可以从图中看出Container layer容器可读层和Image layers镜像层。用户对容器中的添加、修改等数据都存放在container layer层，当容器被删除时，也只是container layer层被删除。底层的image layers镜像层是不动的。因此"),e("strong",[s._v("不同容器都有自己独有的容器层，所有的修改只会存在自己的容器层，也就是说不同容器之间的修改都互不影响，这也就使得不同容器可以共享一个镜像层")]),s._v("，具体图解如下：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog/images/3docker-container2.png",alt:""}})]),s._v(" "),e("p",[e("strong",[s._v("重点：不同容器之间的修改是互不影响的，但是如果不同容器之间需要做数据传递，可以使用network进行网络通信。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);