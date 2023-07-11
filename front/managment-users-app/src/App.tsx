import { Routes, Route } from "react-router-dom";

import './App.css'
import LoginForm from "./components/login/LoginForm";
import Dashboard from "./components/Dashboard/Dashboard";
import ForgotPassword from "./components/login/ForgotPassword";
import ResetPasswordd from "./components/login/ResetPassword";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterUser from "./components/login/RegisterUser";



function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/forgot_password" element={<ForgotPassword />} />
      <Route path="/reset_password/:slug1/:slug2/:slug3" element={<ResetPasswordd />} />
      <Route path="/new_user" element={<RegisterUser />} />
    </Routes>
  )
}

export default App
