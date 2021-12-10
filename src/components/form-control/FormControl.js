import './FormControl.css'


/**
* implementation assumes all data-* attributes belong to react-tooltip
*/
const FormControl = ({
  tag: FormControlType,
  className = '',
  ...props
}) => {
  const tooltipAttributes = Object.entries(props)
    .filter(([key, value]) => key.startsWith('data-'))
    .reduce((accum, [key, value]) => {
      accum[key] = value
      return accum
    }, {})

  const formControlClassName = `form-control ${className}`

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
