import "./App.css";
import Register from "./Components/User/register";
import Login from "./Components/User/login";
import AllMovies from "./Components/Movies/allMovies";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieDetails from "./Components/Movies/movieDetails";
import NotFound from "./Components/NotFound/notFound";
import People from "./Components/People/People";
import Home, {loader as homeLoader}  from "./Components/Home/Home";
import AppLayout from "./AppLayout";
import store from "./store/store";
import { Provider } from "react-redux";
import Favorites from "./Components/Favorites/Favorites";
import {LanguageContextProvide} from "./context/LanguageContext";
import { useState } from "react";
import AllTVShows from "./Components/Movies/allTVShows";
import TVDetails from "./Components/Movies/tvDetails";
import { AuthProvider } from "./context/AuthContext";
import AuthGuard from "./guards/authGuard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/home", element: <Home />, loader: homeLoader},
      { path: "/movies", element: <AllMovies /> },
      { path: "/tv", element: <AllTVShows /> },
      // { path: "/tv/:id", element: <TVDetails /> },
      { path: "/people", element: <People />},
      { path: "/movies/:id", element: <MovieDetails /> },
      { path: "/favorites", element: <AuthGuard><Favorites/></AuthGuard>},
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  const [language, setLanguage] =useState("EN");
  const [isLogged, setIsLogged] =useState(false);
  localStorage.setItem("lang","en");
  return (
    <Provider store={store}>
      <AuthProvider value = {{isLogged, setIsLogged}}>
      <LanguageContextProvide value = {{ language, setLanguage }}>
        <RouterProvider router={router} />
      </LanguageContextProvide>
      </AuthProvider>
    </Provider>
  );
}

export default App;
