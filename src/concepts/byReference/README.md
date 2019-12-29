# By Reference vs By Value

When JavaScript uses the assignment operator it always assigns a value to a variable. When the value is one of the following data types: Boolean, Number, String, null, or undefined; then the actual value is assigned to the variable. However, if the value is one of the following types: Function, Array, or Object; a reference to the object in memory is assigned to the variable. This reference is still a value, not the actual object itself, and usually some pointer to the memory location of the object.

### Example

```javascript
// Assignment by value
const number = 1
const bool = true
const string = 'Hello'
const a = null
const b = undefined

// Assignment by reference
const multiply = (a, b) => a * b
const user = {
  name: 'Alice',
  age: 30
}
const words = ['hello', 'world']
```

**Note**: Values by reference can be assigned to other variables where the variables all point to the same reference and if the actual object changes in memory then the two variables pointing to the object also change their outcome. In the example below, if we use the pointer of `firstReference` to update the object then the pointer of `secondReference` will also point to the updated object. This is also the case when we update the object via the `secondReference` pointer. 

### Example

```javascript
const firstReference = { name: 'Alice', age: 30 }
const secondReference = firstReference

firstReference.age += 1

console.log(secondReference.age)  // 31
console.log(secondReference.name)  // Alice

secondReference.name = 'Bob'

console.log(firstReference.name)  // Bob
console.log(firstReference.age)  // 31
```