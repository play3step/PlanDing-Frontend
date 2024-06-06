import basicApi from '../index'

export const loginController = async token => {
  try {
    const response = await basicApi.get('/api/v1/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}
