import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCategorie } from '../../api/categories'
import ProductCard from '../../components/ProductCard/ProductCard'

import './Category.css'

const Category = ({ addItemToCart }) => {
  const { id } = useParams()
  const [category, setCategory] = useState(null)

  useEffect(() => {
    fetchCategory()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const fetchCategory = async () => {
    const data = await getCategorie(id)
    setCategory(data)
  }

  if (!category) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>{category.name}</h1>

      <div
        className='category-banner'
        style={{ backgroundImage: `url(${category.image})` }}
      />
      <p className='category-description grey'>{category.description}</p>

      <h3>Products</h3>
      <section className='category-products-grid'>
        {category.Products.map(product => (
          <ProductCard
            key={product.name}
            product={product}
            addItemToCart={() => addItemToCart(product.id)}
          />
        ))}
      </section>
    </>
  )
}

export default Category
