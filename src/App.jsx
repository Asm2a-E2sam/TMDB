import "./App.css";
import Register from "./Components/User/register";
import Login from "./Components/User/login";
import AllMovies from "./Components/Movies/allMovies";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieDetails from "./Components/Movies/movieDetails";
import NotFound from "./Components/NotFound/notFound";
import People from "./Components/People/People";
import Home from "./Components/Home/Home";
import AppLayout from "./AppLayout";
import store from "./store/store";
import { Provider } from "react-redux";
import Favorites from "./Components/Favorites/Favorites";
import {LanguageContextProvide} from "./context/LanguageContext";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/home", element: <Home />},
      { path: "/movies", element: <AllMovies /> },
      { path: "/people", element: <People /> },
      { path: "/movies/:id", element: <MovieDetails /> },
      { path: "/favorites", element: <Favorites /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  const [language, setLanguage] =useState("EN");

  return (
    <Provider store={store}>
      <LanguageContextProvide value = {{ language, setLanguage }}>
        <RouterProvider router={router} />
      </LanguageContextProvide>
    </Provider>
  );
}

export default App;
