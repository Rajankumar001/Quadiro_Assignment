
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navbarpage from './components/Navbar/Navbarpage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbarpage/>
    <Routes>
    <Route  path='/register' Component={Register} exact/>
    <Route  path='/login' Component={Login} exact/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
