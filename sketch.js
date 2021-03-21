const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var polygon;

function preload() {
  polygon_img = loadImage("polygon.png");
}

function setup() {
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world

  ground = new Ground(400,400,800,20);
  stand = new Ground(400,200,210,20);

  //level one
  block1 = new Box(200,275,30,40);
  block2 = new Box(220,275,30,40);
  block3 = new Box(240,275,30,40);
  block4 = new Box(260,275,30,40);
  block5 = new Box(280,275,30,40);
  block6 = new Box(300,275,30,40);
  block7 = new Box(300,275,30,40);

  //level two
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);

  //level three
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);

  //top
  block16 = new Box(390,155,30,40);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  SlingShot = new SlingShot(this.polygon,{ x: 100, y: 200});

  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

  Engine.run(engine);
}

function draw() {
  background(56, 44, 44);
  ground.display();
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  SlingShot.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  SlingShot.fly();
}