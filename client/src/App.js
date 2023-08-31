import './App.css';
import 'antd/dist/antd.css'; 
import{BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Register from './Components/Register';
import {useAuthContext} from './Hooks/useAuthContext'

function App() {
 const {user} = useAuthContext()

  return (
   
   <>
   <BrowserRouter>
    
    
    <Routes>
    <Route path='/' element={!user ? <Login /> : <Navigate to='/dashboard' />}/> 
    <Route path='/register' element={!user ? <Register /> : <Navigate to='/dashboard' />}/> 
    <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/' />}/> 
    </Routes>
   


   
  </BrowserRouter>
   </>
  );
}

export default App;
