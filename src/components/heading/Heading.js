
import './Heading.css'


const Heading = ({
  text = '',
  className = '',
}) => (
  <h1
    className={`drifter-heading ${className}`}
   >{text.charAt(0)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text.substring(1)}</h1>
)


export default Heading
