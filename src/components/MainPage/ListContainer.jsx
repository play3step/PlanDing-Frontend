import styled from 'styled-components'
import ItemBox from './atom/ItemBox'
import { useDispatch } from 'react-redux'
import { openCreateModal } from '../../redux/modules/modal/createGroup'
import { useNavigate } from 'react-router-dom'

const ListContainer = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const openModal = () => {
    dispatch(openCreateModal())
  }
  return (
    <Container>
      <LineWrapper>
        <Line />
      </LineWrapper>
      <ItemContainer>
        <IndividualContainer>
          <SubTitle>My Plan</SubTitle>
          <ItemBox
            type="Add"
            onClick={() => {
              nav(`/schedule/Personal`)
            }}
          />
        </IndividualContainer>
        <LineWrapperTwo>
          <Line />
        </LineWrapperTwo>
        <GroupContainer>
          <SubTitle>Team Plan</SubTitle>
          <ItemBox
            type="Add"
            onClick={openModal}
          />
        </GroupContainer>
      </ItemContainer>
    </Container>
  )
}
export default ListContainer

const Container = styled.div`
  width: 56.35416666666667vw;
  height: 96.29629629629629vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Line = styled.div`
  width: 56.35416666666667vw;
  height: 1.8518518518518516vh;
  background-color: #e7e7fe;
`
const LineWrapper = styled.div`
  width: 56.35416666666667vw;
  margin-top: 15vh;
  margin-bottom: 3.5185185185185186vh;
`
const LineWrapperTwo = styled.div`
  width: 56.35416666666667vw;
  margin-top: 3.5185185185185186vh;
  margin-bottom: 1.8518518518518516vh;
`
const SubTitle = styled.p`
  font-size: 1.6vw;
  color: #303494;
  margin-bottom: 1.8518518518518516vh;
`

const ItemContainer = styled.div`
  width: 52.083333333333336vw;
  height: 81vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IndividualContainer = styled.div`
  width: 52.083333333333336vw;
`

const GroupContainer = styled.div`
  width: 52.083333333333336vw;
  height: 39vh;
`
