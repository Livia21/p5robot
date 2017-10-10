function setup() {
  createCanvas(800,600);
  background(167,234,230);
}

function draw() {
 
 
  stroke(29,29,27);
  strokeWeight(6)
  fill(185,185,183);
  ellipse(390,230,160,160);
  fill(255,255,255);
  rect(312,257,156,118)
  
 beginShape()
  vertex(310,374);
  vertex(470,374);
  vertex(454,396);
  vertex(326,396);
  endShape(CLOSE);
  
 beginShape()
  vertex(365,397);
  vertex(416,397);
  vertex(426,432);
  vertex(357,432);
  endShape(CLOSE);  
  
  rect(471,262,34,58);
  rect(471,320,34,58);
  
  beginShape()
  vertex(471,380);
  vertex(512,380);
  vertex(526,432);
  vertex(471,432);
  endShape(CLOSE);  
  
  rect(275,262,34,58);
  rect(275,320,34,58);
  
  beginShape()
  vertex(268,380);
  vertex(309,380);
  vertex(310,432);
  vertex(254,432);
  endShape(CLOSE); 
  
  fill(185,185,183);
  noStroke();
  rect(311,220,159,34);
  
  stroke(29,29,27);
  strokeWeight(6)
  line(310,255,310,222);
  line(470,255,470,222);
  
  //dettagli corpo layer1
  stroke(29,29,27);
  strokeWeight(5);
  fill(255,255,255);
  rect(331,320,25,51);
  fill(57,83,160);
  rect(371,320,40,52);
  fill(255,255,255);
  rect(432,257,18,87);
  fill(57,83,160);
  rect(354.5,268,70,11);
  rect(354.5,285,70,11);
  
  //dettagli corpo layer2
  fill(185,185,183);
  ellipse(391,333,21,21);
  ellipse(391,357,21,21);
  
  //dettagli testa layer1
    //SOTTO
  fill(57,83,160); 
  beginShape()
  vertex(313,234);
  vertex(336,234);
  vertex(330,257);
  vertex(312,257);
  endShape(OPEN); 
  
  beginShape()
  vertex(468,234);
  vertex(416,234);
  vertex(420,257);
  vertex(468,257);
  endShape(OPEN); 
  
  beginShape()
  vertex(353,190);
  vertex(400,190);
  vertex(411,257);
  vertex(338,257);
  endShape(CLOSE);
  
  
  //dettagli testa layer2
  fill(255,255,255);
  ellipse(376,218,42,42);
  ellipse(421,238,20,20);
  fill(225,28,19);
  ellipse(390,248,14,14);
  
  
  
 
  
  
   
   
  
  
  
  
  
  }