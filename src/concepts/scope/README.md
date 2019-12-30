# Scope

## What is scope?

In JavaScript, scope is defined as the current context of execution. If we consider the analogy of a conversation where you describe two people Alice and Bob and within the context of the conversation you mention stuff referencing Alice and Bob, then the conversation makes sense because you have all the information regarding the current context of the conversation. However, if you then mention Carol in the context of the same conversation without any reference to Carol then we consider Carol to be out of scope and not within the context of the conversation. Conversations in this case are similar to functions which have an execution context and reference to Alice and Bob are similar to variable declarations within the scope of the function. 

Scope can be loosely defined as the place in which JavaScript looks for stuff. It can also be considered as the context in which values and expressions are visible or can be referenced. If a variable or expression is not in the current scope, then it is unavailable for use. 

**Note**: Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice-versa.

### Example

```javascript
const parentVariable = 'parent'

const add = (num1, num2) => {
  const childVariable = num1 + num2
  console.log(childVariable)  // 3
  console.log(parentVariable) // 'parent'
}

add(1, 2) // 3

console.log(parentVariable) // 'parent'
console.log(childVariable) // 'ReferenceError'
```

In the above example, the child scope of the function's execution context has access to variables `childVariable` and access to `parentVariable` from the parent scope. However, the parent scope does not have access to the child scope from the parent scope and throws a reference error in JavaScript as it is trying to reference a variable `childVariable` that is not in the current scope.