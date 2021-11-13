import {useEffect} from 'react'

import * as audio from '../../lib/audio'
import {matrixInsertValue} from '../../lib/util'
import useSampler, {sampleMap} from '../../hooks/useSampler'
import Input from '../input/Input'

import './Sampler.css'


// todo - expose 'cursor' property to enable linking animation steps with audio events
const Sampler = ({
  className,
  isRunning,
  displayedSixteenths = 20,
  triggerMatrix = [],
  onTriggerMatrixChange = () => {},
}) => {

  const [
    sampler,
    samplerAnalyser,
    isSamplerLoaded,
    samplerHasError
  ] = useSampler(sampleMap.rolandTr808)

  useEffect(() => {
    if (isSamplerLoaded) {
      audio.loadTriggers(sampler, triggerMatrix)
    }
  }, [isSamplerLoaded, sampler, triggerMatrix])


  return (
    <div
      className={`drifter-sampler ${isRunning ? 'drifter-sampler-running' : ''} ${className}`}
      style={{ '--sampler-ticks': displayedSixteenths }}
    >
      <div className="drifter-sampler-timeline">
        <div className="drifter-sampler-tape"></div>
        <div className="drifter-sampler-channels">
          {triggerMatrix.map((channel, channelIndex) => (
            <div key={channelIndex} className="drifter-sampler-channel">
              {channel.map((tickValue, tickIndex) => (
                <Input type="checkbox" className="drifter-sampler-tick"
                  key={tickIndex}
                  defaultChecked={tickValue}
                  onChange={({currentTarget: {checked}}) => {
                    const newTriggerMatrix = matrixInsertValue(
                      triggerMatrix, channelIndex, tickIndex, +Boolean(checked)
                    )
                    onTriggerMatrixChange(newTriggerMatrix)
                    if (isSamplerLoaded) {
                      audio.loadTriggers(sampler, newTriggerMatrix)
                    }
                  }}
                  />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sampler
