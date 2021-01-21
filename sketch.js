var hr;
var mn;
var sc;

function preload() {
  clockworks = loadImage("clockworks.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight / 10 * 9);
  angleMode(DEGREES);
  rotate(PI/2);
}

function draw() {
  background(0,0,0);  
  sc = second();
  mn = minute();
  hr = hour();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 24, 0, 360);

  

  push();
  translate(width / 2, height / 2)
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 110, 0);
  pop();

  noFill();
  stroke(255, 0, 0);
  strokeWeight(7);
  arc(width/2, height/2, 250, 250, 0, scAngle);

  push();
  translate(width / 2, height / 2)
  rotate(mnAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, 90, 0);
  //arc(0, 0, 100, 100, 0, mnAngle);
  pop();

  noFill();
  stroke(0, 255, 0);
  strokeWeight(7);
  arc(width/2, height/2, 270, 270, 0, mnAngle);

  push();
  translate(width / 2, height / 2)
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 50, 0);
  //arc(0, 0, 100, 100, 0, hrAngle);
  pop();

  noFill();
  stroke(0, 0, 255);
  strokeWeight(7);
  arc(width/2, height/2, 290, 290, 0, hrAngle);

  image(clockworks, width / 2 - 250, height / 2 - 400, 500, 200);

  rotate(1.5708)
}