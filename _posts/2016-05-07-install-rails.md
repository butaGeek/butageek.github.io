---
  layout: post
  title: Install Rails
  tags:
  categories: development ruby rails
---
## Environment

```
OS: Ubuntu 16.04 LTS
git: version 2.7.4
```

<!--excerpt-->

## Installation

**install dependencies for ruby**

```
$ sudo apt-get update
$ sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties libffi-dev
```

**install rbenv**

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

**install ruby**

```
$ rbenv install 2.3.0
```

**set up the current ruby version as default**

```
$ rbenv global 2.3.0
```

**install bundler**

```
$ gem install bundler
```

**install rails**

```
$ gem install rails -v 4.2.6
```

**make the rails executable available**

```
$ rbenv rehash
```

**install a Javascript runtime for the Rails asset pipeline**

```
$ sudo apt-get install nodejs
```
