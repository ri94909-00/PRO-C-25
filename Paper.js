class  Paper{

constructor(x,y,r){
var options ={

"isStatic":false,
"friction":0,
"density":1.2,
"resitution":0.3

}


this.body = Bodies.circle(x,y,r,options);

this.image = loadImage("paper.png");


this.x=x;
this.y=y;
this.r = r;





World.add(world,this.body)

}

display(){

    var paperPos=this.body.position;		
    push()
    translate(paperPos.x, paperPos.y);
    rectMode(CENTER);
    
   
    
    imageMode(CENTER);
    image(this.image, 0,0,this.r, this.r);
    
     pop();

}

}