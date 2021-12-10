import {action} from 'mobx'
import {observer} from 'mobx-react-lite'
import {useEffect, useCallback} from 'react'
import * as Tone from 'tone'
import {useKeyboard, mapKeyboardEvents} from '@eliranmal/react-hooks'

import {asTransportTime} from '../../lib/audio'
import transportStore from '../../store/transport'
import TransportButton from '../transport-button/TransportButton'

import './Transport.css'


const init = ({bpm, isLoopOn, loopLengthInSixteenths} = {}) => {
  Tone.Transport.loop = !!isLoopOn
  if (bpm) {
    Tone.Transport.bpm.value = bpm
  }
  if (loopLengthInSixteenths) {
    Tone.Transport.setLoopPoints(0, asTransportTime(loopLengthInSixteenths))
  }
}

const play = () => Tone.start()
  .then(() => Tone.Transport.start())

const stop = () => Tone.loaded()
  .then(() => Tone.Transport.stop())


const Transport = ({
  onPlay = () => {},
  onStop = () => {},
  onRecord = () => {},
}) => {
  const {
    bpm,
    isLoopOn,
    isPlaying,
    isRecording,
    loopLengthInSixteenths,
  } = transportStore

  const playListener = useCallback(
    () => !isPlaying && play()
      .then(action(() => (transportStore.isPlaying = true)))
      .then(onPlay),
    [isPlaying, onPlay])

  const stopListener = useCallback(
    () => isPlaying && stop()
      .then(action(() => {
        transportStore.isPlaying = false
        transportStore.isRecording = false
      }))
      .then(onStop),
    [isPlaying, onStop])

  const recordListener = action(useCallback(
    () => {
      transportStore.isRecording = true
      onRecord()
    }, [onRecord]))

  const toggleListener = useCallback(
    () => isPlaying ? stopListener() : playListener(),
    [isPlaying, playListener, stopListener])

  useEffect(() => {
    init({bpm, isLoopOn, loopLengthInSixteenths})
  }, [bpm, isLoopOn, loopLengthInSixteenths])

  useKeyboard(mapKeyboardEvents([
    // space
    [32, () => toggleListener()],
    // shift+r
    [82, ['shiftKey'], () => {
      playListener()
      recordListener()
    }],
  ]))

  return (
    <div className="drifter-transport">
      <TransportButton
        type="play"
        onClick={playListener}
        isActive={isPlaying}
      />
      <TransportButton
        type="stop"
        onClick={stopListener}
      />
      <TransportButton
        type="record"
        onClick={recordListener}
        isActive={isRecording}
        disabled
      />
    </div>
  )
}


export default observer(Transport)
