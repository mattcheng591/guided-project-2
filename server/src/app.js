import express, { json } from "express";

import planetsRoutes from "../routes/planetsRoutes.js";
import filmsRoutes from "../routes/filmsRoutes.js"
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

app.use("/api/planets", planetsRoutes);
app.use("/api/films", filmsRoutes);
export default app;
