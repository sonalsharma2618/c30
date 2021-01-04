class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity=255;
  }
   
  display(){

    console.log(this.body.speed);
    super.display();

    if(this.body.speed < 3){
      super.display();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity=this.Visiblity-5;
      tint(255,this.Visiblity);
      image(this.image,this.body.Position.x,this.body.Position.y,50,50);
      pop();
    }

  }
};