

<div class="header">
  <img src="https://cdn.bulbagarden.net/upload/9/9e/PCP063.png" alt="logo" style=".header img {float: left;width: 100px;height: 100px;background: #555;}" />
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
    //built in Abra asset load function and Abra object creator.
    eval("(" + JSON.parse(document.getElementById("phaserConfig").getAttribute('value')).assets.abraCommands.abraLoad + ")")(false); 
  },
  create: function () {
    this.state.start('HomeState');
  }
};
```

You can also use Abra to extend configration. Create sprites easily, and hide the front end code. Build objects the completely build sprites without writing any Phaser code at all!

Features
<ul>
  <li>Easy Express Web Server - Ready to run Phaser anywhere you want it! </li>
  <li>Auto Asset Load</li>
  <li>Hide Configuration/Phaser code</li>
  <li>Extend Phaser Code</li>
  <li>Custom Templates and variables</li>
  <li>Math equations for auto loading of sprites </li>
  <li>Black listing of assets</li>
</ul>