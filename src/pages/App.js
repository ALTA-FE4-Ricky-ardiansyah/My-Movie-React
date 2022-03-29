import axios from "axios";
import { useEffect, useState, useContext } from "react";
// import { Container, Nav, Navbar } from "react-bootstrap";
import "../App.css";
import NavbarComponent from "../components/NavbarComponent";
import CardMovie from "../components/sectionFeature/CardMovie";
import { HeroCarousel } from "../components/sectionFeature/HeroCarousel";
// import { ThemeContext } from "../utils/context";

const App = () => {
  // tipe pakai arrow function
  // function App() { // tipe pakai function
  const [page] = useState(1);
  const [data, setData] = useState([]);
  const [isReady, setIsReady] = useState(false);
  // const [theme] = useContext(ThemeContext);
  const [theme] = localStorage.getItem("theme");
  localStorage.getItem("favoriteList") ||
    localStorage.setItem("favoriteList", "[]");
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
    //gantinya componentDidMount
    fetchData();
  }, [actionFavorite]);

  const fetchData = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((response) => {
        setData(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsReady(true));
  };

  // async function fetchData() {} jenis function kedua

  if (isReady) {
    return (
      <>
        <div className="App">
          <NavbarComponent theme={theme} />
          <HeroCarousel />
          <div className="container-fluid bgLight py-5">
            <div>Feature</div>
            <div className="container">
              <div className="row justify-content-center">
                {data.map((item) => (
                  <CardMovie
                    key={item.id}
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
