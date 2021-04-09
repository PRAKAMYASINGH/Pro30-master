class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        
        //the constraint body to be created for the class...

        this.sling = Constraint.create(options);
        this.pointB=pointB;

//adding the body to the world...

        World.add(world, this.sling);

    }

//the fly function to disable the controls after mouse is released...

    fly(){
        this.sling.bodyA =null;
    }

//the display function to be mentioned in sketch.js ...

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }
    
}