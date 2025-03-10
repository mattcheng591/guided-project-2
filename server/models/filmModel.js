import mongoose from 'mongoose';

const filmSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  producer: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  episode_id: {
    type: Number,
    required: true,
  },
  director: {
    type: String,
    required: true,
    trim: true,
  },
  release_date: {
    type: Date,
    required: true,
  },
  opening_crawl: {
    type: String,
    required: true,
  },
});

const Film = mongoose.model('Film', filmSchema);

export default Film;