import { memo } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CharacterPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchCharacter = async function () {
      const response = await fetch(
        `http://localhost:5050/api/characters/${id}`
      );
      const data = await response.json();
      setCharacter(data);
    };
    fetchCharacter();
  }, [id]);

  useEffect(() => {
    const fetchFilms = async function () {
      const response = await fetch(
        `http://localhost:5050/api/films/${id}/characters`
      );
      const data = await response.json();
      setFilms(data);
    };
    fetchFilms();
    console.log(films);
  
  
  }, [id]);
  return (
    <>
      <div className="container">
        <div className="card star-wars-card" style={{ width: "25rem" }}>
          <div className="card-body">
            <h5 className="card-title">{character[0]?.name}</h5>
            <ul className="list-group">
              <li className="list-group-item">{character[0]?.gender}</li>
              <li className="list-group-item">{character[0]?.skin_color}</li>
              <li className="list-group-item">{character[0]?.hair_color}</li>
              <li className="list-group-item">{character[0]?.height}</li>
              <li className="list-group-item">{character[0]?.eye_color}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(CharacterPage);
