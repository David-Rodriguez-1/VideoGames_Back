const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "videogame",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      platforms: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      background_image: {
        type: DataTypes.STRING,
      },
      releaseDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      rating: {
        type: DataTypes.DECIMAL,
      },
    },
    {
      timestamps: false,
      createAt: "created",
      updatedAt: false,
    }
  );
};
