import {withNeumorphism} from '../../hoc/neumorphism/Neumorphism'

import './Select.css'


const Select = ({ options = [], ...props}) => (
  <select
    {...props}
    className={`Select ${props.className ?? ''}`}>
      {options.map(({value, label, selected, className}) => (
        <option
          className={`Select-option ${className ?? ''}`}
          value={value}
          selected={selected}
          >{label}</option>
      ))}
  </select>
)


export default withNeumorphism(Select, {
  backgroundColor: 'var(--background-color-complement)',
  tintColor: 'var(--background-color-complement-tint)',
  shadeColor: 'var(--background-color-complement-shade)',
})
