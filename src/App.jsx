// src/App.js
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SetupPage from "./pages/SetupPage";
import ViewPathPage from "./pages/ViewPathPage";
import Header from "./components/Header";
import Babu from "./pages/Babu";

function App() {
  return (
    <Router>
      <Header>
        <Routes>
          <Route path="/setup" element={<SetupPage />} />
          <Route path="/view" element={<ViewPathPage />} />
          <Route path="/babu" element={<Babu />} />
          <Route path="*" element={<SetupPage />} /> {/* Default route */}
        </Routes>
      </Header>
    </Router>
  );
}

export default App;
