import { Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Account from './components/pages/Account'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profil' element={<Account/>}/>
    </Routes>
  );
};

export default App;