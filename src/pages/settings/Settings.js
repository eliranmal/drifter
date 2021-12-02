import {action} from 'mobx'
import {observer} from 'mobx-react-lite'

import appSettings from '../../store/app-settings'
import Label from '../../components/label/Label'
import Select from '../../components/select/Select'
import NumberInput from '../../components/number-input/NumberInput'

import './Settings.css'


const Settings = () => (
  <div className="drifter-settings">
    <div
      className="drifter-setting-bpm"
      data-tip="set the speed in beats per minutes"
      data-place="left"
    >
      <Label htmlFor="drifter-setting-input-bpm">bpm:</Label>
      <NumberInput
        id="drifter-setting-input-bpm"
        min={1}
        max={1000}
        value={appSettings.bpm}
        onChange={action(
          value => (appSettings.bpm = value)
        )}
      />
    </div>
    <div
      className="drifter-setting-reset-interval"
      data-tip="synchronize the original source and the drifting source using this interval (0 means never)"
      data-place="left"
    >
      <Label htmlFor="drifter-setting-input-reset-interval">reset every:</Label>
      <div>
        <NumberInput
          id="drifter-setting-input-reset-interval"
          min={0}
          max={64}
          value={appSettings.resetIntervalValue}
          onChange={action(
            value => (appSettings.resetIntervalValue = value)
          )}
        />
        <Select
          options={[
            { value: 'bars' },
            { value: 'beats' },
          ]}
          defaultValue={appSettings.resetIntervalUnit}
          onChange={action(
            value => (appSettings.resetIntervalUnit = value)
          )}
        />
      </div>
    </div>
  </div>
)

Settings.displayName = 'settings'


export default observer(Settings)
