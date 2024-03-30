import basicApi from '../index'

export const ScheduleCreation = async (token, scheduleData) => {
  console.log(scheduleData)
  console.log(token)
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
