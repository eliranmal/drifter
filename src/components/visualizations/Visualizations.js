import Meter from '../meter/Meter.js'
import Crossfader from '../crossfader/Crossfader.js'

import './Visualizations.css'


const Visualizations = ({className, ...props}) => (
  <div {...props} className={`drifter-visualizations ${className}`}>
    <Meter className="drifter-visualization-loose" value={30} />
    <Crossfader />
    <Meter className="drifter-visualization-tight" value={80} />
  </div>
)


export default Visualizations
