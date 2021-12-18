import {action} from 'mobx'
import {observer} from 'mobx-react-lite'

import layoutStore from '../../store/layout'

import Heading from '../../components/heading/Heading'
import Checkbox from '../../components/checkbox/Checkbox'

import './Layout.css'


const Layout = ({
  children,
  main: Main,
  sideBar: SideBar = () => null,
  mainProps = {},
  sideBarProps = {},
}) => (
  <div className="drifter-layout">
    <main className="drifter-layout-main">
      { Main ? <Main {...mainProps} /> : children }
    </main>
    <Checkbox
      className="drifter-layout-sidebar-pin"
      checked={layoutStore.isMenuOpen}
      onChange={action(checked => (layoutStore.isMenuOpen = checked))}
    />
    <aside className="drifter-layout-sidebar">
      <Heading
        text={SideBar.displayName}
        className="drifter-layout-sidebar-heading"
       />
      <SideBar {...sideBarProps} />
    </aside>
  </div>
)


export default observer(Layout)
