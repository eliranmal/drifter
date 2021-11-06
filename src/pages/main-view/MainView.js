import {useState} from 'react'

import Sequencer from '../../components/sequencer/Sequencer'
import Transport from '../../components/transport/Transport'
import Visualizations from '../../components/visualizations/Visualizations'

import './MainView.css'


const MainView = () => {
  const [isPlaying, setPlaying] = useState(false)
  const [isRecording, setRecording] = useState(false)

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
        onPlay={() => setPlaying(true)}
        onStop={() => { setPlaying(false); setRecording(false) }}
        onRecord={() => setRecording(!isRecording)} />
      <Visualizations className="MainView-panel-end" />
    </div>
  )
}


export default MainView
