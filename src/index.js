import Phaser from 'phaser';

const config = {
  //WebGL : JS library for rendering 2D and 3D graphics.
  // WebGL  (web graphics library) is utilized by this phaser framework
  type: Phaser.AUTO,  // Phaser will automatically choose the best rendering backend for your device
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',  // Phaser supports arcade physics for simple 2D games
  },
  scene:{
    preload: preload,
    create: create,
  }
}

//loading assets such as images, music, animation.....
function preload(){
  //the "this" context is our scene and contains functions and properties we can use
  //in the project. 
  this.load.image('sky', 'assets/sky.png'); //loading up the sky image and assigning it a name
  this.load.image('bird', 'assets/bird.png'); //loading up the image with the given name
}

let bird = null;

function create(){
  //x - 400
  //y - 300
  //key of the image
//this.add.image(config.width/2, config.height/2, 'sky'); //putting the image in the middle.
this.add.image(0, 0, 'sky').setOrigin(0, 0); //putting the image in the middle by setting origin.
//middle of the height, 1/10 width
bird = this.physics.add.sprite(config.width * 0.1, config.height / 2, 'bird').setOrigin(0) //setting up the position of the image in that parameter.
//bird.body.gravity.y = 200; //applying the gravity of 200px per seconds.
bird.body.velocity.y = 200;  //here you are applying the velocity of the same.
debugger
}



new Phaser.Game(config); //creating a new instance of Phaser for the game