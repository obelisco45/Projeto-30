class SlingShote {
    constructor(bodyA,pointB) {
        var opitions = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.Sling = Constraint.create(opitions);
        this.pointB = pointB;
        World.add(world, this.Sling);
    }
    fly() {
        this.Sling.bodyA = null;
    }
    attach(body) {
        this.Sling.bodyA = body;
    }
    display() {
        if(this.Sling.bodyA) {
            var pointA = this.Sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("Red");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}
