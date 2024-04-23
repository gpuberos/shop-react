import Home from './components/pages/Home'
import Account from './components/pages/Account'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profil' element={<Account/>}/>
      <Route path='/signin' element={<Login/>}/>
      <Route path='/signup' element={<Register/>}/>
    </Routes>
  );
};

export default App;