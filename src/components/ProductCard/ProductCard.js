import { useState } from 'react'
import { Link } from 'react-router-dom'

import './ProductCard.css'

const ProductCard = ({ product }) => {
  const [hover, setHover] = useState(false)

  const { image, name, price, id } = product

  return (
    <Link to={`/products/${id}`}>
      <article>
        <div
          className={`product-card-img ${hover ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
        <p className='product-card-name'>{name}</p>
        <p className='product-card-price'>{(price / 100).toFixed(2)} €</p>
      </article>
    </Link>
  )
}

export default ProductCard
