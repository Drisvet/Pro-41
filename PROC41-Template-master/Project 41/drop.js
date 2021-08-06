class drop {
    constructor(x,y){

        stroke(10);
        fill("red");
        ellipse(x,y);

    }

}

if(this.rain.position.y>height){
    Matter.Body.setPosition(this.rain, {x:random(0,400)}, {y:random(0,400)})
} 

var maxDrops=100;

for(var i=0; i<maxDrops; i++){
maxDrops.push(new createDrop(random(0,400), random(0,400)));
}