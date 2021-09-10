const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;
var computerArchr, playerArchr;
var computerArrow, playerArrow;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  //Create Player Archer Object
  playerArchr = new PlayerArchr(340, playerBase.body.position.y - 185, 120, 120);


  computerBase = new ComputerBase(width - 300, random(450, height - 300), 180, 150);
  computer = new Computer(width - 280, computerBase.body.position.y - 153, 50, 180);
  computerArchr = new ComputerArchr(width - 340, computerBase.body.position.y - 185, 120, 120);
  
  //Create an arrow Object
  playerArrow = new PlayerArrow(playerArchr.body.position.x, playerArchr.body.position.y, 100, 10);
  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
  fill("navy");
  text("Space = shoot", width/2, 1200);
  text("W = up", 85, height - 1250);
  text("S = down", 105, height - 1200);
  text("O = up", 2418, height - 1250);
  text("L = down", 2445, height - 1200);

  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArchr.display();
  computerArchr.display()


  //Display arrow();
  playerArrow.display();
  
  
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher
    playerArrow.shootArrow(playerArchr.body.angle);
  }
}



