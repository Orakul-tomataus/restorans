import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook'
import 'materialize-css'
import { AuthContext } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Footbar } from './components/Footbar';


function App() {
  const {login,logout,token,userId} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
  return (
    <AuthContext.Provider value={{
      token,login,logout,userId
    }}>
      <Router>
        {isAuthenticated && <Navbar/>}
        <div className="container">
          {routes}
        </div>
        {isAuthenticated && <Footbar/>}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
