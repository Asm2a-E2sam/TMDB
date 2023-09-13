// import { useLoaderData } from "react-router-dom";
import './Home.css'
import MovieCard from "../Movies/card";
import { Container, Row } from "react-bootstrap";
import axiosInstance from "../../axiosConfig/instance";
import { useEffect, useState } from "react";



export default function Home() {
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        const fetchData =   async()=>{
        try {
          const results = await loader();
          setMovies(results)
        //   console.log(results.lenght);
          return results;
        } catch (error) {
          // Handle any errors here
        }
      }
    fetchData();  
    // console.log(movies);
    })
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
              <h3 className=''>Popular</h3>
              <Row className="justify-content-center gap-4" >
                {movies?.map((movie) => {
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
  



  export const loader = async () => {
    let myKey = "d4a2b4ff4209071cf753eff2f3d101cd";
    try {
      let res1 = await axiosInstance.get(`/3/movie/popular?api_key=${myKey}&page=1`)
      return res1.data.results.slice(0,7);
    } catch (err) {
      console.log(err);
    }
  };
  