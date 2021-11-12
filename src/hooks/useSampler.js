import {useState} from 'react'
import useToneRef from './useToneRef'


const sampleMap = {
  rolandTr808: {
    urls: {
      'C4': 'TR-808Kick01.wav',
      'C#4': 'TR-808Snare01.wav',
      'D4': 'TR-808Clap01.wav',
      'D#4': 'TR-808Hat_C01.wav',
    },
    baseUrl: './audio/drum-machines/roland-tr-808/',
  }
}

const useSampler = (sampleMap = {}, samplerOptions = {}) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(null)

  const analyserRef = useToneRef('Analyser')
  const samperRef = useToneRef('Sampler', {
    ...samplerOptions,
    ...sampleMap,
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
