# Block Scoping

## What is a block?

A block in JavaScript is used to group zero or more statements together. The block is delimited by curly braces. Combining multiple statements together in a block statement is common practice in JavaScript and we use it often when working with if/else statements, while loops, functions, etc.

### Example

```javascript
const number = 24

if ((number % 10) === 0) {
  // This is the if block
  console.log(`${number} is a multiple of 10`)
} else {
  // This is the else block
  console.log(`${number} is not a multiple of 10`)
}

const multiply = (num1, num2) => {
  // This is a function block
  const result = num1 * num2
  console.log(`${num1} x ${num2} = ${result}`)
}

multiply(3, 10)
```

## What is block scoping?

Scoping in general terms is where JavaScript looks for something. This is usually linked to the current execution context of a block. Every JavaScript code will have a global scope which is referred to as the `window` object in the browser and `global` object in node. This is the place where variables are accessed from and we need to ensure that we declare a variable within a certain scope if it is being accessed by the current scope. 

### Example

```javascript
const name = 'Bob'

console.log(name)
```

The identifier `name` is declared within the same scope as it's implementation. When the `console.log()` method is executed, JavaScript intercepts the identifier `name` and looks for the variable named `name` within the current scope.

### Example

```javascript
const formatWelcomeText = (fName, lName) => {
  const formattedText = `Welcome ${fName} ${lName}`
  console.log(formattedName)
  return formattedName
}

formatWelcomeText('John', 'Smith')
```

When the function `formatWelcomeText` is executed, a new execution context is created for the function. Part of this execution context is the scope of the variables declared and the thread of execution i.e. statements within the function block. Before running through the thread of execution, the function undergoes preparation where the parameters `fName` and `lName` are declared within the function scope and assigned the values of the arguments `John` and `Smith`. This preparation of the function allows JavaScript to access the values of `fName` and `lName` when the thread of execution runs through each statement within the function block. A new variable `formattedText` is also declared within the block which puts the variable `formattedText` within the function scope and can be accessed when the `console.log()` method is executed. 

The accessing of variables defined within the scope of a block is called as block scoping. The `let` keyword is used to ensure that a variable is block scoped and used within the confines of the block. However, using the keyword `var` declares the variable in a global scope as opposed to a block scope. ES6 encourages the use of the `let` keyword and supports block scoping where applicable. Block scoping also reduces the risks of bugs or ambiguity introduced by other developers when using similar variable names.

### Example

```javascript
const capitalize = (str) => {
  var message = 'Capitalized: '
  if (str.length > 5) {
    const capitalString = str.toUpperCase()
    console.log(capitalString)
  } else {
    let message = 'Error: String length not greater than 5'
    console.log(message)
  }

  console.log(message)
}

capitalize('helloworld')

// Console
// > Capitalized: HELLOWORLD
// > Capitalized: 

capitalize('hello')

// Console
// > Error: String length not greater than 5
// > Capitalized: 
```

In the above example even though the variable name `message` is the same, `var message` ensures that a variable `message` is created within the scope of the function, accessible across the function block; however, `let message` is only accessible within the `else` block.