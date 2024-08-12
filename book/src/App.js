import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import OwnerSignUp from './pages/OwnerSignUp';
import Login from './pages/Login';
import OwnerDashboard from './pages/OwnerDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/owner-signup' element={<OwnerSignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/owner-dashboard' element={<OwnerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
