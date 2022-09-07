import Header from '../components/Header/Header'
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  )
}

export default Layout
