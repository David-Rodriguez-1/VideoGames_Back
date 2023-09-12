const CreateVideoGame = require('../controllers/createGameController')

const createGameHandler = async (req, res) => {
  try {
    const {
      name,
      description,
      platforms,
      background_image,
      releaseDate,
      rating,
      genres,
    } = req.body;
    const newGame = await CreateVideoGame(
      name,
      description,
      platforms,
      background_image,
      releaseDate,
      parseInt(rating)
    );
    newGame.addGenre(genres)
    res.status(201).json(newGame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createGameHandler;