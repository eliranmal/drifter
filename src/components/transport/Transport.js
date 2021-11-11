import {useState, useEffect, useCallback} from 'react'
import * as Tone from 'tone'

import {asTransportTime} from '../../lib/audio'
import useKeyboard, {mapKeyboardEvents} from '../../hooks/useKeyboard'
import TransportButton from '../transport-button/TransportButton'

import './Transport.css'


const init = ({bpm, loop, loopLengthInSixteenths} = {}) => {
  Tone.Transport.loop = loop
  Tone.Transport.bpm.value = bpm
  Tone.Transport.setLoopPoints(0, asTransportTime(loopLengthInSixteenths))
}

const play = () => Tone.start()
  .then(() => Tone.Transport.start())

const stop = () => Tone.loaded()
  .then(() => Tone.Transport.stop())


const Transport = ({
  bpm,
  loop = true,
  loopLengthInSixteenths,
  onPlay = () => {},
  onStop = () => {},
  onRecord = () => {},
}) => {
  const [isPlaying, setPlaying] = useState(false)
  const [isRecording, setRecording] = useState(false)

  const playListener = useCallback(
    () => !isPlaying && play()
      .then(() => setPlaying(true))
      .then(onPlay),
    [isPlaying, onPlay])

  const stopListener = useCallback(
    () => isPlaying && stop()
      .then(() => {
        setPlaying(false)
        setRecording(false)
      })
      .then(onStop),
    [isPlaying, onStop])

  const recordListener = useCallback(
    () => {
      setRecording(true)
      onRecord()
    }, [onRecord])

  const toggleListener = useCallback(
    () => isPlaying ? stopListener() : playListener(),
    [isPlaying, playListener, stopListener])

  useEffect(() => {
    init({bpm, loop, loopLengthInSixteenths})
  }, [bpm, loop, loopLengthInSixteenths])

  useKeyboard(useCallback(e => mapKeyboardEvents([
    // space
    [32, () => toggleListener()],
    // shift+r
    [82, ['shiftKey'], () => {
      playListener()
      recordListener()
    }],
  ])(e), [playListener, recordListener, toggleListener]))

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
      />
    </div>
  )
}


export default Transport
