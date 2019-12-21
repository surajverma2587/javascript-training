import dnaSequencer from ".";

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

test('should return an empty string when no DNA sequence is passed', () => {
  const expected = '';
  const result = dnaSequencer();

  expect(result).toEqual(expected);  
})