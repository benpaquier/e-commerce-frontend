import './ProductSummary.css'

const ProductSummary = ({ product, removeCartItem }) => {
  return (
    <article className='product-summary'>
      <div
        className='product-summary-img'
        style={{ backgroundImage: `url(${product.image})` }}
      />
      <div className='product-summary-info'>
        <div>
          <h3>{product.name}</h3>
          <p className='product-summary-description'>
            {product.description.slice(0, 200)}...
          </p>
        </div>
        <div className='product-summary-footer'>
          {removeCartItem ? (
            <p
              className='product-summary-delete'
              onClick={() => removeCartItem(product.id)}
            >
              Supprimer
            </p>
          ) : (
            <p></p>
          )}
          <p className='product-summary-price'>
            Total: <span>{(product.price / 100).toFixed(2)} €</span>
          </p>
        </div>
      </div>
    </article>
  )
}

export default ProductSummary
