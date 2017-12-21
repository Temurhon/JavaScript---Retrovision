function states(){
 
     if (state === 1) {
    soundtrack.stop();
    screen();
    t.show();
    control2();
    for (var s = 0; s < two.length; s++) {
      two[s].show();
    } // second player
    for (var i = 0; i < ps.length; i++) {
      ps[i].show();
      ps[i].move();
    }
    control();
    border();
    for (var r = 0; r < road.length; r++) {
      road[r].show();
    }
    for (var c = 0; c < bullets.length; c++) {
      bullets[c].show();
      bullets[c].move();
    }
  }
 
 
  if (state === 0) {
    button.show();
    button2.show();
    button3.show();
    button4.show();
                  for (var l = 0; l < 100; l++){
    dots[l].show();
    }
  }
  if (state === 1) {
    soundtrack.stop();
    screen();
    t.show();
    for (var i = 0; i < ps.length; i++) {
      ps[i].show();
      ps[i].move();
    }
    control();
    border();
    for (var r = 0; r < road.length; r++) {
      road[r].show();
    }
    for (var c = 0; c < bullets.length; c++) {
      bullets[c].show();
      bullets[c].move();
    }
  }
  
  
  
  
  
  
  
  
  
  if (state === 2) {
    Desert();
    control();
    border();
    t.show();
    for (var j = 0; j < road.length; j++) {
      road[j].show();
    }
    for(var i = 0; i < ps.length; i++ ){
    ps[i].show();
    ps[i].move();
    }
    
    if(t.x >= width){
      t.x = 0;
      state = 3;
    }
 
    
  }
  if(state === 3){
  Snow();
  control();
  border();
  t.show();
  for(var i = 0; i < ps.length; i++ ){
    ps[i].show();
    ps[i].move();
    }
  for(var b = 0; b < road.length; b++){
    road[b].show();
  }
  if(t.x >= width){
    t.x = t.x = 0;
    
  }
}
 
    
  
  
  if (state === 4) {
    selectGame();
  }
  if (state === 5) {
    Explosion();
  }
  if(state === 6){
    How();
  button5.show();
  }
  
}
