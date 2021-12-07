import {action, observable} from 'mobx'
import {observer} from 'mobx-react-lite'
import {useEffect, useCallback} from 'react'

import RangeInput from '../range-input/RangeInput'

import './Knob.css'


const viewStore = observable({
  value: 0,
})

const Knob = ({
  min = 0,
  max = 127,
  className = '',
  style = {},
  ...props
}) => {
  useEffect(() => {
    const updateViewValue = action(
      () => (viewStore.value = props.defaultValue ?? props.value)
    )
    updateViewValue()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChangeImmediate = action(useCallback(newValue => {
    viewStore.value = newValue
  }, []))


  return (
    <RangeInput
      {...props}
      className={`drifter-knob ${className}`}
      style={{
        ...style,
        '--knob-value': viewStore.value,
        '--knob-min': min,
        '--knob-max': max,
      }}
      min={min}
      max={max}
      onChangeImmediate={onChangeImmediate}
    />
  )
}


export default observer(Knob)
