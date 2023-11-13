// import { useLoaderData } from "react-router-dom";
import "./home.css";
import MovieCard from "../Movies/card";
import { Container, Row } from "react-bootstrap";
import axiosInstance from "../../axiosConfig/instance";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [results, setResults] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await loader();
        setMovies(results);
        //   console.log(results.lenght);
        return results;
      } catch (error) {
        // Handle any errors here
      }
    };
    fetchData();
    // console.log(movies);
  });
  let staticPathImg = `https://www.themoviedb.org/t/p/w220_and_h330_face/`;
  const backgroundImageUrl = `url(assets/search-bg.jpg)`;
  const divStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "350px",
  };

  let myKey = "d4a2b4ff4209071cf753eff2f3d101cd";
  const search = (ev) => { 
    console.log(ev.target.value);
    axiosInstance
    .get(`/3/search/movie?api_key=${myKey}&query=${ev.target.value}`
      )
      .then((res) => {
        setResults(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate()
  
  const showDetails=(id)=>{
    navigate(`/movies/${id}`)
  }

  return (
    <>
      <Container fluid>
        <div style={divStyle} className="p-5 search-bg">
          <h1 className="text-white fw-bolder">Welcome.</h1>
          <h2 className="text-white fw-bold">
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
        </div>
        <Row id="search-input">
          <input
            type="text"
            className="form-control mt-5 mx-3 mb-0"
            placeholder="Search about Movie"
            onChange={(ev) => {
              search(ev);
            }}
          />
          <div className="bg-light ms-3 rounded shadow" id="search-result">
          {results?.map((movie) => {
              return (
            <div className="my-2 d-flex align-items-md-center" key={movie.id}>
              <img src={staticPathImg + movie.poster_path}/>
              <div>
                <h4 className="my-0 fw-bold" role="button" onClick={()=>{showDetails(movie.id)}}>{movie.title} </h4>
                <p className="my-0">{movie.release_date}</p>
              </div>
            </div>
              )})}
          </div>
        </Row>

        <Row className="justify-content-center">
          <Row className="justify-content-center gap-4 mb-5 content">
            {movies?.map((movie) => {
              return (
                <div className="cards px-0" key={movie.id}>
                  <MovieCard
                    path={staticPathImg + movie.poster_path}
                    title={movie.title}
                    movie={movie}
                    date={movie.release_date}
                    percentage={movie.vote_average * 10}
                    id={movie.id}
                  />
                </div>
              );
            })}
          </Row>
        </Row>
      </Container>
    </>
  );
}

export const loader = async () => {
  let myKey = "d4a2b4ff4209071cf753eff2f3d101cd";
  try {
    let res1 = await axiosInstance.get(
      `/3/movie/popular?api_key=${myKey}&page=1`
    );
    // console.log(res1);
    return res1.data.results.slice(0, 18);
  } catch (err) {
    console.log(err);
  }
};
