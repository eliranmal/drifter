import {useEffect} from 'react'
import * as audio from '../lib/audio'
import useSampler from './useSampler'


const useFixedSampler = (triggerMatrix, ...samplerArgs) => {
  const [sampler, isSamplerLoaded] = useSampler(...samplerArgs)

  useEffect(() => sampler.unsync().sync(), [sampler, triggerMatrix])

  useEffect(() => {
    if (isSamplerLoaded) {
      audio.loadTriggers(sampler, triggerMatrix)
    }
  }, [isSamplerLoaded, sampler, triggerMatrix])

  return [sampler, isSamplerLoaded]
}


export default useFixedSampler
