function setup() {
  // put setup code here
  createCanvas(700,300);
}

function draw() {
  background(0);
  noStroke();
  fill('yellow');
  arc(150, 150, 255, 250, 230, QUARTER_PI + HALF_PI);
  fill('red');
  rect(347.7, 125, 205, 150);
  fill('red');
  arc(450, 125, 205, 199, PI-1, 1, OPEN);
  fill('white');
  circle(400, 150, 75, 5);
  circle(500, 150, 75, 5);
  fill('blue');
  circle(400, 150, 50, 5);
  circle(500, 150, 50, 5);
}