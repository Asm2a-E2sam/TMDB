import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
export default function Footer() {
  const { isLogged } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("userInfo"));
    return (
    <div className="container-fluid bg-dark-blue">
      <Container>
        <div className="d-flex gap-5 py-5 justify-content-center">
          <div>
            <img src="assets/blue_square_2.svg" width={130} />
            <div className="bg-white rounded mt-4 px-3 py-1 fs-5 text-primary fw-bolder username">
              {isLogged?
              `Hi ${user.name}!`:
              "JOIN THE COMMUNITY"
            }
              
              {/* Hi Username! */}

            </div>
          </div>
          <div className="d-md-block d-none">
            <p className="fw-bolder text-white fs-5 my-1">THE BASICS</p>
            <p className="text-white fs-5 my-1">About TMDB</p>
            <p className="text-white fs- my-1">Contact Us</p>
            <p className="text-white fs-5 my-1">Support Forums</p>
            <p className="text-white fs-5 my-1">API</p>
            <p className="text-white fs- my-1">System Status</p>
         </div>
         <div className="d-md-block d-none">
            <p className="fw-bolder text-white fs-5 my-1">GET INVOLVED</p>
            <p className="text-white fs-5 my-1">Contribution Bible</p>
            <p className="text-white fs- my-1">Add New Movie</p>
            <p className="text-white fs-5 my-1">Add New TV Show</p>
         </div>
         <div className="d-md-block d-none">
            <p className="fw-bolder text-white fs-5 my-1">COMMUNITY</p>
            <p className="text-white fs-5 my-1">Guidelines</p>
            <p className="text-white fs- my-1">Discussions</p>
            <p className="text-white fs-5 my-1">Leaderboard</p>
         </div>
         <div className="d-md-block d-none">
            <p className="fw-bolder text-white fs-5 my-1">LEGAL</p>
            <p className="text-white fs-5 my-1">Terms of Use</p>
            <p className="text-white fs- my-1">API Terms of Use</p>
            <p className="text-white fs-5 my-1">Privacy Policy</p>
            <p className="text-white fs-5 my-1">DMCA Policy</p>
         </div>
        </div>
      </Container>
    </div>
  );
}
