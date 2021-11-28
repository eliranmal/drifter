import {useState} from 'react'

import {limit} from '../../lib/util'
import RangeInput from '../range-input/RangeInput'

import './Knob.css'


const Knob = ({
  min = 0,
  max = 127,
  className = '',
  style = {},
  ...props
}) => {
  const [value, setValue] = useState(0)

  return (
    <RangeInput
      {...props}
      className={`drifter-knob ${className}`}
      style={{
        '--knob-value': value,
        '--knob-min': min,
        '--knob-max': max,
        ...style,
      }}
      min={min}
      max={max}
      value={value}
      immediateOnChange={newValue => {
        setValue(newValue)
      }}
      onWheel={({deltaY}) => {
        setValue(limit(min, max, value + (deltaY * .025)))
      }}
    />
  )
}


export default Knob
