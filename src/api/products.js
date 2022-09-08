const { REACT_APP_API_URL } = process.env

const getProducts = async categoryId => {
  const queryParam = categoryId ? `category=${categoryId}` : ''
  console.log(queryParam)
  const request = await fetch(`${REACT_APP_API_URL}/products?${queryParam}`)
  const response = await request.json()

  return response
}

const getProduct = async id => {
  const request = await fetch(`${REACT_APP_API_URL}/products/${id}`)
  const response = await request.json()

  return response
}

export { getProducts, getProduct }
