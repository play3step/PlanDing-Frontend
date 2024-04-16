import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import { Client } from '@stomp/stompjs'

const WEBSOCKET_URL = import.meta.env.VITE_VIEW_WEBSOCKET_URL

const SchedulePage = () => {
  const [client, setClient] = useState(null)
  const [receivedMessages, setReceivedMessages] = useState([])
  const userInfo = useSelector(state => state.users.user)
  const selectedDate = useSelector(state => state.calendar.selectedDate)
  const { code } = useParams()
  const formattedDate = moment(selectedDate).format('YYYY-MM-DD')
  useEffect(() => {
    const stompClient = new Client({
      brokerURL: WEBSOCKET_URL,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log('Connected!')
        stompClient.subscribe(
          `/sub/schedule/${code}`,
          message => {
            const messageBody = JSON.parse(message.body)
            setReceivedMessages(prevMessages => [...prevMessages, messageBody])
            console.log('Received message:', messageBody)
          },
          { Authorization: `Bearer ${userInfo?.token}` }
        )
      },
      onStompError: frame => {
        console.error('Broker reported error: ' + frame.headers['message'])
        console.error('Additional details: ' + frame.body)
      }
    })

    stompClient.activate()
    setClient(stompClient)

    return () => {
      stompClient.deactivate()
    }
  }, [userInfo, code, formattedDate])

  const sendMessage = () => {
    if (client && client.active) {
      const message = {
        userId: 1,
        title: 'title',
        content: 'content',
        scheduleDate: formattedDate,
        startTime: '07:00',
        endTime: '08:00'
      }

      client.publish({
        destination: `/pub/schedule/${code}`,
        headers: { Authorization: `Bearer ${userInfo?.token}` },
        body: JSON.stringify(message)
      })
      console.log('Sent message:', message)
    } else {
      console.error('Client is not connected.')
    }
  }

  return (
    <div>
      <div>
        <h2>Received Messages:</h2>
        <ul>
          {receivedMessages.map((msg, index) => (
            <li key={index}>
              <pre>{JSON.stringify(msg, null, 2)}</pre>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

export default SchedulePage
