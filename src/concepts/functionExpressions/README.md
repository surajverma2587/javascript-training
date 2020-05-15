# Function Expressions

## What is a function expression?

In simple terms when we declare a variable that has a value which is a function then it called a function expression. Functions in such cases act as 'First Class Citizens' which means they can move around like any other variable, for instance a function can return a function, or we can pass a function as an argument in to another function. A function expression uses the `function` keyword to define a function followed by a function name, the parameters and the function body.

### Example

```javascript
const multiply = function multiplyTwoNumbers(num1, num2) {
  return num1 * num2
}

multiply(2, 3)  // 6
```

In the above example, the function name is `multiplyTwoNumbers` and this named function is assigned as a value to a variable declared as `multiply`. When the functionality needs to be invoked we call the function by its variable declaration followed by the parentheses. 

### Example 

```javascript
const multiply = function (num1, num2) {
  return num1 * num2
}

multiply(2, 3)  // 6
```

In the above example, the function name is not mentioned and such functions are called as anonymous functions. This is another way of representing function expressions.

**NOTE**: Function expressions in JavaScript are not hoisted, unlike function declarations. If we try to access the variable which is hoisted we get `undefined` but the function definition isn't hoisted so if we try to run the function it throws a `TypeError` of not a function.

### Example 

```javascript
console.log(add)  // undefined 

add(1, 2) // TypeError: add is not a function

const add = function(num1, num2) {
  console.log('adding 2 numbers')
  return num1 + num2
}
```

## What is a function declaration?

Function declarations are functions which are declared in JavaScript but not as a value assigned to a variable like function expressions. This is done using the `function` keyword followed by a function name as shown in the example below.

### Example

```javascript
function add(a, b) {
  return a + b
} 
```

**Note**: Function declarations are hoisted in JavaScript so if we replace the last example of function expressions with a function declaration then JavaScript will not throw a `TypeError` of not a function.

### Example 

```javascript
console.log(add)  // [Function: add]

add(1, 2) // done

function add(a, b) {
   console.log('done')
   return a + b
}
```

## Named Functions

When the `function` keyword is followed by a function name then the function is called as a named function. This is useful when we want to ensure that our functionality is declarative and also useful during recursion, that is call the function again by the function name (explicit name). However, if the function expression is an anonymous function then we can call the function recursively by the variable name (implicit name).

### Example

```javascript
// Explicit name
const getFactorial = function factorial(n) {
  if (n <= 1) {
    return 1
  }
  return n * factorial(n - 1)
}
const result = getFactorial(3)

console.log(result) // 6

// Implicit name
const getFactorial = function (n) {
  if (n <= 1) {
    return 1
  }
  return n * getFactorial(n - 1)
}

const result = getFactorial(3)

console.log(result) // 6
```