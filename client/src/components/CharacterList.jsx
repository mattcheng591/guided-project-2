import SingleCharacter from "./SingleCharacter";

function Character(props) {
  const characterList = props.characters.map((character) => (
    <div className="col-md-3" key={character.id}>
      <SingleCharacter name={character.name} id={character.id}  />
    </div>
  ));

  return (
    <div className="container">
      <div className="row">{characterList}</div>
    </div>
  );
}

export default Character;
