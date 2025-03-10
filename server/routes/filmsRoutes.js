import express from "express";
import { getFilmById, getAllFilms, getCharacterFromFilm, getPlanetFromFilm } from "../controllers/filmController.js";

const router = express.Router();

router.get("/:id", getFilmById);
router.get("/", getAllFilms);
router.get("/:id/characters", getCharacterFromFilm);
router.get("/:id/planets", getPlanetFromFilm);
export default router;