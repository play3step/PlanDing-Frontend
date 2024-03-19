import basicApi from '../index'

export const loginController = async code => {
  try {
    const response = await basicApi.get('/api/v1/userInfo', {
      headers: {
        Authorization: `Bearer ${code}`
      }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}
