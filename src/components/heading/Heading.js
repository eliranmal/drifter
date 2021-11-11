
import './Heading.css'


const Heading = ({text = ''}) => (
  <h1 className="drifter-heading">{text.charAt(0)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text.substring(1)}</h1>
)


export default Heading
