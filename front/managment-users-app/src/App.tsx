import { Routes, Route } from "react-router-dom";
import './App.css'
import LoginForm from "./components/login/LoginForm";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route exact path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} /> */}
      </Routes>

    </>
  )
}

export default App
