import styled from 'styled-components'
import ItemBox from './atom/ItemBox'

const ListContainer = () => {
  return (
    <Container>
      <ItemContainer>
        <IndividualContainer>
          <ItemBox type="Add" />
        </IndividualContainer>
        <GroupContainer>
          <ItemBox type="Add" />
        </GroupContainer>
      </ItemContainer>
    </Container>
  )
}
export default ListContainer

const Container = styled.div`
  width: 56.25vw;
  height: 81.96.29629629629629vh;
  background-color: #ffffff;
  margin-left: 1vw;
  display: flex;
  justify-content: center;
`
const ItemContainer = styled.div`
  width: 52.083333333333336vw;
  height: 81vh;
  border: 1px solid;
`
const IndividualContainer = styled.div`
  width: 52.083333333333336vw;
  height: 39vh;
`

const GroupContainer = styled.div`
  width: 52.083333333333336vw;
  height: 39vh;

  margin-top: 3vh;
`
