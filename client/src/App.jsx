import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Show from './pages/Show';
import Login from './pages/Login';
import Register from './pages/Register';
import Packages from './pages/Packages';


function App() {
  return (
    <>
    <Router>
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/show' element={<Show />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/packages' element={<Packages />} />

    </Routes>
    </Router>

    <ToastContainer />
      
    </>
  )
}

export default App
