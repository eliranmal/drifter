import {useState} from 'react'
import useLocalStorage from 'use-local-storage'

import useAnalyser from '../../hooks/useAnalyser'
import useMediaQueries from '../../hooks/useMediaQueries'
import {withBoxWrapper} from '../../hoc/box-wrapper/BoxWrapper'

import Heading from '../../components/heading/Heading'
import Sampler from '../../components/sampler/Sampler'
import Transport from '../../components/transport/Transport'
import RangeInput from '../../components/range-input/RangeInput'
import Visualizations from '../../components/visualizations/Visualizations'

import './MainView.css'


const BoxedSampler = withBoxWrapper(Sampler, {
  wrapperClassName: 'drifter-main-view-panel',
})

const MainView = ({
  bpm,
  resetInterval,
}) => {
  const [balance, setBalance] = useState(33)
  const [isPlaying, setPlaying] = useState(false)

  const [triggerMatrix, setTriggerMatrix] = useLocalStorage('drifter-trigger-matrix', [
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])

  const [loopLengthInSixteenths, setLoopLengthInSixteenths] = useState(20)

  useMediaQueries({
    '(max-width: 600px)': setLoopLengthInSixteenths.bind(null, 4),
    '(min-width: 600px) and (max-width: 800px)': setLoopLengthInSixteenths.bind(null, 8),
    '(min-width: 800px) and (max-width: 1200px)': setLoopLengthInSixteenths.bind(null, 16),
    '(min-width: 1200px)': setLoopLengthInSixteenths.bind(null, 32),
  })

  const fixedSamplerAnalyser = useAnalyser()
  const driftingSampler1Analyser = useAnalyser()
  const driftingSampler2Analyser = useAnalyser()
  const driftingSampler3Analyser = useAnalyser()


  return (
    <div className="drifter-main-view">
      <Heading text="drifter" />
      <Transport
        className="drifter-main-view-panel-center"
        bpm={bpm}
        loopLengthInSixteenths={loopLengthInSixteenths}
        onPlay={() => setPlaying(true)}
        onStop={() => setPlaying(false)}
      />
      <BoxedSampler
        bpm={bpm}
        balance={balance}
        isRunning={isPlaying}
        triggerMatrix={triggerMatrix}
        loopLengthInSixteenths={loopLengthInSixteenths}
        fixedSamplerAnalyser={fixedSamplerAnalyser}
        driftingSampler1Analyser={driftingSampler1Analyser}
        driftingSampler2Analyser={driftingSampler2Analyser}
        driftingSampler3Analyser={driftingSampler3Analyser}
        onTriggerMatrixChange={newTriggerMatrix => {
          setTriggerMatrix(newTriggerMatrix)
        }}
      />
      <RangeInput
        className="drifter-main-view-panel-center"
        data-tip="set the balance between the fixed sampler's signal and the drifting samplers'"
        defaultValue={balance}
        onChange={value => setBalance(value)}
      />
      <Visualizations
        className="drifter-main-view-panel-end"
        fixedSamplerAnalyser={fixedSamplerAnalyser}
        driftingSampler1Analyser={driftingSampler1Analyser}
        driftingSampler2Analyser={driftingSampler2Analyser}
        driftingSampler3Analyser={driftingSampler3Analyser}
      />
    </div>
  )
}


export default MainView
