// import { useEffect } from 'react'
// import { getTrending } from '../../store/slices/People'
// import { useDispatch, useSelector } from 'react-redux';
import { useLoaderData } from 'react-router-dom';



export default function People(){
// //     let {trendingMovies} =useSelector((state)=>state.movie)
// //     let dispatch=useDispatch();
// // useEffect(()=>{
// // dispatch(getTrending())
// },[])

  let list = useLoaderData()

  return <>
      <h1>{list}</h1>
  </>
}


export const loader = async () => {
  return "hello";
};
