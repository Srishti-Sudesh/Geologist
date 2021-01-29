class Rubber {

    constructor(x,y,radius){

        var rubber_options = {
            restitution : 0.3,
            density : 1.0,
            friction : 3
        }

        this.body = Bodies.circle(x,y,35,rubber_options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate (pos.x, pos.y); 
        rotate(angle);
        ellipseMode(CENTER);
        fill("lightblue");
        strokeWeight(4);
        stroke("blue");
        circle(0,0,60);
        pop();           
    }
}