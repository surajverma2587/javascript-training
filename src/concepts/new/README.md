# new

## What is the new keyword

The `new` keyword in JavaScript is responsible for creating a new instance of a user-defined object. If the `new` keyword is used against a built-in object type that has a constructor function then the constructor function of the object type is created and returns an object from the constructor function.

### Example

```javascript
const userObjectCreator = function (name, age) {
  const myObject = {}
  myObject.name = name
  myObject.age = age
  return myObject
}

const user1 = userObjectCreator('Bob', 30)
```

In the above example we declare a function expression against the variable name `userObjectCreator` and when we invoke the function `userObjectCreator('Bob', 30)` we store the returned value from the function call against the variable name `user1`. The same thing can be achieved by using the `new` keyword as shown below:

```javascript
const User = function (name, age) {
  this.name = name
  this.age = age
}

const user1 = new User('Bob', 30)
```

In the above example, the `new` keyword creates an instance of the `User` object against the variable name `user1`. `User` is invoked as a regular function but when the execution context of the function call is created, JavaScript ensures an empty object is created with the `User` function scope and this object is reference with the variable name `this`. When the body of the `User` function is executed, the `this` object is added with two properties `name` and `age` where the arguments are assigned to the properties of the `this` object. The use of the `new` keyword also ensures that the `User` function implicitly returns the `this` object from the execution context of the function when there is no explicit return statement. At this point, we have a `user1` object with name as 'Bob' and age as 30. Similarly we can create instances of other user object by using the `new` keyword and passing the required arguments to the `User` function. 

In a JavaScript `class`, the pre-defined `constructor` function is executed which is similar in functionality to the above function. 

```javascript
class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const user1 = new User('Bob', 30)
```