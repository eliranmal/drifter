import './Label.css'


const Label = ({children, className, ...props}) => (
  <label
    {...props}
    className={`drifter-label ${className ?? ''}`}>{
      children && children.length ? children : null
    }</label>
)


export default Label
