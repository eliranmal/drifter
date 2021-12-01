import {withNeumorphism} from '../../hoc/neumorphism/Neumorphism'
import Input from '../input/Input'

import './NumberInput.css'


const NumberInput = ({className, onChange, ...props}) => (
  <Input
    {...props}
    className={`drifter-number-input ${className ?? ''}`}
    type="number"
    onChange={({currentTarget: {value}}) => onChange(+value)}
  />
)


export default withNeumorphism(NumberInput, {
  backgroundColor: 'var(--background-color-complement)',
  tintColor: 'var(--background-color-complement-tint)',
  shadeColor: 'var(--background-color-complement-shade)',
})
