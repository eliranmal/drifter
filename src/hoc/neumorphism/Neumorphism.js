
import './Neumorphism.css'


export const withNeumorphism = (WrappedComponent, hasComplementColor) => props =>
  <WrappedComponent {...props} className={`${props.className} Neumorphism`} />
