console.log("debug");

var road = [];

var grass;

var desert;

var snow;

var state = 0;

var ps = [];

var t = {
  x:50,
  y:350,
  w:20,
  h:30,
 
  show: function(){
    stroke(255);
  fill(255);
  rect(this.x,this.y,this.w,this.h);
  stroke(255);
  fill(255);
  rect(this.x,this.y,this.w,this.h);
  
      },
        move: function(){
   this.y = this.y +=0.04;
  }
  }


function Stripes(x, width){
  
  this.x = x,
  this.y = 390,
  this.w = 30,
  this.h = 15,
  this.show = function(){
    stroke(255);
    fill(255);
    rect(this.x*40,this.y,this.w,this.h);
  }

}

function setup() {
  grass = loadImage("images/grass.png");
  desert = loadImage("images/desert.png");
  snow = loadImage("images/snow.png");
  createCanvas(700,700);
  angleMode(DEGREES);
  background(234,78,91);
  for (var i = 0; i < 4; i++){
  ps[i] = new P5();
}
  for(var r = 0; r < 20; r++){
    road[r] = new Stripes(r, windowWidth);
  }
print(ps);
print(road);

}

  function control(){

   
   if (keyIsDown(65))    //  "d" key
    t.x-=3; 

  if (keyIsDown(68))    //  "d" key
    t.x+=3;
 if (keyIsDown(83))    // "w" key
    t.y+=3;

  if (keyIsDown(87))    //  "s" key
    t.y-=3;
 
  }

function draw() {
  if (state === 0){
  menu();
  button.show();
}if(state === 1){
  screen();
  t.show();
  for (var i = 0; i < ps.length; i++){
  ps[i].show();
  ps[i].move();
  }
  control();
  border();
  for(var r = 0; r < road.length; r++){
  road[r].show();
  }
}
if(state === 2){
  Desert();
  control();
  t.show();
  for(var j = 0; j < road.length; j++){
  road[j].show();
  }
print(road);
}

if(state === 3){
  Snow();
  control();
  t.show();
  for(var b = 0; b < road.length; b++){
    road[b].show();
  }
  if(t.x >= width){
    t.x = t.x = 0;
    
  }
}

}

function border(i,x){
  if(t.x >= width){
    t.x = 0;
    state = 2;
  }
  else if(t.x <= 0){
    t.x = width;
   state = 1;
  }
  if(t.x >= P5.x){
    console.log("hello");
  }

}