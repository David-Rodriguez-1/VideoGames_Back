const { Videogame } = require("../db");

const CreateVideoGame = async (
  name,
  description,
  platforms,
  background_image,
  releaseDate,
  rating,
  genres
) =>
  await Videogame.create({
    name,
    description ,
    platforms,
    background_image,
    releaseDate,
    rating,
    genres
  });

module.exports = CreateVideoGame;
