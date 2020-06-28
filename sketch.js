const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var engine, world;
var side1, side2, side3;
var paper, ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    dustbin = new Dustbin();

    ground = new Ground(600,390,1200,20, "brown");

    paper = new Paper(200,200,40);

}

function draw(){
    background("lightblue");
    Engine.update(engine);

    dustbin.display();

    ground.display();

    paper.display();
   
}

function keyPressed (){
    if (keyCode==UP_ARROW){
        Matter.Body.applyForce(paper.body, paper.body.position, {x:85,y:-85});
    }
}