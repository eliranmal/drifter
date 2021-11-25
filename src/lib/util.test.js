
import {percentageScale} from './util'

const fixtures = {
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

fixtures.percentageScale.map(([a, b, c, expected]) => {
  test(`percentageScale(${a}, ${b})(${c}) -> ${expected}`, () => {
    const actual = percentageScale(a, b)(c)
    expect(actual).toBe(expected)
  })
})
