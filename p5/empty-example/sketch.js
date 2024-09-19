let angle = 0;
let mode = "";
let discAngle = 0;
let vernierAngle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // rectMode(CENTER);
}

function draw() {
  background(0);

  let disc = new MainDisc(0, 0, 450, 150, 11);
  let vernierScale = new VernierScale(0, 0, 160, 320, 8);
  let blade = new ProtractorBlade(-200, 190, 700, 90);
  let handLock = new HandLock(-35, -35, 70, 300, 55);

  push();
  rect(20, 20, 200, 50);
  fill(0);
  textSize(24);
  text("Main Disc", 65, 55);
  pop();

  push();
  rect(20, 80, 200, 50);
  fill(0);
  textSize(24);
  text("Vernier Disc", 65, 115);
  pop();

  translate(width / 2, height / 2);

  push();
  if (mode == "main-disc") {
    discAngle = atan2(mouseY - height / 2, mouseX - width / 2);
  }
  rotate(discAngle);
  disc.render();
  pop();

  push();
  if (mode == "vernier") {
    vernierAngle = atan2(mouseY - height / 2, mouseX - width / 2);
  }
  rotate(vernierAngle);
  vernierScale.render();
  blade.render();
  handLock.render();
  pop();
}

function mousePressed() {
  // Code to run.
  if (mouseX >= 20 && mouseX <= 220 && mouseY >= 20 && mouseY <= 70) {
    mode = "main-disc";
    return;
  }

  if (mouseX >= 20 && mouseX <= 220 && mouseY >= 80 && mouseY <= 130) {
    mode = "vernier";
    return;
  }

  mode = "";
}
