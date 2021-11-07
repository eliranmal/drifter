import useLocalStorage from 'use-local-storage'

import Label from '../../components/label/Label'
import Select from '../../components/select/Select'
import NumberInput from '../../components/number-input/NumberInput'

import './Settings.css'


// todo - useLocalStorage, and if it makess sense - withLocalStorage

const Settings = () => {

  const [bpm, setBpm] = useLocalStorage('drifter-setting-bpm', 99)
  const [resetInterval, setResetInterval] = useLocalStorage('drifter-setting-reset-interval-beats', {
    value: 4,
    unit: 'bars',
  })

  return (
    <div className="Settings">
      <div
        className="Setting-bpm"
        data-tip="set the speed in beats per minutes"
        data-place="left"
      >
        <Label htmlFor="setting-input-bpm">bpm:</Label>
        <NumberInput
          id="setting-input-bpm"
          min={1}
          max={1000}
          value={bpm}
          onChange={({target: {value}}) => setBpm(+value)}
        />
      </div>
      <div
        className="Setting-reset-interval"
        data-tip="synchronize the original source and the drifting source using this interval (0 means never)"
        data-place="left"
      >
        <Label htmlFor="setting-input-reset-interval">reset every:</Label>
        <div>
          <NumberInput
            id="setting-input-reset-interval"
            min={0}
            max={64}
            value={resetInterval.value}
            onChange={({target: {value}}) => setResetInterval({
              ...resetInterval,
              value: +value,
            })}
          />
          <Select
            options={[
              { label: 'bars', value: 'bars' },
              { label: 'beats', value: 'beats' },
            ]}
            defaultValue={resetInterval.unit}
            onChange={({target: {value}}) => setResetInterval({
              ...resetInterval,
              unit: value,
            })}
          />
        </div>
      </div>
    </div>
  )
}


export default Settings
