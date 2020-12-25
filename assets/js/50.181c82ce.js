(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{351:function(s,e,a){"use strict";a.r(e);var n=a(0),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"_1-前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[s._v("#")]),s._v(" 1. 前言")]),s._v(" "),a("p",[s._v("​\t在上一章Docker安全性能中已有讲解Namespace的功能作用。")]),s._v(" "),a("p",[s._v("​\t概念回顾：Docker 是基于 Linux 内核的 "),a("strong",[s._v("Namespace")]),s._v(" 技术实现资源隔离的，"),a("strong",[s._v("所有的容器都共享主机的内核")]),s._v("。其实这与以虚拟机为代表的云计算时代还是有很多区别的，比如虚拟机有着更好的隔离性和安全性，而容器的隔离性和安全性则相对较弱。")]),s._v(" "),a("p",[s._v("​\t虽然Namespace的技术的隔离和安全性相对较弱，那么究竟什么是 Namespace，各种 Namespace 都有什么作用，为什么 Docker 需要 Namespace呢？")]),s._v(" "),a("h3",{attrs:{id:"_2-什么是namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是namespace"}},[s._v("#")]),s._v(" 2.什么是Namespace")]),s._v(" "),a("p",[s._v("​\t"),a("strong",[s._v("维基百科定义")]),s._v("：Namespace 是 Linux 内核的一项功能，该功能对内核资源进行分区，以使一组进程看到一组资源，而另一组进程看到另一组资源。Namespace 的工作方式通过为一组资源和进程设置相同的 Namespace 而起作用，但是这些 Namespace 引用了不同的资源。资源可能存在于多个 Namespace 中。这些资源可以是进程 ID、主机名、用户 ID、文件名、与网络访问相关的名称和进程间通信。")]),s._v(" "),a("p",[s._v("​\t"),a("strong",[s._v("简单来说，"),a("strong",[s._v("Namespace 是 Linux 内核的一个特性，该")]),s._v("特性可以实现在同一主机系统中，对进程 ID、主机名、用户 ID、文件名、网络和进程间通信等资源的隔离")]),s._v("。Docker 利用 Linux 内核的 Namespace 特性，"),a("strong",[s._v("实现了每个容器的资源相互隔离，从而保证容器内部只能访问到自己 Namespace 的资源")]),s._v("。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/blog/images/9.Namespaces%E7%B1%BB%E5%9E%8B.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"_3-namespace的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-namespace的作用"}},[s._v("#")]),s._v(" 3.Namespace的作用")]),s._v(" "),a("p",[s._v("下面分别讲解六种Namespace的运用：\n"),a("strong",[s._v("1）Mount Namespace")]),s._v("\n​\t**Mount Namespace 是 Linux 内核实现的第一个 Namespace，**从内核的 2.4.19 版本开始加入。它可以用来隔离不同的进程或进程组看到的挂载点。通俗地说，就是可以实现在不同的进程中看到不同的挂载目录。使用 Mount Namespace 可以实现容器内只能看到自己的挂载信息，在容器内的挂载操作不会影响主机的挂载目录。")]),s._v(" "),a("p",[s._v("​\t"),a("strong",[s._v("unshare")]),s._v(" 是 util-linux 工具包中的一个工具，CentOS 7 系统默认已经集成了该工具，使用 unshare 命令可以实现创建并访问不同类型的 Namespace。")]),s._v(" "),a("p",[s._v("首先我们使用以下命令创建一个 bash 进程并且新建一个 Mount Namespace：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo unshare --mount --fork /bin/bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行完上述命令后，这时我们已经在主机上创建了一个新的 Mount Namespace，并且当前命令行窗口加入了新创建的 Mount Namespace。下面我通过一个例子来验证下，"),a("strong",[s._v("在独立的 Mount Namespace 内创建挂载目录是不影响主机的挂载目录的。")])]),s._v(" "),a("p",[s._v("首先在 /tmp 目录下创建一个目录。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@centos7 centos]# mkdir /tmp/tmpfs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("创建好目录后使用 mount 命令挂载一个 tmpfs 类型的目录。命令如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@centos7 centos]# mount -t tmpfs -o size=20m tmpfs /tmp/tmpfs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后使用 df 命令查看一下已经挂载的目录信息：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@centos7 centos]# df -h\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/vda1       500G  1.4G  499G   1% /\ndevtmpfs         16G     0   16G   0% /dev\ntmpfs            16G     0   16G   0% /dev/shm\ntmpfs            16G     0   16G   0% /sys/fs/cgroup\ntmpfs            16G   57M   16G   1% /run\ntmpfs           3.2G     0  3.2G   0% /run/user/1000\ntmpfs            20M     0   20M   0% /tmp/tmpfs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("可以看到 /tmp/tmpfs 目录已经被正确挂载。为了验证主机上并没有挂载此目录，我们新打开一个命令行窗口，同样执行 df 命令查看主机的挂载信息：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[centos@centos7 ~]$ df -h\nFilesystem      Size  Used Avail Use% Mounted on\ndevtmpfs         16G     0   16G   0% /dev\ntmpfs            16G     0   16G   0% /dev/shm\ntmpfs            16G   57M   16G   1% /run\ntmpfs            16G     0   16G   0% /sys/fs/cgroup\n/dev/vda1       500G  1.4G  499G   1% /\ntmpfs           3.2G     0  3.2G   0% /run/user/1000\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("通过上面输出可以看到主机上并没有挂载 /tmp/tmpfs，可见我们独立的 Mount Namespace 中执行 mount 操作并不会影响主机。")]),s._v(" "),a("p",[s._v("为了进一步验证我们的想法，我们继续在当前命令行窗口查看一下当前进程的 Namespace 信息，命令如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@centos7 centos]# ls -l /proc/self/ns/\ntotal 0\nlrwxrwxrwx. 1 root root 0 Sep  4 08:20 ipc -> ipc:[4026531839]\nlrwxrwxrwx. 1 root root 0 Sep  4 08:20 mnt -> mnt:[4026532239]\nlrwxrwxrwx. 1 root root 0 Sep  4 08:20 net -> net:[4026531956]\nlrwxrwxrwx. 1 root root 0 Sep  4 08:20 pid -> pid:[4026531836]\nlrwxrwxrwx. 1 root root 0 Sep  4 08:20 user -> user:[4026531837]\nlrwxrwxrwx. 1 root root 0 Sep  4 08:20 uts -> uts:[4026531838]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("然后新打开一个命令行窗口，使用相同的命令查看一下主机上的 Namespace 信息：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[centos@centos7 ~]$ ls -l /proc/self/ns/\ntotal 0\nlrwxrwxrwx. 1 centos centos 0 Sep  4 08:20 ipc -> ipc:[4026531839]\nlrwxrwxrwx. 1 centos centos 0 Sep  4 08:20 mnt -> mnt:[4026531840]\nlrwxrwxrwx. 1 centos centos 0 Sep  4 08:20 net -> net:[4026531956]\nlrwxrwxrwx. 1 centos centos 0 Sep  4 08:20 pid -> pid:[4026531836]\nlrwxrwxrwx. 1 centos centos 0 Sep  4 08:20 user -> user:[4026531837]\nlrwxrwxrwx. 1 centos centos 0 Sep  4 08:20 uts -> uts:[4026531838]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("通过对比两次命令的输出结果，我们可以看到，除了 Mount Namespace 的 ID 值不一样外，其他Namespace 的 ID 值均一致。")]),s._v(" "),a("p",[s._v("通过以上结果我们可以得出结论，使用 unshare 命令可以新建 Mount Namespace，并且在新建的 Mount Namespace 内 mount 是和外部完全隔离的。")]),s._v(" "),a("p",[a("strong",[s._v("2）PID Namespace")]),s._v("\n​\t"),a("strong",[s._v("PID Namespace 的作用是用来隔离进程")]),s._v("。在不同的 PID Namespace 中，进程可以拥有相同的 PID 号，利用 PID Namespace 可以实现每个容器的主进程为 1 号进程，而容器内的进程在主机上却拥有不同的PID。例如一个进程在主机上 PID 为 122，使用 PID Namespace 可以实现该进程在容器内看到的 PID 为 1。")]),s._v(" "),a("p",[s._v("下面演示PID Namespace的作用。创建一个 bash 进程，并且新建一个 PID Namespace：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo unshare --pid --fork --mount-proc /bin/bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行完上述命令后，我们在主机上创建了一个新的 PID Namespace，并且当前命令行窗口加入了新创建的 PID Namespace。在当前的命令行窗口使用 ps aux 命令查看一下进程信息：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@centos7 centos]# ps aux\nUSER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot         1  0.0  0.0 115544  2004 pts/0    S    10:57   0:00 bash\nroot        10  0.0  0.0 155444  1764 pts/0    R+   10:59   0:00 ps aux\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("通过上述命令输出结果可以看到当前 Namespace 下 bash 为 1 号进程，而且我们也看不到主机上的其他进程信息。")]),s._v(" "),a("p",[a("strong",[s._v("3）UTS Namespace")]),s._v("\n​\t"),a("strong",[s._v("UTS Namespace 主要是用来隔离主机名的")]),s._v("，它允许每个 UTS Namespace 拥有一个独立的主机名。例如我们的主机名称为 docker，使用 UTS Namespace 可以实现在容器内的主机名称为 utsdocker 或者其他任意自定义主机名。")]),s._v(" "),a("p",[s._v("同样我们通过一个实例来验证下 UTS Namespace 的作用，首先我们使用 unshare 命令来创建一个 UTS Namespace：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo unshare --uts --fork /bin/bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("创建好 UTS Namespace 后，当前命令行窗口已经处于一个独立的 UTS Namespace 中，下面我们使用 hostname 命令（hostname 可以用来查看主机名称）设置一下主机名：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("root@centos7 centos]# hostname -b utsdocker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后再查看一下主机名：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@centos7 centos]# hostname\nutsdocker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("通过上面命令的输出，我们可以看到当前UTS Namespace 内的主机名已经被修改为 utsdocker。然后我们新打开一个命令行窗口，使用相同的命令查看一下主机的 hostname：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[centos@centos7 ~]$ hostname\ncentos7\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("可以看到主机的名称仍然为 centos7，并没有被修改。由此，可以验证 UTS Namespace 可以用来隔离主机名。")]),s._v(" "),a("p",[a("strong",[s._v("4）IPC Namespace")]),s._v("\n​\t"),a("strong",[s._v("IPC Namespace 主要是用来隔离进程间通信的")]),s._v("。"),a("strong",[s._v("PID Namespace 和 IPC Namespace 一起使用可以实现同一 IPC Namespace 内的进程彼此可以通信")]),s._v("，不同 IPC Namespace 的进程却不能通信。")]),s._v(" "),a("p",[s._v("使用 unshare 命令来创建一个 IPC Namespace：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo unshare --ipc --fork /bin/bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("下面我们需要借助两个命令来实现对 IPC Namespace 的验证。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("ipcs -q 命令：用来查看系统间通信队列列表。")])]),s._v(" "),a("li",[a("p",[s._v("ipcmk -Q 命令：用来创建系统间通信队列。")])])]),s._v(" "),a("p",[s._v("我们首先使用 ipcs -q 命令查看一下当前 IPC Namespace 下的系统通信队列列表：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[centos@centos7 ~]$ ipcs -q\n------ Message Queues --------\nkey        msqid      owner      perms      used-bytes   messages\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("由上可以看到当前无任何系统通信队列，然后我们使用 ipcmk -Q 命令创建一个系统通信队列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@centos7 centos]# ipcmk -Q\nMessage queue id: 0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("再次使用 ipcs -q 命令查看当前 IPC Namespace 下的系统通信队列列表：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@centos7 centos]# ipcs -q\n------ Message Queues --------\nkey        msqid      owner      perms      used-bytes   messages\n0x73682a32 0          root       644        0            0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("可以看到我们已经成功创建了一个系统通信队列。然后我们新打开一个命令行窗口，使用ipcs -q 命令查看一下主机的系统通信队列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[centos@centos7 ~]$ ipcs -q\n------ Message Queues --------\nkey        msqid      owner      perms      used-bytes   messages\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("通过上面的实验，可以发现，在单独的 IPC Namespace 内创建的系统通信队列在主机上无法看到。即 IPC Namespace 实现了系统通信队列的隔离。")]),s._v(" "),a("p",[a("strong",[s._v("5）User Namespace")]),s._v("\n​\t"),a("strong",[s._v("User Namespace 主要是用来隔离用户和用户组的")]),s._v("。一个比较典型的应用场景就是在主机上以非 root 用户运行的进程可以在一个单独的 User Namespace 中映射成 root 用户。使用 User Namespace 可以实现进程在容器内拥有 root 权限，而在主机上却只是普通用户。")]),s._v(" "),a("p",[s._v("User Namesapce 的创建是可以不使用 root 权限的。下面我们以普通用户的身份创建一个 User Namespace，命令如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[centos@centos7 ~]$ unshare --user -r /bin/bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("CentOS7 默认允许创建的 User Namespace 为 0，如果执行上述命令失败（ unshare 命令返回的错误为 unshare: unshare failed: Invalid argument ），需要使用以下命令修改系统允许创建的 User Namespace 数量，命令为：echo 65535 > /proc/sys/user/max_user_namespaces，然后再次尝试创建 User Namespace。")]),s._v(" "),a("p",[s._v("然后执行 id 命令查看一下当前的用户信息：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@centos7 ~]# id\nuid=0(root) gid=0(root) groups=0(root),65534(nfsnobody) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("通过上面的输出可以看到我们在新的 User Namespace 内已经是 root 用户了。下面我们使用只有主机 root 用户才可以执行的 reboot 命令来验证一下，在当前命令行窗口执行 reboot 命令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@centos7 ~]# reboot\nFailed to open /dev/initctl: Permission denied\nFailed to talk to init daemon.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("可以看到，我们在新创建的 User Namespace 内虽然是 root 用户，但是并没有权限执行 reboot 命令。这说明在隔离的 User Namespace 中，并不能获取到主机的 root 权限，也就是说 User Namespace 实现了用户和用户组的隔离。")]),s._v(" "),a("p",[a("strong",[s._v("6）Net Namespace")]),s._v("\n​\t"),a("strong",[s._v("Net Namespace 是用来隔离网络设备、IP 地址和端口等信息的")]),s._v("。Net Namespace 可以让每个进程拥有自己独立\t的 IP 地址，端口和网卡信息。例如主机 IP 地址为 172.16.4.1 ，容器内可以设置独立的 IP 地址为 192.168.1.1。")]),s._v(" "),a("p",[s._v("同样用实例验证，我们首先使用 ip a 命令查看一下主机上的网络信息：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ip a\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n    inet6 ::1/128 scope host\n       valid_lft forever preferred_lft forever\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000\n    link/ether 02:11:b0:14:01:0c brd ff:ff:ff:ff:ff:ff\n    inet 172.20.1.11/24 brd 172.20.1.255 scope global dynamic eth0\n       valid_lft 86063337sec preferred_lft 86063337sec\n    inet6 fe80::11:b0ff:fe14:10c/64 scope link\n       valid_lft forever preferred_lft forever\n3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default\n    link/ether 02:42:82:8d:a0:df brd ff:ff:ff:ff:ff:ff\n    inet 172.17.0.1/16 scope global docker0\n       valid_lft forever preferred_lft forever\n    inet6 fe80::42:82ff:fe8d:a0df/64 scope link\n       valid_lft forever preferred_lft forever\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("然后我们使用以下命令创建一个 Net Namespace：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo unshare --net --fork /bin/bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("同样的我们使用 ip a 命令查看一下网络信息：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@centos7 centos]# ip a\n1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN group default qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("可以看到，宿主机上有 lo、eth0、docker0 等网络设备，而我们新建的 Net Namespace 内则与主机上的网络设备不同。")]),s._v(" "),a("h3",{attrs:{id:"_4-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-总结"}},[s._v("#")]),s._v(" 4. 总结")]),s._v(" "),a("p",[s._v("​\tLinux 内核从 2002 年 2.4.19 版本开始加入了 Mount Namespace，而直到内核 3.8 版本加入了 User Namespace 才为容器提供了足够的支持功能。")]),s._v(" "),a("p",[s._v("​\t当 Docker 新建一个容器时， 它会创建这六种 Namespace，然后将容器中的进程加入这些 Namespace 之中，使得 Docker 容器中的进程只能看到当前 Namespace 中的系统资源。")]),s._v(" "),a("p",[s._v("​\t正是由于 Docker 使用了 Linux 的这些 Namespace 技术，才实现了 Docker 容器的隔离，可以说没有 Namespace，就没有 Docker 容器。")])])}),[],!1,null,null,null);e.default=t.exports}}]);