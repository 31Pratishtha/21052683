import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import AllProducts from "./AllProducts";

function App() {
  return (
    <>
      <main>
        <nav className="bg-slate-500 h-8">
          <NavLink to="/">All Products</NavLink>
        </nav>

        <Routes>
          <Route path="/" Component={AllProducts} />
        </Routes>
      </main>
    </>
  );
}

export default App;
