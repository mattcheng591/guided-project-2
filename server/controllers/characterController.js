import Character from "../models/characterModel.js";
import FilmsCharacter from "../models/filmsCharactersModel.js";

export const getCharacterById = async (req, res) => {
  try {
    const character = await Character.find({ id: req.params.id });
    if (!character) {
      return res.status(404).json({ message: "Character not found" });
    }
    res.status(200).json(character);
  } catch (err) {
    res.status(500).json({ message: "Error fetching character", err });
  }
};


export const getFilmFromCharacter= async (req, res) => {
  try {
    const characterFilm = await FilmsCharacter.find({
      character_id: req.params.id,
    });
    if (!characterFilm) {
      return res.status(404).json({ message: "characterFilm not found" });
    }
    res.status(200).json(characterFilm);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching from films_characters", err });
  }
};
