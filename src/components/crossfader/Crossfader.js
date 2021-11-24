import debounce from 'lodash.debounce'
import Input from '../input/Input'

import './Crossfader.css'


const Crossfader = ({className, onChange = () => {}, ...props}) => {
  const debouncedOnChange = debounce(onChange, 100)
  return (
    <Input
      {...props}
      type="range"
      className={`drifter-crossfader ${className}`}
      onChange={({currentTarget: {value}}) => debouncedOnChange(value)}
    />
  )
}


export default Crossfader
