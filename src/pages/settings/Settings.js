import {action} from 'mobx'
import {observer} from 'mobx-react-lite'

import layoutStore from '../../store/layout'
import samplerStore from '../../store/sampler'
import transportStore from '../../store/transport'
import {analysersLayout} from '../../components/analysers/Analysers'

import Setting, {settingAlign} from './setting/Setting'
import Knob from '../../components/knob/Knob'
import Select from '../../components/select/Select'
import Number from '../../components/number/Number'
import FormControlGroup from '../../components/form-control-group/FormControlGroup'

import './Settings.css'


const Settings = () => (
  <div className="drifter-settings">
    <Setting
      label="bpm"
      tooltip={`
        set the speed in beats per minutes.<br/>
        enter a value between 1 and 999
      `}
    >
      <Number
        min={1}
        max={1000}
        value={transportStore.bpm}
        onChange={action(
          value => (transportStore.bpm = value)
        )}
        onIncrement={action(
          () => (transportStore.bpm++)
        )}
        onDecrement={action(
          () => (transportStore.bpm--)
        )}
      />
    </Setting>
    <Setting
      label="reset every"
      tooltip={`
synchronize the original source and the drifting source using this interval (0 means never).<br/>
(coming soon...)
      `}
    >
      <FormControlGroup>
        <Number
          min={0}
          max={64}
          value={samplerStore.resetIntervalValue}
          onChange={action(
            value => (samplerStore.resetIntervalValue = value)
          )}
          tooltip="(coming soon...)"
          disabled
        />
        <Select
          options={[
            { value: 'bars' },
            { value: 'beats' },
          ]}
          defaultValue={samplerStore.resetIntervalUnit}
          onChange={action(
            value => (samplerStore.resetIntervalUnit = value)
          )}
          disabled
        />
      </FormControlGroup>
    </Setting>
    <Setting
      label="analysers layout"
      tooltip="the layout mode for the analysers box (play to see the difference)"
    >
      <Select
        options={[
          { value: analysersLayout.flow },
          { value: analysersLayout.stack },
        ]}
        defaultValue={layoutStore.analysersLayout}
        onChange={action(
          value => (layoutStore.analysersLayout = value)
        )}
      />
    </Setting>
    <Setting
      label="chaos"
      pad=".5rem"
      align={settingAlign.start}
      tooltip={`
add undeterministic time drift by making the CPU work harder.<br/>
use at your own risk!
      `}
      className="drifter-setting-chaos"
    >
      <Knob
        min={0}
        max={100}
        defaultValue={samplerStore.chaos}
        onChange={action(
          value => (samplerStore.chaos = value)
        )}
      />
    </Setting>
  </div>
)

Settings.displayName = 'settings'


export default observer(Settings)
