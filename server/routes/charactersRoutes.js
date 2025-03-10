import express from "express";
import { getCharacterById, getFilmFromCharacter} from "../controllers/characterController.js";


const router = express.Router();

router.get("/:id", getCharacterById);
router.get("/:id/films", getFilmFromCharacter);

export default router;
