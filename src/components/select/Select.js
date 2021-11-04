import {withNeumorphism} from '../../hoc/neumorphism/Neumorphism'

import './Select.css'


const Select = ({ options = [], ...props}) => (
  <select
    {...props}
    className={`Select ${props.className ?? ''}`}>
      {options.map(({value, label, selected, className}, key) => (
        <option
          className={`Select-option ${className ?? ''}`}
          key={key}
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
