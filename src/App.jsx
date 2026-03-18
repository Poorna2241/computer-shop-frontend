
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import AdminPage from './pages/adminPage'
import TestPage from './pages/test'
import toast, { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ForgetPasswordPage from './pages/forgetPasswordpage.jsx';

function App() {

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <BrowserRouter>
    <Toaster position='top-right'/>
      <div className="w-full h-screen bg-primary text-secondary">
        <Routes >
          <Route path="/*" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/admin/*" element={<AdminPage/>}/>
          <Route path="/test" element={<TestPage/>}/>
          <Route path="/forget-password" element={<ForgetPasswordPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App;

// 386666047339-jejfbp421kq6bumfncpngchbnld3v3mt.apps.googleusercontent.com