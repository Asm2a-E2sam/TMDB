import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./People.css";
import axiosInstance from "../../axiosConfig/instance";

export default function People() {
  const [data, setData] = useState([]);
  const myKey = "d4a2b4ff4209071cf753eff2f3d101cd";

  useEffect(() => {
    axiosInstance
      .get(`/3/trending/person/week?api_key=${myKey}`, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGEyYjRmZjQyMDkwNzFjZjc1M2VmZjJmM2QxMDFjZCIsInN1YiI6IjY0ZmYwZjVjZWZlYTdhMDEzN2QxYzAxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0R72mKUU3b77SrFQai5AEVERk1FNGvqYszwOQ0wUfCs',
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data.results)        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);
  let staticPathImg = `https://www.themoviedb.org/t/p/w235_and_h235_face`;
  let defaultImg ='./assets/user-126.png';
  return (
    <>
      <h3 className="m-4 fw-bold">Popular People</h3>
      <Row className="m-4 person-container">
      {data?.map((person) => {
              return (
        <Col
          md={"3"}
        >
          <div className="border border-1 rounded shadow person-cart p-0 my-3">
          <img
            src={staticPathImg + person.profile_path}
            className="rounded-top mb-3"
          />
          <h6 className="fw-bold mx-2">{person.name}</h6>
          <p className="mx-2">
            The Dark Knight, The Dark Knight Rises, and Darkest Hour
          </p>

          </div>
        </Col>
        )})}
      </Row>
    </>
  );
}

