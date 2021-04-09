class Ground{
 constructor(){
        var ground_options={
            isStatic : true
          }
        
          //creation of the  main body of the class...

          this.ground = Bodies.rectangle(450,390,900,20,ground_options);
          
          //adding the body to the world...

          World.add(world,this.ground);
    }
    
    //the display function to be mentioned in sketch.js ...

    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
}