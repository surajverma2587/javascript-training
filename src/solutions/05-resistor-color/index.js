const resistorColour = (colour = '') => {
  const colours = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  }

  const myColour = colour.toLowerCase()

  if (Object.hasOwnProperty.call(colours, myColour)) {
    return colours[myColour]
  } else {
    return 'Invalid Colour'
  }
}

export default resistorColour