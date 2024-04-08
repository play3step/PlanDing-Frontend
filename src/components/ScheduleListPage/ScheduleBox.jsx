import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const ScheduleBox = ({ title, code }) => {
  const nav = useNavigate()
  return (
    <AddContainer
      onClick={() => {
        nav(`group/${code}`)
      }}>
      <AddImg />
      <p>{title}</p>
    </AddContainer>
  )
}
export default ScheduleBox

const AddContainer = styled.div`
  width: 12.5vw;
  height: 22.22222222222222vh;
  display: flex;
  flex-direction: column;

  background-color: #f7f8fb;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
`

const AddImg = styled.div`
  width: 11.458333333333332vw;
  height: 12.962962962962962vh;
  background-color: #bccefa;
`
