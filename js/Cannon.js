class Cannon {
    constructor(x,y,width,height,angle){
        // parametros do canhao
        this.x = x;
        this.y = y;
        this.largura = width;
        this.altura = height;
        this.angulo  = angle;

        this.baseImg = loadImage("../assets/cannon_base.png");
        this.tuboImg = loadImage("../assets/CANON.png");
    }

    
    mostrar(){
       

       
       
       
        if (keyIsDown(RIGHT_ARROW)&& this.angulo<40){
            this.angulo = this.angulo+1;

       }

       if (keyIsDown(LEFT_ARROW)&& this.angulo>-53){
           this.angulo = this.angulo-1;
       }



        push();
        translate(this.x,this.y);
        rotate(this.angulo);
        imageMode(CENTER);
        image(this.tuboImg,0, 0, this.largura, this.altura);
        pop();

        // base do canhao
        image(this.baseImg, 70,20,200,200);
        
    
    
    
    
    
    }
}
