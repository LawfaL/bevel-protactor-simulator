let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // rectMode(CENTER);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  let disc = new MainDisc(0, 0, 780, 300);
  let vernierScale = new VernierScale(0, 0, 300);
  let blade = new ProtractorBlade(-450, 260, 1500, 200);
  let handLock = new HandLock(-50, -50, 100, 500, 55);

  // angle = atan2(mouseY - height / 2, mouseX - width / 2);
  // rotate(angle);
  disc.render();
  vernierScale.render();
  // blade.render();
  // handLock.render();
}
