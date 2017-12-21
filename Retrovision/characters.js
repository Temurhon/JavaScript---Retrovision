var sideway = [];
var t = {
  x: 150,
  y: 400,
  w: 30,
  h: 40,
  health: 100,
  rotateToDirection: 45,
  maxSpeed :  2,
  friction : 0.99,

  show: function() {
    
    stroke(255);
    fill(255);
    rect(this.x, this.y, this.w, this.h);
    stroke(255);
    fill(255);
    rect(this.x, this.y, this.w, this.h);

  },
  move: function() {
    this.y = this.y += 0.04;
  }
}

function Second(){// constructor function
  this.x = random(155,200),
  this.y = 350,
  this.w = 30,
  this.h = 40,
 
  this.show = function(){
    stroke(255),
    fill(255),
    rect(this.x, this.y, this.w, this.h)
  }
}

function right(){
  fill(255);
  noStroke();
  rect(t.x,t.y,40,30);
}
function control2() {
for(var s; s < two.length; s++){
  if (keyIsDown(73)) //  "i" key
    two[s].y += 3;
 if (keyIsDown(75)) //  "k" key
    two[s].y -= 3;
 if (keyIsDown(74)) //  "j" key
    two[s].y -= 3;
 if (keyIsDown(76)) //  "l" key
    two[s].y += 3;
}
}
function control(rotateToDirection,right) { // this is the control for the first player


  if (keyIsDown(65)) //  "a" key
    t.x -= 3;
  if (keyIsDown(68)) //  "d" key
    t.x += 3;
  if (keyIsDown(83)) // "w" key
    t.y += 3;

  if (keyIsDown(87)) //  "s" key
    t.y -= 3;
    
  if (key === '.'){
      var b = new B(t.x, t.y);
      bullets.push(b);
  }
     


}
function CARS(y,w,h){// these are the red cars that move around the road
 
  this.x = random(0, 700),
  this.y = 355,
  this.w = 30,
  this.h = 20,
  this.show = function(){
  stroke(255,0,0);
  fill(255,0,0);
  rect(this.x*10,this.y,this.w,this.h);
   
   if(this.x < 0){
     this.x = random(679,width);
     this.y = 360;
   }
   
}
  this.move = function(){
   this.x -= 3;
  }

}