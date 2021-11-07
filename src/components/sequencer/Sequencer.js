import {useState} from 'react'

import useMediaQueries from '../../hooks/useMediaQueries'
import {range} from '../../lib/util'
import Input from '../input/Input'

import './Sequencer.css'

// todo - externalize, persist
const checkedTicks = [
  [0, 6, 10, 16, 22, 26],
  [4, 12, 20, 28],
]

const Sequencer = ({
  isRunning,
  channelCount = 4,
  initialTickCount = 20,
  className}) => {

    const [tickCount, setTickCount] = useState(initialTickCount)

    useMediaQueries({
      '(max-width: 600px)': setTickCount.bind(null, 4),
      '(min-width: 600px) and (max-width: 800px)': setTickCount.bind(null, 8),
      '(min-width: 800px) and (max-width: 1200px)': setTickCount.bind(null, 16),
      '(min-width: 1200px)': setTickCount.bind(null, 32),
    }, [setTickCount])

    return (
      <div
        className={`Sequencer ${isRunning ? 'Sequencer-running' : ''} ${className}`}
        style={{ '--sequencer-ticks': tickCount }}>
        <div className="Sequencer-timeline">
          <div className="Sequencer-tape"></div>
          <div className="Sequencer-channels">
            {range(channelCount).map(channelIndex => (
              <div key={channelIndex} className="Sequencer-channel">
                  {range(tickCount).map(tickIndex => (
                    <Input type="checkbox" className="Sequencer-tick" key={tickIndex} defaultChecked={!!checkedTicks[channelIndex] && checkedTicks[channelIndex].includes(tickIndex)} />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default Sequencer
