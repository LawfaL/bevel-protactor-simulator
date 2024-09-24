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
    vertex(this.x - this.width * 0.5, this.y - this.width * 0.7 + this.radius);
    quadraticVertex(this.x - this.width * 0.5, this.y - this.width * 0.7, this.x - this.width * 0.5 + this.radius * 0.6, this.y - this.width * 0.7);

    // Top-right corner
    vertex(this.x - this.width * 0.5 + this.width - this.radius * 0.6, this.y - this.width * 0.7);
    quadraticVertex(this.x - this.width * 0.5 + this.width, this.y - this.width * 0.7, this.x - this.width * 0.5 + this.width, this.y - this.width * 0.7 + this.radius);

    // Bottom-right corner
    vertex(this.x - this.width * 0.5 + this.width, this.y - this.width * 0.7 + this.height);

    // Bottom-left corner
    vertex(this.x - this.width * 0.5, this.y - this.width * 0.7 + this.height);
    endShape(CLOSE);

    circle(0, this.y, this.width * 0.9);
    circle(0, this.y, 20);
    circle(0, this.y + this.height - this.width * 1, this.width * 0.4);
  }
}
