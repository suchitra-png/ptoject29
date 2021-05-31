const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;

var ground,miniG,miniG2
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,
box15,box16,box17,box18,box19,box20, box21,box22,box23,box24,box25;

var hexa_image,hexa;

var chain

function preload(){
    hexa_image=loadImage("Polygon.png")
}

function setup(){
    var canvas = createCanvas(800,600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(800,1000,20)
    miniG = new Ground(640,250,220,20)
    miniG2 = new Ground(330,450,250,20)

    box1 = new Box(240,425,30,30)
    box2 = new Box2(270,425,30,30)
    box3 = new Box(300,425,30,30)
    box4 = new Box2(330,425,30,30)
    box5 = new Box(360,425,30,30)
    box6 = new Box2(390,425,30,30)
    box7 = new Box(420,425,30,30)

    box8 = new Box2(270,395,30,30)
    box9 = new Box(300,395,30,30)
    box10 = new Box2(330,395,30,30)
    box11 = new Box(360,395,30,30)
    box12 = new Box2(390,395,30,30)

    box13 = new Box(3000,365,30,30)
    box14 = new Box2(3300,365,30,30)
    box15 = new Box(360,365,30,30)

    box16 = new Box(330,335,30,30)

    box17 = new Box(580,225,30,30)
    box18 = new Box2(610,225,30,30)
    box19 = new Box(640,225,30,30)
    box20 = new Box2(670,225,30,30)
    box21 = new Box(700,225,30,30)

    box22 = new Box2(610,195,30,30)
    box23 = new Box(640,195,30,30)
    box24 = new Box2(670,195,30,30)

    box25 = new Box(640,165,30,30)

    hexa=Bodies.circle(50,200,20)
    World.add(world,hexa)

    chain = new Chain(hexa,{x:150,y:200})

    Engine.run(engine)

  

}

function draw(){
    rectMode(CENTER)
    background(rgb(146,227,102));

    ground.display()
    miniG.display()
    miniG2.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()
    box21.display()
    box22.display()
    box23.display()
    box24.display()
    box25.display()

    chain.display()

    imageMode(CENTER)
    image(hexa_image,hexa.position.x,hexa.position.y,40,40)

    drawSprites();

}
function mouseDragged(){
    Matter.Body.setPosition(hexa,{x: mouseX , y: mouseY})
    
}

function mouseReleased(){
    chain.fly()
}

