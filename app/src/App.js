import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import Policiy from './Pages/Policiy';
import ContactUs from './Pages/ContactUs';
import Services from './Pages/Services';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import WildPage from './Pages/WildPage';

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/policy' element={<Policiy/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/*' element={<WildPage/>}/>
      </Routes>
    </>
  );
}

export default App;
