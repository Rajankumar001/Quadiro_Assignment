
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navbarpage from './components/Navbar/Navbarpage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Userpage from './components/LIsting/Userpage';
import Adminpage from './components/Admin/Adminpage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbarpage/>
    <Routes>
    <Route  path='/register' Component={Register} exact/>
    <Route  path='/login' Component={Login} exact/>
    <Route path='/user' Component={Userpage} exact/>
    <Route path='/admin' Component={Adminpage} exact/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
