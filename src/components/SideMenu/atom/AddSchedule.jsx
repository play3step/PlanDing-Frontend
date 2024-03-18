import styled from 'styled-components'
import AddBtn from './AddBtn'
import AddList from './AddList'

const AddSchedule = ({ onClick, onChange, scheduleData }) => {
  return (
    <AddContainer>
      <AddBtn onClick={onClick} />
      <AddTextArea
        name="contents"
        value={scheduleData.contents}
        onChange={onChange}
        placeholder="Wirte Your Task Detail..."
      />

      <TimeListContainer>
        <AddList
          scheduleData={scheduleData}
          onChang={onChange}
        />
      </TimeListContainer>
    </AddContainer>
  )
}

export default AddSchedule

const AddContainer = styled.div`
  width: 17.083333333333332vw;
  height: 36.11111111111111vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2vw;
  border-radius: 15px;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
`
const AddTextArea = styled.textarea`
  width: 13.645833333333332vw;
  height: 9.25925925925926vh;
  border-radius: 15px;
  resize: none;
  padding: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.7vw;
`
const TimeListContainer = styled.div`
  margin-top: 1vw;
  width: '13.645833333333332vw';
  min-height: '12.592592592592592vh';
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.7291666666666666vw;
`
