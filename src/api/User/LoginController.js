import basicApi from '../index'

export const loginController = async ({ code }) => {
  try {
    const response = await basicApi.post('/api/v1/userInfo', { code })
    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}
