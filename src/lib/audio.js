import * as Tone from 'tone'
import {matrixRotate} from './util'


// todo - how to get notes dynamically from the sampler instance?
//        sampler.get() only seems to return the default settings
const noteByChannelIndex = [
  'C4',
  'C#4',
  'D4',
  'D#4',
]


const triggerMatrixAsNoteSequence = matrix =>
  matrixRotate(matrix)
    .map(sixteenthValues => sixteenthValues
      .map((value, channelIndex) => value && noteByChannelIndex[channelIndex])
      .filter(Boolean))


export const asTransportTime = sixteenthIndex => [
  Math.floor(sixteenthIndex / 16) % 4,
  Math.floor(sixteenthIndex / 4) % 4,
  sixteenthIndex % 4,
].join(':')

/**
* this function is not pure!
* it causes side effects by invoking the sampler instance imperatively
*/
export const loadTriggers = (sampler, matrix) => {
  triggerMatrixAsNoteSequence(matrix)
    .map((sixteenthNotes, sixteenthIndex) => sixteenthNotes.length &&
        sampler.triggerAttack(sixteenthNotes, asTransportTime(sixteenthIndex))
    )
}

let clearable

export const executeTriggers = (
  sampler,
  matrix = [],
  bpm,
  stopPredicate = index => index >= matrix.length - 1,
  sliceTo,
) => {
  if (typeof clearable !== 'undefined') {
    clearTimeout(clearable)
  }
  const sixteenthInMilliseconds = ((60 / bpm) / 4) * 1000
  let noteSequence = triggerMatrixAsNoteSequence(matrix)
  if (typeof sliceTo !== 'undefined') {
    noteSequence = noteSequence.slice(0, sliceTo)
  }

  let index = 0
  const tick = () => {
    if (stopPredicate(index)) {
      // allows the sampler to be stopped by the transport
      sampler.unsync().sync()
      if (typeof clearable !== 'undefined') {
        clearTimeout(clearable)
      }
      return
    }

    const notes = noteSequence[index % noteSequence.length]
    index += 1
    sampler.triggerAttack(notes, Tone.immediate())
    clearable = setTimeout(tick, sixteenthInMilliseconds)
  }

  tick()
}
