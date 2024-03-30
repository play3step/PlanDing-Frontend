import moment from 'moment'

const timeUtils = () => {
  const schedule = []
  for (let hour = 6; hour <= 24; hour++) {
    const timeString = moment({ hour }).format('HH:mm')
    schedule.push({
      time: timeString
    })
  }
  return schedule
}

export default timeUtils
