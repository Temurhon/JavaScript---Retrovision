function P5(x,y,w,h){
 
  this.x = random(50, width),
  this.y = random(20,height),
  this.w = 20,
  this.h = 30,
  this.show = function(){
  stroke(255,0,0);
  fill(255,0,0);
  rect(this.x,this.y,this.w,this.h);
   
}
  this.move = function(){
    
  }
}