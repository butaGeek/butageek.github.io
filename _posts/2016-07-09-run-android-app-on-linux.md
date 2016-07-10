---
  layout: post
  title: Run Android App on Linux
  tags: android linux
  categories: software
---

Sometimes you might need to run Android apps on Linux. There are lots of ways to achieve that goal by using a virtual machine<!--excerpt-->, a game simulator, or screen mirroring from your tablet or smart phone, but now there's a better way to do it: using your Chrome browser.

## Preparation

You need following tools to make this happen:

1. Chrome browser (on developer channel)

2. ARChon (Android runtime)

3. ARChon Packager (apk file converter)

## Install Chrome

Go to [Chrome Release Channels](https://www.chromium.org/getting-involved/dev-channel) and click `Dev channel` under `Linux` section to download.

After downloaded, click to open the installer using your default package manager and install it by following the wizard.

## Install ARChon

ARChon is an Android runtime which works within desktop version of Chrome as an app providing other Android apps the running environment needed.

Go to [chromeos-apk](https://github.com/vladikoff/chromeos-apk/releases) repository to download ARChon zip file according to your system architecture.

Unzip the file after finish downloading, rename the folder to `archon` (or any name you want).

Under your `Home` directory, create a folder called `app` (or any name you what).

Move the `archon` folder into `app`.

Open your Chrome dev, go to `More tools > Extensions`, Click to enable `Developer mode`. Then click `Load unpacked extension…`.

Find and choose the extracted `archon` folder and click `Open`. You'll see the `ARChon Custom Runtime` appear in the Extensions list.

## Use ARChon Packager

In order to install Android app, we need to first build the app into apk file. ARChon Packager is an app that can that can build apk files automatically. You can [install](https://play.google.com/store/apps/details?id=me.bpear.archonpackager) from Google Play.

After you ARChon Packager is installed, open the app and follow the wizard to build the apk file from either installed app or existing apk file. Choose your preferred way to share the apk file so that you can use it on your Linux desktop.

## Install App in Chrome

Locate your newly exported apk zip file, extract it, and move the app folder into `app` folder.

Open your Chrome dev, go to `More tools > Extensions`, Click to enable `Developer mode`. Then click `Load unpacked extension…`.

Choose the app folder you extracted and click `Open`. Now the app is installed.

## Run the app

In Chrom dev, go to `chrome://apps/`, and click the app you want to run.
