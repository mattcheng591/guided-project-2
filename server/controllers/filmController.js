import Film from "../models/filmModel.js";

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