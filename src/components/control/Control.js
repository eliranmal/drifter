// import Meter from '../meter/Meter.js'
import Crossfader from '../crossfader/Crossfader.js'

import './Control.css'


// todo - create a visualization based on the deviation of the tick actual delay
//        from the intended delay (maybe a simple meter)


// useEffect(() => {
//   setInterval(() => {
//     console.log(samplerAnalyser.getValue())
//   }, 1000)
// }, [samplerAnalyser, samplerAnalyser.getValue()])
/*<div className="drifter-analyser-visualization"></div>*/


const Control = ({className, balance, onBalanceChange = () => {}}) => (
  <div className={`drifter-control ${className}`}>
    {/* todo - put audio visualization nodes here instead of the meters */}
    {/* <Meter className="drifter-visualization-loose" value={30} /> */}
    <Crossfader
      className="drifter-control-balance"
      max={100}
      defaultValue={balance}
      onChange={value => onBalanceChange(value)}
    />
    {/* <Meter className="drifter-visualization-tight" value={80} /> */}
  </div>
)


export default Control
