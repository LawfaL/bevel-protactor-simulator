class ProtractorBlade {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  render() {
    fill(200);

    beginShape();
    vertex(this.x, this.y);
    vertex(this.x + this.width, this.y);
    vertex(this.x + this.width + 200, this.y + this.height);
    vertex(this.x - 200, this.y + this.height);
    endShape(CLOSE);

    fill(190);
    beginShape();
    vertex(this.x - 80, this.y + this.height / 2 - 20);
    vertex(this.x + this.width + 80, this.y + this.height / 2 - 20);
    vertex(this.x + this.width + 100, this.y + this.height / 2);
    vertex(this.x - 100, this.y + this.height / 2);
    endShape(CLOSE);
  }
}
