import { useState, useEffect } from 'react'

import { getProducts } from '../../api/products'
import ProductCard from '../../components/ProductCard/ProductCard'

import './Home.css'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const data = await getProducts()
    setProducts(data)
  }

  return (
    <>
      <h1>Products</h1>

      <div className='products-container'>
        <aside>
          <h3>Filters</h3>
        </aside>
        <section className='product-grid'>
          {products.map(product => (
            <ProductCard product={product} />
          ))}
        </section>
      </div>
    </>
  )
}

export default Home
