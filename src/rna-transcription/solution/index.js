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