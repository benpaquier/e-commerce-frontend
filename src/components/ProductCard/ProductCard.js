import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button/Button'
import './ProductCard.css'

const ProductCard = ({ product, addItemToCart }) => {
  const [hover, setHover] = useState(false)

  const { image, name, price, id } = product

  const handleAddClick = () => {
    addItemToCart(product.id)
  }

  return (
    <div
      className={`product-card ${hover ? 'active' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to={`/products/${id}`}>
        <article>
          <div className={`product-card-img-container`}>
            <div
              className='product-card-img-background'
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
          <p className='product-card-name'>{name}</p>
          <p className='product-card-price'>{(price / 100).toFixed(2)} €</p>
        </article>
      </Link>
      <div className='product-card-button-container'>
        <Button text='Ajouter au panier' handleClick={handleAddClick} />
      </div>
    </div>
  )
}

export default ProductCard
