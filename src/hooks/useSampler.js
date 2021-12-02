import {useState, useEffect} from 'react'
import kebabCase from 'lodash.kebabcase'

import useToneRef from './useToneRef'


const sampleMap = {
  rolandTr808: {
    'C4': 'TR-808Kick01.wav',
    'C#4': 'TR-808Snare01.wav',
    'D4': 'TR-808Clap01.wav',
    'D#4': 'TR-808Hat_C01.wav',
  },
}

const findSampleMapEntry = samplerSampleMap => Object.entries(sampleMap)
  .find(([key, map]) => Object.is(samplerSampleMap, map))

const resolveSampleMapDirName = samplerSampleMap => {
  const sampleMapEntry = findSampleMapEntry(samplerSampleMap)
  return sampleMapEntry && sampleMapEntry[0] && kebabCase(sampleMapEntry[0])
}

const useSampler = (samplerSampleMap = {}, samplerOptions = {}, analyserRef) => {
  const [loaded, setLoaded] = useState(false)

  const samplerKitDirName = resolveSampleMapDirName(samplerSampleMap)
  const samplerRef = useToneRef('Sampler', samplerSampleMap, {
    ...samplerOptions,
    baseUrl: `audio/drum-machines/${samplerKitDirName}/`,
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
