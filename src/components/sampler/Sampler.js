import {useEffect, useCallback} from 'react'

import * as audio from '../../lib/audio'
import {matrixInsertValue} from '../../lib/util'
import useSampler, {sampleMap} from '../../hooks/useSampler'
import Input from '../input/Input'

import './Sampler.css'


const Sampler = ({
  className,
  bpm,
  // todo - replace 'isRunning' with 'cursor' to enable linking animation steps with audio events
  isRunning,
  displayedSixteenths = 20,
  triggerMatrix = [],
  onTriggerMatrixChange = () => {},
}) => {
  const isStoppedCallback = useCallback(() => !isRunning, [isRunning])

  const [
    sampler,
    isSamplerLoaded,
  ] = useSampler(sampleMap.rolandTr808)

  useEffect(() => sampler.unsync().sync(), [sampler, triggerMatrix])

  useEffect(() => {
    if (isSamplerLoaded) {
      audio.loadTriggers(sampler, triggerMatrix)
    }
  }, [isSamplerLoaded, sampler, triggerMatrix])

  const [
    driftingSampler,
    isDriftingSamplerLoaded,
  ] = useSampler(sampleMap.rolandTr808)

  useEffect(() => driftingSampler.sync().unsync(), [driftingSampler, triggerMatrix])

  useEffect(() => {
    if (isDriftingSamplerLoaded) {
      audio.executeTriggers(
        driftingSampler, triggerMatrix, bpm,
        isStoppedCallback, displayedSixteenths,
      )
    }
  }, [
    isDriftingSamplerLoaded, driftingSampler, triggerMatrix,
    bpm, isStoppedCallback, displayedSixteenths,
  ])


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
                    onTriggerMatrixChange(matrixInsertValue(
                      triggerMatrix, channelIndex, tickIndex, +Boolean(checked)
                    ))
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
