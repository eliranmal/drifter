import persistedStore from './decorators/persisted-store'


const appSettings = persistedStore(module, {
  bpm: 99,
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
})


export default appSettings
