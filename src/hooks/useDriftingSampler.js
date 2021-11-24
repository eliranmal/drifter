import {useEffect} from 'react'

import * as audio from '../lib/audio'
import useSampler from './useSampler'


const useDriftingSampler = (
  triggerMatrix, bpm, loopLengthInSixteenths, isStoppedCallback,
  ...samplerArgs
) => {
  const [sampler, isSamplerLoaded] = useSampler(...samplerArgs)

  useEffect(() => sampler.unsync(), [sampler, triggerMatrix])

  useEffect(() => {
    if (isSamplerLoaded) {
      audio.executeTriggers(
        sampler, triggerMatrix, bpm, isStoppedCallback, loopLengthInSixteenths
      )
    }
  }, [isSamplerLoaded, sampler, triggerMatrix, bpm, isStoppedCallback, loopLengthInSixteenths])

  return [sampler, isSamplerLoaded]
}


export default useDriftingSampler
