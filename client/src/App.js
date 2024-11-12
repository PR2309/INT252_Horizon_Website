import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import Policiy from './Pages/Policiy';
import ContactUs from './Pages/ContactUs';
import Services from './Pages/Services';
import WildPage from './Pages/WildPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/policy' element={<Policiy/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/*' element={<WildPage/>}/>
      </Routes>
    </>
  );
};

export default App;
