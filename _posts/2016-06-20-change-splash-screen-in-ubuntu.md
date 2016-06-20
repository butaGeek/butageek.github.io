---
  layout: post
  title: Change Splash Screen in Ubuntu
  tags: splash screen ubuntu
  categories: system
---

## Introduction

A [splash screen](https://en.wikipedia.org/wiki/Splash_screen) is a graphical screen that appears before a system/application is launching. <!--excerpt-->In Linux, it refers to the animation screen comes when staring up and shuting down the system.

The initial bootscreen is rendered by software called Plymouth, which uses the kernel's Direct Rendering Manager (DRM) and Kernel Mode Setting (KMS) driver to show graphical animation with the native resolution of the display even before X server starts.

## Installation

**Download splash screen themes**

You can either download custom themes from [Gnome-look.org](https://www.gnome-look.org/browse/cat/130/ord/latest/) or simply run `sudo apt-get install plymouth-themes` to install some existing themes in the repository.

**Install new theme**

If you choose to download custom themes, you need to install it after.

**Note:** In Ubuntu 16, the location of plymouth themes is changed from `/lib/plymouth/themes` to `/usr/share/plymouth/themes`.

Extract the theme and copy to `/usr/share/plymouth/themes`.

Then run update-alternatives to make the theme list selectable:

```
$ sudo update-alternatives --install /usr/share/plymouth/themes/default.plymouth default.plymouth /usr/share/plymouth/themes/your_theme/your_theme.plymouth 100
```

Now switch default.plymouth by running update-alternatives as follows:

```
$ sudo update-alternatives --config default.plymouth
```

Enter the number that corresponds to the custom theme that was just installed.

Finally, re-generate an initramfs image:

```
$ sudo update-initramfs -u
```
