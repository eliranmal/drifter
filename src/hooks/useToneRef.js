import {useRef} from 'react'
import * as Tone from 'tone'


/**
* creates a Tone instance, wraps it in a React Ref box, and refreshes that
* instance whenever it's disposed (via the Tone context API).
*/
const useToneRef = (type = '', ...args) => {
  const toneInstance = new Tone[type](...args).toDestination()
  const toneRef = useRef(toneInstance)
  if (toneRef.current && toneRef.current.disposed) {
    toneRef.current = toneInstance
  }
  return toneRef.current
}


export default useToneRef
