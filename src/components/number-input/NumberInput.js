import {withNeumorphism} from '../../hoc/neumorphism/Neumorphism'
import Input from '../input/Input'

import './NumberInput.css'


const NumberInput = ({className, ...props}) => (
  <Input
    {...props}
    className={`NumberInput ${className ?? ''}`}
    type="number" />
)


export default withNeumorphism(NumberInput, {
  backgroundColor: 'var(--background-color-complement)',
  tintColor: 'var(--background-color-complement-tint)',
  shadeColor: 'var(--background-color-complement-shade)',
})
