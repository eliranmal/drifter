import {useRef} from 'react'
import * as Tone from 'tone'


const useToneRef = (type = '', options) => useRef(
  new Tone[type](options).toDestination()
).current


export default useToneRef
