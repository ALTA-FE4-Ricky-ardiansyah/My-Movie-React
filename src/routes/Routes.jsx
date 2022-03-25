import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/App";
import MovieDetail from "../pages/MovieDetail";
import FavoritePage from "../pages/FavoritePage";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movies" element={<App />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/movie/:movie_id" element={<MovieDetail />} />
        {/* <Route path="*" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
