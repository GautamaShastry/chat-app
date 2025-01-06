import React from 'react'
import Login from './pages/login/Login'
import './App.css'
import Signup from './pages/signup/Signup';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import { Toaster } from 'react-hot-toast';
import useAuthContext from './context/authContext';

function App() {

  const { authUser } = useAuthContext(); // after the user logs in, his info is stored in cookie and local storage, which allows the user to stay in home page
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App;
