var button = {
  
  x : 250,
  y : 345,
  w : 210,
  h : 50,
  
  show : function(){
    fill(234, 78, 91);  //change it back to 277 to see the collision.
    noStroke();
  rect(this.x,this.y,this.w,this.h);    




    textSize(100);
  textAlign(CENTER);
  fill(255);
  text("p5*", 370, 250);
  textSize(25);
  text("Click here to start", 360, 375);

  }
}
  

var button2 = {
  
  x : 310,
  y : 480,
  w : 100,
  h : 50,
  
  show : function(){
    fill(234, 78, 91);  //change it back to 277 to see the collision.
    noStroke();
  rect(this.x,this.y,this.w,this.h);    




  textAlign(CENTER);
  fill(255);
  textSize(25);
  text("Controls", 360, 500);

  }
  
}
var button3 = {
  
  x : 260,
  y : 400,
  w : 200,
  h : 50,
  
  show : function(){
    fill(234, 78, 91);  //change it back to 277 to see the collision.
    noStroke();
  rect(this.x,this.y,this.w,this.h);    




  textAlign(CENTER);
  fill(255);
  textSize(25);
  text("Multiplayer", 360, 430);

  }
  
}
var button4 = {
  
  x : 600,
  y : 600,
  w : 100,
  h : 40,
  
  show : function(){
    fill(234, 78, 91);  //change it back to 277 to see the collision.
    noStroke();
  rect(this.x,this.y,this.w,this.h);    




  textAlign(CENTER);
  fill(255);
  textSize(25);
  text("Click Me", 650, 620);

  }
  
}
var button5 = {
  
  x : 300,
  y : 600,
  w : 100,
  h : 40,
  
  show : function(){
    fill(234, 78, 91);  //change it back to 277 to see the collision.
    noStroke();
  rect(this.x,this.y,this.w,this.h);    




  textAlign(CENTER);
  fill(255);
  textSize(25);
  text("Back", 350, 620);

  }
  
}


function mousePressed(){ 
  if(mouseX > button.x && mouseX < button.x + button.w && mouseY > button.y && mouseY < button.y + button.h){
    console.log("worked");
    state = 1;

  }//this is the collision for the box button
  if(mouseX > button2.x && mouseX < button2.x + button2.w && mouseY > button2.y && mouseY < button2.y + button2.h){
    state = 6;
    pop(button2);
  }
  if(mouseX > button3.x && mouseX < button3.x + button3.w && mouseY > button3.y && mouseY < button3.y + button3.h){
    state = -1;
    console.log("clicked");
    pop(button3);
  }
    if(mouseX > button4.x && mouseX < button4.x + button4.w && mouseY > button4.y && mouseY < button4.y + button4.h){
    if(Black){
    Black = false;/////////////////////////////////i have used boolean expression
  }else{
    Black = true;
  }
  }
    if(mouseX > button5.x && mouseX < button5.x + button5.w && mouseY > button5.y && mouseY < button5.y + button5.h){
    state = 0;
  }
}
function How(){//////////////////visualisation improved
  background(234, 78, 91);
  textSize(100);
  fill(255);
  text("Controls",350,100);
  textSize(50);
  fill(0);
  rect(300,300,100,100);
  fill(255);
  text("W",350,370);
  fill(0);
  rect(400,400,100,100);
  fill(255);
  text("D",450,465);
  fill(0);
  rect(200,400,100,100);
  fill(255);
  text("A",250,465);
  fill(0);
  rect(300,400,100,100);
  fill(255);
  text("S",350,465);
  fill(0);
  rect(550,400,100,100);
  fill(255);
  text(".",600,465);
}