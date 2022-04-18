import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Page/AboutMe/About/About';
import Accounteds from './Page/Accounteds/Accounteds';
import Blogs from './Page/Blogs/Blogs';
import Checkout from './Page/CheckOut/CheckOut/Checkout';
import Home from './Page/Home/Home/Home';
import Login from './Page/Login/Login/Login';
import RequireAuth from './Page/Login/RequireAuth/RequireAuth';
import Signup from './Page/Login/SignUp/Signup';
import ServiceDetails from './Page/ServiceDetails/ServiceDetails';
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
        <Route path='/services/:servicesId' element={<ServiceDetails />} />
        <Route path='/accounteds' element={
          <RequireAuth>
            <Accounteds />
          </RequireAuth>
        } />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='about' element={
          <RequireAuth>
            <About />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
