class VernierScale {
  constructor(x, y, radius, circleRadius, textSize) {
    this.x = x
    this.y = y
    this.radius = radius
    this.circleRadius = circleRadius
    this.textSize = textSize
  }
  render() {
    strokeWeight(0.2);
    // Draw the bottom bevel
    fill(210); // Darker shade for the bottom bevel
    circle(0, 0, this.circleRadius);

    // Draw the bottom bevel
    fill(240); // Darker shade for the bottom bevel
    circle(0, 0, this.circleRadius - this.circleRadius * 0.4);

    push();
    beginShape();
    fill(210); // Darker shade for the bottom bevel
    for (let angle = 75; angle <= 105; angle++) {
      let x = this.x + cos(radians(angle)) * (this.radius - this.radius * 0.4);
      let y = this.y - sin(radians(angle)) * (this.radius - this.radius * 0.4);
      vertex(x, y);
    }
    for (let angle = 105; angle >= 75; angle--) {
      let x = this.x + cos(radians(angle)) * this.radius;
      let y = this.y - sin(radians(angle)) * this.radius;
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();

    // Draw the tick marks
    for (let angle = 78, i = 0; angle < 103; angle++, i++) {
      let x1 = this.x + cos(radians(angle)) * this.radius;
      let y1 = this.y - sin(radians(angle)) * this.radius;
      let x2 = this.x + cos(radians(angle)) * (this.radius - this.radius * 0.1);
      let y2 = this.y - sin(radians(angle)) * (this.radius - this.radius * 0.1);
      line(x1, y1, x2, y2);

      if (i % 3 == 0) {
        //  Draw longer lines every 30 degrees
        x2 = this.x + cos(radians(angle)) * (this.radius - this.radius * 0.2);
        y2 = this.y - sin(radians(angle)) * (this.radius - this.radius * 0.2);
        line(x1, y1, x2, y2);
      }

      if (i % 6 == 0) {
        // Draw longer lines every 30 degrees
        x2 = this.x + cos(radians(angle)) * (this.radius - this.radius * 0.3);
        y2 = this.y - sin(radians(angle)) * (this.radius - this.radius * 0.3);
        line(x1, y1, x2, y2);
      }
    }

    // Draw the numbers
    textSize(this.textSize);
    let i = 0;
    let iteration = [60, 30, 0, 30, 60];

    textAlign(CENTER, CENTER);
    fill(0);
    for (let angle = 78; angle <= 200; angle += 6) {
      let x = this.x + cos(radians(angle)) * (this.radius - this.radius * 0.35);
      let y = this.y - sin(radians(angle)) * (this.radius - this.radius * 0.35);
      text(iteration[i], x, y);
      i++;
    }
  }
}
