import * as Tone from 'tone'
import {useEffect, useCallback} from 'react'

import * as audio from '../lib/audio'
import useSampler from './useSampler'


const useDriftingSampler = (
  triggerMatrix, bpm, loopLengthInSixteenths, chaosPercentage, isStoppedCallback,
  ...samplerArgs
) => {
  const [sampler, isSamplerLoaded] = useSampler(...samplerArgs)

  const [samplerSampleMap/*, samplerOptions, samplerAnalyser*/] = samplerArgs

  const executeTriggers = useCallback(() => {
    if (isSamplerLoaded && !sampler.disposed) {
      Tone.loaded()
        .then(() => {
          sampler.unsync()
          audio.executeTriggers(
            sampler, triggerMatrix, bpm, isStoppedCallback, loopLengthInSixteenths, chaosPercentage
          )
        })
    }
  }, [sampler, isSamplerLoaded, triggerMatrix, bpm, isStoppedCallback, loopLengthInSixteenths, chaosPercentage])

  const disposeSampler = useCallback(() => {
    if (isSamplerLoaded && !sampler.disposed) {
      sampler.dispose()
    }
  }, [sampler, isSamplerLoaded])

  useEffect(() => {
    executeTriggers()
    return () => disposeSampler()
  }, [sampler, isSamplerLoaded, samplerSampleMap, executeTriggers, disposeSampler])

  return [sampler, isSamplerLoaded]
}


export default useDriftingSampler
