const getGenres = require("../controllers/genresController");

const genresHandler = async (req, res) => {
  try {
    const { name } = req.body;
    const newGenre = await getGenres(name);
    res.status(201).json(newGenre);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = genresHandler;