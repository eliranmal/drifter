import {useCallback} from 'react'
import {action} from 'mobx'
import {observer} from 'mobx-react-lite'
import {useAnimationFrame} from '@eliranmal/react-hooks'

import {
  percentageScale,
  proximityDistribution,
} from '../../lib/util'
import samplerStore from '../../store/sampler'
import transportStore from '../../store/transport'
import analysersStore from '../../store/analysers'
import {sampleMap} from '../../hooks/useSampler'
import useAnalyser from '../../hooks/useAnalyser'
import useFixedSampler from '../../hooks/useFixedSampler'
import useDriftingSampler from '../../hooks/useDriftingSampler'
import {withBoxWrapper} from '../../hoc/box-wrapper/BoxWrapper'

import Checkbox from '../checkbox/Checkbox'

import './Sampler.css'


const Sampler = ({
  className,
  style,
}) => {
  const {balance, triggerMatrix} = samplerStore
  // todo - replace the usage of 'isPlaying' with a 'cursor' to enable linking animation steps with audio events
  const {bpm, isPlaying, loopLengthInSixteenths} = transportStore

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

  const fixedSamplerAnalyser = useAnalyser()
  const driftingSampler1Analyser = useAnalyser()
  const driftingSampler2Analyser = useAnalyser()
  const driftingSampler3Analyser = useAnalyser()

  useFixedSampler(
    triggerMatrix, sampleMap.rolandTr808, {volume: fixedSamplerVolume}, fixedSamplerAnalyser)
  useDriftingSampler(
    triggerMatrix, bpm, loopLengthInSixteenths, samplerStore.chaos, isStoppedCallback, sampleMap.rolandTr808,
    {volume: driftingSampler1Volume}, driftingSampler1Analyser)
  useDriftingSampler(
    triggerMatrix, bpm, loopLengthInSixteenths, samplerStore.chaos, isStoppedCallback, sampleMap.rolandTr808,
    {volume: driftingSampler2Volume}, driftingSampler2Analyser)
  useDriftingSampler(
    triggerMatrix, bpm, loopLengthInSixteenths, samplerStore.chaos, isStoppedCallback, sampleMap.rolandTr808,
    {volume: driftingSampler3Volume}, driftingSampler3Analyser)


  useAnimationFrame(
    () => Object.entries({
      f: fixedSamplerAnalyser,
      d1: driftingSampler1Analyser,
      d2: driftingSampler2Analyser,
      d3: driftingSampler3Analyser,
    }).forEach(([key, analyser]) => (
      analysersStore[key] = Array.from(analyser.getValue())
    )),
    isStoppedCallback,
    action
  )


  return (
    <div
      className={`drifter-sampler ${isPlaying ? 'drifter-sampler-running' : ''} ${className}`}
      style={{
        ...style,
        '--sampler-ticks': loopLengthInSixteenths
      }}
    >
      <div
        className="drifter-sampler-timeline"
        data-tip={`
          toggle the pads to add or remove notes.<br/>
          rows are channels, and columns represent sixteenth note intervals.
        `}
      >
        <div className="drifter-sampler-tape"></div>
        <div className="drifter-sampler-channels">
          {triggerMatrix.map((channel, channelIndex) => (
            <div key={channelIndex} className="drifter-sampler-channel">
              {channel.map((tickValue, tickIndex) => (
                <Checkbox
                  className="drifter-sampler-tick"
                  key={tickIndex}
                  defaultChecked={!!tickValue}
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
