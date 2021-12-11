import useDebouncedCallback from '../../hooks/useDebouncedCallback'

import Input from '../input/Input'

import './Range.css'


const Range = ({
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
      className={`drifter-range ${className}`}
      onChange={({currentTarget: {value}}) => {
        onChangeImmediate(+value)
        debouncedOnChange(+value)
      }}
    />
  )
}


export default Range
