import { Card } from "react-bootstrap";
import { Progress } from "./progress";
import "./card.css";
import { useNavigate } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../store/slices/favorite";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

function TVCard(args) {
  let color = "";
  if (args.percentage >= 70) {
    color = "rgb(1,210,119)";
  } else {
    color = "rgb(203,206,47)";
  }

  const dispatch = useDispatch();
  let favorites = useSelector((state) => state.favorite.favorites);

  console.log(favorites);
  let isFavorite =
    favorites.find((favmovie) => favmovie.id === args.movie.id) || false;
  const navigate = useNavigate();
  const { isLogged } = useContext(AuthContext);
  const { language } = useContext(LanguageContext);
  const toggelFavorite = () => {
    if(isLogged){
      dispatch( toggleFavorite(args.movie));
    }else{
      Swal.fire({
        icon: "warning",
        title: "You Must Log in first",
        showCancelButton: true,
        confirmButtonText: "Log in",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login")
        }
      });
    }
  };
  
  // const showDetails=(id)=>{
  //   navigate(`/tv/${id}`)
  // }
  return (
    <>
      <Card  className={`card card-sm shadow-sm ${language==="AR"&&"card-ar"}`}>
        <img src={`${args.path}`} className="card-img" onClick={()=>{showDetails(args.id)}} role="button"/>
        <div className="d-flex justify-content-between align-items-center">
          <div className={`myprogress ${language==="AR"&&"myprogress-ar"}`}>
            <Progress percentage={args.percentage} color={color} />
            <div>
              {Math.floor(args.percentage)} <span>%</span>
            </div>
          </div>
          <div className={`favourite ${language==="AR"&&"favourite-ar"}`}>
            <MdFavorite
              onClick={toggelFavorite}
              role="button"
              className={`fs-4 ${(isFavorite && isLogged) ? "options2" : "options"}`}
            />
          </div>
        </div>
        <h5>{args.title}</h5>
        <span className="date">{args.date}</span>
      </Card>
    </>
  );
}

export default TVCard;