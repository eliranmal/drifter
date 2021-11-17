import {useRef} from 'react'
import * as Tone from 'tone'


const useToneRef = (type = '', ...args) => useRef(
  new Tone[type](...args).toDestination()
).current


export default useToneRef
