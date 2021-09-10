class ComputerArchr {
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/computerArcher.png");
        
        Matter.Body.setAngle(this.body, PI/2);

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        //console.log(angle);

        //79 = O
        if (keyIsDown(79) && angle < 1.8) {
          angle += 0.1;
          Matter.Body.setAngle(this.body, angle);
        }

        //76 = L
        if ( keyIsDown(76) && angle > 1.2) {
          angle -= 0.1;
          Matter.Body.setAngle(this.body, angle);
        }

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

        pop();
    }
}