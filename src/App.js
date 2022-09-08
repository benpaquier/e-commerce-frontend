import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Layout from './layouts/Layout'
import Cart from './pages/Cart/Cart'
import Order from './pages/Order/Order'
import Category from './pages/Category/Category'

const key = 'productIds'

const App = () => {
  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    getCartItems()
  }, [])

  const getCartItems = () => {
    const stringifiedProductIds =
      localStorage.getItem(key) || JSON.stringify([])
    setCartItems(JSON.parse(stringifiedProductIds).length)
  }

  const addItemToCart = productId => {
    const stringifiedProductIds =
      localStorage.getItem(key) || JSON.stringify([])
    const productIds = JSON.parse(stringifiedProductIds)
    productIds.push(productId)
    localStorage.setItem(key, JSON.stringify(productIds))
    setCartItems(productIds.length)
  }

  const removeCartItem = productId => {
    const stringifiedProductIds = localStorage.getItem(key)

    if (stringifiedProductIds) {
      const productIds = JSON.parse(stringifiedProductIds)
      const index = productIds.findIndex(id => id === productId)

      if (index >= 0) {
        productIds.splice(index, 1)
        localStorage.setItem(key, JSON.stringify(productIds))
        setCartItems(productIds.length)
      }
    }
  }

  const removeAllCartItems = () => {
    localStorage.removeItem(key)
    setCartItems(0)
  }

  return (
    <BrowserRouter>
      <Layout cartItems={cartItems}>
        <Routes>
          <Route path='/' element={<Home addItemToCart={addItemToCart} />} />
          <Route
            path='/cart'
            element={
              <Cart
                removeCartItem={removeCartItem}
                removeAllCartItems={removeAllCartItems}
              />
            }
          />
          <Route path='/orders/:id' element={<Order />} />
          <Route
            path='/categories/:id'
            element={<Category addItemToCart={addItemToCart} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
