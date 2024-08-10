// src/App.js
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SetupPage from "./pages/SetupPage";
import ViewPathPage from "./pages/ViewPathPage";
import Header from "./components/Header";
import Babu from "./pages/Babu";
import CreateProduct from "./pages/CreateProduct";

function App() {
  return (
    <Router>
      <Header>
        <Routes>
          <Route path="/admin" element={<SetupPage />} />
          <Route path="/view" element={<ViewPathPage />} />
          <Route path="/" element={<Babu />} />
          <Route path="/admin/create-product" element={<CreateProduct />} />
        </Routes>
      </Header>
    </Router>
  );
}

export default App;
