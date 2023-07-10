import { Routes, Route } from "react-router-dom";

import './App.css'
import LoginForm from "./components/login/LoginForm";
import Dashboard from "./components/Dashboard/Dashboard";
import ForgotPassword from "./components/login/ForgotPassword";
import ResetPasswordd from "./components/login/ResetPassword";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/reset_password/:token" element={<ResetPasswordd />} />
      </Routes>

    </>
  )
}

export default App
