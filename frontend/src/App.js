import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AdminPanel from './components/AdminPanel';
import Home from './pages/Home';
import Nopage from './pages/Nopage';
import Cart from './pages/Cart';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/adminpanel" element={<AdminPanel/>} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="*" element={<Nopage/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
