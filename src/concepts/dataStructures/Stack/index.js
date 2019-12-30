class Stack {
  constructor() {
    this._stack = {}
    this._index = 0
  }

  push(value) {
    this._stack[this._index] = value
    this._index++
    return this._stack
  }
  
  pop() {
    if (this._index === 0) {
      return undefined
    }
    const value = this._stack[this._index - 1]
    delete this._stack[this._index - 1]
    this._index--
    return value
  }

  length() {
    return this._index !== 0 ? this._index : 0
  }

  getLast() {
    return this._stack[this._index - 1]
  }
  
  getFirst() {
    return this._stack[0]
  }
  
  getStack() {
    return this._stack
  }

  reset() {
    this._stack = {}
    this._index = 0
  }
}

export default Stack