const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var engine, world,ground;
var savefundo;
var torre, torreimagem;
var canhao;
var angulo;
var boatspritedata,boatspritesheet;

var boatanimation = [];
var bolas = [];
var barcos = [];


function keyPressed(){
    if (keyCode===DOWN_ARROW){
        var bola=new Cannonball(canhao.x,canhao.y);
        bolas.push(bola);

    }



}
function showbarcos(){
    if(barcos.length>0){
        if(barcos[barcos.length-1]===undefined||barcos[barcos.length-1].body.position.x<width-300){
            var posicoes=[-40,-60,-70,-20];
            var posicao=random(posicoes);
            var barco=new Boat(width,height-60,170,170,posicao)
            barcos.push(barco);
        }
        for(var i=0;i<barcos.length;i++){
            if(barcos[i]){
                Matter.Body.setVelocity(barcos[i].body,{x:-0.9,y:0});
                barcos[i].display();
                barcos[i].animate();
            }
        }
    
    
    }
    else{
        var barco=new Boat(width,height-60,170,170,-60);
        barcos.push(barco);
    }



}


function colisaobarcos(index){
    for(var i=0;i<barcos.length;i++){
        if(bolas[index]!==undefined && barcos[i]!==undefined){
            var colisao=Matter.SAT.collides(bolas[index].body,barcos[i].body);
            if(colisao.collided){
                barcos[i].remove(i);
                World.remove(world,bolas[index].body);
                delete bolas[index];
            }
        }



    }


}



function showcannonball(bola,index){
    if(bola){
        bola.display();
        console.log(bola.body.position.y)
        if(bola.body.position.x>width||bola.body.position.y>height-50){
            bola.remove(index)


        }
    }



}


function keyReleased(){
    if (keyCode===DOWN_ARROW){
        bolas[bolas.length-1].atirar();
        
    }


}

function preload() {
    savefundo=loadImage("./assets/background.gif");
    torreimagem=loadImage("./assets/tower.png");
    boatspritedata=loadJSON("./assets/boat/boat.json");
    boatspritesheet=loadImage("./assets/boat/boat.png");


}
function setup() {
    canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
  
    var options={
        isStatic:true
    }
    
    angleMode(DEGREES)
    angulo=20

    ground= Bodies.rectangle(0,height-1, width*2,1,options);
    World.add(world,ground);
    canhao=new Cannon(180,110,130,100,angulo);

    

    torre= Bodies.rectangle(160,350,160,310,options);
    World.add(world,torre);

    var boatframes=boatspritedata.frames;

    for(var i=0;i<boatframes.length;i++){
        var pos = boatframes[i].position;
        var img= boatspritesheet.get(pos.x,pos.y,pos.w,pos.h)
        boatanimation.push(img)
    }


}

function draw() {
    image(savefundo,0,0,1200,600);
    Engine.update(engine);
    
    rect(ground.position.x, ground.position.y,width*2,1);
    push()
    imageMode(CENTER)
    image(torreimagem,torre.position.x,torre.position.y,160,310);
    pop()
    for (var i=0;i<bolas.length;i++){
        showcannonball(bolas[i],i);
        colisaobarcos(i);

    }
    showbarcos();
    
    
    canhao.mostrar();
}






