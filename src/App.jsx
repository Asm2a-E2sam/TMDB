import './App.css'
import Register from './Components/User/register'
import Login from './Components/User/login'
import Header from './Components/Header/header'
import AllMovies from './Components/Movies/allMovies'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieDetails from './Components/Movies/movieDetails'
import NotFound from './Components/NotFound/notFound'
import People from './Components/People/People'
import Home, { loader as homeLoader} from './Components/Home/Home'
function App() {
  return (
    <>
    {/* <div className="f-width"> */}
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route index element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>} loader={homeLoader}/>
        <Route path="/movies" element={<AllMovies/>}/>
        <Route path="/people" element={<People/>}/>
        <Route path="/movies/:id" element={<MovieDetails/>}/>
        <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    {/* </div> */}
    </>
  )
}

export default App
