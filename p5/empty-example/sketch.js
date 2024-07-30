let angle = 0;

function setup() {
  createCanvas(2000, 2000);
  rectMode(CENTER);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  angle = atan2(mouseY - height / 2, mouseX - width / 2);

  // rotate(angle);
  mainDisc();
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
  textAlign(CENTER, CENTER);
  fill(0);
  for (let angle = 0; angle <= 350; angle += 10) {
    let x = centerX + cos(radians(angle)) * numberRadius;
    let y = centerY - sin(radians(angle)) * numberRadius;
    text(angle, x, y);
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
  rotate(0.15);
  beginShape();
  fill(210); // Darker shade for the bottom bevel
  for (let angle = 0; angle <= 80; angle++) {
    let x = centerX + cos(radians(angle)) * (radius - 100);
    let y = centerY - sin(radians(angle)) * (radius - 100);
    vertex(x, y);
  }
  for (let angle = 80; angle >= 0; angle--) {
    let x = centerX + cos(radians(angle)) * radius;
    let y = centerY - sin(radians(angle)) * radius;
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();

  // Draw the tick marks
  for (let angle = 0; angle <= 60; angle++) {
    let x1 = centerX + cos(radians(angle)) * radius;
    let y1 = centerY - sin(radians(angle)) * radius;
    let x2 = centerX + cos(radians(angle)) * (radius - 20);
    let y2 = centerY - sin(radians(angle)) * (radius - 20);
    line(x1, y1, x2, y2);

    if (angle % 10 == 0) {
      // Draw longer lines every 30 degrees
      x2 = centerX + cos(radians(angle)) * (radius - 40);
      y2 = centerY - sin(radians(angle)) * (radius - 40);
      line(x1, y1, x2, y2);
    }

    if ((angle - 5) % 10 == 0) {
      // Draw longer lines every 30 degrees
      x2 = centerX + cos(radians(angle)) * (radius - 30);
      y2 = centerY - sin(radians(angle)) * (radius - 30);
      line(x1, y1, x2, y2);
    }
  }

  // Draw the numbers
  textSize(14);
  let numberRadius = 230;
  textAlign(CENTER, CENTER);
  fill(0);
  for (let angle = 0; angle <= 60; angle += 10) {
    let x = centerX + cos(radians(angle)) * numberRadius;
    let y = centerY - sin(radians(angle)) * numberRadius;
    text(angle, x, y);
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

  beginShape();
  
  endShape(CLOSE);
}

function mainDisc() {
  // push()
  // protractorBlade(-100, 200, 1000);
  // pop()

  push();
  fill(100);
  beginShape();
  vertex(0, 390);
  vertex(1200, 390);
  vertex(1200, 250);
  vertex(0, 250);
  endShape(CLOSE);
  pop();

  push();
  disc();
  pop();

  push();
  vernierScale();
  pop();

  push();
  protractorBlade(-450, 160, 1200, 200);
  pop();
  handLock();
}

function handLock() {
  // Define the rectangle properties
  let x = -50;
  let y = 0;
  let w = 100;
  let h = 300;
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

  circle(0, 50, 100);
  circle(0, 50, 80);
  circle(0, 50, 20);
  circle(0, 250, 30);
}

// function vernierScale() {
//   let centerX = width / 2;
//   let centerY = height / 2; // Move the center down a bit for better positioning
//   let radius = 300;
//   let bevelSize = 10;

//   // Draw the tick marks
//   for (let angle = 0; angle <= 360; angle += 10) {
//     let x1 = centerX + cos(radians(angle)) * radius;
//     let y1 = centerY - sin(radians(angle)) * radius;
//     let x2 = centerX + cos(radians(angle)) * (radius - 20);
//     let y2 = centerY - sin(radians(angle)) * (radius - 20);
//     line(x1, y1, x2, y2);

//     if (angle % 30 == 0) {
//       // Draw longer lines every 30 degrees
//       x2 = centerX + cos(radians(angle)) * (radius - 30);
//       y2 = centerY - sin(radians(angle)) * (radius - 30);
//       line(x1, y1, x2, y2);
//     }
//   }

//   // Draw the numbers
//   textSize(14);
//   let numberRadius = 360;
//   textAlign(CENTER, CENTER);
//   fill(0);
//   for (let angle = 0; angle <= 350; angle += 10) {
//     let x = centerX + cos(radians(angle)) * (numberRadius - 40);
//     let y = centerY - sin(radians(angle)) * (numberRadius - 40);
//     text(angle, x, y);
//   }

//   // Draw the bottom bevel
//   fill(160); // Darker shade for the bottom bevel
//   let circleRadius = 290;

//   circle(0, 0, circleRadius)
// }
