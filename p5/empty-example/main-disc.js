class MainDisc {
  constructor(centerX, centerY, circleRadius, radius, textSize) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.circleRadius = circleRadius;
    this.textSize = textSize
  }

  render() {
    fill(100);
    beginShape();
    vertex(0, 390);
    vertex(800, 390);
    vertex(800, 250);
    vertex(0, 250);
    endShape(CLOSE);

    // Draw the bottom bevel
    fill(160); // Darker shade for the bottom bevel
    circle(0, 0, this.circleRadius);

    // Draw the tick marks
    for (let angle = 0; angle <= 360; angle++) {
      let x1 = this.centerX + cos(radians(angle)) * this.radius;
      let y1 = this.centerY - sin(radians(angle)) * this.radius;
      let x2 = this.centerX + cos(radians(angle)) * (this.radius + 20);
      let y2 = this.centerY - sin(radians(angle)) * (this.radius + 20);
      line(x1, y1, x2, y2);

      if (angle % 10 == 0) {
        // Draw longer lines every 30 degrees
        x2 = this.centerX + cos(radians(angle)) * (this.radius + 40);
        y2 = this.centerY - sin(radians(angle)) * (this.radius + 40);
        line(x1, y1, x2, y2);
      }

      if ((angle - 5) % 10 == 0) {
        // Draw longer lines every 30 degrees
        x2 = this.centerX + cos(radians(angle)) * (this.radius + 30);
        y2 = this.centerY - sin(radians(angle)) * (this.radius + 30);
        line(x1, y1, x2, y2);
      }
    }

    // Draw the numbers
    textSize(this.textSize);
    fill(0);
    for (let angle = 0; angle <= 350; angle += 10) {
      push();
      textAlign(CENTER, CENTER);
      let x = this.centerX + cos(radians(angle)) * (this.radius + 60);
      let y = this.centerY - sin(radians(angle)) * (this.radius + 60);
      translate(x, y);
      rotate(-radians(angle) - radians(270));
      text(angle, 0, 0);
      pop();
    }
  }
}
