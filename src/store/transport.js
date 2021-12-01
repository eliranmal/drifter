import persistedStore from './decorators/persisted-store'


const transportStore = persistedStore(module, {
  isPlaying: false,
  loopLengthInSixteenths: 20,
}, ['isPlaying', 'loopLengthInSixteenths'])


export default transportStore
