(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{328:function(s,a,r){"use strict";r.r(a);var t=r(0),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h3",{attrs:{id:"tar"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tar"}},[s._v("#")]),s._v(" tar")]),s._v(" "),r("ul",[r("li",[s._v("-c: 建立压缩档案\n-x：解压\n-t：查看内容\n-r：向压缩归档文件末尾追加文件\n-u：更新原压缩包中的文件")])]),s._v(" "),r("p",[s._v("这五个是独立的命令，压缩解压都要用到其中一个，可以和别的命令连用但只能用其中一个。下面的参数是根据需要在压缩或解压档案时可选的。")]),s._v(" "),r("ul",[r("li",[s._v("-z：有gzip属性的\n-j：有bz2属性的\n-Z：有compress属性的\n-v：显示所有过程\n-O：将文件解开到标准输出")])]),s._v(" "),r("p",[s._v("下面的参数-f是必须的")]),s._v(" "),r("p",[s._v("-f: 使用档案名字，切记，这个参数是最后一个参数，后面只能接档案名。")]),s._v(" "),r("p",[s._v("# tar -cf all.tar *.jpg\n这条命令是将所有.jpg的文件打成一个名为all.tar的包。-c是表示产生新的包，-f指定包的文件名。")]),s._v(" "),r("p",[s._v("# tar -rf all.tar *.gif\n这条命令是将所有.gif的文件增加到all.tar的包里面去。-r是表示增加文件的意思。")]),s._v(" "),r("p",[s._v("# tar -uf all.tar logo.gif\n这条命令是更新原来tar包all.tar中logo.gif文件，-u是表示更新文件的意思。")]),s._v(" "),r("p",[s._v("# tar -tf all.tar\n这条命令是列出all.tar包中所有文件，-t是列出文件的意思")]),s._v(" "),r("p",[s._v("# tar -xf all.tar\n这条命令是解出all.tar包中所有文件，-t是解开的意思")]),s._v(" "),r("h3",{attrs:{id:"压缩"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#压缩"}},[s._v("#")]),s._v(" 压缩")]),s._v(" "),r("p",[s._v("tar -cvf jpg.tar *.jpg //将目录里所有jpg文件打包成jpg.tar")]),s._v(" "),r("p",[s._v("tar -czf jpg.tar.gz *.jpg  //将目录里所有jpg文件打包成jpg.tar后，并且将其用gzip压缩，生成一个gzip压缩过的包，命名为jpg.tar.gz")]),s._v(" "),r("p",[s._v("tar -cjf jpg.tar.bz2 *.jpg //将目录里所有jpg文件打包成jpg.tar后，并且将其用bzip2压缩，生成一个bzip2压缩过的包，命名为jpg.tar.bz2")]),s._v(" "),r("p",[s._v("tar -cZf jpg.tar.Z *.jpg  //将目录里所有jpg文件打包成jpg.tar后，并且将其用compress压缩，生成一个umcompress压缩过的包，命名为jpg.tar.Z")]),s._v(" "),r("p",[s._v("rar a jpg.rar *.jpg //rar格式的压缩，需要先下载rar for linux")]),s._v(" "),r("p",[s._v("zip jpg.zip *.jpg //zip格式的压缩，需要先下载zip for linux")]),s._v(" "),r("h3",{attrs:{id:"解压"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解压"}},[s._v("#")]),s._v(" 解压")]),s._v(" "),r("p",[s._v("tar -xvf file.tar //解压 tar包")]),s._v(" "),r("p",[s._v("tar -xzvf file.tar.gz //解压tar.gz")]),s._v(" "),r("p",[s._v("tar -xjvf file.tar.bz2  //解压 tar.bz2")]),s._v(" "),r("p",[s._v("tar -xZvf file.tar.Z  //解压tar.Z")]),s._v(" "),r("p",[s._v("unrar e file.rar //解压rar")]),s._v(" "),r("p",[s._v("unzip file.zip //解压zip")]),s._v(" "),r("h3",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),r("p",[s._v("1、*.tar 用 tar -xvf 解压")]),s._v(" "),r("p",[s._v("2、*.gz 用 gzip -d或者gunzip 解压")]),s._v(" "),r("p",[s._v("3、"),r("em",[s._v(".tar.gz和")]),s._v(".tgz 用 tar -xzf 解压")]),s._v(" "),r("p",[s._v("4、*.bz2 用 bzip2 -d或者用bunzip2 解压")]),s._v(" "),r("p",[s._v("5、*.tar.bz2用tar -xjf 解压")]),s._v(" "),r("p",[s._v("6、*.Z 用 uncompress 解压")]),s._v(" "),r("p",[s._v("7、*.tar.Z 用tar -xZf 解压")]),s._v(" "),r("p",[s._v("8、*.rar 用 unrar e解压")]),s._v(" "),r("p",[s._v("9、*.zip 用 unzip 解压")]),s._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[s._v("-A或--catenate 新增文件到已存在的备份文件。\n-b"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("区块数目"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("或--blocking-factor"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("区块数目"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 设置每笔记录的区块数目，每个区块大小为12Bytes。\n-B或--read-full-records 读取数据时重设区块大小。\n-c或--create 建立新的备份文件。\n-C"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("目的目录"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("或--directory"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("目的目录"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 切换到指定的目录。\n-d或--diff或--compare 对比备份文件内和文件系统上的文件的差异。\n-f"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("备份文件"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("或--file"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("备份文件"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 指定备份文件。\n-F"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Script文件"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("或--info-script"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Script文件"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 每次更换磁带时，就执行指定的Script文件。\n-g或--listed-incremental 处理GNU格式的大量备份。\n-G或--incremental 处理旧的GNU格式的大量备份。\n-h或--dereference 不建立符号连接，直接复制该连接所指向的原始文件。\n-i或--ignore-zeros 忽略备份文件中的0 Byte区块，也就是EOF。\n-k或--keep-old-files 解开备份文件时，不覆盖已有的文件。\n-K"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("或--starting-file"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 从指定的文件开始还原。\n-l或--one-file-system 复制的文件或目录存放的文件系统，必须与tar指令执行时所处的文件系统相同，否则不予复制。\n-L"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("媒体容量"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("或-tape-length"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("媒体容量"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 设置存放每体的容量，单位以1024 Bytes计算。\n-m或--modification-time 还原文件时，不变更文件的更改时间。\n-M或--multi-volume 在建立，还原备份文件或列出其中的内容时，采用多卷册模式。\n-N"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("日期格式"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("或--newer"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("日期时间"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 只将较指定日期更新的文件保存到备份文件里。\n-o或--old-archive或--portability 将资料写入备份文件时使用V7格式。\n-O或--stdout 把从备份文件里还原的文件输出到标准输出设备。\n-p或--same-permissions 用原来的文件权限还原文件。\n-P或--absolute-names 文件名使用绝对名称，不移除文件名称前的"),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),s._v("号。\n-r或--append 新增文件到已存在的备份文件的结尾部分。\n-R或--block-number 列出每个信息在备份文件中的区块编号。\n-s或--same-order 还原文件的顺序和备份文件内的存放顺序相同。\n-S或--sparse 倘若一个文件内含大量的连续0字节，则将此文件存成稀疏文件。\n-t或--list 列出备份文件的内容。\n-T"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("范本文件"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("或--files-from"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("范本文件"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 指定范本文件，其内含有一个或多个范本样式，让tar解开或建立符合设置条件的文件。\n-u或--update 仅置换较备份文件内的文件更新的文件。\n-U或--unlink-first 解开压缩文件还原文件之前，先解除文件的连接。\n-v或--verbose 显示指令执行过程。\n-V"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("卷册名称"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("或--label"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("卷册名称"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 建立使用指定的卷册名称的备份文件。\n-w或--interactive 遭遇问题时先询问用户。\n-W或--verify 写入备份文件后，确认文件正确无误。\n-x或--extract或--get 从备份文件中还原文件。\n-X"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("范本文件"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("或--exclude-from"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("范本文件"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 指定范本文件，其内含有一个或多个范本样式，让ar排除符合设置条件的文件。\n-z或--gzip或--ungzip 通过gzip指令处理备份文件。\n-Z或--compress或--uncompress 通过compress指令处理备份文件。\n-"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("设备编号"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("存储密度"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 设置备份用的外围设备编号及存放数据的密度。\n--after-date"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("日期时间"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 此参数的效果和指定"),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-N"')]),s._v("参数相同。\n--atime-preserve 不变更文件的存取时间。\n--backup"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("备份方式"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("或--backup 移除文件前先进行备份。\n--checkpoint 读取备份文件时列出目录名称。\n--concatenate 此参数的效果和指定"),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-A"')]),s._v("参数相同。\n--confirmation 此参数的效果和指定"),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-w"')]),s._v("参数相同。\n--delete 从备份文件中删除指定的文件。\n--exclude"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("范本样式"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 排除符合范本样式的文件。\n--group"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("群组名称"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 把加入设备文件中的文件的所属群组设成指定的群组。\n--help 在线帮助。\n--ignore-failed-read 忽略数据读取错误，不中断程序的执行。\n--new-volume-script"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Script文件"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 此参数的效果和指定"),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-F"')]),s._v("参数相同。\n--newer-mtime 只保存更改过的文件。\n--no-recursion 不做递归处理，也就是指定目录下的所有文件及子目录不予处理。\n--null 从null设备读取文件名称。\n--numeric-owner 以用户识别码及群组识别码取代用户名称和群组名称。\n--owner"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("用户名称"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 把加入备份文件中的文件的拥有者设成指定的用户。\n--posix 将数据写入备份文件时使用POSIX格式。\n--preserve 此参数的效果和指定"),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-ps"')]),s._v("参数相同。\n--preserve-order 此参数的效果和指定"),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-A"')]),s._v("参数相同。\n--preserve-permissions 此参数的效果和指定"),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-p"')]),s._v("参数相同。\n--record-size"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("区块数目"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 此参数的效果和指定"),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-b"')]),s._v("参数相同。\n--recursive-unlink 解开压缩文件还原目录之前，先解除整个目录下所有文件的连接。\n--remove-files 文件加入备份文件后，就将其删除。\n--rsh-command"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("执行指令"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 设置要在远端主机上执行的指令，以取代rsh指令。\n--same-owner 尝试以相同的文件拥有者还原文件。\n--suffix"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("备份字尾字符串"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 移除文件前先行备份。\n--totals 备份文件建立后，列出文件大小。\n--use-compress-program"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("执行指令"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 通过指定的指令处理备份文件。\n--version 显示版本信息。\n--volno-file"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("编号文件"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 使用指定文件内的编号取代预设的卷册编号。\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br"),r("span",{staticClass:"line-number"},[s._v("14")]),r("br"),r("span",{staticClass:"line-number"},[s._v("15")]),r("br"),r("span",{staticClass:"line-number"},[s._v("16")]),r("br"),r("span",{staticClass:"line-number"},[s._v("17")]),r("br"),r("span",{staticClass:"line-number"},[s._v("18")]),r("br"),r("span",{staticClass:"line-number"},[s._v("19")]),r("br"),r("span",{staticClass:"line-number"},[s._v("20")]),r("br"),r("span",{staticClass:"line-number"},[s._v("21")]),r("br"),r("span",{staticClass:"line-number"},[s._v("22")]),r("br"),r("span",{staticClass:"line-number"},[s._v("23")]),r("br"),r("span",{staticClass:"line-number"},[s._v("24")]),r("br"),r("span",{staticClass:"line-number"},[s._v("25")]),r("br"),r("span",{staticClass:"line-number"},[s._v("26")]),r("br"),r("span",{staticClass:"line-number"},[s._v("27")]),r("br"),r("span",{staticClass:"line-number"},[s._v("28")]),r("br"),r("span",{staticClass:"line-number"},[s._v("29")]),r("br"),r("span",{staticClass:"line-number"},[s._v("30")]),r("br"),r("span",{staticClass:"line-number"},[s._v("31")]),r("br"),r("span",{staticClass:"line-number"},[s._v("32")]),r("br"),r("span",{staticClass:"line-number"},[s._v("33")]),r("br"),r("span",{staticClass:"line-number"},[s._v("34")]),r("br"),r("span",{staticClass:"line-number"},[s._v("35")]),r("br"),r("span",{staticClass:"line-number"},[s._v("36")]),r("br"),r("span",{staticClass:"line-number"},[s._v("37")]),r("br"),r("span",{staticClass:"line-number"},[s._v("38")]),r("br"),r("span",{staticClass:"line-number"},[s._v("39")]),r("br"),r("span",{staticClass:"line-number"},[s._v("40")]),r("br"),r("span",{staticClass:"line-number"},[s._v("41")]),r("br"),r("span",{staticClass:"line-number"},[s._v("42")]),r("br"),r("span",{staticClass:"line-number"},[s._v("43")]),r("br"),r("span",{staticClass:"line-number"},[s._v("44")]),r("br"),r("span",{staticClass:"line-number"},[s._v("45")]),r("br"),r("span",{staticClass:"line-number"},[s._v("46")]),r("br"),r("span",{staticClass:"line-number"},[s._v("47")]),r("br"),r("span",{staticClass:"line-number"},[s._v("48")]),r("br"),r("span",{staticClass:"line-number"},[s._v("49")]),r("br"),r("span",{staticClass:"line-number"},[s._v("50")]),r("br"),r("span",{staticClass:"line-number"},[s._v("51")]),r("br"),r("span",{staticClass:"line-number"},[s._v("52")]),r("br"),r("span",{staticClass:"line-number"},[s._v("53")]),r("br"),r("span",{staticClass:"line-number"},[s._v("54")]),r("br"),r("span",{staticClass:"line-number"},[s._v("55")]),r("br"),r("span",{staticClass:"line-number"},[s._v("56")]),r("br"),r("span",{staticClass:"line-number"},[s._v("57")]),r("br"),r("span",{staticClass:"line-number"},[s._v("58")]),r("br"),r("span",{staticClass:"line-number"},[s._v("59")]),r("br"),r("span",{staticClass:"line-number"},[s._v("60")]),r("br"),r("span",{staticClass:"line-number"},[s._v("61")]),r("br"),r("span",{staticClass:"line-number"},[s._v("62")]),r("br"),r("span",{staticClass:"line-number"},[s._v("63")]),r("br"),r("span",{staticClass:"line-number"},[s._v("64")]),r("br"),r("span",{staticClass:"line-number"},[s._v("65")]),r("br"),r("span",{staticClass:"line-number"},[s._v("66")]),r("br"),r("span",{staticClass:"line-number"},[s._v("67")]),r("br"),r("span",{staticClass:"line-number"},[s._v("68")]),r("br"),r("span",{staticClass:"line-number"},[s._v("69")]),r("br"),r("span",{staticClass:"line-number"},[s._v("70")]),r("br"),r("span",{staticClass:"line-number"},[s._v("71")]),r("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);