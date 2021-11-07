import {withNeumorphism} from '../../hoc/neumorphism/Neumorphism'

import './Select.css'


const Select = ({ options = [], className, ...props}) => (
  <select
    {...props}
    className={`drifter-select ${className ?? ''}`}>
      {options.map(({value, label, className: optionClassName}, key) => (
        <option
          className={`drifter-select-option ${optionClassName ?? ''}`}
          key={key}
          value={value}
          >{label}</option>
      ))}
  </select>
)


export default withNeumorphism(Select, {
  backgroundColor: 'var(--background-color-complement)',
  tintColor: 'var(--background-color-complement-tint)',
  shadeColor: 'var(--background-color-complement-shade)',
})
