import {menu} from "../utils/constants";
import {Footer} from "../components/Footer";

const menuStyles = {height: '60px', backgroundColor: '#000f81', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10}
const buttonMenuStyles = {backgroundColor: 'transparent', color: 'white', border: 'none', cursor: 'pointer', fontSize: 20}
const mainStyles = {display: 'flex', justifyContent: 'center', padding: 20}

export const MainLayout = ({children, onChangePage}) => {

  const handleClick = (newPage) => () => {
    onChangePage(newPage)
  }

  return (
    <div>
      <div style={menuStyles}>
        {menu.map((menuItem, index) => (
          <button key={index} onClick={handleClick(menuItem.id)} style={buttonMenuStyles}>{menuItem.title}</button>
        ))}
      </div>
      <main style={mainStyles}>
        <div>
          {children}
        </div>
      </main>
      <Footer>
        Footer content
        <a href="https://google.com">Link</a>
      </Footer>
    </div>
  )
}
