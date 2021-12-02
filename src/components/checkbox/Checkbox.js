import Input from '../input/Input'

import './Checkbox.css'


const Checkbox = ({
  className = '',
  onChange = () => {},
  ...props
}) => (
  <Input
    {...props}
    type="checkbox"
    className={`drifter-checkbox ${className}`}
    onChange={({currentTarget: {checked}}) => (
      onChange(Boolean(checked))
    )}
  />
)


export default Checkbox
