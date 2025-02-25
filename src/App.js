import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundPolicy from "./components/RefundPolicy";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="background-wrapper" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
