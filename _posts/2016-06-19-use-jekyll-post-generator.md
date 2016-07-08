---
  layout: post
  title: Use Jekyll Post Generator
  tags:
  categories: software
---

[Jekyll](https://jekyllrb.com/) is a blog-aware static site generator. It's fast, simple, text-based, easy-to-use, locally stored, and more, <!--excerpt-->but, there's one drawback when creating a new post: you have to follow the strict naming standard to create a new post including the filename and the meta data within it.

Here comes the rescue: [jekyll-posts-generator](https://www.npmjs.com/package/jekyll-posts-generator). It's an automation tool that does all these things automatically for you.

## Installation

You need [npm](https://www.npmjs.com/) to install the package. Once you have npm installed, run following command:

```
$ sudo npm install -g jekyll-posts-generator
```

## How to use

In order to use the command, switch to your jekyll site folder first.

**Create a new post**

```
$ jposts create-post "your post name"
```

This will create a post inside the `_posts` folder with a name "[YYYY-MM-DD]-your-post-name.md". It will also fill in the meta data for you at the beginning of the file like this:

```
---
  layout: post
  title: your post name
  tags:
  categories:
---
```

You can then add your tags and categories separated by space.
