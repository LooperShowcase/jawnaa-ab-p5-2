let r;
let g;
let b;

function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(1280, 645);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("#dee2ff");
  translate(width / 2, height / 2);
  rotate(-90);

  push();
  noFill();
  stroke(r, g, b);
  ellipse(0, 0, 400, 400);
  pop();
  let sc = second();
  let min = minute();
  let hr = hour();
  if (frameCount % 30 == 0) {
    r = random(0, 256);
    g = random(0, 256);
    b = random(0, 256);
  }
  noFill();
  stroke(b, g, r);
  strokeWeight(8);
  let secondAngel = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngel);
  stroke(r, g, b);
  push();
  stroke(g, r, b);
  rotate(secondAngel);
  line(0, 0, 150, 0);
  pop();
  let minuteAngel = map(min, 0, 60, 0, 360);
  arc(0, 0, 250, 250, 0, minuteAngel);
  stroke(g, b, r);

  push();
  stroke(r, g, b);
  rotate(minuteAngel);
  line(0, 0, 125, 0);
  pop();

  let hourAngel = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 200, 200, 0, hourAngel);

  push();
  stroke(b, g, r);
  rotate(hourAngel);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(90);
  textSize(22);
  strokeWeight(1);
  text("6", 0, 180);
  pop();

  push();
  rotate(90);
  textSize(22);
  strokeWeight(1);
  text("12", 0, -175);
  pop();
  push();
  rotate(90);
  textSize(22);
  strokeWeight(1);
  text("3", 170, 0);
  pop();

  push();
  rotate(90);
  textSize(22);
  strokeWeight(1);
  text("9", -180, 0);
  pop();

  push();
  strokeWeight(8);
  stroke("black");

  ellipse(0, 0, 3, 3);
  strokeWeight(7);
  stroke("white");
  ellipse(0, 0, 1, 1);
  pop();

  push();
  strokeWeight(1);
  textSize(22);
  rotate(90);
  textFont("Georgia");
  text("jawnaa abd el hadi", -75, 85);
  textSize(25);
  text("20.8.2021", -50, 110);
  pop();
}
