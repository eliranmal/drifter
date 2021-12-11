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
import Range from '../../components/range/Range'

import './MainView.css'


const MainView = () => {

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
        data-tip={`
          this is a simple step sequencer; toggle the pads to add or remove notes.<br/>
          rows are channels, and columns represent sixteenth note intervals.
        `}
      />
      <Range
        className="drifter-main-view-panel-center"
        data-tip="sets the balance between the fixed sampler's signal and the drifting samplers' signal"
        defaultValue={samplerStore.balance}
        onChange={action(value => (samplerStore.balance = value))}
        style={{flexShrink: 1, flexGrow: 0, margin: '-2rem 0'}}
      />
      <Analysers
        className="drifter-main-view-panel-end"
        data-tip="shows waveforms for all samplers. you can set the analysers layout in the settings."
        layout={layoutStore.analysersLayout}
      />
    </div>
  )
}


export default observer(MainView)
