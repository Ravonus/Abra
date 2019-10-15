

<div class="header">
  <img src="https://cdn.bulbagarden.net/upload/thumb/6/62/063Abra.png/250px-063Abra.png" alt="logo" style=".header img {float: left;width: 100px;height: 100px;background: #555;}" />
  <h1>Abra</h1>
  <h3>Abra's got a part time job.</h3>
</div>

Abra Auto loader and server for Phaser.

Auto load assets into phaser and run it as well. Stop messing around with the backend and writing asset files into your code. Abra works with all types of files. It will auto load anything you want it too. Some files just require a bit of extra love. 


Turn your preload asset code into easy auto loaded assets. Abra grabs asset files automagically. He can grab most assets without any instructions, but can also grab spritesheets and atlas with simple configuration file.

Your preload could look like this. Try Abra today and turn your code into functional easy design. Abra also protects your code by obscurity. If javascript is copied. User does not have asset list, or any actual phaser code used to load assets.
```javascript
var PreloadState = {
  preload: function () {
    //built in Abra asset load function and Abra object creator. Send true flag to use directory listing for asset names. directory-assetname. False = just Asset name for sprite. Warning this can result in images with the same name to have the same sprite name.
   Function.apply(null, ['dirAdd', JSON.parse(document.getElementById("phaserConfig").getAttribute('value')).abraLoad])(false);
  },
  create: function () {
    this.state.start('HomeState');
  }
};
```
<p>This is to show you how you would extend actual phaser functions from Abra into Phaser. This object creates multiple of the same sprites in different locations based off a math problem I gave the config file. </p>

```javascript
var GameState = {
  create: function () {
    Function.apply(null, ['spriteAttributes',  game.phaserConfig.abraCreate])(game.phaserConfig.assets.createMenu);
  },
  update: function () {

  },
  render: function () {

  }
};

```

You can also use Abra to extend configration. Create sprites easily, and hide the front end code. Build objects the completely build sprites without writing any Phaser code at all!

 <h1>Features</h1>
<ul>
  <li>Easy Express Web Server - Ready to run Phaser anywhere you want it! </li>
  <li>Auto Asset Load</li>
  <li>Hide Configuration/Phaser code</li>
  <li>Extend Phaser Code - Currently create object function.</li>
  <li>Custom Templates and variables</li>
  <li>Math equations for auto loading of sprites </li>
  <li>Black listing of assets</li>
  <li>Auto Server restart on asset Changes - right now uses nodemon. Actual Socket.IO client updates could come in the future.(npm run watch) for current wach command.</li>
  <li>Auto Array building</li>
  <li>Custom Functions</li>
  <li>Socket Functionality - To support multiplayer.</li>
  <li>Gui Dashboard</li>
  <li>Phaser auto updater</li>
  <li>Multi-game support for one server</li>
</ul>

<h1>Working on</h1>
<ul>
<li>GUI Dashboard. To add new projects. Or check out or edit certain aspects.</li>
<li>JSON Config Generator (Working on)</li>
<li>Better configurations (Working on)</li>
<li>Better Math functionality</li>
<li>Plugin system</li>
<li>Socket.io connections - Create custom methods to send custom abra data specific to the user. Example could use a login system and actually let users upload their own images. You would not have to</li> <li>change phasers logic at all. Just socket.io check that would change the object to said users asset folder.</li>
</ul>

 <h1>To Add</h1>
 <ul>
 <li>Scratch Coding</li>
<li>More pre built phaser extended functions</li>
<li>API Method (To use with current web servers, instead of using Abra to host game as well)</li>
<li>Game example that shows full functionality of Abra.</li>
<li>Stand alone node module</li>
<li>More configurations. Example - set file types for phaser - even down to the specific asset.</li>
<li>Easy test method. Test Abra and make sure its grabbing all the configurations,etc. So you don't have to take time troubleshooting the client. Abra will tell you what files are being served/blacklisted/configs you have/etc.</li>
</ul>

<h1>Install Instructions</h1>
<p>Just download files. Via zip,clone,etc. CD into directory. Run npm i. Once all modules downloaded. Then run npm start<p>
<p>You can change port and other server configurations within the main config.json. This will be in the first Directory. </p>

<h1>How to?</h1>
<p>Using Abra is simple and easy. Abra autoload simply needs to be given a folder to look at. By default its set to /public/assets. This can be changed in the config file though. </p>
<p>Once Abra has this. Autoloading is ready to go. Abra will then teleport all the assets He finds into phaser. You can verify this by looking at your network tab and seeing sprites load </p>
<p>Abra does need a built in command in order to preload - This is already in the basic Phaser template that comes with Abra </p>

```javascript
var spriteDirectoryLoad = true; // This tells abra to put the sub directory infront of the asset name or not. Having this enabled can be usefull if same asset names are being used within project.
Function.apply(null, ['dirAdd', JSON.parse(document.getElementById("phaserConfig").getAttribute('value')).abraLoad])(spriteDirectoryLoad);
```

<p>This is all you need to extend Abra into phaser. If you have custom configs - This pre load also will load them now </p>

<p>Abra also lets you use custom configs. You can create/destroy/or virtually do any Phaser code within Abra. Abra will push the code into a phaser object when it starts the server. Abra also one built in phaser function. It is the create sprite function. You can create sprites - and do anything you would in phaser to them. Right with a JSON config file!. </p>

<p>Here is a JSON  file used to load spritesheets and other moveable assets. You must tell Abra about these assets with a config, or it will think its a normal image file.</p>

```JSON
{
	"samuraisheet": {
		"height": 82,
		"width": 109
},
	"p1-running2": {
		"height": 120,
		"width": 120
	},
	"seacreatures_json": {
		"atlas": true
	},
	"seacreatures": {
		"atlas": true
	},
	"test": {
		"atlas": true

	}
}
```

<p>Next is a custom config file. It is an object that can be pushed right to Abra pre created asset funtion. Resulting in creating multiple objects with multiple attributes with one single line of code. You also will see the math functionality and the custom variable replacement. Resulting in much less code being written. Each time a math equation hits one of its replacements it will add that number to last. You can also tell the system to wait so it only does the equation X amount of times. 1+1_4 would mean do 1+1 every 4 times. so the first four would be 2. Then the 5th would be 3,etc.</p>

```JSON
{
  "variables": {
    "{scaleFunction}": 0.7,
    "{scale}": 1,
    "{scale2}": 2,
    "{poop}": 1,
    "{y}": 500,
    "{x}": 1000,
    "{anchor}": 0.6,
    "{test}": "Test",
    "{test2}": "test2",
    "{testMath}": "0+25",
    "{testMath2}": "0+200_10",
    "{mx}": "0+200",
    "{my}": "50+0+1*2_2",
    "{mro}": "2*2_1"
  },
  "createMenu": {
    "sprite1" : {
      "position":{
        "x":100,
        "y": 500
      },
      "anchor": {
        "x":0.5,
        "y":0.5
      },
      "scale": {
        "x": 5,
        "y": 5
      },
      "angle":45
    },
   
    "sprites-spinner2" : {
      "anchor": {
        "x": "[{anchor}]-8", <-- Auto create arrays. This would create 8 anchor points for spinner2. You could replace all the arrays with this logic so you did not have to write each array placement. It also wil do the math like normal within the placement.
        "y": [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5]
      },
      "position":{
        "x": ["{mx}","{mx}","{mx}","{mx}","{mx}","{mx}","{mx}","{mx}"],
        "y": ["{my}","{my}","{my}","{my}","{my}","{my}","{my}","{my}"]
      },
      "scale": {
        "x": [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        "y": [1]
      },
      "angle": ["2{mro}","3{mro}","4{mro}","5{mro}","6{mro}","7{mro}","190", "8{mro}"]
  }
    },
    
  "spritesheet2": {
    "sprite1" : {
      "height": "{testMath}",
      "width": "{testMath}",
      "width2": "{testMath}",
      "width3": "{testMath}",
      "width4": "{testMath2}"
    }
    
  },
  "loopCreate":{
    "spinner2": {
      "name": "spinner2",
      "x": ["{mx}","{mx}","{mx}","{mx}","{mx}","{mx}"],
      "y": ["{my}","{my}","{my}","{my}","{my}","{my}"]
    }
  }
}
```
Turn this!!


```JSON
    "{mx}": "48+48_1-480_10",
    "{my}": "100+48_10",
 
    "sprites-qbox" : {
      "anchor": {
        "x": "[0.5]-100",
        "y": "[0.5]-100"
      },
      "position":{
        "x": "[{mx}]-100",
        "y": "[{my}]-100"
      }
  }
  ```

  Into this

  <img src="https://cdn.discordapp.com/attachments/244245946873937922/405759970072723458/100grid.PNG"/>