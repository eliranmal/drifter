import {useState, useEffect} from 'react'

import useToneRef from './useToneRef'


const sampleMap = {
  rolandTr808: {
    path: 'drum-machines/roland-tr-808',
    samplesMap: {
      'C4': 'TR-808Kick01.wav',
      'C#4': 'TR-808Snare01.wav',
      'D4': 'TR-808Clap01.wav',
      'D#4': 'TR-808Hat_C01.wav',
    },
  },
}

const useSampler = (samplerSampleMap = {}, samplerOptions = {}, analyserRef) => {
  const [loaded, setLoaded] = useState(false)

  const samplerRef = useToneRef('Sampler', samplerSampleMap.samplesMap, {
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
      samplerRef.volume.value = volume
    }
  }, [volume, samplerRef, loaded])

  return [analyserRef ? samplerRef.connect(analyserRef) : samplerRef, loaded, analyserRef]
}


export {sampleMap}

export default useSampler
