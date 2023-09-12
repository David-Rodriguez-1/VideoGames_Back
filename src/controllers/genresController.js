const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Genre } = require("../db");

const getGenres = async () => {
  const { data } = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );
  const genres = data.results.map((result) => {
    const { id, name } = result;
    return { id, name };
  });

  for (let i = 0; i < genres.length; i++) {
    await Genre.findOrCreate({
      where: { id: genres[i].id },
      defaults: { name: genres[i].name },
    });
  }
  return genres;
};
module.exports = getGenres;
