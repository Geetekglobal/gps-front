
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './components/pages/home/HOme'
import Login from './components/pages/login/Login'
import Signup from './components/pages/signup/Signup'
import BuyerDashboard from './components/dashboard/BuyerDashboard'
import Property from './components/pages/properties/Property'
import Packages from './components/pages/packages/Packages'
import OwnerDashboard from './components/dashboard/OwnerDashboard'
import AgentDashboard from './components/dashboard/AgentDashboard'
import AgencyDashboard from './components/dashboard/AgencyDashboard'
import BuilderDashboard from './components/dashboard/BuilderDashboard'
import StudentDashboard from './components/dashboard/StudentDashboard'

function App() {
  const userRole = 'buyer/tenant'; 

  const getDashboardComponent = (role) => {
    switch (role) {
      case 'buyer/tenant':
        return <BuyerDashboard />;
      case 'agent':
        return <AgentDashboard />;
      case 'owner':
        return <OwnerDashboard />;
      case 'builder':
        return <BuilderDashboard />;
      case 'agency':
        return <AgencyDashboard />;
      case 'student':
        return <StudentDashboard />;
      default:
        return null;
    }
  };

  return (
    
  <div className='w-full h-full' >
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/dashboard" element={getDashboardComponent(userRole)}/>
    <Route path="/property" element={<Property/>}/>
    <Route path="/packages" element={<Packages/>}/>
   </Routes>
  </div>
  )
}

export default App
