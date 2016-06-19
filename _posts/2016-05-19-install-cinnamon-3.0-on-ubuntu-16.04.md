---
  layout: post
  title: Install Cinnamon 3.0 on Ubuntu 16.04
  tags: linux ubuntu cinnamon
  categories: system
---
## Introduction

[Cinnamon](http://developer.linuxmint.com/projects.html) is a Linux desktop environment based on GTK+ 3. It was started as a fork of the [GNOME Shell](https://www.gnome.org/gnome-3/) in 2011,<!--excerpt--> but became its own desktop environment in Cinnamon 2.0.

Cinnamon doesn't come with [Ubuntu](http://www.ubuntu.com/) by default, nor found in any other Ubuntu-based distributions by the time this article is written. The only way is to manually install Cinnamon after Ubuntu is loaded.

## Installation

In order to install Cinnamon, you should add [embrosyn's Cinnamon PPA](https://launchpad.net/~embrosyn/+archive/ubuntu/cinnamon) (for Ubuntu 16.04 and 15.10) first:

```
$ sudo add-apt-repository ppa:embrosyn/cinnamon
```

Then update sources and install:

```
$ sudo apt update
$ sudo apt install cinnamon
```

Once installed, log out and select Cinnamon from the login screen.

## Tweaks

When selecting "Quit" from the main menu or "Power Off" from the user dropdown in the system tray, you won't see any buttons other than "Cancel".

To fix this, open "dconf Editor" and go to `org > cinnamon > desktop > session`, make sure `session-manager-uses-logind` and `settings-daemon-uses-logind` are both checked. Then logout or restart the system, you will see the buttons are back.
