const rectangleConstructor = function (x, y) {
  this.x = x
  this.y = y
}

rectangleConstructor.prototype.area = function () {
  return this.x * this.y
}

rectangleConstructor.prototype.perimeter = function () {
  return 2 * (this.x + this.y)
}

rectangleConstructor.prototype.dimensions = function () {
  return `Length: ${this.x} Width: ${this.y}`
}

export default rectangleConstructor