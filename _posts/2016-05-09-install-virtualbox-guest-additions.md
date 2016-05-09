---
  layout: post
  title: Install VirtualBox Guest Additions
  tags:
  categories: virtualbox
---
**On Debian**

<!--excerpt-->

```
# apt-get install dkms
# mount /dev/cdrom /media/cdrom
# /media/cdrom/VBoxLinuxAdditions.run
# umount /media/cdrom
```
**On CentOS**

```
# yum install gcc kernel-devel kernel-headers bzip2
# mkdir /media/cdrom
# mount /dev/cdrom /media/cdrom
# /media/cdrom/VBoxLinuxAdditions.run
# umount /media/cdrom
```
