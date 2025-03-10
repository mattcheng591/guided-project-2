import express from "express";
import {
  getAllCharacters,
  getCharacterById,
  getFilmFromCharacter,
} from "../controllers/characterController.js";

const router = express.Router();

router.get("/", getAllCharacters);
router.get("/:id", getCharacterById);
router.get("/:id/films", getFilmFromCharacter);

export default router;
