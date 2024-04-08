import { setGroup, addGroup } from '../../redux/modules/schedule/scheduleGroup'
import basicApi from '../index'

export const setGroupList = token => async dispatch => {
  try {
    const response = await basicApi.get(`/api/v1/group/myGroup`, {
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
export const addGroupList = token => async dispatch => {
  try {
    const response = await basicApi.post(
      `/api/v1/group`,
      { title: '테스트 방' },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    )
    dispatch(addGroup(response.data))
    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}
