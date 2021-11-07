import './Layout.css'


const Layout = ({
  children,
  main: Main,
  sideBar: SideBar = () => null,
}) => (
  <div className="drifter-layout">
    <main className="drifter-layout-main">
      { Main ? <Main /> : children }
    </main>
    <aside className="drifter-layout-sidebar" data-heading={spaceOut(SideBar.name.toLowerCase())}>
      <SideBar />
    </aside>
  </div>
)

// todo - find a better way
const spaceOut = term => `${term.charAt(0)}${String.fromCharCode('0000a0').repeat(5)}${term.substring(1)}`


export default Layout
