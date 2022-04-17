import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home/Home/Home';
import Services from './Page/Home/Services/Services';
import Login from './Page/Login/Login/Login';
import Footer from './Page/Shared/Footer/Footer';
import Header from './Page/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
