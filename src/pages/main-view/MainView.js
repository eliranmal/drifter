import {useState} from 'react'

import useKeyboard from '../../hooks/useKeyboard'
import Sequencer from '../../components/sequencer/Sequencer'
import Transport from '../../components/transport/Transport'
import Visualizations from '../../components/visualizations/Visualizations'

import './MainView.css'


const MainView = () => {
  const [isPlaying, setPlaying] = useState(false)
  const [isRecording, setRecording] = useState(false)

  const play = () => setPlaying(true)
  const stop = () => { setPlaying(false); setRecording(false) }
  const record = () => setRecording(true)

  useKeyboard(({keyCode}) => {
    switch (keyCode) {
      case 32: // space
        isPlaying ? stop() : play()
        break
      case 82: // r
        !isPlaying && play()
        record()
        break
      default:
        break
    }
  }, [isPlaying])

  return (
    <div className="MainView">
      <h1 className="MainView-title">d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rifter</h1>
      <Sequencer
        className="MainView-panel"
        isRunning={isPlaying} />
      <Transport
        className="MainView-panel-center"
        isPlaying={isPlaying}
        isRecording={isRecording}
        onPlay={play}
        onStop={stop}
        onRecord={record} />
      <Visualizations className="MainView-panel-end" />
    </div>
  )
}


export default MainView
