---
  layout: post
  title: wps for linux 系统缺失字体
  tags:
  categories: software linux wps fonts
---

**问题**

启动WPS for Linux后，出现提示"系统缺失字体" 。<!--excerpt-->

出现提示的原因是因为WPS for Linux没有自带windows的字体，只要在Linux系统中加载字体即可。

**解决**

下载缺失的字体文件，然后复制到Linux系统中的`/usr/share/fonts`文件夹中。

下载完成后，解压并进入目录中，继续执行：

```
$ sudo cp * /usr/share/fonts
```

执行以下命令,生成字体的索引信息：

```
$ sudo mkfontscale
$ sudo mkfontdir
```

运行fc-cache命令更新字体缓存。

```
$ sudo fc-cache
```

重启wps即可，字体缺失的提示不再出现。
