import {observer} from 'mobx-react-lite'
import {values as observerValues} from 'mobx'
import analysersStore from '../../store/analysers'
import {withBoxWrapper} from '../../hoc/box-wrapper/BoxWrapper'

import Analyser from './analyser/Analyser'

import './Analysers.css'


const activeColors = [
  'var(--light-yellow)',
  'var(--green)',
  'var(--blue)',
  'var(--purple)',
  'var(--pink)',
]

const analysersDisplayMode = {
  flow: 'flow',
  stack: 'stack',
}

const Analysers = ({
  className = '',
  // todo - expose this as a setting
  displayMode = analysersDisplayMode.flow,
  ...props
}) => (
  <div
    {...props}
    className={`drifter-analysers drifter-analysers-${displayMode} ${className}`}
  >
    {observerValues(analysersStore).map((values, index, arr) => (
      <Analyser
        key={index}
        values={values}
        colors={{active: activeColors[index % arr.length]}}
      />
    ))}
  </div>
)


export {analysersDisplayMode}

export default withBoxWrapper(observer(Analysers), {
  useWrapper: false,
})
