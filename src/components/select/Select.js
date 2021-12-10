import {withNeumorphism} from '../../hoc/neumorphism/Neumorphism'
import FormControl from '../form-control/FormControl'

import './Select.css'


const Select = ({
  options = [],
  className = '',
  onChange = () => {},
  ...props
}) => (
  <FormControl
    {...props}
    tag="select"
    className={`drifter-select ${className}`}
    onChange={({currentTarget: {value}}) => onChange(value)}
  >
    {options.map(({value, label, className: optionClassName}, key) => (
      <option
        className={`drifter-select-option ${optionClassName ?? ''}`}
        key={key}
        value={value}
        >{label ?? value}</option>
    ))}
  </FormControl>
)


export default withNeumorphism(Select, {
  backgroundColor: 'var(--background-color-complement)',
  tintColor: 'var(--background-color-complement-tint)',
  shadeColor: 'var(--background-color-complement-shade)',
})
