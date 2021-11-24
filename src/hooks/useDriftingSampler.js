import {useEffect} from 'react'
import * as audio from '../lib/audio'
import useSampler from './useSampler'


const useDriftingSampler = (triggerMatrix, bpm, isStoppedCallback, displayedSixteenths, ...samplerArgs) => {
  const [driftingSampler, isDriftingSamplerLoaded] = useSampler(...samplerArgs)

  useEffect(() => driftingSampler.unsync(), [driftingSampler, triggerMatrix])
  useEffect(() => {
    if (isDriftingSamplerLoaded) {
      audio.executeTriggers(driftingSampler, triggerMatrix, bpm, isStoppedCallback, displayedSixteenths)
    }
  }, [isDriftingSamplerLoaded, driftingSampler, triggerMatrix, bpm, isStoppedCallback, displayedSixteenths])

  return [driftingSampler, isDriftingSamplerLoaded]
}


export default useDriftingSampler
