# Darts

## Challenge

Write a function that returns the earned points in a single toss of a Darts game.

Darts is a game where players throw darts to a target.

In our particular instance of the game, the target rewards with 4 different amounts of points, depending on where the dart lands:

- If the dart lands outside the target, player earns no points (0 points).
- If the dart lands in the outer circle of the target, player earns 1 point.
- If the dart lands in the middle circle of the target, player earns 5 points.
- If the dart lands in the inner circle of the target, player earns 10 points.

The outer circle has a radius of 10 units (This is equivalent to the total radius for the entire target), the middle circle a radius of 5 units, and the inner circle a radius of 1. Of course, they are all centered to the same point (That is the circles are concentric) defined by the coordinates (0, 0).

Write a function that given a point in the target (defined by its real cartesian coordinates x and y), returns the correct amount earned by a dart landing in that point.

### Note

- Write your tests in the file `index.spec.js` located inside the `__tests__` directory.
- Add the function in file `index.js`.
- Follow a Test Driven Development (TDD) approach.

### Concepts Covered

- [if/else operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

### Useful Links

- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Jest Framework](https://jestjs.io/docs/en/getting-started)
