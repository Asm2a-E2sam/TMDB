import { Card } from "react-bootstrap"
import { Progress } from "./progress"
import './card.css'
import { useNavigate } from "react-router-dom";

function MovieCard(args) {
  let color=''
  if(args.percentage>=70){
    color='rgb(1,210,119)';
  }else{
    color='rgb(203,206,47)';
  }

  const navigate = useNavigate()
  
  const showDetails=(id)=>{
    navigate(`/movies/${id}`)
  }
  return (
    <>
    <Card className="card card-sm shadow-sm" role="button" onClick={()=>{showDetails(args.id)}}>
          <img src={`${args.path}`} className="card-img"/>
          <div className="myprogress">
          <Progress percentage={args.percentage} color={color}/>
          <div>{args.percentage} <span>%</span></div>
          </div>
          <h5>{args.title}</h5>
          <span>{args.date}</span>
        </Card>
    </>
  )
}

export default MovieCard
