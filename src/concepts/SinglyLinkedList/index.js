class LinkedList {
  constructor(value) {
    if (value) {
      const node = { value, next: null }
      this._head = node
    } else {
      this._head = {}
    }
    this._tail = this._head
  }

  insert(value) {
    const node = { value, next: null }
    if (this.isEmpty()) {
      this._head = node
      this._tail = this._head
    } else {
      this._tail.next = node
      this._tail = node
    }
  }

  removeHead() {
    if (this.isEmpty() || this.hasSingleItem()) {
      this.reset()
    } else {
      this._head = this._head.next
    }
  }
  
  removeTail() {
    if (this.isEmpty() || this.hasSingleItem()) {
      this.reset()
    } else {
      let node = this._head
      while (node.next !== this._tail) {
        node = node.next
      }
      node.next = null
      this._tail.next = null
      this._tail = node
    }
  }

  isEmpty() {
    return Object.keys(this._head).length === 0
  }

  hasSingleItem() {
    return this._head.next === null && this._head === this._tail
  }

  reset() {
    this._head = {}
    this._tail = this._head
  }

  get head() {
    return this._head
  }

  get tail() {
    return this._tail
  }
}

export default LinkedList