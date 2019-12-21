import {
  convertStringToArray,
  convertArrayToString,
  getRNAComplement,
  convertDnaArrayToRnaArray,
  dnaSequencer,
} from ".";

describe('convertStringToArray', () => {
  test('should convert string to array', () => {
    expect(convertStringToArray('foo')).toEqual(['f', 'o', 'o'])
  })
  
  test('should convert empty string to empty array', () => {
    expect(convertStringToArray('')).toEqual([])
  })
})

describe('convertArrayToString', () => {
  test('should convert array to string', () => {
    expect(convertArrayToString(['f', 'o', 'o'])).toEqual('foo')
  })
  
  test('should convert empty array to empty string', () => {
    expect(convertArrayToString([])).toEqual('')
  })
})

describe('getRNAComplement', () => {
  test('should convert the G nucleotide to C', () => {
    expect(getRNAComplement('G')).toEqual('C')
  })
  
  test('should convert the C nucleotide to G', () => {
    expect(getRNAComplement('C')).toEqual('G')
  })
  
  test('should convert the T nucleotide to A', () => {
    expect(getRNAComplement('T')).toEqual('A')
  })
  
  test('should convert the A nucleotide to U', () => {
    expect(getRNAComplement('A')).toEqual('U')
  })

  test('should convert the X nucleotide to \'\'', () => {
    expect(getRNAComplement('X')).toEqual('')
  })
})

describe('convertDnaArrayToRnaArray', () => {
  test('should return the expected rna array', () => {
    expect(convertDnaArrayToRnaArray(['A', 'G', 'C', 'T'])).toEqual(['U', 'C', 'G', 'A'])
  })
  
  test('should return an empty rna array', () => {
    expect(convertDnaArrayToRnaArray([])).toEqual([])
  })
})

describe('dnaSequencer', () => {
  test('should convert DNA sequence to RNA sequence', () => {
    expect(dnaSequencer('ACGTGGTCTTAA')).toEqual('UGCACCAGAAUU');  
  })
  
  test('should convert DNA sequence to RNA sequence', () => {
    expect(dnaSequencer('ACGXAC')).toEqual('UGCUG');  
  })
})