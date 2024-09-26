let angle = 0;
let mode = "";
let discAngle = 0;
let vernierAngle = 0;
let bladePosition = 0;
let sf = 1; // scaleFactor

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  // rectMode(CENTER);
}

function draw() {
  mx = mouseX;
  my = mouseY;

  background(0);
  if (mode == "zoom") {
    translate(mx, my);
    scale(sf);
    translate(-mx, -my);
    translate();
  }

  let disc = new MainDisc(
    0,
    0,
    windowHeight * 0.7,
    windowHeight * 0.15,
    windowHeight * 0.015
  );
  let vernierScale = new VernierScale(
    0,
    0,
    windowHeight * 0.2,
    windowHeight * 0.4,
    windowHeight * 0.008
  );
  let blade = new ProtractorBlade(
    0,
    disc.radius * 2,
    windowHeight,
    windowHeight * 0.1
  );
  let handLock = new HandLock(
    0,
    0,
    windowHeight * 0.1,
    disc.radius * 3,
    disc.radius * 0.5
  );

  push();
  rect(20, 20, 200, 50);
  fill(0);
  textSize(windowHeight * 0.02);
  text("Main Disc", 65, 55);
  pop();

  push();
  rect(20, 80, 200, 50);
  fill(0);
  textSize(windowHeight * 0.02);
  text("Vernier Disc", 65, 115);
  pop();

  push();
  rect(20, 140, 200, 50);
  fill(0);
  textSize(windowHeight * 0.02);
  text("Blade", 65, 175);
  pop();

  push();
  rect(20, 200, 200, 50);
  fill(0);
  textSize(windowHeight * 0.02);
  text("Zoom", 65, 245);
  pop();

  push();
  textSize(this.textSize);
  fill(255);
  for (let angle = 0; angle <= discAngle; angle += 10) {
    push();
    textAlign(CENTER, CENTER);
    let x = windowWidth - 200 + cos(radians(angle)) * (200 + 60);
    let y = 20 - sin(radians(angle)) * (200 + 60);
    translate(x, y);
    rotate(-radians(angle) - radians(270));
    text(angle, 0, 0);
    pop();
  }
  fill(0);
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
  push();
  if (mode == "blade" && mouseX < width / 2 - 20 && mouseX > 0) {
    bladePosition = mouseX - blade.width;
  }
  translate(bladePosition, 0);
  blade.render();
  pop();
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

  if (mouseX >= 20 && mouseX <= 220 && mouseY >= 140 && mouseY <= 180) {
    mode = "blade";
    return;
  }

  if (mouseX >= 20 && mouseX <= 220 && mouseY >= 200 && mouseY <= 240) {
    mode = "zoom";
    console.log('zoom')
    return;
  }

  mode = "";
}

function mouseReleased() {
  // mode = "";
}

window.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) sf *= 1.05;
  else sf *= 0.95;
});
