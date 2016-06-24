---
  layout: post
  title: Ubuntu Fixes
  tags: ubuntu fix
  categories: system
---

## Introduction

Here is a collection of Ubuntu fixes that cover all system/software wide issues.<!--excerpt-->

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
