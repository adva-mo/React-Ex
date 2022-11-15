import { Route, Routes, Navigate } from "react-router-dom";

import React from "react";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import "./App.css";
import ProductDetail from "./components/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
