import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Movie from "./pages/movie";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Movie/>} path="/movie/:id"/>
      </Routes>
    </>
  );
}

export default App;
