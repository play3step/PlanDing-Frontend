import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import SideMenu from './components/SideMenu/SideMenu'
import SchedulePage from './pages/SchedulePage'
import RouterBtn from './components/atom/RouterBtn'
import LoginPage from './pages/LoginPage'
import ScheduleListPage from './pages/ScheduleListPage'

function App() {
  return (
    <div
      style={{
        display: 'flex'
      }}>
      <SideMenu />

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainPage />}
          />
          <Route
            path="/Login"
            element={<LoginPage />}
          />
          <Route
            path="/Schedule"
            element={<ScheduleListPage />}
          />
          <Route
            path="/schedule/:id"
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
