import { Card } from "react-bootstrap"
import { Progress } from "./progress"
import './card.css'

function MovieCard(args) {
  
  return (
    <>
    <Card className="card shadow-sm">
          <img src={`${args.path}`} alt="" />
          <div className="myprogress">
          <Progress percentage={args.percentage}/>
          <div>{args.percentage} <span>%</span></div>
          </div>
          <h5>{args.title}</h5>
          <span>{args.date}</span>
        </Card>
    </>
  )
}

export default MovieCard
