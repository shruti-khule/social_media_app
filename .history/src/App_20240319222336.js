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
import '../src/App.css'
import { AuthContext } from './context/authContext';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


function App() {
  const {darkMode}=useContext(modeContext)
  const {currentUser}=useContext(AuthContext);
  const queryClient = new QueryClient()

  const Layout=()=>{
    return(
      <QueryClientProvider client={queryClient}>
        <div className={`${darkMode? "dark" : "light"}-theme`}>
        <Navbar/>
        <div style={{display:"flex"}}>
          <LeftPanel/>
          <div className='outlet' >
          <Outlet/>
          </div>
          <RightPanel/>
        </div>
        </div>
      </QueryClientProvider>
      

    )
  }
  function ProtectedRoute({routes}){
    if(!currentUser){
      return <Navigate to="/login"/>;
    }
    return routes;
  }
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" index element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>} />
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
