import styled from 'styled-components'
import ItemBox from './atom/ItemBox'
import { useDispatch } from 'react-redux'
import { openCreateModal } from '../../redux/modules/modal/createGroup'
import { useNavigate } from 'react-router-dom'

const ListContainer = ({ groupList }) => {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const openModal = () => {
    dispatch(openCreateModal())
  }
  console.log(groupList)
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
              nav(`/schedule/personal`)
            }}
          />
        </IndividualContainer>
        <LineWrapperTwo>
          <Line />
        </LineWrapperTwo>
        <SubTitle>Team Plan</SubTitle>

        <GroupContainer>
          <ItemBox
            type="Add"
            onClick={openModal}
          />
          {groupList.data?.map(data => (
            <ItemBox
              key={data.id}
              title={data.name}
              code={data.code}
              thumbnailPath={data.thumbnailPath}
            />
          ))}
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1vw;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
