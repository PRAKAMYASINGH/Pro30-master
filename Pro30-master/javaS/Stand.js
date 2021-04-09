class Stand{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }

//creation of a rectangular body with proper parameters...

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

//adding the body to the world...

        World.add(world, this.body);
      }

//the display function to be mentioned in sketch.js ...

      display(){
          
        //the abbreviation variable for the class angle...

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        rectMode(CENTER);
        rect(0,0,this.width, this.height);

        pop();
      }
}