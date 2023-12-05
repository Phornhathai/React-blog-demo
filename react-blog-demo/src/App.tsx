import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import './style/global.css'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Contact from "./pages/contact/Contact";

export default function App() {
  const user = true

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register"  element={user ? <Home /> : <Register/>} />
        <Route path="/login" element={user ? <Home /> : <Login/>} />
        <Route path="/about" element={<About />} />
        <Route path="/write" element={user ? <Write /> : <Register/>} />
        <Route path="/settings" element={user ? <Settings /> : <Register/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}
