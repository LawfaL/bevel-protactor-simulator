class HandLock {
  constructor(x, y, width, height, radius) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.radius = radius;
  }

  render() {
    fill(200);

    beginShape();
    vertex(this.x, this.y + this.radius);
    quadraticVertex(this.x, this.y, this.x + this.radius / 1.5, this.y);

    // Top-right corner
    vertex(this.x + this.width - this.radius / 1.5, this.y);
    quadraticVertex(this.x + this.width, this.y, this.x + this.width, this.y + this.radius);

    // Bottom-right corner
    vertex(this.x + this.width, this.y + this.height);

    // Bottom-left corner
    vertex(this.x, this.y + this.height);
    endShape(CLOSE);

    circle(0, this.y + 35, this.width * 0.9);
    circle(0, this.y + 35, 20);
    circle(0, this.y + this.height - 35, this.width * 0.4);
  }
}
