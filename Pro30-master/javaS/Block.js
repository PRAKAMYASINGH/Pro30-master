class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
        }

//creation of the main body of this class...

this.visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

//adding the body to the world...

        World.add(world, this.body);
      }
      
//the display function to be mentoined in sketch.js to get displayed accordingly...

      display() {

        if(this.body.speed <3){

 //the abbreviation variables for the angles and positions of the class...

        var angle = this.body.angle;
        var position= this.body.position;

        push();
        translate(position.x, position.y);

        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();

        // the else function in case the "if" function is not getting executed...

      }else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility -5;
        pop();
        
      }
      }
}