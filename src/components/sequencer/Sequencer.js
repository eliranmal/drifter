import Input from '../input/Input'

import './Sequencer.css'


// todo - expose 'cursor' property to enable linking animation steps with audio events
const Sequencer = ({
  className,
  sampler,
  isRunning,
  displayedSixteenths = 20,
  triggerMatrix = [],
}) => {

    return (
      <div
        className={`drifter-sequencer ${isRunning ? 'drifter-sequencer-running' : ''} ${className}`}
        style={{ '--sequencer-ticks': displayedSixteenths }}>
        <div className="drifter-sequencer-timeline">
          <div className="drifter-sequencer-tape"></div>
          <div className="drifter-sequencer-channels">
            {triggerMatrix.map((channel, channelIndex) => (
              <div key={channelIndex} className="drifter-sequencer-channel">
                {channel.map((tickValue, tickIndex) => (
                  <Input type="checkbox" className="drifter-sequencer-tick"
                    key={tickIndex} defaultChecked={tickValue} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default Sequencer
