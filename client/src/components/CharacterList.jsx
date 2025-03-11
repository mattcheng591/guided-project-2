import SingleCharacter from "./SingleCharacter";

function Character(props) {
  const characterList = props.characters.map((character) => (
    <div className="col-md-3" key={character.id}>
      <SingleCharacter name={character.name} id={character.id} />
    </div>
  ));

  return (
    <div className="container">
      <h1 className="text-center">Star Wars Universe Lookup</h1>
      <hr />
      <div className="row justify-content-center">{characterList}</div>
    </div>
  );
}

export default Character;
