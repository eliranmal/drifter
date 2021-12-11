import {mapKeyboardEvents} from '@eliranmal/react-hooks'

import {withNeumorphism} from '../../hoc/neumorphism/Neumorphism'
import Input from '../input/Input'

import './Number.css'


const StyledInput = withNeumorphism(Input, {
  backgroundColor: 'var(--background-color-complement)',
  tintColor: 'var(--background-color-complement-tint)',
  shadeColor: 'var(--background-color-complement-shade)',
})

const Number = ({
  className = '',
  onChange,
  onIncrement,
  onDecrement,
  ...props
}) => (
  <span className={`drifter-number ${className}`}>
    <span
      className="drifter-number-spinner drifter-number-spinner-minus"
      onClick={onDecrement}
    >&#8722;</span>
    <span
      className="drifter-number-spinner drifter-number-spinner-plus"
      onClick={onIncrement}
    >&#43;</span>
    <StyledInput
      {...props}
      className={`drifter-number-input`}
      type="number"
      onChange={onChange ? ({currentTarget: {value}}) => onChange(+value) : null}
      onKeyDown={mapKeyboardEvents([
        onIncrement ? [38, onIncrement] : [],
        onDecrement ? [40, onDecrement] : [],
      ])}
    />
  </span>
)


export default Number
