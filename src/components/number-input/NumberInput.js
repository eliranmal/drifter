import {withNeumorphism} from '../../hoc/neumorphism/Neumorphism'
import Input from '../input/Input'

import './NumberInput.css'


const NumberInput = ({
  min = 0,
  max = 10,
  value = 5,
  ...props}) => (
  <Input
    {...props}
    className={`NumberInput ${props.className ?? ''}`}
    type="number"
    min={min}
    max={max}
    value={value} />
)


export default withNeumorphism(NumberInput, {
  backgroundColor: 'var(--background-color-complement)',
  tintColor: 'var(--background-color-complement-tint)',
  shadeColor: 'var(--background-color-complement-shade)',
})
