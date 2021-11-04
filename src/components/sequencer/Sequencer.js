import {range} from '../../lib/util'
import Input from '../input/Input'

import './Sequencer.css'


const Sequencer = ({
  channels = 4,
  // todo - create useMediaQueryListener and rely on screen width to determine the ticks
  ticks = 32,
  className}) => (
  <div className={`Sequencer ${className}`}>
    <div className="Sequencer-timeline">
      <div className="Sequencer-tape"></div>
      <div className="Sequencer-dots"></div>
      <div
        className="Sequencer-channels"
        style={{ '--ticks-count': ticks }}>
        {range(channels).map(channelIndex => (
          <div key={channelIndex} className="Sequencer-channel">
              {range(ticks).map(tickIndex => (
                <Input type="checkbox" className="Sequencer-tick" key={tickIndex} />
              ))}
          </div>
        ))}
      </div>
    </div>
  </div>
)


export default Sequencer
