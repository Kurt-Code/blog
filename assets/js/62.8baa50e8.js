(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{364:function(_,v,t){"use strict";t.r(v);var e=t(0),a=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"第二章-定制-kali-linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二章-定制-kali-linux"}},[_._v("#")]),_._v(" 第二章 定制 Kali Linux")]),_._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[_._v("#")]),_._v(" 简介")]),_._v(" "),t("p",[_._v("这一章会向你介绍Kali的定制，便于你更好地利用它。我们会涉及到ATI和英伟达GPU技术的安装和配置，以及后面章节所需的额外工具。基于ATI和英伟达GPU的显卡允许我们使用它们的图像处理单元（GPU）来执行与CPU截然不同的操作。我们会以ProxyChains的安装和数字信息的加密来结束这一章。")]),_._v(" "),t("h2",{attrs:{id:"_2-1-准备内核头文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-准备内核头文件"}},[_._v("#")]),_._v(" 2.1 准备内核头文件")]),_._v(" "),t("p",[_._v("有时我们需要使用所需的内核头文件来编译代码。内核头文件是Linux内核的源文件。这个秘籍中，我们会解释准备内核头文件所需的步骤，便于以后使用。")]),_._v(" "),t("h3",{attrs:{id:"准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[_._v("#")]),_._v(" 准备")]),_._v(" "),t("p",[_._v("完成这个秘籍需要网络连接。")]),_._v(" "),t("h3",{attrs:{id:"操作步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[_._v("#")]),_._v(" 操作步骤")]),_._v(" "),t("p",[_._v("让我们开始准备内核头文件：")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("我们首先通过执行下列命令升级发行版作为开始：")]),_._v(" "),t("p",[t("code",[_._v("apt-get update")])]),_._v(" "),t("p",[t("img",{attrs:{src:"/blog/img/img/2-1-1.jpg",alt:"img"}})])]),_._v(" "),t("li",[t("p",[_._v("下面，我们需要再次使用"),t("code",[_._v("apt-get")]),_._v("来准备内核头文件，执行下列命令：")]),_._v(" "),t("p",[t("code",[_._v("apt-get install linux-headers -")]),_._v("uname –r``")]),_._v(" "),t("p",[t("img",{attrs:{src:"/blog/img/img/2-1-2.jpg",alt:"img"}})])]),_._v(" "),t("li",[t("p",[_._v("复制下列目录以及其中的全部内容：")]),_._v(" "),t("p",[t("code",[_._v("cd /usr/src/linux cp -rf include/generated/* include/linux/")])])]),_._v(" "),t("li",[t("p",[_._v("我们现在已准备好编译需要内核头文件的代码。")])])]),_._v(" "),t("h2",{attrs:{id:"_2-2-安装-broadcom-驱动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-安装-broadcom-驱动"}},[_._v("#")]),_._v(" 2.2 安装 Broadcom 驱动")]),_._v(" "),t("p",[_._v("在这个秘籍中，我们将要安装 Broadcom 官方的Linux混合无线驱动。 使用Broadcom 无线USB适配器可以让我们在Kali上连接我们的无线USB接入点。对于这本书的其余秘籍，我们假设Broadcom 无线驱动已经安装。")]),_._v(" "),t("h3",{attrs:{id:"准备-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备-2"}},[_._v("#")]),_._v(" 准备")]),_._v(" "),t("p",[_._v("完成这个秘籍需要网络连接。")]),_._v(" "),t("h3",{attrs:{id:"操作步骤-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤-2"}},[_._v("#")]),_._v(" 操作步骤")]),_._v(" "),t("p",[_._v("让我们开始安装 Broadcom 驱动：")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("打开终端窗口，从http://www.broadcom.com/support/802.11/linux_sta.php下载合适的Broadcom 驱动：")]),_._v(" "),t("p",[t("code",[_._v("cd /tmp/ wget http://www.broadcom.com/docs/linux_sta/hybrid-portsrc_ x86_64-v5_100_82_112.tar.gz")])]),_._v(" "),t("p",[t("img",{attrs:{src:"/blog/img/img/2-2-1.jpg",alt:"img"}})])]),_._v(" "),t("li",[t("p",[_._v("使用下列命令解压下载的驱动：")]),_._v(" "),t("p",[t("code",[_._v("mkdir broadcom tar xvfz hybrid-portsrc_x86_64-v5_100_82_112.tar.gz –C /tmp/ broadcom")])])]),_._v(" "),t("li",[t("p",[_._v("修改"),t("code",[_._v("wl_cfg80211.c")]),_._v("文件，由于5.100.82.112版本中有个bug，会阻止小于2.6.39内核版本上的编译：")]),_._v(" "),t("p",[t("code",[_._v("vim /tmp/broadcom/src/wl/sys/wl_cfg80211.c")])]),_._v(" "),t("p",[_._v("观察代码段的1814行：")]),_._v(" "),t("p",[_._v("```c")]),_._v(" "),t("h1",{attrs:{id:"if-linuxversioncode-kernel-version-2-6-39"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#if-linuxversioncode-kernel-version-2-6-39"}},[_._v("#")]),_._v(" if LINUX"),t("em",[_._v("VERSION")]),_._v("CODE > KERNEL_VERSION(2, 6, 39)")]),_._v(" "),t("p",[_._v("```")]),_._v(" "),t("p",[_._v("将其改为：")]),_._v(" "),t("p",[_._v("```c")]),_._v(" "),t("h1",{attrs:{id:"if-linuxversioncode-kernel-version-2-6-39-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#if-linuxversioncode-kernel-version-2-6-39-2"}},[_._v("#")]),_._v(" if LINUX"),t("em",[_._v("VERSION")]),_._v("CODE >= KERNEL_VERSION(2, 6, 39)")]),_._v(" "),t("p",[_._v("```")]),_._v(" "),t("p",[_._v("并保存修改。")])]),_._v(" "),t("li",[t("p",[_._v("编译代码：")]),_._v(" "),t("p",[t("code",[_._v("make clean make make install")])])]),_._v(" "),t("li",[t("p",[_._v("更新依赖：")]),_._v(" "),t("p",[t("code",[_._v("depmod -a")])])]),_._v(" "),t("li",[t("p",[_._v("通过下列命令找到加载的模块：")]),_._v(" "),t("p",[t("code",[_._v("lsmod | grep b43\\|ssb\\|bcma")])])]),_._v(" "),t("li",[t("p",[_._v("通过执行下列命令移除发现的模块：")]),_._v(" "),t("p",[t("code",[_._v("rmmod b43")])]),_._v(" "),t("p",[_._v("其中``应为"),t("code",[_._v("b43")]),_._v("、"),t("code",[_._v("ssb")]),_._v("或"),t("code",[_._v("bcma")]),_._v("。")])]),_._v(" "),t("li",[t("p",[_._v("将模块加入黑名单，防止它们在系统启动中加载：")]),_._v(" "),t("p",[t("code",[_._v('echo "blacklist " >> /etc/modprobe.d/blacklist.conf')])]),_._v(" "),t("p",[_._v("其中``应为"),t("code",[_._v("b43")]),_._v("、"),t("code",[_._v("ssb")]),_._v("或"),t("code",[_._v("wl")]),_._v("。")])]),_._v(" "),t("li",[t("p",[_._v("最后，将新模块添加到Linux内核中，来使它成为启动进程的一部分：")]),_._v(" "),t("p",[t("code",[_._v("modprobe wl")])])])]),_._v(" "),t("h2",{attrs:{id:"_2-3-安装和配置ati显卡驱动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-安装和配置ati显卡驱动"}},[_._v("#")]),_._v(" 2.3 安装和配置ATI显卡驱动")]),_._v(" "),t("p",[_._v("这个秘籍中，我们会详细讲解ATI显卡驱动的安装和配置，在此之前需要AMD Accelerated Parallel Processing (APP) SDK、OepnCL和CAL++。我们可以利用 ATI Stream技术的优势来运行计算密集型任务 -- 它们通常运行在CPU上 -- 使它们更快更高效地执行。更多ATI Stream技术相关的详细信息，请访问"),t("a",{attrs:{href:"www.amd.com/stream"}},[_._v("www.amd.com/stream")]),_._v("。")]),_._v(" "),t("h3",{attrs:{id:"准备-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备-3"}},[_._v("#")]),_._v(" 准备")]),_._v(" "),t("p",[_._v("需要网络连接来完成这个秘籍。同时在开始这个秘籍之前需要准备内核头文件，它在第一节有所涉及。")]),_._v(" "),t("h3",{attrs:{id:"操作步骤-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤-3"}},[_._v("#")]),_._v(" 操作步骤")]),_._v(" "),t("p",[_._v("让我们开始安装和配置ATI驱动：")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("下载系统所需的ATI显示驱动：")]),_._v(" "),t("p",[t("code",[_._v("cd /tmp/ wget http://www2.ati.com/drivers/linux/amd-driver-installer-121-x86.x86_64.run")])]),_._v(" "),t("p",[_._v("我们也可以从下面的网址下载显示驱动：[http://support. amd.com/us/gpudownload/Pages/index.aspx](http://support. amd.com/us/gpudownload/Pages/index.aspx)。")]),_._v(" "),t("p",[t("img",{attrs:{src:"/blog/img/img/2-3-1.jpg",alt:"img"}})])]),_._v(" "),t("li",[t("p",[_._v("通过键入下列命令来开始安装：")]),_._v(" "),t("p",[t("code",[_._v("sh amd-driver-installer-12-1-x86.x86_64.run")])]),_._v(" "),t("p",[t("img",{attrs:{src:"/blog/img/img/2-3-2.jpg",alt:"img"}})])]),_._v(" "),t("li",[t("p",[_._v("在安装完成之后，重启你的系统来使改变生效，并且避免不稳定。")])]),_._v(" "),t("li",[t("p",[_._v("为之后的步骤安装一些依赖：")]),_._v(" "),t("p",[t("code",[_._v("apt-get install libroot-python-dev libboost-python-dev libboost1.40-all-dev cmake")])])]),_._v(" "),t("li",[t("p",[_._v("下载并解压 AMD APP SDK，根据你的CPU架构：")]),_._v(" "),t("p",[t("code",[_._v("wget http://developer.amd.com/Downloads/AMD-APP-SDK-v2.6-lnx64.tgz mkdir AMD-APP-SDK-v2.6-lnx64 tar zxvf AMD-APP-SDK-v2.6-lnx64.tgz –C /tmp/AMD-APP-SDK-v2.6-lnx64 cd AMD-APP-SDK-v2.6-lnx64")])])]),_._v(" "),t("li",[t("p",[_._v("通过下列命令安装AMD APP SDK：")]),_._v(" "),t("p",[t("code",[_._v("sh Install-AMD-APP.sh")])])]),_._v(" "),t("li",[t("p",[_._v("在"),t("code",[_._v(".bashsrc")]),_._v("文件中设置ATI Stream的路径：")]),_._v(" "),t("p",[t("code",[_._v("echo export ATISTREAMSDKROOT=/opt/AMDAPP/ >> ~/.bashrc source ~/.bashrc")])])]),_._v(" "),t("li",[t("p",[_._v("下载并编译"),t("code",[_._v("calpp")]),_._v("：")]),_._v(" "),t("p",[t("code",[_._v("cd /tmp/ svn co https://calpp.svn.sourceforge.net/svnroot/calpp calpp cd calpp/trunk cmake . make make install")])])]),_._v(" "),t("li",[t("p",[_._v("下载并编译"),t("code",[_._v("pyrit")]),_._v("：")]),_._v(" "),t("p",[t("code",[_._v("cd /tmp/ svn co http://pyrit.googlecode.com/svn/trunk/ pyrit_src cd pyrit_src/pyrit python setup.py build python setup.py install")])])]),_._v(" "),t("li",[t("p",[_._v("构建并安装OpenCL：")]),_._v(" "),t("p",[t("code",[_._v("cd /tmp/pyrit_src/cpyrit_opencl python setup.py build python setup.py install\\")])])]),_._v(" "),t("li",[t("p",[_._v("对"),t("code",[_._v("cpyrit_calpp")]),_._v("的安装做一些小修改：")]),_._v(" "),t("p",[t("code",[_._v("cd /tmp/pyrit_source/cpyrit_calpp vi setup.py")])]),_._v(" "),t("p",[_._v("找到下面这一行：")]),_._v(" "),t("p",[t("code",[_._v("py VERSION = '0.4.0-dev'")])]),_._v(" "),t("p",[_._v("把它改成：")]),_._v(" "),t("p",[t("code",[_._v("py VERSION = '0.4.1-dev'")])]),_._v(" "),t("p",[_._v("之后，找到下面这一行：")]),_._v(" "),t("p",[t("code",[_._v("py CALPP_INC_DIRS.append(os.path.join(CALPP_INC_DIR, 'include'))")])]),_._v(" "),t("p",[_._v("把它改成：")]),_._v(" "),t("p",[t("code",[_._v("py CALPP_INC_DIRS.append(os.path.join(CALPP_INC_DIR, 'include/CAL'))")])])]),_._v(" "),t("li",[t("p",[_._v("最后将ATI GPU模块添加到pyrit：")]),_._v(" "),t("p",[t("code",[_._v("python setup.py build python setup.py install")])])])]),_._v(" "),t("blockquote",[t("p",[_._v("为了展示可用的CAL++设备和CPU的核数，我们需要键入下列命令：")]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("pyrit list_cores\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br")])]),t("p",[_._v("为了进行跑分，我们只需要键入：")]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("pyrit benchmark\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br")])])]),_._v(" "),t("h2",{attrs:{id:"_2-4-安装和配置英伟达显卡驱动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-安装和配置英伟达显卡驱动"}},[_._v("#")]),_._v(" 2.4 安装和配置英伟达显卡驱动")]),_._v(" "),t("p",[_._v("这个秘籍中，我们会拥抱CUDA，英伟达的并行计算架构。在CUDA工具包的安装之后，首先会安装英伟达开发者显示驱动。通过使用GPU的威力，这会带来计算性能的戏剧性提升，它们通常用于一些类似密码破解的场合。")]),_._v(" "),t("blockquote",[t("p",[_._v("有关CUDA的更多信息，请浏览"),t("a",{attrs:{href:"http://www.nvidia.com/object/cuda_home_new.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("他们的官方网站"),t("OutboundLink")],1),_._v("。")])]),_._v(" "),t("h3",{attrs:{id:"准备-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备-4"}},[_._v("#")]),_._v(" 准备")]),_._v(" "),t("p",[_._v("需要网络连接来完成这个秘籍。")]),_._v(" "),t("p",[_._v("同时需要在开始之前准备内核头文件，这在第一节中有所涉及。")]),_._v(" "),t("p",[_._v("为了完成英伟达驱动的安装，需要关闭X会话。")]),_._v(" "),t("h3",{attrs:{id:"操作步骤-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤-4"}},[_._v("#")]),_._v(" 操作步骤")]),_._v(" "),t("p",[_._v("让我们开始安装和配置英伟达显卡驱动：")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("下载英伟达开发者显示驱动，根据你的CPU架构：")]),_._v(" "),t("p",[t("code",[_._v("cd /tmp/ wget http://developer.download.nvidia.com/compute/cuda/4_1/rel/ drivers/NVIDIA-Linux-x86_64-285.05.33.run")])]),_._v(" "),t("p",[t("img",{attrs:{src:"/blog/img/img/2-4-1.jpg",alt:"img"}})])]),_._v(" "),t("li",[t("p",[_._v("安装驱动：")]),_._v(" "),t("p",[t("code",[_._v("chmod +x NVIDIA-Linux-x86_64-285.05.33.run ./NVIDIA-Linux-x86_64-285.05.33.run –kernel-source-path='/usr/src/ linux'")])])]),_._v(" "),t("li",[t("p",[_._v("下载CUDA工具包：")]),_._v(" "),t("p",[t("code",[_._v("wget http://developer.download.nvidia.com/compute/cuda/4_1/rel/ toolkit/cudatoolkit_4.1.28_linux_64_ubuntu11.04.run")])])]),_._v(" "),t("li",[t("p",[_._v("安装CUDA工具包到"),t("code",[_._v("/opt")]),_._v("：")]),_._v(" "),t("p",[t("code",[_._v("chmod +x cudatoolkit_4.1.28_linux_64_ubuntu11.04.run ./cudatoolkit_4.1.28_linux_64_ubuntu11.04.runConfigure the environment variables required for nvcc to work: echo PATH=$PATH:/opt/cuda/bin >> ~/.bashrc echo LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/opt/cuda/lib >> ~/.bashrc echo export PATH >> ~/.bashrc echo export LD_LIBRARY_PATH >> ~/.bashrc")])])]),_._v(" "),t("li",[t("p",[_._v("运行以下命令来使变量生效：")]),_._v(" "),t("p",[t("code",[_._v("source ~/.bashrc ldconfig")])])]),_._v(" "),t("li",[t("p",[_._v("安装"),t("code",[_._v("pyrit")]),_._v("的依赖：")]),_._v(" "),t("p",[t("code",[_._v("apt-get install libssl-dev python-dev python-scapy")])])]),_._v(" "),t("li",[t("p",[_._v("下载并安装GPU增效工具"),t("code",[_._v("pyrit")]),_._v("：")]),_._v(" "),t("p",[t("code",[_._v("svn co http://pyrit.googlecode.com/svn/trunk/ pyrit_src cd pyrit_src/pyrit python setup.py build python setup.py install")])])]),_._v(" "),t("li",[t("p",[_._v("最后，将英伟达GPU模块添加到"),t("code",[_._v("pyrit")]),_._v("：")]),_._v(" "),t("p",[t("code",[_._v("cd /tmp/pyrit_src/cpyrit_cuda python setup.py build python setup.py install")])])])]),_._v(" "),t("blockquote",[t("p",[_._v("为了验证"),t("code",[_._v("nvcc")]),_._v("是否正确安装，我们需要键入下列命令：")]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("nvcc -V\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br")])]),t("p",[_._v("为了进行跑分，我们只需要键入下列命令：")]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("pyrit benchmark\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br")])])]),_._v(" "),t("h2",{attrs:{id:"_2-5-升级和配置额外的安全工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-升级和配置额外的安全工具"}},[_._v("#")]),_._v(" 2.5 升级和配置额外的安全工具")]),_._v(" "),t("p",[_._v("这个秘籍中，我们会涉及到升级Kali，以及配置一些额外的工具，它们对于之后的章节和秘籍十分实用。由于Kali的包在发布之间会不断升级，你很快就会发现比起之前在你的DVD中下载好的工具，又提供了一系列新的工具。我们会以升级来开始，之后获得Nessus的激活码，并以安装Squid来结束。")]),_._v(" "),t("h3",{attrs:{id:"操作步骤-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤-5"}},[_._v("#")]),_._v(" 操作步骤")]),_._v(" "),t("p",[_._v("让我们开始进行升级，以及配置额外的安全工具。")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("使用仓库中最新的修改来更新本地的包索引：")]),_._v(" "),t("p",[t("code",[_._v("apt-get update")])])]),_._v(" "),t("li",[t("p",[_._v("升级现有的包：")]),_._v(" "),t("p",[t("code",[_._v("apt-get upgrade")])])]),_._v(" "),t("li",[t("p",[_._v("升级到最新版本（如果可用的话）：")]),_._v(" "),t("p",[t("code",[_._v("apt-get dist-upgrade")])])]),_._v(" "),t("li",[t("p",[_._v("获得Nessus的激活码，通过在[这里]( http://www.nessus.org/ products/nessus/nessus-plugins/obtain-an-activation-code)注册。")])]),_._v(" "),t("li",[t("p",[_._v("通过执行下列命令来激活Nessus：")]),_._v(" "),t("p",[t("code",[_._v("/opt/nessus/bin/nessus-fetch --register A60F-XXXX-XXXX-XXXX-0006")])]),_._v(" "),t("p",[_._v("其中"),t("code",[_._v("A60F-XXXX-XXXX-XXXX-0006")]),_._v("应为你的激活码。")])]),_._v(" "),t("li",[t("p",[_._v("为Nessus Web界面创建账户：")]),_._v(" "),t("p",[t("code",[_._v("/opt/nessus/sbin/nessus-adduser")])])]),_._v(" "),t("li",[t("p",[_._v("为了启动Nessus服务器，我们只需要执行下列命令：")]),_._v(" "),t("p",[t("code",[_._v("/etc/init.d/nessusd start")])])]),_._v(" "),t("li",[t("p",[_._v("安装Squid：")]),_._v(" "),t("p",[t("code",[_._v("apt-get install squid3")])])]),_._v(" "),t("li",[t("p",[_._v("阻止Squid在启动时自动运行：")]),_._v(" "),t("p",[t("code",[_._v("update-rc.d -f squid3 remove")])])])]),_._v(" "),t("blockquote",[t("p",[_._v("为了在仓库中找到特定的包，我们可以在"),t("code",[_._v("apt-get update")]),_._v("之后使用下列命令：")]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("apt-cache search \n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br")])]),t("p",[_._v("其中``是包名称或者正则表达式。")])]),_._v(" "),t("h2",{attrs:{id:"_2-6-配置proxychains"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-配置proxychains"}},[_._v("#")]),_._v(" 2.6 配置ProxyChains")]),_._v(" "),t("p",[_._v("这个章节中，我们会强制指定应用的网络连接使用用户定义的代理列表，来打破接受者和发送者之间的直接连接。")]),_._v(" "),t("h3",{attrs:{id:"操作步骤-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤-6"}},[_._v("#")]),_._v(" 操作步骤")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("打开ProxyChains的配置文件：")]),_._v(" "),t("p",[t("code",[_._v("vim /etc/proxychains.conf")])])]),_._v(" "),t("li",[t("p",[_._v("解除我们打算使用的链接类型的注释，这里是"),t("code",[_._v("dynamic_chain")]),_._v("：")]),_._v(" "),t("p",[t("img",{attrs:{src:"/blog/img/img/2-6-1.jpg",alt:"img"}})])]),_._v(" "),t("li",[t("p",[_._v("向列表中添加一些代理服务器：")]),_._v(" "),t("p",[t("img",{attrs:{src:"/blog/img/img/2-6-2.jpg",alt:"img"}})])]),_._v(" "),t("li",[t("p",[_._v("使用我们的链式代理来解析目标主机：")]),_._v(" "),t("p",[t("code",[_._v("proxyresolv www.targethost.com")])])]),_._v(" "),t("li",[t("p",[_._v("现在可以在我们打算使用的应用上运行ProxyChains，例如"),t("code",[_._v("msfconsole")]),_._v("：")]),_._v(" "),t("p",[t("code",[_._v("proxychains msfconsole")])])])]),_._v(" "),t("h2",{attrs:{id:"_2-7-目录加密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-目录加密"}},[_._v("#")]),_._v(" 2.7 目录加密")]),_._v(" "),t("p",[_._v("这一章的最后一个秘籍关于信息隐私。我们会使用TrueCrypt通过密钥来隐藏重要和私密的数字信息，远离公众的眼睛。")]),_._v(" "),t("h3",{attrs:{id:"操作步骤-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤-7"}},[_._v("#")]),_._v(" 操作步骤")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("通过访问"),t("code",[_._v("Applications Menu | Kali | Forensics | Digital Anti Forensics | install truecrypt")]),_._v("来安装TrueCrypt。")]),_._v(" "),t("p",[t("img",{attrs:{src:"/blog/img/img/2-7-1.jpg",alt:"img"}})]),_._v(" "),t("p",[_._v("点击"),t("code",[_._v("Install TrueCrypt")]),_._v("（安装TrueCrypt）并且遵循屏幕上的指导。")])]),_._v(" "),t("li",[t("p",[_._v("从"),t("code",[_._v("Applications Menu | Kali Linux | Forensics | Digital Anti Forensics | truecrypt")]),_._v("运行TrueCrypt，你会看到下面的窗口：")]),_._v(" "),t("p",[t("img",{attrs:{src:"/blog/img/img/2-7-2.jpg",alt:"img"}})])]),_._v(" "),t("li",[t("p",[_._v("点击"),t("code",[_._v("Create Volume")]),_._v("（新建卷）来启动"),t("code",[_._v("TrueCrypt Volume Creation Wizard")]),_._v("（TrueCrypt卷创建向导）。")])]),_._v(" "),t("li",[t("p",[_._v("保留默认选项并点击"),t("code",[_._v("Next")]),_._v("。")])]),_._v(" "),t("li",[t("p",[_._v("选择"),t("code",[_._v("Standard TrueCrypt")]),_._v("（标准TrueCrypt）模式并点击"),t("code",[_._v("Next")]),_._v("。")])]),_._v(" "),t("li",[t("p",[_._v("点击"),t("code",[_._v("Select File…")]),_._v("（选择文件）按钮并为新的TrueCrypt卷指定名称和路径。完成后点击"),t("code",[_._v("Save")]),_._v("（保存）。")]),_._v(" "),t("p",[t("img",{attrs:{src:"/blog/img/img/2-7-3.jpg",alt:"img"}})])]),_._v(" "),t("li",[t("p",[_._v("点击"),t("code",[_._v("Next")]),_._v("按钮并选择打算使用的加密和哈希算法。")])]),_._v(" "),t("li",[t("p",[_._v("在下个屏幕中，我们会为容器指定空间总量。")])]),_._v(" "),t("li",[t("p",[_._v("现在我们需要为我们的卷键入密码。点击"),t("code",[_._v("Next")]),_._v("。")])]),_._v(" "),t("li",[t("p",[_._v("选择文件系统类型。")])]),_._v(" "),t("li",[t("p",[_._v("按需选择"),t("code",[_._v("Cross-Platform Support")]),_._v("（跨平台支持）。")])]),_._v(" "),t("li",[t("p",[_._v("在下个屏幕中，向导会让我们在窗口内移动鼠标，来增加加密密钥的密码强度。完成后点击"),t("code",[_._v("Format")]),_._v("（格式化）按钮。")])]),_._v(" "),t("li",[t("p",[_._v("格式化会开始，完成时TrueCrypt的卷就创建好了。按下"),t("code",[_._v("OK")]),_._v("或"),t("code",[_._v("Exit")]),_._v("（退出）。")])]),_._v(" "),t("li",[t("p",[_._v("我们现在回到TrupCrypt窗口。")])]),_._v(" "),t("li",[t("p",[_._v("从列表中选择一个"),t("code",[_._v("Slot")]),_._v("（槽）来解密我们的卷，点击"),t("code",[_._v("Select File…")]),_._v("（选择文件），并打开我们创建的卷。")])]),_._v(" "),t("li",[t("p",[_._v("点击"),t("code",[_._v("Mount")]),_._v("（挂载）并键入我们的密码，完成后点击"),t("code",[_._v("OK")]),_._v("。")]),_._v(" "),t("p",[t("img",{attrs:{src:"/blog/img/img/2-7-4.jpg",alt:"img"}})])]),_._v(" "),t("li",[t("p",[_._v("我们现在可以通过在槽上双击或通过挂载目录来访问卷，以及在里面保存文件。当我们完成之后，只需要点击"),t("code",[_._v("Dismount All")]),_._v("（解除所有挂载）。")])])]),_._v(" "),t("h3",{attrs:{id:"工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[_._v("#")]),_._v(" 工作原理")]),_._v(" "),t("p",[_._v("这个秘籍中，我们配置了 Truecrypt，创建了保护卷，之后挂载了它。这是个用于保护数据安全性的实用工具。")])])}),[],!1,null,null,null);v.default=a.exports}}]);