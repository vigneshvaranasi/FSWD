let xAcceleration = 0;
let yAcceleration = 0;
let zAcceleration = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  // Display acceleration values
  textSize(20);
  text(`Acceleration X: ${xAcceleration.toFixed(2)}`, 20, 40);
  text(`Acceleration Y: ${yAcceleration.toFixed(2)}`, 20, 70);
  text(`Acceleration Z: ${zAcceleration.toFixed(2)}`, 20, 100);
}

function deviceMoved() {
  xAcceleration = accelerationX;
  yAcceleration = accelerationY;
  zAcceleration = accelerationZ;
}
