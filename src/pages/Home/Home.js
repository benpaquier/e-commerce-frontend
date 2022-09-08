import { useState, useEffect } from 'react'

import { getProducts } from '../../api/products'
import { getCategories } from '../../api/categories'
import ProductCard from '../../components/ProductCard/ProductCard'

import './Home.css'
import HomeFilters from '../../components/HomeFilters/HomeFilters'

const Home = ({ addItemToCart }) => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [filter, setFilter] = useState(0)

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

  const fetchProducts = async () => {
    const data = await getProducts(filter)
    setProducts(data)
  }

  const fetchCategories = async () => {
    const data = await getCategories()
    setCategories(data)
  }

  const handleFilterSelect = filter => {
    setFilter(filter)
  }

  return (
    <>
      <h1>Products</h1>

      <div className='products-container'>
        <aside>
          <h3>Filters</h3>
          <HomeFilters
            filters={categories}
            selected={filter}
            handleFilterSelect={handleFilterSelect}
          />
        </aside>
        <section className='product-grid'>
          {products.map(product => (
            <ProductCard
              key={product.name}
              product={product}
              addItemToCart={addItemToCart}
            />
          ))}
        </section>
      </div>
    </>
  )
}

export default Home
