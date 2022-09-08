import Header from '../components/Header/Header'
import './Layout.css'

const Layout = ({ children, cartItems }) => {
  return (
    <>
      <Header cartItems={cartItems} />

      <main>{children}</main>
    </>
  )
}

export default Layout
