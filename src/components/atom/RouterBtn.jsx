import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import LoginIcon from '@mui/icons-material/Login'
import ScheduleIcon from '@mui/icons-material/Schedule'
import ChatIcon from '@mui/icons-material/Chat'
import HomeIcon from '@mui/icons-material/Home'
import { useNavigate } from 'react-router-dom'
const actions = [
  { icon: <HomeIcon />, name: 'Home', route: '/' },
  { icon: <LoginIcon />, name: 'Login', route: '/' },
  { icon: <ScheduleIcon />, name: 'Schedule', route: '/schedule' },
  { icon: <ChatIcon />, name: 'Chat', route: '/chat' }
]

const RouterBtn = () => {
  const navigate = useNavigate()

  const handleActionClick = route => {
    navigate(route)
  }
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}>
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleActionClick(action.route)}
          />
        ))}
      </SpeedDial>
    </Box>
  )
}
export default RouterBtn
