var button = {
  
  x : 255,
  y : 345,
  w : 210,
  h : 70,
  
  show : function(){
    fill(207);
    noStroke();
  rect(this.x,this.y,this.w,this.h);    




    textSize(50);
  textAlign(CENTER);
  fill(255);
  text("p5*", 330, 330);
  textSize(25);
  text("Click here to start", 360, 375);

  }
  
}



function menu(){


}




function mousePressed(){
  if(mouseX > button.x && mouseX < button.x + button.w && mouseY > button.y && mouseY < button.y + button.h){
    console.log("worked");
    state = 1;
  }//this is the collision for the box button
}