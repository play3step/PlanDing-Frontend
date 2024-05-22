import { useLocation, useNavigate } from 'react-router-dom'
import Progress from '../components/LoginProgressPage/Progress'
import { useEffect } from 'react'
import { loginController } from '../api/User/LoginController'
import { useDispatch } from 'react-redux'
import { userInfo } from '../redux/modules/user'

const LoginPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const token = queryParams.get('accessToken')
    if (token) {
      handleLogin(token)
    }
  })
  const handleLogin = async token => {
    try {
      const userData = await loginController(token)
      const { username, code, profileImage } = userData.data

      dispatch(userInfo(username, code, profileImage, token))
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
