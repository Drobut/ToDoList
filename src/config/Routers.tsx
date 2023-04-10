import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
