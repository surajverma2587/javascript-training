# Undefined vs Undeclared

## What is undefined?

Undefined is a primitive value in JavaScript which is assigned to variables that have just been declared and not assigned with a value to the variable.

### Example

```javascript
let num
const user = 'Bob'

console.log(num)  //  undefined
console.log(user) //  Bob
```

In the above example, the variable `num` is declared using the `let` keyword. If the `const` keyword was used instead of the `let` keyword for `num`, then JavaScript throws an error `SyntaxError: Missing initializer in const declaration`. The `const` declaration always requires an assignment operator. You can use `const` to assign an `undefined` value, but you will have to explicitly set the value of the `const` variable as `undefined`. 

In functions that expect an argument, when the function is invoked with no arguments then the parameter to which the argument is assigned to will be declared with an `undefined` value.

### Example

```javascript
const printName = (name) => {
  console.log(name)
}

printName() //  undefined
```

## What is undeclared?

When we do not declare a variable name with a keyword then it is an undeclared variable. When we try to reference the undeclared variable then JavaScript throws a `Reference Error`.

### Example

```javascript
const display = () => {
  'use strict'
  result = 10
  console.log(result)
}

display()
```

**Note**: We are using the strict mode in the above example by `'use strict'` which ensures that JavaScript follows certain strict rules. In the above case the variable name `result` is not declared as a `let`, `const` or `var` variable and hence JavaScript never declares the variable `result` within the scope of the function and when we try to reference the variable `result` in the `console.log()` method we get a `Reference Error`.

### Example

```javascript
const display = () => {
  result = 10
  console.log(result) //  10
}

display()

console.log(result) //  10
```

When the strict mode is not enforced, also called the `sloppy mode` then the undeclared variable name `result` gets declared by default within the global scope and can be accessed outside of the function where it was declared. Note that the function has to be called first before the `console.log()`. If we `console.log()` before the function is called like in the example shown below then we get a `Reference Error` since the variable `result` was not yet declared in the global scope.

### Example

```javascript
const display = () => {
  result = 10
  console.log(result) //  10
}

console.log(result) //  Reference Error

display()
```