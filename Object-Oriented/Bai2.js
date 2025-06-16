class Rectangles {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  Rectangles() {
    let S = this.width * this.height;
    let cv = 2 * (this.width + this.height);
    console.log(`Diện tích: ${S}, Chu vi: ${cv}`);
  }
}
let a = new Rectangles(20, 12);
a.Rectangles();
console.log("=============================");
