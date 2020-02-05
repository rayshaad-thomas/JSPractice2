function setup()
{
    createCanvas(400, 400);
}

function draw() {
    colorMode(RGB, 255);
    background(255);
    noStroke();
    let red = circle(250, 250, 150, 150);
    let r = color(255, 40, 5, 105);
    fill(r);
    let blue = circle(200, 150, 150, 150);
    let b = color(100, 115, 225, 115);
    fill(b);
    let green = circle(150, 250, 150, 150);
    let g = color(100, 255, 90, 115);
    fill(g);
}