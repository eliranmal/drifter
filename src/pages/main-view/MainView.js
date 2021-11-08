import {useState, useCallback} from 'react'

import useKeyboard from '../../hooks/useKeyboard'
import Sequencer from '../../components/sequencer/Sequencer'
import Transport from '../../components/transport/Transport'
import Visualizations from '../../components/visualizations/Visualizations'

import './MainView.css'


const MainView = () => {
  const [isPlaying, setPlaying] = useState(false)
  const [isRecording, setRecording] = useState(false)

  const play = useCallback(() => !isPlaying && setPlaying(true), [isPlaying])
  const stop = useCallback(() => { setPlaying(false); setRecording(false) }, [])
  const record = useCallback(() => setRecording(true), [])
  const togglePlay = useCallback(() => isPlaying ? stop() : play(), [isPlaying, play, stop])

  useKeyboard(useCallback(e => {
    const {keyCode, shiftKey} = e
    switch (keyCode) {
      case 32: // space
        e.preventDefault()
        togglePlay()
        break
      case 82: // r
        if (shiftKey) {
          e.preventDefault()
          play()
          record()
        }
        break
      default:
        break
    }
  }, [play, record, togglePlay]))

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
