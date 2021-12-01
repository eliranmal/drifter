import debounce from 'lodash.debounce'
import Input from '../input/Input'

import './RangeInput.css'


const RangeInput = ({className, onChange = () => {}, immediateOnChange = () => {}, ...props}) => {
  const debouncedOnChange = debounce(onChange, 33)
  return (
    <Input
      {...props}
      type="range"
      className={`drifter-range-input ${className}`}
      onChange={({currentTarget: {value}}) => {
        immediateOnChange(+value)
        debouncedOnChange(+value)
      }}
    />
  )
}


export default RangeInput
