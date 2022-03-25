import axios from "axios";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
