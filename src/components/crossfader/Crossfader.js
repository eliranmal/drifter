import Input from '../input/Input';

import './Crossfader.css'


const Crossfader = ({className, ...props}) => (
  <Input
    {...props}
    className={`Crossfader ${className}`}
    type="range" />
)


export default Crossfader
