import express, { json } from "express";

import planetsRoutes from "../routes/planetsRoutes.js";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

app.use("/api/planets", planetsRoutes);

export default app;
