import FormControl from '../form-control/FormControl'

import './Input.css'


const Input = ({ type = 'text', className, ...props}) => (
  <FormControl
    {...props}
    tag="input"
    type={type}
    className={`drifter-input ${className ?? ''}`}
  />
)


export default Input
