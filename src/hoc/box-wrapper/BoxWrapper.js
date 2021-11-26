
import './BoxWrapper.css'


export const withBoxWrapper = (WrappedComponent, {
  useWrapper = true,
  wrapperClassName = '',
} = {}) => props => useWrapper ? (
  <div className={`drifter-box-wrapper ${wrapperClassName}`}>
    <WrappedComponent {...props} />
  </div>
) : (
  <WrappedComponent
    {...props}
    className={`drifter-box-wrapper ${props.className ?? ''}`}
  />
)
