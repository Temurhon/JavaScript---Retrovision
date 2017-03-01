function Desert(){
  background(desert);
  noStroke();
  fill(130,144,133);
  rect(0,350,700,100);
   
   
   if(t.x >= width){
     state = 3;
   }
}


function Snow(){
  background(snow);
  fill(130,144,133);
  rect(0,350,700,100);

  fill(255,40);
  rect(100, 300, 100, 50);
  
  t.show();


}