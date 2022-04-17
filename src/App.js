import { Route, Routes } from 'react-router-dom';
import './App.css';
import Accounteds from './Page/Accounteds/Accounteds';
import Home from './Page/Home/Home/Home';
import Services from './Page/Home/Services/Services';
import Login from './Page/Login/Login/Login';
import Signup from './Page/Login/SignUp/Signup';
import Footer from './Page/Shared/Footer/Footer';
import Header from './Page/Shared/Header/Header';
import NotFound from './Page/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/accounteds' element={<Accounteds />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
