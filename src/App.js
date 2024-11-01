import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./user/pages/login";
import Navbar from "./Components/Navbar/navbar";
import Register from "./user/pages/register";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import { useCallback, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Redirect to login if no match */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Redirect to register if no match */}
        <Route path="*" element={<Navigate to="/register" />} />
      </Routes>
    );
  }

  return (
    <Router>
      <Navbar />
      {routes}
    </Router>
  );
}

export default App;
