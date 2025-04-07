import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/NotFound";
import Header from "./component/header";
import "./index.css";

const App = () => {
  return (
    <div className="body-container">
      <div className="green-background-container">
        <img
          src="images/rectangle.png"
          alt="green background"
          className="green-background"
        />
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
