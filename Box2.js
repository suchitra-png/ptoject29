class Box2 {
    constructor(x,y,width,height) {
      var options = {
          'restitution':0.4,
          'friction':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility=255
      World.add(world, this.body);

    }
    display(){
      push()
      var pos =this.body.position;
      rectMode(CENTER);
      fill(rgb(340,128,128));
      rect(pos.x, pos.y, this.width, this.height);
      pop()
    }
  };