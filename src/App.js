import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/NotFound";
import Header from "./component/header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
