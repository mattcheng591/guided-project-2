import { memo } from "react";
import { useNavigate } from "react-router-dom";

function SingleFilm(props) {
  const navigate = useNavigate();
  console.log(props.id);
  const handleClick = () => {
    // navigate(`/film/${props.id}`);
  };
  return (
    <>
      <div type="button" onClick={handleClick} className="btn btn-primary">
        <h5 className="card-title">{props.name}</h5>
      </div>
    </>
  );
}

export default memo(SingleFilm);
