# Immediately Invoked Function Expressions (IIFEs)

## What is an IIFE?

An IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined instead of declaring a function to a variable and then invoking the function. It is a design pattern which is also known as a Self-Executing Anonymous Function. For a function to be invoked immediately we need to enclose the function definition within round braces (Grouping Operator). This prevents the outer scope to access variables within the IIFE scope as well as polluting the global scope with variables defined inside the IIFE scope.

### Example

```javascript
const user = 'Bob';

(function () {
  console.log(`Welcome ${user}`)
}())
```

In the above example the function is executed immediately and prints `Welcome Bob`.

**Note**: Assigning the IIFE to a variable stores the function's return value, not the function definition itself. In this case we don't call the `welcomeText` as a function call with the parentheses instead just by the variable name.

### Example

```javascript
const user = 'Bob';

const welcomeText = (function () {
  console.log(`Welcome ${user}`)
}())

welcomeText
```