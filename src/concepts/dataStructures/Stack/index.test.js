import Stack from '.'

describe('Stack Push', () => {
  let myStack

  beforeEach(() => {
    myStack = new Stack()
  })

  test('should push one item in to a stack', () => {
    myStack.push('H')
  
    const expected = { '0': 'H' }
    const actual = myStack.getStack()
  
    expect(actual).toEqual(expected)
  })
  
  test('should push two items in to a stack', () => {
    myStack.push('H')
    myStack.push('E')
  
    const expected = { '0': 'H', '1': 'E' }
    const actual = myStack.getStack()
  
    expect(actual).toEqual(expected)
  })
})

describe('Stack Pop', () => {
  let myStack

  beforeEach(() => {
    myStack = new Stack()
    myStack.push('F')
    myStack.push('O')
    myStack.push('O')
  })

  test('should pop one item from a stack', () => {
    myStack.pop()
  
    const expected = { '0': 'F', '1': 'O' }
    const actual = myStack.getStack()
  
    expect(actual).toEqual(expected)
  })
  
  test('should pop two items from a stack', () => {
    myStack.pop()
    myStack.pop()
  
    const expected = { '0': 'F' }
    const actual = myStack.getStack()
  
    expect(actual).toEqual(expected)
  })

  test('should return {} when all items are popped', () => {
    myStack.pop()
    myStack.pop()
    myStack.pop()
  
    const expected = {}
    const actual = myStack.getStack()
  
    expect(actual).toEqual(expected)
  })

  test('should return {} when more items are popped from empty stack', () => {
    myStack.pop()
    myStack.pop()
    myStack.pop()
    myStack.pop()
  
    const expected = {}
    const actual = myStack.getStack()
  
    expect(actual).toEqual(expected)
  })
})

describe('Stack Reset', () => {
  test('should reset a stack', () => {
    const myStack = new Stack()
    myStack.push('F')

    expect(myStack.getStack()).toEqual({ '0': 'F' })
    expect(myStack.length()).toEqual(1)

    myStack.reset()

    expect(myStack.getStack()).toEqual({})
    expect(myStack.length()).toEqual(0)
  })
  
})

describe('Stack Getters', () => {
  let myStack

  beforeEach(() => {
    myStack = new Stack()
    myStack.push('F')
    myStack.push('O')
    myStack.push('O')
  })

  test('should get first item from the stack', () => {
    const expected = 'F'
    const actual = myStack.getFirst()

    expect(actual).toEqual(expected)
  })

  test('should get last item from the stack', () => {
    const expected = 'O'
    const actual = myStack.getLast()

    expect(actual).toEqual(expected)
  })

  test('should get length of the stack', () => {
    const expected = 3
    const actual = myStack.length()

    expect(actual).toEqual(expected)
  })

  test('should get the stack', () => {
    const expected = { '0': 'F', '1': 'O', '2': 'O' }
    const actual = myStack.getStack()

    expect(actual).toEqual(expected)
  })
})

describe('Stack Constructor', () => {
  test('should construct a stack', () => {
    const expected = { _stack: {}, _index: 0 }
    const actual = new Stack()

    expect(actual).toEqual(expected)
  })
})





