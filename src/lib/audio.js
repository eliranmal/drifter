import * as Tone from 'tone'
import {matrixRotate, blockThread} from './util'


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

const clearableMap = new WeakMap()

export const executeTriggers = (
  sampler,
  matrix = [],
  bpm,
  stopPredicate = index => index >= matrix.length - 1,
  sliceTo,
) => {
  if (clearableMap.has(sampler)) {
    clearTimeout(clearableMap.get(sampler))
  }
  const sixteenthInMilliseconds = ((60 / bpm) / 4) * 1000
  let noteSequence = triggerMatrixAsNoteSequence(matrix)
  if (typeof sliceTo !== 'undefined') {
    noteSequence = noteSequence.slice(0, sliceTo)
  }

  let index = 0
  // console.time(index)
  const tick = () => {
    if (stopPredicate(index)) {
      if (clearableMap.has(sampler)) {
        clearTimeout(clearableMap.get(sampler))
      }
      return
    }

    // todo - externalize this parameter as part of the 'entropy' knob
    //        (in addition to the number of concurrent samplers)
    blockThread(.2)

    const notes = noteSequence[index % noteSequence.length]
    // console.timeEnd(index)
    index += 1
    // console.time(index)
    sampler.triggerAttack(notes, Tone.immediate())
    clearableMap.set(sampler, setTimeout(tick, sixteenthInMilliseconds))
  }

  tick()
}
