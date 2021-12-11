import {withNeumorphism} from '../../hoc/neumorphism/Neumorphism'
import Input from '../input/Input'

import './Number.css'


const Number = ({className, onChange, ...props}) => (
  <Input
    {...props}
    className={`drifter-number ${className ?? ''}`}
    type="number"
    onChange={({currentTarget: {value}}) => onChange(+value)}
  />
)


export default withNeumorphism(Number, {
  backgroundColor: 'var(--background-color-complement)',
  tintColor: 'var(--background-color-complement-tint)',
  shadeColor: 'var(--background-color-complement-shade)',
})
