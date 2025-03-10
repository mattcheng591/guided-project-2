import mongoose from "mongoose";

const filmsCharacterSchema = new mongoose.Schema({
  film_id: {
    type: Number,
    required: true,
    unique: true,
  },
  character_id: {
    type: Number,
    required: true,
    unique: true,
  },
});

const FilmsCharacter = mongoose.model("FilmsCharacter", characterSchema);

export default FilmCharactert;
