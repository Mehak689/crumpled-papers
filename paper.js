class Paper {
    constructor(x, y, radius) {
        var paper_options = {
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }
        this.body = Bodies.circle(x, y, radius, paper_options);
        this.radius = radius
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,33,33);
    }
}