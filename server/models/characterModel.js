import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
  },
  skin_color: {
    type: String,
    required: true,
    trim: true,
  },
  hair_color: {
    type: String,
    required: true,
    trim: true,
  },
  height: {
    type: String,
    required: true,
    trim: true,
  },
  eye_color: {
    type: String,
    required: true,
    trim: true,
  },
  mass: {
    type: String,
    required: true,
    trim: true,
  },
  homeworld: {
    type: Number,
    required: true,
  },
  birth_year: {
    type: String,
    required: true,
    trim: true,
  },
});

const Character = mongoose.model("Character", characterSchema);

export default Character;
