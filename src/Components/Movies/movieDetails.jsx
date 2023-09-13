import './card.css'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Progress } from './progress';
import { Col, Container, NavLink, Row } from "react-bootstrap";

import {BiSolidDownArrow, BiSolidRightArrow} from 'react-icons/bi'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import {MdFormatListBulleted, MdFavorite} from 'react-icons/md'
import axiosInstance from '../../axiosConfig/instance';
import { useDispatch, useSelector } from 'react-redux';

import {toggleFavorite} from '../../store/slices/favorite'
export default function MovieDetails() {
  let myKey = "d4a2b4ff4209071cf753eff2f3d101cd";
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  axiosInstance
    .get(`/3/movie/${id}?api_key=${myKey}`)
    .then((res) => {
      setMovie(res.data);
      // console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
    let staticPathImg = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces`;
    let staticPathImg2= `https://www.themoviedb.org/t/p/w300_and_h450_bestv2`
    const backgroundImageUrl = `url(${staticPathImg}${movie.backdrop_path})`;
    const divStyle = {
      backgroundImage: backgroundImageUrl,
      backgroundSize: "cover", 
      backgroundRepeat: "no-repeat",
      height: "570px"
    };

    let year = '';
    let layoutColor = {};
    let genres = '';
    let isFavorite = false;
    const dispatch = useDispatch();
    let favorites = useSelector((state) => state.favorite.favorites);

    if (movie && movie.release_date) {
        year = movie.release_date.split("-")[0];
      }
      
      if(movie && movie.id){
        let color = `${movie.id}`.substr(0,6);
        layoutColor = {
            backgroundImage: `linear-gradient(to right, #${color} calc(30vw - 140px), #${color}d6 50%, #${color}d6 100%)`,
        };
        if (favorites) {
          isFavorite = favorites.find((favmovie) => favmovie.id === movie.id) || false;
      }
    }
    if (movie && movie.genres){
        for (const index in movie.genres) {
            if(index < movie.genres.length-1){
                genres += `${movie.genres[index].name}, `  
            }else{
                genres += `${movie.genres[index].name}`  
            }
        }
        
    }
    let time =''
    if(movie && movie.runtime){
        time += `${Math.floor(movie.runtime/60)}h `
        time += `${movie.runtime%60}m `
        
    }
    let color=''
  if(movie.vote_average * 10>=70){
    color='rgb(1,210,119)';
  }else{
    color='rgb(203,206,47)';
  }

  const toggelFavorite = ()=>{
      dispatch(toggleFavorite(movie))
      // console.log(favorites);
      // console.log("click");
  }

    return (
    <>
      <Container fluid className="p-0">
      <div className="d-flex justify-content-center">
        <NavLink className="mx-3 fw-bold line p-2">Overview <BiSolidDownArrow className="arrow"/></NavLink>
        <NavLink className="mx-3 fw-bold p-2">Media <BiSolidDownArrow className="arrow"/></NavLink>
        <NavLink className="mx-3 fw-bold p-2">Fandom <BiSolidDownArrow className="arrow"/></NavLink>
        <NavLink className="mx-3 fw-bold p-2">Share <BiSolidDownArrow className="arrow"/></NavLink>
      </div>
      <div style={divStyle} className="mb-5">
        <Row className="bg align-items-center me-0" style={layoutColor}>
            <Col md="3" className="px-5 py-4">
                <img src={`${staticPathImg2}${movie.poster_path}`} className="img-de rounded-top" />
                <div>

                </div>
            </Col>
            <Col md="9" className="px-5">
                <h2 className="text-white fw-bolder">{movie.title} <span className="text-light2">({year})</span></h2>
                <div className="d-flex">
                    <span className="mybadge fs-7 me-2" >PG-13</span>
                    <span className="fs-7 text-white">{movie.release_date} </span>
                    <ul className='d-flex'>
                        <li className="fs-7 text-white me-4">{genres}</li>
                        <li className="fs-7 text-white">{time}</li>
                    </ul>                    
                </div>
                <div className="d-flex align-items-center">
                <div className="myprogress-2">
                    <Progress percentage={movie.vote_average * 10} color={color}/>
                    <div>{Math.floor(movie.vote_average * 10)} <span>%</span></div>
                </div>
                <div className="ms-2">
                <h6 className="fw-bold mb-0 text-white">User </h6>
                <h6 className="fw-bold text-white"> Score</h6>
                </div>
                <span className="circle ms-4"><MdFormatListBulleted className="options"/></span>
                <span className="circle ms-4" onClick={toggelFavorite} role="button"><MdFavorite className={`${isFavorite ? "options2":"options"}`}/></span>
                <span className="circle ms-4"><BsFillBookmarkFill className="options"/></span>
                <span className="circle ms-4"><AiFillStar className="options"/></span>
                <span className='ms-4 text-white'><BiSolidRightArrow/> Play Trailer</span>
                </div>
                <div className='text-light my-3 fw-bold'>
                    {movie.tagline}
                </div>
                <div className='text-white'>
                    <h4 className='my-2 fw-bold'>Overview</h4>
                    <p>{movie.overview}</p>
                </div>
                <Row className='text-white'>
                    <Col md="4"></Col>
                    <Col md="4"></Col>
                    <Col md="4"></Col>
                </Row>
            </Col>
        </Row>
      </div>
      </Container>
    </>
  );
}
