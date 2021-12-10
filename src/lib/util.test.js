import {stringify, isPrimitive} from '../test/util'

import * as util from './util'


const symmetricMarshallingFixtures = [
  [0, '0'],
  [1, '1'],
  [true, 'true'],
  [false, 'false'],
  [null, 'null'],
  [{}, '{}'],
  [{foo: 'bar'}, '{"foo":"bar"}'],
  [{foo: {bar: 'baz'}}, '{"foo":{"bar":"baz"}}'],
  [[], '[]'],
  [['a', null], '["a",null]'],
  [['a', [2, false]], '["a",[2,false]]'],
  [void 0, undefined],
]

// entries are in the form <...arguments, expected>
const fixtureMap = {
  polarity: [
    [1, 1],
    [-1, -1],
    [123456789, 1],
    [-123456789, -1],
    [0x10000000, 1],
    [-0x10000000, -1],
    [.1, 1],
    [-.1, -1],
  ],
  range: [
    [0, []],
    [10, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
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
  marshall: symmetricMarshallingFixtures.map(fixture => [...fixture]).concat([
    [{foo: () => 'bar'}, '{}'],
    [['a', () => 'wat'], '["a",null]'],
  ]),
  unmarshall: symmetricMarshallingFixtures.map(fixture => fixture.reverse()).concat([
    [`
      {
      }
      `, {}],
    ['() => "wat"', void 0],
    ['{"foo":1,"bar":() => "bar"}', void 0],
    ['["a",() => "bar"]', void 0],
  ]),
  filterObjectByKey: [
    ['wat', {}, {}],
    ['foo', {wat: 'bar'}, {}],
    ['foo', {foo: 'bar'}, {foo: 'bar'}],
    ['foo', {foo: 'bar', wat: 'wow'}, {foo: 'bar'}],
  ],
}

const customTestMap = {
  percentageScale: ([a, b, c], expected) => {
    test(stringify`percentageScale(${a}, ${b})(${c}) -> ${expected}`, () => {
      const actual = util.percentageScale(a, b)(c)
      expect(actual).toEqual(expected)
    })
  }
}

Object.entries(fixtureMap).map(
  ([sut, fixtures]) => fixtures.map(
    fixtureData => {
      const expected = fixtureData.pop()
      const args = fixtureData

      if (sut in customTestMap) {
        return customTestMap[sut](args, expected)
      }

      test(`${sut}(${
        args.map(arg => stringify`${arg}`).join(', ')
      }) -> ` + stringify`${expected}`, () => {
        const actual = util[sut](...args)
        const equalityMethod = isPrimitive(expected) ? 'toBe' : 'toEqual'
        expect(actual)[equalityMethod](expected)
      })
    }
  )
)
