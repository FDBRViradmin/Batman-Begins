  class Bruce {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.image = loadImage("walking_1.png");
        World.add(world, this.body);
        // this.body.scale = 0.4;
    }
    display() {
        var pos = this.body.position
        push();
        var pos = this.body.position;
        imageMode(CENTER);
        image(pos.x, pos.y, this.w, this.h);
        pop();
    }
  };