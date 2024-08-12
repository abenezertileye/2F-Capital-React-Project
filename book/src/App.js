import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import OwnerSignUp from './pages/OwnerSignUp';
import Login from './pages/Login';
import OwnerDashboard from './pages/OwnerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AdminBooks from './pages/AdminBooks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/owner-signup' element={<OwnerSignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/owner-dashboard' element={<OwnerDashboard />} />
        <Route path='/admin-dashboard' element={<AdminDashboard/>} />
        <Route path='/admin-book' element={<AdminBooks/>} />
      </Routes>
    </Router>
  );
}

export default App;
