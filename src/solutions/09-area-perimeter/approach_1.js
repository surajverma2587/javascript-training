const functionStoreConstructor = () => {
  const area = function () {
    return this.x * this.y
  }

  const perimeter = function () {
    return 2 * (this.x + this.y)
  }

  const dimensions = function () {
    return `Length: ${this.x} Width: ${this.y}`
  }

  return {
    area,
    perimeter,
    dimensions,
  }
}

const functionStore = functionStoreConstructor()

const rectangleObjectConstructor = (x, y) => {
  const myObj = Object.create(functionStore)
  myObj.x = x
  myObj.y = y
  return myObj
}

export default rectangleObjectConstructor