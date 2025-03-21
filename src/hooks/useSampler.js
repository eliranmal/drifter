import {useState, useEffect} from 'react'

import useToneRef from './useToneRef'


const useSampler = (samplerSampleMap = {}, samplerOptions = {}, analyser) => {
  const [loaded, setLoaded] = useState(false)
  // console.log('> sampler sample map', samplerSampleMap)

  const sampler = useToneRef('Sampler', samplerSampleMap.samplesMap, {
    ...samplerOptions,
    baseUrl: `audio/${samplerSampleMap.path}/`,
    onload: () => {
      setLoaded(true)
      samplerOptions.onload && samplerOptions.onload()
    },
  })

  const {volume = 0} = samplerOptions
  useEffect(() => {
    if (loaded) {
      sampler.volume.value = volume
    }
  }, [volume, sampler, loaded])

  return [analyser ? sampler?.connect(analyser) : sampler, loaded, analyser]
}


export default useSampler
