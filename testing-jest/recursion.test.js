const { sum, mult, mult2 } = require('../src/recursion/recursion')

describe( 'test recursive math operations', () => {

  test('recursive SUM', () => {
    const result = sum(3,4,5)
    expect(result).toBe(3+4+5)
  })

  test('recursive PRODUCT', () => {
    const result = mult(3,4,5)
    expect(result).toBe(3*4*5)
  })

  test('recursive PRODUCT (alternative implementation)', () => {
    const result = mult2(3,4,5)
    expect(result).toBe(3*4*5)
  })
})
