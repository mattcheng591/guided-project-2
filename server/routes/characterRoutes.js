import express from "express";
import { getCharacterById } from "../controllers/characterController.js";

const router = express.Router();

router.get("/:id", getCharacterById);

export default router;
