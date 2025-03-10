import express from "express";
import { getFilmById } from "../controllers/filmController.js";

const router = express.Router();

router.get("/:id", getFilmById);

export default router;