import axios from "axios";
import { useEffect, useState } from "react";
// import { Container, Nav, Navbar } from "react-bootstrap";
import "../App.css";
import NavbarComponent from "../components/NavbarComponent";
import CardMovie from "../components/sectionFeature/CardMovie";
import { HeroCarousel } from "../components/sectionFeature/HeroCarousel";

// class App extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       data: [],
//       isReady: false,
//       page: 1,
//     };
//   }
//   // const [theme, setTheme] = useState("light");

//   async componentDidMount() {
//     this.fetchData();
//   }

//   async fetchData() {
//     axios
//       .get(
//         `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${this.state.page}`
//       )
//       .then((response) => {
//         this.setState({ data: response.data.results, isReady: true });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   render() {
//     if (this.state.isReady) {
//       return (
//         <>
//           <div className="App">
//             <NavbarComponent theme="dark" />
//             <HeroCarousel />
//             <div>Feature</div>
//             <div className="container-fluid  mt-3 bgLight">
//               <div className="container">
//                 <div className="row justify-content-center">
//                   {/* {this.state.data.map((item) => (
//                     <CardMovie
//                       Title={item.title}
//                       Img={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
//                       Synopsis={item.overview}
//                     />
//                   ))} */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       );
//     } else {
//       return (
//         <div className="container">
//           <p>LAGI LOADING</p>
//         </div>
//       );
//     }
//   }
// }

const App = () => {
  // tipe pakai arrow function
  // function App() { // tipe pakai function
  const [page] = useState(1);
  const [data, setData] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    //gantinya componentDidMount
    fetchData();
  }, []);

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
          <NavbarComponent theme="dark" />
          <HeroCarousel />
          <div>Feature</div>
          <div className="container-fluid  mt-3 bgLight">
            <div className="container">
              <div className="row justify-content-center">
                {data.map((item) => (
                  <CardMovie
                    Title={item.title}
                    Img={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    Synopsis={item.overview}
                    navigate={`/movie/${item.id}`}
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
