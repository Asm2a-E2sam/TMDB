import { useEffect, useState } from "react";
import TVCard from "./tvCard";
import { Col, Container, Row } from "react-bootstrap";
import SideMenu from "./sideMenu";
import axiosInstance from "../../axiosConfig/instance";
import { useNavigate } from "react-router-dom";
function AllTVShows() {
  let myKey = "d4a2b4ff4209071cf753eff2f3d101cd";
  let [movies, setMovies] = useState([]);
  let [pageNum, setPageNum] = useState(1);
  
  useEffect(() => {
    
    axiosInstance
    .get(`/3/tv/popular?api_key=${myKey}&page=${pageNum}`
      )
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNum]);

  const paginate = (num) => {
    if(num > 0 ){
      setPageNum(num);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    }
  };
  // let movie2 = {
  //     path:"https://www.themoviedb.org/t/p/w220_and_h330_face/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
  //     title:"Elemental",
  //     date:"Jun 14, 2023",
  //     percentage:"78"
  // }
//   console.log(movies);
const navigate = useNavigate()
const showDetails=(id)=>{
  navigate(`/tv/${id}`)
}
  let staticPathImg = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  return (
    <>
      <Container fluid>
        <Row className="mx-3 my-4">
          <h3 className="fw-bold my-2">Popular Movies</h3>
        </Row>
        <Row className="m-3">
          <Col md="3">
            <SideMenu />
          </Col>
          <Col md="9">
            <Row className="justify-content-center gap-4">
              {movies.map((movie) => {
                return (
                  <div className="cards px-0" key={movie.id}>
                    <TVCard
                      path={staticPathImg + movie.poster_path}
                      title={movie.name}
                      date={movie.first_air_date}
                      percentage={movie.vote_average * 10}
                      id={movie.id}
                      movie={movie}
                      onClick={()=>{showDetails(movie.id)}}
                    />
                  </div>
                );
              })}
            </Row>
            <Row className="my-3 justify-content-center gap-1">
              <span className="circle text-white fs-3" role="button" onClick={() => {paginate(pageNum - 1);}}>&laquo;</span>
              <span className="circle text-white fs-3" role="button" onClick={() => {paginate(1);}}>1</span>
              <span className="circle text-white fs-3" role="button" onClick={() => {paginate(2);}}>2</span>
              <span className="circle text-white fs-3" role="button" onClick={() => {paginate(3);}}>3</span>
              <span className="circle text-white fs-3" role="button" onClick={() => {paginate(4);}}>4</span>
              <span className="circle text-white fs-3" role="button" onClick={() => {paginate(pageNum + 1);}}>&raquo;</span>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AllTVShows;
