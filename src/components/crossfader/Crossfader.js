import debounce from 'lodash.debounce'
import Input from '../input/Input'

import './Crossfader.css'


const Crossfader = ({className, onChange, ...props}) => {
  const debouncedOnChange = debounce(onChange, 100)
  return (
    <Input
      {...props}
      className={`drifter-crossfader ${className}`}
      type="range"
      onChange={({currentTarget: {value}}) => debouncedOnChange(value)}
    />
  )
}

export default Crossfader
