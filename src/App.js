import React from "react";
import "./App.scss";
import getRoutes from "./shared/routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>{getRoutes()}</Router>
    </div>
  );
}

export default App;
