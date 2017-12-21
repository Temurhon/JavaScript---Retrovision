function screen(){// this is the main screen, which the user will be using,
  background(grass);
    noStroke();
  fill(130,144,133);
  rect(0,350,700,100);
  if(t.x >= width){
    t.x = 0;
    state = 2;
    console.log("grass")
    
  }
}
function Desert(){// this function is the second level that the user will be using
  console.log("desert");
  background(desert);
  noStroke();
  fill(130,144,133);
  rect(0,350,700,100);
   if(t.x < 0){
     state = 1;
     t.x = width;
   }
   
}
var down = 0;
function Snow(){// thisi s the last level that the user will be gping to after beating the boss
  console.log("snow");
  background(snow);
  fill(130,144,133);
  rect(0,350,700,100);
noStroke();
  fill(255,40);
  rect(100, 300, 100, 50);
  t.show();
if(t.x < 0){
  state = 2;
  t.x = width;
}
strokeWeight(4);
stroke(255);

///////////////////////////////////////////////used nested loops for the snow(visuals and nested loops)
for(var x = 0; x <= width; x += 50){
  for(var y = 0; y <= height; y += 50){
  fill(random(200),0,0);
  ellipse(x, down, 2, 25, 25)
if(down >= 700){
  down = 0;
}
if(x >= width){
  x = 0;
}
x = x + 1;
}
down = down + 20;
}
}

function Explosion(colour){// this is when the user crashes in one of the cars of loses health
  background(0);
  
  for(var r = 0; r < col; r++){
    for(var r = 0; r < row; r++){
      var x = r;
      var y = r;
      noStroke()
      255 === Red
      fill(255,0,0);
      rect(x,y,40,40);
    }
  }

  fill(200);
  textSize(50);
  text("Sleep....",360,400);


  
}
