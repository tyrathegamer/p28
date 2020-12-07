class Tree{
    constructor(x,y){
        var options={
            isStatic:true

        }
        this.tree = Bodies.rectangle(x,y,options);
        this.image = loadImage("tree.png");
    }
display(){
    var pos1 = this.tree.position.x;
    var pos2 = this.tree.position.y;
    imageMode(CENTER);
    image(this.image,pos1,pos2,600,600);
}
}