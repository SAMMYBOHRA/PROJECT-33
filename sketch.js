var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  
var particle;
var particles = [];
var plinkos = [];
var divisions =[];

var line;

var divisionHeight=300;

var gameState = "PLAY";

var count = 0;
var score =0;

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <=width; j=j+50){
       plinkos.push(new Plinko(j,75));
 }

  for (var j = 50; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,175));
  }

  for (var j = 75; j <=width; j=j+50){
       plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,375));
  }

}
 


function draw() {
  background(0);

  Engine.update(engine);

  textSize(35)
  text("SCORE : " +score ,20,40);
  fill(255)
  
  textSize(35)
  text("500",7,550);
  text("500",87,550);
  text("500",167,550);
  text("500",247,550);
  text("100",327,550);
  text("100",407,550);
  text("100",487,550);
  text("200",567,550);
  text("200",647,550);
  text("200",727,550);

  ground.display();

  if(gameState == "END"){
    background("black");
    fill("red");
    textSize(100);
    text("GAME OVER",200,400);

  }
  

   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }

   if(particle!=null){
    particle.display();

    if(particle.body.position.y>760){
       if(particle.body.position.x < 300){
         score = score + 500;
         particle=null;
         if( count >= 5)gameState= "END";
       }
    }
  }

  if(particle!=null){
    particle.display();

    if(particle.body.position.y>760){
       if(particle.body.position.x < 600 && particle.body.position.x > 301){
         score = score + 100;
         particle=null;
         if( count >= 5)gameState= "END";
       }
    }
  }

  if(particle!=null){
    particle.display();

    if(particle.body.position.y>760){
       if(particle.body.position.x < 900 && particle.body.position.x > 601 ){
         score = score +200;
         particle=null;
         if( count >= 5)gameState= "END";
       }
    }
  }

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
}

function mousePressed(){
  if(gameState !== "END"){
    count++;
    particle = new Particle(mouseX,10,10,10);
  }
}