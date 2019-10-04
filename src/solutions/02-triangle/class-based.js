class Triangle {
  constructor(x, y, z) {
    if (
      (x > 0 && y > 0 && z > 0) &&
      (
        (x + y >= z) &&
        (y + z >= x) &&
        (x + z >= y)
      )
    ) {
      this.x = x
      this.y = y
      this.z = z
    }
    else {
      return new Error('OOPs')
    }
  }

  isEquilateral() {
    return (this.x === this.y && this.y === this.z && this.z === this.x)
  }

  isIsosceles() {
    return ((this.x === this.y && this.x !== this.z) || (this.y === this.z && this.y !== this.x) || (this.x === this.z && this.x !== this.y))
  }

  isScalene() {
    return (this.x !== this.y && this.y !== this.z && this.z !== this.x)
  }

  handler(condition, [trueFn, falseFn], args) {
    return condition.call(this) ? trueFn.call(this, args) : falseFn.call(this, args)
  }

  getTriangleType() {
    const triangles = ['EQI', 'ISO', 'SCA']
    const fns = [this.isEquilateral, this.isIsosceles, this.isScalene]

    const self = this
    let result = 'INVALID'

    fns.forEach(function (fn, index) {
      if (fn.call(self)) {
        result = `${triangles[index]} triangle`
      }
    })

    return result
  }
}

const trueFn = function (type) {
  return `Triangle with sides [${this.x}, ${this.y}, ${this.z}]: ${type} triangle - TRUE`
}

const falseFn = function (type) {
  return `Triangle with sides [${this.x}, ${this.y}, ${this.z}]: ${type} triangle - FALSE`
}

const fns = [trueFn, falseFn]

const myTriangle = new Triangle(3, 3, 3)

console.log(myTriangle.handler(myTriangle.isEquilateral, fns, 'EQI'))
console.log(myTriangle.handler(myTriangle.isIsosceles, fns, 'ISO'))
console.log(myTriangle.handler(myTriangle.isScalene, fns, 'SCA'))

console.log(myTriangle.getTriangleType());