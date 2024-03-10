import styled from 'styled-components'
import DefaultProfile from '/icon/lock.png'

const LoginBtn = () => {
  return (
    <LoginButton
      src={DefaultProfile}
      alt="Login"
    />
  )
}

export default LoginBtn

const LoginButton = styled.img`
  position: absolute;
  width: 2.604166666666667vw;
  height: 4.62962962962963vh;
  right: 0;
`
