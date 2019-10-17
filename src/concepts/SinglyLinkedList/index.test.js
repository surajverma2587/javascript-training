import LinkedList from '.'

test('should return the empty LinkedList constructor object', () => {
  expect(new LinkedList()).toEqual({ _head: {}, _tail: {} })
})

test('should insert the first item via the constructor', () => {
  expect(new LinkedList(1)).toEqual({ _head: { data: 1, next: null }, _tail: { data: 1, next: null } })
})

test('should insert the first item via the insert method', () => {
  const myLinkedList = new LinkedList()
  myLinkedList.insert(1)

  expect(myLinkedList).toEqual({ _head: { data: 1, next: null }, _tail: { data: 1, next: null } })
})

test('should insert 2 items via the insert method', () => {
  const myLinkedList = new LinkedList()
  myLinkedList.insert(1)
  myLinkedList.insert(2)

  expect(myLinkedList).toEqual({ _head: { data: 1, next: { data: 2, next: null } }, _tail: { data: 2, next: null } })
})

test('should insert 2 items via the constructor and insert method', () => {
  const myLinkedList = new LinkedList(1)
  myLinkedList.insert(2)

  expect(myLinkedList).toEqual({ _head: { data: 1, next: { data: 2, next: null } }, _tail: { data: 2, next: null } })
})

test('should insert 3 items via the constructor and insert method', () => {
  const myLinkedList = new LinkedList(1)
  myLinkedList.insert(2)
  myLinkedList.insert(3)

  expect(myLinkedList).toEqual({ _head: { data: 1, next: { data: 2, next: { data: 3, next: null } } }, _tail: { data: 3, next: null } })
})

test('should remove the tail from a linked list with 1 item', () => {
  const myLinkedList = new LinkedList(1)
  myLinkedList.removeTail()
  expect(myLinkedList).toEqual({ _head: {}, _tail: {} })
})

test('should remove the tail from a linked list with 2 items', () => {
  const myLinkedList = new LinkedList(1)
  myLinkedList.insert(2)
  myLinkedList.removeTail()

  expect(myLinkedList).toEqual({ _head: { data: 1, next: null }, _tail: { data: 1, next: null } })
})

test('should remove the tail from a linked list with 3 items', () => {
  const myLinkedList = new LinkedList(1)
  myLinkedList.insert(2)
  myLinkedList.insert(3)
  myLinkedList.removeTail()

  expect(myLinkedList).toEqual({ _head: { data: 1, next: { data: 2, next: null } }, _tail: { data: 2, next: null } })
})

test('should not remove the tail from an empty linked list', () => {
  const myLinkedList = new LinkedList()
  myLinkedList.removeTail()
  expect(myLinkedList).toEqual({ _head: {}, _tail: {} })
})


test('should remove the head from a linked list with 1 item', () => {
  const myLinkedList = new LinkedList(1)
  myLinkedList.removeHead()
  expect(myLinkedList).toEqual({ _head: {}, _tail: {} })
})

test('should remove the head from a linked list with 2 items', () => {
  const myLinkedList = new LinkedList(1)
  myLinkedList.insert(2)
  myLinkedList.removeHead()

  expect(myLinkedList).toEqual({ _head: { data: 2, next: null }, _tail: { data: 2, next: null } })
})

test('should remove the head from a linked list with 3 items', () => {
  const myLinkedList = new LinkedList(1)
  myLinkedList.insert(2)
  myLinkedList.insert(3)
  myLinkedList.removeHead()

  expect(myLinkedList).toEqual({ _head: { data: 2, next: { data: 3, next: null } }, _tail: { data: 3, next: null } })
})

test('should not remove the head from an empty linked list', () => {
  const myLinkedList = new LinkedList()
  myLinkedList.removeHead()
  expect(myLinkedList).toEqual({ _head: {}, _tail: {} })
})

test('should return TRUE when linked list is empty', () => {
  const myLinkedList = new LinkedList()
  expect(myLinkedList.isEmpty()).toBe(true)
})

test('should return FALSE when linked list is not empty', () => {
  const myLinkedList = new LinkedList(1)
  expect(myLinkedList.isEmpty()).toBe(false)
})

test('should return TRUE when linked list has a single item', () => {
  const myLinkedList = new LinkedList(1)
  expect(myLinkedList.hasSingleItem()).toBe(true)
})

test('should return FALSE when linked list has no items', () => {
  const myLinkedList = new LinkedList()
  expect(myLinkedList.hasSingleItem()).toBe(false)
})

test('should reset a linked list', () => {
  const myLinkedList = new LinkedList(1)
  myLinkedList.insert(2)
  expect(myLinkedList).toEqual({ _head: { data: 1, next: { data: 2, next: null } }, _tail: { data: 2, next: null } })
  myLinkedList.reset()
  expect(myLinkedList).toEqual({ _head: {}, _tail: {} })
})

test('should return the head property', () => {
  const myLinkedList = new LinkedList(1)
  myLinkedList.insert(2)
  expect(myLinkedList.head).toEqual({ data: 1, next: { data: 2, next: null }})
})

test('should return the tail property', () => {
  const myLinkedList = new LinkedList(1)
  myLinkedList.insert(2)
  expect(myLinkedList.tail).toEqual({ data: 2, next: null })
})

test('should return TRUE if node contains the data', () => {
  const myLinkedList = new LinkedList(1)
  myLinkedList.insert(2)
  expect(myLinkedList.contains(2)).toBe(true)
})

test('should return FALSE if node does not contains the data', () => {
  const myLinkedList = new LinkedList(1)
  myLinkedList.insert(2)
  expect(myLinkedList.contains(3)).toBe(false)
})

test('should remove node by value from the middle of a linked list', () => {
  const myLinkedList = new LinkedList(1)
  myLinkedList.insert(2)
  myLinkedList.insert(3)
  myLinkedList.removeNode(2)
  expect(myLinkedList).toEqual({_head: { data: 1, next: { data: 3, next: null } }, _tail: { data: 3, next: null } })
})

test('should remove node by value from the head of a linked list', () => {
  const myLinkedList = new LinkedList(1)
  myLinkedList.insert(2)
  myLinkedList.insert(3)
  myLinkedList.removeNode(1)
  expect(myLinkedList).toEqual({_head: { data: 2, next: { data: 3, next: null } }, _tail: { data: 3, next: null } })
})

test('should remove node by value from the tail of a linked list', () => {
  const myLinkedList = new LinkedList(1)
  myLinkedList.insert(2)
  myLinkedList.insert(3)
  myLinkedList.removeNode(3)
  expect(myLinkedList).toEqual({_head: { data: 1, next: { data: 2, next: null } }, _tail: { data: 2, next: null } })
})
