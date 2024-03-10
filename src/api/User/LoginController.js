import basicApi from '../index'

export const loginController = async () => {
  try {
    const response = await basicApi.post('/posts')
    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}

export const userData = async () => {
  try {
    const response = await basicApi.get('/get')
    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}
