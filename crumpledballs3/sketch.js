const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var dustbin, paper,ground;
var world;


function setup(){
   createCanvas(1600,700);
   rectMode(CENTER)
   engine = Engine.create();
   world = engine.world;

   paper=new Paper (200,450,70);
   dustbin=new Dustbin(1200,650);
   ground= new Ground(width/2,670,width,20)
   
   slingshot= new SlingShot(paper.body, {x:200, y:100})

   Engine.run(engine);
}

function draw(){
    rectMode(CENTER);
  background(230);
 
  
  paper.display();
  ground.display();
  dustbin.display();
  slingshot.display();


}   

function keyPressed() {
    if (keyCode === UP_ARROW) {

      Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});

  
    }
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
 // }
}


function mouseReleased(){
  slingshot.fly();
  
}


