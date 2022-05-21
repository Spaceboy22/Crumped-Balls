class Ground{
    constructor(x, y, w, h) 
  {
    var options={
        isStatic:true
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y)
    rectMode(CENTER);
    stroke(255);
    fill(127);
    rect(0, 0, this.w, this.h);
    pop();
  }
}