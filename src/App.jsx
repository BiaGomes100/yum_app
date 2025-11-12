import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/mainLayout";
import Home from "./components/home/home";
import Produtos from "./components/produtos/produtos";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
