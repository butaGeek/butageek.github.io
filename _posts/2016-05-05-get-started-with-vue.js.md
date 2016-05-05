---
  layout: post
  title: Get Started with Vue.js
  tags: 
  categories: Vue.js
---

## Introduction

[Vue.js](https://vuejs.org/) is another front-end **MVVM** (Model-View-ViewModel) inspired by AngularJS 1.x, but aiming to solve the problems in AngularJS. <!--excerpt-->It can be used as **View** only together with other back-end framework easily or work with other tool chain to build a **SPA** (Single Page Application).

## Resources

To get started, [here](https://scotch.io/tutorials/build-an-app-with-vue-js-a-lightweight-alternative-to-angularjs) is a perfect example how to build a simple Vue.js app from scratch.

Due to recent changes of Vue.js, there are codes we need to tweak to make the app work. Here we go!

## Fixes

In *index.html*

The `v-on="click: addEvent"` has been changed into `v-on:click="addEvent"`, so do `v-on="click: deleteEvent($index)"`.

When iterating events, `v-repeat="event in events"` should be changed into `v-for="event in events"`.

In *app.js*

Instead of using the `fetchEvents` callback in the `ready` function to initialize the `events` array, a better way (according to the sample from [Vue.js Guide](https://vuejs.org/guide/index.html)) is to put the initial events array right in the `data: {}` hash.

Besides, you should now use `this.events.splice(index, 1)` instead of `this.events.$remove(index)` to delete event.

## Review

So let's go over the whole process which is up-to-date.

**Step 1**

Install vue, vue-resource (optional), and bootstrap (optional)

`npm install vue vue-resource bootstrap`

**Step 2**

Create *index.html* and *app.js*

`touch index.html app.js`

**Step 3**

Fill in *index.html* as follows:

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Vue.js Demo</title>
  <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
</head>
<body>
  <!-- navigation bar -->
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <a class="navbar-brand"><i class="glyphicon glyphicon-bullhorn"></i> Vue Events Bulletin Board</a>
    </div>
  </nav>

  <!-- main body of our application -->
  <div class="container" id="events">

    <!-- add an event form -->
    <div class="col-sm-6">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3>Add an Event</h3>
        </div>
        <div class="panel-body">
          <div class="form-group">
            <input class="form-control" placeholder="Event Name" v-model="event.name">
          </div>
          <div class="form-group">
            <textarea class="form-control" placeholder="Event Description" v-model="event.description"></textarea>
          </div>
          <div class="form-group">
            <input type="date" class="form-control" placeholder="Date" v-model="event.date">
          </div>
          <button class="btn btn-primary" v-on:click="addEvent">Submit</button>
        </div>
      </div>
    </div>

    <!-- show the events -->
    <div class="col-sm-6">
      <div class="list-group">
        <a href="#" class="list-group-item" v-for="event in events">
          <h4 class="list-group-item-heading">
            <i class="glyphicon glyphicon-bullhorn"></i> 
            {{ event.name }}
          </h4>
          <h5>
            <i class="glyphicon glyphicon-calendar" v-if="event.date"></i> 
            {{ event.date }}
          </h5>
          <p class="list-group-item-text" v-if="event.description">{{ event.description }}</p>
          <button class="btn btn-xs btn-danger" v-on:click="deleteEvent($index)">Delete</button>
        </a>
      </div>
    </div>
  </div>

  <script src="node_modules/vue/dist/vue.js"></script>
  <script src="node_modules/vue-resource/dist/vue-resource.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

Fill in *app.js* as follows:

```javascript
new Vue({
  // We want to target the div with an id of 'events'
  el: '#events',

  // Here we can register any values or collections that hold data
  // for the application
  data: {
    event: { name: '', description: '', date: '' },
    events: [
    {
      id: 1,
      name: 'TIFF',
      description: 'Toronto International Film Festival',
      date: '2015-09-10'
    },
    {
      id: 2,
      name: 'The Martian Premiere',
      description: 'The Martian comes to theatres.',
      date: '2015-10-02'
    },
    {
      id: 3,
      name: 'SXSW',
      description: 'Music, film and interactive festival in Austin, TX.',
      date: '2016-03-11'
    }
    ]
  },

  ready: function() {},

  methods: {
    addEvent: function() {
      if(this.event.name) {
        this.events.push(this.event);
        this.event = { name: '', description: '', date: '' };
      }
    },

    deleteEvent: function(index) {
      if(confirm("Are you sure you want to delete this event?")) {
        this.events.splice(index, 1);        
      }
    }
  }
});
```

Now launch your app and you are good to go!

## Important Notes

You may noticed that here we put `script` tags at the end of the `body` section in *index.html*. [Here](https://developer.mozilla.org/en-US/Learn/HTML/Howto/Use_JavaScript_within_a_webpage) is the reason why:


```
In many cases it's a good idea to put your <script> elements at the end of your HTML document (right before the </body> closing tag).

Loading and running scripts is blocking and immediate. That means, every time the browser comes across a <script> element, the browser stops reading the HTML and instead loads and runs the script. The browser continues reading and rendering the HTML code after running the script.

When you put <script> elements at the end, you don't run the risk of manipulating DOM nodes that are not yet initialized. In addition, your webpages will finish displaying faster.
```
