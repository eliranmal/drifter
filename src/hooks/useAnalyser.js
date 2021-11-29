import useToneRef from './useToneRef'


const useAnalyser = (
  type = 'waveform',
  size = 64
) => useToneRef('Analyser', type, size)


export default useAnalyser
