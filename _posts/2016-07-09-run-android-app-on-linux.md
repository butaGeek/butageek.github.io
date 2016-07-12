---
  layout: post
  title: Run Android App on Linux
  tags: android linux
  categories: software
---

Sometimes you might need to run Android apps on Linux. There are lots of ways to achieve that goal by using a virtual machine<!--excerpt-->, a game simulator, or screen mirroring from your tablet or smart phone, but now there are better ways to do it.

There are two ways to install your favorite Android app and they both make use of your Chrome browser. We will cover both here.

## Use ARChon

ARChon is an Android runtime which works within desktop version of Chrome as an app providing other Android apps the running environment needed.

### Preparation

You need following tools to make this happen:

1. Chrome browser (on developer channel)

2. ARChon (Android runtime)

3. ARChon Packager (apk file converter)

### Install Chrome

Go to [Chrome Release Channels](https://www.chromium.org/getting-involved/dev-channel) and click `Dev channel` under `Linux` section to download.

After downloaded, click to open the installer using your default package manager and install it by following the wizard.

### Install ARChon

Go to [chromeos-apk](https://github.com/vladikoff/chromeos-apk/releases) repository to download ARChon zip file according to your system architecture.

Unzip the file after finish downloading, rename the folder to `archon` (or any name you want).

Under your `Home` directory, create a folder called `app` (or any name you what).

Move the `archon` folder into `app`.

Open your Chrome dev, go to `More tools > Extensions`, Click to enable `Developer mode`. Then click `Load unpacked extension…`.

Find and choose the extracted `archon` folder and click `Open`. You'll see the `ARChon Custom Runtime` appear in the Extensions list.

### Use ARChon Packager

In order to install Android app, we need to first build the app into apk file. ARChon Packager is an app that can that can build apk files automatically. You can [install](https://play.google.com/store/apps/details?id=me.bpear.archonpackager) from Google Play.

After you ARChon Packager is installed, open the app and follow the wizard to build the apk file from either installed app or existing apk file. Choose your preferred way to share the apk file so that you can use it on your Linux desktop.

### Install App in Chrome

Locate your newly exported apk zip file, extract it, and move the app folder into `app` folder.

Open your Chrome dev, go to `More tools > Extensions`, Click to enable `Developer mode`. Then click `Load unpacked extension…`.

Choose the app folder you extracted and click `Open`. Now the app is installed.

### Run the app

In Chrom dev, go to `chrome://apps/`, and click the app you want to run.

## Use ARC Welder (Recommended)

Using ARC Welder is a more convenient way to install Android app in Chrome. In essence, it's also using the Android runtime under the hood but saves some manual work. For more information, check out [Getting Started with ARC](https://developer.chrome.com/apps/getstarted_arc).

### Preparation

You need following tools to make this work:

1. Chrome browser (on developer channel)

2. ARC Welder (Android app testing tool using Android runtime)

3. apk file

### Install Chrome

Chrome install is exactly the same as using ARChon.

### Install ARC Welder

Go to [ARC Welder](https://chrome.google.com/webstore/detail/arc-welder/emfinbmielocnlhgmfkkmkngdoccbadn) app page on chrome web store and install. This will take a while since this app also installs the Android runtime for you.

Upon finish, you will see ARC Welder sits in `chrome://apps/` and also `App Runtime for Chrome (Beta)` in `chrome://extensions/`.

From `Apps`, click to run ARC Welder. Upon first run, it'll ask you to select a directory to write files. Here I chose `~/app`.

Now you will see it asks you to add an apk file.

### Get apk file

There are lots of ways to get the apk file for a specific app, by either converting the already installed app on your Android device, or downloading from a 3rd-party website (and you can find bunch of them from google). Here we use the latter.

The website we are going to use is [apkpure.com](https://apkpure.com/). Simply search for the app you want and download the apk file.

### Install apk and run

Switch back to ARC Welder, click `Add your APK`, select the apk file you just downloaded and open, then you'll see a new page providing several settings. Choose the settings that fit your needs and click `TEST` to run. This process basically converts the apk file into a Chrome app.

Now you are good to go. You can also close the Chrome browser and ARC Welder app when running your installed app.
