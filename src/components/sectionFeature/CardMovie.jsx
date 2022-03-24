import axios from "axios";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { Layout } from "../components/Layout";

// export default class CardMovie extends Component {
//   constructor(props) {
//     super(props);
//     this.props = {
//       Title: "",
//       Img: "",
//       Synopsis: "",
//       value: "",
//     };
//   }

//   async componentDidMount() {
//     this.fetchData();
//   }

//   async addfavorite(item) {}

//   async handleChange(e) {
//     this.setState({ value: e.target.value });
//   }

//   async handleSubmit(e) {
//     console.log(e);
//   }

//   async fetchData() {
//     axios
//       .get(
//         `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${this.props.page}`
//       )
//       .then((response) => {
//         this.setState({ data: response.data.resul });
//       });
//   }

const CardMovie = (props) => {
  const { Title, Img, Synopsis, value, navigate } = props;
  return (
    <>
      {/* <form action="text" onSubmit={this.handleSubmit}>
              <label>
                name:
                <input
                  type="text"
                  value={this.state.value}
                  onChange={(e) => this.handleChange}
                />
              </label>
            </form> */}
      <div className="col-12 col-md-6 col-lg-4 col-xl-3 align-center mt-3">
        <Card className="cardMovie">
          <Link to={navigate}>
            <Card.Img className="imageCard" variant="top" src={Img} />
            <Card.Body>
              <Card.Title className="montserat fw-build imageCard">
                {Title}{" "}
              </Card.Title>
              {/* <Card.Text className="poppins txtSynopsis">
                  {this.props.Synopsis}.
                </Card.Text> */}
            </Card.Body>
            {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> */}
          </Link>
        </Card>
      </div>
    </>
  );
};

export default CardMovie;
