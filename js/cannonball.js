class Cannonball{
    constructor(x,y){
        this.raio=30;
        
        var options={
            isStatic:true


        }
        this.body=Bodies.circle(x,y,this.raio,options);
        this.image=loadImage("../assets/cannonball.png");
        World.add(world,this.body);

        

    }
    display(){

        var pos=this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.raio,this.raio);
        pop();
        
    }

    atirar(){
        var newAngle = canhao.angulo - 28;
        newAngle = newAngle *(3.14/180)
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        Body.setStatic(this.body, false);
        Body.setVelocity(this.body, {
        x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});

    }

    remove(is){
        Body.setVelocity(this.body,{x:0,y:0});



        
        
        
        setTimeout(()=>{
            World.remove(world,this.body);
            delete bolas[is];
        },1000);






    }
    






}

































