import axios from "axios";
import { Component, useState } from "react";
// import { Container, Nav, Navbar } from "react-bootstrap";
import "../App.css";
import { NavbarComponent } from "../components/NavbarComponent";
import CardMovie from "../components/sectionFeature/CardMovie";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      isReady: false,
      page: 1,
    };
  }
  // const [theme, setTheme] = useState("light");

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    axios
      .get(
        // `https://api.themoviedb.org/3/movie/now_playing?api_key=6160938e13f56af1aea7deaf4503ba9e&language=en-US&page=1`
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${this.state.page}`
      )
      .then((response) => {
        this.setState({ data: response.data.results, isReady: true });
      })
      .catch((err) => {
        console.log(err);
      });
    // fetch(
    //   `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${this.state.page}`
    // )
    //   .then((response) => response.json())
    //   .then((res) => {
    //     this.setState({ data: res.results, isReady: true });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  // function changeTheme(theme) {
  //   // if(theme == 'light'){
  //   //   return 'dark'
  //   // }else{
  //   //   return 'light'
  //   // }
  //   // console.log(theme)
  // }
  render() {
    if (this.state.isReady) {
      return (
        <>
          <div className="App">
            <NavbarComponent theme="dark" />
            <div>Feature</div>
            <div className="container-fluid  mt-3">
              <div className="container">
                <div className="row justify-content-center">
                  {this.state.data.map((item) => (
                    <CardMovie
                      Title={item.title}
                      Img={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      Synopsis={item.overview}
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
  }
}

export default App;
