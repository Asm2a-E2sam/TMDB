import './App.css'
// import Register from './Components/User/register'
import Header from './Components/header/header'
import AllMovies from './Components/Movies/allMovies'
function App() {
  
  return (
    <>
    <div className="f-width">
      <Header/>
      <div className='mt-3'></div>
      {/* <Register/> */}
      <AllMovies/>
    </div>
    </>
  )
}

export default App
