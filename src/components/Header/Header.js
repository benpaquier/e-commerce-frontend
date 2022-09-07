import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getCategories } from '../../api/categories'

import Logo from '../Logo/Logo'
import Cart from '../Cart/Cart'
import './Header.css'

const Header = () => {
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
      <Logo />
      <nav>
        <Link to='/'>Products</Link>
        {categories.map(category => (
          <Link key={category.name} to='/'>
            {category.name}
          </Link>
        ))}
        <Cart />
      </nav>
    </header>
  )
}

export default Header
