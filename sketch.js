var PLAY = 1;
var END = 0;
var gameState = PLay;


var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var clouds, cloudImage

function preload(){
  trex = loadImage("Images/imageedit_1_4400513290.png");
}

  

function setup() {
  createCanvas(800,400);
  trex = createSprite(400, 200, 50, 50);
}

function draw() {
  background("white"); 

  trex.display();

  drawSprites();
}