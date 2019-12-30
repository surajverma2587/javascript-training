# Spread Operator

## What is the spread operator?

The spread operator is a special operator in JavaScript introduced by es6 which allows us to pull individual elements and spread them within an object, array or function arguments. The spread operator can be used for multiple purposes as shown below:

## Spread Operator in Arrays

When we spread an array we are pulling the individual items from the array we are spreading and inserting them in another array. It is important to note that these items can be any values from strings to other arrays as well.

### Example

```javascript
const boys = ['Alex', 'Bob', 'Max']
const girls = ['Kate', 'Jessie']

const result1 = ['Adam', ...boys] 
console.log(result1) // ['Adam', 'Alex', 'Bob', 'Max']

const result2 = [...boys, 'Adam'] 
console.log(result2) // ['Alex', 'Bob', 'Max', 'Adam']

const boysGirls = [...boys, ...girls]
console.log(boysGirls) // ['Alex', 'Bob', 'Max', 'Kate', 'Jessie']

const girlsBoys = [...girls, ...boys]
console.log(girlsBoys) // ['Kate', 'Jessie', 'Alex', 'Bob', 'Max']
```

In the above example, for `result1` the items of the `boys` array are being spread where each item is pulled and inserted in to the `result1` array after `'Adam'` is inserted in to the `result1` array. Similarly, for `result2` the items of the `boys` array are being spread where each item is pulled and inserted in to the `result2` array before `'Adam'` is inserted in to the `result2` array. In `boysGirls` array the items of the `boys` array are spread first followed by the `girls` array and vice-versa in the `girlsBoys` array. 

## Spread Operator in Objects

When we spread an object we are pulling the individual key value pairs from the object we are spreading and inserting them as new key value pairs in another object. It is important to note that the values of the key value pair can be anything from string to even other objects.

### Example

```javascript
const boys = {
  b1: 'Alex',
  b2: 'Bob',
  b3: 'Max',
}
const girls = {
  g1: 'Kate',
  g2: 'Jessie',
}

const result1 = { b4: 'Adam', ...boys }
const result2 = { ...boys, b4: 'Adam' }

console.log(result1)
console.log(result2) 
/*
  {
    b1: 'Alex',
    b2: 'Bob',
    b3: 'Max',
    b4: 'Adam',
  }
 */


const boysGirls = { ...boys, ...girls }
const girlsBoys = { ...girls, ...boys }

console.log(boysGirls)
console.log(girlsBoys)
/*
  {
    b1: 'Alex',
    b2: 'Bob',
    b3: 'Max',
    b4: 'Adam',
    g1: 'Kate',
    g2: 'Jessie',
  }
 */
```

In the above example both `result1` and `result2` hold the same object since the order of the keys in an object are not important. However, for `result1` `'Adam'` was added first then followed by every key value pair within the `boys` object, and for `result2` every key value pair within the `girls` object was added first followed by `'Adam'`. In the `boysGirls` object the key value pairs of the `boys` object are spread first followed by the key value pairs of the `girls` object and vice-versa for the `girlsBoys` object.

## Spread Operator in Functions

When we define a function, we usually declare the inputs as parameters. These parameters are placeholders for the arguments (values passed as input to the function when invoked). We can use the spread operator to pass in an arguments array which JavaScript will interpret and assign the individual array items to their corresponding parameter names.

### Example

```javascript
const add = (num1, num2) => num1 + num2

add(1, 2) // 3

const args = [1, 2]

add(...args)  // 3
```

In the above example we have a defined a function called add which accepts two parameters, `num1` and `num2`. When we invoke the `add` function for the first time we explicitly pass the arguments (values) in the order they are expected based on the function definition, where `num1` gets the value of `1` assigned to it and `num2` gets the value of `2` assigned to it. However, we can also pass an array of arguments `args` where the individual items are in the same order as the parameter in the function definition; but in order to map the individually pulled item from the `args` array to the function's parameter we must use the `spread` operator which assigns the value of `1` to `num1` and the value of `2` to `num2`. It is important to note that there is no limit on the size of the array and that the order of the items in the array being spread must match the order of the parameters in the function's definition.