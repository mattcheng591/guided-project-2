import express from "express";
import {
  getPlanetById,
  getFilmsFromPlanet,
  getCharactersFromPlanet,
} from "../controllers/planetController.js";

const router = express.Router();

router.get("/:id", getPlanetById);
router.get("/:id/films", getFilmsFromPlanet);
router.get("/:id/characters", getCharactersFromPlanet);

export default router;
