import Meter from '../meter/Meter.js'
import Crossfader from '../crossfader/Crossfader.js'

import './Visualizations.css'


const Visualizations = ({className, ...props}) => (
  <div {...props} className={`Visualizations ${className}`}>
    <Meter className="Visualization-loose" value={30} />
    <Crossfader />
    <Meter className="Visualization-tight" value={80} />
  </div>
)


export default Visualizations
