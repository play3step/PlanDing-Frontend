import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import SchedulePage from './pages/SchedulePage'
import RouterBtn from './components/atom/RouterBtn'
import LoginProgressPage from './pages/LoginProgressPage'
import LoginPage from './pages/LoginPage'
import ScheduleListPage from './pages/ScheduleListPage'
import MainPage from './pages/MainPage'

function App() {
  return (
    <div
      style={{
        display: 'flex'
      }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LoginPage />}
          />
          <Route
            path="/Login"
            element={<LoginProgressPage />}
          />
          <Route
            path="/main"
            element={<MainPage />}
          />{' '}
          <Route
            path="/Schedule"
            element={<ScheduleListPage />}
          />
          <Route
            path="/schedule/group/:code"
            element={<SchedulePage />}
          />
        </Routes>
        <div
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0
          }}>
          <RouterBtn />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
