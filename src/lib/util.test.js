import {stringify} from '../test/util'

import {
  head,
  range,
  matrixRotate,
  percentageScale,
  matrixInsertValue,
  proximityDistribution,
} from './util'

const fixtures = {
  range: [
    [0, 0],
    [10, 10],
  ],
  head: [
    [true, [false, 0, ''], false],
    ['wat', [], 'wat'],
    [0, [], 0],
  ],
  matrixRotate: [
    [[
      [1, 0],
      [0, 1],
    ], [
      [1, 0],
      [0, 1],
    ]],
    [[
      [1, 0],
      [1, 0],
    ], [
      [1, 1],
      [0, 0],
    ]],
    [[
      [1, 0, 0],
      [0, 1, 0],
    ], [
      [1, 0],
      [0, 1],
      [0, 0],
    ]],
  ],
  matrixInsertValue: [
    [[
      [1, 0, 0],
      [0, 0, 1],
    ], 0, 1, true, [
      [1, true, 0],
      [0, 0, 1],
    ]],
  ],
  percentageScale: [
    [0, 10, 30, 3],
    [0, 10, -30, -3],
    [0, -10, -30, 3],
    [0, -10, 30, -3],
    [10, 20, 30, 13],
    [-10, 10, 30, -4],
    [-10, -50, 30, -22],
    [0, 10, 130, 13],
  ],
  proximityDistribution: [
    [0, 4, void 0, [100, 66.66666666666666, 33.33333333333333, 0]],
    [100, 4, void 0, [0, 33.33333333333334, 66.66666666666667, 100]],
    [50, 4, void 0, [50, 83.33333333333334, 83.33333333333333, 50]],
    [33, 4, void 0, [67, 99.66666666666666 ,66.33333333333333 ,33]],
    // [20, 4, 50, [80, 96.66666666666667, 86.66666666666666, 70]],
    [20, 4, 100, [80, 86.66666666666666, 53.33333333333333, 20]],
    [10, 4, 50, [40, 43.33333333333333, 26.666666666666664, 10]],
  ],
}


fixtures.range.map(([a, expectedSize]) => {
  test(`range(${a}) -> array(${expectedSize})`, () => {
    const actual = range(a)
    expect(actual.length).toBe(expectedSize)
  })
})

fixtures.head.map(([a, b, expected]) => {
  test(stringify`head(${a}, ${b}) -> ${expected}`, () => {
    const actual = head(a, b)
    expect(actual).toBe(expected)
  })
})

fixtures.matrixRotate.map(([a, expected]) => {
  test(stringify`matrixRotate(${a}) -> ${expected}`, () => {
    const actual = matrixRotate(a)
    expect(actual).toEqual(expected)
    // rotating the matrix again should reset it to its original state
    expect(matrixRotate(actual)).toEqual(a)
  })
})

fixtures.matrixInsertValue.map(([a, b, c, d, expected]) => {
  test(stringify`matrixInsertValue(${a}, ${b}, ${c}, ${d}) -> ${expected}`, () => {
    const actual = matrixInsertValue(a, b, c, d)
    expect(actual).toEqual(expected)
  })
})

fixtures.percentageScale.map(([a, b, c, expected]) => {
  test(`percentageScale(${a}, ${b})(${c}) -> ${expected}`, () => {
    const actual = percentageScale(a, b)(c)
    expect(actual).toBe(expected)
  })
})

fixtures.proximityDistribution.map(([a, b, c, expected]) => {
  test(stringify`proximityDistribution(${a}, ${b}, ${c}) -> ${expected}`, () => {
    const actual = proximityDistribution(a, b, c)
    expect(actual).toEqual(expected)
  })
})
