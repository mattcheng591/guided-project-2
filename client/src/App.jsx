import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";

import CharacterList from "./components/CharacterList";
import CharacterPage from "./components/CharacterPage";
import FilmPage from "./components/FilmPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const fetchCharacters = async function () {
      const response = await fetch("http://localhost:5050/api/characters/");
      const data = await response.json();
      setCharacters(data);
    };
    fetchCharacters();
  }, []);

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<CharacterList characters={characters} />}
            ></Route>
            <Route path="/character/:id" element={<CharacterPage />}></Route>
            <Route path="/planets"></Route>
            <Route path="/films/:id" element={<FilmPage />}></Route>
          </Routes>
        </Router>
        <h1></h1>
      </div>
    </>
  );
}

export default App;
