import mongoose from "mongoose";

const planetSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  climate: {
    type: String,
    required: true,
    trim: true,
  },
  surface_water: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  diameter: {
    type: String,
    required: true,
    trim: true,
  },
  rotation_period: {
    type: String,
    required: true,
    trim: true,
  },
  terrain: {
    type: String,
    required: true,
    trim: true,
  },
  gravity: {
    type: String,
    required: true,
    trim: true,
  },
  orbital_period: {
    type: String,
    required: true,
    trim: true,
  },
  population: {
    type: String,
    required: true,
    trim: true,
  },
});

const Planet = mongoose.model("Planet", planetSchema);

export default Planet;
