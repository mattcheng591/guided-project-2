import express from "express";
import { getCharacterById } from "../controllers/characterController.js";

const router = express.Router();

router.get("/:id", getCharacterById);
router.get("/:id/films", getFilmsFromCharacter);

export default router;
