import {useCallback} from 'react'
import {observer} from 'mobx-react-lite'

import {
  percentageScale,
  proximityDistribution,
} from '../../lib/util'
import appSettingsStore from '../../store/app-settings'
import samplerStore from '../../store/sampler'
import transportStore from '../../store/transport'
import {sampleMap} from '../../hooks/useSampler'
import useFixedSampler from '../../hooks/useFixedSampler'
import useDriftingSampler from '../../hooks/useDriftingSampler'
import {withBoxWrapper} from '../../hoc/box-wrapper/BoxWrapper'

import Checkbox from '../checkbox/Checkbox'

import './Sampler.css'


const Sampler = ({
  className,
  fixedSamplerAnalyser,
  driftingSampler1Analyser,
  driftingSampler2Analyser,
  driftingSampler3Analyser,
}) => {
  const {bpm} = appSettingsStore
  const {balance, triggerMatrix} = samplerStore
  // todo - replace the usage of 'isPlaying' with a 'cursor' to enable linking animation steps with audio events
  const {isPlaying, loopLengthInSixteenths} = transportStore

  const asDbSpl = percentageScale(-36, 0)
  const [
    fixedSamplerVolume,
    driftingSampler1Volume,
    driftingSampler2Volume,
    driftingSampler3Volume
  ] = proximityDistribution(balance, 4).map(
    percentageValue => asDbSpl(percentageValue)
  )

  const isStoppedCallback = useCallback(() => !isPlaying, [isPlaying])

  useFixedSampler(
    triggerMatrix, sampleMap.rolandTr808, {volume: fixedSamplerVolume}, fixedSamplerAnalyser)
  useDriftingSampler(
    triggerMatrix, bpm, loopLengthInSixteenths, isStoppedCallback, sampleMap.rolandTr808,
    {volume: driftingSampler1Volume}, driftingSampler1Analyser)
  useDriftingSampler(
    triggerMatrix, bpm, loopLengthInSixteenths, isStoppedCallback, sampleMap.rolandTr808,
    {volume: driftingSampler2Volume}, driftingSampler2Analyser)
  useDriftingSampler(
    triggerMatrix, bpm, loopLengthInSixteenths, isStoppedCallback, sampleMap.rolandTr808,
    {volume: driftingSampler3Volume}, driftingSampler3Analyser)


  return (
    <div
      className={`drifter-sampler ${isPlaying ? 'drifter-sampler-running' : ''} ${className}`}
      style={{ '--sampler-ticks': loopLengthInSixteenths }}
    >
      <div className="drifter-sampler-timeline">
        <div className="drifter-sampler-tape"></div>
        <div className="drifter-sampler-channels">
          {triggerMatrix.map((channel, channelIndex) => (
            <div key={channelIndex} className="drifter-sampler-channel">
              {channel.map((tickValue, tickIndex) => (
                <Checkbox
                  className="drifter-sampler-tick"
                  key={tickIndex}
                  defaultChecked={tickValue}
                  onChange={checked => samplerStore.updateTriggerMatrixValue(
                    channelIndex, tickIndex, +checked
                  )}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default withBoxWrapper(observer(Sampler), {
  useWrapper: false,
})
