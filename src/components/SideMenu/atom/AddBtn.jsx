import styled from 'styled-components'

const AddBtn = ({ addList, resetList, type }) => {
  return (
    <>
      {type === 'create' && <EventBtn onClick={addList}>Create</EventBtn>}
      {type === 'Reset' && <EventBtn onClick={resetList}>Reset</EventBtn>}
    </>
  )
}
export default AddBtn

const EventBtn = styled.button`
  width: 7.083333333333333vw;
  height: 3.688888888888889vh;
  margin-bottom: 0.7vw;
  border-radius: 6px;
  background-color: #9094fe;
  color: white;
  border: none;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
`
