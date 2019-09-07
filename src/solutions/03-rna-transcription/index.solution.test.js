import dnaSequencer, { toRNA, stringToArray, converter } from '.';

test('should convert G to C', () => {
  const expected = 'C';
  const result = toRNA('G');

  expect(result).toEqual(expected);
})

test('should convert C to G', () => {
  const expected = 'G';
  const result = toRNA('C');

  expect(result).toEqual(expected);
})

test('should convert T to A', () => {
  const expected = 'A';
  const result = toRNA('T');

  expect(result).toEqual(expected);
})

test('should convert A to U', () => {
  const expected = 'U';
  const result = toRNA('A');

  expect(result).toEqual(expected);
})

test('should convert invalid cases to empty string', () => {
  const expected = '';
  const result = toRNA('X');

  expect(result).toEqual(expected);
})

test('should convert string to array', () => {
  const expected = ['A', 'C', 'G', 'T'];
  const result = stringToArray('ACGT');

  expect(result).toEqual(expected);  
})

test('should convert DNA to RNA', () => {
  const expected = 'UGCA';
  const result = converter(['A', 'C', 'G', 'T']);

  expect(result).toEqual(expected);  
})

test('should convert DNA sequence to RNA sequence', () => {
  const expected = 'UGCACCAGAAUU';
  const result = dnaSequencer('ACGTGGTCTTAA');

  expect(result).toEqual(expected);  
})

test('should convert DNA sequence to RNA sequence', () => {
  const expected = 'UGCUG';
  const result = dnaSequencer('ACGXAC');

  expect(result).toEqual(expected);  
})
