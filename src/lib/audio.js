import * as Tone from 'tone'
import {rotateMatrix} from './util'


// todo - how to get notes dynamically from the sampler instance?
//        sampler.get() only seems to return the default settings
const noteByChannelIndex = [
  'C4',
  'C#4',
  'D4',
  'D#4',
]


export const asTransportTime = sixteenthIndex => [
  Math.floor(sixteenthIndex / 16) % 4,
  Math.floor(sixteenthIndex / 4) % 4,
  sixteenthIndex % 4,
].join(':')


export const loadTriggers = (sampler, matrix) => {
  const firstChannel = matrix[0]
  const sixteenthsInLoop = firstChannel && firstChannel.length

  Tone.Transport.setLoopPoints(0, `${sixteenthsInLoop / 16}m`)

  rotateMatrix(matrix)
    .map(sixteenthValues => sixteenthValues
      .map((value, channelIndex) => value && noteByChannelIndex[channelIndex])
      .filter(Boolean))
    .map((sixteenthNotes, sixteenthIndex) => sixteenthNotes.length &&
        sampler.triggerAttack(sixteenthNotes, asTransportTime(sixteenthIndex))
    )
}
