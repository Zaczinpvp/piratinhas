class Boat{
    constructor(x,y,largura,altura,boatpos){
        this.body=Bodies.rectangle(x,y,largura,altura);
        this.largura=largura;
        this.altura=altura;
        this.imagem=loadImage("../assets/boat.png");
        this.boatpos=boatpos;
        World.add(world,this.body);
        this.animation=boatanimation;
        this.speed=0.05;
    }

    display(){
        
        var pos=this.body.position;
        var angle=this.body.angle;
        var index=floor(this.speed%this.animation.length);
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER)
        image(this.animation[index],0,this.boatpos,this.largura,this.altura);
        pop();





    }
    remove(is){
        setTimeout(()=>{
            World.remove(world,barcos[is].body);
            delete barcos[is];
        },2000);






    }
    
    animate(){
        this.speed+=0.05




    }










}