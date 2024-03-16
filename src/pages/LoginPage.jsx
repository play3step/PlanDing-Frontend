import { useLocation, useNavigate } from 'react-router-dom'
import Progress from '../components/LoginPage/Progress'
import { useEffect } from 'react'
import { loginController } from '../api/User/LoginController'

const LoginPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const code = queryParams.get('accessToken')
    if (code) {
      handleLogin(code)
    }
  })
  const handleLogin = async code => {
    try {
      const userData = await loginController(code)
      console.log(userData)
      navigate('/schedule')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div
      style={{
        margin: 'auto'
      }}>
      <Progress />
    </div>
  )
}

export default LoginPage
