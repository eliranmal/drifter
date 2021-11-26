import debounce from 'lodash.debounce'
import Input from '../input/Input'

import './RangeInput.css'


const RangeInput = ({className, onChange = () => {}, ...props}) => {
  const debouncedOnChange = debounce(onChange, 100)
  return (
    <Input
      {...props}
      type="range"
      className={`drifter-range-input ${className}`}
      onChange={({currentTarget: {value}}) => debouncedOnChange(value)}
    />
  )
}


export default RangeInput
