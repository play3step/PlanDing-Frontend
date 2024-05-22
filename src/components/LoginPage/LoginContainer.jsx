import styled from 'styled-components'
import LoginInput from './LoginInput'
import LoginBtn from './atom/LoginBtn'

export const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL

const LoginContainer = () => {
  const handleActionClick = () => {
    window.location.href = VITE_SERVER_URL + '/oauth2/authorization/kakao'
  }
  return (
    <LoginBox>
      <LogoBox />
      <InputBox>
        <div>
          <h1
            style={{
              marginTop: '9.25925925925926vh'
            }}>
            Login
          </h1>
          <p>Welcome, We are glad to meet with you</p>
        </div>
        <LoginInput text="User Name" />
        <LoginInput text="Password" />
        <div
          style={{
            marginTop: '2vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <LoginBtn type="Login" />
          <Divider>
            <span>or</span>
          </Divider>
          <LoginBtn
            type="Kakao"
            handleActionClick={handleActionClick}
          />
        </div>
      </InputBox>
    </LoginBox>
  )
}
export default LoginContainer

const LoginBox = styled.div`
  width: 59.375vw;
  height: 77.77777777777779vh;
  margin: auto;
  display: flex;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
`
const LogoBox = styled.div`
  width: 31.25vw;
  background-color: #9094fe;
`

const InputBox = styled.div`
  width: 28.125vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 65%;
  margin: 20px 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ccc;
  }

  &::before {
    margin-right: 10px;
  }

  &::after {
    margin-left: 10px;
  }

  span {
    font-weight: bold;
    color: #ccc;
  }
`
