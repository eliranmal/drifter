import Button from '../button/Button'
import {withNeumorphism} from '../../hoc/neumorphism/Neumorphism'

import './TransportButton.css'


const tooltipByType = {
  play: 'play<br/>(space)',
  stop: 'stop<br/>(space)',
  record: 'record<br/>(shift+r)',
}

const disabledTooltipByType = Object.entries(tooltipByType).reduce(
  (accum, [key, value]) => {
    accum[key] = `${value}<br/>coming soon...`
    return accum
  },
  {}
)


const TransportButton = ({
  type,
  isActive,
  className = '',
  ...props
}) => (
  <Button
    {...props}
    className={[
      'drifter-transport-button',
      type ? `drifter-transport-button-type-${type}` : '',
      isActive ? 'drifter-transport-button-active' : '',
      className,
    ].filter(Boolean).join(' ')}
    data-tip={(props.disabled ? disabledTooltipByType : tooltipByType)[type]}
    data-class="drifter-react-tooltip drifter-transport-button-tooltip"
  />
)


export default withNeumorphism(TransportButton)
