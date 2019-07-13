import { setup } from "..";

describe('Setup', () => {
  test('should say \'All Good!!\'', () => {
    expect(setup()).toEqual('All Good!!');
  });
});