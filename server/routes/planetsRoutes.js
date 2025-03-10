import express from "express";
import { getPlanetById } from "../controllers/planetController.js";

const router = express.Router();

router.get("/:id", getPlanetById);

export default router;
