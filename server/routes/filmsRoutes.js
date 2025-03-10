import express from "express";
import { getFilmById, getAllFilms, getFilmCharacters } from "../controllers/filmController.js";

const router = express.Router();

router.get("/:id", getFilmById);
router.get("/", getAllFilms);
router.get("/:id/characters", getFilmCharacters);
export default router;