
// todo - create a visualization based on the deviation of the tick actual delay
//        from the intended delay (maybe a simple meter)

import Visualization from './visualization/Visualization'

import './Visualizations.css'


const Visualizations = ({
  className = '',
  fixedSamplerAnalyser,
  driftingSampler1Analyser,
  driftingSampler2Analyser,
  driftingSampler3Analyser,
}) => (
  <div className={`drifter-visualizations ${className}`}>
    <Visualization analyser={fixedSamplerAnalyser} />
    <Visualization analyser={driftingSampler1Analyser} />
    <Visualization analyser={driftingSampler2Analyser} />
    <Visualization analyser={driftingSampler3Analyser} />
  </div>
)


export default Visualizations
