import { useState } from 'react'

import './ProductCard.css'

const ProductCard = ({ product }) => {
  const [hover, setHover] = useState(false)

  const { image } = product

  return (
    <article>
      <div
        className={`product-card-img ${hover ? 'active' : ''}`}
        style={{ backgroundImage: `url(${image})` }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      <p className='product-card-name'>{product.name}</p>
      <p className='product-card-price'>{(product.price / 100).toFixed(2)} €</p>
    </article>
  )
}

export default ProductCard
