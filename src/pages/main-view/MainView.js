import {useState, useEffect, useCallback} from 'react'
import useLocalStorage from 'use-local-storage'

import * as audio from '../../lib/audio'
import useSampler, {sampleMap} from '../../hooks/useSampler'
import useKeyboard, {mapKeyboardEvents} from '../../hooks/useKeyboard'
import Sequencer from '../../components/sequencer/Sequencer'
import Transport from '../../components/transport/Transport'
import Visualizations from '../../components/visualizations/Visualizations'

import './MainView.css'



const MainView = ({
  bpm,
  resetInterval,
}) => {
  const [isPlaying, setPlaying] = useState(false)
  const [isRecording, setRecording] = useState(false)

  const [triggerMatrix, setTriggerMatrix] = useLocalStorage('drifter-trigger-matrix', [
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ])

  const play = useCallback(() => {
    if (!isPlaying) {
      audio.play()
      setPlaying(true)
    }
  }, [isPlaying])

  const stop = useCallback(() => {
    audio.stop()
    setPlaying(false)
    setRecording(false)
  }, [])

  const record = useCallback(() => setRecording(true), [])

  const togglePlay = useCallback(() => isPlaying ? stop() : play(), [isPlaying, play, stop])

  
  const [sampler/*, loaded, error*/] = useSampler(sampleMap.rolandTr808)

  useEffect(() => {
    audio.init({bpm})
  }, [bpm])

  useEffect(() => {
    audio.loadTriggers(sampler, triggerMatrix)
    return () => sampler.dispose()
  }, [sampler, triggerMatrix])

  useKeyboard(useCallback(mapKeyboardEvents([
    [32, () => togglePlay()],
    [82, ['shiftKey'], () => {
      play()
      record()
    }],
  ]), [play, record, togglePlay]))

  return (
    <div className="drifter-main-view">
      <h1 className="drifter-main-view-title">d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rifter</h1>
      <Sequencer
        className="drifter-main-view-panel"
        isRunning={isPlaying} />
      <Transport
        className="drifter-main-view-panel-center"
        isPlaying={isPlaying}
        isRecording={isRecording}
        onPlay={play}
        onStop={stop}
        onRecord={record} />
      <Visualizations className="drifter-main-view-panel-end" />
    </div>
  )
}


export default MainView
