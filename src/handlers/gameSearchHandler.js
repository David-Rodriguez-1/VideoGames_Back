const {findGameByName, findAllGame} = require('../controllers/findAllGamesController')

const gameSearchHandler = async (req, res) => {
  const { search } = req.query;
  try {
    const results = search ? await findGameByName(search) : await findAllGame();
    
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = gameSearchHandler
