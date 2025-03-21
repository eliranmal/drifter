import * as Tone from 'tone'
import {useEffect, useCallback} from 'react'

import useSampler from './useSampler'
import * as audio from '../lib/audio'


const useFixedSampler = (triggerMatrix, ...samplerArgs) => {
  const [sampler, isSamplerLoaded] = useSampler(...samplerArgs)

  const [samplerSampleMap/*, samplerOptions, samplerAnalyser*/] = samplerArgs

  const loadTriggers = useCallback(() => {
    // fixme - in the current implementation, Tone.loaded() is triggered too late for
    //         the first time after loading a new sampler. could/should this be elliminated?
    if (isSamplerLoaded && !sampler.disposed) {
      console.log('>>> before loading sampler triggers')
      Tone.loaded()
        .then(() => {
          sampler.sync()
          console.log('>>> loading sampler triggers')
          audio.loadTriggers(sampler, triggerMatrix)
        })
    }
  }, [sampler, isSamplerLoaded, triggerMatrix, samplerSampleMap])

  const disposeSampler = useCallback(() => {
    if (isSamplerLoaded && !sampler.disposed) {
      console.log('>>> disposing sampler')
      sampler.dispose()
    }
  }, [sampler, isSamplerLoaded])

  useEffect(() => {
    loadTriggers()
    return () => disposeSampler()
  }, [sampler, isSamplerLoaded, triggerMatrix, samplerSampleMap])

  return [sampler, isSamplerLoaded]
}


export default useFixedSampler
