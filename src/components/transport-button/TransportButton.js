import {withNeumorphism} from '../../hoc/neumorphism/Neumorphism'

import './TransportButton.css'


const tooltipByType = {
  play: 'play<br/>(space)',
  stop: 'stop<br/>(space)',
  record: 'record<br/>(shift+r)',
}


const TransportButton = ({type, isActive, className, ...props}) => (
  <button
    {...props}
    className={[
      'drifter-transport-button',
      type ? `drifter-transport-button-type-${type}` : '',
      isActive ? 'drifter-transport-button-active' : '',
      className,
    ].filter(Boolean).join(' ')}
    data-tip={tooltipByType[type]}
    data-class="drifter-transport-button-tooltip"
  ></button>
)


export default withNeumorphism(TransportButton)
