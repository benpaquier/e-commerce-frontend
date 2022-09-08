import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getCategories } from '../../api/categories'

import Logo from '../Logo/Logo'
import Cart from '../Cart/Cart'
import './Header.css'

const Header = ({ cartItems }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    const data = await getCategories()
    setCategories(data)
  }

  return (
    <header>
      <Link to='/'>
        <Logo />
      </Link>
      <nav>
        <Link to='/'>Products</Link>
        {categories.map(category => (
          <Link key={category.name} to={`/categories/${category.id}`}>
            {category.name}
          </Link>
        ))}
        <Cart cartItems={cartItems} />
      </nav>
    </header>
  )
}

export default Header
