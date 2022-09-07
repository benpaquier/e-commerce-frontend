import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'

import './Cart.css'

const Cart = () => {
  return (
    <Link className='cart-icon' to='/cart'>
      <div className='cart-icon-container'>
        <FiShoppingCart />
        <div className='number'>2</div>
      </div>
    </Link>
  )
}

export default Cart
