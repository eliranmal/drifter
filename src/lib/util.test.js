import {stringify} from '../test/util'

import {
  head,
  range,
  matrixRotate,
  percentageScale,
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

fixtures.percentageScale.map(([a, b, c, expected]) => {
  test(`percentageScale(${a}, ${b})(${c}) -> ${expected}`, () => {
    const actual = percentageScale(a, b)(c)
    expect(actual).toBe(expected)
  })
})
