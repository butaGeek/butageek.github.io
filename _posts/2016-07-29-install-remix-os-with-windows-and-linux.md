---
  layout: post
  title: Install Remix OS with Windows and Linux
  tags: remix os windows linux
  categories: system
---

[Remix OS](http://www.jide.com/remixos) is a refined version of Android which aims at removing boundaries between mobile and PC devices. <!--excerpt-->It provides you with capabilities of Android together with features that usually found on desktop operating systems like Windows and Linux.

In my case, I use Linux as main working system, meanwhile I also have Windows to serve as my backup system. Then I'm going to load Remix OS for entertainment (tons of Android apps).

## Environment

```
/dev/sda1 -> Windows 10 boot
/dev/sda2 -> Windows 10
/dev/sda3 -> Unallocated Space for Remix OS
/dev/sda5 -> Ubuntu 16.04.1 /
/dev/sda6 -> Ubuntu 16.04.1 /home
/dev/sda7 -> Linux swap
```

## Goal

I want to install Remix OS on /dev/sda3 while using current GRUB2 in MBR to load it.

## Hands On

### Prepare Partition

Let's boot into Windows first.

We have /dev/sda3 available as Unallocated Space, so we need to format it so that Remix OS can recognize it when installing.

You can use the Windows built-in Disk Management tool or whatever 3rd-party tools you like to format it in **FAT32** or **NTFS** since Remix OS support both.

In my case, I only have `C:` in Windows 10, so the new partition will be `D:`.

### Prepare Files

Download Remix OS zip file from their [website](http://www.jide.com/remixos).

Unzip the file and you will see a readme file, an iso file and an installation tool (an exe file which only runs on Windows).

There is a way to even extract the iso file to manually boot from them to install, but since the offical zip file comes with the Windows version of installation tool, we are going to use it to make it easier.

### Install Remix OS

Simply run the installation tool. Pick the iso file and choose the new partition you created (here it's `D:`) and install.

Upon finish, it'll ask you to reboot the system. Since till now Remix OS is installed under Windows, the boot menu is also subject to Windows which creates a boot up path like this: **GRUB2 -> Windows -> Remix OS**. Go ahead and follow the path to boot into Remix OS.

The first time you boot, Remix OS will prepare the disk partition and load system and applications. After that, finish the welcome wizard and that's it.

### Create Boot menu

Now we have Remix OS installed, we want to make a new standalone boot menu for it so that we can boot into it directly from our current GRUB2.

First reboot the system into Linux.

Open the config file to add new entry:

```
$ sudo gedit /etc/grub.d/40_custom
```

Add a new entry as follows:

```
menuentry 'Remix OS' --class android-x86 {
    insmod part_msdos
    insmod ntfs
    set root='hd0,msdos3'
    linux /RemixOS/kernel root=/dev/ram0 androidboot.hardware=remix_x86_64 androidboot.selinux=permissive quiet SERIAL=random logo.showlogo=1 SRC=RemixOS/ DATA= CREATE_DATA_IMG=1
    initrd /RemixOS/initrd.img
}
```

You don't have to write it all on your own because you can copy most of the content from an existing file found at `/RemixOS/menu.lst` on the Remix OS partition.

Since the `menu.lst` is an old style boot menu for GRUB version 0.x and GRUB2 is using different gramma, we need to alter it like above.

**Some explanations:**

* The two `insmod` command loads MBR and NTFS support.
* Replace `find --set-root /RemixOS/kernel` with `set root='hd0,msdos3'`. Here `hd0,msdos3` means disk 1, MBR partition table, partition 3 (/dev/sda3).

Save the file and run the following command to update GRUB:

```
$ sudo update-grub
```

When finished, reboot your system and you will see a new entry called **Remix OS** in the boot menu, enjoy!
