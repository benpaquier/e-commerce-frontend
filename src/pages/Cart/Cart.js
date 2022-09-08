import { useState, useEffect } from 'react'
import { sum } from 'lodash'
import { Link, useNavigate } from 'react-router-dom'

import { getProduct } from '../../api/products'
import { postOrder } from '../../api/orders'
import Button from '../../components/Button/Button'
import ProductSummary from '../../components/ProductSummary/ProductSummary'

import './Cart.css'

const Cart = ({ removeCartItem, removeAllCartItems }) => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const productIds = JSON.parse(localStorage.getItem('productIds'))

    const promises = productIds.map(id => {
      return getProduct(id)
    })

    const results = await Promise.all(promises)
    setProducts(results)
    setTotalPrice(sum(results.map(product => product.price)))
  }

  const updateCartOnRemove = id => {
    removeCartItem(id)
    fetchProducts()
  }

  const createOrder = async () => {
    const body = {
      totalPrice,
      customer_email: 'order@e-commerce.com',
      productIds: products.map(product => product.id)
    }

    const order = await postOrder(body)
    removeAllCartItems()
    navigate(`/orders/${order.id}`)
  }

  return (
    <>
      <h1>Panier</h1>

      {products.length > 0 ? (
        <div className='cart-container'>
          <section className='cart-products'>
            {products.map((product, id) => (
              <ProductSummary
                key={`${product.name}${id}`}
                product={product}
                removeCartItem={updateCartOnRemove}
              />
            ))}
          </section>
          <aside>
            <h3>Récapitulatif</h3>
            <ul>
              {products.map((product, id) => (
                <li key={`${product.name}${id}`}>
                  <p className='grey'>{product.name} x 1</p>
                  <p className='bold'>{(product.price / 100).toFixed(2)} €</p>
                </li>
              ))}
              <li className='cart-total'>
                <p className='bold'>Total</p>
                <p className='bold'>{(totalPrice / 100).toFixed(2)} €</p>
              </li>
            </ul>
            <Button wide text='Passer commande' handleClick={createOrder} />
          </aside>
        </div>
      ) : (
        <>
          <p>Votre panier est vide.</p>
          <br />
          <Link className='link' to='/'>
            Page d'accueil
          </Link>
        </>
      )}
    </>
  )
}

export default Cart
