//NOTE...THIS SOFTWARE USES ES6, please use a web browser!!!!!!!!!!!!!!!!!!!!!!!

/*the game is about a charcter that controls the tank,
that the criterea of the game is to destroy all the cars by the end of the game.*/

//baseline 4/4
//several variable with if statements 1+1
//advanced: boolean variables 1/2
//boolean expressions for the time being not marked
//for loop 4/4
//many loops 1 + 1    (//used nested loops)       //
//baseline arrays 4/4
//loops with arrays 1
//intention to use 2d arrays  (kinda) // 2d arrays going to implement it 0

//functions 4/4
//parameterised functions and own functions  2/2
//advanced: anonymous functions 1/2
//objects 4/4
//intentions of using constructors functions (done)     //
//objects with functions attached (done)                //
//interaction 2/2

//use map, filters and otehr functions that it has been shown.

//checked/confirmed by rajeev 13/03/2017 marked by aleks  30/50

console.log();

var Black = false;//boolean expression it can be found on the menu.js

var state = 0;

var road = [];

var dots = [];

var grass;

var desert;

var explosion;

var snow;

var collide;

var ps = [];

var col = 10000;

var row = 10000;


var soundtrack; // Reference :Music: http://www.bensound.com

var two = [];

function preload() {
  soundtrack = loadSound('sound/higher.mp3');
}

function setup() {
  collide = loadSound('sound/crash.wav');//files taht are being uploaded by me
  explosion = loadImage("images/explosion.jpg")
  grass = loadImage("images/grass.png");
  desert = loadImage("images/desert.jpeg");
  snow = loadImage("images/snow.png");
  createCanvas(700, 700);
   if(state === 5){
  background(colour,0,0);
  colour+=1;
  }
  background(234, 78, 91);
  for (var i = 0; i < 10; i++) {
    ps[i] = new CARS();
  }
  for (var r = 0; r < 20; r++) {
    road[r] = new Stripes(r, windowWidth);
  }
  for (var c = 0; c < 100; c++) {
    bullets[c] = new B(); 
  }
  for (var m = 0; m < 1; m++) {
    two[m] = new Second();
  }

  for (var l = 0; l < 110; l++){
    dots[l] = new Dots(l*20,10,10,10);
  }
  console.log(dots);
  soundtrack.play();
  //all the setup files that re here are being done before the user executes the code   
}
//all the loops defined 

function draw() {
    if(Black){
    background(0);
  }else{
    background(234, 78, 91);
  }
  states();// this is the funciton that i have made it in another file
  //rect(20,20,20,20);
}


function Stripes(x, width) {//this is the stripes that it is shown on the road

    this.x = x,
    this.y = 390,
    this.w = 30,
    this.h = 15,
    this.show = function() {
      stroke(255);
      fill(255);
      rect(this.x * 40, this.y, this.w, this.h);
    }

}

// class Test {
//   constructor(_x,_y){
//     this.x = _x;
//     this.y = _y;
//   }
// }

 class Dots {//////////////////////////////////////////////added calsses for the menu
   constructor(posx,posy,posw,posh){
    this.x = posx;
    this.y = posy;
    this.w = posw;
    this.h = posh;
  }
  show(){
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }
}


