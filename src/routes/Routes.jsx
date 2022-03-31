import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/App";
import MovieDetail from "../pages/MovieDetail";
import FavoritePage from "../pages/FavoritePage";
import HeroSlide from "../components/sectionFeature/HeroSlide";
import { ThemeContext } from "../utils/context";

export default function Routing() {
  const [theme, setTheme] = useState("dark");
  const localTheme = localStorage.getItem("theme");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      localStorage.setItem("theme", theme);
    }
  }, []);
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/movies" element={<App />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/movie/:movie_id" element={<MovieDetail />} />
          {/* <Route path="/HeroSlide" element={<HeroSlide />} /> */}
          {/* <Route path="*" element={<Contact />} /> */}
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}
