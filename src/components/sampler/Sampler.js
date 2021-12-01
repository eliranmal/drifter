import {action} from 'mobx'
import {useEffect, useCallback} from 'react'

import {
  matrixInsertValue,
  percentageScale,
  proximityDistribution,
} from '../../lib/util'
import samplerStore from '../../store/sampler'
import {sampleMap} from '../../hooks/useSampler'
import useFixedSampler from '../../hooks/useFixedSampler'
import useDriftingSampler from '../../hooks/useDriftingSampler'
import Input from '../input/Input'

import './Sampler.css'


const Sampler = ({
  className,
  bpm,
  // todo - replace 'isRunning' with 'cursor' to enable linking animation steps with audio events
  isRunning,
  loopLengthInSixteenths,
  fixedSamplerAnalyser,
  driftingSampler1Analyser,
  driftingSampler2Analyser,
  driftingSampler3Analyser,
}) => {
  const {balance, triggerMatrix} = samplerStore

  const isStoppedCallback = useCallback(() => !isRunning, [isRunning])

  const [fixedSampler, isFixedSamplerLoaded] = useFixedSampler(triggerMatrix, sampleMap.rolandTr808, {}, fixedSamplerAnalyser)
  const [driftingSampler1, isDriftingSampler1Loaded] = useDriftingSampler(triggerMatrix, bpm, loopLengthInSixteenths, isStoppedCallback, sampleMap.rolandTr808, {}, driftingSampler1Analyser)
  const [driftingSampler2, isDriftingSampler2Loaded] = useDriftingSampler(triggerMatrix, bpm, loopLengthInSixteenths, isStoppedCallback, sampleMap.rolandTr808, {}, driftingSampler2Analyser)
  const [driftingSampler3, isDriftingSampler3Loaded] = useDriftingSampler(triggerMatrix, bpm, loopLengthInSixteenths, isStoppedCallback, sampleMap.rolandTr808, {}, driftingSampler3Analyser)

  const asDbSpl = percentageScale(-36, 0)

  const [
    fixedSamplerVolume,
    driftingSampler1Volume,
    driftingSampler2Volume,
    driftingSampler3Volume
  ] = proximityDistribution(balance, 4).map(
    percentageValue => asDbSpl(percentageValue)
  )

  useEffect(() => {
    if (isFixedSamplerLoaded) {
      fixedSampler.volume.value = fixedSamplerVolume
      // console.log('F:', fixedSampler.volume.value)
    }
  }, [fixedSamplerVolume, fixedSampler, isFixedSamplerLoaded])

  useEffect(() => {
    if (isDriftingSampler1Loaded) {
      driftingSampler1.volume.value = driftingSampler1Volume
      // console.log('D1:', driftingSampler1.volume.value)
    }
  }, [driftingSampler1Volume, driftingSampler1, isDriftingSampler1Loaded])

  useEffect(() => {
    if (isDriftingSampler2Loaded) {
      driftingSampler2.volume.value = driftingSampler2Volume
      // console.log('D2:', driftingSampler2.volume.value)
    }
  }, [driftingSampler2Volume, driftingSampler2, isDriftingSampler2Loaded])

  useEffect(() => {
    if (isDriftingSampler3Loaded) {
      driftingSampler3.volume.value = driftingSampler3Volume
      // console.log('D3:', driftingSampler3.volume.value)
    }
  }, [driftingSampler3Volume, driftingSampler3, isDriftingSampler3Loaded])


  return (
    <div
      className={`drifter-sampler ${isRunning ? 'drifter-sampler-running' : ''} ${className}`}
      style={{ '--sampler-ticks': loopLengthInSixteenths }}
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
                  onChange={action(({currentTarget: {checked}}) => {
                    // todo - encapsulate this in the store as an action
                    const newTriggerMatrix = matrixInsertValue(
                      triggerMatrix, channelIndex, tickIndex, +Boolean(checked)
                    )
                    samplerStore.triggerMatrix = newTriggerMatrix
                  })}
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
