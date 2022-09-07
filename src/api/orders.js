const { REACT_APP_API_URL } = process.env

const getOrder = async id => {
  const request = await fetch(`${REACT_APP_API_URL}/orders/${id}`)
  const response = await request.json()

  return response
}

const postOrder = async body => {
  const request = await fetch(`${REACT_APP_API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  const response = await request.json()

  return response
}

export { getOrder, postOrder }
