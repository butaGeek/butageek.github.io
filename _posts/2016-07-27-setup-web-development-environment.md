---
  layout: post
  title: Setup Web Development Environment
  tags: web development
  categories: system
---

Here's a full guide of configuring development environment mostly for front-end development.<!--excerpt-->

## System Environment

**Linux:** Ubuntu 16.04.1 LTS

## Install Git

Installing Git is pretty much simple as follows:

```
$ apt-get install git
```

## Install Node.js

Since we are using Linux, it's better to install Node.js via package manager than using the source code.

The current version in Ubuntu repository is 4 at the time this article is written but we are going to use version 6 according to the [official document](https://nodejs.org/en/download/package-manager/):

```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
```

and then

```
sudo apt-get install -y nodejs
```

***Optional***: install build tools

To compile and install native addons from npm you may also need to install build tools.

**Note:** Ubuntu 16.04.1 LTS already has `build-essential` package loaded. If you find it's missing on your system, install as follows:

```
sudo apt-get install -y build-essential
```

You can then verify if nodejs and npm are installed by running:

```
$ node -v
```

and

```
$ npm -v
```

## Install Ruby on Rails

### Install Ruby

There are several ways of installing Ruby. On Linux, we can either use the package management system of your distribution or third-party tools, like rbenv and RVM.

Here we will include both ways of doing it.

#### Use Package Management System

Install dependencies for Ruby

```
$ sudo apt-get install ruby-dev zlib1g-dev
```

Run following command to install ruby from the repository:

```
$ sudo apt-get install ruby
```

You can verify the Ruby version when finished:

```
$ ruby -v
```

#### Use rbenv

Installing rbenv is more complicated than grabbing it from the repository, but in this way, you can keep different Ruby versions on your system and use a certain version for a specific project.

Install dependencies for Ruby

```
$ sudo apt-get update
$ sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties libffi-dev
```

Install rbenv

```
$ git clone https://github.com/rbenv/rbenv.git ~/.rbenv
$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.profile
$ echo 'eval "$(rbenv init -)"' >> ~/.bashrc
$ echo 'eval "$(rbenv init -)"' >> ~/.profile
$ exec $SHELL

$ git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
$ echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
$ echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.profile
$ exec $SHELL
```

Install Ruby

At the time this article is written, the latest Ruby version is `2.3.1`, so we need to tell `rbenv` which version to install:

```
$ rbenv install 2.3.1
```

set up the current ruby version as default

```
$ rbenv global 2.3.1
```

And that's it!

### Install Bundler

Bundler is a tool to manage gems and versions for Ruby projects.

To install, simply run following command:

```
$ sudo gem install bundler
```

You can check Bundler version by running:

```
$ bundler -v
```

### Install Rails

Rails is an MVC framework that capable of building full-stack projects.

Run following command:

```
$ sudo gem install rails
```

Check version information by running:

```
$ rails -v
```
