import { memo } from "react";
import { useNavigate } from "react-router-dom";

function SingleCharacter(props) {
  const navigate = useNavigate();
  console.log(props.id);
  const handleClick = () => {
    // Navigate to the CharacterPage with the specific character ID
    navigate(`/character/${props.id}`);
  };
  return (
    <>
      <div type="button" onClick={handleClick} className="button">
        <h5 className="card-title">{props.name}</h5>
      </div>
    </>
  );
}

export default memo(SingleCharacter);
