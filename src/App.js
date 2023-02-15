import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import HomeScreen from "./screens/Home";
import Admin from "./screens/Admin";
import Login from "./screens/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/logIn" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
