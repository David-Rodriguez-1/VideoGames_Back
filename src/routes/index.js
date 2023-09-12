const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genreRouter = require("./genresRouter");
const videoGamesRoutes = require('./VideoGamesRouter');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", videoGamesRoutes);
router.use("/genres", genreRouter);

module.exports = router;
