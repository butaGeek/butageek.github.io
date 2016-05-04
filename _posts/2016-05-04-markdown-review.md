---
  layout: post
  title: Markdown Review
  tags: 
  categories: jekyll markdown
---

Markdown is a lightweight and easy-to-use syntax for styling all forms of writing on the GitHub platform.
<!--excerpt-->

For full reference, check out [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

# Syntax

## Headers

```
# h1
```

# h1

```
## h2
```

## h2

```
###### h6
```

###### h6

## Emphasis

```
*italic*
or
_italic_
```

*italic*

```
**bold**
or
__bold__
```

**bold**

## Lists

### Unordered

```
* item 1
* item 2
  * item 2a
  * item 2b
```

* item 1
* item 2
  * item 2a
  * item 2b

### Ordered

```
1. item 1
2. item 2
3. item 3
  * item 3a
  * item 3b
```

1. item 1
2. item 2
3. item 3
  * item 3a
  * item 3b

## Images

```
![alt text](image url)
```

![alt text](http://lorempixel.com/g/200/200/)

## Links

```
[link](link url)
```

[link](http://lorempixel.com/g/200/200/)

## Blockquotes

```
>Lorem ipsum dolor sit amet.
```

>Lorem ipsum dolor sit amet.

## Inline Code

```
`code`
```

`code`

# GitHub Flavored Markdown

## Syntax Highlighting

```
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}```
```

```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

## Task Lists

```
- [x] task 1
- [x] task 2
- [ ] task 3
```

- [x] task 1
- [x] task 2
- [ ] task 3

## Tables

```
First Header | Second Header
------------ | -------------
Lorem ipsum dolor. | Lorem ipsum dolor.
Lorem ipsum dolor sit. | Lorem ipsum dolor sit.
```

First Header | Second Header
------------ | -------------
Lorem ipsum dolor. | Lorem ipsum dolor.
Lorem ipsum dolor sit. | Lorem ipsum dolor sit.


## Strikethrough

```
~~strikethrough~~
```

~~strikethrough~~

## Emoji

```
:emojicode:
```

:+1:

check out [Emoji Cheat Sheet](http://www.emoji-cheat-sheet.com/)