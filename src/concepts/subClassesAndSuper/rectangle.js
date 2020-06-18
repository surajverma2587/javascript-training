import Shape from "./shape.js";

class Rectangle extends Shape {
  constructor(sideA, sideB) {
    const area = sideA * sideB;
    const perimeter = 2 * (sideA + sideB);

    super(area, perimeter);

    this.sideA = sideA;
    this.sideB = sideB;
  }

  isSquare() {
    return this.sideA === this.sideB ? "YES" : "NO";
  }
}

const rectangle = new Rectangle(5, 10);

console.log(`Is the rectangle a square? ${rectangle.isSquare()}`);

rectangle.printAllInfo();
