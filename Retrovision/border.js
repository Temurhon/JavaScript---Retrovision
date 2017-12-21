function border(){
  for (var z = 0; z < 4; z++){

if(t.x > ps[z].x && t.x < ps[z].x + t.w && ps[z].y > t.y && ps[z].y < t.y + t.h){
  t.health -= 5;
  collide.play();
}
}


 
if(t.health === 0){
  state = 5;
}
fill(255);
textSize(23);
text("Health:",100,100);
text("%",200,100);
text(t.health,160,100);
}
