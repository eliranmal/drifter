import Label from '../../../components/label/Label'

import './Setting.css'


const settingAlign = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
}

const Setting = ({
  tooltip,
  label = '',
  pad = 0,
  align = settingAlign.center,
  className = '',
  children,
}) => (
  <div
    className={`drifter-setting ${className}`}
    data-tip={tooltip}
    data-place="left"
    data-offset={JSON.stringify({left: 10})}
  >
    <Label
      className="drifter-setting-wrap"
      style={{
        alignItems: align,
        padding: `${pad} 0`,
      }}
    >
      <span className="drifter-setting-label">{`${label}:`}</span>
      {children}
    </Label>
  </div>
)


export {settingAlign}

export default Setting
