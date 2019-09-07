export const toRNA = (nucleotide) => {
  switch (nucleotide) {
    case 'G':
      return 'C'
    case 'C':
      return 'G'
    case 'T':
      return 'A'
    case 'A':
      return 'U'
    default:
      return ''
  }
};

export const stringToArray = (dnaString) => {
  return dnaString.split('')
}

export const converter = (nucleotides) => {
  const myArray = nucleotides.map((nucleotide) => {
    return toRNA(nucleotide);
  });
  return myArray.join('');
}

const dnaSequencer = (dnaSequence) => {
  const dnaSequenceArray = stringToArray(dnaSequence);

  const result = converter(dnaSequenceArray);

  return result;
}

export default dnaSequencer;

/**
 * Refactored version.
 * Comment the code above
 * and uncomment the code below
 * and run your tests to check
 * if the refactored code
 * passes all tests
 */

// export const toRNA = nucleotide => {
//   switch (nucleotide) {
//     case 'G': return 'C'
//     case 'C': return 'G'
//     case 'T': return 'A'
//     case 'A': return 'U'
//     default: return ''
//   }
// };

// export const stringToArray = dnaString => [...dnaString]

// export const converter = nucleotides => nucleotides
//   .map(nucleotide => toRNA(nucleotide))
//   .join('');

// const dnaSequencer = dnaSequence => converter(stringToArray(dnaSequence));

// export default dnaSequencer;