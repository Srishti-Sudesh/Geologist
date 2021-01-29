class Sand {
    constructor(x,y){
    var options = {
        friction : 0.5,
        restitution : 0.6,
        density : 0.5,
    }
    this.body = Bodies.circle(x,y,10,options);
    World.add(world, this.body);
 }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate (pos.x, pos.y); 
        rotate(angle);
        ellipseMode(CENTER);
        fill("brown");
        strokeWeight(1);
        stroke("orange");
        circle(0,0,10);
        pop();          
    }
}