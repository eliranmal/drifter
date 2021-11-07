import Input from '../input/Input';

import './Crossfader.css'


const Crossfader = ({className, ...props}) => (
  <Input
    {...props}
    className={`drifter-crossfader ${className}`}
    type="range" />
)


export default Crossfader
