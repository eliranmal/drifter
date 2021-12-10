import FormControl from '../form-control/FormControl'

import './Button.css'


const Button = ({className = '', ...props}) => (
  <FormControl
    {...props}
    tag="button"
    className={`drifter-button ${className}`}
  />
)


export default Button
