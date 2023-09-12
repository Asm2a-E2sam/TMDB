import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export function Progress(args){
    return (
<CircularProgressbar
  value={args.percentage}
  styles={buildStyles({
    pathColor: `${args.color}`,
    trailColor: 'rgba(155,155,155,0.3)',
    strokeLinecap:'',
    backgroundColor: '#3e98c7',
  })}
/>
)}



