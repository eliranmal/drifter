
import './Neumorphism.css'


export const withNeumorphism = (WrappedComponent, {
  tintColor,
  shadeColor,
  backgroundColor
} = {}) => ({className, ...props}) => (
  <WrappedComponent
    {...props}
    className={`drifter-has-neumorphism ${className}`}
    style={{
      '--neumorphism-bg-color': backgroundColor,
      '--neumorphism-shadow-color-tint': tintColor,
      '--neumorphism-shadow-color-shade': shadeColor,
    }}
  />
)
