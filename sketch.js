const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bruce

var rain = [];

function setup(){
    createCanvas(500, 700);
    engine = Engine.create();
    world = engine.world;
    bruce = new Bruce(250, 570, 100, 50);
    // bruce.addImage(bruceAni);
    // bruce.scale = 0.4;
}

function draw(){
    background(0);
    Engine.update(engine);  
    
    if(frameCount%1===0){
        rain.push(new Drops(Math.round(random(0,500)), 10, 3))
    }

    drawSprites();
    bruce.display();
    for(var i = 0; i<rain.length; i++){
        rain[i].display();
      }
}   