import Character from "../models/characterModel.js";

export const getCharacterById = async (req, res) => {
  try {
    const character = await Character.find({ id: req.params.id });
    if (!character) {
      return res.status(404).json({ message: "Character not found" });
    }
    res.status(200).json(planet);
  } catch (err) {
    res.status(500).json({ message: "Error fetching character", err });
  }
};
