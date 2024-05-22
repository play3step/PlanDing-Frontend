import styled from 'styled-components'

const LoginBtn = ({ type, handleActionClick }) => {
  return (
    <LoginButton
      type={type}
      onClick={handleActionClick}>
      {type}
    </LoginButton>
  )
}

export default LoginBtn

const LoginButton = styled.button`
  width: 18.75vw;
  height: 4.444444444444445vh;
  background-color: ${props => {
    switch (props.type) {
      case 'Login':
        return '#9094FE'
      case 'Kakao':
        return '#FFE20A'
      default:
        return '#6c757d'
    }
  }};
  border-radius: 4px;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    opacity: 0.8;
  }
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
`
