import persistedStore from './decorators/persisted-store'
import {matrixInsertValue} from '../lib/util'


const samplerStore = persistedStore(module, {
  // 0: fixed sampler full volume --> 100: drifting samplers full volume
  balance: 0,
  triggerMatrix: [
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  resetInterval: {
    value: 4,
    unit: 'bars',
  },
  get resetIntervalValue() {
    return this.resetInterval.value
  },
  set resetIntervalValue(value) {
    this.resetInterval.value = value
  },
  get resetIntervalUnit() {
    return this.resetInterval.unit
  },
  set resetIntervalUnit(unit) {
    this.resetInterval.unit = unit
  },
  updateTriggerMatrixValue(row, col, value) {
    // todo - rewrite this as a true update (non-pure) and see what happens
    this.triggerMatrix = matrixInsertValue(
      this.triggerMatrix, row, col, value
    )
  },
})


export default samplerStore
