testObject = { test: { t: 1 }, test2: { t: 2 }, test3: { t: 3 } };

for (var key in Object.keys(testObject)) {
  spriteName = Object.keys(testObject)[key];
  console.log(testObject[spriteName].t);
}



spriteAttributes = { sprite1: { position: { y: 123 } }, sprite2: { position: { x: 50 } } };

for (var key in Object.keys(testObject)) {
  spriteName = Object.keys(testObject)[key]; // this is how you get the sprite name.. this is the other arg you were passing before..
  console.log(testObject[spriteName].position.y);
  //this is where all your code is already.. You just need to put everything between the for loop and access the objects JUST like i am doing above.
}