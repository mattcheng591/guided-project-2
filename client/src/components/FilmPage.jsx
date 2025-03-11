import { memo } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function FilmPage() {
  const { id } = useParams();
  const [film, setFilm] = useState([]);
  useEffect(() => {
    const fetchFilm = async function () {
      const response = await fetch(`http://localhost:5050/api/films/${id}`);
      console.log(id);
      const data = await response.json();
      setFilm(data);
    };
    fetchFilm();
  }, [id]);
  return (
    <>
      <div className="card" style={{ width: "400rem" }}>
        <div className="card-body">
          <h5 className="card-title">{film[0]?.title}</h5>
          <ul className="list-group">
            <li className="list-group-item">{film[0]?.producer}</li>
            <li className="list-group-item">{film[0]?.episode_id}</li>
            <li className="list-group-item">{film[0]?.director}</li>
            <li className="list-group-item">{film[0]?.release_date}</li>
            <li className="list-group-item">{film[0]?.opening_crawl}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default memo(FilmPage);
