import styled from 'styled-components'

const ItemBox = ({ type, onClick }) => {
  return (
    <Container onClick={onClick}>
      <ItemImg type={type} />
      <ItemText>{(type = 'Add' && '스케줄 생성')}</ItemText>
    </Container>
  )
}
export default ItemBox

const Container = styled.div`
  width: 12.239583333333332vw;
  height: 18.88888888888889vh;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  padding: 0.5208333333333333vw;
`
const ItemImg = styled.div`
  width: 11.197916666666668vw;
  height: 12.685185185185185vh;
  background-color: ${props => (props.type === 'Add' ? '#B2B7FF' : '#f0f0f0')};
`
const ItemText = styled.p`
  margin-top: 0.6vw;
  font-size: 1vw;
`
