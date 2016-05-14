---
  layout: post
  title: Run Rails on PostgreSQL
  tags:
  categories: rails database postgresql
---
## Introduction

Ruby on Rails ship with a small database called [sqlite3](https://www.sqlite.org/) by default, but it's not ideal for production grade database.<!--excerpt--> [PostgreSQL](http://www.postgresql.org/) is an advanced, open source object-relational database system which has the main goal of being standards-compliant and extensible.

In order to user PostgreSQL, you need either use PostgreSQL when starting a new Rails app, or convert existing application manually.

## Use PostgreSQL

### Create a new app

Run command:

```
$ rails new database_name -d postgresql
```

This will install the `pg` gem in your `Gemfile` and write the correct `config/database.yml` configuration locally.

### Convert existing app

Open `Gemfile` and remove this line:

```
gem 'sqlite3'
```

Replace with this line:

```
gem 'pg'
```

Then run:

```
$ bundle install
```

**Note:** If you encounter `Gem::Ext::BuildError: ERROR: Failed to build gem native extension` error, it's probably because you don't have PostgreSQL installed and the system lacks `libpq-dev` package.

To solve this, run:

```
$ sudo apt-get update && sudo apt-get install postgresql libpq-dev
```

Then open `config/database.yml` which look something like this:

```
default: &default
  adapter: sqlite3
  pool: 5
  timeout: 5000

development:
  <<: *default
  database: db/development.sqlite3

test:
  <<: *default
  database: db/test.sqlite3

production:
  <<: *default
  database: db/production.sqlite3
```

Change the adapter from:

```
adapter: sqlite3
```

to:

```
adapter: postgresql
```

You also need to change the `database:` to a custom name, it'll be something like this:

```
default: &default
  adapter: postgresql
  pool: 5
  timeout: 5000

development:
  <<: *default
  database: mydb_development

test:
  <<: *default
  database: mydb_test

production:
  <<: *default
  database: mydb_production
```

Now you need to create and migrate any existing database.

```
$ rake db:create
$ rake db:migrate
```

**Note:** If you get `FATAL:  role "your_username" does not exist` error, that is because there is no role for the current user.

In order to create a role, you have to switch your current user to `postgres` by running:

```
$ sudo su postgres
```

Then run:

```
$ createuser -s your_username
```

The `-s` flag will create a super user.

## After Words

Check out [more details](https://devcenter.heroku.com/articles/sqlite3) on Heroku.
