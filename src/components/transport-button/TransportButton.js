import {withNeumorphism} from '../../hoc/neumorphism/Neumorphism.js'

import './TransportButton.css'


const tooltipByType = {
  play: 'play (space)',
  stop: 'stop (space)',
  record: 'record (R)',
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
  ></button>
)


export default withNeumorphism(TransportButton)
