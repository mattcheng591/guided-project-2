import SingleCharacter from "./SingleCharacter";

function Character(props) {
  const characterList = props.characters.map((character) => (
    <SingleCharacter key={character.id} name={character.name} />
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">{characterList}</div>
      </div>
    </div>
  );
}

export default Character;
