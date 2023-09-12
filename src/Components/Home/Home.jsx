import "./home.css";
import { Container, Row } from "react-bootstrap";
import axiosInstance from "../../axiosConfig/instance";
import { useLoaderData } from "react-router-dom";
import MovieCard from "../Movies/card";

export default function Home() {
  let data = useLoaderData()
  let staticPathImg = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces`;
  const backgroundImageUrl = `url(assets/search-bg.jpg)`;
  const divStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "350px",
  };

  return (
    <>
      <Container fluid className="p-0">
        <div style={divStyle} className="p-5 search-bg">
          <h1 className="text-white fw-bolder">Welcome.</h1>
          <h2 className="text-white fw-bold">
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
          <input type="text" className="form-control my-5" placeholder="" />
        </div>
        <Row className="justify-content-center gap-4">
            <h3>popular</h3>
              {data.popular.map((movie) => {
                return (
                  <div className="cards px-0" key={movie.id}>
                    <MovieCard
                      path={staticPathImg + movie.poster_path}
                      title={movie.title}
                      date={movie.release_date}
                      percentage={movie.vote_average * 10}
                      id={movie.id}
                    />
                  </div>
                );
              })}
            </Row>
            <Row className="justify-content-center gap-4">
              <h3>topRate</h3>
              {data.topRate.map((movie) => {
                return (
                  <div className="cards px-0" key={movie.id}>
                    <MovieCard
                      path={staticPathImg + movie.poster_path}
                      title={movie.title}
                      date={movie.release_date}
                      percentage={movie.vote_average * 10}
                      id={movie.id}
                    />
                  </div>
                );
              })}
            </Row>
            <Row className="justify-content-center gap-4">
              <h3>upcoming</h3>
              {data.upcoming.map((movie) => {
                return (
                  <div className="cards px-0" key={movie.id}>
                    <MovieCard
                      path={staticPathImg + movie.poster_path}
                      title={movie.title}
                      date={movie.release_date}
                      percentage={movie.vote_average * 10}
                      id={movie.id}
                    />
                  </div>
                );
              })}
            </Row>
      </Container>
    </>
  );
}

export const loader = async () => {
  let myKey = "d4a2b4ff4209071cf753eff2f3d101cd";
  let results = {};
  try {
    let res1 = await axiosInstance.get(`/3/movie/popular?api_key=${myKey}`, {
      limit: 6,
    });
    results.popular = res1.data;
    let res2 = await axiosInstance.get(`/3/movie/top-rated?api_key=${myKey}`, {
      limit: 6,
    });
    results.topRate = res2.data;
    let res3 = await axiosInstance.get(`/3/movie/upcoming?api_key=${myKey}`, {
      limit: 6,
    });
    results.upcoming = res3.data;
    
    return results;
  } catch (err) {
    console.log(err);
  }
};
