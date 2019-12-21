const pipe = (...fns) => dna => fns.reduce((acc, fn) => fn(acc), dna);

export const convertStringToArray = string => [...string]

export const getRNAComplement = nucleotide => {
  switch (nucleotide) {
    case 'G': return 'C'
    case 'C': return 'G'
    case 'T': return 'A'
    case 'A': return 'U'
    default: return ''
  }
}

export const convertDnaArrayToRnaArray = dnaArray => dnaArray.map(getRNAComplement)

export const convertArrayToString = array => array.join('')

export const dnaSequencer = dnaSequence => pipe(
    convertStringToArray,
    convertDnaArrayToRnaArray,
    convertArrayToString,
  )(dnaSequence);