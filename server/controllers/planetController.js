import Planet from "../models/planetModel.js";
import Film from "../models/filmModel.js";
import Character from "../models/characterModel.js";
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
        const film_id = await 
    } catch (err) {
        res.status(500).json({ message: "Error fetching films from planet", err });
    }
};

export const getCharactersFromPlanet = async (req, res) => {};
