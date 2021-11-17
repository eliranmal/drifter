import Input from '../../components/input/Input'

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
    <Input
      className="drifter-layout-sidebar-pin"
      type="checkbox"
    />
    <aside className="drifter-layout-sidebar"
      data-heading={spaceOut(SideBar.displayName)}>
      <SideBar {...sideBarProps} />
    </aside>
  </div>
)

// todo - find a better way
const spaceOut = term => term ?
  `${term.charAt(0)}${String.fromCharCode('0000a0').repeat(5)}${term.substring(1)}` :
    ''


export default Layout
