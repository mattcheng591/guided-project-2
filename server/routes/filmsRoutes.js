import express from "express";
import { getFilmById, getAllFilms } from "../controllers/filmController.js";

const router = express.Router();

router.get("/:id", getFilmById);
router.get("/", getAllFilms);
export default router;