import persistedStore from './decorators/persisted-store'


const transportStore = persistedStore(module, {
  isPlaying: false,
  isRecording: false,
  loopLengthInSixteenths: 20,
}, ['isPlaying', 'isRecording', 'loopLengthInSixteenths'])


export default transportStore
