let angle = 0;

function setup() {
  createCanvas(windowWidth - 5, windowHeight - 5);
  // rectMode(CENTER);
}

function draw() {
  background(0);
  translate(width / 2 - 200, height / 2);

  push();
  // angle = atan2(mouseY - height / 2, mouseX - width / 2);
  // rotate(angle);
  mainDisc();
  pop();

  push();
  // angle = atan2(mouseY - height / 2, mouseX - width / 2);
  // rotate(angle);
  vernierScale();
  protractorBlade(-450, 260, 1500, 200);
  handLock();
  pop();
}

function disc() {
  let centerX = 0;
  let centerY = 0; // Move the center down a bit for better positioning
  let radius = 300;

  // Draw the bottom bevel
  fill(160); // Darker shade for the bottom bevel
  let circleRadius = 780;
  circle(0, 0, circleRadius);

  // Draw the tick marks
  for (let angle = 0; angle <= 360; angle++) {
    let x1 = centerX + cos(radians(angle)) * radius;
    let y1 = centerY - sin(radians(angle)) * radius;
    let x2 = centerX + cos(radians(angle)) * (radius + 20);
    let y2 = centerY - sin(radians(angle)) * (radius + 20);
    line(x1, y1, x2, y2);

    if (angle % 10 == 0) {
      // Draw longer lines every 30 degrees
      x2 = centerX + cos(radians(angle)) * (radius + 40);
      y2 = centerY - sin(radians(angle)) * (radius + 40);
      line(x1, y1, x2, y2);
    }

    if ((angle - 5) % 10 == 0) {
      // Draw longer lines every 30 degrees
      x2 = centerX + cos(radians(angle)) * (radius + 30);
      y2 = centerY - sin(radians(angle)) * (radius + 30);
      line(x1, y1, x2, y2);
    }
  }

  // Draw the numbers
  textSize(14);
  let numberRadius = 360;
  fill(0);
  for (let angle = 0; angle <= 350; angle += 10) {
    push();
    textAlign(CENTER, CENTER);
    let x = centerX + cos(radians(angle)) * numberRadius;
    let y = centerY - sin(radians(angle)) * numberRadius;
    translate(x, y);
    rotate(-radians(angle) - radians(270));
    text(angle, 0, 0);
    pop();
  }
}

function vernierScale() {
  let centerX = 0;
  let centerY = 0; // Move the center down a bit for better positioning
  let radius = 300;

  // Draw the bottom bevel
  fill(210); // Darker shade for the bottom bevel
  circle(0, 0, 600);

  // Draw the bottom bevel
  fill(240); // Darker shade for the bottom bevel
  circle(0, 0, 500);

  push();
  beginShape();
  fill(210); // Darker shade for the bottom bevel
  for (let angle = 75; angle <= 105; angle++) {
    let x = centerX + cos(radians(angle)) * (radius - 100);
    let y = centerY - sin(radians(angle)) * (radius - 100);
    vertex(x, y);
  }
  for (let angle = 105; angle >= 75; angle--) {
    let x = centerX + cos(radians(angle)) * radius;
    let y = centerY - sin(radians(angle)) * radius;
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();

  // Draw the tick marks
  for (let angle = 78, i = 0; angle < 103; angle++, i++) {
    let x1 = centerX + cos(radians(angle)) * radius;
    let y1 = centerY - sin(radians(angle)) * radius;
    let x2 = centerX + cos(radians(angle)) * (radius - 20);
    let y2 = centerY - sin(radians(angle)) * (radius - 20);
    line(x1, y1, x2, y2);

    if (i % 3 == 0) {
      //  Draw longer lines every 30 degrees
       x2 = centerX + cos(radians(angle)) * (radius - 30);
       y2 = centerY - sin(radians(angle)) * (radius - 30);
       line(x1, y1, x2, y2);
    }

    if (i % 6 == 0) {
      // Draw longer lines every 30 degrees
      x2 = centerX + cos(radians(angle)) * (radius - 40);
      y2 = centerY - sin(radians(angle)) * (radius - 40);
      line(x1, y1, x2, y2);
    }
  }

  // Draw the numbers
  textSize(9);
  let numberRadius = 250;
  let i = 0;
  let iteration = [60, 30, 0, 30, 60];

  textAlign(CENTER, CENTER);
  fill(0);
  for (let angle = 78; angle <= 200; angle += 6) {
    let x = centerX + cos(radians(angle)) * numberRadius;
    let y = centerY - sin(radians(angle)) * numberRadius;
    text(iteration[i], x, y);
    i++;
  }
}

function protractorBlade(x, y, width, height) {
  // Draw the trapezoid
  fill(200);

  beginShape();
  vertex(x, y);
  vertex(x + width, y);
  vertex(x + width + 200, y + height);
  vertex(x - 200, y + height);
  endShape(CLOSE);

  fill(190);
  beginShape();
  vertex(x - 80, y + height / 2 - 20);
  vertex(x + width + 80, y + height / 2 - 20);
  vertex(x + width + 100, y + height / 2);
  vertex(x - 100, y + height / 2);
  endShape(CLOSE);
}

function mainDisc() {
  push();
  fill(100);
  beginShape();
  vertex(0, 390);
  vertex(800, 390);
  vertex(800, 250);
  vertex(0, 250);
  endShape(CLOSE);
  pop();

  push();
  disc();
  pop();
}

function handLock() {
  // Define the rectangle properties
  let x = -50;
  let y = -50;
  let w = 100;
  let h = 500;
  let r = 55; // Corner radius

  // Draw the rectangle with two rounded corners (top-right and bottom-right)
  beginShape();
  // Top-left corner
  vertex(x, y + r);
  quadraticVertex(x, y, x + r, y);

  // Top-right corner
  vertex(x + w - r, y);
  quadraticVertex(x + w, y, x + w, y + r);

  // Bottom-right corner
  vertex(x + w, y + h);

  // Bottom-left corner
  vertex(x, y + h);
  endShape(CLOSE);

  circle(0, y + 50, 100);
  circle(0, y + 50, 80);
  circle(0, y + 50, 20);
  circle(0, y + 400, 30);
}
