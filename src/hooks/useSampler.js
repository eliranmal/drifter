import {useState} from 'react'
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

const useSampler = (samplerSampleMap = {}, samplerOptions = {}) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(null)

  const samplerKitDirName = resolveSampleMapDirName(samplerSampleMap)

  const analyserRef = useToneRef('Analyser')
  const samperRef = useToneRef('Sampler', samplerSampleMap, {
    ...samplerOptions,
    baseUrl: `audio/drum-machines/${samplerKitDirName}/`,
    onload: (...args) => {
      setLoaded(true)
      samplerOptions.onload && samplerOptions.onload()
    },
    onerror: err => {
      setError(err)
      samplerOptions.onerror && samplerOptions.onerror(err)
    },
  })

  return [samperRef.chain(analyserRef), analyserRef, loaded, error]
}


export {sampleMap}

export default useSampler
