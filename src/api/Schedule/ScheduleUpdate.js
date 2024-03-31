import { setSchedule } from '../../redux/modules/schedule'
import basicApi from '../index'

export const ScheduleCreation = async (token, scheduleData) => {
  try {
    const response = await basicApi.post('/api/v1/schedule', scheduleData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })

    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}

export const scheduleDaily = (token, date) => async dispatch => {
  try {
    const response = await basicApi.get(`/api/v1/schedule/${date}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    dispatch(setSchedule(response.data))
    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}
