import Label from '../../components/label/Label'
import Select from '../../components/select/Select'
import NumberInput from '../../components/number-input/NumberInput'

import './Settings.css'


// todo - useLocalStorage, and if it makess sense - withLocalStorage

const Settings = () => (
  <div className="Settings">
    <div className="Setting-bpm">
      <Label htmlFor="setting-input-bpm">bpm:</Label>
      <NumberInput
        id="setting-input-bpm"
        min="1"
        max="1000"
        value="99" />
    </div>
    <div className="Setting-reset-interval">
      <Label htmlFor="setting-input-reset-interval">reset every:</Label>
      <div>
        <NumberInput
          id="setting-input-reset-interval"
          min="0"
          max="64"
          value="5" />
        <Select
          options={[
            { label: 'bars', value: 4 },
            { label: 'beats', value: 1 },
          ]}
        />
      </div>
    </div>
  </div>
)


export default Settings
