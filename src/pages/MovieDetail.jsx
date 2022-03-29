import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "../styles/MovieDetail.css";
import "../styles/styles.css";
import Image from "react-bootstrap/Image";
// import Col from "react-bootstrap/Col";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const [data, setData] = useState([]);
  const [dataCast, setDataCast] = useState([]);
  const [genre, setGenre] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const params = useParams();

  // const { title, backdrop_path, poster_path, overview } = data;

  useEffect(() => {
    //gantinya componentDidMount
    fetchData();
  }, []);

  const fetchData = async () => {
    const { movie_id } = params;

    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setData(response.data);
        setGenre(response.data.genres);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsReady(true));

    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        const limitCast = response.data.cast.slice(0, 5);
        console.log(response);
        setDataCast(limitCast);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsReady(true));
  };

  return (
    <div>
      {/* // Title={data.title}
      // Img={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
      // Synopsis={data.overview}
      // navigate={`/movie/${data.id}`} */}
      <>
        {/* // Title={data.title}
           // Img={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
           // Synopsis={data.overview}
           // navigate={`/movie/${data.id}`} */}
        <img
          style={{ position: "absolute" }}
          className="banner"
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
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
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt="spiderman"
                style={{ marginRight: "1rem" }}
              />
              <div>
                <p className="TitleDetail montserat">{data.title}</p>
                <div className="d-flex">
                  {genre.map((item) => (
                    <span key={item.id} className="pill">
                      {item.name}
                    </span>
                  ))}
                </div>

                <p className="synopsisDetail poppins">{data.overview}</p>
                <div className="castDetail">cast</div>
                <div className="d-flex justify-content-start">
                  {}
                  {dataCast.map((item) => (
                    <div>
                      <Image
                        className="thumbnailDetail"
                        src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                        alt="star"
                        rounded
                      />
                      <span className="castDetail">{item.name}</span>
                    </div>
                  ))}
                  {/* <Image
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
                  /> */}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </>
    </div>
  );
}
