import {useEffect, useCallback} from 'react'

import {matrixInsertValue, percentageScale} from '../../lib/util'
import {sampleMap} from '../../hooks/useSampler'
import useFixedSampler from '../../hooks/useFixedSampler'
import useDriftingSampler from '../../hooks/useDriftingSampler'
import Input from '../input/Input'

import './Sampler.css'


const Sampler = ({
  className,
  bpm,
  balance,
  // todo - replace 'isRunning' with 'cursor' to enable linking animation steps with audio events
  isRunning,
  displayedSixteenths = 20,
  triggerMatrix = [],
  onTriggerMatrixChange = () => {},
}) => {

  const isStoppedCallback = useCallback(() => !isRunning, [isRunning])

  const [sampler, isSamplerLoaded] = useFixedSampler(triggerMatrix, sampleMap.rolandTr808)

  const [driftingSampler1, isDriftingSampler1Loaded] = useDriftingSampler(triggerMatrix, bpm, isStoppedCallback, displayedSixteenths, sampleMap.rolandTr808)
  const [driftingSampler2, isDriftingSampler2Loaded] = useDriftingSampler(triggerMatrix, bpm, isStoppedCallback, displayedSixteenths, sampleMap.rolandTr808)
  const [driftingSampler3, isDriftingSampler3Loaded] = useDriftingSampler(triggerMatrix, bpm, isStoppedCallback, displayedSixteenths, sampleMap.rolandTr808)

  useEffect(() => {
    const samplerVolumePercentage = 100 - balance
    const driftingSamplerVolumePercentage = 100 - samplerVolumePercentage
    const scale = percentageScale(0, -24)
    if (isSamplerLoaded) {
      sampler.volume.value = scale(samplerVolumePercentage)
    }
    if (isDriftingSampler2Loaded && isDriftingSampler2Loaded && isDriftingSampler3Loaded) {
      [driftingSampler1, driftingSampler2, driftingSampler3].forEach((driftingSampler, index, arr) => {
        const volumePercentage = (driftingSamplerVolumePercentage / arr.length) * Math.abs(index - arr.length)
        driftingSampler.volume.value = scale(volumePercentage)
      })
    }
  }, [balance, sampler, driftingSampler1, driftingSampler2, driftingSampler3, isSamplerLoaded, isDriftingSampler1Loaded, isDriftingSampler2Loaded, isDriftingSampler3Loaded])


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
