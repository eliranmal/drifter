
import './Neumorphism.css'


export const withNeumorphism = (WrappedComponent, { tintColor, shadeColor, backgroundColor } = {}) => props =>
  <WrappedComponent
    {...props}
    className={`${props.className} Neumorphism`}
    style={{
      '--neumorphism-bg-color': backgroundColor,
      '--neumorphism-shadow-color-tint': tintColor,
      '--neumorphism-shadow-color-shade': shadeColor,
    }} />
