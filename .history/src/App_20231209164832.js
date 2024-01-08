import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import RightPanel from './components/RightPanel/RightPanel';
import LeftPanel from './components/LeftPanel/LeftPanel';
import Profile from './pages/Profile/Profile';


import { BrowserRouter as Router,Routes, Route,Outlet, Navigate } from 'react-router-dom';

function App() {
  const currentUser=true;
  const Layout=()=>{
    return(
      <>
      <Navbar/>
      <div style={{display:"flex"}}>
        <LeftPanel/>
        <Outlet/>
        <RightPanel/>
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
