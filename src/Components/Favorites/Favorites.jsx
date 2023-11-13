import { Container, Row } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import MovieCard from '../Movies/card'
import { useSelector } from "react-redux";
// import {toggleFavorite} from '../../store/slices/favorite' 

export default function Favorites(){
    // let isFavorite = false;
    // const dispatch = useDispatch();
    let movies = useSelector((state) => state.favorite.favorites);
    let staticPathImg = `https://www.themoviedb.org/t/p/w220_and_h330_face/`;
    
    // const toggelFavorite = (movie)=>{
    //     dispatch(toggleFavorite(movie))
    //     // console.log(favorites);
    //     // console.log("click");
    // }

    return( 
        <Container>
            <h2 className="p-5">My Favorites</h2>
            <Row className="justify-content-center gap-4 mb-5">
              {movies.map((movie) => {
                return (
                  <div className="cards px-0" key={movie.id}>
                    <MovieCard
                      path={staticPathImg + movie.poster_path}
                      title={movie.title||movie.name}
                      date={movie.release_date||movie.first_air_date}
                      percentage={movie.vote_average * 10}
                      id={movie.id}
                      movie={movie}
                    />
                  </div>
                );
              })}
            </Row>
        </Container>
    )
}