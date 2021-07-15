var bg,form,system,code,security;
var treasure;
var score=0;
var database;

function preload() {
 
  
  bg= loadImage("Images/Image 6.jpg")
  //load image for the treasure background
  treasure = loadImage("treasure.jpg")

  
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  security = new Security();
  system = new System();
  code = new Code();
  
  
}

function draw() {
  background(bg);
  code.clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
   

  if(score === 3) {
    clear()
    background(treasure)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}