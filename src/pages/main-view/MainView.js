import {useState} from 'react'
import useLocalStorage from 'use-local-storage'

import useMediaQueries from '../../hooks/useMediaQueries'
import {withBoxWrapper} from '../../hoc/box-wrapper/BoxWrapper'

import Heading from '../../components/heading/Heading'
import Sampler from '../../components/sampler/Sampler'
import Transport from '../../components/transport/Transport'
import Crossfader from '../../components/crossfader/Crossfader'

import './MainView.css'


const BoxedCrossfader = withBoxWrapper(Crossfader, {
  wrapperClassName: 'drifter-main-view-panel-end'
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


  return (
    <div className="drifter-main-view">
      <Heading text="drifter" />
      <Sampler
        className="drifter-main-view-panel"
        bpm={bpm}
        balance={balance}
        isRunning={isPlaying}
        triggerMatrix={triggerMatrix}
        onTriggerMatrixChange={newTriggerMatrix => {
          setTriggerMatrix(newTriggerMatrix)
        }}
        displayedSixteenths={loopLengthInSixteenths}
      />
      <Transport
        className="drifter-main-view-panel-center"
        bpm={bpm}
        loopLengthInSixteenths={loopLengthInSixteenths}
        onPlay={() => setPlaying(true)}
        onStop={() => setPlaying(false)}
      />
      <BoxedCrossfader
        defaultValue={balance}
        onChange={value => setBalance(value)}
      />
    </div>
  )
}


export default MainView
