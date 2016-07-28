---
  layout: post
  title: Ubuntu Config
  tags: ubuntu
  categories: system
---

Here is a collection of Ubuntu configs and fixes that is system/software wide.<!--excerpt-->

## Configs

### Install Chinese Input

First we need to install Chinese language support:

Go to **Language Support**, click **Install / Remove Languages...**, check **Chinese (simplified)** or **Chinese (traditional)**, then click **Apply**. This will install **fcitx** together with several input methods, but we are going to install and use **Sogou Pinyin** instead later.

Back to the **Language Support** window, change the **Keyboard input method system** to **fcitx**.

Log out your system and log back in to activate fcitx.

Then go to [Sogou Pinyin website](http://pinyin.sogou.com/linux/?r=pinyin), download the corresponding .deb file and install. When finished, open up **Fcitx Configuration**, you will see **Sogou Pinyin** listed in **Input Method** tab.

### System Tweaks

The default **Sytem Settings** tool doesn't do much. In order to personalize your system, you need **Unity Tweak Tool**.

To install, run:

```
$ sudo apt-get install unity-tweak-tool
```

### Install Theme and Icons

We are using **Numix** as an example to show how to install and change theme and icons.

Add Numix PPA and install:

```
$ sudo add-apt-repository ppa:numix/ppa
$ sudo apt-get update
$ sudo apt-get install numix-gtk-theme numix-icon-theme
```

Now you can use **Unity Tweak Tool** to use your favorite theme and icons.

## Issues

**GPG error “NO_PUBKEY”**

Run the following command:

```
$ sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys <PUBKEY>
```

where <PUBKEY> is your missing public key for repository which you can find within the "GPG error" message.

Then update:

```
$ sudo apt-get update
```
