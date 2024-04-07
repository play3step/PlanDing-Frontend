import { setGroup } from '../../redux/modules/schedule/scheduleList'
import basicApi from '../index'

export const setScheduleList = token => async dispatch => {
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
