var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;// objects created for respected classes

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();//it will reffer in firebase for database
  game = new Game(); // game object is calling the game class 
  game.getState(); 
  game.start();
}


function draw(){
  if(playerCount === 4){      //gameState will set to 1 from 0,when all the four players entered their names
    game.update(1);
  }
  if(gameState === 1){    //when gamestate is PLAY(1) , then call the function play.
    clear();
    game.play();
  }
  if(gameState === 2){    //game ENDS
    game.end();
  }
}
