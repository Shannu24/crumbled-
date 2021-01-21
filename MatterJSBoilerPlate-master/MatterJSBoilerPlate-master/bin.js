class Bin{

    constructor(x,y,width,height){
        var options = {
          isStatic:true
        }    
    this.bin=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.bin);

    }

    display(){
        var pos=this.bin.position
        rect(pos.x,pos.y,this.width,this.height)

    }


}