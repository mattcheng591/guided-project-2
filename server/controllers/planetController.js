import Planet from "../models/planetModel.js";
// import Film from "../models/filmModel.js";
// import Character from "../models/characterModel.js";
import FilmsPlanet from "../models/filmsPlanetsModel.js";
import FilmsCharacter from "../models/filmsCharactersModel.js";

export const getPlanetById = async (req, res) => {
  try {
    const planet = await Planet.find({ id: req.params.id });
    if (!planet) {
      return res.status(404).json({ message: "Planet not found" });
    }
    res.status(200).json(planet);
  } catch (err) {
    res.status(500).json({ message: "Error fetching planet", err });
  }
};

export const getFilmsFromPlanet = async (req, res) => {
  try {
    const filmsPlanet = await FilmsPlanet.find({
      planet_id: req.params.id,
    });
    if (!filmsPlanet) {
      return res.status(404).json({ message: "FilmsPlanet not found" });
    }
    res.status(200).json(filmsPlanet);
  } catch (err) {
    res.status(500).json({ message: "Error fetching from films_planets", err });
  }
};

export const getCharactersFromPlanet = async (req, res) => {
  try {
    const filmsCharacter = await FilmsCharacter.find({
      planet_id: req.params.id,
    });
    if (!filmsCharacter) {
      return res.status(404).json({ message: "FilmsCharacter not found" });
    }
    res.status(200).json(filmsCharacter);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching from films_characters", err });
  }
};
