---
  layout: post
  title: Deploy Rails App on Heroku
  tags:
  categories: rails heroku postgresql
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

Create a new app:

```
$ rails new myapp --database=postgresql
```

Then move into you app directory:

```
$ cd myapp
```

If you already have an app created without specifying `--database=postgresql`, you have to [convert the database to postgresql]({{ site.baseurl }}/rails/database/postgresql/2016/05/13/run-rails-on-postgres.html).

**Note:** If you just converted the database, you have to commit the changes so that Heroku will use the new database config:

```
$ git add .
$ git commit -m "change database"
```

## Deploy the app

Create an app on Heroku

```
$ heroku create myapp
```

When you create an app, a git remote (called heroku) is also created and associated with your local git repository.

You can verify that the remote was added to your project by running:

```
$ git config --list | grep heroku
remote.heroku.url=https://git.heroku.com/myapp.git
remote.heroku.fetch=+refs/heads/*:refs/remotes/heroku/*
```

Deploy your code:

```
$ git push heroku master
```

## Migrate the database

If you are using the database in your application you need to manually migrate the database by running:

```
$ heroku run rake db:migrate
```

You can seed the database with the following command

```
$ heroku run rake db:seed
```

Any commands after the `heroku run` will be executed on a Heroku [dyno](https://devcenter.heroku.com/articles/dynos).

##  Visit your application

Now the app is deployed and we can use the following command to open the website

```
$ heroku open
```

## After Words

Check out [more details](https://devcenter.heroku.com/articles/getting-started-with-rails4) on Heroku.
