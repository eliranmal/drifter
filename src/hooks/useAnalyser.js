import useToneRef from './useToneRef'


const useAnalyser = (
  type = 'waveform',
  size = 32
) => useToneRef('Analyser', type, size)


export default useAnalyser
