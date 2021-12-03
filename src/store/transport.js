import persistedStore from './decorators/persisted-store'

const transportStore = persistedStore(module, {
  bpm: 99,
  isLoopOn: true,
  isPlaying: false,
  isRecording: false,
  loopLengthInSixteenths: 20,
}, ['isLoopOn', 'isPlaying', 'isRecording', 'loopLengthInSixteenths'])


export default transportStore
