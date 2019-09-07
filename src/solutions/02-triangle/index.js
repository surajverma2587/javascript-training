const isValid = (a, b, c) => {
  return ((a > 0 && b > 0 && c > 0) && ((a + b >= c) && (b + c >= a) && (a + c >= b)))
}

const isEquilateral = (a, b, c) => {
  return (a === b && b === c && c === a)
}

const isIsosceles = (a, b, c) => {
  return ((a === b && a !== c) || (b === c && b !== a) || (a === c && a !== b))
}

const getTriangleType = (a, b, c) => {
  if (isValid(a, b, c)) {
    if (isEquilateral(a, b, c)) {
      return 'EQUILATERAL Triangle'
    }
    if (isIsosceles(a, b, c)) {
      return 'ISOSCELES Triangle'
    }
    return 'SCALENE Triangle'
  }
  return 'INVALID Triangle'
}

export default getTriangleType

/**
 * Refactored version.
 * Comment the code above
 * and uncomment the code below
 * and run your tests to check
 * if the refactored code
 * passes all tests
 */

// const isValid = (a, b, c) => (
//   (a > 0 && b > 0 && c > 0) &&
//   (
//     (a + b >= c) &&
//     (b + c >= a) &&
//     (a + c >= b)
//   )
// )

// const isEquilateral = (a, b, c) => (a === b && b === c && c === a)

// const isIsosceles = (a, b, c) => (
//   (a === b && a !== c) ||
//   (b === c && b !== a) ||
//   (a === c && a !== b)
// )

// const getTriangleType = (a, b, c) => {
//   if (isValid(a, b, c)) {
//     if (isEquilateral(a, b, c)) return 'EQUILATERAL Triangle'
//     if (isIsosceles(a, b, c)) return 'ISOSCELES Triangle'
//     return 'SCALENE Triangle'
//   }
//   return 'INVALID Triangle'
// }

// export default getTriangleType