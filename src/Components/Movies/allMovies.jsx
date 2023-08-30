import MovieCard from './card' 
function AllMovies(){
    let movie = {
        path:"https://www.themoviedb.org/t/p/w220_and_h330_face/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
        title:"Elemental",
        date:"Jun 14, 2023",
        percentage:"78"
    }
    return(
        <>
            <MovieCard path={movie.path} title={movie.title} date={movie.date} percentage={movie.percentage}/>
        </>
    )
}

export default AllMovies