import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Card,
  Login,
  Man,
  Kids,
  Woman,
  Register,
  NotFound,
  Navigation,
} from "./Pages";
import SingleArticle from "./components/SingleArticle/SingleArticle";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="man" element={<Man />} />
          <Route path="kids" element={<Kids />} />
          <Route path="woman" element={<Woman />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="card" element={<Card />} />
          <Route path="products/:id" element={<SingleArticle />} /> 
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
