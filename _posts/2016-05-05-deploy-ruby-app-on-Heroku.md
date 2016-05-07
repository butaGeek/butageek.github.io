---
  layout: post
  title: Deploy Ruby App on Heroku
  tags:
  categories: ruby heroku
---

## Introduction

[Heroku](https://www.heroku.com/home) is a cloud platform for hosting apps. It offers unlimited free container for easy app deployment. <!--excerpt-->The down side is that the free app can **only be active up to 18 hours per day**. So it's an ideal place for demo or small scale private apps.

## Environment

```
OS: Ubuntu 16.04 LTS
Ruby: ruby 2.3.0
Bundler: version 1.12.1
git: version 2.7.4
```

## Preparation

Before we move on to next section, there are some prerequisites:

* a [Heroku account](https://signup.heroku.com/dc)
* [Ruby](https://www.ruby-lang.org/en/) installed (*to be expanded*)
* [Bundler](http://bundler.io/) installed (*to be expanded*)
* [git](https://git-scm.com/) installed (*to be expanded*)

## Set up

You need to download **Heroku Toolbelt** in order to use the **Heroku Command Line Interface (CLI)**.

```
$ wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
```

Once installed, run following command to login Heroku account

```
$ heroku login
```

## Prepare the app

Prepare a local copy of the code. Here we use the [sample Heroku github repository](https://github.com/heroku/ruby-getting-started.git).

```
$ git clone https://github.com/heroku/ruby-getting-started.git
$ cd ruby-getting-started
```

## Deploy the app

Create an app on Heroku

```
$ heroku create
```

When you create an app, a git remote (called heroku) is also created and associated with your local git repository.

Now we can deploy our code

```
$ git push heroku master
```

Now the app is deployed and we can use the following command to open the website

```
$ heroku open
```

## After Words

Check out [more details](https://devcenter.heroku.com/start) on [Heroku](https://www.heroku.com/home).
