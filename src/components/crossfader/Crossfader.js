import Input from '../input/Input';

import './Crossfader.css'


const Crossfader = ({
  min = 0,
  max = 100,
  value = 50,
  ...props}) => (
  <Input
    className={`Crossfader ${props.className}`}
    type="range"
    min={min}
    max={max}
    value={value}
    {...props} />
)


export default Crossfader
