import express from "express";
import { getFilmById, getAllFilms, getCharacterFromFilm } from "../controllers/filmController.js";

const router = express.Router();

router.get("/:id", getFilmById);
router.get("/", getAllFilms);
router.get("/:id/characters", getCharacterFromFilm);
export default router;