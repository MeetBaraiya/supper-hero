const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(600, 100, 70, 70);
  box3 = new Box(600, 100, 70, 70);
  box4 = new Box(600, 100, 70, 70);
  box5 = new Box(600, 100, 70, 70);
  box6 = new Box(600, 100, 70, 70);


  boxs1 = new Box(700, 100, 70, 70);
  boxs2 = new Box(700, 100, 70, 70);
  boxs3 = new Box(700, 100, 70, 70);
  boxs4 = new Box(700, 100, 70, 70);
  boxs5 = new Box(700, 100, 70, 70);
 

  boxse1 = new Box(800, 100, 70, 70);
  boxse2 = new Box(800, 100, 70, 70);
  boxse3 = new Box(800, 100, 70, 70);
  boxse4 = new Box(800, 100, 70, 70);
  boxse5 = new Box(800, 100, 70, 70);
  boxse6 = new Box(800, 100, 70, 70);




  boxe1 = new Box(900, 100, 70, 70);
  boxe2 = new Box(900, 100, 70, 70);
  boxe3 = new Box(900, 100, 70, 70);
  boxe4 = new Box(900, 100, 70, 70);
  boxe5 = new Box(900, 100, 70, 70);
 













}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display();
  box6.display();

  boxs1.display();
  boxs2.display();
  boxs3.display();
  boxs4.display()
  boxs5.display();
  
  boxse1.display();
  boxse2.display();
  boxse3.display();
  boxse4.display()
  boxse5.display();
  boxse6.display();
  
  boxe1.display();
  boxe2.display();
  boxe3.display();
  boxe4.display()
  boxe5.display();
  

  rope.display();
  hero.display();

  monster.display();

}


function mouseDragged(){
  
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  rope.fly();
  
}