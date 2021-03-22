let {Sequelize, DataTypes} = require("sequelize");
let db = require("../db");

const Biblioteca = db.define("Biblioteca",
    {
        
        Nome: DataTypes.STRING,
        UrlLink: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        Email: DataTypes.STRING
    }
)

module.exports = Biblioteca;