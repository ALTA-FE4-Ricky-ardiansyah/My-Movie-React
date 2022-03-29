import axios from "axios";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardMovie = (props) => {
  const { id, Title, Img, Synopsis, value, navigate, action, isFavorite } =
    props;
  return (
    <>
      <div
        key={id}
        className="col-12 col-md-6 col-lg-4 col-xl-3 align-center m-1"
      >
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
          </Link>
          <Card.Footer
            className={`${isFavorite ? "bg-danger" : "bg-secondary"}`}
            onClick={() => {
              action(id);
            }}
          >
            <small className="text-white">
              {isFavorite ? "Remove from Favorite" : "Add to Favorite"}
            </small>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default CardMovie;
