Pomodoro-App
=================

Link to Application
-------------------

http://ilitvak.github.io/Pomodoro-App/

What was my motivation for this? 
-------------------
This project is based on a very [Pomodoro-Technique](http://pomodorotechnique.com/). This project was made to increase productivity for users. You would work hard for 25min, then take a 5 min break and rinse and repeat. It's difficult for the average person to continously work on the same task without exhasting him/herself. This application gives you the necessary breaks you need to be the most productive individual you can be. I hope you enjoy it! 

is built with [AngularJS](https://angularjs.org/), [Express](http://expressjs.com/) and [Node.js](https://www.npmjs.com/) using Nitrious.io. 


Languages Used
---------------
- [HTML 5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
- [Sass](http://sass-lang.com/)
- Had some jQuery, but switched over to [AngularJS](https://angularjs.org/)

Definitions of Commands
-----------------------

**[NPM](https://www.npmjs.com/)** - Node Package Manager (Server Manager)

**[Grunt](http://gruntjs.com/)** - looks for files using a defined pattern so that it knows what to compile and copy and where to put it. To edit the files that Grunt watches, look at the array of files in the watch task in [Gruntfile.js](https://github.com/carmenvkrol/bloc-pomodoro/blob/master/gruntfile.js)



Installation Steps:
-------------------

You should already have [Node.js](https://www.npmjs.com/) installed before cloning.


Start by cloning the repository.

`$git clone https://github.com/ilitvak/bodybyyou.git`


This application uses [Grunt](http://gruntjs.com/) to run tasks.  Install the Grunt Command Line Interface (`grunt-cli`) locally on your machine.


`$ npm install -g grunt-cli`

Once that's complete, install the remaining project dependencies by running

`$ npm install`

Running the Application
------------
Two tabs must be open in the terminal in order to run this application.

In one tab, run

`$ npm start`

In the second tab, run

`$ grunt`

The application runs on port 3000 - configured in the [`Gruntfile.js`]. To change the port, modify the number highlighted below

```js
connect: {
  server: {
    options: {
      // Change this value here to the desired port number
      port: 3000,
      hostname: 'localhost',
      base: './dist',
      useAvailablePort: true
    }
  }
}
```

Screenshots
-----------

![Imgur](http://i.imgur.com/9B1AWvO.png)

![Imgur](http://i.imgur.com/G8nvkIc.png)

![Imgur](http://i.imgur.com/P4Gq2CZ.png)
