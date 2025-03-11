import Film from "../models/filmModel.js";
import Character from "../models/characterModel.js";
import FilmsPlanet from "../models/filmsPlanetsModel.js";
import FilmsCharacter from "../models/filmsCharactersModel.js";

export const getFilmById = async (req, res) => {
  try {
    const film = await Film.findOne({ id: req.params.id });
    if (!film) {
      return res.status(404).json({ message: "Film not found" });
    }
    res.status(200).json(film);
  } catch (err) {
    res.status(500).json({ message: "Error fetching film", err });
  }
};

export const getAllFilms = async (req, res) => {
  try {
    const films = await Film.find();
    if (!films) {
      return res.status(404).json({ message: "Films not found" });
    }
    res.status(200).json(films);
  } catch (err) {
    res.status(500).json({ message: "Error fetching films", err });
  }
};

export const getCharacterFromFilm = async (req, res) => {
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

export const getPlanetFromFilm = async (req, res) => {
  try {
    const filmsPlanet = await FilmsPlanet.find({
      film_id: req.params.id,
    });
    if (!filmsPlanet) {
      return res.status(404).json({ message: "FilmsPlanet not found" });
    }
    res.status(200).json(filmsPlanet);
  } catch (err) {
    res.status(500).json({ message: "Error fetching from films_planets", err });
  }
};
