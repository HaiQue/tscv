import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return <Home />;
}

export default App;
