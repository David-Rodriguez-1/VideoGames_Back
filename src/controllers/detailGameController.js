const { Videogame, Genre } = require("../db");
require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

const findOneGameDB = async (idVideogame) => {
  const dBGame = await Videogame.findByPk(idVideogame, {
    include: {
      model: Genre,
      atributes: ["name"],
      through: {
        atributes: [],
      }
    }
  });
  let {
    id,
    name,
    description,
    platforms,
    background_image,
    released,
    rating,
    genres,
  } = dBGame;
  genres = genres.map((gen) => gen.name);

  const gameDetailDB = {
    id,
    name,
    description,
    platforms,
    background_image,
    released,
    rating,
    genres,
  };
  return [gameDetailDB]
};

const findOneGameAPI = async (idVideogame) => {
  const resp = await axios.get(
    `https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`
  );
  const respApi = [resp.data].map((game) => {
    return {
      id: game.id,
      name: game.name,
      description: game.description,
      platforms: game.platforms.map((p) => p.platform.name),
      background_image: game.background_image,
      background_image_additional: game.background_image_additional,
      releasedDate: game.releasedDate,
      rating: game.rating,
      genres: game.genres.map((g) => g.name),
    };
  });
  return respApi;
};

module.exports = { findOneGameDB, findOneGameAPI };
