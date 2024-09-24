class MainDisc {
  constructor(centerX, centerY, circleRadius, radius, textSize) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.circleRadius = circleRadius;
    this.textSize = textSize;
  }

  render() {
    rotate(this.angle);

    fill(100);
    beginShape();
    vertex(0, this.circleRadius * 0.3);
    vertex(this.circleRadius, this.circleRadius * 0.3);
    vertex(this.circleRadius, this.circleRadius * 0.5);
    vertex(0, this.circleRadius * 0.5);
    endShape(CLOSE);

    // Draw the bottom bevel
    fill(160); // Darker shade for the bottom bevel
    circle(0, 0, this.circleRadius);
    strokeWeight(0.2);

    // Draw the tick marks
    for (let angle = 0; angle <= 360; angle++) {
      let x1 = this.centerX + cos(radians(angle)) * this.radius;
      let y1 = this.centerY - sin(radians(angle)) * this.radius;
      let x2 = this.centerX + cos(radians(angle)) * (this.radius + this.circleRadius * 0.12);
      let y2 = this.centerY - sin(radians(angle)) * (this.radius + this.circleRadius * 0.12);
      line(x1, y1, x2, y2);

      if (angle % 10 == 0) {
        // Draw longer lines every 30 degrees
        x2 = this.centerX + cos(radians(angle)) * (this.radius + this.circleRadius * 0.18);
        y2 = this.centerY - sin(radians(angle)) * (this.radius + this.circleRadius * 0.18);
        line(x1, y1, x2, y2);
      }

      if ((angle - 5) % 10 == 0) {
        // Draw longer lines every 30 degrees
        x2 = this.centerX + cos(radians(angle)) * (this.radius + this.circleRadius * 0.15);
        y2 = this.centerY - sin(radians(angle)) * (this.radius + this.circleRadius * 0.15);
        line(x1, y1, x2, y2);
      }
    }

    // Draw the numbers
    textSize(this.textSize);
    fill(0);
    for (let angle = 0; angle <= 350; angle += 10) {
      push();
      textAlign(CENTER, CENTER);
      let x = this.centerX + cos(radians(angle)) * (this.radius + this.circleRadius * 0.23);
      let y = this.centerY - sin(radians(angle)) * (this.radius + this.circleRadius * 0.23);
      translate(x, y);
      rotate(-radians(angle) - radians(270));
      text(angle, 0, 0);
      pop();
    }
  }
}
