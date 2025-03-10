import mongoose from "mongoose";

const filmsPlanetSchema = new mongoose.Schema({
  film_id: {
    type: Number,
    required: true,
    unique: true,
  },
  planet_id: {
    type: Number,
    required: true,
    unique: true,
  },
});

const FilmsPlanet = mongoose.model("FilmsPlanet", filmsPlanetSchema);

export default FilmsPlanet;
