---
title: 工具集(命令行)
lang: en-US
sidebarDepth: 2
---

# tools

linux上有许多工具，帮助开发人员增加效率，完成开发-测试-验收的闭环，优化研发体验。

## curl

用于访问网站的工具

普通GET访问: curl https://www.baidu.com

带cookie访问：curl -b '${cookie}' https://www.baidu.com

普通POST请求: curl -d '${POST JSON}' https://www.baidu.com

其他参数使用场景比较少，主要就是带有登录token的cookie访问，和POST带JSON访问。

(来源-阮一峰的网络日志)

## wget

下载工具，用的较少，一般用来下载apt无法直接install的软件/文件

## apt/apt-get

下载和安装一体化工具

下载并安装: sudo apt install ${package_name}

查看apt可安装的软件: apt list

其他参数使用场景少，apt list可以与grep连用，用来查看apt可安装php哪个版本

## cp 

复制工具

普通复制文件: cp origin_dir/file_name dest/

将文件夹中所有的文件复制到另外一个文件夹: cp -r origin_dir/file_name/* dest/

其他场景用的少 

## rm/mv

移除/移动工具

普通删除:rm file_name

删除文件夹中所有的文件:rm -rf origin_dir/

普通移动:mv origin_dir/file_name dest/

移动文件夹中所有的文件:mv origin_dir/* dest/

