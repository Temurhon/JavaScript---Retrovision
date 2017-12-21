var bullets = [];

function B(x,y){
  this.x = t.x+15,
  this.y = t.y,
  this.w = 1,
  this.h = 2,
  this.show = function(){
    fill(255);
    noStroke();
    rect(this.x,this.y,this.w,this.h);
  }
  this.move = function(){
    this.y -= 10;
  }
}