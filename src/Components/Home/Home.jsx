import axiosInstance from "../../axiosConfig/instance";
import "./home.css";
import { Carousel, Container, Row } from "react-bootstrap";
import MovieCard from "../Movies/card";
import { useEffect, useState } from "react";

export default function Home() {
  let myKey = "d4a2b4ff4209071cf753eff2f3d101cd";
  let [movies, setMovies] = useState([]);
  
  useEffect(() => {
    axiosInstance
    .get(`/3/movie/popular?api_key=${myKey}`
      )
      .then((res) => {
        setMovies(...movies,{popular:res.data.results.slice(0,7)});
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);  
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
        <Row className="justify-content-center m-0 content">
            <h3>Popular</h3>
            <Row className="justify-content-center gap-4" >
              {movies.popular?.map((movie) => {
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
          </Row>
      </Container>
    </>
  );
}

// export const loader = async () => {
//   console.log("results");
//   let myKey = "d4a2b4ff4209071cf753eff2f3d101cd";
//   try {
//     const res1 = await axiosInstance.get(`/3/movie/popular?api_key=${myKey}`)
    
//     return res1.data.results;
//   } catch (err) {
//     console.log(err);
//   }
// };


    // const [results, setResults] = useState({})
    // setResults(...results, {popular:res1.data.results.slice(0, 7)});
    // console.log(results);
    // results.popular = res1.data.results.slice(0, 7);
    // console.log(results);
    // let res2 = await axiosInstance.get(`/3/movie/top-rated?api_key=${myKey}`);
    // results.topRate = res2.data.results.slice(0, 7);
    // console.log(results);
    // let res3 = await axiosInstance.get(`/3/movie/upcoming?api_key=${myKey}`);
    // results.upcoming = res3.data.results.slice(0, 7);
    // console.log(results);