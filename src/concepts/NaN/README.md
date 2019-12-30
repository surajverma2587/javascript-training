# NaN

This is a special value in JavaScript that determines a mathematical operation performed was invalid and instead of throwing an error it assigns a value of `NaN` to the variable. It represents `Not A Number`. It is the returned value when `Math` functions fail or when a function trying to parse a number fails.

### Example

```javascript
const number = 'hello'

const result = number * 2
console.log(result) //  NaN
```

In the above example, when JavaScript tries to evaluate the expression for `result` it is trying to perform an invalid mathematical operation since `number` is a String datatype. At this point JavaScript assigns the special `NaN` value to the variable result.

**Note**: You could use the `isNaN()` method to determine if the value is `NaN` or not, which returns `true` for a `NaN` value.