import axios from "axios";
import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class CardMovie extends Component {
  constructor(props) {
    super(props);
    this.props = {
      Title: "",
      Img: "",
      Synopsis: "",
    };
  }

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${this.props.page}`
      )
      .then((response) => {
        this.setState({ data: response.data.resul });
      });
  }

  render() {
    return (
      <div className="col-12 col-md-6 col-lg-4 col-xl-3 align-center mt-3">
        <Card className="cardMovie">
          <Card.Img className="imageCard" variant="top" src={this.props.Img} />
          <Card.Body>
            <Card.Title className="montserat fw-build imageCard">
              {this.props.Title}{" "}
            </Card.Title>
            {/* <Card.Text className="poppins txtSynopsis">
              {this.props.Synopsis}.
            </Card.Text> */}
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>
      </div>
    );
  }
}
