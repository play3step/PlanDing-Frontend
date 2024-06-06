import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ItemBox = ({ code, type, onClick, title, thumbnailPath }) => {
  const nav = useNavigate()
  return (
    <Container onClick={code ? () => nav(`/group/${code}`) : onClick}>
      <ItemImg
        src={thumbnailPath}
        type={type}
      />
      <ItemText>{type === 'Add' ? '스케줄 생성' : title}</ItemText>
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
const ItemImg = styled.img`
  width: 11.197916666666668vw;
  height: 12.685185185185185vh;
  background-color: ${props => (props.type === 'Add' ? '#B2B7FF' : '#f0f0f0')};
`
const ItemText = styled.p`
  margin-top: 0.6vw;
  font-size: 1vw;
`
