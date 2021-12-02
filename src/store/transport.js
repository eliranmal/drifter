import {observable} from 'mobx'


const transportStore = observable({
  isLoopOn: true,
  isPlaying: false,
  isRecording: false,
  loopLengthInSixteenths: 20,
})


export default transportStore
