import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import SideMenu from './components/SideMenu/SideMenu'
import SchedulePage from './pages/SchedulePage'

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
            path="/SchedulePage"
            element={<SchedulePage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
