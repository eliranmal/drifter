
// todo - create a visualization based on the deviation of the tick actual delay
//        from the intended delay (maybe a simple meter)

import {withBoxWrapper} from '../../hoc/box-wrapper/BoxWrapper'
import Analyser from './analyser/Analyser'

import './Analysers.css'


const Analysers = ({
  className = '',
  fixedSamplerAnalyser,
  driftingSampler1Analyser,
  driftingSampler2Analyser,
  driftingSampler3Analyser,
  ...props
}) => (
  <div
    {...props}
    className={`drifter-analysers ${className}`}
  >
    <Analyser colors={{active: 'lightblue'}} analyser={driftingSampler1Analyser} />
    <Analyser colors={{active: 'lightgreen'}} analyser={driftingSampler2Analyser} />
    <Analyser colors={{active: 'fuchsia'}} analyser={driftingSampler3Analyser} />
    <Analyser analyser={fixedSamplerAnalyser} />
  </div>
)


export default withBoxWrapper(Analysers, {
  useWrapper: false,
})
