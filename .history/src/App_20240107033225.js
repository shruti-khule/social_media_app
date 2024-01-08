import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import RightPanel from './components/RightPanel/RightPanel';
import LeftPanel from './components/LeftPanel/LeftPanel';
import Profile from './pages/Profile/Profile';
import { useContext } from 'react';
import { BrowserRouter as Router,Routes, Route,Outlet, Navigate } from 'react-router-dom';
import { modeContext } from './context/modeContext';
import { authContext } from './context/authContext';

function App() {
  const {darkMode}=useContext(modeContext)
  const currentUser=useContext(authContext);
  const Layout=()=>{
    return(
      <>
      <div className={`${darkMode? "dark" : "light"}-theme`}>
      <Navbar/>
      <div>
        <LeftPanel/>
        <div style={{}}>
        <Outlet/>
        </div>
        <RightPanel/>
      </div>
      </div>
      </>

    )
  }
  const ProtectedRoutes=({routes})=>{
    if(!currentUser){
      return <Navigate to="/login"/>;
    }
    return routes
  }
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>} />
       </Route>
       <Route path="/profile/:id" element={<Layout/>}>
          <Route path="/profile/:id" element={<Profile/>} />
       </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;
