class Shape {
  constructor() {}
  calculateArea() {
    throw new Error("Lớp con phải ghi đè phương thức getArea()");
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
}
const circle = new Circle(7);
const circleArea = circle.calculateArea();
console.log(`Chu vi: ${circleArea}`);
const rectangle = new Rectangle(8, 9);
const rectangleArea = rectangle.calculateArea();
console.log(`Diện tích: ${rectangleArea}`);
