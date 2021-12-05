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

const analysersLayout = {
  flow: 'flow',
  stack: 'stack',
}

const Analysers = ({
  className = '',
  layout = analysersLayout.flow,
  ...props
}) => (
  <div
    {...props}
    className={`drifter-analysers drifter-analysers-${layout} ${className}`}
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


export {analysersLayout}

export default withBoxWrapper(observer(Analysers), {
  useWrapper: false,
})
