const { Router } = require('express')
const genresHandler = require('../handlers/genresHandler')

const genreRouter = Router();

genreRouter.get('/', genresHandler)

module.exports = genreRouter;