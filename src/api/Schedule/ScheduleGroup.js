import { setGroup, addGroup } from '../../redux/modules/schedule/scheduleGroup'
import basicApi from '../index'

export const setGroupList = token => async dispatch => {
  try {
    const response = await basicApi.get('/api/v1/group', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    dispatch(setGroup(response.data))
    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}

export const addGroupList =
  (token, title, description, file) => async dispatch => {
    try {
      const formData = new FormData()

      let variables = [
        {
          name: title,
          description: description
        }
      ]
      formData.append(
        'request',
        new Blob([JSON.stringify(variables)], { type: 'application/json' })
      )
      formData.append('thumbnail', file)

      const response = await basicApi.post('/api/v1/group', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })

      console.log('Response:', response)
      dispatch(addGroup(response.data))
      return response.data
    } catch (error) {
      console.error(
        'Error adding group:',
        error.response ? error.response.data : error.message
      )
      throw error
    }
  }
