import {withNeumorphism} from '../../hoc/neumorphism/Neumorphism'

import './Select.css'


const Select = ({
  options = [],
  className = '',
  onChange = () => {},
  ...props
}) => (
  <select
    {...props}
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
  </select>
)


export default withNeumorphism(Select, {
  backgroundColor: 'var(--background-color-complement)',
  tintColor: 'var(--background-color-complement-tint)',
  shadeColor: 'var(--background-color-complement-shade)',
})
