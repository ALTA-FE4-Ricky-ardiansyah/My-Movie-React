import React from "react";
import { Container, Row } from "react-bootstrap";
import "../styles/MovieDetail.css";
import "../styles/styles.css";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

export default function MovieDetail() {
  return (
    <>
      <img
        style={{ position: "absolute" }}
        className="banner"
        src="/img/slider/spiderman.jpg"
        alt="spiderman"
      />
      <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          backgroundImage:
            "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
        }}
      ></div>

      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <div className="d-flex justify-content-start">
            <img
              className="posterDetail rounded"
              src="../img/spiderman.jpg"
              alt="spiderman"
              style={{ marginRight: "1rem" }}
            />
            <div>
              <p className="TitleDetail montserat">Spiderman No way Home</p>
              <div className="d-flex">
                <span className="pill">Comedy</span>
                <span className="pill">Action</span>
                <span className="pill">Adventure</span>
              </div>

              <p className="synopsisDetail poppins">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita impedit alias distinctio incidunt laudantium accusamus
                veniam sapiente, quisquam, quaerat quibusdam, doloremque, quis
              </p>
              <div className="castDetail">cast</div>
              <div className="d-flex justify-content-start">
                <Image
                  className="thumbnailDetail"
                  src="../img/spiderman.jpg"
                  alt="star"
                  rounded
                />
                <Image
                  className="thumbnailDetail"
                  src="../img/spiderman.jpg"
                  alt="star"
                />
                <Image
                  className="thumbnailDetail"
                  src="../img/spiderman.jpg"
                  alt="star"
                />
                <Image
                  className="thumbnailDetail"
                  src="../img/spiderman.jpg"
                  alt="star"
                />
                <Image
                  className="thumbnailDetail"
                  src="../img/spiderman.jpg"
                  alt="star"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
