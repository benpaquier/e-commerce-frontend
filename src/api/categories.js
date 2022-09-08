const { REACT_APP_API_URL } = process.env

const getCategories = async () => {
  const request = await fetch(`${REACT_APP_API_URL}/categories`)
  const response = await request.json()

  return response
}

const getCategorie = async id => {
  const request = await fetch(`${REACT_APP_API_URL}/categories/${id}`)
  const response = await request.json()

  return response
}

export { getCategories, getCategorie }
