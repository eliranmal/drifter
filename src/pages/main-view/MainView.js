import {action} from 'mobx'
import {observer} from 'mobx-react-lite'
import {useMediaQueries} from '@eliranmal/react-hooks'

import layoutStore from '../../store/layout'
import samplerStore from '../../store/sampler'
import transportStore from '../../store/transport'

import Heading from '../../components/heading/Heading'
import Sampler from '../../components/sampler/Sampler'
import Analysers from '../../components/analysers/Analysers'
import Transport from '../../components/transport/Transport'
import RangeInput from '../../components/range-input/RangeInput'

import './MainView.css'


const MainView = () => {
  const {balance} = samplerStore

  useMediaQueries({
    '(max-width: 600px)': () => (transportStore.loopLengthInSixteenths = 4),
    '(min-width: 600px) and (max-width: 800px)': () => (transportStore.loopLengthInSixteenths = 8),
    '(min-width: 800px) and (max-width: 1200px)': () => (transportStore.loopLengthInSixteenths = 16),
    '(min-width: 1200px)': () => (transportStore.loopLengthInSixteenths = 32),
  }, action)


  return (
    <div className="drifter-main-view">
      <header className="drifter-main-view-header">
        <Heading text="drifter" />
        <Transport />
      </header>
      <Sampler
        className="drifter-main-view-panel"
      />
      <RangeInput
        className="drifter-main-view-panel-center"
        data-tip="set the balance between the fixed sampler's signal and the drifting samplers' signal"
        defaultValue={balance}
        onChange={action(value => (samplerStore.balance = value))}
      />
      <Analysers
        className="drifter-main-view-panel-end"
        data-tip="shows waveforms for all samplers"
        layout={layoutStore.analysersLayout}
      />
    </div>
  )
}


export default observer(MainView)
