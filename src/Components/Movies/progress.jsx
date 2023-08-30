import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export function Progress(args){
    return (
<CircularProgressbar
  value={args.percentage}
  styles={buildStyles({
    pathColor: `rgba(1,210,119)`,
    trailColor: 'rgba(155,155,155,0.3)',
    strokeLinecap:'',
    backgroundColor: '#3e98c7',
  })}
/>
)}



