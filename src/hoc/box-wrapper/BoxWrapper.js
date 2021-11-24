
import './BoxWrapper.css'


export const withBoxWrapper = (WrappedComponent, {
  wrapperClassName = '',
} = {}) => props => (
  <div className={`drifter-box-wrapper ${wrapperClassName}`}>
    <WrappedComponent {...props} />
  </div>
)
