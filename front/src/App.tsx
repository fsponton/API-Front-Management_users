import { Routes, Route } from "react-router-dom";

import './App.css'
import LoginForm from "./pages/login/LoginForm";
import Dashboard from "./pages/Dashboard/Dashboard";
import ForgotPassword from "./pages/login/ForgotPassword";
import ResetPasswordd from "./pages/login/ResetPassword";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterUser from "./pages/login/RegisterUser";



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
