import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Container, Nav, Navbar } from "react-bootstrap";
import "../App.css";
import NavbarComponent from "../components/NavbarComponent";
import CardMovie from "../components/sectionFeature/CardMovie";
// import { HeroCarousel } from "../components/sectionFeature/HeroCarousel";

const App = () => {
  // tipe pakai arrow function
  // function App() { // tipe pakai function
  const [page] = useState(1);
  const [data, setData] = useState([]);
  const [isReady, setIsReady] = useState(false);

  const addToFavorite = (id) => {
    const movie = data.find((item) => item.id === id);
    const favoriteList = localStorage.getItem("favoriteList");
    let list = [];
    if (favoriteList) {
      list = JSON.parse(favoriteList);
    }
    list.push(movie);
    localStorage.setItem("favoriteList", JSON.stringify(list));
  };

  const removeFromFavorite = (id) => {
    const favoriteList = localStorage.getItem("favoriteList");
    let list = [];
    if (favoriteList) {
      list = JSON.parse(favoriteList);
    }
    const newList = list.filter((item) => item.id !== id);
    localStorage.setItem("favoriteList", JSON.stringify(newList));
  };

  const actionFavorite = (id) => {
    if (localStorage.getItem("favoriteList")) {
      const favoriteList = JSON.parse(localStorage.getItem("favoriteList"));
      const isFavorite = favoriteList.find((item) => item.id === id);
      if (isFavorite) {
        removeFromFavorite(id);
      } else {
        addToFavorite(id);
      }
    } else {
      addToFavorite(id);
    }
  };

  useEffect(() => {
    fetchData();
    setIsReady(true);
  }, [actionFavorite]);

  const fetchData = () => {
    const favoriteList = localStorage.getItem("favoriteList");
    if (favoriteList) {
      const list = JSON.parse(favoriteList);
      setData(list);
    }
    return;
  };

  // async function fetchData() {} jenis function kedua

  if (isReady) {
    return (
      <>
        <div className="App bgLight">
          <NavbarComponent theme="dark" />
          <div className="container-fluid py-5">
            <div>Your Favorite Movie</div>
            <div className="container">
              <div className="row justify-content-start">
                {data.map((item) => (
                  <CardMovie
                    data={item}
                    id={item.id}
                    Title={item.title}
                    Img={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    Synopsis={item.overview}
                    navigate={`/movie/${item.id}`}
                    action={() => {
                      actionFavorite(item.id);
                    }}
                    isFavorite={
                      localStorage.getItem("favoriteList")
                        ? JSON.parse(localStorage.getItem("favoriteList")).some(
                            (favoriteItem) => favoriteItem.id === item.id
                          )
                        : false
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="container">
        <p>LAGI LOADING</p>
      </div>
    );
  }
};
export default App;
