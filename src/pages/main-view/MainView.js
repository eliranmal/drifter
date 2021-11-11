import {useState, useEffect} from 'react'
import useLocalStorage from 'use-local-storage'

import * as audio from '../../lib/audio'

import useMediaQueries from '../../hooks/useMediaQueries'
import useSampler, {sampleMap} from '../../hooks/useSampler'

import Sequencer from '../../components/sequencer/Sequencer'
import Transport from '../../components/transport/Transport'
import Visualizations from '../../components/visualizations/Visualizations'

import './MainView.css'


const MainView = ({
  bpm,
  resetInterval,
}) => {
  const [isPlaying, setPlaying] = useState(false)

  const [triggerMatrix/*, setTriggerMatrix*/] = useLocalStorage('drifter-trigger-matrix', [
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ])

  const [loopLengthInSixteenths, setLoopLengthInSixteenths] = useState(20)

  useMediaQueries({
    '(max-width: 600px)': setLoopLengthInSixteenths.bind(null, 4),
    '(min-width: 600px) and (max-width: 800px)': setLoopLengthInSixteenths.bind(null, 8),
    '(min-width: 800px) and (max-width: 1200px)': setLoopLengthInSixteenths.bind(null, 16),
    '(min-width: 1200px)': setLoopLengthInSixteenths.bind(null, 32),
  }, [setLoopLengthInSixteenths])

  const [sampler/*, loaded, error*/] = useSampler(sampleMap.rolandTr808)

  useEffect(() => {
    audio.loadTriggers(sampler, triggerMatrix)
  }, [sampler, triggerMatrix])


  return (
    <div className="drifter-main-view">
      <h1 className="drifter-main-view-title">d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rifter</h1>
      <Sequencer
        className="drifter-main-view-panel"
        isRunning={isPlaying}
        triggerMatrix={triggerMatrix}
        displayedTickCount={loopLengthInSixteenths}
      />
      <Transport
        className="drifter-main-view-panel-center"
        bpm={bpm}
        loopLengthInSixteenths={loopLengthInSixteenths}
        onPlay={() => setPlaying(true)}
        onStop={() => setPlaying(false)}
      />
      <Visualizations className="drifter-main-view-panel-end" />
    </div>
  )
}


export default MainView
