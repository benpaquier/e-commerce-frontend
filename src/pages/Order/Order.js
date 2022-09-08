import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getOrder } from '../../api/orders'

import ProductSummary from '../../components/ProductSummary/ProductSummary'
import '../Cart/Cart.css'

const Order = () => {
  const params = useParams()
  const [order, setOrder] = useState(null)

  useEffect(() => {
    fetchOrder()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchOrder = async () => {
    const data = await getOrder(params.id)
    setOrder(data)
  }

  if (!order) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>Merci pour votre commande</h1>
      <p>Vore commande est {order.status.toLowerCase()}</p>
      <div className='cart-container'>
        <section className='cart-products'>
          {order.Products.map((product, id) => (
            <ProductSummary key={`${product.name}${id}`} product={product} />
          ))}
        </section>
        <aside>
          <h3>Récapitulatif</h3>
          <ul>
            {order.Products.map((product, id) => (
              <li key={`${product.name}${id}`}>
                <p className='grey'>{product.name} x 1</p>
                <p className='bold'>{(product.price / 100).toFixed(2)} €</p>
              </li>
            ))}
            <li className='cart-total'>
              <p className='bold'>Total</p>
              <p className='bold'>{(order.totalPrice / 100).toFixed(2)} €</p>
            </li>
          </ul>
        </aside>
      </div>
    </>
  )
}

export default Order
