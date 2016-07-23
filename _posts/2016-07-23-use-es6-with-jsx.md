---
  layout: post
  title: Use ES6 with JSX
  tags: es6 jsx
  categories: development
---

Here's a demo of how to use ES6 with JSX.

The tools we are using here are node, npm, and Babel. <!--excerpt-->For detail tutorial of how to use them, refer to [this article]({{ site.baseurl }}/development/2016/07/08/use-es6.html).

## Install http server

```
$ npm install --save-dev live-server
```

## Prepare project folder

Build the project folder skeleton:

```
$ mkdir es6-react-demo
$ cd es6-react-demo
$ mkdir src
$ mkdir build
$ touch src/entry.js index.html
```

Create a `package.json` file:

```
$ npm init -y
```

Update `index.html` as follows:

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>ES6 React Demo</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-with-addons.min.js" charset="utf-8"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js" charset="utf-8"></script>
</head>

<body>
  <div id="container">
    <!-- This element's contents will be replaced with your component. -->
  </div>
  <script src="build/bundle.js" charset="utf-8"></script>
</body>

</html>
```

Install Babel:

```
$ npm install --save-dev babel-cli babel-preset-es2015 babel-preset-react
```

Add new scripts in `scripts` section of `package.json` file as follows:

```
"start": "live-server",
"babel": "babel --presets es2015,react --watch src/entry.js --out-file build/bundle.js"
```

**Note:** The `--watch` flag tell Babel to compile a file every time that you change it.

Run `babel` script:

```
$ npm run babel
```

Now Babel will keep watch changes in `entry.js` file and compile it to `bundle.js` on the fly.

Update `entry.js` file as follows:

```js
var HelloMessage = React.createClass({
  render: function() {
    return <div>
      Hello {this.props.name}
    </div>;
  }
});

ReactDOM.render(
  <HelloMessage name="John"/>,
  document.getElementById('container')
);
```

Upon save, you'll see a new `bundle.js` file under `build` compiled by Babel similar to this:

```js
"use strict";

var HelloMessage = React.createClass({
  displayName: "HelloMessage",

  render: function render() {
    return React.createElement(
      "div",
      null,
      "Hello ",
      this.props.name
    );
  }
});

ReactDOM.render(React.createElement(HelloMessage, { name: "John" }), document.getElementById('container'));
```

Now we've got everything ready, just run the following command to test your React demo:

```
$ npm start
```
