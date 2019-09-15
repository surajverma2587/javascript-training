class Rectangle {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  area() {
    return this.x * this.y
  }

  perimeter() {
    return 2 * (this.x + this.y)
  }

  dimensions() {
    return `Length: ${this.x} Width: ${this.y}`
  }
}

export default Rectangle