import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import ForgotPassword from './components/pages/ForgotPassword/ForgotPassword';
import Inventory from './components/pages/Inventory/Inventory';
import Login from './components/pages/Login/Login';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/inventory' element={<Inventory/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword/>}></Route>


        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
