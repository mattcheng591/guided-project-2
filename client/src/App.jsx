import { useState, useEffect } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const fetchCharacters = async function () {
      const response = await fetch("http://localhost:5050/api/characters");
      const data = await response.json();
      setCharacters(data);
    };
    fetchCharacters();
  }, []);
  return (
    <>
      <div>
        <h1>
          <CharacterList characters={characters} />
        </h1>
      </div>
    </>
  );
}

export default App;
