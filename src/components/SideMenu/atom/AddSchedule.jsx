import styled from 'styled-components'
import AddBtn from './AddBtn'
import AddList from './AddList'

const AddSchedule = ({ addList, onChange, scheduleData }) => {
  return (
    <AddContainer>
      <AddBtn addList={addList} />
      <AddTitleArea
        name="title"
        value={scheduleData.title}
        onChange={onChange}
        placeholder="Title"
      />
      <AddTextArea
        name="content"
        value={scheduleData.content}
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
const AddTitleArea = styled.input`
  width: 13.645833333333332vw;
  height: 4.25925925925926vh;
  border-radius: 6px;
  margin-bottom: 0.3vw;
  padding: 0.4vw;
`

const AddTextArea = styled.textarea`
  width: 13.645833333333332vw;
  height: 9.25925925925926vh;
  border-radius: 6px;
  resize: none;
  padding: 0.4vw;
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
