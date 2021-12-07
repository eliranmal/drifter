import useDebouncedCallback from '../../hooks/useDebouncedCallback'

import Input from '../input/Input'

import './RangeInput.css'


const RangeInput = ({
  className = '',
  onChange = () => {},
  onChangeImmediate = () => {},
  ...props
}) => {
  const [debouncedOnChange] = useDebouncedCallback(onChange)

  return (
    <Input
      {...props}
      type="range"
      className={`drifter-range-input ${className}`}
      onChange={({currentTarget: {value}}) => {
        onChangeImmediate(+value)
        debouncedOnChange(+value)
      }}
    />
  )
}


export default RangeInput
