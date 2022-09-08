import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'

import './Cart.css'

const Cart = ({ cartItems }) => {
  return (
    <Link className='cart-icon' to='/cart'>
      <div className='cart-icon-container'>
        <FiShoppingCart />
        {cartItems > 0 && <div className='number'>{cartItems}</div>}
      </div>
    </Link>
  )
}

export default Cart
