import {filterObjectByKey} from '../../lib/util'

import './FormControl.css'


/**
* implementation assumes all data-* attributes belong to react-tooltip
*/
const FormControl = ({
  tag: FormControlType,
  className = '',
  ...props
}) => {
  const formControlClassName = `drifter-form-control ${className}`
  const tooltipAttributes = filterObjectByKey('data-', props)

  return props.disabled && tooltipAttributes['data-tip'] ? (
    <span {...tooltipAttributes}>
      <FormControlType
        {...props}
        className={formControlClassName}
      />
    </span>
  ) : (
    <FormControlType
      {...props}
      {...tooltipAttributes}
      className={formControlClassName}
    />
  )
}


export default FormControl
