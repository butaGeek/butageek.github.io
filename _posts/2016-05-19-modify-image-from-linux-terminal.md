---
  layout: post
  title: Modify Image from Linux Terminal
  tags: image linux terminal
  categories: software
---

[ImageMagick](http://www.imagemagick.org/script/index.php) is a command-line software suite to edit bitmap images. <!--excerpt-->In addition to basic operations like convert, resize, rotate, flip, mirror, it can also apply effects and draw text, lines, polygons, and so on.

## Installation

```
$ sudo apt-get install imagemagick
```

## Hands-on

### Convert between formats

```
$ convert image.png image.jpg
```

### Resize images

ImageMagick will try to preserve the aspect ratio and make the image to fit within the resolution you assigned.

```
$ convert image.png -resize 100x100 image.png
```

You can also only assign one param like width or height, and ImageMagick will resize to that param and keep the aspect ratio.

**for width:**

```
$ convert image.png -resize 100 image.png
```

**for height:**

```
$ convert image.png -resize x100 image.png
```

### Rotate images

```
$ convert image.png -rotate 90 image.png
```

### Batch Process

```
$ for file in *.png; do convert $file -rotate 90 rotated-$file; done
```
