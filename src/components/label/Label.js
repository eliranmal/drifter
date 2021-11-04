import './Label.css'


const Label = ({children, ...props}) => (
  <label
    {...props}
    className={`Label ${props.className}`}>{
      children && children.length ? children : null
    }</label>
)


export default Label
