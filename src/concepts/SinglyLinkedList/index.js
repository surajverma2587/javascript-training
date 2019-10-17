class LinkedList {
  constructor(data) {
    if (data) {
      const node = { data, next: null }
      this._head = node
    } else {
      this._head = {}
    }
    this._tail = this._head
  }

  insert(data) {
    const node = { data, next: null }
    if (this.isEmpty()) {
      this._head = node
      this._tail = this._head
    } else {
      this._tail.next = node
      this._tail = node
    }
  }

  contains(data) {
    let node = this._head
    while (node && node.data !== data) {
      node = node.next
    }

    return (node && node.data) === data
  }

  removeNode(data) {
    let node = this._head
    let previousNode = this._head
    while (node.data !== data) {
      previousNode = node
      node = node.next
    }
    if (node === this._head) {
      this.removeHead()
    } else if (node === this._tail) {
      this.removeTail()
    } else {
      previousNode.next = node.next
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