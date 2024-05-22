import styled from 'styled-components'

const LoginInput = ({ text }) => {
  return (
    <div
      style={{
        marginTop: '1vw'
      }}>
      <InputText>{text}</InputText>
      <InputBox />
    </div>
  )
}
export default LoginInput

const InputText = styled.p`
  font-size: 1vw;
`

const InputBox = styled.input`
  width: 18.75vw;
  height: 4.444444444444445vh;
`
