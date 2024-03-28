import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DNSManagerDashboard from './components/customComponents/Navbar'
import HomePage from './pages/homePage'
import Navbar from './components/customComponents/Navbar'
import MainContent from './components/homeComponents/MainContent'
import { BrowserRouter as Router } from 'react-router-dom'
import UserRouters from './routers/userRouters'
function App() {
  const [count, setCount] = useState(0)

  return (
    
      <Router>
        <UserRouters/>
      </Router>
    
  )
}

export default App
