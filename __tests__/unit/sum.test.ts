const sum = (a: number, b: number) => a + b;

describe('Sum test', () => {
  it('should sum numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
