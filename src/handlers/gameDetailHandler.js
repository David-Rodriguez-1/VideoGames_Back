const {
  findOneGameDB,
  findOneGameAPI,
} = require("../controllers/detailGameController");

const getVideogameByIdHandler = async (req, res) => {
  const { idVideogame } = req.params;
  try {
    if (idVideogame.includes("-")) {
      const game = await findOneGameDB(idVideogame);
      return res.status(200).json(game);
    }
    const game = await findOneGameAPI(idVideogame);
    res.status(200).json(game);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getVideogameByIdHandler
