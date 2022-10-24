import { useContext } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import AuthContext from './AuthContext/AuthContext';
import Form from './Components/Auth/Form/Form';
import Layout from './Components/Auth/Layout';
import Footer from './Components/Footer/Footer';
import Logo from './Components/Logo/Logo';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

function App() {
  const login = useContext(AuthContext);
  console.log(login.token, 'dddd');
  const navigate = useNavigate();
  return (
    
       <Layout footer={<Footer />} logo={<Logo />}>
        <Routes>
          <Route path="/" element={ <div>
              <div>Home</div>
              { login.isLoggedIn && <div onClick={() => {
                localStorage.removeItem('token');
                login.removeToken();
            }}>logout</div> }
              </div> }/>
          !login.isLoggedIn && <Route path="/signup" element={!login.isLoggedIn ?<SignUp link="https://talents-valley.herokuapp.com/api/user/signup"/> : <Navigate to="/" />}/>
          !login.isLoggedIn && <Route path="/signin" element={!login.isLoggedIn ? <SignIn link="https://talents-valley.herokuapp.com/api/user/login"/> : <Navigate to="/" />}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </Layout>
  );
}

export default App;
