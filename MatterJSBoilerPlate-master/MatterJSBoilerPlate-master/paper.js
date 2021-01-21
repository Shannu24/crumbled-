class Paper{

    constructor(x,y,r){

    var options = {
        isStatic:false,
        restitution:0.6,
        friction:0.5,
        density:1.2 ,  
    }
this.paper=Bodies.circle(x,y,r,options)
this.r=r;
World.add(world,this.paper);
    }

    display(){
        var pos=this.paper.position
        ellipse(pos.x,pos.y,this.r,this.r);

    }

 }
