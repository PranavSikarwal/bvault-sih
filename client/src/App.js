import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from "./hooks/useAuthContext"
import { useAdminContext } from './hooks/useAdminContext'
import './App.css'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar/Navbar'
import Certify from './pages/Certify'
import Admin from './pages/Admin'
import Qr from './pages/Qr'


function App() {
  const { user } = useAuthContext()
  const { admin } = useAdminContext()
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home/>}
            />
            <Route 
              path="/scan"
              element={<Qr/>}
            />
            {!user && (
              <Route 
                path="/admin"
                element={<Admin/>}
              />
            )}
            {!admin ? (
              <>
                <Route 
                  path="/login" 
                  element={!user? <Login/> : <Navigate to="/"/>} 
                />
                <Route 
                  path="/signup" 
                  element={!user ? <Signup/> : <Navigate to="/"/>} 
                />
              </>
            ) : ""}
            {user && (user.verified === "yes" && (
              <Route 
                path="/certify" 
                element={<Certify/>} 
                />
            ))}
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
