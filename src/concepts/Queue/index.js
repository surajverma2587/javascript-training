class Queue {
  constructor() {
    this._queue = {}
    this._head = 0
    this._tail = 0
  }

  enqueue(value) {
    this._queue[this._tail] = value
    this._tail++
    return this.queue
  }
  
  dequeue() {
    if (this.length !== 0) {
      delete this._queue[this._head]
      this._head++
    }
    return this.queue
  }
  
  get queue() {
    return this._queue
  }

  get length() {
    return this._tail - this._head
  }

  get head() {
    return this._head
  }

  get tail() {
    return this._tail === 0 ? 0 : this._tail - 1
  }

  get first() {
    return ((this._tail - this._head) === 0) ? undefined : this._queue[this._head]
  }

  get last() {
    return ((this._tail - this._head) === 0) ? undefined : this._queue[this._tail - 1]
  }
}

const myQueue = new Queue()

myQueue.enqueue('H')
myQueue.enqueue('E')
myQueue.enqueue('L')

console.log('QUEUE:', myQueue.queue);
console.log('HEAD:', myQueue.head);
console.log('TAIL:', myQueue.tail);
console.log('LENGTH:', myQueue.length);
console.log('FIRST:', myQueue.first);
console.log('LAST:', myQueue.last);

console.log('=============');

myQueue.dequeue()
myQueue.dequeue()

console.log('QUEUE:', myQueue.queue);
console.log('HEAD:', myQueue.head);
console.log('TAIL:', myQueue.tail);
console.log('LENGTH:', myQueue.length);
console.log('FIRST:', myQueue.first);
console.log('LAST:', myQueue.last);