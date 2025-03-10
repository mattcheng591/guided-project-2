import Planet from "../models/planetModel.js";

export const getPlanetById = async (req, res) => {
  try {
    const planet = await Planet.find({ id: req.params.id });
    if (!planet) {
      return res.status(404).json({ message: "Planet not found" });
    }
    res.status(200).json(planet);
  } catch (err) {
    res.status(500).json({ message: "Error fetching planet", err });
  }
};
