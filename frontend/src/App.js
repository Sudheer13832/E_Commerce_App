import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MerchantLogin from './components/MerchantLogin';
import UserLogin from './components/UserLogin';
import LandingPage from './components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MerchantSignUp from './components/MerchantSignUp';
import MerchantHomePage from './components/MerchantHomePage';
import UserSignUp from './components/UserSignup';
import UserHomePage from './components/UserHomePage';
import Error from './components/Error';
import Protect from './components/Protect';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/*' element={<Error/>}/>
          <Route path="/merchant" element={<MerchantLogin />} />
          <Route path="/user" element={<UserLogin />} />
          <Route path='/merchant-signup' element={<MerchantSignUp />} />
          <Route path='/merchant-home-page/*' element={<Protect Child={MerchantHomePage}/>} />
          <Route path='/user-signup' element={<UserSignUp/>}/>
          <Route path='/user-home-page' element={<UserHomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
