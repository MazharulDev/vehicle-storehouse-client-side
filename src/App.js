import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import AddItems from './components/pages/AddItems/AddItems';
import AllItems from './components/pages/AllItems/AllItems';
import Blogs from './components/pages/Blogs/Blogs';
import CreateAccount from './components/pages/CreateAccount/CreateAccount';
import ForgotPassword from './components/pages/ForgotPassword/ForgotPassword';
import Inventory from './components/pages/Inventory/Inventory';
import Login from './components/pages/Login/Login';
import ManageItems from './components/pages/ManageItems/ManageItems';
import MyItems from './components/pages/MyItems/MyItems';
import NotFound from './components/pages/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory/>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword/>}></Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems/>
          </RequireAuth>
        }></Route>
        <Route path='/addItems' element={
          <RequireAuth>
            <AddItems/>
          </RequireAuth>
        }></Route>
        <Route path='/manageItems' element={
          <RequireAuth>
            <ManageItems/>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path="inventory" element={<AllItems/>}></Route>
        <Route path='/createAccount' element={<CreateAccount/>}></Route>


        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
