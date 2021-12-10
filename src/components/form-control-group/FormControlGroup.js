
import './FormControlGroup.css'


const FormControlGroup = ({
  className = '',
  children,
  ...props
}) => (
  <div className={`drifter-form-control-group ${className}`}>
    {children}
  </div>
)


export default FormControlGroup
