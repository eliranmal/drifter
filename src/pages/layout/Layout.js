import './Layout.css'


const Layout = ({
  children,
  main: Main,
  sideBar: SideBar = () => null,
}) => (
  <div className="Layout">
    <main className="Layout-main">
      { Main ? <Main /> : children }
    </main>
    <aside className="Layout-sidebar" data-heading={spaceOut(SideBar.name.toLowerCase())}>
      <SideBar />
    </aside>
  </div>
)

// todo - find a better way
const spaceOut = term => `${term.charAt(0)}${String.fromCharCode('0000a0').repeat(5)}${term.substring(1)}`


export default Layout
