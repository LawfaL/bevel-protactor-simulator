class HandLock {
  constructor(x, y, width, height, radius) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.radius = radius;
  }

  render() {
    beginShape();
    vertex(this.x, this.y + this.radius);
    quadraticVertex(this.x, this.y, this.x + this.radius, this.y);

    // Top-right corner
    vertex(this.x + this.width - this.radius, this.y);
    quadraticVertex(this.x + this.width, this.y, this.x + this.width, this.y + this.radius);

    // Bottom-right corner
    vertex(this.x + this.width, this.y + this.height);

    // Bottom-left corner
    vertex(this.x, this.y + this.height);
    endShape(CLOSE);

    circle(0, this.y + 50, 100);
    circle(0, this.y + 50, 80);
    circle(0, this.y + 50, 20);
    circle(0, this.y + 400, 30);
  }
}
